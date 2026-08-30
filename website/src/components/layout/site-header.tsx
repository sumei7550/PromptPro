import Link from "next/link";
import type { SupportedLocale } from "@/content/locales";
import { Button } from "@/components/ui/button";
import { chromeWebStoreUrl } from "@/lib/chrome-web-store";
import { LanguageSwitcher } from "./language-switcher";
import { MobileMenu } from "./mobile-menu";
import { ChromeIcon } from "../ui/chrome-icon";
import styles from "./layout.module.css";

type SiteHeaderProps = { locale: SupportedLocale; pathname?: string };
export function SiteHeader({ locale, pathname = locale === "en" ? "/" : "/zh-CN" }: SiteHeaderProps) {
  const en = locale === "en";
  const base = en ? "" : "/zh-CN";
  const c = en ? { features: "Features", platforms: "Platforms", templates: "Templates", pricing: "Pricing", language: "Language", add: "Add to Chrome", unavailable: "Pricing page is not available yet", open: "Open menu", close: "Close menu" } : { features: "功能", platforms: "平台", templates: "模板", pricing: "定价", language: "语言", add: "添加到 Chrome", unavailable: "定价页面尚未开放", open: "打开菜单", close: "关闭菜单" };
  const links = [[c.features, `${base}/features`, true], [c.platforms, `${base}/platforms`, true], [c.templates, `${base}/templates`, true], [c.pricing, `${base}/pricing`, false]] as const;
  const navigation = (className: string) => <nav className={className} aria-label="Primary navigation">{links.map(([label, href, available]) => available ? <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link> : <span key={href} className={styles.unavailableLink} aria-disabled="true" title={c.unavailable}>{label}</span>)}</nav>;
  const language = <LanguageSwitcher locale={locale} pathname={pathname} label={c.language} languageNames={{ en: "English", "zh-CN": "简体中文" }} />;
  const installButton = <Button variant="primary" size="medium" href={chromeWebStoreUrl} aria-label={c.add}><ChromeIcon />{c.add}</Button>;
  const desktopActions = <div className={styles.headerActions}>{language}{installButton}</div>;
  const mobileTopActions = <div className={styles.mobileTopActions}>{language}</div>;
  return <header className={styles.header}><div className={styles.headerInner}><Link className={styles.logo} href={base || "/"} aria-label={`PromptPro ${en ? "home" : "首页"}`}><img src="/favicon.svg" alt="" width="28" height="28" /><span>PromptPro</span></Link><div className={styles.desktopNavigation}>{navigation(styles.navigation)}</div><div className={styles.desktopActions}>{desktopActions}</div>{mobileTopActions}<MobileMenu openLabel={c.open} closeLabel={c.close}><div id="mobile-navigation" className={styles.mobileNavigation}>{navigation(styles.navigation)}<div className={styles.mobileInstall}>{installButton}</div></div></MobileMenu></div></header>;
}
