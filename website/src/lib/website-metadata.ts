import type { Metadata } from "next";

import { siteUrl } from "@/lib/seo";

export const websiteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PromptPro — Local Prompt Optimizer & Bilingual Templates",
    template: "%s",
  },
  verification: {
    google: "-1t7qtzy1DcFD03YxrjvuYazuZgi0DpPgzqf24Fwlro",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};
