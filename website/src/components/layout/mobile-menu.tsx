"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { ReactNode } from "react";
import styles from "./layout.module.css";

type MobileMenuProps = { openLabel: string; closeLabel: string; children: ReactNode };

export function MobileMenu({ openLabel, closeLabel, children }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const onClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) menuButtonRef.current?.focus();
      wasOpenRef.current = false;
      return;
    }
    wasOpenRef.current = true;

    const firstFocusable = panelRef.current?.querySelector<HTMLElement>("a, button, [tabindex]:not([tabindex='-1'])");
    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      <button className={styles.menuButton} ref={menuButtonRef} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? closeLabel : openLabel} onClick={() => setOpen((value) => !value)}>
        <svg className={styles.menuIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d={open ? "M5 5 19 19M19 5 5 19" : "M4 6H20M4 12H20M4 18H20"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <button className={styles.mobileMenuBackdrop} type="button" aria-label={closeLabel} onClick={onClose} />}
      {open && <aside className={styles.mobileMenuPanel} ref={panelRef} aria-label="Mobile navigation">{children}</aside>}
    </>
  );
}
