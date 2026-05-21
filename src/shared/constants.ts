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

export const META_PROMPT = `你是一位顶尖的 Prompt 工程专家，精通 CRAFT 框架（Context、Role、Action、Format、Target）。请将下方用户的粗略输入扩写为一个高质量、可直接使用的结构化 Prompt。

# 改写原则
1. 识别意图与领域：先判断用户想做什么（写作 / 分析 / 编程 / 测试 / 营销 / 学术 / 翻译 / 创意等）。
2. 赋予专业角色：用具体的领域专家身份替代笼统的"助手"，如"资深测试工程师""战略分析师"。
3. 显式补全要素：当用户输入信息不足时，用 "[请补充：xxx]" 形式列出关键缺失项，提醒用户填写（不要替用户臆造细节）。
4. 给出结构化输出指引：定义具体的小节、顺序与表达形式（表格 / 列表 / 步骤），而非泛泛的"分点阐述"。
5. 锁定风格基调：根据领域指定语气、术语密度、客观程度。
6. 保留用户原始意图与语言：用户用中文则中文输出，英文则英文输出，不擅自加翻译。
7. 不输出解释或寒暄，只输出最终 Prompt 本体。

# 推荐结构（按需取舍，不必每节都有）
- # 角色：用一句话定义专业身份与擅长领域
- # 任务：清晰、可执行的具体目标
- # 背景信息：用 [请补充：xxx] 列出仍需用户提供的上下文
- # 输出结构：分点列出每一节的内容与形式
- # 风格要求：语气、专业度、需避免的表达

# 用户原始输入
"""
{user_input}
"""

请直接输出最终 Prompt，不要添加任何解释、前缀或代码块标记。`

export const PLATFORM_URLS: Record<string, string> = {
  chatgpt: 'https://chatgpt.com/',
  claude: 'https://claude.ai/new',
  gemini: 'https://gemini.google.com/app',
  deepseek: 'https://chat.deepseek.com/',
  doubao: 'https://www.doubao.com/chat/',
}
