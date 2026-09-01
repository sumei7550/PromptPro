export type TermsSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type TermsContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    updated: string;
  };
  sections: TermsSection[];
  contact: {
    title: string;
    body: string;
    emailLabel: string;
    email: string;
  };
};
