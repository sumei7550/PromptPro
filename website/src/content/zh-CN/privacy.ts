import type { PrivacyContent } from "@/content/privacy";

export const privacyContent: PrivacyContent = {
  hero: {
    eyebrow: "隐私",
    title: "隐私政策",
    description: "说明 PromptPro 如何访问、处理和保存你的数据。",
    updated: "最后更新：2026 年 9 月 1 日",
  },
  sections: [
    {
      title: "1. 概览",
      paragraphs: [
        "PromptPro 是一款本地优先的浏览器扩展，用于在支持的 AI 网站中整理提示词并复用模板。当前版本的提示词优化逻辑在浏览器本地运行，且不要求注册 PromptPro 账号。",
        "PromptPro 需要访问你主动用于相关功能的信息。本政策说明扩展可能访问的内容、当前版本如何处理这些内容，以及数据保存在哪里。",
      ],
    },
    {
      title: "2. PromptPro 访问的信息",
      paragraphs: ["根据你使用的功能，PromptPro 可能访问或处理："],
      items: [
        "你使用优化功能时，相关输入框中的提示词文本。",
        "你主动选中并通过 PromptPro 右键菜单选择保存的文本。",
        "你创建、导入、编辑、复制或删除的自定义模板。",
        "你接受优化结果后生成的优化历史。",
        "扩展设置和本地使用状态，例如语言、优化风格和每日功能计数。",
      ],
    },
    {
      title: "3. 本地处理",
      paragraphs: [
        "当前版本使用扩展内置的规则在浏览器本地运行提示词优化。模板搜索和模板变量替换也在扩展本地完成。",
        "当前扩展源码未实现调用 OpenAI、Claude、Gemini、DeepSeek 或 PromptPro 后端来处理提示词，也没有将 Prompt、Template 或 History 内容发送到 PromptPro 后端或第三方优化 API 的功能。",
        "当你请求优化或插入模板时，PromptPro 会将文本写回相关页面的输入框；不会代替你自动提交 AI 消息。",
      ],
    },
    {
      title: "4. 本地存储",
      paragraphs: [
        "PromptPro 使用 Chrome 扩展本地存储（`chrome.storage.local`）保存持续使用所需的扩展数据，包括设置、自定义模板、优化历史、引导状态和相关本地使用状态。",
        "自定义模板最多保存 10 个。优化历史最多保留最近 50 条已接受的优化记录。历史记录可能包括原始文本、优化结果、优化风格、本地记录标识符和创建时间。这些自动生成的标识符不是用户身份 ID。",
        "当本地没有 `settings` 设置时，当前版本可能读取 Chrome Sync 中的旧 `settings` 值并将其迁移到本地存储。当前设置写入使用本地存储。",
      ],
    },
    {
      title: "5. 网站访问与权限",
      paragraphs: [
        "PromptPro 的内容脚本配置运行于 ChatGPT、Claude、Gemini、DeepSeek、豆包、Perplexity、Copilot、Grok、Google AI Studio、Cursor、v0 和 Lovable 等支持页面。主机权限用于让 PromptPro 功能在这些支持的 AI 网站上运行。",
        "PromptPro 会根据扩展功能需要访问页面内容。使用优化时，它读取相关输入框，不会为该功能查询完整对话历史或无关页面内容。页面发生变化时，扩展可能观察页面变化，以便保持悬浮控件的位置。",
      ],
      items: [
        "storage：保存本政策所述的扩展设置和功能数据。",
        "scripting：在用户请求插入模板且正常内容脚本路径不可用时，支持一次性的模板插入回退。",
        "contextMenus：提供将你主动选中的文本保存为本地模板草稿的操作。",
      ],
    },
    {
      title: "6. 网络请求",
      paragraphs: [
        "当前扩展运行时没有将 Prompt、Template 或 History 内容发送到 PromptPro 后端或第三方优化 API 的功能。当前源码中也没有实现分析传输、远程提示词处理或遥测请求。",
        "当你主动点击相关链接时，PromptPro 可能打开 Ko-fi 支持页面或 GitHub 仓库等外部页面。这些导航由用户触发，PromptPro 不会将你的提示词、模板或历史内容附加到这些链接中。",
      ],
    },
    {
      title: "7. 分析与追踪",
      paragraphs: [
        "当前 PromptPro 扩展不包含分析、广告或遥测功能。每日使用次数是功能限制状态，不是分析或追踪系统。",
        "当官网启用该功能时，PromptPro 官网可能使用 Mixpanel 进行网站分析。网站分析用于了解页面浏览、经批准的来源分类、行动号召、Chrome Web Store 链接点击、语言切换、外部链接分类和 FAQ 互动。",
        "网站分析仅限于标准化页面路径、正式支持的语言值和受控的互动分类，不应包含提示词文本、模板文本、聊天内容、第三方 AI 网站内容、任意页面内容、表单值、键盘输入、剪贴板内容、邮箱地址或用户身份。",
        "官网和插件使用不同的事件命名空间和数据边界。官网事件使用 web_ 前缀；未来如需接入插件分析，必须单独审查并使用 extension_ 前缀。PromptPro 不会通过官网分析发送插件提示词、模板、历史、设置或使用状态。",
        "在官网启用分析前，应审查实际 Mixpanel 配置、识别符和存储行为、数据保存期限，以及适用的同意或退出机制，并据此同步本政策。Session Replay、Heatmaps、表单采集、键盘输入采集和自动内容采集等可选功能不属于首版分析范围。",
      ],
    },
    {
      title: "8. 账号与个人信息",
      paragraphs: [
        "PromptPro 不要求注册或登录 PromptPro 账号，不为账号收集邮箱，也不提供云端账号或云同步功能。",
        "你输入或选中的提示词可能包含个人信息。PromptPro 不会判断这些内容是否敏感。Chrome 扩展本地存储应理解为浏览器/设备存储，不代表已加密。",
      ],
    },
    {
      title: "9. 第三方 AI 服务",
      paragraphs: [
        "PromptPro 的行为限于本政策前述的扩展功能。当你在第三方 AI 服务中使用 PromptPro 时，你对该服务的使用仍受其自身隐私政策和服务条款约束。",
        "PromptPro 无法控制第三方 AI 服务如何处理你主动提交给它们的信息。本政策不代表 PromptPro 对这些服务的数据隐私、保存、训练、安全或删除行为作出承诺。",
      ],
    },
    {
      title: "10. 数据控制与删除",
      paragraphs: [
        "你可以在 PromptPro 中删除单个自定义模板。当前官网和扩展没有专门的“一键清空全部优化历史”按钮。临时保存的选中文本草稿会在弹窗读取后删除。",
        "你也可以通过 Chrome 的扩展数据管理功能或卸载扩展来移除本地扩展数据。根据 Chrome 的扩展存储行为，卸载扩展时会移除该扩展对应的 `chrome.storage.local` 数据。当前源码没有 PromptPro 服务端数据存储，因此不存在额外的服务端删除请求。",
      ],
    },
    {
      title: "11. 外部链接",
      paragraphs: [
        "当你主动点击相关链接时，PromptPro 可能打开 Ko-fi、GitHub 等外部页面。这些网站各自遵循自己的隐私政策和服务条款，PromptPro 不负责外部网站的数据处理行为。",
      ],
      items: ["Ko-fi 支持页面", "GitHub 仓库"],
    },
    {
      title: "12. 政策变更",
      paragraphs: [
        "当 PromptPro 的功能发生变化时，本隐私政策可能随之更新。政策变更会通过更新本页面的日期反映。",
      ],
    },
  ],
  externalLinks: [
    { label: "Ko-fi 支持页面", href: "https://ko-fi.com/sumei7550" },
    { label: "GitHub 仓库", href: "https://github.com/sumei7550/PromptPro" },
  ],
  contact: {
    title: "13. 联系方式",
    body: "如有关于 PromptPro 的隐私问题，请通过 GitHub 仓库联系开发者。",
    linkLabel: "打开 GitHub 仓库",
  },
};
