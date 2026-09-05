import type { OptimizationApiResponse } from './ai-optimization-engine.ts'

const PROMPTPRO_OPTIMIZE_ENDPOINT = 'https://prompt-pro-psi.vercel.app/api/optimize'
const API_TIMEOUT_MS = 16_000

function logApiRequest(
  result: unknown,
  status: number | undefined,
  startedAt: number,
): void {
  const isSuccess = typeof result === 'object'
    && result !== null
    && 'ok' in result
    && result.ok === true
  const errorCode = !isSuccess
    && typeof result === 'object'
    && result !== null
    && 'error' in result
    && typeof result.error === 'object'
    && result.error !== null
    && 'code' in result.error
    && typeof result.error.code === 'string'
    ? result.error.code
    : undefined

  console.info(JSON.stringify({
    source: 'promptpro-api-client',
    endpoint: '/api/optimize',
    success: isSuccess,
    ...(status === undefined ? {} : { status }),
    ...(errorCode ? { errorCode } : {}),
    durationMs: Date.now() - startedAt,
  }))
}

function errorResponse(
  code: 'invalid-input' | 'network-error' | 'service-error' | 'timeout' | 'malformed-response',
  message: string,
): OptimizationApiResponse {
  return { ok: false, error: { code, message } }
}

export async function requestPromptProOptimization(
  payload: Readonly<Record<string, unknown>>,
): Promise<OptimizationApiResponse> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS)
  const startedAt = Date.now()
  let status: number | undefined

  try {
    const response = await fetch(PROMPTPRO_OPTIMIZE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
    status = response.status

    let body: unknown
    try {
      body = await response.json()
    } catch {
      const result = errorResponse('malformed-response', 'PromptPro API returned invalid JSON.')
      logApiRequest(result, status, startedAt)
      return result
    }

    if (!response.ok) {
      if (
        typeof body === 'object'
        && body !== null
        && 'error' in body
        && typeof body.error === 'object'
        && body.error !== null
        && 'code' in body.error
        && 'message' in body.error
        && typeof body.error.code === 'string'
        && typeof body.error.message === 'string'
      ) {
        const supportedCodes = ['invalid-input', 'service-error', 'timeout', 'malformed-response']
        const code = supportedCodes.includes(body.error.code)
          ? body.error.code as 'invalid-input' | 'service-error' | 'timeout' | 'malformed-response'
          : 'service-error'
        const result = errorResponse(code, body.error.message)
        logApiRequest(result, status, startedAt)
        return result
      }
      const result = errorResponse('service-error', 'PromptPro API could not optimize this prompt.')
      logApiRequest(result, status, startedAt)
      return result
    }

    const result = body as OptimizationApiResponse
    logApiRequest(result, status, startedAt)
    return result
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      const result = errorResponse('timeout', 'PromptPro API request timed out.')
      logApiRequest(result, status, startedAt)
      return result
    }
    const result = errorResponse('network-error', 'Could not reach the PromptPro API.')
    logApiRequest(result, status, startedAt)
    return result
  } finally {
    clearTimeout(timeoutId)
  }
}
