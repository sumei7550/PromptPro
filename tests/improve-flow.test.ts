import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { en } from '../src/shared/i18n/en-US.ts'
import { zh } from '../src/shared/i18n/zh-CN.ts'
import {
  classifyOptimizationError,
  classifyReplaceFailure,
  EMPTY_IMPROVE_FLOW,
  hasPromptInput,
  isFallbackResult,
  reduceImproveFlow,
  shouldDismissImprovePanel,
} from '../src/content/improve-flow.ts'
import type { OptimizationResult } from '../src/services/optimization-engine.ts'

const result: OptimizationResult = {
  originalText: 'Draft',
  improvedText: 'Improved draft',
  detectedLanguage: 'en',
  detectedType: 'writing',
  engineId: 'promptpro-ai-v1',
}

test('Improve is disabled when input is empty', () => {
  assert.equal(hasPromptInput('  \n '), false)
  assert.equal(reduceImproveFlow(EMPTY_IMPROVE_FLOW, { type: 'INPUT_EMPTY' }).phase, 'idle')
})

test('Improve becomes ready when input exists', () => {
  assert.equal(hasPromptInput('Write a launch plan'), true)
  assert.equal(reduceImproveFlow(EMPTY_IMPROVE_FLOW, { type: 'INPUT_READY' }).phase, 'ready')
})

test('loading prevents a duplicate Improve start', () => {
  const loading = reduceImproveFlow(
    reduceImproveFlow(EMPTY_IMPROVE_FLOW, { type: 'INPUT_READY' }),
    { type: 'IMPROVE_START' },
  )
  assert.equal(loading.busyAction, 'improve')
  assert.deepEqual(reduceImproveFlow(loading, { type: 'IMPROVE_START' }), loading)
})

test('success stores the improved result', () => {
  const state = reduceImproveFlow(EMPTY_IMPROVE_FLOW, { type: 'IMPROVE_SUCCESS', result })
  assert.equal(state.phase, 'success')
  assert.equal(state.result?.improvedText, 'Improved draft')
})

test('Retry keeps the current result visible while loading', () => {
  const success = reduceImproveFlow(EMPTY_IMPROVE_FLOW, { type: 'IMPROVE_SUCCESS', result })
  const retrying = reduceImproveFlow(success, { type: 'RETRY_START' })
  assert.equal(retrying.busyAction, 'retry')
  assert.equal(retrying.result, result)
})

test('fallback state is identified without exposing its technical reason', () => {
  assert.equal(isFallbackResult({
    engineId: 'local-rule-v1',
    metadata: { fallbackFrom: 'promptpro-ai-v1', fallbackReason: 'service-error' },
  }), true)
})

test('network, timeout, service, malformed, and unknown errors are classified', () => {
  assert.equal(classifyOptimizationError({ code: 'network-error' }), 'network')
  assert.equal(classifyOptimizationError({ code: 'timeout' }), 'timeout')
  assert.equal(classifyOptimizationError({ code: 'service-error' }), 'service')
  assert.equal(classifyOptimizationError({ code: 'malformed-response' }), 'malformed-response')
  assert.equal(classifyOptimizationError(new Error('private provider detail')), 'unknown')
})

test('stale and changed input block Replace with user-facing states', () => {
  assert.equal(classifyReplaceFailure('stale-input'), 'input-unavailable')
  assert.equal(classifyReplaceFailure('changed-input'), 'input-changed')
})

test('Replace success closes the result state', () => {
  const success = reduceImproveFlow(EMPTY_IMPROVE_FLOW, { type: 'IMPROVE_SUCCESS', result })
  const replacing = reduceImproveFlow(success, { type: 'REPLACE_START' })
  const complete = reduceImproveFlow(replacing, { type: 'REPLACE_SUCCESS' })
  assert.equal(complete.phase, 'ready')
  assert.equal(complete.result, null)
})

test('Retry failure preserves the previous successful result', () => {
  const success = reduceImproveFlow(EMPTY_IMPROVE_FLOW, { type: 'IMPROVE_SUCCESS', result })
  const retrying = reduceImproveFlow(success, { type: 'RETRY_START' })
  const failed = reduceImproveFlow(retrying, { type: 'RETRY_FAILURE', error: 'timeout' })
  assert.equal(failed.result, result)
  assert.equal(failed.error, 'timeout')
  assert.equal(failed.phase, 'success')
})

