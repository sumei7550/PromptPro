# PromptPro External SEO Tool Review

## Environment

- Production URL: `https://prompt-pro-psi.vercel.app`
- Review date: 2026-09-02
- Sources reviewed: 22 PNG screenshots in `docs/issues/`, existing SEO/release QA documents, production HTML and response headers.
- Scope: final external-tool audit only. No SEO strategy, URL architecture, copy claims, or schema strategy redesign.

## Ahrefs SEO Toolbar

### Content

The screenshots show page-level title, description, H1 and heading extraction for the Chinese home, features, platforms, templates, privacy, terms and FAQ pages. Titles and descriptions are present, page headings are present, and the content is not placeholder content.

Ahrefs displays missing Published/Modified dates. This is a tool recommendation, not a defect: the site has no reliable page-level publication/update source and the sitemap intentionally omits fabricated `lastModified` values. The yellow length indicators are informational recommendations only; they do not establish a content or indexability issue.

**Result:** no code change.

### Indexability

No screenshot indicates `noindex`, `nofollow`, a wrong canonical, a redirect canonical, or a preview origin. Production checks confirmed the homepage and both FAQ URLs return HTTP 200. The production robots response allows crawling and points to the production sitemap.

**Result:** no issue; no code change.

### Structured Data

The Ahrefs screenshots do not show a structured-data error. Production HTML sanity checks found:

- Homepage: one `WebSite` and one `SoftwareApplication` JSON-LD object.
- FAQ English: one `FAQPage` JSON-LD object with 11 `Question` entities.
- FAQ Chinese: one `FAQPage` JSON-LD object with 11 `Question` entities.

The JSON-LD is valid, uses visible FAQ content, and has no duplicate or unsupported claims.

**Result:** no code change.

### Social Tags

No screenshot indicates a social-tag defect. Production HTML contains `og:title`, `og:description`, `og:url`, `og:image`, `og:type`, `og:locale`, `og:locale:alternate`, `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image`. The configured OG image is `https://prompt-pro-psi.vercel.app/og/promptpro-og.png` at 1200×630.

Facebook and LinkedIn social previews are documented below as passed; X remains an optional manual check and is not tested.

**Result:** no code change.

## Social Preview

### Facebook / Meta Sharing Debugger

- URL: `https://prompt-pro-psi.vercel.app/`
- Result: **Passed**
- Fetch successful; response code `200`.
- Canonical URL correct and link preview rendered successfully.
- `og:url`, `og:type` (`website`), `og:title`, `og:description` and `og:image` correct.
- OG image rendered successfully; Twitter card metadata also detected.
- No old logo, broken image or preview-rendering issue.

The tool reported missing `fb:app_id`. **Ignore.** The PromptPro homepage has no Facebook App, so there is no need to create a fake `fb:app_id` solely to silence a tool warning.

**Action: no code change.**

### LinkedIn Post Inspector

- URL: `https://prompt-pro-psi.vercel.app/`
- Result: **Passed**
- Fetch successful and preview card rendered successfully.
- Title, description and image rendered correctly.
- Fetched URL and canonical URL correct.
- Redirect trail: `200 Success`.
- No old-cache issue or broken image.

LinkedIn showed `No author found` and `No publication date found`. **Ignore.** The PromptPro homepage is not Article/Blog content and does not need author or publication-date metadata. If the image URL is displayed as `media.licdn.com`, that is normal LinkedIn CDN caching behavior, not an OG image configuration error.

**Action: no code change.**

### Status

- Facebook: **Passed**
- LinkedIn: **Passed**
- X: **Optional / Not tested**
- Social Preview Overall: **Passed**

No production code, metadata, Open Graph, Twitter metadata, JSON-LD, favicon, OG image, page content, SEO strategy, URL architecture, CTA or Vercel configuration was changed for this validation.

### Images

Ahrefs reports `Empty alt text` for `favicon.svg` and `icons/chrome.svg`.

- `favicon.svg` is used as a browser/metadata icon and as the decorative logo inside a text-bearing PromptPro home link. Empty alt is correct in these contexts; adding `alt="PromptPro"` would duplicate the adjacent accessible name.
- `chrome.svg` is emitted by `website/src/components/ui/chrome-icon.tsx` with `alt=""` and `aria-hidden="true"`. It is used only inside buttons that already have visible labels or accessible names: the site header install button, and the Home, Features, Platforms, Templates, FAQ and Support page Chrome Web Store CTAs. The icon is decorative in every use; `alt="Chrome"` would repeat the button meaning.

**Result:** tool-only warning; no accessibility issue and no code change.

### HTTP Headers

