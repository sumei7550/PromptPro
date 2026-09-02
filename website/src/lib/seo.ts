import type { Metadata } from "next";

const developmentFallbackSiteUrl = "https://prompt-pro-psi.vercel.app";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (process.env.NODE_ENV === "production" && !configuredSiteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be defined for production builds.");
}

function normalizeSiteUrl(value: string): string {
  const url = new URL(value);
  if (url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS.");
  }
  return url.toString().replace(/\/$/, "");
}

export const siteUrl = normalizeSiteUrl(configuredSiteUrl ?? developmentFallbackSiteUrl);

export function absoluteSiteUrl(path: string): string {
  return new URL(path, `${siteUrl}/`).toString();
}

type SeoEntry = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  locale: "en_US" | "zh_CN";
  path: string;
  alternatePath: string;
};

export const homepageDescription = "Improve prompts locally and reuse bilingual templates on supported AI websites. No account required, and prompts are not uploaded to a new remote service.";

const entries: Record<string, SeoEntry> = {
  "/": { title: "PromptPro — Local Prompt Optimizer & Bilingual Templates", description: homepageDescription, ogTitle: "PromptPro — Improve Your Prompts Locally", ogDescription: "Refine prompts in your browser and reuse bilingual templates on supported AI websites. No account required.", locale: "en_US", path: "/", alternatePath: "/zh-CN" },
  "/zh-CN": { title: "PromptPro｜本地提示词优化器与双语模板库", description: "在支持的 AI 网站中本地整理提示词并复用中英双语模板。无需账号，提示词不上传到新的远程服务。", ogTitle: "PromptPro｜在浏览器本地优化提示词", ogDescription: "在支持的 AI 网站中整理提示词并复用中英双语模板，无需 PromptPro 账号。", locale: "zh_CN", path: "/zh-CN", alternatePath: "/" },
  "/features": { title: "Prompt Optimizer Extension and Template Library | PromptPro", description: "Refine prompts locally, search bilingual templates, save custom templates, and review recent history in PromptPro.", ogTitle: "PromptPro Features — Local Prompt Tools and Templates", ogDescription: "Explore local prompt refinement, bilingual template search, custom templates, recent history, and browser-based data management.", locale: "en_US", path: "/features", alternatePath: "/zh-CN/features" },
  "/zh-CN/features": { title: "提示词优化扩展与双语模板库｜PromptPro", description: "了解 PromptPro 的本地提示词优化、双语模板搜索、自定义模板和本地历史功能。", ogTitle: "PromptPro 功能｜本地提示词工具与双语模板", ogDescription: "了解本地提示词整理、双语模板搜索、自定义模板、本地历史和浏览器数据管理。", locale: "zh_CN", path: "/zh-CN/features", alternatePath: "/features" },
  "/privacy": { title: "Privacy Policy | PromptPro", description: "Understand how PromptPro accesses, processes, and stores information in the current extension implementation.", ogTitle: "PromptPro Privacy Policy", ogDescription: "How PromptPro handles prompts, templates, local storage, permissions, and third-party AI websites.", locale: "en_US", path: "/privacy", alternatePath: "/zh-CN/privacy" },
  "/zh-CN/privacy": { title: "隐私政策｜PromptPro", description: "了解当前 PromptPro 扩展如何访问、处理和保存提示词、模板及相关本地数据。", ogTitle: "PromptPro 隐私政策", ogDescription: "了解 PromptPro 如何处理提示词、模板、本地存储、权限和第三方 AI 网站。", locale: "zh_CN", path: "/zh-CN/privacy", alternatePath: "/privacy" },
  "/platforms": { title: "PromptPro Platforms — AI Website Compatibility and Verification Status", description: "See PromptPro's platform status, including historically verified platforms and configured sites that have not been verified in the current version.", ogTitle: "PromptPro Platform Compatibility and Verification Status", ogDescription: "Review historically verified platforms and sites that are configured but not verified in the current version.", locale: "en_US", path: "/platforms", alternatePath: "/zh-CN/platforms" },
  "/zh-CN/platforms": { title: "PromptPro 平台 — AI 网站兼容性与验证状态", description: "查看 PromptPro 的平台状态，包括有历史验证依据的平台，以及当前版本尚未验证的已配置网站。", ogTitle: "PromptPro 平台兼容性与验证状态", ogDescription: "查看有历史验证依据的平台，以及当前版本已配置但尚未验证的网站。", locale: "zh_CN", path: "/zh-CN/platforms", alternatePath: "/platforms" },
  "/templates": { title: "Bilingual Prompt Templates for Everyday AI Work | PromptPro", description: "Search local bilingual prompt templates, fill in variables, reuse workflows, and save personal templates in PromptPro.", ogTitle: "PromptPro Templates — Reusable Prompt Workflows", ogDescription: "Find, customize, and reuse bilingual prompt templates locally in your browser.", locale: "en_US", path: "/templates", alternatePath: "/zh-CN/templates" },
  "/zh-CN/templates": { title: "日常 AI 工作的双语提示词模板｜PromptPro", description: "搜索本地双语提示词模板、填写变量、复用工作流程，并在 PromptPro 中保存个人模板。", ogTitle: "PromptPro 模板｜可复用的提示词工作流程", ogDescription: "在浏览器本地查找、调整和复用中英双语提示词模板。", locale: "zh_CN", path: "/zh-CN/templates", alternatePath: "/templates" },
  "/faq": { title: "PromptPro FAQ — Product, Privacy, Templates, and Platforms", description: "Find clear answers about PromptPro, local prompt processing, browser storage, templates, and platform compatibility.", ogTitle: "PromptPro FAQ", ogDescription: "Answers about using PromptPro, local data handling, templates, and supported platform status.", locale: "en_US", path: "/faq", alternatePath: "/zh-CN/faq" },
  "/zh-CN/faq": { title: "PromptPro 常见问题 — 产品、隐私、模板与平台", description: "了解 PromptPro 的使用方式、本地提示词处理、浏览器存储、模板和平台兼容性。", ogTitle: "PromptPro 常见问题", ogDescription: "了解 PromptPro 的使用方法、数据处理、模板和平台状态。", locale: "zh_CN", path: "/zh-CN/faq", alternatePath: "/faq" },
  "/support": { title: "PromptPro Support — Help, Feedback, and Compatibility", description: "Find PromptPro support options, troubleshooting guidance, developer contact details, and compatibility feedback links.", ogTitle: "PromptPro Support", ogDescription: "Get help with PromptPro installation, usage, and compatibility feedback.", locale: "en_US", path: "/support", alternatePath: "/zh-CN/support" },
  "/zh-CN/support": { title: "PromptPro 支持 — 使用帮助与兼容性反馈", description: "查看 PromptPro 的支持入口、问题排查建议、开发者联系方式和兼容性反馈方式。", ogTitle: "PromptPro 支持", ogDescription: "获取 PromptPro 使用帮助并反馈兼容性问题。", locale: "zh_CN", path: "/zh-CN/support", alternatePath: "/support" },
  "/terms": { title: "Terms of Use | PromptPro", description: "Read the basic rules, user responsibilities, third-party boundaries, and disclaimers for using PromptPro.", ogTitle: "PromptPro Terms of Use", ogDescription: "Basic use rules and responsibilities for PromptPro.", locale: "en_US", path: "/terms", alternatePath: "/zh-CN/terms" },
  "/zh-CN/terms": { title: "使用条款｜PromptPro", description: "了解使用 PromptPro 的基本规则、用户责任、第三方网站边界和免责声明。", ogTitle: "PromptPro 使用条款", ogDescription: "PromptPro 的基本使用规则与用户责任。", locale: "zh_CN", path: "/zh-CN/terms", alternatePath: "/terms" },
};

