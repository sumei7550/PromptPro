import { Settings, Locale, PersonalTemplate, OptimizationHistoryEntry, OptimizeStyle } from './types'
import { DEFAULT_SETTINGS, MAX_PERSONAL_TEMPLATES } from './constants'

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
  const settings = await getSettings()
  const today = new Date().toISOString().split('T')[0]

  if (settings.lastResetDate !== today) {
    await saveSettings({ dailyUsage: 1, lastResetDate: today })
    return 1
  }

  const newCount = settings.dailyUsage + 1
  await saveSettings({ dailyUsage: newCount })
  return newCount
}

export async function getRemainingUsage(): Promise<number> {
  const { MAX_FREE_DAILY_USAGE } = await import('./constants')
  const settings = await getSettings()
  const today = new Date().toISOString().split('T')[0]
  const used = settings.lastResetDate === today ? settings.dailyUsage : 0
  return Math.max(0, MAX_FREE_DAILY_USAGE - used)
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
