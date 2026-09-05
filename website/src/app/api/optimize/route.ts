import {
  ServerOptimizationError,
  optimizeWithDeepSeek,
  parseOptimizeInput,
} from '@/lib/ai-optimization'

export const runtime = 'nodejs'

function getAllowedOrigins(): ReadonlySet<string> {
  return new Set(
    (process.env.PROMPTPRO_ALLOWED_ORIGINS ?? '')
      .split(',')
      .map(origin => origin.trim())
      .filter(Boolean),
  )
}

function corsHeaders(origin: string | null): HeadersInit {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    Vary: 'Origin',
  }
  if (origin && getAllowedOrigins().has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Content-Type'
  }
  return headers
}

function json(body: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(origin),
  })
}

function isAllowedOrigin(origin: string | null): boolean {
  return origin !== null && getAllowedOrigins().has(origin)
}

function logRequest(fields: Readonly<Record<string, unknown>>): void {
  console.info(JSON.stringify({ source: 'promptpro-optimize-api', ...fields }))
}

export function OPTIONS(request: Request): Response {
  const origin = request.headers.get('origin')
  if (!isAllowedOrigin(origin)) {
    return json({ ok: false, error: { code: 'service-error', message: 'Origin is not allowed.' } }, 403, origin)
  }
  return new Response(null, { status: 204, headers: corsHeaders(origin) })
}

export async function POST(request: Request): Promise<Response> {
  const origin = request.headers.get('origin')
  const requestId = crypto.randomUUID()
  const startedAt = Date.now()

  if (!isAllowedOrigin(origin)) {
    logRequest({ requestId, engine: 'promptpro-ai-v1', durationMs: Date.now() - startedAt, success: false, errorCode: 'origin-denied' })
    return json({ ok: false, error: { code: 'service-error', message: 'Origin is not allowed.' } }, 403, origin)
  }

  try {
    const apiKey = process.env.DEEPSEEK_API_KEY
    if (!apiKey) {
      throw new ServerOptimizationError('service-error', 'AI service is not configured.', 503)
    }

    let body: unknown
    try {
      body = await request.json()
    } catch (error) {
      throw new ServerOptimizationError('invalid-input', 'Request body must be valid JSON.', 400, error)
    }

    const input = parseOptimizeInput(body)
    const result = await optimizeWithDeepSeek(input, {
      apiKey,
      model: process.env.AI_MODEL,
      requestId,
    })

    logRequest({ requestId, engine: 'promptpro-ai-v1', durationMs: Date.now() - startedAt, success: true })
    return json({ ok: true, result }, 200, origin)
  } catch (error) {
    const controlled = error instanceof ServerOptimizationError
      ? error
      : new ServerOptimizationError('service-error', 'AI optimization failed.', 500, error)

    logRequest({
      requestId,
      engine: 'promptpro-ai-v1',
      durationMs: Date.now() - startedAt,
      success: false,
      errorCode: controlled.code,
    })
    return json({
      ok: false,
      error: { code: controlled.code, message: controlled.message },
    }, controlled.status, origin)
  }
}
