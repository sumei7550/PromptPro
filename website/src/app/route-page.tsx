import { notFound } from "next/navigation";

import { FaqPage } from "@/components/faq/faq-page";
import { FeaturesPage } from "@/components/features/features-page";
import { HomePage } from "@/components/home/home-page";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PlatformsPage } from "@/components/platforms/platforms-page";
import { PrivacyPage } from "@/components/privacy/privacy-page";
import { FaqStructuredData, HomepageStructuredData, LandingFaqStructuredData } from "@/components/seo/structured-data";
import { getLandingFaq, SeoLandingPage, type SeoLandingKind } from "@/components/seo-pages/seo-landing-page";
import { SupportPage } from "@/components/support/support-page";
import { TemplatesPage } from "@/components/templates/templates-page";
import { TermsPage } from "@/components/terms/terms-page";
import { TodoPage } from "@/components/todo-page";
import { faqContent as enFaqContent } from "@/content/en/faq";
import { featuresContent as enFeaturesContent } from "@/content/en/features";
import { homeContent as enHomeContent } from "@/content/en/home";
import { platformsContent as enPlatformsContent } from "@/content/en/platforms";
import { privacyContent as enPrivacyContent } from "@/content/en/privacy";
import { supportContent as enSupportContent } from "@/content/en/support";
import { templatesContent as enTemplatesContent } from "@/content/en/templates";
import { termsContent as enTermsContent } from "@/content/en/terms";
import { faqContent as zhFaqContent } from "@/content/zh-CN/faq";
import { featuresContent as zhFeaturesContent } from "@/content/zh-CN/features";
import { homeContent as zhHomeContent } from "@/content/zh-CN/home";
import { platformsContent as zhPlatformsContent } from "@/content/zh-CN/platforms";
import { privacyContent as zhPrivacyContent } from "@/content/zh-CN/privacy";
import { supportContent as zhSupportContent } from "@/content/zh-CN/support";
import { templatesContent as zhTemplatesContent } from "@/content/zh-CN/templates";
import { termsContent as zhTermsContent } from "@/content/zh-CN/terms";
import type { SupportedLocale } from "@/content/locales";

const pages = new Set(["features", "privacy", "platforms", "templates", "faq", "support", "terms"]);
const landingPages = new Map<string, SeoLandingKind>([
  ["prompt-optimizer", "prompt-optimizer"],
  ["json-prompt-generator", "json-prompt-generator"],
  ["chatgpt-prompt-optimizer", "chatgpt-prompt-optimizer"],
]);

export function LocalizedRoutePage({ segments, locale }: { segments: string[]; locale: SupportedLocale }) {
  const isChinese = locale === "zh-CN";
  const prefix = isChinese ? "/zh-CN" : "";
  const pathname = `${prefix}${segments.length ? `/${segments.join("/")}` : ""}` || "/";

  if (segments.length === 0) {
    const content = isChinese ? zhHomeContent : enHomeContent;
    return <><HomepageStructuredData locale={locale} path={pathname} /><SiteHeader locale={locale} pathname={pathname} /><HomePage locale={locale} content={content} /><SiteFooter locale={locale} /></>;
  }

  const page = segments[0];
  const landingKind = segments.length === 2 ? landingPages.get(segments[1]) : undefined;
  if (landingKind && !((segments[0] === "tools" && landingKind !== "chatgpt-prompt-optimizer") || (segments[0] === "use-cases" && landingKind === "chatgpt-prompt-optimizer"))) notFound();
  if (landingKind) {
    return <><LandingFaqStructuredData faq={getLandingFaq(landingKind, locale)} locale={locale} path={pathname} /><SiteHeader locale={locale} pathname={pathname} /><SeoLandingPage kind={landingKind} locale={locale} /><SiteFooter locale={locale} /></>;
  }
  if (segments.length !== 1 || !pages.has(page)) notFound();

  const featuresContent = isChinese ? zhFeaturesContent : enFeaturesContent;
  const privacyContent = isChinese ? zhPrivacyContent : enPrivacyContent;
  const platformsContent = isChinese ? zhPlatformsContent : enPlatformsContent;
  const templatesContent = isChinese ? zhTemplatesContent : enTemplatesContent;
  const faqContent = isChinese ? zhFaqContent : enFaqContent;
  const supportContent = isChinese ? zhSupportContent : enSupportContent;
  const termsContent = isChinese ? zhTermsContent : enTermsContent;

  return <>{page === "faq" && <FaqStructuredData content={faqContent} locale={locale} path={pathname} />}<SiteHeader locale={locale} pathname={pathname} />{page === "features" ? <FeaturesPage locale={locale} content={featuresContent} /> : page === "privacy" ? <PrivacyPage locale={locale} content={privacyContent} /> : page === "platforms" ? <PlatformsPage locale={locale} content={platformsContent} /> : page === "templates" ? <TemplatesPage locale={locale} content={templatesContent} /> : page === "faq" ? <FaqPage locale={locale} content={faqContent} /> : page === "support" ? <SupportPage locale={locale} content={supportContent} /> : page === "terms" ? <TermsPage locale={locale} content={termsContent} /> : <TodoPage locale={locale} path={pathname} />}<SiteFooter locale={locale} /></>;
}
