import type { HomeContent } from "@/content/locales";

export const homeContent: HomeContent = {
  hero: {
    title: "Improve your prompts locally.",
    subtitle: "PromptPro is a Chrome extension for refining prompts in your browser and reusing bilingual templates on supported AI websites. No account required.",
    primaryCta: "Add to Chrome",
    secondaryCta: "Explore features",
    note: "PromptPro handles prompt work in the browser. Platform availability depends on the current version and validation status.",
  },
  productPreview: {
    eyebrow: "Product preview",
    title: "A practical prompt workflow, close to the page you use.",
    description: "See how PromptPro fits into your existing AI workflow: refine a prompt, review the result, and reuse a template when you need it.",
    libraryAlt: "PromptPro template library showing searchable bilingual prompt categories",
    integrationAlt: "PromptPro prompt optimization review alongside an AI chat interface",
  },
  features: {
    eyebrow: "Core capabilities",
    title: "Build a clearer, more reusable prompt workflow.",
    description: "PromptPro keeps the everyday work of improving and reusing prompts in one browser extension.",
    items: [
      { marker: "01", title: "Local prompt optimization", description: "Refine the prompt you are working on with local rules, review the result, and apply it when it is ready." },
      { marker: "02", title: "Bilingual prompt templates", description: "Browse reusable templates across writing, work, coding, translation, marketing, academic, analysis, and creative tasks." },
      { marker: "03", title: "Custom templates", description: "Save your own templates and fill in variables when a reusable workflow needs more context." },
      { marker: "04", title: "Local optimization history", description: "Revisit recent optimization records stored in your browser, without promising cloud backup or cross-device sync." },
      { marker: "05", title: "English and Chinese experience", description: "Switch the interface and work with bilingual template content as you move between English and Chinese tasks." },
      { marker: "06", title: "Local data management", description: "Keep settings, templates, history, and usage data in browser storage managed by the extension." },
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Local-first by design.",
    description: "PromptPro is designed to keep prompt work close to the browser. The extension does not require an account, and the current implementation does not add a remote prompt-processing service.",
    items: [
      { title: "No account required", description: "Use the extension without creating a PromptPro account or signing in to a website service." },
      { title: "Stored in your browser", description: "Settings, templates, history, and usage data are stored through the extension's browser storage." },
      { title: "No new remote prompt upload", description: "The current source does not add a remote prompt-processing request. Prompt handling stays within the browser." },
    ],
    linkLabel: "Read the privacy details",
  },
  platforms: {
    eyebrow: "Platform status",
    title: "Know what has been checked and what has not.",
    description: "PromptPro is designed for supported AI websites, with platform availability reviewed separately from code configuration.",
    groups: [
      {
        title: "Historical verification evidence",
        badge: "Historically verified",
        description: "These platforms have historical verification evidence. They have not been retested in the current validation cycle, so availability may change with platform updates.",
        status: "historical",
        platforms: ["ChatGPT", "Claude", "Gemini", "DeepSeek"].map((name) => ({ name, description: "Historical evidence; not retested in the current cycle." })),
      },
      {
        title: "Other configured platforms",
        badge: "Configured · Not verified",
        description: "Other platforms are configured in the extension, but they have not been sufficiently verified in the current version. Configuration does not guarantee a stable experience.",
        status: "configured-unverified",
        platforms: ["Doubao", "Perplexity", "Copilot", "Grok / X Grok", "Google AI Studio", "Cursor", "v0", "Lovable"].map((name) => ({ name, description: "Configured in code; current availability not verified." })),
      },
    ],
    note: "Platform availability depends on the current version and the platform's page structure.",
  },
  templates: {
    eyebrow: "Template library",
    title: "Start with a template, then make it yours.",
    description: "Start with a template for the task in front of you, then adapt it to your own context.",
    categories: [
      ["Writing", "Draft, rewrite, and structure everyday writing tasks."],
      ["Workplace", "Prepare clearer workplace messages, plans, and documents."],
      ["Coding", "Turn technical tasks into clearer prompts for coding work."],
      ["Translation", "Prepare prompts for translation, localization, and language comparison."],
      ["Marketing", "Plan marketing copy, campaigns, and audience-focused content."],
      ["Academic", "Organize research, reading, and academic writing tasks."],
      ["Analysis", "Break down information, compare options, and structure findings."],
      ["Creative", "Explore ideas, variations, and creative directions."],
    ].map(([name, description]) => ({ name, description })),
    linkLabel: "Browse all template categories",
  },
  finalCta: {
    title: "Make your next prompt easier to reuse.",
    description: "Install PromptPro from the Chrome Web Store and try local prompt refinement and bilingual templates on supported AI websites.",
    label: "Add to Chrome",
  },
};
