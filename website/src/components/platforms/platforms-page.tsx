import Link from "next/link";
import type { PlatformsContent, SupportedLocale } from "@/content/locales";
import { PlatformGroup } from "@/components/platforms/platform-group";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChromeIcon } from "@/components/ui/chrome-icon";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import styles from "./platforms-page.module.css";

export function PlatformsPage({ locale, content }: { locale: SupportedLocale; content: PlatformsContent }) {
  const base = locale === "en" ? "" : "/zh-CN";
  const cta = <Button href={chromeWebStoreUrl} size="large" className={styles.finalCtaButton}><ChromeIcon />{content.finalCta.label}</Button>;
  return <main id="main-content">
    <section className={styles.hero}><Container className={styles.heroInner}><p className={styles.eyebrow}>{content.hero.eyebrow}</p><h1>{content.hero.title}</h1><p className={styles.heroDescription}>{content.hero.description}</p></Container></section>
    <section className={styles.overview}><Container><p>{content.overview}</p></Container></section>
    <Section className={styles.groups}><div>{content.groups.map((group) => <PlatformGroup key={group.title} group={group} gridClassName={styles.grid} cardClassName={styles.card} />)}</div></Section>
    <Section><div className={styles.meaningIntro}><p className={styles.eyebrow}>{content.meaning.eyebrow}</p><h2>{content.meaning.title}</h2><p>{content.meaning.description}</p></div><div className={styles.meaningGrid}>{content.meaning.items.map((item) => <Card key={item.title} variant="platform"><h3>{item.title}</h3><p>{item.description}</p></Card>)}</div></Section>
    <section className={styles.notice}><Container><p>{content.notice}</p></Container></section>
    <section className={styles.finalCta}><Container className={styles.finalCtaInner}><div><p className={styles.eyebrow}>{locale === "en" ? "Get started" : "开始使用"}</p><h2>{content.finalCta.title}</h2><p>{content.finalCta.description}</p></div>{cta}</Container></section>
    <p className={styles.relatedLinks}><Link href={`${base}/features`}>{locale === "en" ? "Explore features" : "查看功能"}</Link><span aria-hidden="true"> · </span><Link href={`${base}/templates`}>{locale === "en" ? "Explore templates" : "查看模板"}</Link><span aria-hidden="true"> · </span><Link href={`${base}/privacy`}>{locale === "en" ? "Read privacy details" : "阅读隐私说明"}</Link></p>
  </main>;
}
