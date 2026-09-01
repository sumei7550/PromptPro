import type { SupportContent } from "@/content/locales";

export const supportContent: SupportContent = {
  hero: {
    eyebrow: "Support",
    title: "Get help with PromptPro",
    description: "Need help with installation, compatibility, or using PromptPro features? Start with the options below.",
  },
  supportOptions: [
    { title: "FAQ", description: "Find answers to common questions about PromptPro.", label: "Read the FAQ", href: "/faq" },
    { title: "GitHub", description: "Report issues and share feedback with the developer.", label: "Open GitHub", href: "https://github.com/sumei7550/PromptPro/issues", external: true },
    { title: "Contact", description: "Contact the developer for questions, feedback, or compatibility issues.", label: "Email the developer", href: "mailto:sumei7550@outlook.com" },
    { title: "Ko-fi", description: "Support the independent developer behind PromptPro.", label: "Open Ko-fi", href: "https://ko-fi.com/sumei7550", external: true },
  ],
  troubleshootingTitle: "Before reporting an issue",
  troubleshooting: [
    { title: "Check the extension", description: "Confirm that PromptPro is enabled in Chrome." },
    { title: "Refresh the page", description: "Refresh the AI website page and try the action again." },
    { title: "Check the website", description: "Confirm that the current website is in the configured or verified range." },
    { title: "Share useful context", description: "For compatibility issues, include your browser and the website where the issue occurred. Avoid sharing sensitive prompt content." },
  ],
  compatibilityNote: {
    title: "Compatibility can change",
    description: "Third-party AI websites may change their page structure or editor behavior over time. These changes can affect compatibility.",
  },
  finalCta: {
    title: "Still have a question?",
    description: "Review the common questions or install PromptPro to explore its local prompt workflow on supported AI websites.",
    primaryLabel: "Add to Chrome",
    secondaryLabel: "FAQ",
  },
};
