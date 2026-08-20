import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TodoPage } from "@/components/todo-page";
import {
  getOpenGraphLocale,
  isSupportedLocale,
  supportedLocales,
} from "@/content/locales";

type LocalePageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) return {};
  return { openGraph: { locale: getOpenGraphLocale(locale) } };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) notFound();
  return <TodoPage locale={locale} path={`/${locale}`} />;
}
