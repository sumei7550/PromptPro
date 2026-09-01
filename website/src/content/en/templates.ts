import type { TemplatesContent } from "@/content/locales";

export const templatesContent: TemplatesContent = {
  hero: {
    eyebrow: "Local template library",
    title: "Reusable prompt templates for everyday AI work.",
    description: "Find a bilingual starting point, adapt it to the task in front of you, and keep useful workflows close to where you work.",
    primaryCta: "Add to Chrome",
    note: "Templates and variable replacement run locally in the extension. Use them on supported AI websites when the current input supports the action.",
  },
  categories: [
    { title: "Writing", description: "Draft, rewrite, and structure everyday writing tasks." },
    { title: "Workplace", description: "Prepare clearer workplace messages, plans, and documents." },
    { title: "Coding", description: "Turn technical tasks into clearer prompts for coding work." },
    { title: "Translation", description: "Prepare prompts for translation, localization, and language comparison." },
    { title: "Marketing", description: "Plan marketing copy, campaigns, and audience-focused content." },
    { title: "Academic", description: "Organize research, reading, and academic writing tasks." },
    { title: "Analysis", description: "Break down information, compare options, and structure findings." },
    { title: "Creative", description: "Explore ideas, variations, and creative directions." },
  ],
  workflow: {
    eyebrow: "A simple reuse loop",
    title: "Move from a task to a prompt you can use again.",
    description: "Search the local library, choose a useful starting point, then make the prompt fit your context before you use it.",
    steps: [
      { title: "Search", description: "Search titles, keywords, descriptions, tags, and categories in the extension." },
      { title: "Choose", description: "Open a template and review the structure before using it." },
      { title: "Customize variables", description: "Fill in the context that changes from one task to the next." },
      { title: "Insert or copy", description: "Insert the result into the current input or copy the template text." },
    ],
  },
  showcases: [
    {
      eyebrow: "01 · Find a starting point",
      title: "Search by the task in front of you.",
      description: "Search across bilingual template content by title, keywords, description, tags, and category. Start with the wording that best matches what you need to do.",
      details: ["Search English and Chinese content", "Filter by the eight task categories", "See reusable results without leaving the extension"],
      image: "/images/product/raw/promptpro-template-search.png",
      imageAlt: "PromptPro template search showing a coding query, category filters, and reusable results",
      aspectRatio: "621 / 899",
    },
    {
      eyebrow: "02 · Browse and reuse",
      title: "Choose a template that fits the workflow.",
      description: "Browse the local library by category, review a template's purpose, and use it as a structured starting point for the current task.",
      details: ["Browse Writing, Workplace, Coding, and other task categories", "Review the template description and tags", "Insert or copy when the prompt is ready"],
      image: "/images/product/raw/promptpro-template-library.png",
      imageAlt: "PromptPro template library showing category browsing and reusable template cards",
      aspectRatio: "625 / 901",
    },
    {
      eyebrow: "03 · Make it yours",
      title: "Save your own reusable templates locally.",
      description: "When a workflow needs your own structure, create a personal template, keep its variables clear, and reuse it from the extension later.",
      details: ["Create a personal template", "Keep reusable context as variables", "Store and manage it in the browser"],
      image: "/images/product/raw/promptpro-custom-template.png",
      imageAlt: "PromptPro custom template form for saving a personal reusable prompt locally",
      aspectRatio: "600 / 780",
    },
  ],
  finalCta: {
    title: "Make your next prompt easier to reuse.",
    description: "Install PromptPro from the Chrome Web Store and try local prompt refinement and bilingual templates on supported AI websites.",
    label: "Add to Chrome",
  },
};
