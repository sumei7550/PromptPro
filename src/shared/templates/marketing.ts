import { PromptTemplate } from '../types'

export const marketingTemplates: PromptTemplate[] = [
  {
    id: 'm1',
    category: 'marketing',
    title: { zh: '爆款标题公式', en: 'Viral Headline Formulas' },
    description: { zh: '用经典公式生成高点击率标题', en: 'Generate high-CTR headlines with proven formulas' },
    prompt: {
      zh: '你是一位资深内容营销专家。请用以下经典标题公式，为我的内容生成 10 个爆款标题。\n\n内容主题：{topic}\n目标受众：{audience}\n\n请使用以下公式各生成至少1个：\n- 数字式：「7个方法让你...」\n- 疑问式：「为什么...？」\n- 对比式：「从...到...」\n- 恐惧式：「不做...你会...」\n- 好奇式：「...的秘密」\n- 利益式：「如何...省下...」\n\n要求：标注每个标题使用的公式类型和预估点击吸引力（1-5星）',
      en: 'You are a senior content marketing expert. Please generate 10 viral headlines for my content using classic formulas.\n\nTopic: {topic}\nTarget Audience: {audience}\n\nUse at least one of each formula:\n- Number: "7 ways to..."\n- Question: "Why...?"\n- Contrast: "From... to..."\n- Fear: "If you don\'t..., you\'ll..."\n- Curiosity: "The secret of..."\n- Benefit: "How to... save..."\n\nRequirement: Label each headline with its formula type and predicted click appeal (1-5 stars)',
    },
    variables: ['topic', 'audience'],
    tags: [{ zh: '标题', en: 'headline' }, { zh: '爆款', en: 'viral' }, { zh: '点击率', en: 'ctr' }],
  },
  {
    id: 'm2',
    category: 'marketing',
    title: { zh: '品牌故事撰写', en: 'Brand Story Writing' },
    description: { zh: '打造有感染力的品牌故事', en: 'Craft compelling brand stories' },
    prompt: {
      zh: '请为以下品牌撰写一个有感染力的品牌故事。\n\n品牌信息：\n- 品牌名：{brand_name}\n- 行业：{industry}\n- 核心价值观：{values}\n- 创立背景：{background}\n\n要求：\n- 使用英雄之旅叙事结构\n- 突出创始人/团队的初心和使命\n- 融入具体细节和情感共鸣点\n- 结尾升华到品牌愿景\n- 500-800字\n- 适合放在官网「关于我们」页面',
      en: 'Please write a compelling brand story for the following brand.\n\nBrand Info:\n- Brand Name: {brand_name}\n- Industry: {industry}\n- Core Values: {values}\n- Founding Background: {background}\n\nRequirements:\n- Use the Hero\'s Journey narrative structure\n- Highlight the founder/team\'s original mission\n- Include specific details and emotional resonance points\n- End by elevating to the brand vision\n- 500-800 words\n- Suitable for the "About Us" page',
    },
    variables: ['brand_name', 'industry', 'values', 'background'],
    tags: [{ zh: '品牌', en: 'brand' }, { zh: '故事', en: 'story' }, { zh: '文案', en: 'copywriting' }],
  },
  {
    id: 'm3',
    category: 'marketing',
    title: { zh: '社交媒体内容日历', en: 'Social Media Content Calendar' },
    description: { zh: '规划一周的社交媒体内容', en: 'Plan a week of social media content' },
    prompt: {
      zh: '请为以下品牌/账号规划一周的社交媒体内容日历。\n\n账号信息：\n- 品牌/账号：{brand}\n- 平台：{platform}\n- 目标受众：{audience}\n- 近期营销重点：{focus}\n\n请输出：\n| 日期 | 内容主题 | 内容类型 | 文案摘要 | 配图建议 | 发布时间 |\n\n要求：\n- 内容类型多样（教育、娱乐、互动、促销比例 4:3:2:1）\n- 考虑平台算法偏好\n- 包含互动引导（投票、提问、UGC征集）\n- 标注最佳发布时间',
      en: 'Please plan a one-week social media content calendar for the following brand/account.\n\nAccount Info:\n- Brand/Account: {brand}\n- Platform: {platform}\n- Target Audience: {audience}\n- Recent Marketing Focus: {focus}\n\nOutput:\n| Date | Theme | Content Type | Copy Summary | Image Suggestion | Posting Time |\n\nRequirements:\n- Diverse content types (educational, entertainment, interactive, promotional in 4:3:2:1 ratio)\n- Consider platform algorithm preferences\n- Include interaction prompts (polls, questions, UGC calls)\n- Note optimal posting times',
    },
    variables: ['brand', 'platform', 'audience', 'focus'],
    tags: [{ zh: '社交媒体', en: 'social-media' }, { zh: '内容规划', en: 'content-plan' }, { zh: '日历', en: 'calendar' }],
  },
  {
    id: 'm4',
    category: 'marketing',
    title: { zh: '广告文案 AIDA', en: 'AIDA Ad Copy' },
    description: { zh: '用 AIDA 模型写转化文案', en: 'Write conversion copy using AIDA model' },
    prompt: {
      zh: '请用 AIDA 模型为以下产品/服务撰写广告文案。\n\n产品/服务：{product}\n目标受众：{audience}\n核心卖点：{selling_point}\n投放渠道：{channel}\n\n请按 AIDA 结构输出：\n- Attention（注意）：用什么钩子抓住注意力\n- Interest（兴趣）：如何激发深入了解的欲望\n- Desire（欲望）：如何让受众产生拥有的渴望\n- Action（行动）：用什么 CTA 促成转化\n\n同时提供3个版本：短版（朋友圈/信息流）、中版（详情页首屏）、长版（落地页）',
      en: 'Please write ad copy for the following product/service using the AIDA model.\n\nProduct/Service: {product}\nTarget Audience: {audience}\nCore Selling Point: {selling_point}\nChannel: {channel}\n\nOutput in AIDA structure:\n- Attention: What hook grabs attention\n- Interest: How to spark deeper interest\n- Desire: How to create a desire to own\n- Action: What CTA drives conversion\n\nAlso provide 3 versions: Short (social feed), Medium (above-the-fold), Long (landing page)',
    },
    variables: ['product', 'audience', 'selling_point', 'channel'],
    tags: [{ zh: '广告', en: 'advertising' }, { zh: 'AIDA', en: 'aida' }, { zh: '转化', en: 'conversion' }],
  },
  {
    id: 'm5',
    category: 'marketing',
    title: { zh: '竞品分析框架', en: 'Competitive Analysis Framework' },
    description: { zh: '系统化分析竞争对手', en: 'Systematically analyze competitors' },
    prompt: {
      zh: '请帮我对以下竞品进行系统化分析。\n\n我的产品：{my_product}\n竞品列表：{competitors}\n\n请从以下维度分析：\n1. 产品定位与目标用户\n2. 核心功能对比（表格形式）\n3. 定价策略\n4. 营销渠道与获客方式\n5. 用户口碑（优势与槽点）\n6. 技术/体验差异化\n7. SWOT 分析\n8. 我的差异化机会点\n\n输出格式：结构化报告，关键结论加粗标注',
      en: 'Please conduct a systematic competitive analysis.\n\nMy Product: {my_product}\nCompetitors: {competitors}\n\nAnalyze across these dimensions:\n1. Product positioning and target users\n2. Core feature comparison (table format)\n3. Pricing strategy\n4. Marketing channels and acquisition methods\n5. User reputation (strengths and complaints)\n6. Technical/UX differentiation\n7. SWOT analysis\n8. My differentiation opportunities\n\nOutput: Structured report with key conclusions bolded',
    },
    variables: ['my_product', 'competitors'],
    tags: [{ zh: '竞品', en: 'competitor' }, { zh: '分析', en: 'analysis' }, { zh: '策略', en: 'strategy' }],
  },
  {
    id: 'm6',
    category: 'marketing',
    title: { zh: '用户画像构建', en: 'User Persona Builder' },
    description: { zh: '构建详细的目标用户画像', en: 'Build detailed target user personas' },
    prompt: {
      zh: '请为以下产品构建 2-3 个典型用户画像。\n\n产品：{product}\n行业：{industry}\n\n每个画像包含：\n- 姓名（虚构）、年龄、职业、收入\n- 一句话描述\n- 目标与动机\n- 痛点与挫折\n- 信息获取渠道\n- 决策因素\n- 典型使用场景\n- 一句代表性语录\n\n要求：画像之间有明显差异，覆盖核心用户群和潜力用户群',
      en: 'Please build 2-3 typical user personas for the following product.\n\nProduct: {product}\nIndustry: {industry}\n\nEach persona includes:\n- Name (fictional), age, occupation, income\n- One-line description\n- Goals and motivations\n- Pain points and frustrations\n- Information sources\n- Decision factors\n- Typical use cases\n- A representative quote\n\nRequirement: Personas should differ significantly, covering core users and potential users',
    },
    variables: ['product', 'industry'],
    tags: [{ zh: '用户画像', en: 'user-persona' }, { zh: '产品', en: 'product' }, { zh: '营销', en: 'marketing' }],
  },
]
