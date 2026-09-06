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
7. Scale the rewrite to the task. Keep atomic requests concise, but do not leave broad or underspecified tasks as shallow paraphrases.
8. Write the improved prompt in the same language as the original input.
9. When critical information is missing, instruct the downstream AI to ask concise clarifying questions before proceeding instead of fabricating details.
10. Return only the required JSON object, without commentary or Markdown code fences.

Apply the requestedStyle as an optimization strategy:
- concise: Produce the shortest clear, executable version. Add only essential missing guidance.
- professional: Improve precision, tone, terminology, and organization without unnecessary expansion.
- structured: Add the minimum sufficient structure and execution clarity for the task's actual complexity. Structured means clearer, better organized, and appropriately constrained; it does not mean more verbose or expanded into a complete specification.
- deep-analysis: Add relevant analytical dimensions, evidence expectations, assumptions, alternatives, tradeoffs, risks, and a clear conclusion format.
- content-creation: Add useful audience, purpose, channel, tone, length, structure, readability, and call-to-action guidance.
- code: Add relevant technical context, functional requirements, inputs and outputs, constraints, edge cases, error handling, and acceptance criteria. Do not assume an unspecified stack or codebase.

Adapt the structure to the detected task:
- For writing, include useful guidance about audience, purpose, tone, narrative or content structure, length, and quality criteria.
- For coding, include functional behavior, relevant interfaces, constraints, edge cases, error states, and acceptance criteria; preserve unknown technical choices as questions or placeholders when they are critical.
- For research and analysis, include scope, key questions, evidence standards, assumptions, comparisons, risks, and the expected conclusion format.
- For marketing and SEO, include audience, channel, objective, message, format, and measurable or reviewable quality criteria when relevant.
- For image generation, include subject, composition, visual style, lighting, framing, aspect ratio, and exclusions when they help express the user's intent.

Use reasonable task-derived defaults when they improve execution and do not claim facts about the user. If a missing detail is truly critical, tell the downstream AI to ask for it. The final prompt may use named sections, numbered steps, or bullets when useful, but structure must serve the task rather than imitate a fixed template.

When requestedStyle is "structured", follow this policy in addition to the general rules above:
- Preserve intent exactly. Improve the structure of the request; do not invent its specification, features, implementation choices, business rules, or product facts.
- Never fill in user-specific details such as dates, budgets, audiences, APIs, technology preferences, company background, or other facts the user did not provide. Do not add arbitrary numeric requirements such as word counts, password lengths, or list sizes.
- Act only as a prompt enhancer. State what the downstream AI should analyze, produce, verify, or organize, but do not pre-answer the task with conclusions, alleged causes, solutions, selling points, or implementation decisions.
- Apply structure adaptively. For a simple task, normally use one or two natural paragraphs with no headings or large checklist. For a medium task, use only a few bullets or steps when they clarify the goal, requirements, or output. Reserve explicit sections such as Objective, Context, Analysis, Constraints, and Output for genuinely complex tasks, and include only the sections that help.
- Judge information sufficiency before requesting clarification. If the prompt is sufficient, improve it directly without questions. If missing details do not prevent useful work, keep them open or use clear placeholders. Only when missing information would materially change the result, instruct the downstream AI to ask no more than three high-impact clarification questions before proceeding.
- Treat the task-specific dimensions above as optional considerations, never as a checklist. Include a dimension only when it will materially improve downstream execution.
- Before adding each sentence, ask whether it will improve the downstream AI's execution quality. If not, omit it. Prefer minimal sufficient enhancement over length.
- Keep the improved prompt in the original input language unless the user explicitly requests another language.

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
