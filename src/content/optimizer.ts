// ============================================================
// PromptPro Smart Optimizer
// 纯前端智能提示词优化器，无 API，无第三方依赖
// 将模糊的用户输入转化为清晰、自然的 AI 友好提示词
// 最终输出必须是自然语言，禁止 #角色 / #任务 / System Prompt 风格
// ============================================================

// ==================== 语言检测 ====================

type Language = 'zh' | 'en'

function detectLanguage(text: string): Language {
  const chineseChars = text.match(/[一-龥]/g)
  const chineseCount = chineseChars ? chineseChars.length : 0
  const totalChars = text.replace(/\s/g, '').length

  // If more than 30% of characters are Chinese, treat as Chinese
  return chineseCount / totalChars > 0.3 ? 'zh' : 'en'
}

// ==================== 分类规则 ====================

interface BilingualCategoryRule {
  keywords: string[]
  weight: number
  skeleton: {
    zh: {
      opening: string
      body: string
      requirements: string[]
    }
    en: {
      opening: string
      body: string
      requirements: string[]
    }
  }
}

const categoryRules: Record<string, BilingualCategoryRule> = {
  content: {
    keywords: [
      '文案', '公众号', '小红书', '博客', '标题', '推文', '种草', '带货',
      '笔记', '爆款', '涨粉', '写一篇', '稿件', '帖子', '文章', '内容',
      '脚本', '短视频', '封面', '排版', '朋友圈', '微博', '抖音',
      'content', 'blog', 'post', 'article', 'title', 'headline', 'copy', 'copywriting',
      'social media', 'tweet', 'writing', 'write', 'draft', 'caption',
    ],
    weight: 3,
    skeleton: {
      zh: {
        opening: '请帮我创作一篇适合{platform}风格的内容。',
        body: '主题：{userInput}',
        requirements: [
          '标题有吸引力',
          '自然口语化',
          '分段清晰',
          '适合移动端阅读',
        ],
      },
      en: {
        opening: 'Please help me create content suitable for {platform} style.',
        body: 'Topic: {userInput}',
        requirements: [
          'Compelling title',
          'Natural conversational tone',
          'Clear paragraph structure',
          'Mobile-friendly format',
        ],
      },
    },
  },

  coding: {
    keywords: [
      '代码', '函数', '算法', 'bug', 'debug', '报错', 'error', '接口',
      'api', '数据库', 'sql', '前端', '后端', '脚本', '程序', '开发',
      '实现', '重构', '部署', '编程', '变量', '循环', '递归', 'python',
      'javascript', 'java', 'css', 'html', '服务器', '框架',
      'code', 'function', 'algorithm', 'implement', 'refactor', 'deploy',
      'programming', 'variable', 'loop', 'recursion', 'server', 'framework',
      'database', 'frontend', 'backend', 'script', 'development',
    ],
    weight: 3,
    skeleton: {
      zh: {
        opening: '请帮我解决以下编程问题：',
        body: '问题：{userInput}',
        requirements: [
          '解释思路',
          '提供代码',
          '添加注释',
        ],
      },
      en: {
        opening: 'Please help me solve the following programming problem:',
        body: 'Problem: {userInput}',
        requirements: [
          'Explain the approach',
          'Provide code',
          'Add comments',
        ],
      },
    },
  },

  work: {
    keywords: [
      '周报', '日报', '月报', '汇报', '述职', '方案', '策划', '计划',
      '总结', '会议', '纪要', '邮件', '通知', '需求', 'prd', '绩效',
      'okr', 'kpi', '简历', '面试', '离职', '入职', '晋升', '答辩',
      '领导', '同事', '甲方', '项目', '排期',
      'report', 'weekly', 'monthly', 'summary', 'meeting', 'minutes', 'email',
      'proposal', 'plan', 'performance', 'resume', 'interview', 'project',
    ],
    weight: 2,
    skeleton: {
      zh: {
        opening: '请帮我撰写一份专业的职场文档。',
        body: '内容：{userInput}',
        requirements: [
          '结构清晰、逻辑严密',
          '语言专业简洁',
          '重点突出、数据说话',
          '符合职场沟通规范',
        ],
      },
      en: {
        opening: 'Please help me write a professional workplace document.',
        body: 'Content: {userInput}',
        requirements: [
          'Clear structure and tight logic',
          'Professional and concise language',
          'Highlight key points with data',
          'Follow workplace communication standards',
        ],
      },
    },
  },

  learning: {
    keywords: [
      '学习', '解释', '什么是', '怎么理解', '原理', '概念', '教程',
      '入门', '进阶', '知识', '考试', '复习', '课程', '论文', '理论',
      '公式', '定理', '证明', '区别', '对比', '为什么',
      'learn', 'explain', 'what is', 'how to understand', 'principle', 'concept',
      'tutorial', 'beginner', 'advanced', 'knowledge', 'exam', 'study', 'theory',
      'formula', 'theorem', 'proof', 'difference', 'compare', 'why',
    ],
    weight: 2,
    skeleton: {
      zh: {
        opening: '请用简单易懂的方式解释：',
        body: '{userInput}',
        requirements: [
          '分步骤',
          '举例',
          '避免复杂术语',
        ],
      },
      en: {
        opening: 'Please explain in simple terms:',
        body: '{userInput}',
        requirements: [
          'Break into steps',
          'Provide examples',
          'Avoid complex jargon',
        ],
      },
    },
  },

  life: {
    keywords: [
      '减肥', '健身', '食谱', '穿搭', '护肤', '养生', '睡眠', '心理',
      '情感', '恋爱', '育儿', '家居', '收纳', '宠物', '做饭', '菜谱',
      '减脂', '增肌', '美白', '祛痘', '瑜伽', '跑步', '早餐', '晚餐',
      'weight loss', 'fitness', 'recipe', 'fashion', 'skincare', 'health',
      'sleep', 'psychology', 'relationship', 'parenting', 'home', 'pet',
      'cooking', 'workout', 'yoga', 'running', 'breakfast', 'dinner',
    ],
    weight: 2,
    skeleton: {
      zh: {
        opening: '请给我一些实用的建议。',
        body: '话题：{userInput}',
        requirements: [
          '实用可操作',
          '贴近日常生活',
          '语言亲切自然',
          '给出具体步骤或方案',
        ],
      },
      en: {
        opening: 'Please give me some practical advice.',
        body: 'Topic: {userInput}',
        requirements: [
          'Practical and actionable',
          'Relatable to daily life',
          'Friendly and natural language',
          'Provide specific steps or plans',
        ],
      },
    },
  },

  travel: {
    keywords: [
      '旅游', '旅行', '攻略', '行程', '景点', '酒店', '机票', '签证',
      '自驾', '出行', '度假', '民宿', '路线', '打卡', '美食推荐',
      '必去', '几天', '预算',
      'travel', 'trip', 'tour', 'itinerary', 'destination', 'hotel', 'flight',
      'visa', 'vacation', 'sightseeing', 'route', 'budget', 'recommendation',
    ],
    weight: 2,
    skeleton: {
      zh: {
        opening: '请帮我规划一次旅行。',
        body: '需求：{userInput}',
        requirements: [
          '行程安排合理',
          '包含交通和住宿建议',
          '标注预算参考',
          '提醒注意事项',
        ],
      },
      en: {
        opening: 'Please help me plan a trip.',
        body: 'Requirements: {userInput}',
        requirements: [
          'Reasonable itinerary arrangement',
          'Include transportation and accommodation suggestions',
          'Note budget reference',
          'Remind precautions',
        ],
      },
    },
  },

  finance: {
    keywords: [
      '理财', '投资', '基金', '股票', '保险', '税务', '预算', '记账',
      '存钱', '贷款', '房贷', '信用卡', '收益', '资产', '利率', '通胀',
      '定投', '年化', '风险',
      'finance', 'investment', 'fund', 'stock', 'insurance', 'tax', 'budget',
      'saving', 'loan', 'mortgage', 'credit card', 'return', 'asset', 'interest',
      'inflation', 'risk',
    ],
    weight: 2,
    skeleton: {
      zh: {
        opening: '请帮我分析以下财务问题。',
        body: '问题：{userInput}',
        requirements: [
          '逻辑清晰',
          '考虑风险因素',
          '给出可操作的建议',
          '说明注意事项和前提假设',
        ],
      },
      en: {
        opening: 'Please help me analyze the following financial issue.',
        body: 'Issue: {userInput}',
        requirements: [
          'Clear logic',
          'Consider risk factors',
          'Provide actionable advice',
          'Explain precautions and assumptions',
        ],
      },
    },
  },

  general: {
    keywords: [],
    weight: 0,
    skeleton: {
      zh: {
        opening: '请帮我完成以下事情。',
        body: '{userInput}',
        requirements: [
          '条理清晰',
          '内容具体',
          '实用可操作',
        ],
      },
      en: {
        opening: 'Please help me with the following.',
        body: '{userInput}',
        requirements: [
          'Clear and organized',
          'Specific content',
          'Practical and actionable',
        ],
      },
    },
  },
}

