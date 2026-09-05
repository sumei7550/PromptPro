# PromptPro Privacy Fact Audit

> Historical snapshot: this audit predates P0-03. The AI optimization path added on 2026-09-05 is documented in `docs/P0-03_AI_OPTIMIZATION_ENGINE.md`; statements below that say no PromptPro backend or remote prompt processing exists no longer describe the P0-03 source.

Audit date: 2026-09-01  
Audit type: static source and existing-copy audit  
Scope: extension source under `src/`, packaged privacy pages under `public/`, and `docs/seo/PRODUCT_FACTS.md`

This document is the factual baseline for a future website Privacy page. It records what the current workspace source supports; it is not a legal opinion and does not replace Chrome or third-party platform terms.

## 1. Audit Scope

Reviewed:

- `src/manifest.ts`, including permissions, host permissions, content scripts, background service worker, and the absence of `optional_permissions` and `externally_connectable`.
- `src/content/`, `src/popup/`, `src/background/`, `src/shared/`, and all bundled template modules.
- `public/privacy_en.html`, `public/privacy_zh.html`, and `docs/seo/PRODUCT_FACTS.md`.
- Repository-wide source searches for storage APIs, network APIs, authentication, analytics, telemetry, advertising, and remote assets.

This was not a live Chrome/platform verification. Static code can establish configured behavior and code paths, but not that every supported website currently works with its changing DOM.

## 2. Manifest Permissions

Manifest source: `src/manifest.ts:14-58`.

| Permission | Source file | Actual use | Privacy explanation needed |
|---|---|---|---|
| `storage` | `src/manifest.ts:14`; storage calls in `src/shared/storage.ts`, `src/popup/App.tsx`, `src/popup/components/PersonalAssets.tsx`, `src/content/floating-button.ts`, `src/background/index.ts` | Reads/writes extension settings, custom templates, optimization history, usage state, onboarding state, guide state, and a temporary selected-text draft. Reads legacy `storage.sync.settings` only when no local `settings` exists, then migrates it to local storage. | Yes. Explain local storage and the one-time legacy Sync read accurately. |
| `scripting` | `src/manifest.ts:14`; `src/background/index.ts:57-61` | User-requested template insertion fallback: injects a one-time `insertTextToInput` function into the active tab when the content-script message cannot be delivered. | Yes. Explain that this is an insertion fallback after a user action, not remote code loading. |
| `contextMenus` | `src/manifest.ts:14`; `src/background/index.ts:4-11` | Creates a right-click menu for selected text. On user selection, stores the trimmed selection as `pendingTemplateDraft`. | Yes. Explain that selected text is saved locally when the user chooses the menu item. |

No `optional_permissions` or `externally_connectable` declaration was found in `src/manifest.ts`.

### Host permissions

Source: `src/manifest.ts:15-31`. The same patterns are used by `content_scripts.matches` at `src/manifest.ts:36-54`.

| Host pattern | Configured page scope |
|---|---|
| `https://chatgpt.com/*` | ChatGPT |
| `https://claude.ai/*` | Claude |
| `https://gemini.google.com/*` | Gemini |
| `https://chat.deepseek.com/*` | DeepSeek |
| `https://www.doubao.com/*` | Doubao |
| `https://www.perplexity.ai/*` | Perplexity |
| `https://perplexity.ai/*` | Perplexity apex domain |
| `https://copilot.microsoft.com/*` | Copilot |
| `https://copilot.com/*` | Copilot apex domain |
| `https://grok.com/*` | Grok |
| `https://x.com/i/grok*` | Grok on X path |
| `https://aistudio.google.com/*` | Google AI Studio |
| `https://cursor.com/*` | Cursor |
| `https://v0.dev/*` | v0 |
| `https://lovable.dev/*` | Lovable |

There is no `<all_urls>` host permission. The source configures 15 URL patterns covering 12 named platform adapters.

## 3. Page Access

