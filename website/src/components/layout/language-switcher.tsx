"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import type { SupportedLocale } from "@/content/locales";
import styles from "./layout.module.css";

type LanguageSwitcherProps = { locale: SupportedLocale; pathname?: string; label: string; languageNames: { en: string; "zh-CN": string } };

function GlobeIcon() {
  return <svg className={styles.globeIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3 12h18M12 3c2.25 2.47 3.38 5.47 3.38 9S14.25 18.53 12 21M12 3c-2.25 2.47-3.38 5.47-3.38 9S9.75 18.53 12 21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>;
}

function ChevronIcon({ open }: { open: boolean }) {
  return <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={open ? "m6 15 6-6 6 6" : "m6 9 6 6 6-6"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}

export function LanguageSwitcher({ locale, pathname = locale === "en" ? "/" : "/zh-CN", label, languageNames }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathWithoutLocale = pathname.replace(/^\/zh-CN(?=\/|$)/, "") || "/";
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateViewport = () => { setMobile(mediaQuery.matches); if (!mediaQuery.matches) setOpen(false); };
    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    const handlePointerDown = (event: PointerEvent) => { if (!rootRef.current?.contains(event.target as Node)) setOpen(false); };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", handlePointerDown); document.addEventListener("keydown", handleKeyDown);
    return () => { mediaQuery.removeEventListener("change", updateViewport); document.removeEventListener("pointerdown", handlePointerDown); document.removeEventListener("keydown", handleKeyDown); };
  }, [open]);
  const targetPath = (targetLocale: SupportedLocale) => targetLocale === "en"
    ? pathWithoutLocale
    : `/zh-CN${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!mobile && event.detail > 0) return;
    setOpen((value) => !value);
  };
  return <div className={styles.languageRoot} ref={rootRef} data-open={open || undefined} onMouseEnter={() => { if (!mobile) setOpen(true); }} onMouseLeave={() => { if (!mobile) setOpen(false); }}>
    <button className={styles.languageTrigger} ref={triggerRef} type="button" aria-expanded={open} aria-haspopup="menu" aria-label={label} onClick={handleClick} onKeyDown={(event) => { if (!mobile && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); setOpen(true); } }} onMouseEnter={() => { if (!mobile) setOpen(true); }}><GlobeIcon /><span>{languageNames[locale]}</span><ChevronIcon open={open} /></button>
    <div className={styles.languageMenu} role="menu" aria-label={label}>{(["en", "zh-CN"] as const).map((targetLocale) => <Link key={targetLocale} className={styles.languageOption} href={targetPath(targetLocale)} hrefLang={targetLocale} role="menuitem" aria-current={locale === targetLocale ? "true" : undefined} onClick={() => setOpen(false)}>{languageNames[targetLocale]}</Link>)}</div>
  </div>;
}
