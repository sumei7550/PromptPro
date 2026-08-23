import type { HomeContent } from "@/content/locales";

export const homeContent: HomeContent = {
  hero: {
    title: "本地优化提示词，快速复用双语模板。",
    subtitle: "PromptPro 是一款 Chrome 扩展，可在支持的 AI 网站中帮助你整理提示词，并在浏览器本地复用中英双语模板。无需账号。",
    primaryCta: "添加到 Chrome",
    secondaryCta: "查看功能",
    note: "PromptPro 在浏览器中处理提示词。平台可用性取决于当前版本和验证状态。",
  },
  productPreview: {
    eyebrow: "产品预览",
    title: "在熟悉的页面附近，完成更顺手的提示词流程。",
    description: "在熟悉的 AI 工作流程中使用 PromptPro：整理提示词、确认结果，并在需要时复用模板。",
    libraryAlt: "PromptPro 模板库，展示可搜索的双语提示词分类",
    integrationAlt: "PromptPro 提示词优化预览与 AI 对话界面并列展示",
  },
  features: {
    eyebrow: "核心能力",
    title: "让提示词更清晰，也更容易复用。",
    description: "PromptPro 将日常的提示词优化和复用流程放在同一个浏览器扩展中。",
    items: [
      { marker: "01", title: "本地提示词优化", description: "使用本地规则整理当前提示词，先查看结果，再决定是否应用。" },
      { marker: "02", title: "双语模板库", description: "按写作、职场、编程、翻译、营销、学术、分析和创意等场景浏览可复用模板。" },
      { marker: "03", title: "自定义模板", description: "保存个人模板，并在需要时填写模板变量。" },
      { marker: "04", title: "本地优化历史", description: "查看保存在浏览器本地的近期优化记录，不承诺云端备份或跨设备同步。" },
      { marker: "05", title: "中英双语体验", description: "在中英文界面之间切换，处理适合不同语言任务的模板内容。" },
      { marker: "06", title: "本地数据管理", description: "设置、模板、历史和使用次数由扩展保存在浏览器本地存储中。" },
    ],
  },
  privacy: {
    eyebrow: "隐私",
    title: "以本地处理为基础。",
    description: "PromptPro 让提示词处理尽量靠近浏览器完成。扩展无需账号，当前实现没有新增远程提示词处理服务。",
    items: [
      { title: "无需账号", description: "不需要创建 PromptPro 账号，也不需要登录云端服务。" },
      { title: "保存在浏览器本地", description: "设置、模板、历史和使用次数通过扩展的浏览器存储保存。" },
      { title: "提示词不上传到新的远程服务", description: "当前源码没有新增远程提示词处理请求，官网表述与扩展隐私说明保持一致。" },
    ],
    linkLabel: "阅读隐私说明",
  },
  platforms: {
    eyebrow: "平台状态",
    title: "区分已有依据与尚未验证的平台。",
    description: "PromptPro 面向支持的 AI 网站，但平台可用性需要与代码配置分别看待。",
    groups: [
      {
        title: "历史验证依据",
        badge: "历史验证",
        description: "这些平台有历史验证依据，但尚未完成当前验证周期的复测。平台页面更新后，可用性可能发生变化。",
        status: "historical",
        platforms: ["ChatGPT", "Claude", "Gemini", "DeepSeek"].map((name) => ({ name, description: "有历史依据；本轮尚未复测。" })),
      },
      {
        title: "其他已配置平台",
        badge: "代码配置 · 未验证",
        description: "其他平台已在扩展中配置，但当前版本还没有足够的验证依据。代码配置不等于稳定可用。",
        status: "configured-unverified",
        platforms: ["豆包", "Perplexity", "Copilot", "Grok / X Grok", "Google AI Studio", "Cursor", "v0", "Lovable"].map((name) => ({ name, description: "代码已配置；当前可用性未验证。" })),
      },
    ],
    note: "平台可用性以当前版本和对应网站页面结构的实际验证情况为准。",
  },
  templates: {
    eyebrow: "模板库",
    title: "从一个模板开始，再调整成自己的版本。",
    description: "从当前任务对应的模板开始，再根据自己的场景进行调整。",
    categories: [
      ["写作", "用于起草、改写和整理日常文字内容。"],
      ["职场", "用于整理工作沟通、计划和业务文档。"],
      ["编程", "用于整理编程任务、技术问题和代码相关提示词。"],
      ["翻译", "用于翻译、本地化和多语言对照任务。"],
      ["营销", "用于规划营销文案、活动内容和受众沟通。"],
      ["学术", "用于整理研究、阅读和学术写作任务。"],
      ["分析", "用于拆解信息、比较选项和整理分析结果。"],
      ["创意", "用于发散想法、生成变体和整理创意方向。"],
    ].map(([name, description]) => ({ name, description })),
    linkLabel: "浏览全部模板分类",
  },
  finalCta: {
    title: "让下一次提示词更容易复用。",
    description: "前往 Chrome Web Store 安装 PromptPro，在支持的 AI 网站中尝试本地提示词优化和双语模板。",
    label: "添加到 Chrome",
  },
};
