import type { PrivacyContent } from "@/content/privacy";

export const privacyContent: PrivacyContent = {
  hero: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    description: "A clear explanation of how PromptPro handles your data.",
    updated: "Last updated: September 1, 2026",
  },
  sections: [
    {
      title: "1. Overview",
      paragraphs: [
        "PromptPro is a local-first browser extension for refining prompts and working with reusable templates on supported AI websites. The current prompt optimization logic runs locally in your browser, and PromptPro does not require a PromptPro account.",
        "PromptPro does need to access information you choose to use with its features. This policy explains what the extension may access, how the current version processes it, and where it is stored.",
      ],
    },
    {
      title: "2. Information PromptPro Accesses",
      paragraphs: ["Depending on the feature you use, PromptPro may access or handle:"],
      items: [
        "Prompt text in the relevant input control when you use the optimization action.",
        "Text that you explicitly select and choose to save through the PromptPro context-menu action.",
        "Custom templates that you create, import, edit, copy, or delete.",
        "Optimization history created after you accept an optimization result.",
        "Extension settings and local usage state, such as language, optimization style, and the daily feature counter.",
      ],
    },
    {
      title: "3. Local Processing",
      paragraphs: [
        "The current prompt optimization logic runs locally in the browser using bundled rules. Template search and template-variable replacement also run locally in the extension.",
        "The current extension source does not implement calls to OpenAI, Claude, Gemini, DeepSeek, or a PromptPro backend for prompt processing. It also does not contain functionality that sends Prompt, Template, or History content to a PromptPro backend or third-party optimization API.",
        "PromptPro writes text back to the relevant page input when you request an optimization or template insertion. It does not automatically submit an AI message on your behalf.",
      ],
    },
    {
      title: "4. Local Storage",
      paragraphs: [
        "PromptPro uses Chrome extension local storage (`chrome.storage.local`) for ongoing extension data. This may include settings, custom templates, optimization history, onboarding state, and relevant local usage state.",
        "Custom templates are limited to 10 items. Optimization history is limited to the most recent 50 accepted optimization records. History records may include the original text, optimized text, optimization style, a local record identifier, and creation time. These generated identifiers are not user identity IDs.",
        "The current version may read a legacy `settings` value from Chrome Sync storage when no local settings value exists, in order to migrate it to local storage. Current settings writes use local storage.",
      ],
    },
    {
      title: "5. Website Access and Permissions",
      paragraphs: [
        "PromptPro's content script is configured for supported pages on ChatGPT, Claude, Gemini, DeepSeek, Doubao, Perplexity, Copilot, Grok, Google AI Studio, Cursor, v0, and Lovable. Host permissions allow PromptPro features to operate on those supported AI websites.",
        "PromptPro accesses page content as needed for extension functionality. When you use optimization, it reads the relevant input control; it does not query full conversation history or unrelated page content for that action. The extension may observe page changes to keep its floating control positioned as pages update.",
      ],
      items: [
        "storage: stores extension settings and feature data described in this policy.",
        "scripting: supports a one-time template-insertion fallback after a user requests insertion and the normal content-script path is unavailable.",
        "contextMenus: provides an action for saving text that you explicitly select as a local template draft.",
      ],
    },
    {
      title: "6. Network Requests",
      paragraphs: [
        "The current extension runtime does not contain functionality that sends Prompt, Template, or History content to a PromptPro backend or third-party optimization API. No analytics transport, remote prompt processor, or telemetry request is implemented in the current source.",
        "PromptPro may open external pages when you choose to follow an available link, such as the developer's Ko-fi support page or GitHub repository. Those navigations are user-triggered, and PromptPro does not append your prompt, template, or history content to those links.",
      ],
    },
    {
      title: "7. Analytics and Tracking",
      paragraphs: [
        "PromptPro currently does not include analytics, advertising, or telemetry in the extension. The local daily usage counter is feature-limit state, not an analytics or tracking system.",
      ],
    },
    {
      title: "8. Accounts and Personal Information",
      paragraphs: [
        "PromptPro does not require PromptPro registration or login, does not collect an email address for an account, and does not provide a cloud account or cloud-sync feature.",
        "Prompts and selected text may contain personal information that you choose to enter or select. PromptPro does not determine whether that content is sensitive. Chrome extension local storage should be understood as browser/device storage, not as a promise of encryption.",
      ],
    },
    {
      title: "9. Third-Party AI Services",
      paragraphs: [
        "PromptPro's behavior is limited to the extension features described above. When you use PromptPro on a third-party AI service, your use of that service remains subject to the provider's own privacy policy and terms.",
        "PromptPro does not control how third-party AI services process information you choose to submit to them. This policy does not make privacy, retention, training, security, or deletion promises on behalf of those services.",
      ],
    },
    {
      title: "10. Data Control and Deletion",
      paragraphs: [
        "You can delete individual custom templates from PromptPro. The current website and extension do not provide a dedicated “Clear all optimization history” button. The temporary selected-text draft is removed after the popup reads it.",
        "Chrome extension local data can also be removed through Chrome's extension data controls or by uninstalling the extension. Chrome removes the extension's `chrome.storage.local` data when the extension is removed. The current source does not implement a PromptPro server data store that would require a separate server deletion request.",
      ],
    },
    {
      title: "11. External Links",
      paragraphs: [
        "PromptPro may open external pages such as Ko-fi and GitHub when you choose those links. Those websites operate under their own privacy policies and terms. PromptPro is not responsible for the data practices of external websites.",
      ],
      items: ["Ko-fi support page", "GitHub repository"],
    },
    {
      title: "12. Changes to This Policy",
      paragraphs: [
        "This Privacy Policy may be updated when PromptPro functionality changes. Changes will be reflected by updating the date on this page.",
      ],
    },
  ],
  externalLinks: [
    { label: "Ko-fi support page", href: "https://ko-fi.com/sumei7550" },
    { label: "GitHub repository", href: "https://github.com/sumei7550/PromptPro" },
  ],
  contact: {
    title: "13. Contact",
    body: "For privacy questions about PromptPro, contact the developer through the GitHub repository.",
    linkLabel: "Open GitHub repository",
  },
};
