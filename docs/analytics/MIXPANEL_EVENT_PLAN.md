# PromptPro Mixpanel Event Plan

Status: Planning only — no Mixpanel SDK, tracking code, privacy-page change, deployment, commit, or push is included in this phase.

Scope: PromptPro's public website only. The Chrome extension is covered here only as a future planning boundary.

## Goals

The first website analytics version should answer a small set of product and growth questions:

- Which pages receive visits and which pages are reached from search or other referral sources?
- Which visible calls to action create installation intent?
- Which pages and CTA locations lead to a Chrome Web Store visit?
- Do visitors move between the English and Simplified Chinese experiences?
- Which content areas are useful enough to produce interaction, especially Templates and FAQ?

The plan intentionally measures page and interaction metadata only. It must not inspect or transmit prompt text, template text, third-party AI-site content, or page content.

Success criteria for the first implementation are clarity and bounded collection, not a large event catalog. Six events are sufficient for the current static MVP website.

## Project Structure

Recommended Mixpanel structure:

```text
Mixpanel Organization
├── PromptPro
├── TokenTint Website
├── ExportAI Website
├── SEO Copilot Website
└── Tab Copier Website
```

Create one independent Mixpanel Project for the PromptPro product: **PromptPro**. The PromptPro website and Chrome extension may share this Project, while other products use their own Projects.

Do not place all products in one project with a required `product` property. Independent projects are preferable because they:

- keep each product's event dictionary, dashboards, retention settings, and access scope understandable;
- prevent similarly named website and extension events from being mixed in reports;
- make product-specific privacy review and future deletion/export requests easier to reason about;
- allow each product to evolve without changing a shared schema contract;
- still leave the Organization level available for administration and, if needed later, carefully governed cross-project reporting.

The website and the PromptPro extension share the PromptPro Project but remain separate data sources through event namespaces: `web_<action>` for the website and `extension_<action>` for the extension. This phase approves planning for website events only; it does not authorize extension instrumentation.

## Event Naming Convention

Use lowercase, stable, verb-oriented names with a product-surface prefix:

- Website events: `web_<action>`, for example `web_page_view` and `web_store_click`.
- Extension events: `extension_<action>`, reserved for a later extension-specific plan in the same PromptPro Project.

Do not use ambiguous names such as `click_button`, `button_click`, `generic_click`, or `page_view` as the canonical custom event name. The prefix makes exports and Organization-level analysis safer if data sources are ever combined.

Event names describe a meaningful user action, not a component implementation detail. Keep the event name stable when the visual component changes; use a controlled property such as `location` for placement.

## Website Events

The first version should contain these six events.

| Event | When it fires | Required properties | Notes |
|---|---|---|---|
| `web_page_view` | A public website route is viewed | `page` | Evaluate Mixpanel's automatic page-view capture first. If it already records route changes correctly for the Next.js client navigation model, do not add a duplicate custom event. |
| `web_cta_click` | A meaningful internal or conversion CTA is activated | `location`, `cta_name`, `page` | Covers installation-intent and high-value navigation CTAs that are not direct Store clicks. |
| `web_store_click` | A Chrome Web Store link is activated | `location`, `page` | Keep separate from the generic CTA event so Store visits can be counted without filtering CTA names. |
| `web_language_switch` | The visitor selects the other supported website language | `from`, `to`, `page` | Current supported locales are `en` and `zh-CN`; do not send planned locales until they become formal website routes. |
| `web_external_click` | A supported external destination is activated | `target`, `page` | Initial targets: `github`, `kofi`, and `email`. Do not send the full URL or email address as an event property. |
| `web_faq_expand` | A visitor opens an FAQ item | `page`, `faq_id` | Recommended because FAQ is an explicit product/support interaction and the item identifier can be a stable redacted slug rather than question text. |

### `web_page_view` decision

Page views are necessary for the Acquisition and Content dashboards, but the implementation should first confirm how Mixpanel handles:

- the initial document load;
- Next.js client-side route transitions;
- the `/` and `/zh-CN` locale routes;
- browser back/forward navigation.

If the selected Mixpanel integration automatically captures these views with correct `current_path`/URL and referrer information, use the automatic event as the page-view source and do not emit a second `web_page_view`. If automatic capture is incomplete or disabled for privacy reasons, implement one explicit `web_page_view` contract with the properties below. Never count both sources in the same dashboard.

