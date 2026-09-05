import test from 'node:test'
import assert from 'node:assert/strict'
import { LocalOptimizationEngine } from '../src/services/local-optimization-engine.ts'
import {
  OptimizationEngineError,
  type OptimizationEngine,
  type OptimizationRequest,
} from '../src/services/optimization-engine.ts'
import { optimizePrompt } from '../src/services/optimization-service.ts'

const engine = new LocalOptimizationEngine()

function request(originalText: string, style: OptimizationRequest['style'] = 'structured'): OptimizationRequest {
  return {
    originalText,
    locale: 'en',
    platform: 'chatgpt',
    style,
  }
}

test('optimizes English through the async engine contract with complete result fields', async () => {
  const operation = engine.optimize(request('Write a blog post about local-first Chrome extensions'))
  assert.equal(operation instanceof Promise, true)

  const result = await operation
  assert.equal(result.originalText, 'Write a blog post about local-first Chrome extensions')
  assert.equal(result.detectedLanguage, 'en')
  assert.equal(result.detectedType, 'content')
  assert.equal(result.engineId, 'local-rule-v1')
  assert.ok(result.improvedText.length > result.originalText.length)
  assert.deepEqual(result.metadata, { platform: 'chatgpt', style: 'structured' })
})

test('optimizes Chinese and keeps category detection behind the same contract', async () => {
  const result = await optimizePrompt(request('帮我写一段 Python 代码，读取 CSV 文件'))

  assert.equal(result.detectedLanguage, 'zh')
  assert.equal(result.detectedType, 'coding')
  assert.match(result.improvedText, /Python/)
})

test('rejects empty or invalid input with an explicit invalid-input error', async () => {
  await assert.rejects(
    engine.optimize(request('   ')),
    (error: unknown) => error instanceof OptimizationEngineError && error.code === 'invalid-input',
  )

  await assert.rejects(
    engine.optimize({ ...request('valid'), originalText: null as unknown as string }),
    (error: unknown) => error instanceof OptimizationEngineError && error.code === 'invalid-input',
  )
})

test('preserves the existing optimization style behavior', async () => {
  const concise = await optimizePrompt(request('Explain TypeScript generics', 'concise'))
  const code = await optimizePrompt(request('Explain TypeScript generics', 'code'))

  assert.match(concise.improvedText, /Keep the response concise/)
  assert.match(code.improvedText, /Provide runnable, maintainable code/)
  assert.notEqual(concise.improvedText, code.improvedText)
})

test('converts unexpected engine exceptions into a controlled engine-failed error', async () => {
  const failingEngine: OptimizationEngine = {
    id: 'failing-test-engine',
    async optimize() {
      throw new Error('internal detail')
    },
  }

  await assert.rejects(
    optimizePrompt(request('Keep this request valid'), failingEngine),
    (error: unknown) => (
      error instanceof OptimizationEngineError
      && error.code === 'engine-failed'
      && error.cause instanceof Error
    ),
  )
})
