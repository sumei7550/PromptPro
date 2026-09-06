export const CATEGORIES = [
  { id: 'writing', icon: '✍️', label: { zh: '写作', en: 'Writing' } },
  { id: 'workplace', icon: '💼', label: { zh: '职场', en: 'Workplace' } },
  { id: 'coding', icon: '💻', label: { zh: '编程', en: 'Coding' } },
  { id: 'translation', icon: '🌐', label: { zh: '翻译', en: 'Translation' } },
  { id: 'marketing', icon: '📢', label: { zh: '营销', en: 'Marketing' } },
  { id: 'academic', icon: '🎓', label: { zh: '学术', en: 'Academic' } },
  { id: 'analysis', icon: '📊', label: { zh: '分析', en: 'Analysis' } },
  { id: 'creative', icon: '🎨', label: { zh: '创意', en: 'Creative' } },
] as const

export const DEFAULT_SETTINGS = {
  locale: 'en' as const,
  optimizeStyle: 'structured' as const,
  freeAiImproveUsed: 0,
  dailyUsage: 0,
  lastResetDate: new Date().toISOString().split('T')[0],
}

export const MAX_FREE_AI_IMPROVES = 5
export const FREE_IMPROVE_WINDOW = 7 * 24 * 60 * 60 * 1000
export const PRICING_URL = 'https://prompt-pro-psi.vercel.app/pricing'
export const MAX_PERSONAL_TEMPLATES = 10
