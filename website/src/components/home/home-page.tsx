import Link from "next/link";

import type { HomeContent, SupportedLocale } from "@/content/locales";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ProductScreenshot } from "@/components/ui/product-screenshot";
import { Section } from "@/components/ui/section";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import { ChromeIcon } from "@/components/ui/chrome-icon";
import styles from "./home-page.module.css";

type HomePageProps = { locale: SupportedLocale; content: HomeContent };

export function HomePage({ locale, content }: HomePageProps) {
  const base = locale === "en" ? "" : "/zh-CN";
  const storeCta = (label: string, size: "large" | "medium" = "large", className?: string) => <Button href={chromeWebStoreUrl} size={size} className={className}><ChromeIcon />{label}</Button>;

  return (
    <main id="main-content">
      <section className={styles.hero}>
        <Container className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>PromptPro</p>
            <h1>{content.hero.title}</h1>
            <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
            <div className={styles.ctaRow}>
              {storeCta(content.hero.primaryCta)}
              <Button href={`${base}/features`} variant="secondary" size="large">{content.hero.secondaryCta}</Button>
            </div>
            <p className={styles.heroNote}>{content.hero.note}</p>
          </div>
          <ProductScreenshot
            src="/images/product/raw/promptpro-template-library.png"
            alt={content.productPreview.libraryAlt}
            aspectRatio="625 / 901"
            variant="hero"
          />
        </Container>
      </section>

      <Section className={styles.previewSection}>
        <SectionIntro eyebrow={content.productPreview.eyebrow} title={content.productPreview.title} description={content.productPreview.description} />
        <div className={styles.previewGrid}>
          <ProductScreenshot src="/images/product/raw/promptpro-template-library.png" alt={content.productPreview.libraryAlt} aspectRatio="625 / 901" />
          <ProductScreenshot src="/images/product/raw/promptpro-ai-chat-integration.png" alt={content.productPreview.integrationAlt} aspectRatio="1850 / 1146" />
        </div>
      </Section>

      <Section className={styles.sectionTint}>
        <SectionIntro eyebrow={content.features.eyebrow} title={content.features.title} description={content.features.description} />
        <div className={styles.featureGrid}>
          {content.features.items.map((item) => <Card key={item.title} variant="feature"><span className={styles.marker} aria-hidden="true">{item.marker}</span><h3>{item.title}</h3><p>{item.description}</p></Card>)}
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow={content.privacy.eyebrow} title={content.privacy.title} description={content.privacy.description} />
        <div className={styles.privacyGrid}>
          {content.privacy.items.map((item) => <Card key={item.title} variant="privacy"><h3>{item.title}</h3><p>{item.description}</p></Card>)}
        </div>
        <Link className={styles.inlineLink} href={`${base}/privacy`}>{content.privacy.linkLabel} <span aria-hidden="true">→</span></Link>
      </Section>

      <Section className={styles.sectionTint}>
        <SectionIntro eyebrow={content.platforms.eyebrow} title={content.platforms.title} description={content.platforms.description} />
        <div className={styles.platformGroups}>
          {content.platforms.groups.map((group) => <PlatformGroup key={group.title} group={group} />)}
        </div>
        <p className={styles.sectionNote}>{content.platforms.note}</p>
      </Section>

      <Section>
        <SectionIntro eyebrow={content.templates.eyebrow} title={content.templates.title} description={content.templates.description} />
        <div className={styles.templateGrid}>
          {content.templates.categories.map((category) => <Card key={category.name} variant="template"><span className={styles.templateMark} aria-hidden="true">✦</span><h3>{category.name}</h3><p>{category.description}</p></Card>)}
        </div>
        <Link className={styles.inlineLink} href={`${base}/templates`}>{content.templates.linkLabel} <span aria-hidden="true">→</span></Link>
      </Section>

      <section className={styles.finalCta}>
        <Container className={styles.finalCtaInner}>
          <div><p className={styles.kicker}>{locale === "en" ? "Get started" : "开始使用"}</p><h2>{content.finalCta.title}</h2><p>{content.finalCta.description}</p></div>
          {storeCta(content.finalCta.label, "large", styles.finalCtaButton)}
        </Container>
      </section>
    </main>
  );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className={styles.sectionIntro}><p className={styles.kicker}>{eyebrow}</p><h2>{title}</h2><p>{description}</p></div>;
}

function PlatformGroup({ group }: { group: HomeContent["platforms"]["groups"][number] }) {
  return <div className={styles.platformGroup}><div className={styles.platformGroupHeader}><div><h3>{group.title}</h3><p>{group.description}</p></div><Badge status={group.status}>{group.badge}</Badge></div><div className={styles.platformGrid}>{group.platforms.map((platform) => <Card key={platform.name} variant="platform"><h3>{platform.name}</h3><p>{platform.description}</p></Card>)}</div></div>;
}
