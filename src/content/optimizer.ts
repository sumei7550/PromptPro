// ============================================================
// PromptPro Smart Optimizer
// 纯前端智能提示词优化器，无 API，无第三方依赖
// 将模糊的用户输入转化为清晰、自然的 AI 友好提示词
// 最终输出必须是自然语言，禁止 #角色 / #任务 / System Prompt 风格
// ============================================================

// ==================== 分类规则 ====================

interface CategoryRule {
  keywords: string[]
  weight: number
  skeleton: {
    opening: string
    body: string
    requirements: string[]
  }
}

const categoryRules: Record<string, CategoryRule> = {
  content: {
    keywords: [
      '文案', '公众号', '小红书', '博客', '标题', '推文', '种草', '带货',
      '笔记', '爆款', '涨粉', '写一篇', '稿件', '帖子', '文章', '内容',
      '脚本', '短视频', '封面', '排版', '朋友圈', '微博', '抖音',
    ],
    weight: 3,
    skeleton: {
      opening: '请帮我创作一篇适合{platform}风格的内容。',
      body: '主题：{userInput}',
      requirements: [
        '标题有吸引力',
        '自然口语化',
        '分段清晰',
        '适合移动端阅读',
      ],
    },
  },

  coding: {
    keywords: [
      '代码', '函数', '算法', 'bug', 'debug', '报错', 'error', '接口',
      'api', '数据库', 'sql', '前端', '后端', '脚本', '程序', '开发',
      '实现', '重构', '部署', '编程', '变量', '循环', '递归', 'python',
      'javascript', 'java', 'css', 'html', '服务器', '框架',
    ],
    weight: 3,
    skeleton: {
      opening: '请帮我解决以下编程问题：',
      body: '问题：{userInput}',
      requirements: [
        '解释思路',
        '提供代码',
        '添加注释',
      ],
    },
  },

  work: {
    keywords: [
      '周报', '日报', '月报', '汇报', '述职', '方案', '策划', '计划',
      '总结', '会议', '纪要', '邮件', '通知', '需求', 'prd', '绩效',
      'okr', 'kpi', '简历', '面试', '离职', '入职', '晋升', '答辩',
      '领导', '同事', '甲方', '项目', '排期',
    ],
    weight: 2,
    skeleton: {
      opening: '请帮我撰写一份专业的职场文档。',
      body: '内容：{userInput}',
      requirements: [
        '结构清晰、逻辑严密',
        '语言专业简洁',
        '重点突出、数据说话',
        '符合职场沟通规范',
      ],
    },
  },

  learning: {
    keywords: [
      '学习', '解释', '什么是', '怎么理解', '原理', '概念', '教程',
      '入门', '进阶', '知识', '考试', '复习', '课程', '论文', '理论',
      '公式', '定理', '证明', '区别', '对比', '为什么',
    ],
    weight: 2,
    skeleton: {
      opening: '请用简单易懂的方式解释：',
      body: '{userInput}',
      requirements: [
        '分步骤',
        '举例',
        '避免复杂术语',
      ],
    },
  },

  life: {
    keywords: [
      '减肥', '健身', '食谱', '穿搭', '护肤', '养生', '睡眠', '心理',
      '情感', '恋爱', '育儿', '家居', '收纳', '宠物', '做饭', '菜谱',
      '减脂', '增肌', '美白', '祛痘', '瑜伽', '跑步', '早餐', '晚餐',
    ],
    weight: 2,
    skeleton: {
      opening: '请给我一些实用的建议。',
      body: '话题：{userInput}',
      requirements: [
        '实用可操作',
        '贴近日常生活',
        '语言亲切自然',
        '给出具体步骤或方案',
      ],
    },
  },

  travel: {
    keywords: [
      '旅游', '旅行', '攻略', '行程', '景点', '酒店', '机票', '签证',
      '自驾', '出行', '度假', '民宿', '路线', '打卡', '美食推荐',
      '必去', '几天', '预算',
    ],
    weight: 2,
    skeleton: {
      opening: '请帮我规划一次旅行。',
      body: '需求：{userInput}',
      requirements: [
        '行程安排合理',
        '包含交通和住宿建议',
        '标注预算参考',
        '提醒注意事项',
      ],
    },
  },

  finance: {
    keywords: [
      '理财', '投资', '基金', '股票', '保险', '税务', '预算', '记账',
      '存钱', '贷款', '房贷', '信用卡', '收益', '资产', '利率', '通胀',
      '定投', '年化', '风险',
    ],
    weight: 2,
    skeleton: {
      opening: '请帮我分析以下财务问题。',
      body: '问题：{userInput}',
      requirements: [
        '逻辑清晰',
        '考虑风险因素',
        '给出可操作的建议',
        '说明注意事项和前提假设',
      ],
    },
  },

  general: {
    keywords: [],
    weight: 0,
    skeleton: {
      opening: '请帮我完成以下事情。',
      body: '{userInput}',
      requirements: [
        '条理清晰',
        '内容具体',
        '实用可操作',
      ],
    },
  },
}

