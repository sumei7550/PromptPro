import "@/styles/globals.css";

import { WebsiteAnalytics } from "@/components/analytics/website-analytics";
import { websiteMetadata } from "@/lib/website-metadata";

export const metadata = websiteMetadata;

export default function ChineseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><WebsiteAnalytics />{children}</body></html>;
}