// ==================== 上下文推断规则 ====================

interface InferRule {
  keywords: string[]
  value: { zh: string; en: string }
}

const platformRules: InferRule[] = [
  { keywords: ['小红书', '种草', '拔草', '姐妹们', '绝绝子'], value: { zh: '小红书', en: 'Xiaohongshu' } },
  { keywords: ['公众号', '推文', '关注', '在看'], value: { zh: '微信公众号', en: 'WeChat Official Account' } },
  { keywords: ['抖音', '短视频', '拍摄', '剪辑'], value: { zh: '抖音', en: 'Douyin' } },
  { keywords: ['知乎', '回答', '如何评价'], value: { zh: '知乎', en: 'Zhihu' } },
  { keywords: ['博客', 'blog', '技术文章'], value: { zh: '个人博客', en: 'personal blog' } },
  { keywords: ['朋友圈'], value: { zh: '朋友圈', en: 'WeChat Moments' } },
  { keywords: ['微博', '热搜'], value: { zh: '微博', en: 'Weibo' } },
  { keywords: ['b站', 'bilibili', '弹幕'], value: { zh: 'B站', en: 'Bilibili' } },
]

const toneRules: InferRule[] = [
  { keywords: ['正式', '商务', '严肃', '官方', 'formal', 'business', 'official'], value: { zh: '正式专业', en: 'formal and professional' } },
  { keywords: ['轻松', '有趣', '搞笑', '幽默', '段子', 'casual', 'funny', 'humorous'], value: { zh: '轻松幽默', en: 'casual and humorous' } },
  { keywords: ['真诚', '走心', '感动', '温暖', 'sincere', 'heartfelt', 'warm'], value: { zh: '真诚走心', en: 'sincere and heartfelt' } },
  { keywords: ['种草', '安利', '推荐', '好用', '必买', 'recommend'], value: { zh: '种草推荐', en: 'recommendation' } },
  { keywords: ['犀利', '吐槽', '锐评', 'critical', 'sharp'], value: { zh: '犀利点评', en: 'sharp and critical' } },
]

