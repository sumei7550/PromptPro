import type { SupportedLocale } from "@/content/locales";
import type { PrivacyContent } from "@/content/privacy";
import { Container } from "@/components/ui/container";
import styles from "./privacy-page.module.css";

type PrivacyPageProps = { locale: SupportedLocale; content: PrivacyContent };

export function PrivacyPage({ locale, content }: PrivacyPageProps) {
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
            <a className={styles.contactLink} href="https://github.com/sumei7550/PromptPro" target="_blank" rel="noreferrer">
              {content.contact.linkLabel} <span aria-hidden="true">→</span>
            </a>
          </section>

          <aside className={styles.links} aria-label={locale === "en" ? "External links" : "外部链接"}>
            <p>{content.externalLinks.map((link, index) => <span key={link.href}>{index > 0 && <span aria-hidden="true"> · </span>}<a href={link.href} target="_blank" rel="noreferrer">{link.label}</a></span>)}</p>
          </aside>
        </article>
      </Container>
    </main>
  );
}
