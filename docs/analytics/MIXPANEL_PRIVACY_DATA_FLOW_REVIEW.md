# PromptPro Mixpanel Privacy & Data Flow Review

Status: Phase 7.2 review document — planning and decision gate only.

This document does not install or configure Mixpanel, modify website code, modify the Privacy page, deploy, commit, or push. It records the conditions that must be satisfied before PromptPro website analytics can be implemented.

## 1. Review Scope

In scope:

- PromptPro public website only;
- one independent Mixpanel Project named `PromptPro`, shared by the PromptPro website and PromptPro Chrome extension;
- the six events defined in `docs/analytics/MIXPANEL_EVENT_PLAN.md`;
- anonymous website measurement for acquisition, conversion, and content interaction;
- Mixpanel SDK defaults and optional collection behavior that could affect privacy.

Out of scope:

- Extension analytics implementation (the future Extension namespace may share the PromptPro Project, but is not part of this phase);
- prompts, templates, history, settings, or usage quota data;
- third-party AI website content;
- account, login, email, or cross-product identity systems;
- SDK installation or runtime implementation;
- legal approval or a conclusion about compliance in any jurisdiction.

## 2. Current Baseline

The current website has no analytics implementation. The current English and Simplified Chinese Privacy pages state that PromptPro does not include analytics, advertising, or telemetry. That statement is accurate for the current website/extension source and must be revised before Mixpanel production collection begins.

The current website supports these formal locales and route families:

```text
en       /
zh-CN    /zh-CN
```

The current website pages relevant to the first dashboards include:

```text
/
/features
/templates
/faq
/support
/platforms
/privacy
/terms
```

The current extension remains local-first and has local templates, optimization history, settings, and usage state. These are not website analytics data and must not enter the Mixpanel data flow.

## 3. Decision Summary

| Decision | Phase 7.2 outcome |
|---|---|
| PromptPro Project | Recommended: `PromptPro` |
| Website + extension in PromptPro Project | Recommended, with `web_` / `extension_` namespaces |
| Shared multi-product Project | Not recommended |
| Website scope | Approved for planning only |
| Extension scope | Not approved |
| Event count | 6 planned events |
| Prompt/template collection | Prohibited |
| User identity | Anonymous only; no identity stitching |
| Email/account collection | Prohibited |
| Session Replay / Heatmaps | Disabled for the initial version |
| Form / keystroke / content capture | Disabled and prohibited |
| Production collection today | Blocked until Privacy and configuration gates pass |
| Privacy page change in this phase | Not performed |

## 4. Proposed Data Flow

The intended future flow is:

```text
Website page or approved UI interaction
        |
        v
Small analytics wrapper with allowlisted fields
        |
        v
Mixpanel browser SDK, privacy-reviewed configuration
        |
        v
PromptPro Mixpanel Project
```

The wrapper must be the only website integration point. Components must not send arbitrary button labels, visible question text, URLs, DOM content, form values, or user-entered content directly to Mixpanel.

The intended payload contains only normalized page context and controlled enums, for example:

```json
{
  "event": "web_store_click",
  "properties": {
    "page": "/",
    "locale": "en",
    "location": "hero"
  }
}
```

This is a schema example, not a live payload or evidence that Mixpanel is currently configured.

## 5. Mixpanel Project Configuration Checklist

The following items must be checked in the actual Mixpanel Project and SDK configuration before implementation. Mark an item complete only after recording the setting or behavior observed in the account/configuration.

### Project and access

- [ ] Project name is `PromptPro`.
- [ ] The Project is separate from TokenTint, ExportAI, SEO Copilot, Tab Copier, and all Chrome Extension data.
- [ ] The production token belongs only to the PromptPro Project.
- [ ] Staging and production are either separated into Projects or have an explicit, reviewed environment strategy.
- [ ] Project member access follows least privilege.
- [ ] Data retention and deletion settings are recorded.
- [ ] The vendor's current data-processing and subprocessor information is available for review.

### Identity and persistence

- [ ] No email, account ID, login state, or user-provided identity is sent.
- [ ] No `identify` call is used in the initial website implementation.
- [ ] No cross-product identity merge is enabled.
- [ ] Automatic distinct identifiers are understood and accepted, or disabled/limited where possible.
- [ ] Cookie behavior is known.
- [ ] LocalStorage/sessionStorage behavior is known.
- [ ] Cookie-like identifiers are not used unless a separate privacy decision explicitly approves them.
- [ ] No user profile properties are created.

### Automatic collection

- [ ] Automatic page-view behavior is understood for the initial document load.
- [ ] Automatic page-view behavior is understood for Next.js client-side route transitions.
- [ ] Back/forward navigation does not create misleading duplicate counts.
- [ ] Automatic click capture is disabled unless it is proven to collect only the approved fields.
- [ ] Automatic form capture is disabled.
- [ ] Keystroke/input capture is disabled.
- [ ] DOM text and page-content capture is disabled.
- [ ] Session Replay is disabled.
- [ ] Heatmaps are disabled.
- [ ] Error-reporting or performance collection is not enabled as an undeclared second analytics scope.

### Attribution and location

- [ ] Full URL capture is disabled or normalized to pathname only.
- [ ] Query strings and fragments are excluded from custom event properties.
- [ ] Raw UTM values are not sent as arbitrary event properties.
- [ ] Full Referrer URLs are not sent by default.
- [ ] Referrer is either disabled or reduced to an approved hostname/source category.
- [ ] Country derivation and IP handling are understood.
- [ ] Country is enabled only if the Privacy wording and regional review support it.

