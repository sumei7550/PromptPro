import type { MetadataRoute } from "next";
import { supportedLocales } from "@/content/locales";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const routes = ["", "/features", "/privacy", "/platforms", "/templates"];

export default function sitemap(): MetadataRoute.Sitemap {
  return supportedLocales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date("2026-08-21"),
    })),
  );
}
