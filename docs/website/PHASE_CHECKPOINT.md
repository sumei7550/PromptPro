# PromptPro Website Phase Checkpoint

日期：2026-08-24

当前阶段：**Website MVP Foundation + Core Pages**

本文件记录 Homepage 与 Features 完成后的阶段性整理结果。它是 GitHub checkpoint，不代表官网已经部署、SEO 已完成或所有页面已经通过发布验收。

## 已完成内容

- Brand Logo Final
- Header/Footer IA v2
- Default English locale URL strategy
- Homepage
- Features Page
- CTA system：Header CTA、Hero CTA、Features CTA、Homepage Final CTA
- English / 简体中文语言切换基础路径保持

## 当前 URL strategy

- English 是 default locale，使用根路径及无 locale 前缀的英文页面：`/`、`/features`、`/privacy`、`/platforms`、`/templates`。
- 中文使用 `/zh-CN` 前缀：`/zh-CN`、`/zh-CN/features`、`/zh-CN/privacy`、`/zh-CN/platforms`、`/zh-CN/templates`。
- 不使用 `/en`、`/en/features` 或其他英文 locale redirect。
- 正式 URL 不使用 trailing slash。
- `ja`、`ko`、`de`、`fr`、`es` 仍为规划语言，不生成页面、不进入 sitemap 或 hreflang。

## 当前设计冻结项

- Final brand logo 资源与品牌呈现。
- Header/Footer IA v2 的分组、导航层级和未开发页面不可用项。
- CTA 文案、CTA 层级、按钮组件和安装入口视觉规则。
- Homepage 与 Features Page 的现有布局、产品截图内容和响应式结构。
- 产品截图继续引用 `website/public/images/product/raw/`，保持原始素材，不裁剪、不覆盖、不删除。

## In Progress / Next

开发顺序如下：

1. Privacy Page
2. Platforms Page
3. Templates Page

## Not Started

- SEO implementation
- JSON-LD
- canonical
- hreflang
- sitemap production URL
- Pricing
- FAQ
- Support
- About
- Terms

正式域名、Chrome Web Store 最终 URL、平台当前验证状态和发布截图仍需在发布前单独复核。当前 `NEXT_PUBLIC_SITE_URL` 的 fallback 仍是部署配置占位值，不代表正式生产域名。
