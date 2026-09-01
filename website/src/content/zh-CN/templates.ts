import type { TemplatesContent } from "@/content/locales";

export const templatesContent: TemplatesContent = {
  hero: {
    eyebrow: "本地模板库",
    title: "为日常 AI 工作准备的可复用提示词模板。",
    description: "从中英双语模板开始，根据眼前的任务进行调整，并把有用的工作方式留在熟悉的工作流程里。",
    primaryCta: "添加到 Chrome",
    note: "模板搜索和变量替换在扩展中本地完成。当前输入支持相应操作时，可在支持的 AI 网站中使用模板。",
  },
  categories: [
    { title: "写作", description: "用于起草、改写和整理日常文字内容。" },
    { title: "职场", description: "用于整理工作沟通、计划和业务文档。" },
    { title: "编程", description: "用于整理编程任务、技术问题和代码相关提示词。" },
    { title: "翻译", description: "用于翻译、本地化和多语言对照任务。" },
    { title: "营销", description: "用于规划营销文案、活动内容和受众沟通。" },
    { title: "学术", description: "用于整理研究、阅读和学术写作任务。" },
    { title: "分析", description: "用于拆解信息、比较选项和整理分析结果。" },
    { title: "创意", description: "用于发散想法、生成变体和整理创意方向。" },
  ],
  workflow: {
    eyebrow: "简单的复用流程",
    title: "从当前任务开始，整理出下次还能使用的提示词。",
    description: "搜索本地模板库，选择合适的起点，再根据当前场景调整内容后使用。",
    steps: [
      { title: "搜索", description: "在扩展中按标题、关键词、描述、标签和分类搜索模板。" },
      { title: "选择", description: "打开模板，先了解它的结构和适用场景。" },
      { title: "填写变量", description: "补充每次任务中会变化的具体内容。" },
      { title: "插入或复制", description: "将结果插入当前输入框，或复制模板文本。" },
    ],
  },
  showcases: [
    {
      eyebrow: "01 · 找到起点",
      title: "按眼前的任务搜索模板。",
      description: "按标题、关键词、描述、标签和分类搜索中英双语模板，用最接近当前需求的说法开始查找。",
      details: ["搜索中英文内容", "按八个任务分类筛选", "无需离开扩展即可查看可复用结果"],
      image: "/images/product/raw/promptpro-template-search.png",
      imageAlt: "PromptPro 模板搜索界面，展示编程关键词、分类筛选和可复用结果",
      aspectRatio: "621 / 899",
    },
    {
      eyebrow: "02 · 浏览并复用",
      title: "选择适合当前工作方式的模板。",
      description: "按分类浏览本地模板库，先了解模板用途，再将它作为当前任务的结构化起点。",
      details: ["浏览写作、职场、编程等任务分类", "查看模板描述和标签", "准备好后插入或复制模板"],
      image: "/images/product/raw/promptpro-template-library.png",
      imageAlt: "PromptPro 模板库界面，展示分类浏览和可复用模板卡片",
      aspectRatio: "625 / 901",
    },
    {
      eyebrow: "03 · 创建自己的模板",
      title: "把自己的工作方式保存在本地。",
      description: "当一个流程需要自己的结构时，可以创建个人模板，标记清楚变量，并在之后从扩展中复用。",
      details: ["创建个人模板", "将可复用内容整理为变量", "由浏览器本地保存和管理"],
      image: "/images/product/raw/promptpro-custom-template.png",
      imageAlt: "PromptPro 自定义模板表单，用于在本地保存个人可复用提示词",
      aspectRatio: "600 / 780",
    },
  ],
  finalCta: {
    title: "让下一次提示词更容易复用。",
    description: "前往 Chrome Web Store 安装 PromptPro，在支持的 AI 网站中尝试本地提示词优化和双语模板。",
    label: "添加到 Chrome",
  },
};
