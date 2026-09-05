import { AIOptimizationEngine, AI_ENGINE_ID } from './ai-optimization-engine.ts'
import { LocalOptimizationEngine } from './local-optimization-engine.ts'
import {
  OptimizationEngineError,
  type OptimizationEngine,
  type OptimizationRequest,
  type OptimizationResult,
} from './optimization-engine.ts'

const activeEngine: OptimizationEngine = new AIOptimizationEngine()
const localFallbackEngine: OptimizationEngine = new LocalOptimizationEngine()
const FALLBACK_ERROR_CODES = new Set([
  'network-error',
  'service-error',
  'timeout',
  'malformed-response',
])

function logOptimizationCompleted(
  result: OptimizationResult,
  startedAt: number,
): void {
  const metadata = result.metadata ?? {}
  const fields: Record<string, unknown> = {
    source: 'promptpro-optimization-service',
    engineId: result.engineId,
    durationMs: Date.now() - startedAt,
  }

  for (const key of ['fallbackFrom', 'fallbackReason', 'requestId']) {
    const value = metadata[key]
    if (typeof value === 'string' && value) fields[key] = value
  }

  console.info(JSON.stringify(fields))
}

export async function optimizePrompt(
  request: Readonly<OptimizationRequest>,
  engine: OptimizationEngine = activeEngine,
  fallbackEngine: OptimizationEngine = localFallbackEngine,
): Promise<OptimizationResult> {
  const startedAt = Date.now()

  try {
    const result = await engine.optimize(request)
    logOptimizationCompleted(result, startedAt)
    return result
  } catch (error) {
    if (error instanceof OptimizationEngineError) {
      const shouldFallback = engine.id === AI_ENGINE_ID && FALLBACK_ERROR_CODES.has(error.code)
      if (!shouldFallback) throw error

      const fallbackResult = await fallbackEngine.optimize(request)
      const result = {
        ...fallbackResult,
        warnings: [
          ...(fallbackResult.warnings ?? []),
          'AI optimization was unavailable; local fallback was used.',
        ],
        metadata: {
          ...(fallbackResult.metadata ?? {}),
          fallbackFrom: engine.id,
          fallbackReason: error.code,
        },
      }
      logOptimizationCompleted(result, startedAt)
      return result
    }

    throw new OptimizationEngineError(
      'engine-failed',
      `Optimization engine "${engine.id}" failed.`,
      error,
    )
  }
}
