import type { FeaturesContent } from "@/content/locales";

export const featuresContent: FeaturesContent = {
  hero: {
    eyebrow: "A clearer prompt workflow",
    title: "Turn everyday prompts into reusable work.",
    description: "PromptPro helps you refine a prompt, find a useful starting point, and keep the parts of your workflow you want to use again.",
    primaryCta: "Add to Chrome",
    note: "PromptPro uses local rules in the browser. Platform availability depends on the current version and validation status.",
  },
  showcases: [
    {
      eyebrow: "01 · Refine",
      title: "Review a clearer prompt before you use it.",
      description: "Start with the prompt already in your AI website. PromptPro applies local rules, shows the result for review, and lets you decide whether to apply it.",
      details: ["Work from the current input", "Review before applying", "Undo an applied result when needed"],
      image: "/images/product/raw/promptpro-prompt-optimization-review.png",
      imageAlt: "PromptPro optimization review showing an original prompt and a refined result beside an AI chat page",
      aspectRatio: "1141 / 834",
    },
    {
      eyebrow: "02 · Find",
      title: "Search templates by the task in front of you.",
      description: "Browse bilingual templates by title, keywords, description, tags, and category. Search helps you move from a blank page to a useful starting point.",
      details: ["Search English and Chinese content", "Browse eight task categories", "Copy or insert a template when ready"],
      image: "/images/product/raw/promptpro-template-search.png",
      imageAlt: "PromptPro template search with bilingual results and category filters",
      aspectRatio: "621 / 899",
    },
    {
      eyebrow: "03 · Reuse",
      title: "Keep a template close to the work it supports.",
      description: "Choose a reusable template, adapt its variables to your context, and insert the result into the current input when you are ready.",
      details: ["Fill in template variables", "Adapt templates to your context", "Insert into the current input or copy the text"],
      image: "/images/product/raw/promptpro-template-library.png",
      imageAlt: "PromptPro bilingual template library showing reusable prompt categories",
      aspectRatio: "625 / 901",
    },
    {
      eyebrow: "04 · Make it yours",
      title: "Save custom templates for the workflows you repeat.",
      description: "When a reusable workflow needs your own structure, save a custom template and keep its revisions in your browser storage.",
      details: ["Save personal templates", "Use variables for repeated context", "Review personal template history and comparisons"],
      image: "/images/product/raw/promptpro-custom-template.png",
      imageAlt: "PromptPro custom template editor with fields for a personal reusable prompt",
      aspectRatio: "600 / 780",
    },
  ],
  workflow: {
    eyebrow: "One browser workflow",
    title: "From a rough idea to a prompt you can use again.",
    description: "PromptPro keeps the key decisions with you: refine the prompt, review the result, then reuse or save what works.",
    steps: [
      { title: "Start where you work", description: "Use the current input on a supported AI website." },
      { title: "Choose and review", description: "Search a template or refine the prompt, then check the result before applying it." },
      { title: "Reuse the useful parts", description: "Insert a template, save your own version, or revisit recent local history." },
    ],
  },
  finalCta: {
    title: "Make your next prompt easier to reuse.",
    description: "Install PromptPro from the Chrome Web Store and try local prompt refinement and bilingual templates on supported AI websites.",
    label: "Add to Chrome",
  },
};
