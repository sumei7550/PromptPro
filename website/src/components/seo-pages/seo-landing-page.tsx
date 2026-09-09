import Link from "next/link";

import type { SupportedLocale } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ChromeIcon } from "@/components/ui/chrome-icon";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import styles from "./seo-landing-page.module.css";

export type SeoLandingKind = "prompt-optimizer" | "json-prompt-generator" | "chatgpt-prompt-optimizer";

type LandingCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  exampleTitle: string;
  beforeLabel: string;
  afterLabel: string;
  before: string;
  after: string;
  benefitsTitle: string;
  benefits: { title: string; description: string }[];
  stepsTitle: string;
  steps: { title: string; description: string }[];
  faqTitle: string;
  faq: { question: string; answer: string }[];
  finalTitle: string;
  finalDescription: string;
  finalCta: string;
};

const copy: Record<SupportedLocale, Record<SeoLandingKind, LandingCopy>> = {
  en: {
    "prompt-optimizer": {
      eyebrow: "Prompt optimizer",
      title: "Turn a rough idea into a clearer AI prompt.",
      description: "PromptPro helps you refine prompts in the browser, add useful context, and create instructions that are easier for AI tools to follow.",
      primaryCta: "Add PromptPro to Chrome",
      secondaryCta: "See prompt templates",
      exampleTitle: "See what changes in a prompt",
      beforeLabel: "Before",
      afterLabel: "After",
      before: "Write a marketing plan for my product.",
      after: "Act as a B2B growth strategist. Create a 90-day marketing plan for [product] aimed at [audience]. Include three channels, weekly actions, a budget range, success metrics, and assumptions. Use a concise table followed by risks and next steps.",
      benefitsTitle: "A practical prompt improvement workflow",
      benefits: [
        { title: "Clarify the goal", description: "Turn a broad request into a task with a clear outcome and audience." },
        { title: "Add useful constraints", description: "Make format, tone, length, context, and evaluation criteria explicit." },
        { title: "Review before you use it", description: "Keep the improved prompt visible so you can adjust it instead of blindly sending it." },
      ],
      stepsTitle: "How to improve a prompt",
      steps: [
        { title: "Start with your own words", description: "Describe the task naturally in the AI website you already use." },
        { title: "Review the refinement", description: "Use PromptPro to turn the rough request into a more complete instruction." },
        { title: "Reuse the workflow", description: "Save a useful pattern as a template for the next similar task." },
      ],
      faqTitle: "Prompt optimizer questions",
      faq: [
        { question: "What does a prompt optimizer improve?", answer: "It can help make the goal, context, constraints, output format, and success criteria more explicit. You should still review the result for your task." },
        { question: "Does PromptPro require an account?", answer: "The extension does not require a PromptPro account. Settings, templates, and history are designed to stay in browser storage." },
        { question: "Which AI websites can I use it with?", answer: "PromptPro is designed for supported AI websites. Compatibility can change as those websites update their editors and page structure." },
      ],
      finalTitle: "Make your next prompt easier to reuse.",
      finalDescription: "Install the extension and refine prompts where you already work.",
      finalCta: "Add to Chrome",
    },
    "json-prompt-generator": {
      eyebrow: "Structured output prompts",
      title: "Create prompts that are easier to turn into JSON.",
      description: "Learn how to specify fields, types, validation rules, and fallback behavior so AI responses are more consistent and easier to use in workflows.",
      primaryCta: "Try the workflow in PromptPro",
      secondaryCta: "Browse templates",
      exampleTitle: "A clearer JSON prompt has a contract",
      beforeLabel: "Vague request",
      afterLabel: "Structured request",
      before: "Extract the customer details as JSON.",
      after: "Return only valid JSON with this schema: {\"name\": string|null, \"company\": string|null, \"needs\": string[], \"confidence\": number 0-1}. Use null when a value is missing. Do not add keys or markdown fences.",
      benefitsTitle: "What to define in a structured prompt",
      benefits: [
        { title: "Field names and types", description: "Describe the exact keys, value types, and whether a field may be empty." },
        { title: "Output boundaries", description: "State whether the answer may include explanations, markdown, or only the requested object." },
        { title: "Missing-data behavior", description: "Tell the model what to do when the source does not contain enough information." },
      ],
      stepsTitle: "Build a more reliable JSON request",
      steps: [
        { title: "Describe the input", description: "Explain what the model will receive and what should be extracted or transformed." },
        { title: "Define the schema", description: "List keys, types, allowed values, and required fields in plain language." },
        { title: "Add failure rules", description: "Specify how to represent unknown, invalid, or incomplete values." },
      ],
      faqTitle: "JSON prompt questions",
      faq: [
        { question: "Can a prompt guarantee valid JSON?", answer: "A well-defined prompt can reduce formatting errors, but model behavior and API features vary. Validate the response in your application when reliability matters." },
        { question: "Should I include an example JSON object?", answer: "Examples can help when the structure is complex, especially when they show optional fields and edge cases." },
        { question: "Is this only for developers?", answer: "No. Structured prompts are useful whenever an AI answer needs to be copied into a spreadsheet, workflow, form, or other repeatable process." },
      ],
      finalTitle: "Make AI output easier to use.",
      finalDescription: "Start with a structured prompt pattern and adapt it to your workflow.",
      finalCta: "Add to Chrome",
    },
    "chatgpt-prompt-optimizer": {
      eyebrow: "ChatGPT prompt optimizer",
      title: "Get more useful answers from ChatGPT with clearer instructions.",
      description: "Improve vague ChatGPT requests by adding role, context, constraints, output format, and a clear definition of a good answer.",
      primaryCta: "Improve prompts in ChatGPT",
      secondaryCta: "Explore features",
      exampleTitle: "From a vague request to a useful brief",
      beforeLabel: "Vague prompt",
      afterLabel: "Clear prompt",
      before: "Summarize this report.",
      after: "Summarize this report for a busy product leader. Start with a five-bullet executive summary, then list the three most important risks, decisions needed, and evidence for each conclusion. Keep the answer under 400 words and mark unsupported claims.",
      benefitsTitle: "Why ChatGPT prompts often need more detail",
      benefits: [
        { title: "Context changes the answer", description: "Tell ChatGPT who the answer is for and what decision or task it should support." },
        { title: "Format reduces rework", description: "Specify headings, tables, limits, examples, or other output requirements up front." },
        { title: "Evaluation improves quality", description: "Explain what a useful answer must include and what it should avoid." },
      ],
      stepsTitle: "A repeatable ChatGPT prompt pattern",
      steps: [
        { title: "Name the role", description: "Give ChatGPT a relevant perspective without relying on role-play alone." },
        { title: "Supply the context", description: "Include the facts, audience, source material, and constraints that matter." },
        { title: "Define the answer", description: "Specify the format, length, tone, and checks for a useful result." },
      ],
      faqTitle: "ChatGPT prompt questions",
      faq: [
        { question: "Do longer prompts always work better?", answer: "No. A focused prompt with relevant context is usually more useful than a long prompt containing unrelated instructions." },
        { question: "Can PromptPro send my prompt automatically?", answer: "PromptPro is designed to help you review and insert prompt text. It does not automatically submit messages on your behalf." },
        { question: "Can I save a ChatGPT prompt for later?", answer: "Yes. PromptPro includes reusable templates and lets you keep personal prompt patterns in the extension." },
      ],
      finalTitle: "Spend less time rewriting the same request.",
      finalDescription: "Use a clearer prompt pattern directly in your ChatGPT workflow.",
      finalCta: "Add to Chrome",
    },
  },
  "zh-CN": {
    "prompt-optimizer": {
      eyebrow: "提示词优化器",
      title: "把模糊想法整理成更清晰的 AI 提示词。",
      description: "PromptPro 帮你在浏览器中补充上下文、约束和输出要求，让 AI 更容易理解并执行你的任务。",
      primaryCta: "添加 PromptPro 到 Chrome",
      secondaryCta: "查看提示词模板",
      exampleTitle: "看看提示词发生了什么变化",
      beforeLabel: "优化前",
      afterLabel: "优化后",
      before: "帮我为产品写一个营销计划。",
      after: "你是一名 B2B 增长策略顾问。请为面向【目标受众】的【产品】制定 90 天营销计划，包含 3 个渠道、每周行动、预算范围、成功指标和关键假设。先用简洁表格呈现，再列出风险和下一步。",
      benefitsTitle: "实用的提示词优化流程",
      benefits: [
        { title: "明确目标", description: "把宽泛的请求整理成有明确结果和受众的任务。" },
        { title: "补充有效约束", description: "提前说明格式、语气、长度、背景和判断标准。" },
        { title: "使用前先检查", description: "先查看优化结果，再根据实际任务调整，而不是直接盲目发送。" },
      ],
      stepsTitle: "如何优化一个提示词",
      steps: [
        { title: "用自己的话开始", description: "在你正在使用的 AI 网站中自然描述当前任务。" },
        { title: "查看优化结果", description: "使用 PromptPro 把模糊请求整理成更完整的任务说明。" },
        { title: "保存工作方式", description: "把有效的模式保存为模板，用于下一次类似任务。" },
      ],
      faqTitle: "提示词优化常见问题",
      faq: [
        { question: "提示词优化器会优化什么？", answer: "它可以帮助补充目标、上下文、约束、输出格式和判断标准，但你仍应根据实际任务检查结果。" },
        { question: "PromptPro 需要注册账号吗？", answer: "扩展不要求注册 PromptPro 账号，设置、模板和历史记录设计为保存在浏览器中。" },
        { question: "支持哪些 AI 网站？", answer: "PromptPro 面向已支持的 AI 网站，具体兼容性可能随着这些网站的编辑器和页面结构变化而变化。" },
      ],
      finalTitle: "让下一次提示词更容易复用。",
      finalDescription: "安装扩展，在你已经使用的 AI 网站中整理提示词。",
      finalCta: "添加到 Chrome",
    },
    "json-prompt-generator": {
      eyebrow: "结构化输出提示词",
      title: "创建更容易输出 JSON 的提示词。",
      description: "学习如何说明字段、类型、校验规则和异常情况，让 AI 输出更稳定，也更容易接入工作流程。",
      primaryCta: "在 PromptPro 中使用这套方法",
      secondaryCta: "浏览模板",
      exampleTitle: "清晰的 JSON 提示词是一份输出契约",
      beforeLabel: "模糊请求",
      afterLabel: "结构化请求",
      before: "提取客户信息并输出 JSON。",
      after: "只返回有效 JSON，结构为：{\"name\": string|null, \"company\": string|null, \"needs\": string[], \"confidence\": number 0-1}。缺失值使用 null，不要添加字段，也不要使用 Markdown 代码块。",
      benefitsTitle: "结构化提示词应该说明什么",
      benefits: [
        { title: "字段名称和类型", description: "明确字段名、值类型，以及字段是否允许为空。" },
        { title: "输出边界", description: "说明是否允许解释文字、Markdown，还是只能返回请求的对象。" },
        { title: "缺失数据处理", description: "告诉模型在信息不足时应该如何表示未知或不完整的值。" },
      ],
      stepsTitle: "构建更可靠的 JSON 请求",
      steps: [
        { title: "说明输入内容", description: "解释模型会接收到什么，以及需要提取或转换什么。" },
        { title: "定义输出结构", description: "用清晰语言列出字段、类型、允许值和必填项。" },
        { title: "补充异常规则", description: "规定未知、无效或不完整数据应该如何输出。" },
      ],
      faqTitle: "JSON 提示词常见问题",
      faq: [
        { question: "提示词能保证一定输出有效 JSON 吗？", answer: "清晰的提示词可以减少格式错误，但模型行为和 API 能力各不相同。对可靠性要求高的应用仍应验证输出。" },
        { question: "需要在提示词中放 JSON 示例吗？", answer: "结构复杂时，示例很有帮助，尤其可以展示可选字段和边界情况。" },
        { question: "这只适合程序员吗？", answer: "不是。只要 AI 输出需要复制到表格、工作流、表单或其他固定流程中，结构化提示词就有价值。" },
      ],
      finalTitle: "让 AI 输出更容易使用。",
      finalDescription: "从结构化提示词模式开始，再根据自己的工作流程调整。",
      finalCta: "添加到 Chrome",
    },
    "chatgpt-prompt-optimizer": {
      eyebrow: "ChatGPT 提示词优化",
      title: "用更清晰的指令，让 ChatGPT 给出更有用的回答。",
      description: "通过补充角色、背景、约束、输出格式和判断标准，改善宽泛的 ChatGPT 请求。",
      primaryCta: "在 ChatGPT 中优化提示词",
      secondaryCta: "了解产品功能",
      exampleTitle: "从模糊请求到可执行任务",
      beforeLabel: "模糊提示词",
      afterLabel: "清晰提示词",
      before: "总结这份报告。",
      after: "请面向繁忙的产品负责人总结这份报告。先给出 5 条高管摘要，再列出 3 个最重要的风险、需要做出的决策和对应证据。控制在 400 字以内，并标记缺少依据的判断。",
      benefitsTitle: "为什么 ChatGPT 提示词经常需要补充信息",
      benefits: [
        { title: "背景会改变答案", description: "说明回答面向谁，以及它要支持什么决策或任务。" },
        { title: "格式可以减少返工", description: "提前指定标题、表格、字数、示例或其他输出要求。" },
        { title: "判断标准有助于提质", description: "告诉 ChatGPT 什么样的回答算有用，以及应该避免什么。" },
      ],
      stepsTitle: "一套可复用的 ChatGPT 提示词结构",
      steps: [
        { title: "说明角色", description: "给出与任务相关的视角，但不要只依赖角色扮演。" },
        { title: "提供上下文", description: "补充事实、受众、资料和真正重要的限制条件。" },
        { title: "定义回答方式", description: "明确格式、长度、语气，以及检查答案的方法。" },
      ],
      faqTitle: "ChatGPT 提示词常见问题",
      faq: [
        { question: "提示词越长越好吗？", answer: "不一定。包含相关上下文的聚焦提示词，通常比堆满无关指令的长提示词更有效。" },
        { question: "PromptPro 会自动发送提示词吗？", answer: "PromptPro 用于帮助你检查和插入提示词，不会代替你自动提交消息。" },
        { question: "可以保存 ChatGPT 提示词吗？", answer: "可以。PromptPro 提供可复用模板，也支持在扩展中保存个人提示词模式。" },
      ],
      finalTitle: "少一点重复改写，多一点真正工作。",
      finalDescription: "在 ChatGPT 工作流程中直接使用更清晰的提示词结构。",
      finalCta: "添加到 Chrome",
    },
  },
};

