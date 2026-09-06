import test from 'node:test'
import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import { extname, join } from 'node:path'
import { AIOptimizationEngine } from '../src/services/ai-optimization-engine.ts'
import { LocalOptimizationEngine } from '../src/services/local-optimization-engine.ts'
import {
  OptimizationEngineError,
  type OptimizationRequest,
} from '../src/services/optimization-engine.ts'
import { optimizePrompt } from '../src/services/optimization-service.ts'
import {
  DEEPSEEK_CHAT_COMPLETIONS_ENDPOINT,
  OPTIMIZATION_SYSTEM_PROMPT,
  buildDeepSeekRequest,
  parseDeepSeekResponse,
  parseOptimizeInput,
  ServerOptimizationError,
  optimizeWithDeepSeek,
} from '../website/src/lib/ai-optimization.ts'

test('defines structured as adaptive minimal sufficient enhancement', () => {
  assert.match(OPTIMIZATION_SYSTEM_PROMPT, /minimum sufficient structure and execution clarity/i)
  assert.match(OPTIMIZATION_SYSTEM_PROMPT, /does not mean more verbose or expanded into a complete specification/i)
  assert.match(OPTIMIZATION_SYSTEM_PROMPT, /simple task, normally use one or two natural paragraphs/i)
  assert.match(OPTIMIZATION_SYSTEM_PROMPT, /medium task, use only a few bullets or steps/i)
  assert.match(OPTIMIZATION_SYSTEM_PROMPT, /Reserve explicit sections.+for genuinely complex tasks/i)
  assert.match(OPTIMIZATION_SYSTEM_PROMPT, /ask no more than three high-impact clarification questions/i)
  assert.match(OPTIMIZATION_SYSTEM_PROMPT, /Act only as a prompt enhancer/i)
  assert.match(OPTIMIZATION_SYSTEM_PROMPT, /do not pre-answer the task/i)
  assert.match(OPTIMIZATION_SYSTEM_PROMPT, /Keep the improved prompt in the original input language/i)
})

const baseRequest: OptimizationRequest = {
  originalText: 'Write a product launch email',
  locale: 'en',
  platform: 'chatgpt',
  style: 'professional',
  context: { fullConversation: 'must not leave the extension' },
}

const validApiResponse = {
  ok: true,
  result: {
    improvedText: 'Draft a concise product launch email. Ask for the audience and key benefit if missing.',
    detectedLanguage: 'en',
    detectedType: 'marketing',
    warnings: [],
    metadata: { requestId: 'request-1', model: 'deepseek-v4-flash' },
  },
} as const

test('maps only the minimum OptimizationRequest fields to the PromptPro API', async () => {
  let captured: Readonly<Record<string, unknown>> | undefined
  const engine = new AIOptimizationEngine({
    transport: async payload => {
      captured = payload
      return validApiResponse
    },
  })

  await engine.optimize(baseRequest)
  assert.deepEqual(captured, {
    originalText: baseRequest.originalText,
    locale: 'en',
    style: 'professional',
    platform: 'chatgpt',
  })
  assert.equal('context' in (captured ?? {}), false)
})

test('maps structured API output to the OptimizationResult contract', async () => {
  const engine = new AIOptimizationEngine({ transport: async () => validApiResponse })
  const result = await engine.optimize(baseRequest)

  assert.deepEqual(result, {
    originalText: baseRequest.originalText,
    improvedText: validApiResponse.result.improvedText,
    detectedLanguage: 'en',
    detectedType: 'marketing',
    engineId: 'promptpro-ai-v1',
    warnings: [],
    metadata: {
      requestId: 'request-1',
      model: 'deepseek-v4-flash',
      platform: 'chatgpt',
      style: 'professional',
    },
  })
})

test('rejects malformed AI API responses', async () => {
  const engine = new AIOptimizationEngine({
    transport: async () => ({ ok: true, result: { improvedText: '' } }),
  })
  await assert.rejects(
    engine.optimize(baseRequest),
    (error: unknown) => error instanceof OptimizationEngineError && error.code === 'malformed-response',
  )
})

test('returns a controlled timeout instead of loading indefinitely', async () => {
  const engine = new AIOptimizationEngine({
    transport: async () => new Promise(() => undefined),
    timeoutMs: 5,
  })
  await assert.rejects(
    engine.optimize(baseRequest),
    (error: unknown) => error instanceof OptimizationEngineError && error.code === 'timeout',
  )
})

test('maps transport failures to network-error', async () => {
  const engine = new AIOptimizationEngine({
    transport: async () => { throw new TypeError('fetch failed') },
  })
  await assert.rejects(
    engine.optimize(baseRequest),
    (error: unknown) => error instanceof OptimizationEngineError && error.code === 'network-error',
  )
})

