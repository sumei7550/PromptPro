import Link from "next/link";

import type { FeaturesContent, SupportedLocale } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProductScreenshot } from "@/components/ui/product-screenshot";
import { Section } from "@/components/ui/section";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import { ChromeIcon } from "@/components/ui/chrome-icon";
import styles from "./features-page.module.css";

type FeaturesPageProps = { locale: SupportedLocale; content: FeaturesContent };

export function FeaturesPage({ locale, content }: FeaturesPageProps) {
  const base = locale === "en" ? "" : "/zh-CN";
  const storeCta = (label: string, size: "large" | "medium" = "large", className?: string) => <Button href={chromeWebStoreUrl} size={size} className={className}><ChromeIcon />{label}</Button>;

  return <main id="main-content">
    <section className={styles.hero}>
      <Container className={styles.heroInner}>
        <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
        <h1>{content.hero.title}</h1>
        <p className={styles.heroDescription}>{content.hero.description}</p>
        <div className={styles.heroActions}>{storeCta(content.hero.primaryCta)}</div>
        <p className={styles.heroNote}>{content.hero.note}</p>
      </Container>
    </section>

    <div className={styles.showcases}>
      {content.showcases.map((showcase, index) => <Showcase key={showcase.title} showcase={showcase} reverse={index % 2 === 1} />)}
    </div>

    <Section className={styles.workflowSection}>
      <div className={styles.sectionIntro}><p className={styles.eyebrow}>{content.workflow.eyebrow}</p><h2>{content.workflow.title}</h2><p>{content.workflow.description}</p></div>
      <ol className={styles.workflowGrid}>{content.workflow.steps.map((step, index) => <li key={step.title}><span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
    </Section>

    <section className={styles.finalCta}><Container className={styles.finalCtaInner}><div><p className={styles.eyebrow}>Get started</p><h2>{content.finalCta.title}</h2><p>{content.finalCta.description}</p></div>{storeCta(content.finalCta.label, "large", styles.finalCtaButton)}</Container></section>
    <p className={styles.relatedLinks}><Link href={`${base}/templates`}>{locale === "en" ? "Explore templates" : "查看模板"}</Link><span aria-hidden="true"> · </span><Link href={`${base}/privacy`}>{locale === "en" ? "Read privacy details" : "阅读隐私说明"}</Link></p>
  </main>;
}

function Showcase({ showcase, reverse }: { showcase: FeaturesContent["showcases"][number]; reverse: boolean }) {
  return <Section className={`${styles.showcase} ${reverse ? styles.reverse : ""}`}><div className={styles.showcaseGrid}>
    <div className={styles.showcaseCopy}><p className={styles.eyebrow}>{showcase.eyebrow}</p><h2>{showcase.title}</h2><p className={styles.showcaseDescription}>{showcase.description}</p><ul>{showcase.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
    <ProductScreenshot src={showcase.image} alt={showcase.imageAlt} aspectRatio={showcase.aspectRatio} variant="default" />
  </div></Section>;
}