The content script is injected at `document_idle` on the configured host patterns. `src/content/index.ts:43-55` detects the current adapter and mounts the floating button. `src/content/floating-button.ts:180-185` installs a `MutationObserver` on `document.body` and scroll/resize listeners so the button can follow dynamically rendered input UI. This is continuous DOM observation for placement, not continuous prompt collection.

The adapters query the current page for supported input controls and their nearby form/parent as an anchor (`src/content/platforms/*.ts`, especially `base.ts:25-30` and `generic.ts:14-26`). On a user click of the floating button, `src/content/index.ts:56-58` reads only the selected adapter's current input value. The code does not query conversation history, message lists, browsing history, or unrelated page content for optimization.

The source does not prove that a platform's live DOM will always match its selectors; platform compatibility remains a manual Chrome verification item.

The content script may write an optimization result or template into the current input control. It does not call the adapters' `triggerSend()` methods from the current user flows; `src/content/index.ts:93` only writes the result, and no automatic submission path was found. The background fallback similarly writes into an input and does not submit it (`src/background/index.ts:68-105`).

The text read from an input is not saved merely because the content script is present. However, after the user accepts an optimization, the original and resulting text are recorded as optimization history (`src/content/index.ts:81-95`). A user-selected text is also stored as a temporary local template draft when the context-menu action is chosen (`src/background/index.ts:8-11`).

## 4. Local Processing

Prompt optimization is implemented by `localOptimize` in `src/content/optimizer.ts`. It uses bundled keyword/category/style rules and string construction; no OpenAI, Claude, Gemini, DeepSeek, or PromptPro API client is present.

The background receives an internal `OPTIMIZE_PROMPT` message only to check the daily local quota (`src/background/index.ts:14-43`). It returns `local-only`; the content script then calls `localOptimize` and presents a local preview. This extension-internal message is not a network request.

Template search is local Fuse.js filtering over the imported `allTemplates` array (`src/popup/App.tsx:78-107`). Template variables are filled by local string replacement in `src/popup/components/PromptVariableForm.tsx:25-39`. Copy uses the browser clipboard API; insertion uses extension messages or the scripting fallback.

Confirmed from the current source:

- No call to an OpenAI, Anthropic/Claude, Google/Gemini, DeepSeek, or PromptPro server API.
- No remote prompt-processing implementation.
- Prompt optimization and variable substitution are performed in extension JavaScript in the browser.
- The extension does not automatically send or submit the resulting text to the third-party AI page.

## 5. Local Storage

Storage API evidence is concentrated in `src/shared/storage.ts:12-113` and the feature-specific callers listed below.

| Storage key | Storage type | Saved content | Writers | Readers | User content involved |
|---|---|---|---|---|---|
| `settings` | `chrome.storage.local` | Locale, optimization style, daily usage count, reset date, and optional `localeSetByUser` | `src/shared/storage.ts:20,47,56`; popup/content callers through shared functions | `src/shared/storage.ts:12,17`, popup/content callers | No prompt text; preferences and usage state |
| `settings` | `chrome.storage.sync` (read-only migration source) | Legacy settings object, if local `settings` is absent | None in current source | `src/shared/storage.ts:17` | No prompt text; legacy preferences |
| `customTemplates` | `chrome.storage.local` | Personal template title, description, prompt, category, tags, favorite/use metadata, timestamps, and prior prompt versions | `src/shared/storage.ts:76,82,113`; popup personal-assets flows | `src/shared/storage.ts:73,106`; `PersonalAssets` | Yes |
| `optimizationHistory` | `chrome.storage.local` | `originalText`, `optimizedText`, style, generated id, and creation timestamp | `src/shared/storage.ts:113` after accepted optimization | `src/shared/storage.ts:106`; `PersonalAssets` | Yes |
| `promptpro_popup_onboarded` | `chrome.storage.local` | Boolean that dismisses popup onboarding | `src/popup/App.tsx:169` | `src/popup/App.tsx:32` | No |
| `pendingTemplateDraft` | `chrome.storage.local` | One trimmed user-selected text value pending opening Personal Assets | `src/background/index.ts:10` | `src/popup/App.tsx:35`; removed at `src/popup/App.tsx:39` | Yes, temporarily |
| `promptpro_guide_shown` | `chrome.storage.local` | Boolean that dismisses the floating-button guide | `src/content/floating-button.ts:264` | `src/content/floating-button.ts:228` | No |

