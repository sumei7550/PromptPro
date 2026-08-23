import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TodoPage } from "@/components/todo-page";
import { FeaturesPage } from "@/components/features/features-page";
import { HomePage } from "@/components/home/home-page";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { featuresContent as enFeaturesContent } from "@/content/en/features";
import { homeContent as zhHomeContent } from "@/content/zh-CN/home";
import { featuresContent as zhFeaturesContent } from "@/content/zh-CN/features";
import { getOpenGraphLocale } from "@/content/locales";

const pages = new Set(["features", "privacy", "platforms", "templates"]);
const paths = [
  ["features"], ["privacy"], ["platforms"], ["templates"],
  ["zh-CN"], ["zh-CN", "features"], ["zh-CN", "privacy"],
  ["zh-CN", "platforms"], ["zh-CN", "templates"],
];
type SegmentsPageProps = { params: Promise<{ segments: string[] }> };

export function generateStaticParams() {
  return paths.map((segments) => ({ segments }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: SegmentsPageProps): Promise<Metadata> {
  const { segments } = await params;
  const locale = segments[0] === "zh-CN" ? "zh-CN" : "en";
  return { openGraph: { locale: getOpenGraphLocale(locale) } };
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
  return <><SiteHeader locale={locale} pathname={pathname} />{page === "features" ? <FeaturesPage locale={locale} content={content} /> : <TodoPage locale={locale} path={pathname} />}<SiteFooter locale={locale} /></>;
}
