import type { Metadata } from "next";

import { LocalizedRoutePage } from "@/app/route-page";
import { getMetadata } from "@/lib/seo";

const paths = [
  [], ["features"], ["privacy"], ["platforms"], ["templates"], ["faq"], ["support"], ["terms"],
  ["tools", "prompt-optimizer"], ["tools", "json-prompt-generator"], ["use-cases", "chatgpt-prompt-optimizer"],
];

type PageProps = { params: Promise<{ segments?: string[] }> };

export function generateStaticParams() {
  return paths.map((segments) => ({ segments }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { segments = [] } = await params;
  const path = segments.length ? `/zh-CN/${segments.join("/")}` : "/zh-CN";
  return getMetadata(path);
}

export default async function ChinesePage({ params }: PageProps) {
  const { segments = [] } = await params;
  return <LocalizedRoutePage segments={segments} locale="zh-CN" />;
}