Limits and retention implemented in source:

- At most 10 personal templates (`MAX_PERSONAL_TEMPLATES` in `src/shared/constants.ts:25`; enforced in `storage.ts:73-82`).
- At most 50 optimization history entries (`src/shared/storage.ts:113`). There is no in-extension clear-history function in the current popup code.
- At most 20 prior versions retained per personal-template edit (`src/popup/components/PersonalAssets.tsx:96`).
- Daily usage is a local counter with a 10-use daily limit (`src/shared/constants.ts:24`; `storage.ts:50-68`). It is not analytics; it gates the local feature.
- No `localStorage`, `sessionStorage`, IndexedDB, Cache API, or other application persistence implementation was found in the reviewed source.

Personal templates can be deleted individually in `PersonalAssets` (`src/popup/components/PersonalAssets.tsx:35,85`). They can also be exported to a user-selected local download and imported from a local JSON/Markdown file (`src/popup/components/PersonalAssets.tsx:37-64`). Export/import is local browser/file activity and is not an upload to PromptPro.

## 6. Network Requests

No `fetch`, `XMLHttpRequest`, `axios`, `WebSocket`, `sendBeacon`, remote script loader, or analytics transport was found under the extension source or packaged privacy pages.

| File | Target | Purpose | Trigger | User data sent |
|---|---|---|---|---|
| `src/popup/components/SettingsPanel.tsx:21-29` | `https://ko-fi.com/sumei7550` | Opens the developer's support page | User confirms the support dialog | No prompt/template/history data is passed by the extension |
| `public/privacy_en.html:41`, `public/privacy_zh.html:37` | GitHub repository URL | Contact link from the packaged privacy page | User clicks the link | No extension data is appended or submitted |

The extension also uses `chrome.runtime.sendMessage`, `chrome.tabs.sendMessage`, and `chrome.scripting.executeScript` for internal extension/page coordination. These are not remote network requests. Clipboard operations and `URL.createObjectURL` downloads are local browser operations.

Required wording for the future Privacy page:

> In the current source audit, no Extension runtime implementation was found that actively sends user Prompts, Templates, or History to a PromptPro backend or third-party API.

This is preferred over an unconditional promise about every future version or every network action of third-party websites.

## 7. Analytics & Tracking

Current source audit found no Google Analytics, PostHog, Mixpanel, Sentry, Segment, Amplitude, custom telemetry, advertising SDK, tracking pixel, error-reporting transport, or usage-event upload.

The local daily usage counter is feature quota state, not an analytics/tracking implementation. The floating-button `MutationObserver` is UI mounting/positioning behavior, not tracking.

## 8. Accounts & Personal Information

No registration, login, OAuth, account service, email collection, user-account ID, cookie API, cloud-sync feature, or identity backend was found in the extension source. `crypto.randomUUID()` generates local IDs for personal-template and history records; these are not user IDs and are not sent to a server.

The extension can process content the user places in an input or explicitly selects, and that content may contain personal information. The source does not inspect or classify the sensitivity of that content. Local Chrome extension storage should therefore be described as browser/device storage, not as a promise of encryption.

## 9. Third-party Platforms

PromptPro's behavior is limited to the configured page access, reading the relevant input when the user invokes an action, local processing, and writing text back into the input. The AI website may independently collect, retain, transmit, or process prompts and conversations under its own systems and policies.

The following statement is applicable and should be included in a future Privacy page:

> Your use of third-party AI websites remains subject to those services' own privacy policies and terms. PromptPro does not make privacy promises on behalf of ChatGPT, Claude, Gemini, DeepSeek, Doubao, Perplexity, Copilot, Grok, Google AI Studio, Cursor, v0, Lovable, or any other third-party platform.