Recommended explicit properties when a custom page-view event is needed:

```json
{
  "page": "/features",
  "referrer_domain": "www.google.com"
}
```

`page` is the normalized pathname only. Do not include query strings, fragments, prompt text, or arbitrary page content. `referrer_domain` should be a hostname or an approved source category, not a full URL containing possible query data. Referrer collection must be checked against the chosen Mixpanel configuration and consent/legal requirements before implementation.

### CTA taxonomy

Use a small allowlist for `cta_name` rather than sending button labels:

- `add_to_chrome`
- `features`
- `templates`
- `faq`
- `support`

`location` should be one of `header`, `hero`, `final_cta`, `footer`, or `content`. A direct Chrome Web Store destination should emit `web_store_click`; whether it also emits `web_cta_click` must be decided before implementation. Recommended rule: emit only `web_store_click` for Store links to prevent double-counting, and use `web_cta_click` for non-Store CTAs.

## Event Properties

### Shared properties

The useful shared property set is:

```json
{
  "page": "/templates",
  "locale": "en"
}
```

Use these rules:

- `page`: normalized current pathname, without query string or fragment. Required on all website events where a page context exists.
- `locale`: `en` or `zh-CN`. Recommended on all website events. Language is a meaningful content dimension and cannot be reconstructed reliably from every pathname in future route changes.
- `product`: optional. Because PromptPro has its own Mixpanel Project, the project already identifies the product. Omit it from the first PromptPro schema to avoid a redundant field. If Organization-level exports later require a common contract, add it consistently across products only after a separate schema decision.
- `environment`: optional. Use Mixpanel project/environment configuration or deployment separation rather than sending a constant `production` property on every event. If staging and production ever share a project, require an explicit controlled value such as `production`/`staging` before any implementation.

### Event-specific properties

| Event | Property | Allowed values / format | Collection rule |
|---|---|---|---|
| `web_page_view` | `page` | normalized pathname | No query string or fragment. |
| `web_page_view` | `referrer_domain` | hostname or approved source category | Only if the selected integration provides it safely and the privacy review approves it. Never send a full referrer URL by default. |
| `web_cta_click` | `location` | `header`, `hero`, `final_cta`, `footer`, `content` | Controlled enum only. |
| `web_cta_click` | `cta_name` | `add_to_chrome`, `features`, `templates`, `faq`, `support` | Stable semantic name, not visible copy. |
| `web_cta_click` | `page` | normalized pathname | Current page, not destination URL. |
| `web_store_click` | `location` | same controlled location enum | Store destination is inferred from the event name. |
| `web_store_click` | `page` | normalized pathname | Do not include the full Store URL or UTM query string as an event property. |
| `web_language_switch` | `from` | `en` or `zh-CN` | Current locale before activation. |
| `web_language_switch` | `to` | `en` or `zh-CN` | Selected locale after activation. |
| `web_language_switch` | `page` | normalized pathname | Path before the switch. |
| `web_external_click` | `target` | `github`, `kofi`, `email` | Allowlist only; do not send URL, email, link label, or query parameters. |
| `web_external_click` | `page` | normalized pathname | Page where the link was activated. |
| `web_faq_expand` | `faq_id` | stable non-content slug, for example `account_required` | Do not use the full question or answer as an event property. |
| `web_faq_expand` | `page` | `/faq` or `/zh-CN/faq` | Keep the locale in `locale`; use the actual pathname for page reporting. |

### Automatic Mixpanel fields to review before enabling

Mixpanel may provide technical or derived fields such as device/browser information, country, referrer, URL, and a generated distinct identifier depending on the SDK, project settings, and privacy configuration. These are not part of the custom PromptPro event contract until verified.

Before implementation, explicitly decide whether to disable or limit:

- automatic distinct IDs and any identity merge behavior;
- cookies or local persistence used for attribution;
- full URL, query-string, and referrer capture;
- IP-based geolocation and country derivation;
- automatic click or form capture;
- session replay, heatmaps, error capture, and similar optional features.

The initial plan recommends no session replay, no keystroke/form capture, no automatic content capture, and no user identity stitching.

## Dashboard Plan

Create three small dashboards. They should use the six-event schema and remain descriptive rather than becoming a complex funnel system.

