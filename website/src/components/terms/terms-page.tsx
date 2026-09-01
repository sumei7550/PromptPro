import type { SupportedLocale } from "@/content/locales";
import type { TermsContent } from "@/content/terms";
import { Container } from "@/components/ui/container";
import styles from "./terms-page.module.css";

type TermsPageProps = { locale: SupportedLocale; content: TermsContent };

export function TermsPage({ locale, content }: TermsPageProps) {
  return (
    <main id="main-content">
      <section className={styles.hero}>
        <Container className={styles.heroInner}>
          <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className={styles.heroDescription}>{content.hero.description}</p>
          <p className={styles.updated}>{content.hero.updated}</p>
        </Container>
      </section>
      <Container className={styles.document}>
        <article className={styles.article}>
          {content.sections.map((section) => (
            <section className={styles.section} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
          <section className={styles.section}>
            <h2>{content.contact.title}</h2>
            <p>{content.contact.body}</p>
            <a className={styles.contactLink} href={`mailto:${content.contact.email}`}>{content.contact.emailLabel}</a>
          </section>
          <p className={styles.note}>{locale === "en" ? "These Terms are intended as a plain-language overview of PromptPro's use boundaries." : "本条款旨在以清晰易懂的方式说明 PromptPro 的使用边界。"}</p>
        </article>
      </Container>
    </main>
  );
}
