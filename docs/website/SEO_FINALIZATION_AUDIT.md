# PromptPro SEO Finalization Audit

审计日期：2026-09-02
审计 checkpoint：`d6670ad feat: complete website MVP core pages`
审计范围：`website/` 的 16 条正式中英文页面，以及 Next.js 生产构建输出。
本轮结论：Phase 5.1 已完成；Phase 5.2 已完成剩余 P1 实施与本地构建验证。未部署、未 commit、未 push。

## 1. Executive Summary

当前官网 SEO 基础实现已明显超出原 SEO Matrix 中“尚未开始”的历史描述：16 条正式路由均有页面级 title、description、canonical、自适应 hreflang、robots、Open Graph、Twitter metadata，并进入静态构建结果；sitemap 与 robots 也只输出正式页面范围。

正式 Production Origin 已人工冻结为 `https://prompt-pro-psi.vercel.app`。代码通过 `NEXT_PUBLIC_SITE_URL` 读取并规范化 Origin；本地开发保留同一正式 Origin 作为安全 fallback，Production 缺少环境变量时 build 会明确失败。另有若干 P1 完善项：缺少 `og:locale:alternate`，OG 图使用 SVG，未配置 `apple-touch-icon`/ICO，且 sitemap 的 `lastModified` 是固定旧日期。

总体状态：

- P0：已解决。正式生产域名和 HTTPS Origin 已人工确认。
- P1：已完成 OG alternate locale、PNG 社交图、站点图标覆盖、sitemap 日期策略和受事实约束的结构化数据。
- P2：增长页面、Blog、Use Cases 等不属于当前 16 条正式页面，应延后。

## 2. Production Origin

| SEO Area | Current Origin Source | Current Value | Risk |
|---|---|---|---|
| Shared origin | `process.env.NEXT_PUBLIC_SITE_URL` in `website/src/lib/seo.ts` | `https://prompt-pro-psi.vercel.app` | Resolved；Production 必须注入该值 |
| `metadataBase` | `website/src/app/layout.tsx` imports `siteUrl` | Same configured origin | Resolved；缺少 Production 环境变量时 build 失败 |
| Sitemap | `website/src/app/sitemap.ts` imports shared `absoluteSiteUrl` | Same configured origin | Resolved |
| Robots | `website/src/app/robots.ts` imports shared `absoluteSiteUrl` | Same configured origin | Resolved |
| Canonical / hreflang / OG / Twitter | `getMetadata()` imports shared URL helper | Same configured origin | Resolved |

仓库中未发现 `example.com` 或其他示例域名。也未发现仓库内的 `.env*` 配置；生产 Origin 的实际注入位置应在 Vercel 项目环境变量中确认。

## 3. URL Strategy

当前正式 Production Origin 为：`https://prompt-pro-psi.vercel.app`

当前 canonical URL 模型为：

- English default locale：`/`、`/features`、`/privacy`、`/platforms`、`/templates`、`/faq`、`/support`、`/terms`。
- Chinese：`/zh-CN` 及对应 `/zh-CN/*` 路径。
- URL 不使用 trailing slash；English 不使用 `/en` 前缀。
- `generateStaticParams()` 只生成 16 条正式路径，`dynamicParams = false`；未列出的路径不会作为正式静态页面生成。

构建输出确认没有 `/en` 或 `/en/*`，也没有正式页面的尾斜杠变体。语言切换器通过当前路径在 `/` 与 `/zh-CN` 之间映射，和 canonical 语言版本一致。当前未发现 redirect/canonical 冲突。

## 4. Metadata

以下数值为 Next.js 构建生成 HTML 中读取的 title/description 字符长度；英文长度可与搜索结果常见展示区间比较，中文应结合实际 SERP 截断效果复核。

