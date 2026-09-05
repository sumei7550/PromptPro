import test from 'node:test'
import assert from 'node:assert/strict'
import {
  classifyMissingInput,
  isSameInputIdentity,
  normalizeInputText,
  validateInputSnapshot,
  type InputIdentity,
  type InputSnapshot,
} from '../src/content/input-foundation.ts'

const identity: InputIdentity = { platform: 'chatgpt', routeKey: '/c/one', mountId: 1 }
const snapshot: InputSnapshot = { identity, text: 'Hello\n世界', capturedAt: 1, sequence: 1 }

test('normalizes line endings and invisible editor characters without flattening lines', () => {
  assert.equal(normalizeInputText('Write a release note'), 'Write a release note')
  assert.equal(normalizeInputText('写一份发布说明'), '写一份发布说明')
  assert.equal(normalizeInputText('Hello\r\n世\u200B界'), 'Hello\n世界')
  assert.equal(normalizeInputText('first\n\nsecond'), 'first\n\nsecond')
  assert.equal(normalizeInputText('hello\u00a0world'), 'hello world')
})

test('keeps long and pasted input predictable', () => {
  const longText = `${'A'.repeat(5000)}\n${'中'.repeat(5000)}`
  assert.equal(normalizeInputText(longText), longText)
  assert.equal(normalizeInputText('pasted\rline\r\nnext'), 'pasted\nline\nnext')
})

test('normalizes empty editor content to an explicit empty string', () => {
  assert.equal(normalizeInputText('\n\u200B  \n'), '')
})

test('compares element mount and route context as one input identity', () => {
  assert.equal(isSameInputIdentity(identity, { ...identity }), true)
  assert.equal(isSameInputIdentity(identity, { ...identity, mountId: 2 }), false)
  assert.equal(isSameInputIdentity(identity, { ...identity, routeKey: '/c/two' }), false)
})

test('rejects snapshots when the input instance or text changed', () => {
  assert.deepEqual(validateInputSnapshot(snapshot, identity, 'Hello\r\n世界'), { valid: true })
  assert.deepEqual(validateInputSnapshot(snapshot, identity, 'Edited'), { valid: false, reason: 'input-changed' })
  assert.deepEqual(
    validateInputSnapshot(snapshot, { ...identity, mountId: 2 }, snapshot.text),
    { valid: false, reason: 'input-replaced' },
  )
})

test('distinguishes a page still mounting from a probable selector mismatch', () => {
  assert.equal(classifyMissingInput(false, false), 'not-ready')
  assert.equal(classifyMissingInput(true, false), 'not-ready')
  assert.equal(classifyMissingInput(true, true), 'selector-mismatch')
})
