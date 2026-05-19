import { PromptTemplate } from '../types'

export const translationTemplates: PromptTemplate[] = [
  {
    id: 't1',
    category: 'translation',
    title: { zh: '中英互译（信达雅）', en: 'CN-EN Translation (Faithful & Elegant)' },
    description: { zh: '高质量中英文互译，兼顾准确与流畅', en: 'High-quality CN-EN translation' },
    prompt: {
      zh: '你是一位资深翻译专家，精通中英双语。请将以下文本翻译为{target_language}。\n\n原文：\n{text}\n\n翻译要求：\n- 信：准确传达原文含义，不遗漏信息\n- 达：译文通顺流畅，符合目标语言表达习惯\n- 雅：用词考究，文风与原文一致\n- 专业术语保持准确\n- 如有歧义，在译文后用括号标注',
      en: 'You are a senior translation expert, fluent in both Chinese and English. Please translate the following text into {target_language}.\n\nSource Text:\n{text}\n\nTranslation Requirements:\n- Faithful: Accurately convey the original meaning without omitting information\n- Smooth: Read naturally in the target language\n- Elegant: Use refined wording matching the original style\n- Maintain accuracy of technical terms\n- For ambiguities, add clarification in parentheses',
    },
    variables: ['text', 'target_language'],
    tags: [{ zh: '翻译', en: 'translation' }, { zh: '中英', en: 'cn-en' }, { zh: '专业', en: 'professional' }],
  },
  {
    id: 't2',
    category: 'translation',
    title: { zh: '学术论文翻译', en: 'Academic Paper Translation' },
    description: { zh: '学术风格的精准翻译', en: 'Precise academic-style translation' },
    prompt: {
      zh: '你是一位学术翻译专家。请将以下学术文本翻译为{target_language}。\n\n原文：\n{text}\n\n要求：\n- 保持学术语体和正式风格\n- 专业术语使用该领域通用译法，首次出现时附原文\n- 保留原文的逻辑结构和论证层次\n- 被动语态、长句等按目标语言习惯调整\n- 引用格式保持不变\n- 数字、公式、缩写保持原样',
      en: 'You are an academic translation expert. Please translate the following academic text into {target_language}.\n\nSource Text:\n{text}\n\nRequirements:\n- Maintain academic register and formal style\n- Use field-standard translations for technical terms, with original term in parentheses on first occurrence\n- Preserve original logical structure and argumentation\n- Adjust passive voice and long sentences to suit target language conventions\n- Keep citation format unchanged\n- Keep numbers, formulas, and abbreviations as-is',
    },
    variables: ['text', 'target_language'],
    tags: [{ zh: '学术', en: 'academic' }, { zh: '论文', en: 'paper' }, { zh: '翻译', en: 'translation' }],
  },
  {
    id: 't3',
    category: 'translation',
    title: { zh: '本地化翻译', en: 'Localization Translation' },
    description: { zh: '适合产品/UI的本地化翻译', en: 'Product/UI localization translation' },
    prompt: {
      zh: '你是一位产品本地化专家。请将以下产品文案/UI文本翻译为{target_language}。\n\n原文：\n{text}\n\n产品类型：{product_type}\n\n要求：\n- 符合目标市场的文化习惯和用语偏好\n- UI文本简洁，控制字符长度\n- 按钮/标签类文本不超过原文长度的130%\n- 保持品牌调性一致\n- 避免直译，优先意译\n- 标注需要注意的文化差异点',
      en: 'You are a product localization expert. Please translate the following product copy/UI text into {target_language}.\n\nSource Text:\n{text}\n\nProduct Type: {product_type}\n\nRequirements:\n- Match cultural conventions and language preferences of the target market\n- Keep UI text concise and within character limits\n- Button/label text should not exceed 130% of original length\n- Maintain consistent brand voice\n- Prefer adaptation over literal translation\n- Note any cultural differences to watch for',
    },
    variables: ['text', 'target_language', 'product_type'],
    tags: [{ zh: '本地化', en: 'localization' }, { zh: 'UI', en: 'ui' }, { zh: '产品', en: 'product' }],
  },
  {
    id: 't4',
    category: 'translation',
    title: { zh: '多语言批量翻译', en: 'Multi-language Batch Translation' },
    description: { zh: '一次翻译为多种语言', en: 'Translate into multiple languages at once' },
    prompt: {
      zh: '请将以下文本同时翻译为以下语言：英语、日语、韩语、法语、西班牙语。\n\n原文：\n{text}\n\n输出格式：\n🇺🇸 English: ...\n🇯🇵 日本語: ...\n🇰🇷 한국어: ...\n🇫🇷 Français: ...\n🇪🇸 Español: ...\n\n要求：每种语言都要自然流畅，不是逐字翻译。',
      en: 'Please translate the following text into multiple languages: English, Japanese, Korean, French, Spanish.\n\nSource Text:\n{text}\n\nOutput Format:\n🇺🇸 English: ...\n🇯🇵 日本語: ...\n🇰🇷 한국어: ...\n🇫🇷 Français: ...\n🇪🇸 Español: ...\n\nRequirement: Each translation should be natural and fluent, not word-for-word.',
    },
    variables: ['text'],
    tags: [{ zh: '多语言', en: 'multilingual' }, { zh: '批量', en: 'batch' }, { zh: '翻译', en: 'translation' }],
  },
  {
    id: 't5',
    category: 'translation',
    title: { zh: '字幕翻译', en: 'Subtitle Translation' },
    description: { zh: '视频字幕的翻译与时间轴适配', en: 'Video subtitle translation' },
    prompt: {
      zh: '你是一位字幕翻译专家。请将以下字幕翻译为{target_language}。\n\n字幕内容：\n{text}\n\n要求：\n- 每行字幕控制在15个中文字/35个英文字符以内\n- 口语化表达，易于快速阅读\n- 保持说话人的语气和风格\n- 俚语/梗适当本地化\n- 如有双关语无法翻译，用脚注说明',
      en: 'You are a subtitle translation expert. Please translate the following subtitles into {target_language}.\n\nSubtitle Content:\n{text}\n\nRequirements:\n- Keep each line within 15 Chinese chars / 35 English chars\n- Use conversational language for quick reading\n- Maintain speaker tone and style\n- Localize slang and memes appropriately\n- For untranslatable wordplay, add a footnote explanation',
    },
    variables: ['text', 'target_language'],
    tags: [{ zh: '字幕', en: 'subtitle' }, { zh: '视频', en: 'video' }, { zh: '翻译', en: 'translation' }],
  },
]