| Route | Locale | Title | Description | Status |
|---|---|---:|---:|---|
| `/` | en | PromptPro — Local Prompt Optimizer & Bilingual Templates (60) | Improve prompts locally and reuse bilingual templates on supported AI websites. No account required, and prompts are not uploaded to a new remote service. (154) | Present; slightly long description |
| `/features` | en | Prompt Optimizer Extension and Template Library \| PromptPro (59) | Refine prompts locally, search bilingual templates, save custom templates, and review recent history in PromptPro. (114) | Present |
| `/privacy` | en | Privacy Policy \| PromptPro (26) | Understand how PromptPro accesses, processes, and stores information in the current extension implementation. (109) | Present |
| `/platforms` | en | PromptPro Platforms — AI Website Compatibility and Verification Status (70) | See PromptPro's platform status, including historically verified platforms and configured sites that have not been verified in the current version. (152) | Present; title/description long but accurate |
| `/templates` | en | Bilingual Prompt Templates for Everyday AI Work \| PromptPro (59) | Search local bilingual prompt templates, fill in variables, reuse workflows, and save personal templates in PromptPro. (118) | Present |
| `/faq` | en | PromptPro FAQ — Product, Privacy, Templates, and Platforms (58) | Find clear answers about PromptPro, local prompt processing, browser storage, templates, and platform compatibility. (116) | Present |
| `/support` | en | PromptPro Support — Help, Feedback, and Compatibility (53) | Find PromptPro support options, troubleshooting guidance, developer contact details, and compatibility feedback links. (118) | Present |
| `/terms` | en | Terms of Use \| PromptPro (24) | Read the basic rules, user responsibilities, third-party boundaries, and disclaimers for using PromptPro. (105) | Present |
| `/zh-CN` | zh-CN | PromptPro｜本地提示词优化器与双语模板库 (24) | 在支持的 AI 网站中本地整理提示词并复用中英双语模板。无需账号，提示词不上传到新的远程服务。 (47) | Present |
| `/zh-CN/features` | zh-CN | 提示词优化扩展与双语模板库｜PromptPro (23) | 了解 PromptPro 的本地提示词优化、双语模板搜索、自定义模板和本地历史功能。 (42) | Present |
| `/zh-CN/privacy` | zh-CN | 隐私政策｜PromptPro (14) | 了解当前 PromptPro 扩展如何访问、处理和保存提示词、模板及相关本地数据。 (41) | Present |
| `/zh-CN/platforms` | zh-CN | PromptPro 平台 — AI 网站兼容性与验证状态 (28) | 查看 PromptPro 的平台状态，包括有历史验证依据的平台，以及当前版本尚未验证的已配置网站。 (49) | Present |
| `/zh-CN/templates` | zh-CN | 日常 AI 工作的双语提示词模板｜PromptPro (26) | 搜索本地双语提示词模板、填写变量、复用工作流程，并在 PromptPro 中保存个人模板。 (45) | Present |
| `/zh-CN/faq` | zh-CN | PromptPro 常见问题 — 产品、隐私、模板与平台 (28) | 了解 PromptPro 的使用方式、本地提示词处理、浏览器存储、模板和平台兼容性。 (42) | Present |
| `/zh-CN/support` | zh-CN | PromptPro 支持 — 使用帮助与兼容性反馈 (25) | 查看 PromptPro 的支持入口、问题排查建议、开发者联系方式和兼容性反馈方式。 (42) | Present |
| `/zh-CN/terms` | zh-CN | 使用条款｜PromptPro (14) | 了解使用 PromptPro 的基本规则、用户责任、第三方网站边界和免责声明。 (39) | Present |

16 个 title 和 description 均存在，当前未发现重复值。文案整体与页面实际内容和 `PRODUCT_FACTS.md` 一致；未发现“支持所有平台”、评分、用户量、下载量、模板数量或云端 AI 改写等 unsupported claim。建议后续仅在确认搜索展示后压缩首页和 Platforms 的英文 description，不做关键词堆叠。

## 5. Canonical

16 条正式页面均输出自引用 canonical，且均为同一 Origin 下的 HTTPS 绝对 URL：

| Route family | Current Canonical | Expected | Status |
|---|---|---|---|
| English 8 pages | `https://prompt-pro-psi.vercel.app` + current English path | `https://prompt-pro-psi.vercel.app` + current English path | Resolved |
| Chinese 8 pages | `https://prompt-pro-psi.vercel.app/zh-CN` + current Chinese path | `https://prompt-pro-psi.vercel.app/zh-CN` + current Chinese path | Resolved |

未发现 English canonical 指向 Chinese 或 Chinese canonical 指向 English 的问题。

## 6. hreflang

