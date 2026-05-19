import { PromptTemplate } from '../types'

export const academicTemplates: PromptTemplate[] = [
  {
    id: 'a1',
    category: 'academic',
    title: { zh: '论文摘要撰写', en: 'Paper Abstract Writing' },
    description: { zh: '生成规范的学术论文摘要', en: 'Generate a standard academic paper abstract' },
    prompt: {
      zh: '请根据以下论文信息，撰写一篇规范的学术摘要。\n\n论文标题：{title}\n研究领域：{field}\n主要内容/发现：{content}\n\n摘要结构（共200-300字）：\n1. 研究背景与问题（1-2句）\n2. 研究方法（1-2句）\n3. 主要发现/结果（2-3句）\n4. 结论与意义（1-2句）\n\n要求：\n- 使用学术语体，第三人称\n- 避免引用和缩写\n- 包含关键术语\n- 最后列出 3-5 个关键词',
      en: 'Please write a standard academic abstract based on the paper info below.\n\nPaper Title: {title}\nResearch Field: {field}\nMain Content/Findings: {content}\n\nAbstract Structure (200-300 words):\n1. Research background and problem (1-2 sentences)\n2. Research methodology (1-2 sentences)\n3. Main findings/results (2-3 sentences)\n4. Conclusions and significance (1-2 sentences)\n\nRequirements:\n- Use academic register, third person\n- Avoid citations and abbreviations\n- Include key terminology\n- List 3-5 keywords at the end',
    },
    variables: ['title', 'field', 'content'],
    tags: [{ zh: '摘要', en: 'abstract' }, { zh: '论文', en: 'paper' }, { zh: '学术', en: 'academic' }],
  },
  {
    id: 'a2',
    category: 'academic',
    title: { zh: '文献综述框架', en: 'Literature Review Framework' },
    description: { zh: '构建文献综述的逻辑框架', en: 'Build a logical framework for literature review' },
    prompt: {
      zh: '请帮我构建一个文献综述的框架。\n\n研究主题：{topic}\n已有文献方向：{directions}\n\n请输出：\n1. 综述结构大纲（按主题/时间/方法论组织）\n2. 每个部分应覆盖的核心问题\n3. 文献之间的逻辑关系（支持/对立/补充）\n4. 研究空白（Gap）的识别\n5. 过渡段落的写法建议\n6. 建议的搜索关键词和数据库\n\n要求：体现批判性思维，不是简单罗列文献',
      en: 'Please help me build a literature review framework.\n\nResearch Topic: {topic}\nExisting Literature Directions: {directions}\n\nOutput:\n1. Review structure outline (organized by theme/timeline/methodology)\n2. Core questions each section should address\n3. Logical relationships between literature (supporting/opposing/complementary)\n4. Identification of research gaps\n5. Suggestions for transitional paragraphs\n6. Recommended search keywords and databases\n\nRequirement: Demonstrate critical thinking, not just listing literature',
    },
    variables: ['topic', 'directions'],
    tags: [{ zh: '文献综述', en: 'literature-review' }, { zh: '框架', en: 'framework' }, { zh: '研究', en: 'research' }],
  },
  {
    id: 'a3',
    category: 'academic',
    title: { zh: '研究方法论设计', en: 'Research Methodology Design' },
    description: { zh: '设计严谨的研究方法论', en: 'Design rigorous research methodology' },
    prompt: {
      zh: '请帮我设计研究方法论。\n\n研究问题：{question}\n研究类型：{type}\n可用资源/数据：{resources}\n\n请包含：\n1. 研究设计（定性/定量/混合）及理由\n2. 样本选择策略与样本量论证\n3. 数据收集方法与工具\n4. 数据分析方法\n5. 信效度保障措施\n6. 伦理考量\n7. 研究局限性预判\n8. 时间线规划\n\n要求：方法论选择要有理论依据，引用方法论文献',
      en: 'Please help me design a research methodology.\n\nResearch Question: {question}\nResearch Type: {type}\nAvailable Resources/Data: {resources}\n\nInclude:\n1. Research design (qualitative/quantitative/mixed) and rationale\n2. Sampling strategy and sample size justification\n3. Data collection methods and tools\n4. Data analysis methods\n5. Reliability and validity measures\n6. Ethical considerations\n7. Anticipated limitations\n8. Timeline planning\n\nRequirement: Methodology choices must be theoretically grounded with citations',
    },
    variables: ['question', 'type', 'resources'],
    tags: [{ zh: '方法论', en: 'methodology' }, { zh: '研究设计', en: 'research-design' }, { zh: '学术', en: 'academic' }],
  },
  {
    id: 'a4',
    category: 'academic',
    title: { zh: '论文润色（学术风格）', en: 'Academic Paper Polishing' },
    description: { zh: '提升论文的学术表达质量', en: 'Improve academic writing quality' },
    prompt: {
      zh: '请对以下学术文本进行润色，提升其学术表达质量。\n\n原文：\n{text}\n\n润色要求：\n- 使用正式学术语体\n- 消除口语化表达\n- 改善句式多样性（避免重复句型）\n- 加强逻辑连接词的使用\n- 确保主谓一致、时态统一\n- 术语使用规范统一\n- 标注修改处并简要说明修改理由\n\n输出格式：润色后的文本 + 修改说明列表',
      en: 'Please polish the following academic text to improve its scholarly quality.\n\nOriginal Text:\n{text}\n\nPolishing Requirements:\n- Use formal academic register\n- Remove colloquial expressions\n- Improve sentence variety (avoid repetitive structures)\n- Strengthen use of logical connectors\n- Ensure subject-verb agreement and consistent tense\n- Standardize terminology usage\n- Mark each change with a brief rationale\n\nOutput: Polished text + list of revisions with explanations',
    },
    variables: ['text'],
    tags: [{ zh: '润色', en: 'polish' }, { zh: '论文', en: 'paper' }, { zh: '学术写作', en: 'academic-writing' }],
  },
  {
    id: 'a5',
    category: 'academic',
    title: { zh: '开题报告撰写', en: 'Research Proposal Writing' },
    description: { zh: '撰写结构完整的开题报告', en: 'Write a complete research proposal' },
    prompt: {
      zh: '请帮我撰写开题报告。\n\n研究题目：{title}\n学科方向：{field}\n初步想法：{ideas}\n\n请按以下结构撰写：\n1. 选题背景与意义（理论意义+实践意义）\n2. 国内外研究现状（文献梳理+研究空白）\n3. 研究内容与目标\n4. 研究方法与技术路线\n5. 创新点\n6. 研究计划与时间安排\n7. 参考文献格式建议\n\n要求：3000-5000字，逻辑严密，体现研究可行性',
      en: 'Please help me write a research proposal.\n\nResearch Title: {title}\nField: {field}\nInitial Ideas: {ideas}\n\nStructure:\n1. Background and significance (theoretical + practical)\n2. State of research (literature review + research gaps)\n3. Research content and objectives\n4. Methodology and technical roadmap\n5. Innovation points\n6. Research plan and timeline\n7. Reference formatting suggestions\n\nRequirements: 3000-5000 words, rigorous logic, demonstrate feasibility',
    },
    variables: ['title', 'field', 'ideas'],
    tags: [{ zh: '开题', en: 'proposal' }, { zh: '报告', en: 'report' }, { zh: '研究', en: 'research' }],
  },
  {
    id: 'a6',
    category: 'academic',
    title: { zh: '答辩PPT大纲', en: 'Defense PPT Outline' },
    description: { zh: '规划论文答辩PPT结构', en: 'Plan thesis defense PPT structure' },
    prompt: {
      zh: '请为我的论文答辩设计 PPT 大纲。\n\n论文题目：{title}\n答辩时间限制：{duration}分钟\n论文核心内容：{content}\n\n请输出：\n1. 每页 PPT 的标题和要点（控制总页数）\n2. 每页建议停留时间\n3. 关键图表建议\n4. 预判评委可能提问（5-8个）及应答要点\n5. 开场白和结束语建议\n\n要求：重点突出、逻辑清晰、时间分配合理（研究方法和结果占60%以上）',
      en: 'Please design a PPT outline for my thesis defense.\n\nThesis Title: {title}\nDefense Time Limit: {duration} minutes\nThesis Core Content: {content}\n\nOutput:\n1. Title and key points for each slide (control total slide count)\n2. Suggested time per slide\n3. Key charts/figures suggestions\n4. Anticipated committee questions (5-8) with response strategies\n5. Opening and closing remark suggestions\n\nRequirements: Highlight key points, clear logic, balanced time allocation (methodology + results > 60%)',
    },
    variables: ['title', 'duration', 'content'],
    tags: [{ zh: '答辩', en: 'defense' }, { zh: 'PPT', en: 'ppt' }, { zh: '论文', en: 'paper' }],
  },
]
