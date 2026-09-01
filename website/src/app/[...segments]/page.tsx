import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TodoPage } from "@/components/todo-page";
import { FeaturesPage } from "@/components/features/features-page";
import { PlatformsPage } from "@/components/platforms/platforms-page";
import { HomePage } from "@/components/home/home-page";
import { PrivacyPage } from "@/components/privacy/privacy-page";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { featuresContent as enFeaturesContent } from "@/content/en/features";
import { homeContent as zhHomeContent } from "@/content/zh-CN/home";
import { featuresContent as zhFeaturesContent } from "@/content/zh-CN/features";
import { privacyContent as enPrivacyContent } from "@/content/en/privacy";
import { privacyContent as zhPrivacyContent } from "@/content/zh-CN/privacy";
import { getMetadata } from "@/lib/seo";
import { platformsContent as enPlatformsContent } from "@/content/en/platforms";
import { platformsContent as zhPlatformsContent } from "@/content/zh-CN/platforms";
import { TemplatesPage } from "@/components/templates/templates-page";
import { templatesContent as enTemplatesContent } from "@/content/en/templates";
import { templatesContent as zhTemplatesContent } from "@/content/zh-CN/templates";
import { FaqPage } from "@/components/faq/faq-page";
import { faqContent as enFaqContent } from "@/content/en/faq";
import { faqContent as zhFaqContent } from "@/content/zh-CN/faq";
import { SupportPage } from "@/components/support/support-page";
import { supportContent as enSupportContent } from "@/content/en/support";
import { supportContent as zhSupportContent } from "@/content/zh-CN/support";
import { TermsPage } from "@/components/terms/terms-page";
import { termsContent as enTermsContent } from "@/content/en/terms";
import { termsContent as zhTermsContent } from "@/content/zh-CN/terms";

const pages = new Set(["features", "privacy", "platforms", "templates", "faq", "support", "terms"]);
const paths = [
  ["features"], ["privacy"], ["platforms"], ["templates"], ["faq"], ["support"], ["terms"],
  ["zh-CN"], ["zh-CN", "features"], ["zh-CN", "privacy"],
  ["zh-CN", "platforms"], ["zh-CN", "templates"], ["zh-CN", "faq"], ["zh-CN", "support"], ["zh-CN", "terms"],
];
type SegmentsPageProps = { params: Promise<{ segments: string[] }> };

export function generateStaticParams() {
  return paths.map((segments) => ({ segments }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: SegmentsPageProps): Promise<Metadata> {
  const { segments } = await params;
  return getMetadata(`/${segments.join("/")}`);
}

export default async function SegmentsPage({ params }: SegmentsPageProps) {
  const { segments } = await params;
  const isChinese = segments[0] === "zh-CN";
  const page = isChinese ? segments[1] : segments[0];
  const locale = isChinese ? "zh-CN" : "en";
  if ((isChinese && segments.length > 2) || (!isChinese && segments.length > 1) || (isChinese && segments.length === 1 && page !== undefined) || (page !== undefined && !pages.has(page))) notFound();
  if (isChinese && segments.length === 1) {
    return <><SiteHeader locale="zh-CN" pathname="/zh-CN" /><HomePage locale="zh-CN" content={zhHomeContent} /><SiteFooter locale="zh-CN" /></>;
  }
  const pathname = isChinese ? `/zh-CN/${page}` : `/${page}`;
  const content = isChinese ? zhFeaturesContent : enFeaturesContent;
  const privacyContent = isChinese ? zhPrivacyContent : enPrivacyContent;
  const platformsContent = isChinese ? zhPlatformsContent : enPlatformsContent;
  const templatesContent = isChinese ? zhTemplatesContent : enTemplatesContent;
  const faqContent = isChinese ? zhFaqContent : enFaqContent;
  const supportContent = isChinese ? zhSupportContent : enSupportContent;
  const termsContent = isChinese ? zhTermsContent : enTermsContent;
  return <><SiteHeader locale={locale} pathname={pathname} />{page === "features" ? <FeaturesPage locale={locale} content={content} /> : page === "privacy" ? <PrivacyPage locale={locale} content={privacyContent} /> : page === "platforms" ? <PlatformsPage locale={locale} content={platformsContent} /> : page === "templates" ? <TemplatesPage locale={locale} content={templatesContent} /> : page === "faq" ? <FaqPage locale={locale} content={faqContent} /> : page === "support" ? <SupportPage locale={locale} content={supportContent} /> : page === "terms" ? <TermsPage locale={locale} content={termsContent} /> : <TodoPage locale={locale} path={pathname} />}<SiteFooter locale={locale} /></>;
}
