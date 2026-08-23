import type { Metadata } from "next";
import "@/styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PromptPro",
    template: "%s | PromptPro",
  },
  description: "A local-first prompt optimizer and template library for AI websites.",
  openGraph: {
    type: "website",
    siteName: "PromptPro",
    title: "PromptPro",
    description: "A local-first prompt optimizer and template library for AI websites.",
    url: siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
