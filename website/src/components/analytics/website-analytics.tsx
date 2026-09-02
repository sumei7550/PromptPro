"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import mixpanel from "mixpanel-browser";

type Locale = "en" | "zh-CN";
type Location = "header" | "hero" | "final_cta" | "footer" | "content";
type EventProperties = Record<string, string>;

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
let initialized = false;

function getLocale(pathname: string): Locale {
  return pathname === "/zh-CN" || pathname.startsWith("/zh-CN/") ? "zh-CN" : "en";
}

function getLocation(element: Element, pathname: string): Location {
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  if (element.closest('[class*="finalCta"]')) return "final_cta";
  if (pathname === "/" || pathname === "/zh-CN") return "hero";
  return "content";
}

function track(event: string, properties: EventProperties) {
  if (!initialized) return;
  mixpanel.track(event, properties);
}

function getPagePath(): string {
  return `${window.location.pathname}` || "/";
}

function handleClick(event: MouseEvent) {
  const target = event.target as Element | null;
  const anchor = target?.closest("a");
  if (!anchor) return;

  const pathname = getPagePath();
  const locale = getLocale(pathname);
  const href = anchor.getAttribute("href") ?? "";
  const location = getLocation(anchor, pathname);

  if (href.startsWith("https://chromewebstore.google.com/")) {
    track("web_store_click", { location, page: pathname, locale });
    return;
  }

  if (anchor.hasAttribute("hrefLang")) {
    const to = anchor.getAttribute("hrefLang");
    if (to === "en" || to === "zh-CN") {
      track("web_language_switch", { from: locale, to, page: pathname, locale });
    }
    return;
  }

  const externalTarget = href.startsWith("mailto:")
    ? "email"
    : href.includes("github.com")
      ? "github"
      : href.includes("ko-fi.com")
        ? "kofi"
        : null;
  if (externalTarget) {
    track("web_external_click", { target: externalTarget, page: pathname, locale });
    return;
  }

  const destination = href.replace(/^\/zh-CN(?=\/|$)/, "") || "/";
  const ctaName = destination === "/features"
    ? "features"
    : destination === "/templates"
      ? "templates"
      : destination === "/faq"
        ? "faq"
        : destination === "/support"
          ? "support"
          : null;
  if (ctaName) {
    track("web_cta_click", { location, cta_name: ctaName, page: pathname, locale });
  }
}

function handleFaqToggle(event: ToggleEvent) {
  const details = event.target as HTMLDetailsElement;
  if (!details.open) return;
  const faqId = details.dataset.analyticsFaqId;
  if (!faqId) return;
  const pathname = getPagePath();
  const locale = getLocale(pathname);
  track("web_faq_expand", { faq_id: faqId, page: pathname, locale });
}

export function WebsiteAnalytics() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    if (!token || initialized) return;
    mixpanel.init(token, {
      autocapture: false,
      disable_persistence: true,
      ip: true,
      track_pageview: false,
    });
    initialized = true;
  }, []);

  useEffect(() => {
    if (!initialized) return;
    const locale = getLocale(pathname);
    track("web_page_view", { page: pathname, locale });
  }, [pathname]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("toggle", handleFaqToggle, true);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("toggle", handleFaqToggle, true);
    };
  }, []);

  return null;
}