## 10. Data Deletion

The extension exposes individual personal-template deletion, but no in-extension clear-history action was found. The current code removes the temporary `pendingTemplateDraft` after the popup reads it (`src/popup/App.tsx:35-40`).

Chrome documents that `chrome.storage.local` data is cleared when an extension is removed. This means uninstalling the extension removes the extension's local storage data as handled by Chrome; it is not a server-side deletion request. The current source contains no PromptPro server data store requiring an additional deletion workflow. Users should still be directed to Chrome's extension removal/storage controls for local-data management.

The legacy `chrome.storage.sync.settings` read is migration-only in current code. No current code writes settings to Sync, and no migration cleanup/removal call for the legacy Sync key was found. This should be described carefully rather than as “never accesses Sync.”

## 11. Existing Privacy Copy Conflicts

The English and Chinese packaged privacy pages are substantively parallel. No material Chinese/English contradiction was found in the permission, local-processing, storage, or third-party-service sections.

| Existing claim | Source | Code reality | Status | Recommended handling |
|---|---|---|---|---|
| PromptPro reads supported-page input when the user actively uses it | `privacy_en.html:19`, `privacy_zh.html:18` | Matches the floating-button optimization and user-requested insertion flows. | Confirmed | Keep, with “relevant input control” wording. |
| It does not passively record browsing history or read unrelated page content | `privacy_en.html:20`, `privacy_zh.html:19` | No history API or unrelated-content collection was found. A DOM observer exists only for UI placement. | Confirmed with careful wording | Keep the distinction from continuous DOM observation explicit. |
| Prompt optimization and template processing run locally | `privacy_en.html:23,34`, `privacy_zh.html:21,30` | Matches bundled optimizer, local Fuse search, and local variable replacement. | Confirmed | Keep as “current implementation processes…” rather than a future-proof absolute. |
| Original and optimized text may be saved; history is limited to 50 | `privacy_en.html:23`, `privacy_zh.html:21` | Matches `optimizationHistory` and `.slice(0, 50)`. | Confirmed | Add that there is no in-extension clear-history control currently. |
| Custom templates/settings/history/usage are stored locally | `privacy_en.html:23,27`, `privacy_zh.html:21,24` | Matches local storage keys and callers. Built-in templates are bundled in extension code, not stored as user data. | Confirmed with clarification | Separate bundled templates from personal templates. |
| Legacy settings may be read from Chrome Sync and ongoing writes use local | `privacy_en.html:27`, `privacy_zh.html:24` | Exactly matches `storage.ts:12-20,47`. | Confirmed | Keep; do not say Sync is never accessed. |
| The extension does not collect, upload, sell, share, or use prompt content for advertising/model training | `privacy_en.html:20,34,37`, `privacy_zh.html:19,30,33` | No remote transport, ad, model client, or sharing path was found, but “collect” can conflict with local history storage and “model training” is not directly testable as a universal claim. | Needs Rewording | Say that the current extension source does not upload prompt/template/history data to PromptPro or a third-party API, and that local history is stored only to provide the feature. Avoid broad claims about every form of collection or model training without legal/product confirmation. |
| Data is not transferred to third parties and human review is not allowed | `privacy_en.html:37`, `privacy_zh.html:33` | No transfer or human-review workflow is present in this source; the statement also reaches beyond what static extension code can prove. | Needs Rewording / Needs Manual Confirmation | Narrow to “the current source contains no transfer or human-review workflow,” then obtain product/legal confirmation before retaining a compliance promise. |
| Use complies with Chrome Web Store User Data Policy / Limited Use | `privacy_en.html:37`, `privacy_zh.html:33` | Compliance is a legal/store-review conclusion, not established by source inspection alone. | Needs Manual Confirmation | Retain only after developer/product/legal review against the current store submission. |
| The extension never auto-navigates or sends messages on the user's behalf | `privacy_en.html:30`, `privacy_zh.html:27` | No automatic navigation or submit call is used in current flows; user-triggered internal messages and a user-confirmed Ko-fi navigation exist. | Needs Rewording | Say it does not automatically navigate to AI sites or submit AI messages; distinguish internal extension messages and the optional user-triggered support link. |
| All user data stays local / “100% local” in older docs | `README.md:18`, `docs/PRD.md:14`, `docs/ARCHITECTURE.md:211` | Current prompt processing and extension persistence are local, but the source also reads legacy Sync settings and opens external links on user action. | Needs Rewording | Use “local-first” or “current prompt processing is local”; do not use “100% offline” or “never accesses any remote site” as an absolute. |

