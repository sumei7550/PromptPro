export interface PromptTemplate {
  id: string
  category: string
  title: { zh: string; en: string }
  description: { zh: string; en: string }
  prompt: { zh: string; en: string }
  variables?: string[]
  tags: { zh: string; en: string }[]
  keywords?: string[]
}

export interface PromptTemplateVersion {
  id: string
  prompt: string
  createdAt: number
}

export interface PersonalTemplate {
  id: string
  title: string
  description: string
  prompt: string
  category: string
  tags: string[]
  isFavorite: boolean
  createdAt: number
  updatedAt: number
  lastUsedAt?: number
  useCount: number
  versions: PromptTemplateVersion[]
}

export type OptimizeStyle = 'concise' | 'professional' | 'structured' | 'deep-analysis' | 'content-creation' | 'code'

export interface OptimizationHistoryEntry {
  id: string
  originalText: string
  optimizedText: string
  style: OptimizeStyle
  createdAt: number
}

export type Platform = 'chatgpt' | 'claude' | 'gemini' | 'deepseek' | 'doubao' | 'perplexity' | 'copilot' | 'grok' | 'google-ai-studio' | 'cursor' | 'v0' | 'lovable'

export type Locale = 'zh' | 'en'

export interface Settings {
  locale: Locale
  optimizeStyle: OptimizeStyle
  /** Rolling-window AI Improve usage. Legacy daily fields remain for migration compatibility only. */
  freeAiImproveUsed: number
  freeAiImproveResetAt?: number
  dailyUsage: number
  lastResetDate: string
  localeSetByUser?: boolean
}

export interface Message {
  type: string
  payload?: unknown
}

export interface OptimizeRequest {
  type: 'OPTIMIZE_PROMPT'
  payload: {
    text: string
    platform: Platform
    tabId: number
  }
}

export interface OptimizeResult {
  type: 'OPTIMIZE_RESULT'
  payload: {
    success: boolean
    text?: string
    error?: string
  }
}

export interface InsertTemplateRequest {
  type: 'INSERT_TEMPLATE'
  payload: {
    text: string
  }
}
