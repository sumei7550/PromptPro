# PromptPro Post-deploy QA

QA date: 2026-09-02 (Asia/Shanghai)

## Deployment

- Commit: `edfcf497a3cb5f6e98f837129f5b3b2c215e4ccc`
- Production URL: https://prompt-pro-psi.vercel.app
- Deployment status: Ready
- Deployment ID: `EDatpXPnLhZegGC5VudRiTqmEQxB`
- Deployment URL: https://prompt-pro-7rre3r7l6-sumei7550s-projects.vercel.app
- Production alias: `prompt-pro-psi.vercel.app`
- Source: `master`, repository root `website/`
- Vercel dashboard showed the deployment was created approximately 9 minutes before the final verification.
- `NEXT_PUBLIC_SITE_URL`: present in Vercel Project Environment Variables and enabled for Production; the rendered production metadata uses `https://prompt-pro-psi.vercel.app` without a trailing slash.

## Route QA

All 16 production routes returned HTTP 200, rendered non-empty HTML, and contained exactly one H1.

| Route | HTTP | H1 | Render | Result |
|---|---:|---:|---|---|
| `/` | 200 | 1 | Pass | Pass |
| `/features` | 200 | 1 | Pass | Pass |
| `/platforms` | 200 | 1 | Pass | Pass |
| `/templates` | 200 | 1 | Pass | Pass |
| `/privacy` | 200 | 1 | Pass | Pass |
| `/faq` | 200 | 1 | Pass | Pass |
| `/support` | 200 | 1 | Pass | Pass |
| `/terms` | 200 | 1 | Pass | Pass |
| `/zh-CN` | 200 | 1 | Pass | Pass |
| `/zh-CN/features` | 200 | 1 | Pass | Pass |
| `/zh-CN/platforms` | 200 | 1 | Pass | Pass |
| `/zh-CN/templates` | 200 | 1 | Pass | Pass |
| `/zh-CN/privacy` | 200 | 1 | Pass | Pass |
| `/zh-CN/faq` | 200 | 1 | Pass | Pass |
| `/zh-CN/support` | 200 | 1 | Pass | Pass |
| `/zh-CN/terms` | 200 | 1 | Pass | Pass |

## 404 QA

`/en`, `/en/features`, `/pricing`, `/about`, `/changelog`, and `/random-invalid-route` all returned HTTP 404 without redirecting to the homepage.

## Chrome Web Store CTA

The homepage, header, and final CTA resolve to the official listing with extension ID `lakcfmbmainingemilkajglcmlplkhdj`. The listing URL returned HTTP 200. The existing `utm_source=website` parameter is intentional and identifies website-origin traffic; no `authuser`, `hl`, localhost, preview, or share-tracking parameter was found.

## External Links

GitHub repository, GitHub Issues, and Chrome Web Store returned HTTP 200. Ko-fi is configured as `https://ko-fi.com/sumei7550`; an automated request received HTTP 403 from Ko-fi, so availability is not fully machine-verifiable. Email is configured as a `mailto:` link.

## Metadata

All 16 pages contain a title and description. `og:url`, `og:image`, and `twitter:card` are present on all pages. `twitter:card` is `summary_large_image`; no localhost or example.com origin was found.

## Canonical

16/16 canonical URLs use `https://prompt-pro-psi.vercel.app` and preserve each page path. No preview canonical was found.

## hreflang

All 8 English/Chinese pairs expose `en`, `zh-CN`, and `x-default`, with production-origin URLs.

## Open Graph / Twitter

`og:image` is `https://prompt-pro-psi.vercel.app/og/promptpro-og.png` on all pages. The image returned HTTP 200 and is 1200x630. Twitter cards use `summary_large_image`.

## Icons

`/favicon.ico`, `/favicon.svg`, and `/apple-touch-icon.png` returned HTTP 200. The Apple touch icon is served as a PNG; the final logo assets are present. No legacy logo reference was found in the production HTML.

## Sitemap

`/sitemap.xml` returned HTTP 200 and contains exactly 16 production URLs. It contains no `/en`, planned routes, duplicates, localhost, or preview URLs; no fabricated `lastModified` values are present.

## Robots

`/robots.txt` returned HTTP 200, allows `/`, and points to `https://prompt-pro-psi.vercel.app/sitemap.xml`.

## Structured Data

The English and Chinese homepages contain `WebSite` and `SoftwareApplication` JSON-LD. English and Chinese FAQ pages contain `FAQPage` JSON-LD with 11 questions each. Production URLs parse successfully and no preview origin was found. Local/production JSON-LD source validation passed.

## Responsive

The default desktop browser check found no horizontal overflow on Home, Platforms, Templates, FAQ, Support, Privacy, or the Chinese homepage. A 1280/390 viewport override was attempted through the available browser capability, but the connected browser continued reporting its native 1667px viewport; therefore Chrome responsive emulation is not claimed as passed. Real iOS Safari was not tested.

## Language Switch

The paired routes preserve the current page path for Features, Templates, FAQ, Support, and Terms. Production links resolve to the corresponding `/zh-CN/...` or English route.

## Runtime / Console

Home, Features, FAQ, Support, and Terms each rendered with one H1 and produced zero captured `console.error` entries. No hydration error, runtime exception, or failed local asset was observed in the browser checks.

## Network

The route and asset checks found no failed critical HTML, JavaScript, or CSS request. No unexpected tracker or third-party script was observed in the inspected production HTML. The Chrome Web Store CTA's intentional `utm_source=website` is retained.

## Manual Checks

- Social preview debugger checks (Facebook, LinkedIn, X): manual check pending.
- Google Rich Results live validation: manual check pending.
- Real iOS Safari responsive validation: manual check pending.
- Ko-fi automated availability check is inconclusive because Ko-fi returned HTTP 403 to the QA request.

## P0

0 discovered. Deployment is Ready, production routes and core assets are online, and the deployment source matches the requested commit.

## P1

0 discovered. The `utm_source=website` CTA parameter is intentional per product clarification and is not a defect.

## P2

0 discovered.

## Production Recommendation

Production Ready = YES

