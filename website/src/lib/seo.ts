import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://prompt-pro-psi.vercel.app";

type SeoEntry = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  locale: "en_US" | "zh_CN";
  path: string;
  alternatePath: string;
};

const entries: Record<string, SeoEntry> = {
  "/": { title: "PromptPro — Local Prompt Optimizer & Bilingual Templates", description: "Improve prompts locally and reuse bilingual templates on supported AI websites. No account required, and prompts are not uploaded to a new remote service.", ogTitle: "PromptPro — Improve Your Prompts Locally", ogDescription: "Refine prompts in your browser and reuse bilingual templates on supported AI websites. No account required.", locale: "en_US", path: "/", alternatePath: "/zh-CN" },
  "/zh-CN": { title: "PromptPro｜本地提示词优化器与双语模板库", description: "在支持的 AI 网站中本地整理提示词并复用中英双语模板。无需账号，提示词不上传到新的远程服务。", ogTitle: "PromptPro｜在浏览器本地优化提示词", ogDescription: "在支持的 AI 网站中整理提示词并复用中英双语模板，无需 PromptPro 账号。", locale: "zh_CN", path: "/zh-CN", alternatePath: "/" },
  "/features": { title: "Prompt Optimizer Extension and Template Library | PromptPro", description: "Refine prompts locally, search bilingual templates, save custom templates, and review recent history in PromptPro.", ogTitle: "PromptPro Features — Local Prompt Tools and Templates", ogDescription: "Explore local prompt refinement, bilingual template search, custom templates, recent history, and browser-based data management.", locale: "en_US", path: "/features", alternatePath: "/zh-CN/features" },
  "/zh-CN/features": { title: "提示词优化扩展与双语模板库｜PromptPro", description: "了解 PromptPro 的本地提示词优化、双语模板搜索、自定义模板和本地历史功能。", ogTitle: "PromptPro 功能｜本地提示词工具与双语模板", ogDescription: "了解本地提示词整理、双语模板搜索、自定义模板、本地历史和浏览器数据管理。", locale: "zh_CN", path: "/zh-CN/features", alternatePath: "/features" },
  "/privacy": { title: "Privacy Policy | PromptPro", description: "Understand how PromptPro accesses, processes, and stores information in the current extension implementation.", ogTitle: "PromptPro Privacy Policy", ogDescription: "How PromptPro handles prompts, templates, local storage, permissions, and third-party AI websites.", locale: "en_US", path: "/privacy", alternatePath: "/zh-CN/privacy" },
  "/zh-CN/privacy": { title: "隐私政策｜PromptPro", description: "了解当前 PromptPro 扩展如何访问、处理和保存提示词、模板及相关本地数据。", ogTitle: "PromptPro 隐私政策", ogDescription: "了解 PromptPro 如何处理提示词、模板、本地存储、权限和第三方 AI 网站。", locale: "zh_CN", path: "/zh-CN/privacy", alternatePath: "/privacy" },
};

export function getMetadata(path: string): Metadata {
  const entry = entries[path];
  if (!entry) {
    const isChinese = path.startsWith("/zh-CN");
    return { title: isChinese ? "PromptPro｜页面开发中" : "PromptPro | Page in progress", description: isChinese ? "该 PromptPro 页面正在开发中。" : "This PromptPro page is currently in progress.", robots: { index: false, follow: true } };
  }
  const url = new URL(entry.path, siteUrl).toString();
  const alternateUrl = new URL(entry.alternatePath, siteUrl).toString();
  const englishUrl = entry.locale === "en_US" ? url : alternateUrl;
  const image = new URL(entry.locale === "zh_CN" ? "/og/promptpro-zh.svg" : "/og/promptpro-en.svg", siteUrl).toString();
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: url, languages: { en: englishUrl, "zh-CN": entry.locale === "zh_CN" ? url : alternateUrl, "x-default": englishUrl } },
    robots: { index: true, follow: true },
    openGraph: { type: "website", locale: entry.locale, url, siteName: "PromptPro", title: entry.ogTitle, description: entry.ogDescription, images: [{ url: image, width: 1200, height: 630, alt: entry.ogTitle }] },
    twitter: { card: "summary_large_image", title: entry.ogTitle, description: entry.ogDescription, images: [image] },
  };
}