const audienceRules: InferRule[] = [
  { keywords: ['小白', '入门', '新手', '零基础', '初学', 'beginner', 'newbie', 'starter'], value: { zh: '零基础新手', en: 'beginners' } },
  { keywords: ['专业', '资深', '进阶', '高级', '深入', 'professional', 'advanced', 'expert'], value: { zh: '有经验的专业人士', en: 'experienced professionals' } },
  { keywords: ['学生', '考试', '复习', '大学', '考研', 'student', 'exam'], value: { zh: '学生', en: 'students' } },
  { keywords: ['宝妈', '育儿', '孩子', '家长', 'parent', 'parenting'], value: { zh: '家长', en: 'parents' } },
  { keywords: ['职场', '打工', '上班', '同事', '领导', 'workplace', 'office', 'colleague'], value: { zh: '职场人士', en: 'workplace professionals' } },
]

const outputStyleRules: InferRule[] = [
  { keywords: ['列表', '清单', '步骤', '流程', '分步', 'list', 'steps', 'checklist'], value: { zh: '分步列表', en: 'step-by-step list' } },
  { keywords: ['表格', '对比', '比较', '优缺点', 'table', 'comparison', 'compare'], value: { zh: '表格对比', en: 'comparison table' } },
  { keywords: ['简短', '一句话', '简洁', '概括', 'brief', 'concise', 'short'], value: { zh: '简短精炼', en: 'brief and concise' } },
  { keywords: ['详细', '完整', '全面', '深入', 'detailed', 'comprehensive', 'in-depth'], value: { zh: '详细展开', en: 'detailed and comprehensive' } },
]

const implicitPlatformRules: InferRule[] = [
  { keywords: ['文案', '减肥', '穿搭', '护肤', '美白', '祛痘'], value: { zh: '小红书', en: 'Xiaohongshu' } },
  { keywords: ['debug', 'bug', '报错', 'error', '代码'], value: { zh: '技术社区', en: 'tech community' } },
  { keywords: ['周报', '汇报', '述职', '绩效'], value: { zh: '职场', en: 'workplace' } },
]

// ==================== 类型定义 ====================

interface InferredContext {
  platform: { zh: string; en: string } | null
  tone: { zh: string; en: string } | null
  audience: { zh: string; en: string } | null
  outputStyle: { zh: string; en: string } | null
}