test('quota exhausted is an independent state and does not become a retry error', () => {
  const success = reduceImproveFlow(EMPTY_IMPROVE_FLOW, { type: 'IMPROVE_SUCCESS', result })
  const exhausted = reduceImproveFlow(success, { type: 'QUOTA_EXHAUSTED' })
  assert.equal(exhausted.phase, 'quota-exhausted')
  assert.equal(exhausted.error, null)
  assert.equal(exhausted.busyAction, null)
  assert.equal(classifyOptimizationError({ code: 'quota-exhausted' }), 'quota-exhausted')
})

test('Escape closes an idle result but not a busy action', () => {
  assert.equal(shouldDismissImprovePanel('Escape', null), true)
  assert.equal(shouldDismissImprovePanel('Escape', 'retry'), false)
  assert.equal(shouldDismissImprovePanel('Enter', null), false)
})

test('all P0-04 UI keys exist in English and Chinese', () => {
  const keys = [
    'improve.entry',
    'improve.improving',
    'improve.original',
    'improve.improved',
    'improve.use',
    'improve.retry',
    'improve.keepOriginal',
    'improve.fallback',
    'improve.error.network',
    'improve.error.timeout',
    'improve.error.inputChanged',
    'improve.error.replaceFailed',
  ]
  keys.forEach(key => {
    assert.ok(en[key], `missing English key: ${key}`)
    assert.ok(zh[key], `missing Chinese key: ${key}`)
  })
  assert.deepEqual(
    Object.keys(en).filter(key => key.startsWith('improve.')).sort(),
    Object.keys(zh).filter(key => key.startsWith('improve.')).sort(),
  )
})

test('PromptPro tool panel copy is bilingual and does not add a sign-in entry', () => {
  const keys = [
    'panel.open',
    'panel.improve',
    'panel.refine',
    'panel.emptyTitle',
    'panel.emptyDescription',
    'panel.readyTitle',
    'panel.improvePrompt',
    'panel.help',
    'panel.closeTooltip',
    'panel.maximize',
    'panel.minimize',
    'panel.dragToMove',
    'tutorial.welcome',
    'tutorial.question',
    'tutorial.step1',
    'tutorial.step2',
    'tutorial.step3',
    'tutorial.demoLabel',
    'tutorial.close',
  ]
  keys.forEach(key => {
    assert.ok(en[key], `missing English panel key: ${key}`)
    assert.ok(zh[key], `missing Chinese panel key: ${key}`)
  })
  assert.equal(Object.keys(en).some(key => key.startsWith('panel.signIn')), false)
  assert.equal(Object.keys(zh).some(key => key.startsWith('panel.signIn')), false)
  const panelSource = readFileSync(new URL('../src/content/prompt-panel.ts', import.meta.url), 'utf8')
  assert.doesNotMatch(panelSource, /sign[ -]?in/i)
  assert.match(panelSource, /width: 748\.667px; height: 398\.667px;/)
  assert.match(panelSource, /handoff\(\): PromptPanelMount \| null/)
  assert.match(panelSource, /\.panel\.maximized \{[\s\S]*inset: 60px !important;/)
  assert.match(panelSource, /@media \(max-width: 640px\), \(max-height: 520px\)/)
  assert.match(panelSource, /offset-path: rect\(0 auto auto 0 round 40px\)/)
  assert.match(panelSource, /@keyframes pp-help-orbit \{ to \{ offset-distance: 100%; \} \}/)
  assert.match(panelSource, /width: min\(45vw, calc\(100vw - 48px\)\)/)
  assert.match(panelSource, /width: 75%; aspect-ratio: 1\.8;/)
  assert.match(panelSource, /chrome\.runtime\.getURL\('src\/assets\/icons\/icon128\.png'\)/)
  assert.equal(en['tutorial.step1'], 'Type your prompt as usual')
  assert.equal(en['tutorial.step2'], 'Click the **Improve Prompt ✨** button')
  assert.equal(en['tutorial.step3'], 'PromptPro will improve your prompt 🪄')
})
