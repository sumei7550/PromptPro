export const supportedLocales = ["en", "zh-CN"] as const;

export const plannedLocales = ["ja", "ko", "de", "fr", "es"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];
export type PlannedLocale = (typeof plannedLocales)[number];
export type Locale = SupportedLocale | PlannedLocale;

export type HomeFeature = {
  title: string;
  description: string;
  marker: string;
};

export type HomePrivacyItem = {
  title: string;
  description: string;
};

export type HomePlatform = {
  name: string;
  description: string;
};

export type HomePlatformGroup = {
  title: string;
  badge: string;
  description: string;
  status: "historical" | "configured-unverified";
  platforms: HomePlatform[];
};

export type HomeTemplateCategory = {
  name: string;
  description: string;
};

export type HomeContent = {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  productPreview: {
    eyebrow: string;
    title: string;
    description: string;
    libraryAlt: string;
    integrationAlt: string;
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: HomeFeature[];
  };
  privacy: {
    eyebrow: string;
    title: string;
    description: string;
    items: HomePrivacyItem[];
    linkLabel: string;
  };
  platforms: {
    eyebrow: string;
    title: string;
    description: string;
    groups: HomePlatformGroup[];
    note: string;
  };
  templates: {
    eyebrow: string;
    title: string;
    description: string;
    categories: HomeTemplateCategory[];
    linkLabel: string;
  };
  finalCta: {
    title: string;
    description: string;
    label: string;
  };
};

export type FeatureShowcase = {
  eyebrow: string;
  title: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  aspectRatio: string;
};

export type FeaturesContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    note: string;
  };
  showcases: FeatureShowcase[];
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  finalCta: { title: string; description: string; label: string };
};

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
