export const DEEPSEEK_CHAT_COMPLETIONS_ENDPOINT = 'https://api.deepseek.com/chat/completions'
export const DEFAULT_AI_MODEL = 'deepseek-v4-flash'
export const PROVIDER_TIMEOUT_MS = 15_000
export const MAX_PROMPT_LENGTH = 12_000

export const OPTIMIZATION_SYSTEM_PROMPT = `You are PromptPro's prompt optimization engine.

Rewrite the user's prompt so a downstream AI can produce a better result.

Rules:
1. Preserve the user's original intent and requested outcome.
2. Never invent facts about the user, their company, audience, codebase, data, budget, timeline, or constraints.
3. Improve clarity, specificity, and actionability.
4. Add useful constraints only when they materially improve the likely result.
5. Add an output format only when it meaningfully helps the task.
6. Add a role or expertise frame only when it is useful.
7. Keep simple prompts concise; do not mechanically make every prompt longer.
8. Write the improved prompt in the same language as the original input.
9. When critical information is missing, instruct the downstream AI to ask concise clarifying questions before proceeding instead of fabricating details.
10. Return only the required JSON object, without commentary or Markdown code fences.

Adapt to the actual task, including general requests, writing, coding, research, marketing, SEO, and image generation. Do not force every prompt into a fixed Role/Background/Objective/Workflow/Constraints template.

The response must be valid JSON. Output JSON only, using exactly this structure:
{
  "improvedPrompt": "The rewritten prompt in the original input language",
  "detectedLanguage": "zh",
  "detectedType": "writing",
  "warnings": []
}

detectedLanguage must be "zh" or "en". detectedType must be one of "general", "writing", "coding", "research", "marketing", "seo", or "image". warnings must be an array of strings.`

export type ServerErrorCode =
  | 'invalid-input'
  | 'service-error'
  | 'timeout'
  | 'malformed-response'

export interface OptimizeApiInput {
  originalText: string
  locale: 'zh' | 'en'
  style: 'concise' | 'professional' | 'structured' | 'deep-analysis' | 'content-creation' | 'code'
  platform: string
}

export interface OptimizeApiResult {
  improvedText: string
  detectedLanguage: 'zh' | 'en'
  detectedType: string
  warnings?: readonly string[]
  metadata: Readonly<Record<string, unknown>>
}

export class ServerOptimizationError extends Error {
  readonly code: ServerErrorCode
  readonly status: number
  readonly cause?: unknown