test('uses Local Engine only for a controlled AI infrastructure failure', async () => {
  const aiEngine = new AIOptimizationEngine({
    transport: async () => ({
      ok: false,
      error: { code: 'service-error', message: 'AI service unavailable' },
    }),
  })
  const result = await optimizePrompt(baseRequest, aiEngine, new LocalOptimizationEngine())

  assert.equal(result.engineId, 'local-rule-v1')
  assert.equal(result.metadata?.fallbackFrom, 'promptpro-ai-v1')
  assert.equal(result.metadata?.fallbackReason, 'service-error')
  assert.match(result.warnings?.[0] ?? '', /local fallback/i)
})

test('does not fallback when AI returns a valid concise result', async () => {
  const aiEngine = new AIOptimizationEngine({
    transport: async () => ({
      ...validApiResponse,
      result: { ...validApiResponse.result, improvedText: 'Write clearly.' },
    }),
  })
  const result = await optimizePrompt(baseRequest, aiEngine, new LocalOptimizationEngine())
  assert.equal(result.engineId, 'promptpro-ai-v1')
  assert.equal(result.improvedText, 'Write clearly.')
})

test('does not fallback for invalid input returned by the service', async () => {
  const aiEngine = new AIOptimizationEngine({
    transport: async () => ({
      ok: false,
      error: { code: 'invalid-input', message: 'Input is invalid' },
    }),
  })
  await assert.rejects(
    optimizePrompt(baseRequest, aiEngine, new LocalOptimizationEngine()),
    (error: unknown) => error instanceof OptimizationEngineError && error.code === 'invalid-input',
  )
})

test('maps PromptPro input to DeepSeek Chat Completions JSON Output', () => {
  const parsedInput = parseOptimizeInput({
    originalText: '  Debug this TypeScript function  ',
    locale: 'en',
    style: 'code',
    platform: 'chatgpt',
    ignored: 'not mapped',
  })
  assert.equal(parsedInput.originalText, 'Debug this TypeScript function')

  const providerRequest = buildDeepSeekRequest(parsedInput, 'deepseek-v4-flash')
  assert.equal(providerRequest.model, 'deepseek-v4-flash')
  assert.deepEqual(providerRequest.response_format, { type: 'json_object' })
  assert.deepEqual(providerRequest.thinking, { type: 'disabled' })
  assert.equal(providerRequest.max_tokens, 1800)
  assert.ok(Array.isArray(providerRequest.messages))

  const messages = providerRequest.messages as Array<Record<string, unknown>>
  assert.equal(messages[0]?.role, 'system')
  assert.match(String(messages[0]?.content), /valid JSON/i)
  assert.match(String(messages[0]?.content), /"improvedPrompt"/)
  assert.equal(messages[1]?.role, 'user')
  assert.deepEqual(JSON.parse(String(messages[1]?.content)), {
    originalText: 'Debug this TypeScript function',
    requestedStyle: 'code',
    targetPlatform: 'chatgpt',
    uiLocale: 'en',
  })

  const result = parseDeepSeekResponse({
    choices: [{
      message: {
        content: JSON.stringify({
          improvedPrompt: 'Inspect the TypeScript function, identify the root cause, and provide a minimal fix.',
          detectedLanguage: 'en',
          detectedType: 'coding',
          warnings: [],
        }),
      },
    }],
  })
  assert.equal(result.detectedType, 'coding')
  assert.match(result.improvedText, /root cause/)
})

test('server rejects invalid input, empty content, and malformed provider JSON', () => {
  assert.throws(
    () => parseOptimizeInput({ originalText: '', locale: 'en', style: 'code', platform: 'chatgpt' }),
    (error: unknown) => error instanceof ServerOptimizationError && error.code === 'invalid-input',
  )
  assert.throws(
    () => parseDeepSeekResponse({ choices: [{ message: { content: '   ' } }] }),
    (error: unknown) => error instanceof ServerOptimizationError && error.code === 'malformed-response',
  )
  assert.throws(
    () => parseDeepSeekResponse({ choices: [{ message: { content: 'not-json' } }] }),
    (error: unknown) => error instanceof ServerOptimizationError && error.code === 'malformed-response',
  )
})

