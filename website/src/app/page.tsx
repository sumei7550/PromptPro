import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HomePage as HomeContentPage } from "@/components/home/home-page";
import { homeContent } from "@/content/en/home";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("/");

export default function HomePage() {
  return <><SiteHeader locale="en" pathname="/" /><HomeContentPage locale="en" content={homeContent} /><SiteFooter locale="en" /></>;
}
