import type { Locale } from '../types.ts'
import { zh } from './zh-CN.ts'
import { en } from './en-US.ts'

const messages: Record<Locale, Record<string, string>> = { zh, en }

let currentLocale: Locale = 'en'

export function setLocale(locale: Locale) {
  currentLocale = locale
}

export function t(key: string): string {
  return translate(currentLocale, key)
}

export function translate(locale: Locale, key: string): string {
  return messages[locale]?.[key] || messages.en?.[key] || key
}

export function getLocale(): Locale {
  return currentLocale
}
