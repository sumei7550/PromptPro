import type { PlatformsContent } from "@/content/locales";

export const platformsContent: PlatformsContent = {
  hero: {
    eyebrow: "Platform compatibility",
    title: "Works across popular AI platforms",
    description: "Use PromptPro's prompt optimization and template tools across supported AI websites.",
  },
  overview: "PromptPro integrates with supported AI websites through browser-side extension logic. Compatibility can change when third-party websites update their interfaces.",
  groups: [
    {
      title: "Historically verified",
      badge: "Previously verified",
      description: "These platforms have historical verification evidence, but they have not been retested in the current validation cycle.",
      status: "historical",
      platforms: [
        ["ChatGPT", "Historical verification evidence exists; the current version has not been fully retested."],
        ["Claude", "Historical verification evidence exists; the current version has not been fully retested."],
        ["Gemini", "Historical verification evidence exists; the current version has not been fully retested."],
        ["DeepSeek", "Historical verification evidence exists; the current version has not been fully retested."],
      ].map(([name, description]) => ({ name, description })),
    },
    {
      title: "Configured · Not verified",
      badge: "Configured · Not verified",
      description: "These sites are present in the extension configuration, but current compatibility has not been sufficiently verified.",
      status: "configured-unverified",
      platforms: [
        ["Doubao", "Configured in the extension; current availability is not verified."],
        ["Perplexity", "Configured in the extension; current availability is not verified."],
        ["Microsoft Copilot", "Configured in the extension; current availability is not verified."],
        ["Grok / X Grok", "Configured in the extension; current availability is not verified."],
        ["Google AI Studio", "Configured in the extension; current availability is not verified."],
        ["Cursor", "Configured in the extension; current availability is not verified."],
        ["v0", "Configured in the extension; current availability is not verified."],
        ["Lovable", "Configured in the extension; current availability is not verified."],
      ].map(([name, description]) => ({ name, description })),
    },
  ],
  meaning: {
    eyebrow: "How to read these statuses",
    title: "Configuration is a starting point, not a stability promise.",
    description: "PromptPro can attempt to add its browser-side tools on configured websites. The experience may differ by platform because each site controls its own editor and page structure.",
    items: [
      ["Optimize a prompt", "When the page input is recognized, local prompt refinement can be started from the PromptPro action."],
      ["Reuse templates", "Templates can be browsed in the extension and inserted or copied when the current page input supports the action."],
      ["Keep the user in control", "PromptPro does not automatically navigate or submit a message on the user's behalf."],
    ].map(([title, description]) => ({ title, description })),
  },
  notice: "Third-party AI websites change over time. PromptPro compatibility may require updates when those websites change their page structure or editor behavior.",
  finalCta: {
    title: "Try PromptPro on your workflow.",
    description: "Install the extension and check the current experience with the AI websites you use.",
    label: "Add to Chrome",
  },
};
