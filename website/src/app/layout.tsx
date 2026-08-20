import type { Metadata } from "next";
import "@/styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PromptPro",
    template: "%s | PromptPro",
  },
  description: "TODO",
  openGraph: {
    type: "website",
    siteName: "PromptPro",
    title: "PromptPro",
    description: "TODO",
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