interface PromptData {
  userInput: string
  category: string
  mode: string
  context: InferredContext
  skeleton: BilingualCategoryRule['skeleton']
  role: string | null
  constraints: string[]
  structure: string[]
  lang: Language
}

// ==================== 核心函数 ====================

/**
 * 检测用户输入的分类
 */
function detectCategory(userInput: string, selectedCategory: string | null = null): string {
  if (selectedCategory && categoryRules[selectedCategory]) {
    return selectedCategory
  }

  const input = userInput.toLowerCase()
  let best = 'general'
  let bestScore = 0

  for (const [name, rule] of Object.entries(categoryRules)) {
    if (name === 'general') continue

    let score = 0
    for (const kw of rule.keywords) {
      if (input.includes(kw.toLowerCase())) {
        score += rule.weight
      }
    }

    if (score > bestScore) {
      bestScore = score
      best = name
    }
  }

  return best
}

/**
 * 自动推断上下文（平台、语气、受众、输出风格）
 */
function inferContext(userInput: string): InferredContext {
  const input = userInput.toLowerCase()

  const match = (rules: InferRule[]): { zh: string; en: string } | null => {
    for (const rule of rules) {
      if (rule.keywords.some((k) => input.includes(k))) {
        return rule.value
      }
    }
    return null
  }

  const platform = match(platformRules) || match(implicitPlatformRules)

  return {
    platform,
    tone: match(toneRules),
    audience: match(audienceRules),
    outputStyle: match(outputStyleRules),
  }
}

/**
 * 构建内部结构化提示词数据
 */
function buildPrompt(userInput: string, category: string, mode: string): PromptData {
  const rule = categoryRules[category] || categoryRules.general
  const context = inferContext(userInput)
  const lang = detectLanguage(userInput)

  const data: PromptData = {
    userInput,
    category,
    mode,
    context,
    skeleton: rule.skeleton,
    role: null,
    constraints: [],
    structure: [],
    lang,
  }

  if (mode === 'light') {
    if (context.platform) {
      const platformText = context.platform[lang]
      data.constraints.push(lang === 'zh' ? `适合${platformText}风格` : `Suitable for ${platformText} style`)
    }
    if (context.tone) {
      const toneText = context.tone[lang]
      data.constraints.push(lang === 'zh' ? `语言${toneText}` : `${toneText} language`)
    }
    return data
  }

  if (mode === 'smart') {
    data.structure = [...rule.skeleton[lang].requirements]
    if (context.platform) {
      const platformText = context.platform[lang]
      data.constraints.push(lang === 'zh' ? `适合${platformText}风格` : `Suitable for ${platformText} style`)
    }
    if (context.tone) {
      const toneText = context.tone[lang]
      data.constraints.push(lang === 'zh' ? `${toneText}的语气` : `${toneText} tone`)
    }
    if (context.audience) {
      const audienceText = context.audience[lang]
      data.constraints.push(lang === 'zh' ? `面向${audienceText}` : `For ${audienceText}`)
    }
    if (context.outputStyle) {
      const styleText = context.outputStyle[lang]
      data.constraints.push(lang === 'zh' ? `以${styleText}形式呈现` : `Present as ${styleText}`)
    }
    return data
  }

  if (mode === 'pro') {
    data.role = inferRole(category, lang)
    data.structure = [...rule.skeleton[lang].requirements]
    if (context.platform) {
      const platformText = context.platform[lang]
      data.constraints.push(lang === 'zh' ? `针对${platformText}平台深度优化` : `Deeply optimized for ${platformText} platform`)
    }
    if (context.tone) {
      const toneText = context.tone[lang]
      data.constraints.push(lang === 'zh' ? `整体语气：${toneText}` : `Overall tone: ${toneText}`)
    }
    if (context.audience) {
      const audienceText = context.audience[lang]
      data.constraints.push(lang === 'zh' ? `目标受众：${audienceText}` : `Target audience: ${audienceText}`)
    }
    if (context.outputStyle) {
      const styleText = context.outputStyle[lang]
      data.constraints.push(lang === 'zh' ? `输出格式偏好：${styleText}` : `Output format preference: ${styleText}`)
    }
    data.constraints.push(lang === 'zh' ? '内容有深度且专业' : 'Content should be in-depth and professional')
    data.constraints.push(lang === 'zh' ? '避免泛泛而谈' : 'Avoid generalizations')
    return data
  }

  return data
}