  constructor(code: ServerErrorCode, message: string, status: number, cause?: unknown) {
    super(message)
    this.name = 'ServerOptimizationError'
    this.code = code
    this.status = status
    this.cause = cause
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function parseOptimizeInput(value: unknown): OptimizeApiInput {
  if (!isRecord(value)) {
    throw new ServerOptimizationError('invalid-input', 'Request body must be a JSON object.', 400)
  }

  const originalText = value.originalText
  const locale = value.locale
  const style = value.style
  const platform = value.platform
  const styles = ['concise', 'professional', 'structured', 'deep-analysis', 'content-creation', 'code']

  if (typeof originalText !== 'string' || !originalText.trim()) {
    throw new ServerOptimizationError('invalid-input', 'originalText must be a non-empty string.', 400)
  }
  if (originalText.length > MAX_PROMPT_LENGTH) {
    throw new ServerOptimizationError('invalid-input', `originalText must not exceed ${MAX_PROMPT_LENGTH} characters.`, 400)
  }
  if (locale !== 'zh' && locale !== 'en') {
    throw new ServerOptimizationError('invalid-input', 'locale must be zh or en.', 400)
  }
  if (typeof style !== 'string' || !styles.includes(style)) {
    throw new ServerOptimizationError('invalid-input', 'style is not supported.', 400)
  }
  if (typeof platform !== 'string' || !platform.trim() || platform.length > 64) {
    throw new ServerOptimizationError('invalid-input', 'platform must be a non-empty string.', 400)
  }

  return {
    originalText: originalText.trim(),
    locale,
    style: style as OptimizeApiInput['style'],
    platform: platform.trim(),
  }
}

export function buildDeepSeekRequest(input: OptimizeApiInput, model: string): Readonly<Record<string, unknown>> {
  return {
    model,
    messages: [
      {
        role: 'system',
        content: OPTIMIZATION_SYSTEM_PROMPT,
      },
      {
        role: 'user',
        content: JSON.stringify({
          originalText: input.originalText,
          requestedStyle: input.style,
          targetPlatform: input.platform,
          uiLocale: input.locale,
        }),
      },
    ],
    response_format: { type: 'json_object' },
    thinking: { type: 'disabled' },
    max_tokens: 1800,
  }
}

function extractDeepSeekContent(response: unknown): string {
  if (!isRecord(response)) return ''
  const firstChoice = Array.isArray(response.choices) ? response.choices[0] : undefined
  if (!isRecord(firstChoice) || !isRecord(firstChoice.message)) return ''
  return typeof firstChoice.message.content === 'string' ? firstChoice.message.content : ''
}

export function parseDeepSeekResponse(response: unknown): Omit<OptimizeApiResult, 'metadata'> {
  const content = extractDeepSeekContent(response)
  if (!content.trim()) {
    throw new ServerOptimizationError('malformed-response', 'AI provider returned no structured output.', 502)
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(content)
  } catch (error) {
    throw new ServerOptimizationError('malformed-response', 'AI provider returned invalid JSON.', 502, error)
  }

  if (!isRecord(parsed)) {
    throw new ServerOptimizationError('malformed-response', 'AI provider returned an invalid result.', 502)
  }

  const improvedPrompt = parsed.improvedPrompt
  const detectedLanguage = parsed.detectedLanguage
  const detectedType = parsed.detectedType
  const warnings = parsed.warnings

  if (
    typeof improvedPrompt !== 'string'
    || !improvedPrompt.trim()
    || (detectedLanguage !== 'zh' && detectedLanguage !== 'en')
    || typeof detectedType !== 'string'
    || !['general', 'writing', 'coding', 'research', 'marketing', 'seo', 'image'].includes(detectedType)
    || !Array.isArray(warnings)
    || !warnings.every(item => typeof item === 'string')
  ) {
    throw new ServerOptimizationError('malformed-response', 'AI provider returned an invalid result.', 502)
  }

  return {
    improvedText: improvedPrompt.trim(),
    detectedLanguage,
    detectedType,
    warnings,
  }
}

export async function optimizeWithDeepSeek(
  input: OptimizeApiInput,
  options: {
    apiKey: string
    model?: string
    fetchImpl?: typeof fetch
    timeoutMs?: number
    requestId?: string
  },
): Promise<OptimizeApiResult> {
  const requestId = options.requestId ?? crypto.randomUUID()
  const startedAt = Date.now()
  const model = options.model?.trim() || DEFAULT_AI_MODEL
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), options.timeoutMs ?? PROVIDER_TIMEOUT_MS)

  try {
    const response = await (options.fetchImpl ?? fetch)(DEEPSEEK_CHAT_COMPLETIONS_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${options.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(buildDeepSeekRequest(input, model)),
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new ServerOptimizationError('service-error', 'AI provider request failed.', 502)
    }

    let providerBody: unknown
    try {
      providerBody = await response.json()
    } catch (error) {
      throw new ServerOptimizationError('malformed-response', 'AI provider returned invalid JSON.', 502, error)
    }

    return {
      ...parseDeepSeekResponse(providerBody),
      metadata: {
        requestId,
        model,
        durationMs: Date.now() - startedAt,
      },
    }
  } catch (error) {
    if (error instanceof ServerOptimizationError) throw error
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ServerOptimizationError('timeout', 'AI provider request timed out.', 504, error)
    }
    throw new ServerOptimizationError('service-error', 'AI provider request failed.', 502, error)
  } finally {
    clearTimeout(timeoutId)
  }
}
