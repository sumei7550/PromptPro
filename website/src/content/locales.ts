export const supportedLocales = ["en", "zh-CN"] as const;

export const plannedLocales = ["ja", "ko", "de", "fr", "es"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];
export type PlannedLocale = (typeof plannedLocales)[number];
export type Locale = SupportedLocale | PlannedLocale;

export const localeConfig: Record<Locale, { label: string; openGraphLocale: string }> = {
  en: { label: "English", openGraphLocale: "en_US" },
  "zh-CN": { label: "简体中文", openGraphLocale: "zh_CN" },
  ja: { label: "日本語", openGraphLocale: "ja_JP" },
  ko: { label: "한국어", openGraphLocale: "ko_KR" },
  de: { label: "Deutsch", openGraphLocale: "de_DE" },
  fr: { label: "Français", openGraphLocale: "fr_FR" },
  es: { label: "Español", openGraphLocale: "es_ES" },
};

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale);
}

export function getOpenGraphLocale(locale: SupportedLocale) {
  return localeConfig[locale].openGraphLocale;
}
