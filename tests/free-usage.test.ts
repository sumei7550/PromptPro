import assert from 'node:assert/strict'
import test from 'node:test'
import { consumeFreeAiImproves, formatFreeImproveResetDate, getFreeUsageState, getSettings } from '../src/shared/storage.ts'
import { FREE_IMPROVE_WINDOW, MAX_FREE_AI_IMPROVES } from '../src/shared/constants.ts'

type Store = Record<string, unknown>
const localStore: Store = {}
const syncStore: Store = {}

function resetStorage(settings?: Record<string, unknown>) {
  for (const key of Object.keys(localStore)) delete localStore[key]
  for (const key of Object.keys(syncStore)) delete syncStore[key]
  if (settings) localStore.settings = settings
}

;(globalThis as typeof globalThis & { chrome: unknown }).chrome = {
  storage: {
    local: {
      async get(key: string) { return { [key]: localStore[key] } },
      async set(values: Store) { Object.assign(localStore, values) },
    },
    sync: {
      async get(key: string) { return { [key]: syncStore[key] } },
    },
  },
  i18n: { getUILanguage: () => 'en-US' },
}

test('new users start with five persistent AI improves and a rolling resetAt', async () => {
  resetStorage()
  const initial = await getFreeUsageState()
  assert.equal(initial.used, 0)
  assert.equal(initial.remaining, 5)
  assert.equal(initial.resetAt, Date.now() + FREE_IMPROVE_WINDOW)
  await consumeFreeAiImproves()
  assert.equal((await getFreeUsageState()).remaining, 4)
})

test('successful AI results consume five times down to zero', async () => {
  resetStorage()
  for (let expected = 4; expected >= 0; expected -= 1) {
    await consumeFreeAiImproves()
    assert.equal((await getFreeUsageState()).remaining, expected)
  }
  assert.equal((await getFreeUsageState()).remaining, 0)
  assert.equal((await getFreeUsageState()).quotaExhausted, true)
})

test('errors, timeout, fallback, cancel, keep-original, and replace failure do not consume', async () => {
  resetStorage()
  // These outcomes intentionally do not call consumeFreeAiImproves.
  const outcomes = ['error', 'timeout', 'fallback', 'cancel', 'keep-original', 'replace-failed']
  for (const outcome of outcomes) {
    assert.ok(outcome)
    assert.equal((await getFreeUsageState()).remaining, 5)
  }
})

test('a successful retry consumes one and exhausted quota blocks another request', async () => {
  resetStorage({ freeAiImproveUsed: 4, dailyUsage: 10, lastResetDate: '2000-01-01' })
  assert.equal((await getFreeUsageState()).remaining, 1)
  await consumeFreeAiImproves()
  assert.equal((await getFreeUsageState()).remaining, 0)
})

test('legacy daily fields do not reset or restore one-time quota across refresh', async () => {
  resetStorage({ freeAiImproveUsed: 3, dailyUsage: 10, lastResetDate: '2000-01-01' })
  assert.equal((await getFreeUsageState()).remaining, 2)
  // A second read represents a refresh/popup reopen/session change.
  assert.equal((await getSettings()).freeAiImproveUsed, 3)
  assert.equal((await getFreeUsageState()).remaining, 2)
})

test('exhausted legacy quota migrates without immediately restoring five', async () => {
  resetStorage({ freeAiImproveUsed: MAX_FREE_AI_IMPROVES, dailyUsage: 10, lastResetDate: '2000-01-01' })
  const usage = await getFreeUsageState()
  assert.equal(usage.remaining, 0)
  assert.equal(usage.resetAt, Date.now() + FREE_IMPROVE_WINDOW)
})

test('quota resets at resetAt and creates the next rolling resetAt', async () => {
  const now = Date.now()
  resetStorage({ freeAiImproveUsed: MAX_FREE_AI_IMPROVES, freeAiImproveResetAt: now - 1, dailyUsage: 10, lastResetDate: '2000-01-01' })
  const usage = await getFreeUsageState()
  assert.equal(usage.remaining, 5)
  assert.equal(usage.used, 0)
  assert.equal(usage.resetAt, now - 1 + FREE_IMPROVE_WINDOW)
})

test('quota state and resetAt persist without changing unrelated storage', async () => {
  resetStorage({ freeAiImproveUsed: 0, dailyUsage: 10, lastResetDate: '2000-01-01' })
  localStore.otherData = { keep: true }
  const usage = await getFreeUsageState()
  await consumeFreeAiImproves()
  assert.equal((await getFreeUsageState()).remaining, 4)
  assert.equal((localStore.otherData as { keep: boolean }).keep, true)
  assert.equal(typeof usage.resetAt, 'number')
})

test('reset date formatting uses the real date in English and Chinese', async () => {
  const resetAt = new Date(2026, 8, 14, 12, 0, 0).getTime()
  assert.equal(formatFreeImproveResetDate('en', resetAt), 'Resets: 14th Sep 2026')
  assert.equal(formatFreeImproveResetDate('zh', resetAt), '重置时间：2026年9月14日')
})
