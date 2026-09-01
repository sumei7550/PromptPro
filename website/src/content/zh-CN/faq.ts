import type { FaqContent } from "@/content/locales";

export const faqContent: FaqContent = {
  hero: {
    eyebrow: "常见问题",
    title: "开始使用前，先了解这些答案。",
    description: "了解 PromptPro 是什么、如何处理数据，以及在支持的 AI 网站中使用时可以期待什么。",
  },
  categories: [
    {
      title: "产品",
      questions: [
        { question: "PromptPro 是什么？", answer: "PromptPro 是一个用于本地提示词优化和双语提示词模板的 Chrome 扩展。它可以帮助你在浏览器中整理提示词，并在支持的 AI 网站中复用模板。" },
        { question: "如何使用 PromptPro？", answer: "安装扩展后，打开支持的 AI 网站；当页面输入框能够被识别时，可以使用 PromptPro 操作入口。你可以预览本地整理结果，自行选择应用或取消。模板可以在扩展中搜索、填写、插入或复制。" },
        { question: "支持哪些浏览器？", answer: "当前产品事实确认的是基于 Chrome Manifest V3 扩展的 Chrome 支持。不能仅根据当前实现推断已支持 Edge、Firefox 或 Safari。" },
        { question: "是否需要账号？", answer: "不需要。PromptPro 不要求 PromptPro 账号或登录，当前实现也不会收集你的邮箱地址。" },
      ],
    },
    {
      title: "隐私与数据",
      questions: [
        { question: "我的提示词和模板保存在哪里？", answer: "个人模板、已接受的优化历史和相关扩展数据会使用 chrome.storage.local 保存在浏览器中。只有在本地设置不存在时，扩展才会读取旧的 chrome.storage.sync 设置作为迁移来源；持续保存使用本地存储。" },
        { question: "PromptPro 会把我的提示词发送给 AI 服务吗？", answer: "当前源码没有 PromptPro 后端或远程优化 API。提示词优化和模板变量替换由扩展中的本地逻辑完成。PromptPro 也不会自动代你提交消息。如果你主动将文本发送给第三方 AI 网站，该提交由该网站按照自己的条款和隐私规则处理。" },
        { question: "如何删除我的数据？", answer: "你可以从 Chrome 中移除 PromptPro 扩展，以删除 PromptPro 在浏览器本地保存的数据。当前扩展没有单独的一键删除数据控件，因此移除前请先备份你希望保留的个人内容。" },
      ],
    },
    {
      title: "模板",
      questions: [
        { question: "模板如何工作？", answer: "在本地双语模板库中搜索，选择模板，填写变量，然后将结果插入支持的页面输入框或复制文本。你也可以在扩展中本地创建和管理个人模板。" },
        { question: "可以自定义模板吗？", answer: "可以。你可以为当前任务填写模板变量，也可以创建自己的个人模板，以便复用固定的工作结构。这些操作由扩展在本地完成。" },
      ],
    },
    {
      title: "平台",
      questions: [
        { question: "PromptPro 支持哪些 AI 网站？", answer: "Platforms 页面将 ChatGPT、Claude、Gemini 和 DeepSeek 标记为“Previously verified / 历史验证”；豆包、Perplexity、Microsoft Copilot、Grok / X Grok、Google AI Studio、Cursor、v0 和 Lovable 标记为“Configured · Not verified / 代码配置 · 未验证”。第三方网站更新编辑器或页面结构后，兼容性可能变化。" },
        { question: "PromptPro 会适用于所有 AI 网站吗？", answer: "不会。PromptPro 面向当前配置中列出的 AI 网站，配置不代表每个网站或每种页面状态都能正常工作。扩展没有宣称支持所有 AI 网站。" },
      ],
    },
  ],
  finalCta: {
    title: "准备好体验本地提示词工作流了吗？",
    description: "前往 Chrome Web Store 安装 PromptPro，在支持的 AI 网站中探索提示词整理和双语模板。",
    label: "添加到 Chrome",
  },
};