for (const [name, providerResult] of [
  ['empty improvedPrompt', { improvedPrompt: '', detectedLanguage: 'en', detectedType: 'coding', warnings: [] }],
  ['invalid detectedLanguage', { improvedPrompt: 'Valid', detectedLanguage: 'fr', detectedType: 'coding', warnings: [] }],
  ['invalid detectedType', { improvedPrompt: 'Valid', detectedLanguage: 'en', detectedType: 'translation', warnings: [] }],
] as const) {
  test(`server rejects ${name}`, () => {
    assert.throws(
      () => parseDeepSeekResponse({ choices: [{ message: { content: JSON.stringify(providerResult) } }] }),
      (error: unknown) => error instanceof ServerOptimizationError && error.code === 'malformed-response',
    )
  })
}

test('DeepSeek request uses the server endpoint and server-only Authorization header', async () => {
  const input = parseOptimizeInput({
    originalText: 'Write a release note',
    locale: 'en',
    style: 'concise',
    platform: 'chatgpt',
  })
  let capturedUrl = ''
  let capturedInit: RequestInit | undefined
  const fetchImpl: typeof fetch = async (url, init) => {
    capturedUrl = String(url)
    capturedInit = init
    return new Response(JSON.stringify({
      choices: [{
        message: {
          content: JSON.stringify({
            improvedPrompt: 'Write a concise release note.',
            detectedLanguage: 'en',
            detectedType: 'writing',
            warnings: [],
          }),
        },
      }],
    }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  const result = await optimizeWithDeepSeek(input, {
    apiKey: 'test-placeholder-not-a-real-key',
    fetchImpl,
    requestId: 'request-deepseek',
  })

  assert.equal(capturedUrl, DEEPSEEK_CHAT_COMPLETIONS_ENDPOINT)
  assert.equal(new Headers(capturedInit?.headers).get('Authorization'), 'Bearer test-placeholder-not-a-real-key')
  assert.equal(new Headers(capturedInit?.headers).get('Content-Type'), 'application/json')
  assert.equal(result.metadata.model, 'deepseek-v4-flash')
})

for (const status of [400, 401, 429, 500, 503]) {
  test(`DeepSeek HTTP ${status} maps to service-error`, async () => {
    const input = parseOptimizeInput({
      originalText: 'Write a release note', locale: 'en', style: 'concise', platform: 'chatgpt',
    })
    await assert.rejects(
      optimizeWithDeepSeek(input, {
        apiKey: 'test-placeholder-not-a-real-key',
        fetchImpl: async () => new Response('{}', { status }),
      }),
      (error: unknown) => error instanceof ServerOptimizationError && error.code === 'service-error',
    )
  })
}

test('DeepSeek network failure maps to service-error', async () => {
  const input = parseOptimizeInput({
    originalText: 'Write a release note', locale: 'en', style: 'concise', platform: 'chatgpt',
  })
  await assert.rejects(
    optimizeWithDeepSeek(input, {
      apiKey: 'test-placeholder-not-a-real-key',
      fetchImpl: async () => { throw new TypeError('fetch failed') },
    }),
    (error: unknown) => error instanceof ServerOptimizationError && error.code === 'service-error',
  )
})

test('server aborts a provider request at its configured timeout', async () => {
  const input = parseOptimizeInput({
    originalText: 'Write a release note',
    locale: 'en',
    style: 'concise',
    platform: 'chatgpt',
  })
  const neverCompletes: typeof fetch = async (_input, init) => new Promise((_resolve, reject) => {
    init?.signal?.addEventListener('abort', () => {
      reject(new DOMException('aborted', 'AbortError'))
    })
  })

  await assert.rejects(
    optimizeWithDeepSeek(input, {
      apiKey: 'test-placeholder-not-a-real-key',
      fetchImpl: neverCompletes,
      timeoutMs: 5,
    }),
    (error: unknown) => error instanceof ServerOptimizationError && error.code === 'timeout',
  )
})

async function extensionSourceFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true })
  const paths = await Promise.all(entries.map(async entry => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? extensionSourceFiles(path) : [path]
  }))
  return paths.flat()
}

test('extension source contains no provider endpoint, API key variable, or authorization header', async () => {
  const files = (await extensionSourceFiles(join(process.cwd(), 'src')))
    .filter(path => ['.ts', '.tsx', '.js', '.jsx'].includes(extname(path)))
  const contents = (await Promise.all(files.map(path => readFile(path, 'utf8')))).join('\n')

  assert.doesNotMatch(contents, /api\.deepseek\.com/i)
  assert.doesNotMatch(contents, /api\.openai\.com/i)
  assert.doesNotMatch(contents, /DEEPSEEK_API_KEY/)
  assert.doesNotMatch(contents, /AI_API_KEY/)
  assert.doesNotMatch(contents, /Authorization["']?\s*:/i)
  assert.doesNotMatch(contents, /\bsk-(?:proj-)?[A-Za-z0-9_-]{16,}/)
})
