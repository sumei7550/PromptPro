# PromptPro Website Release QA

## Release Candidate

- Git Branch: `master`
- Git HEAD: `d6670ad feat: complete website MVP core pages`
- Working tree: SEO Finalization changes are uncommitted, including `website/README.md`, SEO/routing source, SEO documents, favicon/OG assets, and `website/src/components/seo/`. No untracked temporary files were found. No cleanup, reset, checkout, stash, commit, or push was performed.

## Production Origin

- Production origin: `https://prompt-pro-psi.vercel.app`
- `website/README.md` clearly documents `NEXT_PUBLIC_SITE_URL` and the production value.
- `website/.env.example` contains the conventional placeholder `https://your-production-domain.example`; this is not used by the production build when `NEXT_PUBLIC_SITE_URL` is supplied. It is a documentation/template risk and should be updated before handoff if the team wants the example file to be production-specific. No source runtime dependency on the placeholder was found.
- Source search found the expected production `vercel.app` origin and local-development `localhost` references in README/fallback context only. No production source dependency on `127.0.0.1`, LAN IP, test domain, or other preview URL was found.

## Build

- Command: `NEXT_PUBLIC_SITE_URL=https://prompt-pro-psi.vercel.app npm.cmd run build`
- Result: PASS.
- TypeScript/lint validity check: PASS.
- Next.js compilation: PASS.
- Static generation: PASS, 21 generated entries including 16 formal pages plus route/resource entries.
- Blocking build warnings: none.

## Route QA

- Formal English routes: 8/8 HTTP 200.
- Formal Chinese routes: 8/8 HTTP 200.
- Each formal page rendered exactly one H1 in the local production-server smoke test.
- `/sitemap.xml`: HTTP 200, 16 URLs.
- `/robots.txt`: HTTP 200, allows `/` and points to the production sitemap.

## Navigation

- Header links for Features/Platforms/Templates resolve to the locale-preserving formal routes.
- Pricing is visibly unavailable and is not a live link.
- Mobile menu is present at 360px, opens/closes, moves focus into the panel, and exposes `Open menu`/`Close menu` labels.
- Language switcher is keyboard/accessible-tree discoverable; `/` switched to `/zh-CN` while preserving the page mapping. The same route-pair mapping is present for Templates, FAQ, Support, and Terms.
- Footer completed links and unavailable states match the frozen route strategy in both locales.

## Chrome Web Store CTA

All observed Add to Chrome / 添加到 Chrome CTAs reuse:

`https://chromewebstore.google.com/detail/lakcfmbmainingemilkajglcmlplkhdj?utm_source=website`

| Location | URL | Status |
|---|---|---|
| Header desktop/mobile menu | Current Web Store listing URL above | PASS |
| Homepage hero | Current Web Store listing URL above | PASS |
| Features CTA | Shared constant | PASS |
| Templates CTA | Shared constant | PASS |
| Platforms CTA | Shared constant | PASS |
| FAQ CTA | Shared constant | PASS |
| Support CTA | Shared constant | PASS |
| Footer Chrome Extension link | Shared constant | PASS |

No `authuser`, `hl`, `item-share-cb`, test URL, or alternate listing URL was found.

## External Links

- Support GitHub link actually points to `https://github.com/sumei7550/PromptPro/issues` (Issues), in both locales.
- Privacy GitHub link points to `https://github.com/sumei7550/PromptPro` (Repository), in both locales.
- Ko-fi points to `https://ko-fi.com/sumei7550`.
- Email points to `mailto:sumei7550@outlook.com`.
- External Web Store and GitHub/Ko-fi links use `target="_blank"` with `rel="noreferrer"` where rendered as external anchors. Mailto is a normal mailto link.
- No dead-link placeholder was found in the checked website source.

## Responsive

- Visual smoke checks completed at 1280px and 360px on the local production build; 390px and 1440px were covered by CSS breakpoint/source review.
- Home, Features, Platforms, Templates, FAQ, Support, Privacy, and Terms use the shared responsive layout rules.
- No visible horizontal overflow, CTA clipping, obvious image clipping, or bottom-layer exposure behind the mobile menu was observed in the checked views.
- Mobile cards use the intentional horizontal scroll treatment where content density requires it; they do not collapse into unusably narrow cards.
- Manual iOS Safari validation required.

