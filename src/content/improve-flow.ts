import type { OptimizationResult } from '@/services/optimization-engine'
import type { InputReplaceFailureReason } from './platforms/base'

export type ImproveFlowPhase = 'idle' | 'ready' | 'loading' | 'success' | 'error' | 'quota-exhausted'
export type ImproveBusyAction = 'improve' | 'retry' | 'replace' | null
export type ImproveErrorKind =
  | 'network'
  | 'timeout'
  | 'service'
  | 'malformed-response'
  | 'input-changed'
  | 'input-unavailable'
  | 'replace-failed'
  | 'quota-exhausted'
  | 'unknown'

export interface ImproveFlowState {
  phase: ImproveFlowPhase
  busyAction: ImproveBusyAction
  result: OptimizationResult | null
  error: ImproveErrorKind | null
}

export type ImproveFlowEvent =
  | { type: 'INPUT_EMPTY' }
  | { type: 'INPUT_READY' }
  | { type: 'IMPROVE_START' }
  | { type: 'IMPROVE_SUCCESS'; result: OptimizationResult }
  | { type: 'IMPROVE_FAILURE'; error: ImproveErrorKind }
  | { type: 'RETRY_START' }
  | { type: 'RETRY_SUCCESS'; result: OptimizationResult }
  | { type: 'RETRY_FAILURE'; error: ImproveErrorKind }
  | { type: 'REPLACE_START' }
  | { type: 'REPLACE_FAILURE'; error: ImproveErrorKind }
  | { type: 'REPLACE_SUCCESS' }
  | { type: 'LIMIT_REACHED' }
  | { type: 'QUOTA_EXHAUSTED' }
  | { type: 'CANCEL' }

export const EMPTY_IMPROVE_FLOW: ImproveFlowState = {
  phase: 'idle',
  busyAction: null,
  result: null,
  error: null,
}

export function hasPromptInput(text: string | null | undefined): boolean {
  return Boolean(text?.trim())
}

export function shouldDismissImprovePanel(key: string, busyAction: ImproveBusyAction): boolean {
  return key === 'Escape' && busyAction === null
}

export function reduceImproveFlow(
  state: Readonly<ImproveFlowState>,
  event: ImproveFlowEvent,
): ImproveFlowState {
  switch (event.type) {
    case 'INPUT_EMPTY':
      return { ...EMPTY_IMPROVE_FLOW }
    case 'INPUT_READY':
      return state.busyAction ? { ...state } : { ...state, phase: 'ready', error: null }
    case 'IMPROVE_START':
      if (state.busyAction) return { ...state }
      return { phase: 'loading', busyAction: 'improve', result: null, error: null }
    case 'IMPROVE_SUCCESS':
      return { phase: 'success', busyAction: null, result: event.result, error: null }
    case 'IMPROVE_FAILURE':
      return { phase: 'error', busyAction: null, result: null, error: event.error }
    case 'RETRY_START':
      if (state.busyAction || !state.result) return { ...state }
      return { ...state, phase: 'success', busyAction: 'retry', error: null }
    case 'RETRY_SUCCESS':
      return { phase: 'success', busyAction: null, result: event.result, error: null }
    case 'RETRY_FAILURE':
      return state.result
        ? { ...state, phase: 'success', busyAction: null, error: event.error }
        : { phase: 'error', busyAction: null, result: null, error: event.error }
    case 'REPLACE_START':
      if (state.busyAction || !state.result) return { ...state }
      return { ...state, busyAction: 'replace', error: null }
    case 'REPLACE_FAILURE':
      return { ...state, phase: 'success', busyAction: null, error: event.error }
    case 'REPLACE_SUCCESS':
    case 'CANCEL':
      return { phase: 'ready', busyAction: null, result: null, error: null }
    case 'LIMIT_REACHED':
    case 'QUOTA_EXHAUSTED':
      return { ...state, phase: 'quota-exhausted', busyAction: null, error: null }
  }
}

export function isFallbackResult(
  result: Pick<OptimizationResult, 'engineId' | 'metadata'>,
): boolean {
  return result.engineId === 'local-rule-v1'
    && typeof result.metadata?.fallbackFrom === 'string'
}

export function classifyOptimizationError(error: unknown): ImproveErrorKind {
  const code = readErrorCode(error)
  if (code === 'network-error') return 'network'
  if (code === 'timeout') return 'timeout'
  if (code === 'service-error') return 'service'
  if (code === 'malformed-response') return 'malformed-response'
  if (code === 'quota-exhausted') return 'quota-exhausted'
  return 'unknown'
}

export function classifyReplaceFailure(reason: InputReplaceFailureReason): ImproveErrorKind {
  if (reason === 'changed-input') return 'input-changed'
  if (reason === 'stale-input' || reason === 'input-not-ready' || reason === 'selector-mismatch') {
    return 'input-unavailable'
  }
  return 'replace-failed'
}

function readErrorCode(error: unknown): string | null {
  if (!error || typeof error !== 'object') return null
  const value = error as { code?: unknown; cause?: unknown }
  if (typeof value.code === 'string') return value.code
  return readErrorCode(value.cause)
}
