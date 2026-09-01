export type PrivacySection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type PrivacyContent = {
  hero: { eyebrow: string; title: string; description: string; updated: string };
  sections: PrivacySection[];
  externalLinks: { label: string; href: string }[];
  contact: { title: string; body: string; linkLabel: string };
};
