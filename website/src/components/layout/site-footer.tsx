import Link from "next/link";
import type { ReactNode } from "react";
import type { SupportedLocale } from "@/content/locales";
import { Container } from "@/components/ui/container";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import styles from "./layout.module.css";

type SiteFooterProps = { locale: SupportedLocale };
export function SiteFooter({ locale }: SiteFooterProps) {
  const en = locale === "en"; const base = en ? "" : "/zh-CN";
  const c = en ? { description: "Local prompt optimization and reusable templates for everyday AI work.", install: "Chrome Extension", product: "Product", resources: "Resources", company: "Company", legal: "Legal", privacy: "Privacy Policy", terms: "Terms of Use", unavailable: "Page not available yet", copyright: "© 2026 PromptPro. All rights reserved.", labels: ["Features", "Platforms", "Templates", "Pricing", "FAQ", "Support", "Changelog", "About"] } : { description: "为日常 AI 工作提供本地提示词优化和可复用模板。", install: "Chrome 扩展", product: "产品", resources: "资源", company: "公司", legal: "法律", privacy: "隐私政策", terms: "使用条款", unavailable: "页面尚未开放", copyright: "© 2026 PromptPro。保留所有权利。", labels: ["功能", "平台", "模板", "定价", "常见问题", "支持", "更新日志", "关于我们"] };
  const [features, platforms, templates, pricing, faq, support, changelog, about] = c.labels;
  const unavailable = (label: string) => <span className={styles.unavailableLink} aria-disabled="true" title={c.unavailable}>{label}</span>;
  return <footer className={styles.footer}><Container><div className={styles.footerGrid}><div className={styles.footerBrand}><Link className={styles.logo} href={base || "/"}><img src="/favicon.svg" alt="" width="32" height="32" /><span>PromptPro</span></Link><p>{c.description}</p><a className={styles.footerInstallLink} href={chromeWebStoreUrl} target="_blank" rel="noreferrer">{c.install}<span aria-hidden="true"> →</span></a><div className={styles.footerLegal}><Link href={`${base}/privacy`}>{c.privacy}</Link><span aria-hidden="true"> · </span><Link href={`${base}/terms`}>{c.terms}</Link></div></div><FooterGroup title={c.product} links={[[features, `${base}/features`], [platforms, `${base}/platforms`], [templates, `${base}/templates`]]} unavailableLinks={[[pricing, `${base}/pricing`]]} unavailable={unavailable} /><FooterGroup title={c.resources} links={[[faq, `${base}/faq`], [support, `${base}/support`]]} unavailableLinks={[[changelog, `${base}/changelog`]]} unavailable={unavailable} /><FooterGroup title={c.company} links={[]} unavailableLinks={[[about, `${base}/about`]]} unavailable={unavailable} /></div><p className={styles.footerCopyright}>{c.copyright}</p></Container></footer>;
}
function FooterGroup({ title, links, unavailableLinks, unavailable }: { title: string; links: readonly (readonly [string, string])[]; unavailableLinks: readonly (readonly [string, string])[]; unavailable: (label: string) => ReactNode }) { return <div><h2 className={styles.footerHeading}>{title}</h2><ul className={styles.footerLinks}>{links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}{unavailableLinks.map(([label, href]) => <li key={href}>{unavailable(label)}</li>)}</ul></div>; }