### Acquisition

Purpose: understand how people arrive and what content they reach.

- `web_page_view` trend over time.
- Page views by normalized `page`.
- Page views by `referrer_domain` or approved source category, if enabled.
- Countries from Mixpanel's approved derived/technical field, if enabled after privacy review.
- Locale split using `locale`.

Country and referrer are attribution dimensions, not custom user identity fields. Confirm the exact Mixpanel configuration and regional/privacy implications before displaying them as a production metric.

### Conversion

Purpose: understand installation intent and Store traffic.

- `web_cta_click` by `cta_name`, `location`, `page`, and `locale`.
- `web_store_click` by `location`, `page`, and `locale`.
- A simple comparison of Store clicks to page views for the same page or period.
- Top Store-click entry pages and CTA locations.

Do not label a Store click as an install. It only proves that the website link was activated; Chrome Web Store installation completion is outside this website event plan unless a separate, verified integration is approved.

### Content

Purpose: identify which product education and support areas attract engagement.

- Page views for `/features` and `/zh-CN/features`.
- Page views for `/templates` and `/zh-CN/templates`.
- `web_faq_expand` by `faq_id`, `page`, and `locale`.
- `web_external_click` by `target` and page.
- Language-switch activity by `from`/`to`.

The dashboard should not attempt to infer prompt quality, template usefulness, or AI-site behavior from website events.

## Privacy Considerations

The current PromptPro Privacy Policy states that there is no analytics or tracking. Enabling Mixpanel would make that statement inaccurate and requires a Privacy Policy update before production collection begins. This phase intentionally does not modify the Privacy page.

The future website-only privacy update should, at minimum, explain in plain language:

- that the website uses Mixpanel for product/website analytics;
- the purposes: page usage, referral/source understanding, CTA interaction, Store-link interaction, language usage, and basic content-navigation interaction;
- the categories of data collected: pathname, locale, controlled interaction metadata, and any approved derived technical/attribution fields such as country or referrer category;
- whether Mixpanel uses cookies, local storage, generated identifiers, IP-derived country, or similar technologies in the selected configuration;
- retention, deletion, access, and vendor/processor information as confirmed for the actual Mixpanel account and configuration;
- any consent, opt-out, regional disclosure, or Do Not Track behavior required by the chosen deployment and applicable rules.

Keep this website review separate from the extension privacy review. The extension currently has its own local-first behavior and must not start sending prompts, templates, history, or third-party AI-site content merely because the website gains analytics. Any future extension analytics requires a separate event plan, data-flow review, implementation approval, and synchronized extension privacy disclosures.

Recommended rollout gate:

1. Freeze the exact Mixpanel project settings and SDK configuration.
2. Confirm automatic fields, cookies/storage, identity behavior, retention, and regional requirements.
3. Update and review both website privacy locales before enabling production collection.
4. Implement only the approved allowlists and event contracts in this document.
5. Validate with synthetic interactions containing no real prompts or template content.

## Future Extension Events

No extension events are approved for implementation in this phase. If analytics is later considered for the Chrome extension, use the namespace `extension_<action>` in the existing PromptPro Project and keep extension event properties separate from website event properties.

Possible future planning topics, not an approved event list, include feature activation, local optimization acceptance, template insertion, and extension settings changes. Any such plan must use aggregate action metadata only and must explicitly exclude prompt text, template text, chat content, page content, and user identity. It must also account for the extension's local-first privacy promises and Chrome Web Store disclosure requirements.

## Not Collected Data

The following data is explicitly prohibited from this website analytics plan:

- prompt text or optimized prompt text;
- template text, variable values, custom-template titles, descriptions, or tags;
- chat content, conversation history, or third-party AI website content;
- arbitrary page content, DOM text, form values, keystrokes, or clipboard content;
- user identity, account identifiers, login state, or identity stitching;
- email addresses or the full email destination;
- cookies or cookie-like identifiers;
- full external URLs, query strings, UTM values as raw event properties, or referrer URLs containing query data;
- session replay, heatmaps, automatic form capture, or advertising profiles;
- extension storage data, including local templates, optimization history, settings, and usage quota state.

The approved events describe website navigation and controlled interaction categories only. A successful event implementation must be able to demonstrate that these exclusions hold in the browser network payload and Mixpanel event properties.
