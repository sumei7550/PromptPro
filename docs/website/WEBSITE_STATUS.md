# PromptPro 官网当前状态

更新时间：2026-08-24

本文档记录 PromptPro 官网当前真实开发状态、已经冻结的工程决策和仍需解决的问题。它是当前阶段状态记录，不代表官网页面已经完成或已经部署上线。

## 1. 当前官网阶段

### 已完成阶段

- 产品事实：已建立 `docs/seo/PRODUCT_FACTS.md`，并明确代码确认、文档声明和待实测事实的边界。
- 官网策略：已在 `docs/seo/WEBSITE_MVP.md` 中明确目标用户、产品定位、Chrome Web Store 转化目标、MVP 页面范围和基础内链方向。
- 技术方案：已在 `docs/seo/WEBSITE_TECH_PLAN.md` 中确定官网工程边界、Next.js 方案、静态优先原则和 Vercel 部署方向。
- Next.js 初始化：已创建独立的 `website/` 工程、Next.js App Router、TypeScript 配置、构建配置和基础目录。
- 国际化路由：英文为默认 locale，使用无 locale 前缀路径；中文使用 `/zh-CN`，并将其他规划语言与正式支持语言分开。
- SEO 基础工程：已创建基础 `metadata`、`sitemap.ts`、`robots.ts`、favicon 和 locale Open Graph 映射入口。
- Website IA v2：已冻结 Product、Resources、Company、Legal 分层，以及 Future SEO Growth 规划边界。
- Header / Footer v2：已完成单层导航、Footer 分组、品牌区域和未开发页面不可用项规则。
- LanguageSwitcher Dropdown：已实现 English / 简体中文下拉、当前语言高亮、路径保持、Escape、外部点击关闭和 Mobile Menu 使用。
- Add to Chrome CTA 规范：已统一 CTA 文案、Chrome icon、集中 URL 配置和 URL 未冻结时 disabled/unavailable 规则。
- Brand Logo Final：首页、Header、Footer 使用最终品牌图标资源。
- CTA Visual Refinement：Header、Hero、Features Hero/Final CTA 和 Homepage Final CTA 已统一 CTA 组件与视觉层级。
- Homepage implementation：首页已完成当前阶段实现，使用已确认的产品事实和现有设计系统。
- Features implementation：Features 页面已完成当前阶段实现，包含功能展示、工作流和 Final CTA。
- Homepage / Features 360/390/768/1024/1280/1440 QA：已完成对应视口的页面溢出、Header、Footer、Mobile Menu、语言切换和基础交互检查。

### 当前阶段

> **Website MVP Foundation + Core Pages**

当前作为 GitHub checkpoint 整理。已完成 Brand Logo Final、Header/Footer IA v2、Default English locale URL strategy、Homepage、Features Page 和 CTA system；Privacy、Platforms、Templates 进入下一阶段开发。

### 未完成阶段

- Privacy：开发中
- Platforms：开发中
- Templates：开发中
- SEO implementation：未开始
- JSON-LD、canonical、hreflang：未开始
- sitemap production URL：未配置正式域名
- Changelog：未开始；没有真实版本内容前保持 planned
- Release QA：未完成

## 2. 当前工程状态

| 项目 | 当前状态 |
|---|---|
| 技术栈 | Next.js App Router + TypeScript + Vercel |
| 官网目录 | `website/` |
| 正式语言 | `en`、`zh-CN` |
| 规划语言 | `ja`、`ko`、`de`、`fr`、`es`，当前不生成正式页面 |
| 部署方式 | Vercel，Root Directory = `website` |
| 页面状态 | Homepage、Features 已实现；Privacy、Platforms、Templates 为开发中页面骨架；Pricing、FAQ、Support、About、Terms、Changelog 尚未创建 |
| 数据和运行边界 | 静态优先，不读取插件运行时用户数据，不调用 `chrome.*` |

当前工程包含以下正式语言路由骨架：