## 12. Confirmed Privacy Claims

CONFIRMED:

- The current Manifest declares only `storage`, `scripting`, and `contextMenus` as extension permissions.
- Content scripts are configured only for the 15 listed HTTPS URL patterns covering 12 named platform adapters; no `<all_urls>` permission is present.
- Prompt optimization uses bundled local rules in the current source.
- Template search and variable substitution run locally in the extension.
- Built-in templates are bundled in `src/shared/templates/` and are not remotely loaded.
- Personal templates and accepted optimization history are stored in `chrome.storage.local`.
- The current source has no PromptPro backend/API client, analytics transport, advertising SDK, or telemetry implementation.
- No account, login, OAuth, email collection, or cloud-sync feature is implemented.
- The extension does not automatically submit the optimized or inserted text to the third-party AI site.
- Personal templates can be deleted individually; uninstalling removes the extension's `chrome.storage.local` data through Chrome's extension storage behavior.

NEEDS CAREFUL WORDING:

- “Local-first” is supported for current processing and ongoing extension storage, but mention the legacy `chrome.storage.sync.settings` migration read when relevant.
- “No account required,” “no analytics,” “no telemetry,” “no advertising,” “no cloud sync,” and “no PromptPro server” are supported as descriptions of the current source, not permanent promises about future versions.
- “User prompts are not transmitted by PromptPro” should be scoped to the current extension implementation and PromptPro-controlled code paths. The third-party AI website can receive data according to its own behavior when the user uses that site.
- “Templates are stored locally” should distinguish bundled built-in templates from user-created templates stored in local extension storage.
- “History is stored locally” should mention the 50-entry cap and that current UI has no clear-all-history action.

## 13. Claims We Must NOT Make

- “100% offline,” “never touches the network,” or “zero data access.”
- “PromptPro never accesses Chrome Sync”; current code reads legacy `settings` from `chrome.storage.sync` when local settings are absent.
- “PromptPro controls or guarantees the privacy, retention, training, security, or deletion practices of third-party AI websites.”
- “All configured platforms are stable or fully verified”; no live Chrome verification was part of this audit.
- “Encrypted local storage,” unless a separate implementation and verification supports it.
- “No data is ever collected” without distinguishing local feature storage from remote collection.
- Legal or Chrome Web Store compliance conclusions without product/legal review.

## 14. Manual Questions / Unknowns

Needs Manual Confirmation:

1. Confirm the release package and Chrome Web Store listing use the same source behavior audited here, especially the 1.1.0 package.
2. Confirm with product/legal whether local `chrome.storage.local` history and templates should be called “collected,” “stored,” or another term in the legal copy.
3. Confirm the intended legal basis and wording for “does not use prompt content for model training” and “does not allow human review”; static source supports no such workflow, but not a universal organizational promise.
4. Confirm whether the extension may be installed on pages where a user is logged into a third-party AI service and how the product wants that third-party responsibility disclosed.
5. Manually verify current DOM behavior on representative pages, including empty input, Chinese/English input, long input, accepted optimization, template insertion, custom-template deletion, history retention, and uninstall data removal.
6. Confirm whether legacy Sync settings should be removed after successful migration in a future version; current source reads but does not remove that key.
7. Confirm ownership and privacy terms for the optional Ko-fi support destination and the GitHub contact link; the extension only opens these URLs after user navigation.

