import type { Locale, OptimizeStyle, Platform } from '../shared/types.ts'

export interface OptimizationRequest {
  originalText: string
  locale: Locale
  style?: OptimizeStyle
  platform: Platform
  context?: Readonly<Record<string, unknown>>
}

export interface OptimizationResult {
  originalText: string
  improvedText: string
  detectedLanguage: Locale
  detectedType: string
  engineId: string
  warnings?: readonly string[]
  metadata?: Readonly<Record<string, unknown>>
}

export interface OptimizationEngine {
  readonly id: string
  optimize(request: Readonly<OptimizationRequest>): Promise<OptimizationResult>
}

export type OptimizationErrorCode =
  | 'invalid-input'
  | 'network-error'
  | 'service-error'
  | 'timeout'
  | 'malformed-response'
  | 'engine-failed'
  | 'cancelled'

export class OptimizationEngineError extends Error {
  readonly code: OptimizationErrorCode
  readonly cause?: unknown

  constructor(code: OptimizationErrorCode, message: string, cause?: unknown) {
    super(message)
    this.name = 'OptimizationEngineError'
    this.code = code
    this.cause = cause
  }
}