8 对页面均输出 `en`、`zh-CN`、`x-default` 三个 alternate link；英文页和中文页互相引用，`x-default` 指向英文版本。未输出 `ja`、`de` 或不存在的语言。

| Page Pair | en | zh-CN | x-default | Status |
|---|---|---|---|---|
| Home | `/` | `/zh-CN` | `/` | Correct |
| Features | `/features` | `/zh-CN/features` | `/features` | Correct |
| Privacy | `/privacy` | `/zh-CN/privacy` | `/privacy` | Correct |
| Platforms | `/platforms` | `/zh-CN/platforms` | `/platforms` | Correct |
| Templates | `/templates` | `/zh-CN/templates` | `/templates` | Correct |
| FAQ | `/faq` | `/zh-CN/faq` | `/faq` | Correct |
| Support | `/support` | `/zh-CN/support` | `/support` | Correct |
| Terms | `/terms` | `/zh-CN/terms` | `/terms` | Correct |

所有 alternate 的实际绝对 URL 均使用已冻结的 Production Origin。

## 7. Open Graph

已实现并在构建 HTML 中确认：`og:title`、`og:description`、`og:url`、`og:type=website`、`og:site_name=PromptPro`、`og:locale` 和 `og:image`。英文为 `en_US`，中文为 `zh_CN`，locale 选择合理。

已输出 `og:locale:alternate`。英文页为 `zh_CN`，中文页为 `en_US`；canonical 和 hreflang 模型不变。每个页面有独立 OG title/description，URL 和 locale 随页面语言正确切换；16 个正式页面共享经 PNG 化的默认 OG 图。

## 8. Twitter / Social

16 条页面均输出：

- `twitter:card=summary_large_image`
- `twitter:title`
- `twitter:description`
- `twitter:image`

Twitter title/description 与 OG 内容一致，当前没有明显缺失。后续应在真实社交平台预览中验证图片格式和裁切。

## 9. Social Image

| Asset | Exists | Dimensions | Brand/privacy check | Used by metadata |
|---|---|---|---|---|
| `website/public/og/promptpro-en.svg` | Yes | SVG viewBox 1200×630 | 使用 Final PromptPro 品牌文字和定位；无个人信息、无数量/评分 claims | English pages |
| `website/public/og/promptpro-zh.svg` | Yes | SVG viewBox 1200×630 | 使用中文品牌文字和定位；无个人信息、无数量/评分 claims | Chinese pages |

正式社交资源为 `website/public/og/promptpro-og.png`，尺寸 1200×630；由最终 PromptPro Logo SVG 可靠生成，保留 `promptpro-og.svg` 作为可追溯源资产。图片使用安全边距和简短品牌说明，无个人信息、数量、评分或旧 Logo。

## 10. Favicons

| Asset | Exists | Final Brand | Used By Metadata |
|---|---|---|---|
| `website/public/favicon.svg` | Yes | Yes，Final PromptPro Logo | Yes，`layout.tsx` 的 `icons.icon` 和页面 Header/Footer |
| `favicon.ico` | Yes，32×32 PNG payload in ICO container | Yes | Yes，metadata icons |
| `apple-touch-icon.png` | Yes，180×180 | Yes | Yes，metadata icons |
| Website manifest icons | No website manifest found | N/A | No |
| `website/public/icons/chrome.svg` | Yes | Chrome CTA icon，不是 favicon | CTA 使用，不属于 metadata icon |

当前 favicon、ICO 和 Apple Touch Icon 均来自最终品牌资源；未新增 website manifest，因为当前没有网站安装能力需求。App Router 通过单一 `metadata.icons` 配置接入这些资源。

## 11. Sitemap

构建生成的 `sitemap.xml` 包含准确的 16 条正式 URL：8 条 English + 8 条 `/zh-CN`，无 `/en`、无 Pricing/About/Changelog、无规划语言、无重复 locale URL、无 trailing slash 变体。所有 URL 使用同一 `siteUrl` Origin。

当前不输出 `lastModified`，也未设置 priority/changeFrequency。仓库没有可靠的页面级内容更新时间来源；省略字段比伪造统一时间更可解释，待未来建立真实更新时间数据源后再补充。

## 12. Robots

构建生成结果为：

```text
User-Agent: *
Allow: /

Sitemap: https://prompt-pro-psi.vercel.app/sitemap.xml
```