## Assets

- Final local branding assets exist: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, and `og/promptpro-og.png`.
- Product screenshots are local files under `website/public/images/product/raw/`; all referenced screenshot paths exist and are readable.
- Screenshot dimensions/readability check passed: 621×899, 625×901, 1141×834, 600×780, and 1850×1146.
- No remote competitor asset dependency was found in website source.
- A source-level review found no personal information or test account content in the checked asset names/content. No separate image-forensics pass was performed.
- The screenshots visibly include quota/remaining-usage UI such as `10 left`. This may be inconsistent with the current free MVP positioning and is recorded as a release risk; it was not modified per instructions.

## SEO Regression

- Canonical: 16/16 configured through shared SEO metadata.
- Hreflang: 8/8 EN↔zh-CN pairs configured, including `x-default`.
- Open Graph/Twitter metadata: configured for all 16 formal pages with the shared 1200×630 image.
- FAQ JSON-LD: present for 11 EN + 11 zh-CN FAQ entries.
- Sitemap: 16 formal URLs, production origin only.
- Robots: PASS; production sitemap URL.
- `/en` and planned routes remain non-generated/404 according to the frozen strategy.

## Accessibility Smoke

- Formal pages rendered one H1 each in server smoke checks.
- Header links, CTA links, menu button, language switcher, and FAQ controls have accessible names in the browser accessibility tree.
- Images expose meaningful alt text where informational; decorative logo/Chrome icons are empty-alt/hidden.
- FAQ questions are native disclosure controls and keyboard/focus discoverable.
- Mobile menu has an accessible label, `aria-expanded`, `aria-controls`, Escape close handling, and focus return.
- No obvious focus-visible removal was found in the checked shared styles.
- This is not a WCAG certification.

## Runtime Errors

- Production server smoke test: formal routes returned HTTP 200 with page content; invalid routes returned HTTP 404 without a server crash.
- Browser console smoke checks on Home and FAQ at mobile/desktop representative sizes found no PromptPro-owned console errors or warnings.
- Next server emitted `NoFallbackError` log output while serving expected 404 routes; this is associated with the catch-all route's intentional `notFound()` behavior and did not change HTTP results. It is not classified as a release blocker.

## Performance Smoke

- No broken Next/Image assets observed in the checked pages.
- Product images are finite local assets; no giant asset or remote blocking script was found in the source review.
- No analytics, unexpected remote script, or external font dependency was found.
- No release-blocking performance issue found.

## Security / Privacy Smoke

- Website source contains no analytics, tracker, advertising, form upload, or new remote prompt-processing integration.
- No unnecessary cookie behavior was found in the website source.
- Website privacy statements remain distinct from the Chrome extension privacy audit.
- External blank-target links include a safe `rel` attribute.

## Known Manual Checks

- Real iOS Safari responsive and interaction validation.
- Real Chrome Web Store install CTA validation, without completing an installation in this QA pass.
- Social share preview in a real sharing/debugger surface.
- Google Rich Results live validation.
- Vercel deployed-production smoke test for the exact release candidate.
- Google Search Console indexing/canonical verification.

These checks are not marked as passed by this local QA.

## P0

0 found.

## P1

0 found.

## P2

- `website/.env.example` retains a generic `example.com`-style placeholder. It does not affect the verified production build because the production environment variable is explicitly supplied, but it should be cleaned up before a later documentation pass if desired.
- Product screenshots contain quota/remaining-usage UI (`10 left`), which may create a messaging mismatch with the current free MVP. Review before public release if that UI is no longer accurate.
- Real-device/live-service checks listed above remain outstanding.

## Release Recommendation

Local Release QA result: **Release Ready: YES**

Rationale: P0 = 0 and P1 = 0. The local production build, formal route set, CTA destinations, navigation, responsive smoke, assets, SEO regression, accessibility smoke, and runtime checks passed. Deployment, commit, and push were intentionally not performed.