// ==================== 上下文推断规则 ====================

interface InferRule {
  keywords: string[]
  value: string
}

const platformRules: InferRule[] = [
  { keywords: ['小红书', '种草', '拔草', '姐妹们', '绝绝子'], value: '小红书' },
  { keywords: ['公众号', '推文', '关注', '在看'], value: '微信公众号' },
  { keywords: ['抖音', '短视频', '拍摄', '剪辑'], value: '抖音' },
  { keywords: ['知乎', '回答', '如何评价'], value: '知乎' },
  { keywords: ['博客', 'blog', '技术文章'], value: '个人博客' },
  { keywords: ['朋友圈'], value: '朋友圈' },
  { keywords: ['微博', '热搜'], value: '微博' },
  { keywords: ['b站', 'bilibili', '弹幕'], value: 'B站' },
]

const toneRules: InferRule[] = [
  { keywords: ['正式', '商务', '严肃', '官方'], value: '正式专业' },
  { keywords: ['轻松', '有趣', '搞笑', '幽默', '段子'], value: '轻松幽默' },
  { keywords: ['真诚', '走心', '感动', '温暖'], value: '真诚走心' },
  { keywords: ['种草', '安利', '推荐', '好用', '必买'], value: '种草推荐' },
  { keywords: ['犀利', '吐槽', '锐评'], value: '犀利点评' },
]

const audienceRules: InferRule[] = [
  { keywords: ['小白', '入门', '新手', '零基础', '初学'], value: '零基础新手' },
  { keywords: ['专业', '资深', '进阶', '高级', '深入'], value: '有经验的专业人士' },
  { keywords: ['学生', '考试', '复习', '大学', '考研'], value: '学生' },
  { keywords: ['宝妈', '育儿', '孩子', '家长'], value: '家长' },
  { keywords: ['职场', '打工', '上班', '同事', '领导'], value: '职场人士' },
]

const outputStyleRules: InferRule[] = [
  { keywords: ['列表', '清单', '步骤', '流程', '分步'], value: '分步列表' },
  { keywords: ['表格', '对比', '比较', '优缺点'], value: '表格对比' },
  { keywords: ['简短', '一句话', '简洁', '概括'], value: '简短精炼' },
  { keywords: ['详细', '完整', '全面', '深入'], value: '详细展开' },
]

const implicitPlatformRules: InferRule[] = [
  { keywords: ['文案', '减肥', '穿搭', '护肤', '美白', '祛痘'], value: '小红书' },
  { keywords: ['debug', 'bug', '报错', 'error', '代码'], value: '技术社区' },
  { keywords: ['周报', '汇报', '述职', '绩效'], value: '职场' },
]

// ==================== 类型定义 ====================

interface InferredContext {
  platform: string | null
  tone: string | null
  audience: string | null
  outputStyle: string | null
}

interface PromptData {
  userInput: string
  category: string
  mode: string
  context: InferredContext
  skeleton: CategoryRule['skeleton']
  role: string | null
  constraints: string[]
  structure: string[]
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

