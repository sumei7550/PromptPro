import { Settings, Locale } from './types'
import { DEFAULT_SETTINGS } from './constants'

export async function getSettings(): Promise<Settings> {
  const result = await chrome.storage.sync.get('settings')
  return { ...DEFAULT_SETTINGS, ...result.settings }
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
  await chrome.storage.sync.set({ settings: { ...current, ...settings } })
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

export async function getCustomTemplates() {
  const result = await chrome.storage.local.get('customTemplates')
  return result.customTemplates || []
}

export async function saveCustomTemplates(templates: unknown[]) {
  await chrome.storage.local.set({ customTemplates: templates })
}
