import type { SupportContent } from "@/content/locales";

export const supportContent: SupportContent = {
  hero: {
    eyebrow: "支持",
    title: "获取 PromptPro 支持",
    description: "帮助安装、使用功能或反馈兼容性问题。你可以从下面的入口开始。",
  },
  supportOptions: [
    { title: "常见问题", description: "查看关于 PromptPro 的常见问题解答。", label: "查看常见问题", href: "/zh-CN/faq" },
    { title: "GitHub", description: "向开发者反馈问题和建议。", label: "打开 GitHub", href: "https://github.com/sumei7550/PromptPro/issues", external: true },
    { title: "联系我们", description: "如有问题、建议或兼容性反馈，可以联系开发者。", label: "发送邮件", href: "mailto:sumei7550@outlook.com" },
    { title: "Ko-fi", description: "支持独立开发者继续维护 PromptPro。", label: "打开 Ko-fi", href: "https://ko-fi.com/sumei7550", external: true },
  ],
  troubleshootingTitle: "反馈问题前",
  troubleshooting: [
    { title: "检查扩展", description: "确认 PromptPro 已在 Chrome 中启用。" },
    { title: "刷新页面", description: "刷新 AI 网站页面后，再次尝试相关操作。" },
    { title: "确认网站范围", description: "确认当前网站属于已配置或已验证范围。" },
    { title: "提供必要信息", description: "反馈兼容性问题时，请提供浏览器和出现问题的网站信息，避免分享敏感提示词内容。" },
  ],
  compatibilityNote: {
    title: "兼容性可能变化",
    description: "第三方 AI 网站可能会更新页面结构或编辑器行为，这些变化可能影响兼容性。",
  },
  finalCta: {
    title: "还有问题？",
    description: "先查看常见问题，或安装 PromptPro，在支持的 AI 网站中体验本地提示词工作流。",
    primaryLabel: "添加到 Chrome",
    secondaryLabel: "常见问题",
  },
};
