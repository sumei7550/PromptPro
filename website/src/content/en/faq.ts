import type { FaqContent } from "@/content/locales";

export const faqContent: FaqContent = {
  hero: {
    eyebrow: "Frequently asked questions",
    title: "Clear answers before you start.",
    description: "Learn what PromptPro does, how it handles your data, and what to expect when using it on supported AI websites.",
  },
  categories: [
    {
      title: "Product",
      questions: [
        {
          question: "What is PromptPro?",
          answer: "PromptPro is a Chrome extension for local prompt optimization and bilingual prompt templates. It helps you refine a prompt in the browser and reuse templates on supported AI websites.",
        },
        {
          question: "How do I use PromptPro?",
          answer: "Install the extension, open a supported AI website, and use the PromptPro action when an input is recognized. You can preview a local refinement, accept or cancel it, and apply the result yourself. Templates can be searched, customized, inserted, or copied from the extension.",
        },
        {
          question: "Which browsers are supported?",
          answer: "The current product facts confirm Chrome support through a Chrome Manifest V3 extension. Do not assume Edge, Firefox, or Safari support from the current implementation.",
        },
        {
          question: "Do I need an account?",
          answer: "No. PromptPro does not require a PromptPro account or login, and the current implementation does not collect your email address.",
        },
      ],
    },
    {
      title: "Privacy and data",
      questions: [
        {
          question: "Where are my prompts and templates stored?",
          answer: "Personal templates, accepted optimization history, and related extension data are stored in your browser using chrome.storage.local. The extension reads legacy settings from chrome.storage.sync only as a migration source when local settings are not present; ongoing storage uses local storage.",
        },
        {
          question: "Does PromptPro send my prompts to AI services?",
          answer: "The current source contains no PromptPro backend or remote optimization API. Prompt optimization and template variable replacement run in the extension with bundled local logic. PromptPro also does not automatically submit a message for you. If you choose to send text to a third-party AI website, that submission is handled by that website under its own terms and privacy practices.",
        },
        {
          question: "How can I remove my data?",
          answer: "You can remove PromptPro's locally stored data by removing the extension from Chrome. The current extension does not provide a separate one-click data deletion control, so review any personal data you want to keep before removing it.",
        },
      ],
    },
    {
      title: "Templates",
      questions: [
        {
          question: "How do templates work?",
          answer: "Search the local bilingual library, choose a template, fill in its variables, then insert the result into a supported page input or copy the text. You can also create and manage personal templates locally in the extension.",
        },
        {
          question: "Can I customize a template?",
          answer: "Yes. Template variables can be filled in for the task at hand, and you can create your own personal templates when you need a reusable structure. These changes are handled locally by the extension.",
        },
      ],
    },
    {
      title: "Platforms",
      questions: [
        {
          question: "Which AI websites does PromptPro support?",
          answer: "The Platforms page lists ChatGPT, Claude, Gemini, and DeepSeek as previously verified, while Doubao, Perplexity, Microsoft Copilot, Grok / X Grok, Google AI Studio, Cursor, v0, and Lovable are configured but not verified in the current validation cycle. Compatibility can change when a third-party site changes its editor or page structure.",
        },
        {
          question: "Will PromptPro work on every AI website?",
          answer: "No. PromptPro is intended for the AI websites listed in its current configuration, and compatibility is not a promise that every site or every page state will work. The extension does not claim support for all AI websites.",
        },
      ],
    },
  ],
  finalCta: {
    title: "Ready to try a local prompt workflow?",
    description: "Install PromptPro from the Chrome Web Store and explore prompt refinement and bilingual templates on supported AI websites.",
    label: "Add to Chrome",
  },
};
