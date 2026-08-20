import type { SupportedLocale } from "@/content/locales";

type TodoPageProps = {
  locale: SupportedLocale;
  path: string;
};

export function TodoPage({ locale, path }: TodoPageProps) {
  return (
    <main>
      <p>TODO</p>
      <p>
        {locale} · {path}
      </p>
    </main>
  );
}
