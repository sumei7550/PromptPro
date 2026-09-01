import Link from "next/link";

import type { SupportedLocale, TemplatesContent } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChromeIcon } from "@/components/ui/chrome-icon";
import { Container } from "@/components/ui/container";
import { ProductScreenshot } from "@/components/ui/product-screenshot";
import { Section } from "@/components/ui/section";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import styles from "./templates-page.module.css";

export function TemplatesPage({ locale, content }: { locale: SupportedLocale; content: TemplatesContent }) {
  const base = locale === "en" ? "" : "/zh-CN";
  const storeCta = (label: string, className?: string) => <Button href={chromeWebStoreUrl} size="large" className={className}><ChromeIcon />{label}</Button>;

  return <main id="main-content">
    <section className={styles.hero}><Container className={styles.heroInner}><p className={styles.eyebrow}>{content.hero.eyebrow}</p><h1>{content.hero.title}</h1><p className={styles.heroDescription}>{content.hero.description}</p><div className={styles.heroActions}>{storeCta(content.hero.primaryCta)}</div><p className={styles.heroNote}>{content.hero.note}</p></Container></section>

    <Section className={styles.categoriesSection}><div className={styles.sectionIntro}><p className={styles.eyebrow}>{locale === "en" ? "Template categories" : "模板分类"}</p><h2>{locale === "en" ? "Start with the kind of work you need to do." : "从当前要完成的工作类型开始。"}</h2><p>{locale === "en" ? "Use task-focused categories to find a reusable starting point without promising a ranking or a one-size-fits-all answer." : "按任务分类查找可复用的起点，不依赖排名，也不把一个模板说成适合所有场景。"}</p></div><div className={styles.categoryGrid}>{content.categories.map((category, index) => <Card key={category.title} variant="template"><span className={styles.categoryNumber} aria-hidden="true">0{index + 1}</span><h3>{category.title}</h3><p>{category.description}</p></Card>)}</div></Section>

    <div className={styles.showcases}>{content.showcases.map((showcase, index) => <Showcase key={showcase.title} showcase={showcase} reverse={index % 2 === 1} />)}</div>

    <Section className={styles.workflowSection}><div className={styles.sectionIntro}><p className={styles.eyebrow}>{content.workflow.eyebrow}</p><h2>{content.workflow.title}</h2><p>{content.workflow.description}</p></div><ol className={styles.workflowGrid}>{content.workflow.steps.map((step, index) => <li key={step.title}><span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></Section>

    <section className={styles.finalCta}><Container className={styles.finalCtaInner}><div><p className={styles.eyebrow}>{locale === "en" ? "Get started" : "开始使用"}</p><h2>{content.finalCta.title}</h2><p>{content.finalCta.description}</p></div>{storeCta(content.finalCta.label, styles.finalCtaButton)}</Container></section>
    <p className={styles.relatedLinks}><Link href={`${base}/features`}>{locale === "en" ? "Explore features" : "查看功能"}</Link><span aria-hidden="true"> · </span><Link href={`${base}/privacy`}>{locale === "en" ? "Read privacy details" : "阅读隐私说明"}</Link></p>
  </main>;
}

function Showcase({ showcase, reverse }: { showcase: TemplatesContent["showcases"][number]; reverse: boolean }) {
  return <Section className={`${styles.showcase} ${reverse ? styles.reverse : ""}`}><div className={styles.showcaseGrid}><div className={styles.showcaseCopy}><p className={styles.eyebrow}>{showcase.eyebrow}</p><h2>{showcase.title}</h2><p className={styles.showcaseDescription}>{showcase.description}</p><ul>{showcase.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div><ProductScreenshot src={showcase.image} alt={showcase.imageAlt} aspectRatio={showcase.aspectRatio} variant="default" /></div></Section>;
}
