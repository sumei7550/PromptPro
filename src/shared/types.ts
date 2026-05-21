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

export type Platform = 'chatgpt' | 'claude' | 'gemini' | 'deepseek' | 'doubao'

export type Locale = 'zh' | 'en'

export interface Settings {
  locale: Locale
  optimizeStyle: 'detailed' | 'concise' | 'academic' | 'casual'
  dailyUsage: number
  lastResetDate: string
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