export function getMetadata(path: string): Metadata {
  const entry = entries[path];
  if (!entry) {
    const isChinese = path.startsWith("/zh-CN");
    return { title: isChinese ? "PromptPro｜页面开发中" : "PromptPro | Page in progress", description: isChinese ? "该 PromptPro 页面正在开发中。" : "This PromptPro page is currently in progress.", robots: { index: false, follow: true } };
  }
  const url = absoluteSiteUrl(entry.path);
  const alternateUrl = absoluteSiteUrl(entry.alternatePath);
  const englishUrl = entry.locale === "en_US" ? url : alternateUrl;
  const image = absoluteSiteUrl("/og/promptpro-og.png");
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: url, languages: { en: englishUrl, "zh-CN": entry.locale === "zh_CN" ? url : alternateUrl, "x-default": englishUrl } },
    robots: { index: true, follow: true },
    openGraph: { type: "website", locale: entry.locale, alternateLocale: [entry.locale === "en_US" ? "zh_CN" : "en_US"], url, siteName: "PromptPro", title: entry.ogTitle, description: entry.ogDescription, images: [{ url: image, width: 1200, height: 630, alt: entry.ogTitle }] },
    twitter: { card: "summary_large_image", title: entry.ogTitle, description: entry.ogDescription, images: [image] },
  };
}