/**
 * 人性化引擎：将内部结构化数据转换为自然语言
 * 禁止输出 #角色 / #任务 / #背景 / markdown标题格式
 */
function humanizePrompt(data: PromptData): string {
  const { mode } = data

  if (mode === 'light') return humanizeLight(data)
  if (mode === 'smart') return humanizeSmart(data)
  if (mode === 'pro') return humanizePro(data)

  return data.userInput
}

// ==================== 导出函数 ====================

/**
 * 本地优化主入口（替代旧的 localOptimize）
 * 默认使用 smart 模式，输出自然语言
 */
export function localOptimize(text: string): string {
  return smartOptimize(text, 'smart')
}

/**
 * 智能优化主函数
 */
export function smartOptimize(userInput: string, mode: string = 'smart'): string {
  if (!userInput || !userInput.trim()) return userInput || ''

  const trimmed = userInput.trim()
  const category = detectCategory(trimmed)
  const promptData = buildPrompt(trimmed, category, mode)
  return humanizePrompt(promptData)
}

/**
 * 快速增强（light 模式）
 */
export function quickEnhance(userInput: string): string {
  return smartOptimize(userInput, 'light')
}

// ==================== 内部辅助函数 ====================

function inferRole(category: string, lang: Language): string {
  const map: Record<string, { zh: string; en: string }> = {
    content: { zh: '资深内容创作者与新媒体运营专家', en: 'senior content creator and new media expert' },
    coding: { zh: '拥有十年经验的全栈高级工程师', en: 'senior full-stack engineer with 10 years of experience' },
    work: { zh: '500强企业资深管理顾问', en: 'senior management consultant from Fortune 500' },
    learning: { zh: '善于深入浅出的资深教育者', en: 'experienced educator skilled at explaining complex topics simply' },
    life: { zh: '专业生活方式顾问', en: 'professional lifestyle consultant' },
    travel: { zh: '走过50个国家的资深旅行规划师', en: 'experienced travel planner who has visited 50 countries' },
    finance: { zh: '持证理财规划师', en: 'certified financial planner' },
    general: { zh: '该领域的资深专家', en: 'senior expert in the field' },
  }
  return map[category]?.[lang] || map.general[lang]
}

function polishInput(input: string, lang: Language): string {
  if (lang === 'zh') {
    if (input.startsWith('请')) return input
    if (input.startsWith('帮我')) return '请' + input

    const verbs = ['写', '做', '改', '翻译', '分析', '解释', '生成', '设计', '规划', '推荐', '列出', '总结', '对比', '评价', '优化']
    for (const v of verbs) {
      if (input.startsWith(v)) return '请帮我' + input
    }

    return '请帮我' + input
  } else {
    if (input.startsWith('Please') || input.startsWith('please')) return input
    if (input.startsWith('Help me') || input.startsWith('help me')) return 'Please ' + input.toLowerCase()

    const verbs = ['write', 'create', 'make', 'change', 'translate', 'analyze', 'explain', 'generate', 'design', 'plan', 'recommend', 'list', 'summarize', 'compare', 'evaluate', 'optimize']
    for (const v of verbs) {
      if (input.toLowerCase().startsWith(v)) return 'Please help me ' + input.toLowerCase()
    }

    return 'Please help me ' + input.toLowerCase()
  }
}

function fillSkeleton(template: string, userInput: string, platform: { zh: string; en: string } | null, lang: Language): string {
  let result = template
  result = result.replace('{userInput}', userInput)
  if (platform) {
    const platformText = platform[lang]
    result = result.replace('{platform}', platformText)
    result = result.replace('[platform]', platformText)
  } else {
    if (lang === 'zh') {
      result = result.replace('适合{platform}风格的', '')
      result = result.replace('适合[platform]风格的', '')
      result = result.replace('{platform}', '目标平台')
      result = result.replace('[platform]', '目标平台')
    } else {
      result = result.replace('suitable for {platform} style', '')
      result = result.replace('suitable for [platform] style', '')
      result = result.replace('{platform}', 'target platform')
      result = result.replace('[platform]', 'target platform')
    }
  }
  return result
}

// ==================== Light 模式 ====================

