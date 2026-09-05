export type InputDetectionStatus = 'ready' | 'not-ready' | 'selector-mismatch'

export interface InputIdentity {
  platform: string
  routeKey: string
  mountId: number
}

export interface InputSnapshot {
  identity: InputIdentity
  text: string
  capturedAt: number
  sequence: number
}

export type SnapshotValidationReason = 'input-changed' | 'input-replaced'

export type SnapshotValidation =
  | { valid: true }
  | { valid: false; reason: SnapshotValidationReason }

export function normalizeInputText(value: string): string {
  const normalized = value
    .replace(/\r\n?/g, '\n')
    .replace(/\u00a0/g, ' ')
    .replace(/[\u200B\u200C\u200D\uFEFF]/g, '')
    .replace(/^\n+|\n+$/g, '')

  return normalized.trim().length === 0 ? '' : normalized
}

export function isSameInputIdentity(left: InputIdentity, right: InputIdentity): boolean {
  return left.platform === right.platform
    && left.routeKey === right.routeKey
    && left.mountId === right.mountId
}

export function validateInputSnapshot(
  expected: InputSnapshot,
  currentIdentity: InputIdentity,
  currentText: string,
): SnapshotValidation {
  if (!isSameInputIdentity(expected.identity, currentIdentity)) {
    return { valid: false, reason: 'input-replaced' }
  }

  if (expected.text !== normalizeInputText(currentText)) {
    return { valid: false, reason: 'input-changed' }
  }

  return { valid: true }
}

export function classifyMissingInput(
  pageReady: boolean,
  hasComposerEvidence: boolean,
): Exclude<InputDetectionStatus, 'ready'> {
  return pageReady && hasComposerEvidence ? 'selector-mismatch' : 'not-ready'
}
