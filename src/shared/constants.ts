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
  locale: 'zh' as const,
  optimizeStyle: 'detailed' as const,
  dailyUsage: 0,
  lastResetDate: new Date().toISOString().split('T')[0],
}

export const MAX_FREE_DAILY_USAGE = 10

export const META_PROMPT = `你是一个提示词优化专家。请将以下用户输入的粗略提示词优化为结构化、高质量的提示词。

优化规则：
1. 明确角色定义（如适用）
2. 清晰描述任务目标
3. 添加约束条件和输出格式要求
4. 补充必要的上下文信息
5. 保持用户原始意图不变
6. 使用与原文相同的语言

用户原始输入：
"""
{user_input}
"""

请直接输出优化后的提示词，不要添加任何解释或前缀。`

export const PLATFORM_URLS: Record<string, string> = {
  chatgpt: 'https://chatgpt.com/',
  claude: 'https://claude.ai/new',
  gemini: 'https://gemini.google.com/app',
  deepseek: 'https://chat.deepseek.com/',
  doubao: 'https://www.doubao.com/chat/',
}
