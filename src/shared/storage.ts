import type { Settings, Locale, PersonalTemplate, OptimizationHistoryEntry, OptimizeStyle } from './types.ts'
import { DEFAULT_SETTINGS, FREE_IMPROVE_WINDOW, MAX_FREE_AI_IMPROVES, MAX_PERSONAL_TEMPLATES } from './constants.ts'

export interface FreeUsageState {
  used: number
  remaining: number
  resetAt: number
  quotaExhausted: boolean
}

function getNextResetAt(now: number): number {
  return now + FREE_IMPROVE_WINDOW
}

function normalizeUsed(value: unknown): number {
  return Number.isFinite(value) ? Math.min(MAX_FREE_AI_IMPROVES, Math.max(0, Math.floor(Number(value)))) : 0
}

function isValidResetAt(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
}

export function formatFreeImproveResetDate(locale: Locale, resetAt: number): string {
  const date = new Date(resetAt)
  if (locale === 'zh') return `重置时间：${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  const day = date.getDate()
  const ordinal = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th'
  return `Resets: ${day}${ordinal} ${date.toLocaleString('en-US', { month: 'short' })} ${date.getFullYear()}`
}

function normalizeOptimizeStyle(value: unknown): OptimizeStyle {
  if (value === 'concise' || value === 'professional' || value === 'structured' || value === 'deep-analysis' || value === 'content-creation' || value === 'code') return value
  if (value === 'detailed' || value === 'academic') return 'deep-analysis'
  if (value === 'casual') return 'content-creation'
  return DEFAULT_SETTINGS.optimizeStyle
}

export async function getSettings(): Promise<Settings> {
  const localResult = await chrome.storage.local.get('settings')
  if (localResult.settings) {
    return { ...DEFAULT_SETTINGS, ...localResult.settings, optimizeStyle: normalizeOptimizeStyle(localResult.settings.optimizeStyle) }
  }

  const syncResult = await chrome.storage.sync.get('settings')
  if (syncResult.settings) {
    const migrated = { ...DEFAULT_SETTINGS, ...syncResult.settings, optimizeStyle: normalizeOptimizeStyle(syncResult.settings.optimizeStyle) }
    await chrome.storage.local.set({ settings: migrated })
    return migrated
  }

  return { ...DEFAULT_SETTINGS }
}

export async function initializeLocale(): Promise<Locale> {
  const settings = await getSettings()

  // 如果用户已手动设置过语言，直接返回
  if (settings.localeSetByUser) {
    return settings.locale
  }

  // 首次打开，检测浏览器语言
  const browserLang = chrome.i18n.getUILanguage()
  const detectedLocale: Locale = browserLang.startsWith('zh') ? 'zh' : 'en'

  // 保存检测到的语言（但不设置 localeSetByUser 标记）
  await saveSettings({ locale: detectedLocale })

  return detectedLocale
}

export async function saveSettings(settings: Partial<Settings>): Promise<void> {
  const current = await getSettings()
  await chrome.storage.local.set({ settings: { ...current, ...settings } })
}

export async function incrementUsage(): Promise<number> {
  return consumeFreeAiImproves(1)
}

export async function getRemainingUsage(): Promise<number> {
  return (await getFreeUsageState()).remaining
}

export async function getFreeUsageState(): Promise<FreeUsageState> {
  const settings = await getSettings()
  const now = Date.now()
  const used = normalizeUsed(settings.freeAiImproveUsed)
  let resetAt = isValidResetAt(settings.freeAiImproveResetAt) ? settings.freeAiImproveResetAt : getNextResetAt(now)
  let nextUsed = used
  if (now >= resetAt) {
    nextUsed = 0
    while (resetAt <= now) resetAt += FREE_IMPROVE_WINDOW
  }
  if (nextUsed !== settings.freeAiImproveUsed || resetAt !== settings.freeAiImproveResetAt) {
    await saveSettings({ freeAiImproveUsed: nextUsed, freeAiImproveResetAt: resetAt })
  }
  const remaining = MAX_FREE_AI_IMPROVES - nextUsed
  return { used: nextUsed, remaining, resetAt, quotaExhausted: remaining === 0 }
}

/** Commits successful real-AI improves and preserves the rolling seven-day window. */
export async function consumeFreeAiImproves(count = 1): Promise<number> {
  if (!Number.isInteger(count) || count < 0) throw new Error('INVALID_USAGE_COUNT')
  if (count === 0) return (await getFreeUsageState()).remaining

  const usage = await getFreeUsageState()
  const nextUsed = Math.min(MAX_FREE_AI_IMPROVES, usage.used + count)
  await saveSettings({ freeAiImproveUsed: nextUsed, freeAiImproveResetAt: usage.resetAt })
  return MAX_FREE_AI_IMPROVES - nextUsed
}

export async function getCustomTemplates(): Promise<PersonalTemplate[]> {
  const result = await chrome.storage.local.get('customTemplates')
  const templates = Array.isArray(result.customTemplates) ? result.customTemplates.slice(0, MAX_PERSONAL_TEMPLATES) : []
  if (Array.isArray(result.customTemplates) && result.customTemplates.length > templates.length) {
    await chrome.storage.local.set({ customTemplates: templates })
  }
  return templates
}

export async function saveCustomTemplates(templates: PersonalTemplate[]) {
  await chrome.storage.local.set({ customTemplates: templates.slice(0, MAX_PERSONAL_TEMPLATES) })
}

export async function upsertCustomTemplate(template: PersonalTemplate): Promise<void> {
  const templates = await getCustomTemplates()
  const index = templates.findIndex(item => item.id === template.id)
  if (index >= 0) templates[index] = template
  else {
    if (templates.length >= MAX_PERSONAL_TEMPLATES) throw new Error('PERSONAL_TEMPLATE_LIMIT')
    templates.unshift(template)
  }
  await saveCustomTemplates(templates)
}

export async function recordTemplateUse(id: string): Promise<void> {
  const templates = await getCustomTemplates()
  const now = Date.now()
  const next = templates.map(template => template.id === id
    ? { ...template, lastUsedAt: now, useCount: template.useCount + 1 }
    : template)
  await saveCustomTemplates(next)
}

export async function getOptimizationHistory(): Promise<OptimizationHistoryEntry[]> {
  const result = await chrome.storage.local.get('optimizationHistory')
  return Array.isArray(result.optimizationHistory) ? result.optimizationHistory : []
}

export async function recordOptimization(entry: Omit<OptimizationHistoryEntry, 'id' | 'createdAt'>): Promise<void> {
  const history = await getOptimizationHistory()
  const next: OptimizationHistoryEntry = { ...entry, id: crypto.randomUUID(), createdAt: Date.now() }
  await chrome.storage.local.set({ optimizationHistory: [next, ...history].slice(0, 50) })
}
