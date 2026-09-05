import type { PrivacyContent } from "@/content/privacy";

export const privacyContent: PrivacyContent = {
  hero: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    description: "A clear explanation of how PromptPro handles your data.",
    updated: "Last updated: September 5, 2026",
  },
  sections: [
    {
      title: "1. Overview",
      paragraphs: [
        "PromptPro is a browser extension for AI-assisted prompt refinement and reusable templates on supported AI websites. PromptPro does not require a PromptPro account.",
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
      title: "3. Prompt Processing",
      paragraphs: [
        "When you request AI optimization, PromptPro sends the current prompt and the minimum optimization settings (language, style, and target platform) to the PromptPro API, which forwards the request to DeepSeek. The request excludes page DOM, cookies, conversation history, saved prompts, stored optimization history, and unrelated page content.",
        "If the AI service has a network, timeout, malformed-response, or service failure, PromptPro may use its bundled local-rule fallback. Template search and template-variable replacement remain local in the extension.",
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
        "PromptPro's content script is configured for supported pages on ChatGPT, Claude, Gemini, DeepSeek, Doubao, Perplexity, Copilot, Grok, Google AI Studio, Cursor, v0, and Lovable. Host permissions allow PromptPro features to operate on those pages and allow its service worker to call the PromptPro API.",
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
        "AI optimization sends only the current prompt and minimum request settings to the PromptPro API and DeepSeek. The server implementation does not intentionally persist prompt bodies in an application database or include them in application logs. DeepSeek processes requests under its own applicable terms and data practices.",
        "The extension does not send saved templates, stored history, settings collections, cookies, DOM, full conversations, or unrelated page content with an optimization request. It does not include extension analytics or telemetry transport.",
        "PromptPro may open external pages when you choose to follow an available link, such as the developer's Ko-fi support page or GitHub repository. Those navigations are user-triggered, and PromptPro does not append your prompt, template, or history content to those links.",
      ],
    },
    {
      title: "7. Analytics and Tracking",
      paragraphs: [
        "The current PromptPro extension does not include analytics, advertising, or telemetry. The local daily usage counter is feature-limit state, not an analytics or tracking system.",
        "The PromptPro website uses Mixpanel for website analytics. Website analytics measures page views, approved referral/source categories, calls to action, Chrome Web Store link clicks, language switches, external-link categories, and FAQ interaction.",
        "Website analytics is limited to normalized page paths, supported locale values, and controlled interaction categories. It must not include prompt text, template text, chat content, third-party AI website content, arbitrary page content, form values, keyboard input, clipboard content, email addresses, or user identity.",
        "The website and extension use separate event namespaces and data boundaries. Website events use the web_ prefix; any future extension analytics would require a separate review and use the extension_ prefix. PromptPro does not use website analytics to send extension prompts, templates, history, settings, or usage data. AI processing requests are a product operation, not an analytics event.",
        "Mixpanel receives the client IP address for IP-based location derivation such as country. PromptPro does not add the raw IP address as a custom event property. The current Project uses US data residency. Optional features such as session replay, heatmaps, form capture, keystroke capture, and automatic content capture are not part of the initial analytics scope.",
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
        "Chrome extension local data can also be removed through Chrome's extension data controls or by uninstalling the extension. Chrome removes the extension's `chrome.storage.local` data when the extension is removed. The current PromptPro API implementation does not create an application database record for an optimization request.",
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