```text
/
/features
/privacy
/platforms
/templates
/zh-CN
/zh-CN/features
/zh-CN/privacy
/zh-CN/platforms
/zh-CN/templates
```

这些路由的存在只表示工程骨架已经生成，不表示页面内容、SEO metadata、视觉设计或产品能力宣传已经完成。

## 3. 当前已确认决策

以下决策作为官网设计准备阶段的约束：

1. **官网与插件隔离**：官网继续位于独立的 `website/` 目录，不混入 Chrome 插件的 `src/`、Vite/CRXJS 入口或 `dist-new/` 构建产物。
2. **静态优先**：首版以静态生成和可索引 HTML 为主，尽量减少客户端 JavaScript 和运行时依赖。
3. **不接数据库**：首版不引入数据库，不保存官网用户数据。
4. **不接登录**：首版不创建账号体系、用户中心或云端同步。
5. **不接分析/遥测**：默认不接入分析、广告、遥测或新的远程提示词处理服务；未来如需统计，必须单独完成隐私和数据流审查。
6. **SEO 优先**：页面结构、内容层级、语言 URL、metadata、canonical、hreflang、sitemap 和可索引内容应在页面开发前纳入设计。
7. **移动端必须同步设计**：每个页面必须同时有 Desktop 和 Mobile 结构方案。移动端不是 Desktop 的简单缩小版，而是独立的布局、导航、内容优先级和交互状态。
8. **事实优先**：官网公开内容只能使用产品事实和当前验证文档中已经确认的范围；代码中存在的平台配置不能直接写成当前稳定支持。

## 4. 当前未决问题

以下问题在进入页面开发前必须明确或完成验证：

- **正式域名**：尚未冻结最终域名，因此生产 canonical、OG URL 和 sitemap 域名仍不能写死。
- **Chrome Web Store URL**：`WEBSITE_MVP.md` 中已有候选链接，但当前线上页面、版本对应关系和正式发布链接尚未完成最终复核与冻结。
- **最终截图**：尚未冻结官网使用的真实扩展截图、版本、裁剪方式、来源和中英文素材。
- **平台验证状态**：部分平台只有代码配置或历史验证依据，当前版本真实 Chrome 验证仍需完成；官网不能把未验证平台宣传为稳定支持。
- **默认语言策略**：Default locale 为 English，根路径 `/` 直接渲染英文首页，不进行重定向；英文页面不使用 locale 前缀，中文使用 `/zh-CN`。
- **URL strategy**：正式 URL 不使用默认语言前缀，不使用 trailing slash。
- **是否增加其他语言**：`ja`、`ko`、`de`、`fr`、`es` 仍是规划语言；在没有完整本地化内容、SEO metadata 和事实审查前，不加入正式 sitemap 或正式支持范围。
- **安装点击统计**：是否接入安装 CTA 统计尚未决定；若接入，需先完成隐私边界和数据流审查。
- **真实模板数量**：官网发布前仍需从当前模板数据重新核对，不直接把历史 locale 或旧文档中的数量当作最终宣传数字。

## 5. Website IA v2 同步后的阶段完成标准

当前文档同步阶段完成后，应保持以下内容一致：

- MVP 网站地图和语言 URL；
- Desktop/Mobile Header 和 Footer 的信息架构；
- Core product pages：Home、Features、Privacy、Platforms、Templates；
- IA v2 foundational pages：Pricing、FAQ、Support、About、Terms、Changelog；
- Future SEO Growth：Use Cases、Blog；不进入当前正式路由；
- 主 CTA、次 CTA 和 CTA 目标；
- 页面间内链关系；
- 默认语言和无效语言路径的处理方向；
- 规划语言不进入正式 sitemap 的规则。

只有实际开发完成、正文完整并通过事实审核的页面，才可进入发布 Gate、sitemap、canonical、hreflang、OG 或 JSON-LD 范围。Changelog 没有真实版本内容时可以保持 planned，不作为首版发布硬阻塞。
