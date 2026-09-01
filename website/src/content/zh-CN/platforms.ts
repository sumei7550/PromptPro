import type { PlatformsContent } from "@/content/locales";

export const platformsContent: PlatformsContent = {
  hero: {
    eyebrow: "平台兼容性",
    title: "覆盖常用 AI 平台",
    description: "在已配置的 AI 网站中使用 PromptPro 的提示词优化和模板工具。",
  },
  overview: "PromptPro 通过浏览器端扩展逻辑接入已配置的 AI 网站。第三方网站更新界面后，兼容性可能发生变化。",
  groups: [
    {
      title: "历史验证",
      badge: "历史验证",
      description: "这些平台有历史验证依据，但尚未在当前验证周期中重新完成验证。",
      status: "historical",
      platforms: [
        ["ChatGPT", "存在历史验证依据；当前版本尚未完成完整复测。"],
        ["Claude", "存在历史验证依据；当前版本尚未完成完整复测。"],
        ["Gemini", "存在历史验证依据；当前版本尚未完成完整复测。"],
        ["DeepSeek", "存在历史验证依据；当前版本尚未完成完整复测。"],
      ].map(([name, description]) => ({ name, description })),
    },
    {
      title: "代码配置 · 未验证",
      badge: "代码配置 · 未验证",
      description: "这些网站已在扩展配置中，但当前兼容性尚未得到充分验证。",
      status: "configured-unverified",
      platforms: [
        ["豆包", "扩展中已有配置；当前可用性尚未验证。"],
        ["Perplexity", "扩展中已有配置；当前可用性尚未验证。"],
        ["Microsoft Copilot", "扩展中已有配置；当前可用性尚未验证。"],
        ["Grok / X Grok", "扩展中已有配置；当前可用性尚未验证。"],
        ["Google AI Studio", "扩展中已有配置；当前可用性尚未验证。"],
        ["Cursor", "扩展中已有配置；当前可用性尚未验证。"],
        ["v0", "扩展中已有配置；当前可用性尚未验证。"],
        ["Lovable", "扩展中已有配置；当前可用性尚未验证。"],
      ].map(([name, description]) => ({ name, description })),
    },
  ],
  meaning: {
    eyebrow: "如何理解这些状态",
    title: "代码配置是起点，不代表稳定承诺。",
    description: "PromptPro 可以尝试在已配置的网站中添加浏览器端工具。由于每个平台控制自己的编辑器和页面结构，实际体验可能不同。",
    items: [
      ["优化提示词", "当页面输入框能够被识别时，可以从 PromptPro 操作入口开始本地提示词整理。"],
      ["复用模板", "可以在扩展中浏览模板；当前页面输入框支持时，可执行插入或复制操作。"],
      ["由用户保持控制", "PromptPro 不会自动导航，也不会代替用户提交或发送消息。"],
    ].map(([title, description]) => ({ title, description })),
  },
  notice: "第三方 AI 网站会持续变化。当网站更新页面结构或编辑器行为时，PromptPro 可能需要同步更新。",
  finalCta: {
    title: "在你的工作流中试用 PromptPro。",
    description: "安装扩展，在你常用的 AI 网站中体验 PromptPro。",
    label: "添加到 Chrome",
  },
};