  const match = (rules: InferRule[]): string | null => {
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

  const data: PromptData = {
    userInput,
    category,
    mode,
    context,
    skeleton: rule.skeleton,
    role: null,
    constraints: [],
    structure: [],
  }

  if (mode === 'light') {
    if (context.platform) data.constraints.push(`适合${context.platform}风格`)
    if (context.tone) data.constraints.push(`语言${context.tone}`)
    return data
  }

  if (mode === 'smart') {
    data.structure = [...rule.skeleton.requirements]
    if (context.platform) data.constraints.push(`适合${context.platform}风格`)
    if (context.tone) data.constraints.push(`${context.tone}的语气`)
    if (context.audience) data.constraints.push(`面向${context.audience}`)
    if (context.outputStyle) data.constraints.push(`以${context.outputStyle}形式呈现`)
    return data
  }

  if (mode === 'pro') {
    data.role = inferRole(category)
    data.structure = [...rule.skeleton.requirements]
    if (context.platform) data.constraints.push(`针对${context.platform}平台深度优化`)
    if (context.tone) data.constraints.push(`整体语气：${context.tone}`)
    if (context.audience) data.constraints.push(`目标受众：${context.audience}`)
    if (context.outputStyle) data.constraints.push(`输出格式偏好：${context.outputStyle}`)
    data.constraints.push('内容有深度且专业')
    data.constraints.push('避免泛泛而谈')
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

function inferRole(category: string): string {
  const map: Record<string, string> = {
    content: '资深内容创作者与新媒体运营专家',
    coding: '拥有十年经验的全栈高级工程师',
    work: '500强企业资深管理顾问',
    learning: '善于深入浅出的资深教育者',
    life: '专业生活方式顾问',
    travel: '走过50个国家的资深旅行规划师',
    finance: '持证理财规划师',
    general: '该领域的资深专家',
  }
  return map[category] || map.general
}

function polishInput(input: string): string {
  if (input.startsWith('请')) return input
  if (input.startsWith('帮我')) return '请' + input

  const verbs = ['写', '做', '改', '翻译', '分析', '解释', '生成', '设计', '规划', '推荐', '列出', '总结', '对比', '评价', '优化']
  for (const v of verbs) {
    if (input.startsWith(v)) return '请帮我' + input
  }

  return '请帮我' + input
}

function fillSkeleton(template: string, userInput: string, platform: string | null): string {
  let result = template
  result = result.replace('{userInput}', userInput)
  if (platform) {
    result = result.replace('{platform}', platform)
    result = result.replace('[platform]', platform)
  } else {
    result = result.replace('适合{platform}风格的', '')
    result = result.replace('适合[platform]风格的', '')
    result = result.replace('{platform}', '目标平台')
    result = result.replace('[platform]', '目标平台')
  }
  return result
}

// ==================== Light 模式 ====================

function humanizeLight(data: PromptData): string {
  const { userInput, context, category } = data
  const parts: string[] = []

  parts.push(polishInput(userInput))

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

  if (context.platform && context.platform !== '技术社区' && context.platform !== '职场') {
    parts.push(`适合${context.platform}风格`)
  }
  if (context.tone) {
    parts.push(`语气${context.tone}`)
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
}

// ==================== Smart 模式 ====================

function humanizeSmart(data: PromptData): string {
  const { userInput, context, skeleton, constraints, structure } = data
  const lines: string[] = []

  const opening = fillSkeleton(skeleton.opening, userInput, context.platform)
  lines.push(opening)
  lines.push('')

  const body = fillSkeleton(skeleton.body, userInput, context.platform)
  lines.push(body)
  lines.push('')

  if (structure.length > 0) {
    lines.push('希望你能做到：')
    for (const item of structure) {
      lines.push(`- ${item}`)
    }
  }

  const extras = constraints.filter(
    (c) => !structure.some((s) => s.includes(c) || c.includes(s))
  )
  if (extras.length > 0) {
    lines.push('')
    lines.push('另外：')
    for (const c of extras) {
      lines.push(`- ${c}`)
    }
  }

  return lines.join('\n')
}

// ==================== Pro 模式 ====================

function humanizePro(data: PromptData): string {
  const { userInput, context, skeleton, constraints, structure, role } = data
  const lines: string[] = []

  lines.push(`请你以${role}的身份来回答我的问题。`)
  lines.push('')

  const opening = fillSkeleton(skeleton.opening, userInput, context.platform)
  lines.push(opening)
  lines.push('')

  const body = fillSkeleton(skeleton.body, userInput, context.platform)
  lines.push(body)
  lines.push('')

  if (structure.length > 0) {
    lines.push('请在回答中做到以下几点：')
    for (const item of structure) {
      lines.push(`- ${item}`)
    }
  }

  if (constraints.length > 0) {
    lines.push('')
    lines.push('同时请注意：')
    for (const c of constraints) {
      if (!structure.includes(c)) {
        lines.push(`- ${c}`)
      }
    }
  }

  lines.push('')
  lines.push('请基于你的专业经验，给出有深度、可落地的回答。')

  return lines.join('\n')
}
