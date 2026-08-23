import type { MetadataRoute } from "next";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const routes = ["", "/features", "/privacy", "/platforms", "/templates"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = (prefix: string) => routes.map((route) => ({
      url: route ? `${siteUrl}${prefix}${route}` : `${siteUrl}${prefix || "/"}`,
      lastModified: new Date("2026-08-21"),
    }));
  return [...localizedRoutes(""), ...localizedRoutes("/zh-CN")];
}
