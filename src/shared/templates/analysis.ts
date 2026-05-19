import { PromptTemplate } from '../types'

export const analysisTemplates: PromptTemplate[] = [
  {
    id: 'an1',
    category: 'analysis',
    title: { zh: '数据分析报告', en: 'Data Analysis Report' },
    description: { zh: '将数据转化为有洞察的分析报告', en: 'Transform data into insightful analysis reports' },
    prompt: {
      zh: '请根据以下数据，撰写一份数据分析报告。\n\n数据/指标：{data}\n分析目的：{purpose}\n\n报告结构：\n1. 数据概览(关键指标摘要)\n2. 趋势分析(同比/环比变化)\n3. 异常点识别与原因假设\n4. 细分维度分析(按时间/地区/用户群等)\n5. 关键洞察(3-5条)\n6. 行动建议(基于数据的具体建议)\n\n要求：用数据说话，每个结论都有数据支撑，图表建议用文字描述',
      en: 'Please write a data analysis report based on the following data.\n\nData/Metrics: {data}\nPurpose: {purpose}\n\nReport Structure:\n1. Data overview (key metrics summary)\n2. Trend analysis (YoY/MoM changes)\n3. Anomaly identification and hypothesized causes\n4. Segmented analysis (by time/region/user group)\n5. Key insights (3-5 items)\n6. Action recommendations (data-driven suggestions)\n\nRequirement: Let data speak, every conclusion backed by data; describe chart suggestions in text',
    },
    variables: ['data', 'purpose'],
    tags: [{ zh: '数据', en: 'data' }, { zh: '分析', en: 'analysis' }, { zh: '报告', en: 'report' }],
  },
  {
    id: 'an2',
    category: 'analysis',
    title: { zh: 'SWOT 分析', en: 'SWOT Analysis' },
    description: { zh: '全面的 SWOT 战略分析', en: 'Comprehensive SWOT strategic analysis' },
    prompt: {
      zh: '请对以下对象进行 SWOT 分析。\n\n分析对象：{subject}\n行业/背景：{context}\n\n请输出：\n\n| | 有利 | 不利 |\n|---|---|---|\n| 内部 | Strengths | Weaknesses |\n| 外部 | Opportunities | Threats |\n\n每个象限列出 4-6 个要点，并附带：\n1. SO策略(利用优势抓住机会)\n2. WO策略(克服劣势利用机会)\n3. ST策略(利用优势应对威胁)\n4. WT策略(减少劣势避免威胁)\n\n最后给出优先级排序的战略建议',
      en: 'Please conduct a SWOT analysis on the following subject.\n\nSubject: {subject}\nIndustry/Context: {context}\n\nOutput:\n\n| | Favorable | Unfavorable |\n|---|---|---|\n| Internal | Strengths | Weaknesses |\n| External | Opportunities | Threats |\n\nList 4-6 points per quadrant, with:\n1. SO strategies (use strengths to seize opportunities)\n2. WO strategies (overcome weaknesses to leverage opportunities)\n3. ST strategies (use strengths to counter threats)\n4. WT strategies (minimize weaknesses to avoid threats)\n\nFinally provide prioritized strategic recommendations',
    },
    variables: ['subject', 'context'],
    tags: [{ zh: 'SWOT', en: 'swot' }, { zh: '战略', en: 'strategy' }, { zh: '分析', en: 'analysis' }],
  },
  {
    id: 'an3',
    category: 'analysis',
    title: { zh: '用户反馈分析', en: 'User Feedback Analysis' },
    description: { zh: '从用户反馈中提取洞察', en: 'Extract insights from user feedback' },
    prompt: {
      zh: '请分析以下用户反馈/评论数据。\n\n反馈内容：\n{feedback}\n\n请输出：\n1. 情感分析(正面/中性/负面比例)\n2. 高频关键词/主题聚类\n3. 核心痛点排序(按提及频率和严重程度)\n4. 用户最满意的点\n5. 功能需求提取(按优先级排序)\n6. 典型用户声音引用\n7. 改进建议(短期速赢 + 长期规划)\n\n要求：定量+定性结合，给出可执行的产品建议',
      en: 'Please analyze the following user feedback/review data.\n\nFeedback Content:\n{feedback}\n\nOutput:\n1. Sentiment analysis (positive/neutral/negative ratio)\n2. High-frequency keywords/topic clusters\n3. Core pain points ranked (by mention frequency and severity)\n4. User satisfaction highlights\n5. Feature request extraction (prioritized)\n6. Typical user voice quotes\n7. Improvement suggestions (short-term wins + long-term plans)\n\nRequirement: Combine quantitative and qualitative analysis, provide actionable product recommendations',
    },
    variables: ['feedback'],
    tags: [{ zh: '用户反馈', en: 'user-feedback' }, { zh: '洞察', en: 'insight' }, { zh: '产品', en: 'product' }],
  },
  {
    id: 'an4',
    category: 'analysis',
    title: { zh: '商业模式画布', en: 'Business Model Canvas' },
    description: { zh: '用画布模型分析商业模式', en: 'Analyze business model using canvas' },
    prompt: {
      zh: '请用商业模式画布(Business Model Canvas)分析以下业务。\n\n业务描述：{business}\n\n请填充九大模块：\n1. 客户细分(Customer Segments)\n2. 价值主张(Value Propositions)\n3. 渠道通路(Channels)\n4. 客户关系(Customer Relationships)\n5. 收入来源(Revenue Streams)\n6. 核心资源(Key Resources)\n7. 关键业务(Key Activities)\n8. 重要合作(Key Partnerships)\n9. 成本结构(Cost Structure)\n\n最后给出：模式优势、潜在风险、优化建议',
      en: 'Please analyze the following business using the Business Model Canvas.\n\nBusiness Description: {business}\n\nFill in the nine blocks:\n1. Customer Segments\n2. Value Propositions\n3. Channels\n4. Customer Relationships\n5. Revenue Streams\n6. Key Resources\n7. Key Activities\n8. Key Partnerships\n9. Cost Structure\n\nFinally provide: model strengths, potential risks, optimization suggestions',
    },
    variables: ['business'],
    tags: [{ zh: '商业模式', en: 'business-model' }, { zh: '画布', en: 'canvas' }, { zh: '战略', en: 'strategy' }],
  },
  {
    id: 'an5',
    category: 'analysis',
    title: { zh: '根因分析(5Why)', en: 'Root Cause Analysis (5 Whys)' },
    description: { zh: '用5Why方法深挖问题根因', en: 'Deep dive into root causes using 5 Whys' },
    prompt: {
      zh: '请用 5 Why 方法分析以下问题的根本原因。\n\n问题描述：{problem}\n背景信息：{context}\n\n分析过程：\n- Why 1: 为什么会出现这个问题？→ 因为...\n- Why 2: 为什么会...？→ 因为...\n- Why 3: 为什么会...？→ 因为...\n- Why 4: 为什么会...？→ 因为...\n- Why 5: 为什么会...？→ 根本原因是...\n\n最后输出：\n1. 根本原因总结\n2. 短期应急措施\n3. 长期根治方案\n4. 预防机制建议\n5. 鱼骨图结构(文字版)',
      en: 'Please analyze the root cause of the following problem using the 5 Whys method.\n\nProblem Description: {problem}\nBackground: {context}\n\nAnalysis:\n- Why 1: Why does this problem occur? → Because...\n- Why 2: Why does that happen? → Because...\n- Why 3: Why does that happen? → Because...\n- Why 4: Why does that happen? → Because...\n- Why 5: Why does that happen? → The root cause is...\n\nFinal Output:\n1. Root cause summary\n2. Short-term remediation\n3. Long-term solution\n4. Prevention mechanism\n5. Fishbone diagram structure (text version)',
    },
    variables: ['problem', 'context'],
    tags: [{ zh: '根因', en: 'root-cause' }, { zh: '5Why', en: '5-whys' }, { zh: '问题解决', en: 'problem-solving' }],
  },
  {
    id: 'an6',
    category: 'analysis',
    title: { zh: '行业趋势分析', en: 'Industry Trend Analysis' },
    description: { zh: '分析行业发展趋势与机会', en: 'Analyze industry trends and opportunities' },
    prompt: {
      zh: '请对以下行业进行趋势分析。\n\n行业：{industry}\n关注时间范围：{timeframe}\n\n请从以下维度分析：\n1. 宏观环境(PEST分析：政策、经济、社会、技术)\n2. 行业规模与增长率\n3. 关键驱动因素\n4. 技术变革趋势\n5. 竞争格局变化\n6. 消费者行为变化\n7. 新兴机会点(3-5个)\n8. 潜在风险与挑战\n9. 对从业者的建议\n\n要求：结合最新动态，给出有前瞻性的判断',
      en: 'Please conduct a trend analysis for the following industry.\n\nIndustry: {industry}\nTime Frame: {timeframe}\n\nAnalyze across:\n1. Macro environment (PEST: Political, Economic, Social, Technological)\n2. Industry size and growth rate\n3. Key drivers\n4. Technology disruption trends\n5. Competitive landscape changes\n6. Consumer behavior shifts\n7. Emerging opportunities (3-5)\n8. Potential risks and challenges\n9. Recommendations for practitioners\n\nRequirement: Combine latest trends, provide forward-looking judgment',
    },
    variables: ['industry', 'timeframe'],
    tags: [{ zh: '行业', en: 'industry' }, { zh: '趋势', en: 'trend' }, { zh: '机会', en: 'opportunity' }],
  },
]
