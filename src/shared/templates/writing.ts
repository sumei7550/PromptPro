import { PromptTemplate } from '../types'

export const writingTemplates: PromptTemplate[] = [
  {
    id: 'w1',
    category: 'writing',
    title: { zh: '文章大纲生成', en: 'Article Outline Generator' },
    description: { zh: '生成结构化的文章大纲', en: 'Generate a structured article outline' },
    prompt: {
      zh: '请为以下主题生成一篇详细的文章大纲，包含引言、3-5个主要章节（每个章节有2-3个子要点）和结论。\n\n主题：{topic}\n\n要求：\n- 逻辑清晰，层次分明\n- 每个章节标题简洁有力\n- 子要点具体可展开',
      en: 'Please generate a detailed article outline for the following topic, including an introduction, 3-5 main sections (with 2-3 sub-points each), and a conclusion.\n\nTopic: {topic}\n\nRequirements:\n- Clear logic and well-structured hierarchy\n- Concise and impactful section titles\n- Specific and expandable sub-points',
    },
    variables: ['topic'],
    tags: [{ zh: '大纲', en: 'outline' }, { zh: '文章', en: 'article' }, { zh: '结构化', en: 'structured' }],
  },
  {
    id: 'w2',
    category: 'writing',
    title: { zh: '小红书文案', en: 'Xiaohongshu Copywriting' },
    description: { zh: '生成吸引人的小红书风格文案', en: 'Generate engaging social media copy' },
    prompt: {
      zh: '你是一位资深小红书博主。请为以下内容写一篇小红书文案。\n\n内容主题：{topic}\n\n要求：\n- 标题吸引眼球，使用emoji\n- 正文口语化、有感染力\n- 分段清晰，适合手机阅读\n- 结尾引导互动\n- 添加5-8个相关标签',
      en: 'You are an experienced Xiaohongshu (RED) influencer. Please write a Xiaohongshu-style post for the following content.\n\nTopic: {topic}\n\nRequirements:\n- Eye-catching title with emojis\n- Conversational and engaging tone\n- Clear paragraphs optimized for mobile reading\n- End with a call-to-action for interaction\n- Add 5-8 relevant hashtags',
    },
    variables: ['topic'],
    tags: [{ zh: '小红书', en: 'xiaohongshu' }, { zh: '社交媒体', en: 'social-media' }, { zh: '文案', en: 'copywriting' }],
  },
  {
    id: 'w3',
    category: 'writing',
    title: { zh: 'SEO 文章写作', en: 'SEO Article Writing' },
    description: { zh: '生成 SEO 友好的长文', en: 'Generate SEO-friendly long-form content' },
    prompt: {
      zh: '你是一位 SEO 内容专家。请围绕以下关键词写一篇 SEO 友好的文章。\n\n目标关键词：{keyword}\n\n要求：\n- 标题包含关键词，吸引点击\n- 文章 1500-2000 字\n- 自然融入关键词（密度 2-3%）\n- 使用 H2/H3 子标题结构\n- 开头直击痛点\n- 包含实用建议和案例\n- 结尾有 CTA',
      en: 'You are an SEO content expert. Please write an SEO-friendly article around the following keyword.\n\nTarget Keyword: {keyword}\n\nRequirements:\n- Title contains the keyword and is click-worthy\n- 1500-2000 words\n- Naturally weave in the keyword (2-3% density)\n- Use H2/H3 subheadings\n- Start by addressing pain points directly\n- Include practical advice and case examples\n- End with a clear CTA',
    },
    variables: ['keyword'],
    tags: [{ zh: 'SEO', en: 'seo' }, { zh: '长文', en: 'long-form' }, { zh: '内容营销', en: 'content-marketing' }],
  },
  {
    id: 'w4',
    category: 'writing',
    title: { zh: '故事续写', en: 'Story Continuation' },
    description: { zh: '根据开头续写故事', en: 'Continue a story from the beginning' },
    prompt: {
      zh: '请根据以下故事开头，续写一个引人入胜的故事。\n\n故事开头：{story_start}\n\n要求：\n- 保持与开头一致的风格和语气\n- 情节有起伏和转折\n- 人物形象鲜明\n- 对话自然生动\n- 续写约 500-800 字',
      en: 'Please continue the following story opening into an engaging narrative.\n\nStory Opening: {story_start}\n\nRequirements:\n- Maintain consistent style and tone with the opening\n- Plot with rises, falls, and twists\n- Vivid character portrayals\n- Natural and lively dialogue\n- Continue for approximately 500-800 words',
    },
    variables: ['story_start'],
    tags: [{ zh: '故事', en: 'story' }, { zh: '创作', en: 'creative' }, { zh: '续写', en: 'continuation' }],
  },
  {
    id: 'w5',
    category: 'writing',
    title: { zh: '产品描述', en: 'Product Description' },
    description: { zh: '生成有说服力的产品描述', en: 'Generate persuasive product descriptions' },
    prompt: {
      zh: '请为以下产品写一段有说服力的产品描述。\n\n产品信息：{product_info}\n\n要求：\n- 突出核心卖点和差异化优势\n- 使用感性+理性结合的表达\n- 描述使用场景\n- 语言简洁有力\n- 适合电商详情页使用\n- 150-300 字',
      en: 'Please write a persuasive product description for the following product.\n\nProduct Info: {product_info}\n\nRequirements:\n- Highlight core selling points and differentiators\n- Combine emotional and rational appeals\n- Describe use cases\n- Concise and impactful language\n- Suitable for e-commerce product pages\n- 150-300 words',
    },
    variables: ['product_info'],
    tags: [{ zh: '产品', en: 'product' }, { zh: '电商', en: 'e-commerce' }, { zh: '文案', en: 'copywriting' }],
  },
  {
    id: 'w6',
    category: 'writing',
    title: { zh: '文本摘要', en: 'Text Summary' },
    description: { zh: '将长文本压缩为精炼摘要', en: 'Compress long text into concise summary' },
    prompt: {
      zh: '请将以下文本压缩为一段精炼的摘要，保留核心信息和关键观点。\n\n原文：{text}\n\n要求：\n- 摘要长度为原文的 20-30%\n- 保留关键数据和结论\n- 使用客观中立的语气\n- 逻辑连贯，可独立阅读',
      en: 'Please compress the following text into a concise summary, preserving core information and key points.\n\nOriginal Text: {text}\n\nRequirements:\n- Summary length: 20-30% of the original\n- Retain key data and conclusions\n- Use objective and neutral tone\n- Coherent and self-contained',
    },
    variables: ['text'],
    tags: [{ zh: '摘要', en: 'summary' }, { zh: '压缩', en: 'compress' }, { zh: '总结', en: 'summarize' }],
  },
  {
    id: 'w7',
    category: 'writing',
    title: { zh: '标题生成器', en: 'Title Generator' },
    description: { zh: '为文章生成多个吸引人的标题', en: 'Generate multiple catchy titles' },
    prompt: {
      zh: '请为以下内容生成 10 个吸引人的标题选项。\n\n文章主题/内容概要：{content}\n\n要求：\n- 风格多样（疑问式、数字式、悬念式、对比式等）\n- 简洁有力，15字以内\n- 激发好奇心\n- 适合在社交媒体传播\n- 标注每个标题的风格类型',
      en: 'Please generate 10 catchy title options for the following content.\n\nTopic/Content Summary: {content}\n\nRequirements:\n- Diverse styles (question, number, suspense, contrast, etc.)\n- Concise and impactful, under 70 characters\n- Spark curiosity\n- Optimized for social media sharing\n- Label the style type for each title',
    },
    variables: ['content'],
    tags: [{ zh: '标题', en: 'title' }, { zh: '创意', en: 'creative' }, { zh: '社交媒体', en: 'social-media' }],
  },
  {
    id: 'w8',
    category: 'writing',
    title: { zh: '公众号文章', en: 'WeChat Article' },
    description: { zh: '撰写适合公众号传播的深度文章', en: 'Write in-depth articles for WeChat' },
    prompt: {
      zh: '请为以下主题撰写一篇公众号文章。\n\n主题：{topic}\n目标读者：{audience}\n\n要求：\n- 标题吸引打开（可用数字、疑问、反常识）\n- 开头用故事/数据/问题引入，3秒抓住注意力\n- 正文分段清晰，每段不超过4行\n- 善用加粗、引用块突出重点\n- 穿插案例和数据增强说服力\n- 结尾升华主题，引导点赞/在看/转发\n- 全文 2000-3000 字\n- 配图建议（描述需要什么图）',
      en: 'Please write an in-depth article suitable for newsletter/blog publishing.\n\nTopic: {topic}\nTarget Readers: {audience}\n\nRequirements:\n- Click-worthy title (use numbers, questions, or counterintuitive angles)\n- Open with a story/data/question to grab attention in 3 seconds\n- Clear paragraphs, no more than 4 lines each\n- Use bold and blockquotes to highlight key points\n- Weave in cases and data for persuasion\n- Conclude with a meaningful takeaway and CTA\n- 2000-3000 words total\n- Image suggestions (describe what visuals are needed)',
    },
    variables: ['topic', 'audience'],
    tags: [{ zh: '公众号', en: 'wechat' }, { zh: '深度', en: 'in-depth' }, { zh: '文章', en: 'article' }],
  },
]