正式页面允许 crawl，没有大范围 Disallow；sitemap 路径和已冻结 Origin 正确。未完成页面不在静态参数和 sitemap 中，robots 无需额外屏蔽规划页面。

## 13. Indexability

构建结果中 16 条正式页面全部静态生成并返回页面 HTML；每页均有 `robots=index, follow`、自引用 canonical、3 个 hreflang alternate 和 1 个 H1。未发现正式页面 noindex、404 或 unexpected redirect。

| Route set | HTTP/Static Status | Indexable | Risk |
|---|---|---|---|
| 16 formal routes | Static/SSG build output; generated successfully | Yes | P0/P1 风险集中在 Origin 和 metadata 完善，不是页面生成失败 |
| `/en`, `/en/*`, planned pages | Not generated by formal static params | Not in formal SEO scope | 保持为非正式范围；不要加入 sitemap/导航真实链接 |
| `/_not-found` | Next.js internal not-found output | No formal SEO scope | 正常构建产物，不纳入 sitemap |

## 14. Structured Data

当前源码和构建输出已加入最小 JSON-LD：首页 WebSite + SoftwareApplication，FAQ 页 FAQPage。

| Schema | Recommended | Evidence | Risk |
|---|---|---|---|
| `WebSite` | Implemented, P1 | 官网有明确站点名称、首页和正式 Origin | 仅首页输出；未添加 publisher 或搜索功能 |
| `SoftwareApplication` | Implemented, P1 | 可见内容和源码支持 Chrome Extension、本地提示词工具、双语模板库 | 仅填写真实 name、category、Chrome、description、url 和已确认 installUrl；无 rating/review/offers/price/download count |
| `FAQPage` | Implemented, FAQ only, P1 | FAQ 页面真实显示 11 个问答，英文/中文各有对应可见内容 | 仅 FAQ 页面输出 11 个可见问答，并复用 FAQ 内容源 |
| `WebPage` | Optional, P1/P2 | 16 条页面都有独立 title、description、语言和 URL | 收益有限；避免重复和空字段 |
| `BreadcrumbList` | Optional, P2 | 页面有清晰层级，但当前不是强需求 | 需确保 breadcrumb 在页面可见或语义上可核验，不能为了 schema 造导航 |
| `Organization` | Not recommended now | 当前没有明确企业主体资料 | 不要凭空创建组织名称、logo、社交账号或地址 |

## 15. Internal Linking

已确认的主要内链结构基本符合冻结矩阵：Home 链接 Features、Privacy、Platforms、Templates；Features 链接 Templates/Privacy；Platforms 链接 Features/Templates/Privacy；Templates 链接 Features/Privacy；FAQ 与 Support 互链；Footer 为已完成主要页面提供同语言链接；Language Switcher 保持语言对应路径。

未发现正式页面指向空的 planned 页面。Pricing、About、Changelog 在 Header/Footer 中以不可点击状态呈现。未发现正式页面之间的明显 dead link 或异常自链接。

需要在 implementation/发布 QA 中继续验证的细节：

- Header 的 `aria-current` 只按完整 pathname 匹配，属于无障碍状态检查项，不构成 SEO URL 问题。
- Privacy 页面外链 GitHub/Ko-fi 是外链，不计入站内内链。
- Chrome Web Store CTA 是外链，不应加入 sitemap 或 hreflang。

## 16. Heading Structure

从 16 条构建 HTML 抽样及全量计数看，每条正式页面恰好 1 个 H1。Home、Features、Platforms、Templates、FAQ、Privacy、Terms 的 H2/H3 结构按内容区块组织，没有发现为视觉效果跳级的明显异常；Header Logo 是链接和图片，不产生额外 H1。Footer 分组使用 H2，和页面主体 H1 并列结构合理。

## 17. Image SEO

5 张产品截图资源均有实际且有意义的中英文 alt 文案，描述界面内容和使用场景，没有 keyword stuffing。产品截图通过 Next/Image 输出，并设置了响应式 `sizes`；Logo 使用空 alt 并标记为装饰性图片，Chrome CTA 图标同样为空 alt，处理合理。