The screenshots show HTTP 200. Direct production checks for `/`, `/faq`, `/zh-CN/faq`, `/robots.txt` and `/sitemap.xml` returned HTTP 200; no `X-Robots-Tag: noindex` or other indexability-blocking header was observed.

**Result:** no issue; no code change.

### Outgoing Links

The configured Chrome Web Store, GitHub, GitHub Issues, Ko-fi and `mailto:` destinations match the reviewed source. Ko-fi may return HTTP 403 to automated crawlers, but real-browser opening has been manually verified. This is a third-party anti-bot/crawler restriction, not evidence that the URL is broken.

**Result:** no URL change.

## Google Rich Results

### Homepage

`SoftwareApplication` was detected with the factual fields `name`, `applicationCategory`, `operatingSystem`, `description`, `url` and `installUrl`.

Warnings:

- `offers` missing: Optional / not applicable currently; there is no verified pricing or offer fact.
- `aggregateRating` missing: Optional / no verified rating source.

**Action: no change.** No fake price, offer, rating, review or review count was added.

### FAQ English

The production page crawled successfully. Source validation found a valid `FAQPage` with 11 questions, matching the 11 visible FAQ items. Google did not surface a rich result in this test.

**Action: no code change.** This is a Google rich-result support/eligibility outcome, not evidence that the existing schema should be removed or rewritten.

### FAQ Chinese

The production page crawled successfully. Source validation found a valid `FAQPage` with 11 questions, matching the 11 visible FAQ items. Google did not surface a rich result in this test.

**Action: no code change.**

## Issue Matrix

| Source | Page | Item | Tool warning | Actual issue | Priority | Action | Reason |
|---|---|---|---|---|---|---|---|
| Ahrefs Images | Production pages | `favicon.svg` | Empty alt text | No | Ignore | No change | Browser/metadata/decorative logo icon; accessible name comes from surrounding link text. |
| Ahrefs Images | Production pages | `icons/chrome.svg` | Empty alt text | No | Ignore | No change | Decorative icon inside labeled Add to Chrome/添加到 Chrome CTAs. |
| Ahrefs Content | Chinese pages shown | Published/Modified | Missing | No | Ignore | No change | No reliable dates; sitemap correctly omits fabricated dates. |
| Google Rich Results | Homepage | `SoftwareApplication.offers` | Missing | No | Ignore | No change | No factual pricing/offer data exists. |
| Google Rich Results | Homepage | `aggregateRating` | Missing | No | Ignore | No change | No verified rating source exists. |
| Google Rich Results | `/faq` | FAQ rich result not surfaced | No rich results detected | No | Ignore | No change | FAQPage is valid and matches visible content; Google did not surface it. |
| Google Rich Results | `/zh-CN/faq` | FAQ rich result not surfaced | No rich results detected | No | Ignore | No change | FAQPage is valid and matches visible content; Google did not surface it. |
| Ahrefs Outgoing Links | Production pages | Ko-fi | Automated 403 | No | Ignore | No change | Third-party crawler restriction; real-browser validation passed. |

## Fixes Applied

None. No production code or metadata was changed in this review.

## Ignored Tool Warnings

- Favicon empty alt text.
- Decorative Chrome icon empty alt text.
- Missing Published/Modified dates in Ahrefs Content.
- Length/recommended-range indicators in Ahrefs Content.
- Missing `offers` and `aggregateRating` on the factual SoftwareApplication schema.
- FAQPage not surfaced as a Google rich result.
- Ko-fi automated crawler HTTP 403.

## Google Search Console

- Property verification: **Passed**
- Sitemap submission: **Passed**
- Sitemap discovered URLs: `16`
- Homepage indexing request: **Submitted**
- `/features` indexing request: **Submitted**
- `/templates` indexing request: **Submitted**
- Remaining indexing requests: **Optional / Pending quota**

These entries record submitted requests and verification results only; they do not claim that Google has already indexed the pages.

## Manual Checks

Passed:

- Real iPhone Safari.
- Add to Chrome real store landing.
- Ko-fi real browser opening.
- Google Rich Results Test run for homepage, FAQ English and FAQ Chinese.
- Production HTTP 200 and robots/sitemap response checks.
- Production homepage and FAQ JSON-LD source sanity checks.
- Facebook / Meta Sharing Debugger social preview validation.
- LinkedIn Post Inspector social preview validation.

Optional / pending:

- X social preview — Optional / Not tested.
- Remaining Google Search Console indexing requests — Optional / Pending quota.

## Final Recommendation

Production SEO remains ready. The review found 0 actual issues, 0 P0 issues, 0 P1 issues and 0 P2 fixes. All observed warnings are tool-only, optional, unsupported by current facts, or already manually explained. Social Preview validation overall is passed; X remains optional and untested. Keep the current implementation unchanged; revisit only the explicitly pending optional checks.
