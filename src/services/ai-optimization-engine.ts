import type { Locale } from '../shared/types.ts'
import {
  OptimizationEngineError,
  type OptimizationEngine,
  type OptimizationErrorCode,
  type OptimizationRequest,
  type OptimizationResult,
} from './optimization-engine.ts'

export const AI_ENGINE_ID = 'promptpro-ai-v1'
export const AI_ENGINE_TIMEOUT_MS = 18_000

interface ApiSuccessResponse {
  ok: true
  result: {
    improvedText: string
    detectedLanguage: Locale
    detectedType: string
    warnings?: readonly string[]
    metadata?: Readonly<Record<string, unknown>>
  }
}

interface ApiErrorResponse {
  ok: false
  error: {
    code: OptimizationErrorCode
    message: string
  }
}

export type OptimizationApiResponse = ApiSuccessResponse | ApiErrorResponse
export type OptimizationTransport = (
  payload: Readonly<Record<string, unknown>>,
) => Promise<unknown>

interface AIOptimizationEngineOptions {
  transport?: OptimizationTransport
  timeoutMs?: number
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isErrorCode(value: unknown): value is OptimizationErrorCode {
  return [
    'invalid-input',
    'network-error',
    'service-error',
    'timeout',
    'malformed-response',
    'engine-failed',
    'cancelled',
  ].includes(String(value))
}

function mapRequest(request: Readonly<OptimizationRequest>): Readonly<Record<string, unknown>> {
  return {
    originalText: request.originalText,
    locale: request.locale,
    style: request.style ?? 'structured',
    platform: request.platform,
  }
}

function mapResponse(
  request: Readonly<OptimizationRequest>,
  response: unknown,
): OptimizationResult {
  if (!isRecord(response) || response.ok !== true || !isRecord(response.result)) {
    throw new OptimizationEngineError(
      'malformed-response',
      'PromptPro API returned an invalid response.',
    )
  }

  const { result } = response
  const improvedText = result.improvedText
  const detectedLanguage = result.detectedLanguage
  const detectedType = result.detectedType
  const warnings = result.warnings
  const metadata = result.metadata

  if (
    typeof improvedText !== 'string'
    || !improvedText.trim()
    || (detectedLanguage !== 'zh' && detectedLanguage !== 'en')
    || typeof detectedType !== 'string'
    || !detectedType.trim()
    || (warnings !== undefined && (!Array.isArray(warnings) || !warnings.every(item => typeof item === 'string')))
    || (metadata !== undefined && !isRecord(metadata))
  ) {
    throw new OptimizationEngineError(
      'malformed-response',
      'PromptPro API returned an invalid optimization result.',
    )
  }

  return {
    originalText: request.originalText,
    improvedText: improvedText.trim(),
    detectedLanguage,
    detectedType,
    engineId: AI_ENGINE_ID,
    ...(warnings ? { warnings: [...warnings] } : {}),
    metadata: {
      ...(metadata ?? {}),
      platform: request.platform,
      style: request.style ?? 'structured',
    },
  }
}

async function runtimeTransport(payload: Readonly<Record<string, unknown>>): Promise<unknown> {
  try {
    return await chrome.runtime.sendMessage({
      type: 'PROMPTPRO_AI_OPTIMIZE',
      payload,
    })
  } catch (error) {
    throw new OptimizationEngineError(
      'network-error',
      'Could not reach the PromptPro API.',
      error,
    )
  }
}

export class AIOptimizationEngine implements OptimizationEngine {
  readonly id = AI_ENGINE_ID
  private readonly transport: OptimizationTransport
  private readonly timeoutMs: number

  constructor(options: AIOptimizationEngineOptions = {}) {
    this.transport = options.transport ?? runtimeTransport
    this.timeoutMs = options.timeoutMs ?? AI_ENGINE_TIMEOUT_MS
  }

  async optimize(request: Readonly<OptimizationRequest>): Promise<OptimizationResult> {
    if (typeof request.originalText !== 'string' || !request.originalText.trim()) {
      throw new OptimizationEngineError('invalid-input', 'A non-empty originalText is required.')
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined
    const timeout = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(() => {
        reject(new OptimizationEngineError('timeout', 'AI optimization timed out.'))
      }, this.timeoutMs)
    })

    try {
      const response = await Promise.race([this.transport(mapRequest(request)), timeout])

      if (isRecord(response) && response.ok === false && isRecord(response.error)) {
        const code = isErrorCode(response.error.code) ? response.error.code : 'service-error'
        const message = typeof response.error.message === 'string'
          ? response.error.message
          : 'PromptPro API could not optimize this prompt.'
        throw new OptimizationEngineError(code, message)
      }

      return mapResponse(request, response)
    } catch (error) {
      if (error instanceof OptimizationEngineError) throw error
      throw new OptimizationEngineError('network-error', 'Could not reach the PromptPro API.', error)
    } finally {
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }
  }
}
