import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TodoPage } from "@/components/todo-page";
import {
  getOpenGraphLocale,
  isSupportedLocale,
  supportedLocales,
} from "@/content/locales";

const pages = new Set(["features", "privacy", "platforms", "templates"]);

type NestedPageProps = { params: Promise<{ locale: string; page: string }> };

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) =>
    [...pages].map((page) => ({ locale, page })),
  );
}

export async function generateMetadata({ params }: NestedPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return { openGraph: { locale: getOpenGraphLocale(locale) } };
}

export default async function NestedPage({ params }: NestedPageProps) {
  const { locale, page } = await params;
  if (!isSupportedLocale(locale) || !pages.has(page)) notFound();
  return <TodoPage locale={locale} path={`/${locale}/${page}`} />;
}
