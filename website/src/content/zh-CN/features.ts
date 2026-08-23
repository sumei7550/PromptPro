import type { FeaturesContent } from "@/content/locales";

export const featuresContent: FeaturesContent = {
  hero: {
    eyebrow: "更清晰的提示词流程",
    title: "把日常提示词，整理成可以复用的工作方式。",
    description: "PromptPro 帮助你整理提示词、找到合适的起点，并把值得重复使用的部分留在自己的工作流程里。",
    primaryCta: "添加到 Chrome",
    note: "PromptPro 在浏览器中使用本地规则处理提示词。平台可用性取决于当前版本和验证状态。",
  },
  showcases: [
    {
      eyebrow: "01 · 整理",
      title: "先查看更清晰的提示词，再决定是否使用。",
      description: "从 AI 网站当前输入框中的提示词开始。PromptPro 使用本地规则整理内容，展示结果供你确认，再由你决定是否应用。",
      details: ["基于当前输入内容处理", "应用前先查看结果", "应用后需要时可以撤销"],
      image: "/images/product/raw/promptpro-prompt-optimization-review.png",
      imageAlt: "PromptPro 提示词优化预览，展示原始提示词和整理后的结果，并与 AI 对话页面并列",
      aspectRatio: "1141 / 834",
    },
    {
      eyebrow: "02 · 查找",
      title: "按眼前的任务搜索模板。",
      description: "按标题、关键词、描述、标签和分类搜索中英双语模板，帮助你从一个可用的起点开始，而不是每次面对空白输入框。",
      details: ["搜索中英文内容", "浏览八个任务分类", "准备好后复制或插入模板"],
      image: "/images/product/raw/promptpro-template-search.png",
      imageAlt: "PromptPro 模板搜索界面，展示双语结果和分类筛选",
      aspectRatio: "621 / 899",
    },
    {
      eyebrow: "03 · 复用",
      title: "让模板靠近它所服务的工作。",
      description: "选择可复用模板，根据当前场景填写变量，并在准备好后将结果插入当前输入框。",
      details: ["填写模板变量", "根据当前场景调整模板", "插入当前输入框或复制模板文本"],
      image: "/images/product/raw/promptpro-template-library.png",
      imageAlt: "PromptPro 双语模板库，展示可复用的提示词分类",
      aspectRatio: "625 / 901",
    },
    {
      eyebrow: "04 · 自定义",
      title: "把重复使用的工作方式保存成自己的模板。",
      description: "当一个工作流程需要自己的结构时，可以保存自定义模板，并将其版本记录保存在浏览器本地。",
      details: ["保存个人模板", "为重复场景使用模板变量", "查看个人模板历史和对比入口"],
      image: "/images/product/raw/promptpro-custom-template.png",
      imageAlt: "PromptPro 自定义模板编辑界面，展示个人可复用提示词的编辑字段",
      aspectRatio: "600 / 780",
    },
  ],
  workflow: {
    eyebrow: "一个浏览器内的流程",
    title: "从一个粗略想法，整理成下次还能使用的提示词。",
    description: "PromptPro 把关键决定交还给你：整理提示词、确认结果，再复用或保存真正有用的部分。",
    steps: [
      { title: "从熟悉的页面开始", description: "在支持的 AI 网站当前输入框中继续工作。" },
      { title: "选择并确认", description: "搜索模板或整理提示词，然后在应用前查看结果。" },
      { title: "留下有用的部分", description: "插入模板、保存个人版本，或回看近期的本地优化历史。" },
    ],
  },
  finalCta: {
    title: "让下一次提示词更容易复用。",
    description: "前往 Chrome Web Store 安装 PromptPro，在支持的 AI 网站中尝试本地提示词优化和双语模板。",
    label: "添加到 Chrome",
  },
};
