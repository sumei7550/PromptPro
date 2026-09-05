import { runLocalOptimization } from '../content/optimizer.ts'
import type { OptimizeStyle } from '../shared/types.ts'
import {
  OptimizationEngineError,
  type OptimizationEngine,
  type OptimizationRequest,
  type OptimizationResult,
} from './optimization-engine.ts'

const DEFAULT_STYLE: OptimizeStyle = 'structured'

export class LocalOptimizationEngine implements OptimizationEngine {
  readonly id = 'local-rule-v1'

  async optimize(request: Readonly<OptimizationRequest>): Promise<OptimizationResult> {
    if (typeof request.originalText !== 'string' || !request.originalText.trim()) {
      throw new OptimizationEngineError('invalid-input', 'A non-empty originalText is required.')
    }

    const output = runLocalOptimization(request.originalText, request.style ?? DEFAULT_STYLE)

    return {
      originalText: request.originalText,
      improvedText: output.improvedText,
      detectedLanguage: output.detectedLanguage,
      detectedType: output.detectedType,
      engineId: this.id,
      metadata: {
        platform: request.platform,
        style: request.style ?? DEFAULT_STYLE,
      },
    }
  }
}