## 6. Approved Website Event Boundary

Only these six events are planned for the initial website version:

| Event | Approved properties |
|---|---|
| `web_page_view` | `page`, `locale`; optional reviewed `referrer_domain` |
| `web_cta_click` | `location`, `cta_name`, `page`, `locale` |
| `web_store_click` | `location`, `page`, `locale` |
| `web_language_switch` | `from`, `to`, `page`, `locale` |
| `web_external_click` | `target`, `page`, `locale` |
| `web_faq_expand` | `faq_id`, `page`, `locale` |

Allowed values must be allowlisted:

```text
locale:    en | zh-CN
location:  header | hero | final_cta | footer | content
target:    github | kofi | email
```

The `cta_name` and `faq_id` lists are defined in the event plan and must remain stable slugs, not visible copy. The initial implementation should emit `web_store_click` instead of also emitting `web_cta_click` for the same Store link, preventing double-counting.

## 7. Page-View Review

Before adding a custom page-view call, verify the selected Mixpanel integration against the current Next.js website behavior:

1. Initial load of `/`.
2. Initial load of `/zh-CN`.
3. Navigation from `/` to `/features`.
4. Navigation from `/templates` to `/faq`.
5. Language switch from an English page to its Chinese equivalent.
6. Browser back and forward navigation.

Choose exactly one source of truth:

- Mixpanel automatic page-view capture, if it correctly handles the above; or
- one explicit `web_page_view` event, if automatic capture is incomplete or unsuitable.

Do not count both automatic and explicit page views in the same dashboard.

## 8. Privacy Impact

### Current state

The current Privacy pages describe the current no-analytics state. In particular, the current English and Chinese content states that the extension does not include analytics, advertising, or telemetry and that no analytics transport is implemented.

This is a current implementation statement. It cannot remain unchanged after website Mixpanel collection is enabled.

### Required future Privacy update

Before production collection, update both locale sources:

```text
website/src/content/en/privacy.ts
website/src/content/zh-CN/privacy.ts
```

The future text must be based on the actual Mixpanel configuration, not on generic SDK assumptions. It should explain, at minimum:

- Mixpanel is used on the PromptPro website;
- the purposes of the analytics;
- the event/property categories collected;
- that prompts, templates, chat content, and third-party AI-site content are not collected by this website analytics flow;
- whether the implementation uses cookies, localStorage, sessionStorage, or generated anonymous identifiers;
- whether IP-derived country or referrer information is processed;
- retention, deletion, vendor, and subprocessor details confirmed for the selected service/configuration;
- any consent, opt-out, regional disclosure, or Do Not Track behavior that applies.

The Privacy update is a separate implementation task. It is intentionally not part of this review-only change.

### Website versus Extension

Website analytics must not be described as if it were extension analytics. The website may measure page and CTA metadata, while the extension currently handles prompts, templates, history, and settings locally. A future Extension Analytics proposal would need:

- a separate namespace such as `extension_<action>`;
- the `extension_<action>` namespace in the PromptPro Project or an explicitly separated data source;
- a new data-flow review;
- extension-specific Privacy wording;
- Chrome Web Store disclosure review;
- explicit confirmation that user content remains excluded.

## 9. Prohibited Data

The following data is blocked from the proposed data flow:

- prompt text or optimized prompt text;
- template text, variables, custom-template titles, descriptions, or tags;
- chat content, conversation history, or third-party AI website content;
- arbitrary page content, DOM text, form values, keyboard input, or clipboard content;
- user identity, account identifiers, login state, or identity stitching;
- email addresses or email link destinations;
- cookies or cookie-like identifiers;
- full URLs, query strings, raw UTM values, or complete Referrer URLs;
- session replay, heatmaps, automatic form capture, and advertising profiles;
- extension local storage, including settings, templates, history, and usage quota state.

## 10. Acceptance Gate

Phase 7.2 is complete only when the following decisions have evidence:

- [ ] The independent `PromptPro` Project exists or its creation is explicitly approved as the next external action.
- [ ] The Project token, environment strategy, access, and retention settings are recorded securely outside the repository.
- [ ] Anonymous identity and persistence behavior are known and approved.
- [ ] Cookie/storage behavior is known and compatible with the approved Privacy direction.
- [ ] Automatic collection options are disabled or individually reviewed.
- [ ] Referrer and country behavior is known; unapproved attribution fields remain disabled.
- [ ] `web_page_view` automatic-versus-explicit behavior is decided.
- [ ] The six-event allowlist and property enums are frozen.
- [ ] English and Chinese Privacy update requirements are accepted as a blocking prerequisite for production collection.
- [ ] A synthetic-payload test plan exists and contains no real Prompt or Template data.

Current phase result:

```text
PLANNING COMPLETE
PRODUCTION COLLECTION: BLOCKED
BLOCKER: Privacy and actual Mixpanel configuration are not yet updated/verified
```

## 11. Recommended Next Phase

After the Project settings and data-flow decisions are confirmed, proceed in this order:

1. Phase 7.3 — update the English and Chinese website Privacy content.
2. Phase 7.4 — implement the six approved website events and the page-view decision.
3. Phase 7.5 — run build, browser interaction, Network payload, and Mixpanel Live View validation with synthetic data.
4. Phase 7.6 — create the Acquisition, Conversion, and Content dashboards.
5. Deploy only after the Privacy and payload gates pass.

No item in this document authorizes SDK installation, production tracking, or an Extension Analytics implementation.
