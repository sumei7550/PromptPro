import { Locale } from '../types'
import { zh } from './zh-CN'
import { en } from './en-US'

const messages: Record<Locale, Record<string, string>> = { zh, en }

let currentLocale: Locale = 'zh'

export function setLocale(locale: Locale) {
  currentLocale = locale
}

export function t(key: string): string {
  return messages[currentLocale]?.[key] || messages['en']?.[key] || key
}

export function getLocale(): Locale {
  return currentLocale
}