function humanizeLight(data: PromptData): string {
  const { userInput, context, category, lang } = data
  const parts: string[] = []

  parts.push(polishInput(userInput, lang))

  if (lang === 'zh') {
    const categoryHint: Record<string, string | null> = {
      content: '语言自然真实',
      coding: '请解释清楚思路',
      work: '语言专业简洁',
      learning: '请讲得通俗易懂',
      life: '建议要实用可操作',
      travel: '信息尽量具体实用',
      finance: '请考虑风险因素',
      general: null,
    }
    const hint = categoryHint[category]
    if (hint) parts.push(hint)

    if (context.platform && context.platform.zh !== '技术社区' && context.platform.zh !== '职场') {
      parts.push(`适合${context.platform.zh}风格`)
    }
    if (context.tone) {
      parts.push(`语气${context.tone.zh}`)
    }

    const negativeHint: Record<string, string | null> = {
      content: '不要太像广告',
      coding: null,
      work: '避免空话套话',
      learning: '不要堆砌术语',
      life: '不要太笼统',
      travel: null,
      finance: '不要只讲理论',
      general: null,
    }
    const neg = negativeHint[category]
    if (neg) parts.push(neg)

    return parts.join('，\n') + '。'
  } else {
    const categoryHint: Record<string, string | null> = {
      content: 'Natural and authentic language',
      coding: 'Please explain the approach clearly',
      work: 'Professional and concise language',
      learning: 'Please explain in simple terms',
      life: 'Advice should be practical and actionable',
      travel: 'Information should be specific and practical',
      finance: 'Please consider risk factors',
      general: null,
    }
    const hint = categoryHint[category]
    if (hint) parts.push(hint)

    if (context.platform && context.platform.en !== 'tech community' && context.platform.en !== 'workplace') {
      parts.push(`Suitable for ${context.platform.en} style`)
    }
    if (context.tone) {
      parts.push(`${context.tone.en} tone`)
    }

    const negativeHint: Record<string, string | null> = {
      content: 'Don\'t make it too advertising-like',
      coding: null,
      work: 'Avoid empty rhetoric',
      learning: 'Don\'t pile up jargon',
      life: 'Don\'t be too general',
      travel: null,
      finance: 'Don\'t just talk theory',
      general: null,
    }
    const neg = negativeHint[category]
    if (neg) parts.push(neg)

    return parts.join(', ') + '.'
  }
}

// ==================== Smart 模式 ====================

function humanizeSmart(data: PromptData): string {
  const { userInput, context, skeleton, constraints, structure, lang } = data
  const lines: string[] = []

  const opening = fillSkeleton(skeleton[lang].opening, userInput, context.platform, lang)
  lines.push(opening)
  lines.push('')

  const body = fillSkeleton(skeleton[lang].body, userInput, context.platform, lang)
  lines.push(body)
  lines.push('')

  if (structure.length > 0) {
    lines.push(lang === 'zh' ? '希望你能做到：' : 'I hope you can:')
    for (const item of structure) {
      lines.push(`- ${item}`)
    }
  }

  const extras = constraints.filter(
    (c) => !structure.some((s) => s.includes(c) || c.includes(s))
  )
  if (extras.length > 0) {
    lines.push('')
    lines.push(lang === 'zh' ? '另外：' : 'Additionally:')
    for (const c of extras) {
      lines.push(`- ${c}`)
    }
  }

  return lines.join('\n')
}

// ==================== Pro 模式 ====================

function humanizePro(data: PromptData): string {
  const { userInput, context, skeleton, constraints, structure, role, lang } = data
  const lines: string[] = []

  if (lang === 'zh') {
    lines.push(`请你以${role}的身份来回答我的问题。`)
  } else {
    lines.push(`Please answer my question as ${role}.`)
  }
  lines.push('')

  const opening = fillSkeleton(skeleton[lang].opening, userInput, context.platform, lang)
  lines.push(opening)
  lines.push('')

  const body = fillSkeleton(skeleton[lang].body, userInput, context.platform, lang)
  lines.push(body)
  lines.push('')

  if (structure.length > 0) {
    lines.push(lang === 'zh' ? '请在回答中做到以下几点：' : 'Please ensure the following in your answer:')
    for (const item of structure) {
      lines.push(`- ${item}`)
    }
  }

  if (constraints.length > 0) {
    lines.push('')
    lines.push(lang === 'zh' ? '同时请注意：' : 'Also please note:')
    for (const c of constraints) {
      if (!structure.includes(c)) {
        lines.push(`- ${c}`)
      }
    }
  }

  lines.push('')
  if (lang === 'zh') {
    lines.push('请基于你的专业经验，给出有深度、可落地的回答。')
  } else {
    lines.push('Please provide an in-depth and actionable answer based on your professional experience.')
  }

  return lines.join('\n')
}
