import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "@/lib/seo";
const routes = ["", "/features", "/privacy", "/platforms", "/templates", "/faq", "/support", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = (prefix: string) => routes.map((route) => ({
      url: absoluteSiteUrl(`${prefix}${route}` || "/"),
    }));
  return [...localizedRoutes(""), ...localizedRoutes("/zh-CN")];
}