当前未发现远程图片依赖、外部字体、analytics script 或第三方阻塞脚本。产品 PNG 文件约 45–110 KB，尺寸在 600–1850px 范围内，没有明显巨型图片；Next/Image 会在生产渲染中负责图片输出优化。

## 18. Content Risk

当前页面和 metadata 没有发现以下高风险宣传：支持所有 AI 平台、Fully compatible、Best prompt optimizer、100% offline/private、Thousands of templates、用户/下载/评分 claims。Platforms 文案保留“historically verified”与“configured/not verified”边界，符合 `PRODUCT_FACTS.md`。

应继续保持的事实边界：不把 Manifest 配置等同于当前稳定支持；不宣称云端 AI 模型、远程优化、完全离线、同步、账号或社会证明；隐私文案中的本地处理和“不上传到新的远程服务”应继续与扩展代码及隐私页同步。

## 19. Required Fixes

### P0 — 上线前必须修

1. [x] 人工冻结唯一正式 HTTPS production Origin：`https://prompt-pro-psi.vercel.app`；Production 构建要求 Vercel 的 `NEXT_PUBLIC_SITE_URL` 已设置。metadataBase、canonical、hreflang、OG、Twitter、sitemap 和 robots 已按该 Origin 验证。

### P1 — SEO Finalization 应修

1. [x] 补充 `og:locale:alternate`，英文为 `zh_CN`，中文为 `en_US`。
2. [x] 使用最终品牌 Logo 生成 1200×630 PNG OG 图。
3. [x] 因无可靠页面更新时间来源，移除 sitemap `lastModified`，不伪造日期。
4. [x] 补齐 `apple-touch-icon.png`、`favicon.ico`，并通过 metadata icons 统一接入。
5. [x] 接入受事实约束的 `WebSite`、`SoftwareApplication` 和 FAQ 页 `FAQPage` JSON-LD。

## 20. Recommended Enhancements

- 若搜索展示验证显示英文首页/Platforms description 被明显截断，再做小幅压缩；不要新增关键词堆叠。
- 发布后使用真实社交平台预览工具检查 OG/Twitter 图片裁切、缓存和可读性。
- 使用 Search Console 或同类工具检查 canonical 选择、hreflang 反馈和 sitemap 收录，不把工具报告的建议直接等同于代码缺陷。

## 21. Manual Confirmations

- [x] 正式生产域名和唯一 HTTPS Origin：`https://prompt-pro-psi.vercel.app`。
- [ ] Vercel Production 环境的 `NEXT_PUBLIC_SITE_URL` 已注入，且没有被 Preview 值覆盖。
- [ ] Chrome Web Store 最终 URL、当前扩展版本和 CTA 目标已复核。
- [ ] 5 张产品截图及 OG 素材均为无个人信息的最终版本。
- [ ] Platforms 当前验证状态已由真实 Chrome 验证结果更新。
- [ ] OG PNG/WebP 是否需要替换现有 SVG。
- [ ] 是否需要 apple-touch-icon、favicon.ico 和网站 manifest。

## 22. Proposed Implementation Order

1. 确认 production Origin 和部署环境变量。
2. 以确认后的 Origin 重新构建并反查 16 页 canonical、hreflang、OG、Twitter、sitemap、robots。
3. 实施 `og:locale:alternate`、社交图格式和 favicon 补齐。
4. 维护真实 sitemap `lastModified`。
5. 实施并验证 WebSite、SoftwareApplication、FAQPage（仅 FAQ 页）等 JSON-LD。
6. 做页面级静态 HTML、真实浏览器、社交预览和 Search Console 发布 QA。
7. 只有以上通过后再考虑 P2 的 Use Cases、Blog 或其他增长页面；本轮不新增页面。

## 23. Validation Record

- `cd website && npm.cmd run build`：通过。
- Next.js 构建输出：16 条正式路由静态生成，另有正常的 `/_not-found`、`/robots.txt`、`/sitemap.xml` 输出。
- 构建 HTML 反查：16/16 有 title、description、robots、canonical、3 个 hreflang、OG、Twitter；16/16 恰好 1 个 H1。
- `git diff --check`：通过。
- 本轮源码变更：仅新增 `docs/website/SEO_FINALIZATION_AUDIT.md`；未修改 website 生产代码，未修改 Extension business logic，未部署、未 commit、未 push。