export function SeoLandingPage({ kind, locale }: { kind: SeoLandingKind; locale: SupportedLocale }) {
  const content = copy[locale][kind];
  const base = locale === "en" ? "" : "/zh-CN";
  return <main id="main-content">
    <section className={styles.hero}><Container className={styles.heroInner}><p className={styles.eyebrow}>{content.eyebrow}</p><h1>{content.title}</h1><p className={styles.heroDescription}>{content.description}</p><div className={styles.heroActions}><Button href={chromeWebStoreUrl}><ChromeIcon />{content.primaryCta}</Button><Button href={`${base}/templates`} variant="secondary">{content.secondaryCta}</Button></div><p className={styles.heroNote}>{locale === "en" ? "Review the result before you use it. PromptPro does not submit messages for you." : "使用前请先检查结果。PromptPro 不会代替你提交消息。"}</p></Container></section>
    <Section><Container><div className={styles.sectionIntro}><p className={styles.eyebrow}>{content.exampleTitle}</p><h2>{content.beforeLabel} → {content.afterLabel}</h2></div><div className={styles.exampleGrid}><Card><p className={styles.cardLabel}>{content.beforeLabel}</p><p className={styles.exampleText}>{content.before}</p></Card><Card className={styles.afterCard}><p className={styles.cardLabel}>{content.afterLabel}</p><p className={styles.exampleText}>{content.after}</p></Card></div></Container></Section>
    <Section className={styles.tint}><Container><div className={styles.sectionIntro}><p className={styles.eyebrow}>{locale === "en" ? "Why it helps" : "为什么有帮助"}</p><h2>{content.benefitsTitle}</h2></div><div className={styles.cardGrid}>{content.benefits.map((item) => <Card key={item.title}><h3>{item.title}</h3><p>{item.description}</p></Card>)}</div></Container></Section>
    <Section><Container><div className={styles.sectionIntro}><p className={styles.eyebrow}>{locale === "en" ? "A repeatable workflow" : "可复用的流程"}</p><h2>{content.stepsTitle}</h2></div><ol className={styles.steps}>{content.steps.map((step, index) => <li key={step.title}><span className={styles.stepNumber}>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol></Container></Section>
    <Section className={styles.tint}><Container><div className={styles.sectionIntro}><p className={styles.eyebrow}>{locale === "en" ? "Questions" : "常见问题"}</p><h2>{content.faqTitle}</h2></div><div className={styles.faq}>{content.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></Container></Section>
    <section className={styles.finalCta}><Container className={styles.finalCtaInner}><div><p className={styles.eyebrow}>{locale === "en" ? "Get started" : "开始使用"}</p><h2>{content.finalTitle}</h2><p>{content.finalDescription}</p></div><Button href={chromeWebStoreUrl} className={styles.finalButton}>{content.finalCta}</Button></Container></section>
    <nav className={styles.relatedLinks} aria-label={locale === "en" ? "Related pages" : "相关页面"}><Link href={`${base}/features`}>{locale === "en" ? "Features" : "功能"}</Link><Link href={`${base}/templates`}>{locale === "en" ? "Templates" : "模板"}</Link><Link href={`${base}/faq`}>FAQ</Link></nav>
  </main>;
}

export function getSeoLandingCopy(kind: SeoLandingKind, locale: SupportedLocale) {
  return copy[locale][kind];
}

export function getLandingFaq(kind: SeoLandingKind, locale: SupportedLocale) {
  return copy[locale][kind].faq;
}
