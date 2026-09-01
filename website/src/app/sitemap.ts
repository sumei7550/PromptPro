import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
const routes = ["", "/features"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = (prefix: string) => routes.map((route) => ({
      url: route ? `${siteUrl}${prefix}${route}` : `${siteUrl}${prefix || "/"}`,
      lastModified: new Date("2026-08-21"),
    }));
  return [...localizedRoutes(""), ...localizedRoutes("/zh-CN")];
}
