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
  optimizeStyle: 'detailed' as const,
  dailyUsage: 0,
  lastResetDate: new Date().toISOString().split('T')[0],
}

export const MAX_FREE_DAILY_USAGE = 10
