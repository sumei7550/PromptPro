import type { SupportedLocale } from "@/content/locales";

type TodoPageProps = {
  locale: SupportedLocale;
  path: string;
};

export function TodoPage({ locale, path }: TodoPageProps) {
  const isChinese = locale === "zh-CN";
  return (
    <main style={{ padding: "96px 20px", textAlign: "center" }}>
      <h1>{isChinese ? "页面开发中" : "Page in progress"}</h1>
      <p style={{ marginTop: 16 }}>
        {isChinese ? "该页面已纳入官网开发计划，当前尚未完成。" : "This page is planned for the current website phase and is not complete yet."}
      </p>
      <p style={{ marginTop: 8, color: "#64748b", fontSize: 14 }}>{path}</p>
    </main>
  );
}
