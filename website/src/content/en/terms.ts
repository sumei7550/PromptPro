import type { TermsContent } from "@/content/terms";

export const termsContent: TermsContent = {
  hero: {
    eyebrow: "Legal",
    title: "Terms of Use",
    description: "The basic rules and responsibilities for using PromptPro.",
    updated: "Last updated: September 2, 2026",
  },
  sections: [
    {
      title: "1. Introduction",
      paragraphs: [
        "By using PromptPro, you agree to these Terms of Use. If you do not agree with them, please do not use the extension.",
        "These Terms describe PromptPro's general use rules and the boundaries of a browser extension that works with supported third-party AI websites.",
      ],
    },
    {
      title: "2. Using PromptPro",
      paragraphs: [
        "PromptPro lets you refine prompts, browse and reuse built-in templates, and create personal templates in the extension. These features are designed for your own use in supported browser environments.",
        "You are responsible for the content you enter, select, save, or insert through PromptPro, and for following the rules that apply to any third-party website where you use it.",
      ],
    },
    {
      title: "3. Browser Extension",
      paragraphs: [
        "PromptPro is a Chrome extension. Its behavior depends on the browser environment and on the page structure of supported AI websites.",
        "Third-party AI websites may change over time. Browser updates or changes to those websites may affect whether a PromptPro feature works as expected. PromptPro does not promise permanent compatibility or uninterrupted operation on every website.",
      ],
    },
    {
      title: "4. Third-Party Websites",
      paragraphs: [
        "PromptPro can be used with third-party AI websites such as ChatGPT, Claude, Gemini, DeepSeek, and other configured platforms. Those websites are operated and controlled by their respective providers.",
        "PromptPro does not control the content, availability, privacy practices, retention, security, or terms of third-party services. Your use of those services remains subject to their own policies and rules.",
      ],
    },
    {
      title: "5. User Content",
      paragraphs: [
        "You retain responsibility for your prompts, templates, and other text that you enter or create. PromptPro does not claim ownership of your user content.",
        "In the current extension implementation, prompts, personal templates, settings, and accepted optimization history are primarily handled in browser storage. The Privacy Policy explains the current data-handling boundaries in more detail.",
      ],
    },
    {
      title: "6. Acceptable Use",
      paragraphs: ["You must not use PromptPro to:"],
      items: [
        "Abuse, disrupt, or interfere with the normal operation of the extension or a third-party website.",
        "Violate applicable laws, regulations, or the rules of a third-party service.",
        "Attempt to misuse, reverse engineer, or circumvent safeguards of the extension beyond what applicable law permits.",
      ],
    },
    {
      title: "7. Intellectual Property",
      paragraphs: [
        "PromptPro's code, brand, design, bundled templates, and other product materials are owned by PromptPro or the developer, except for third-party materials and the content you provide. These Terms do not transfer ownership of those product materials to you.",
      ],
    },
    {
      title: "8. Disclaimer",
      paragraphs: [
        "PromptPro is provided on an “as available” basis. Features, compatibility, and availability may change as browsers and third-party AI websites change.",
        "PromptPro does not guarantee particular optimization results, uninterrupted availability, or compatibility with every third-party website. You should review and decide whether to use any generated or refined text before submitting it elsewhere.",
      ],
    },
    {
      title: "9. Limitation of Liability",
      paragraphs: [
        "To the extent permitted by applicable law, PromptPro and the developer will not be responsible for indirect, incidental, special, consequential, or similar losses, or for losses arising from reliance on a result produced through the extension or a third-party service.",
        "Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.",
      ],
    },
    {
      title: "10. Changes to These Terms",
      paragraphs: [
        "These Terms may be updated when PromptPro's features, operation, or legal requirements change. The updated version will be posted on this page, and the date above will be updated to show when it was last revised.",
      ],
    },
  ],
  contact: {
    title: "11. Contact",
    body: "For questions about these Terms:",
    emailLabel: "sumei7550@outlook.com",
    email: "sumei7550@outlook.com",
  },
};
