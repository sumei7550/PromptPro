import type { FaqContent, SupportedLocale } from "@/content/locales";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import { absoluteSiteUrl, homepageDescription } from "@/lib/seo";

function StructuredData({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function HomepageStructuredData({ locale = "en", path = "/" }: { locale?: SupportedLocale; path?: string } = {}) {
  const url = absoluteSiteUrl(path);
  return <>
    <StructuredData data={{ "@context": "https://schema.org", "@type": "WebSite", name: "PromptPro", url, description: homepageDescription, inLanguage: locale === "en" ? "en" : "zh-CN" }} />
    <StructuredData data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "PromptPro", applicationCategory: "BrowserApplication", operatingSystem: "Chrome", description: homepageDescription, url, installUrl: chromeWebStoreUrl, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }} />
  </>;
}

export function FaqStructuredData({ content, locale, path }: { content: FaqContent; locale: SupportedLocale; path: string }) {
  const questions = content.categories.flatMap((category) => category.questions);
  return <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: absoluteSiteUrl(path),
    inLanguage: locale === "en" ? "en" : "zh-CN",
    mainEntity: questions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  }} />;
}

export function LandingFaqStructuredData({ faq, locale, path }: { faq: { question: string; answer: string }[]; locale: SupportedLocale; path: string }) {
  return <StructuredData data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: absoluteSiteUrl(path),
    inLanguage: locale === "en" ? "en" : "zh-CN",
    mainEntity: faq.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  }} />;
}
