import { Settings } from './types'
import { DEFAULT_SETTINGS } from './constants'

export async function getSettings(): Promise<Settings> {
  const result = await chrome.storage.local.get('settings')
  return { ...DEFAULT_SETTINGS, ...result.settings }
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

export async function getCustomTemplates() {
  const result = await chrome.storage.local.get('customTemplates')
  return result.customTemplates || []
}

export async function saveCustomTemplates(templates: unknown[]) {
  await chrome.storage.local.set({ customTemplates: templates })
}
