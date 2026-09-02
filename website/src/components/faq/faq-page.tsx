import type { FaqContent, SupportedLocale } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChromeIcon } from "@/components/ui/chrome-icon";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import styles from "./faq-page.module.css";

export function FaqPage({ locale, content }: { locale: SupportedLocale; content: FaqContent }) {
  return <main id="main-content">
    <section className={styles.hero}><Container className={styles.heroInner}><p className={styles.eyebrow}>{content.hero.eyebrow}</p><h1>{content.hero.title}</h1><p className={styles.heroDescription}>{content.hero.description}</p></Container></section>
    <Section className={styles.faqSection}><div className={styles.categories}>{content.categories.map((category, categoryIndex) => <Card key={category.title} variant="privacy" className={styles.category}><h2>{category.title}</h2><div className={styles.questions}>{category.questions.map((item, itemIndex) => <details key={item.question} className={styles.question} data-analytics-faq-id={`faq_${categoryIndex + 1}_${itemIndex + 1}`}><summary>{item.question}<span className={styles.chevron} aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></Card>)}</div></Section>
    <section className={styles.finalCta}><Container className={styles.finalCtaInner}><div><p className={styles.eyebrow}>{locale === "en" ? "Get started" : "开始使用"}</p><h2>{content.finalCta.title}</h2><p>{content.finalCta.description}</p></div><Button href={chromeWebStoreUrl} size="large" className={styles.finalCtaButton}><ChromeIcon />{content.finalCta.label}</Button></Container></section>
  </main>;
}
