import type { SupportContent, SupportedLocale } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChromeIcon } from "@/components/ui/chrome-icon";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import styles from "./support-page.module.css";

export function SupportPage({ locale, content }: { locale: SupportedLocale; content: SupportContent }) {
  const faqHref = locale === "en" ? "/faq" : "/zh-CN/faq";
  return <main id="main-content">
    <section className={styles.hero}><Container className={styles.heroInner}><p className={styles.eyebrow}>{content.hero.eyebrow}</p><h1>{content.hero.title}</h1><p className={styles.heroDescription}>{content.hero.description}</p></Container></section>
    <Section className={styles.optionsSection}><div className={styles.optionsGrid}>{content.supportOptions.map((option) => <Card key={option.title} variant="privacy" className={styles.option}><h2>{option.title}</h2><p>{option.description}</p>{option.title === "Contact" || option.title === "联系我们" ? <a className={styles.email} href={option.href}>sumei7550@outlook.com</a> : null}<a className={styles.optionLink} href={option.href} target={option.external ? "_blank" : undefined} rel={option.external ? "noreferrer" : undefined}>{option.label}<span aria-hidden="true"> →</span></a></Card>)}</div></Section>
    <Section className={styles.troubleshootingSection}><div className={styles.sectionIntro}><p className={styles.eyebrow}>{locale === "en" ? "Troubleshooting" : "问题排查"}</p><h2>{content.troubleshootingTitle}</h2></div><div className={styles.troubleshootingGrid}>{content.troubleshooting.map((item) => <div key={item.title} className={styles.troubleshootingItem}><h3>{item.title}</h3><p>{item.description}</p></div>)}</div></Section>
    <Section className={styles.compatibilitySection}><Card variant="platform" className={styles.compatibility}><h2>{content.compatibilityNote.title}</h2><p>{content.compatibilityNote.description}</p></Card></Section>
    <section className={styles.finalCta}><Container className={styles.finalCtaInner}><div><p className={styles.eyebrow}>{locale === "en" ? "Get started" : "开始使用"}</p><h2>{content.finalCta.title}</h2><p>{content.finalCta.description}</p></div><div className={styles.ctaActions}><Button href={chromeWebStoreUrl} size="large" className={styles.primaryCta}><ChromeIcon />{content.finalCta.primaryLabel}</Button><Button href={faqHref} variant="secondary" size="large" className={styles.secondaryCta}>{content.finalCta.secondaryLabel}</Button></div></Container></section>
  </main>;
}
