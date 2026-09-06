import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { getOptimizationMode } from '../src/content/preview.ts'

test('identifies a successful AI optimization', () => {
  assert.equal(getOptimizationMode({ engineId: 'promptpro-ai-v1' }), 'ai')
})

test('identifies a local fallback after an AI failure', () => {
  assert.equal(getOptimizationMode({
    engineId: 'local-rule-v1',
    metadata: {
      fallbackFrom: 'promptpro-ai-v1',
      fallbackReason: 'service-error',
    },
  }), 'localFallback')
})

test('identifies a purely local optimization', () => {
  assert.equal(getOptimizationMode({ engineId: 'local-rule-v1' }), 'local')
})

test('result preview keeps the same desktop panel contract as the empty prompt panel', () => {
  const source = readFileSync(new URL('../src/content/preview.ts', import.meta.url), 'utf8')
  assert.match(source, /width: 748\.667px;\s*height: 398\.667px;/)
  assert.match(source, /\.body \{ min-height: 0; max-height: none;/)
  assert.match(source, /\.panel \{ height: auto; max-height: calc\(100vh - 20px\); min-height: 360px;/)
  assert.match(source, /\.panel\.maximized \{[\s\S]*?inset: 60px !important;/)
  assert.match(source, /\.panel\.maximized \{ inset: 8px !important; \}/)
})
