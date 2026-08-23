# PromptPro 官网 MVP Acceptance Criteria

更新时间：2026-08-24

本文档冻结 PromptPro 官网 MVP 进入页面开发、浏览器验证和 Vercel 正式发布前必须满足的验收标准。它继承并落实以下上游文档：

- `docs/website/WEBSITE_STATUS.md`
- `docs/website/INFORMATION_ARCHITECTURE.md`
- `docs/website/WIREFRAME_HOME.md`
- `docs/website/DESIGN_SYSTEM.md`
- `docs/website/COPY_DECK.md`
- `docs/website/SEO_PAGE_MATRIX.md`
- `docs/website/ASSET_INVENTORY.md`
- `docs/website/COMPONENT_PLAN.md`
- `docs/seo/PRODUCT_FACTS.md`

“通过”表示已经由对应的静态检查、源码检查、构建检查或真实浏览器检查提供证据；不能用计划、占位页面、旧截图或推测替代证据。自动化检查通过不等于真实 Chrome/Edge、截图或视觉验收通过。本 checkpoint 的完成范围为 Brand Logo Final、Header/Footer IA v2、Default English locale URL strategy、Homepage、Features 和 CTA system；其余页面仍按状态表处理。

## 1. 页面范围

当前验收范围按 Website IA v2 分为三层：

| 层级 | 页面 |
|---|---|
| Core product pages | Home、Features、Privacy、Platforms、Templates |
| IA v2 foundational pages | Pricing、FAQ、Support、About、Terms、Changelog |
| Future SEO pages | Use Cases、Blog |

Core product pages 的正式语言路径为：

```text
/         /features          /privacy          /platforms          /templates
/zh-CN   /zh-CN/features   /zh-CN/privacy   /zh-CN/platforms   /zh-CN/templates
```

IA v2 foundational pages 在正文完整、事实审核和对应语言内容完成前保持 planned；Future SEO pages 不进入当前正式路由。

范围规则：

- `/` 直接渲染默认英文首页，不进行重定向；英文不使用 locale 前缀，中文使用 `/zh-CN`。
- `ja`、`ko`、`de`、`fr`、`es` 在 MVP 中仍为规划语言，不进入导航、Footer、sitemap 或 hreflang。
- 不创建没有正式内容、事实依据或独立搜索意图的额外平台页、模板分类页或 SEO 门户页。

## 2. 功能验收

### 2.1 导航、语言和 CTA

- Header 在 Desktop 显示 Logo、Features、Platforms、Templates、Pricing、Language Switcher 和 Add to Chrome CTA；Pricing 页面未完成时为不可用项。
- Logo 返回当前语言首页；导航链接保持当前 locale。
- Mobile Header 默认使用 Mobile Navigation。菜单可以打开和关闭，且打开后包含完整导航、语言切换和安装 CTA。
- Language Switcher 在当前页面路径的对应语言之间切换，例如 `/features` ↔ `/zh-CN/features`，不统一跳回语言首页。
- 对应语言页面不存在时，不跳转到空白页、TODO 页或错误语言内容；处理结果符合实现阶段冻结的国际化回退策略。
- 所有 Chrome Web Store CTA 使用发布前最终确认并冻结的链接；URL 未冻结前必须保持 disabled/unavailable，不得使用占位 URL。
- 所有内部链接都指向存在的正式页面或已冻结的合法重定向，不产生 404、错误 locale、错误页面层级或循环跳转。

### 2.2 访问边界和数据边界

- 无效 locale 和无效 page 正确返回 404；规划语言不能因为配置存在而返回空白或 TODO 页面。
- 官网不读取插件运行时数据、用户提示词、个人模板、优化历史或浏览器扩展本地数据。
- 官网源码不使用 `chrome.*`，不依赖扩展运行时、Popup、Content Script 或 Service Worker 才能渲染主要内容。
- MVP 不接入数据库、登录、账号、云端同步或后台用户数据存储。
- MVP 不接入未经批准的分析、广告、遥测或新的远程提示词处理服务；任何未来数据收集必须单独完成隐私和数据流审查。
- 首屏 HTML 在没有客户端交互的情况下仍包含主要标题、正文、CTA、平台状态文字和图片 alt。

## 3. 内容验收

### 3.1 完整性和占位内容

- 只有实际开发完成的页面才进入发布 Gate；进入 Gate 的页面必须有完整正文、页面级 H1、主要区块、相关内链和 CTA。
- 页面、组件、内容数据、metadata、结构化数据和生成输出中不存在 `TODO`、`Lorem ipsum`、`example.com` 或其他占位域名。
- 不存在“Coming soon”“Learn more”但没有目标页面、空链接、占位安装按钮或未确认目标的占位 CTA。
- 页面正文、导航、Footer、错误页和语言切换相关可见文案均完成中英文内容审查。
- `en` 和 `zh-CN` 的页面结构、事实等级、CTA 目标和信息层级相互对应，但不要求机械逐句翻译；中文必须经过自然中文审校。

### 3.2 产品事实和营销边界

- 不出现未经验证的用户数、评分、安装量、成功率、客户 Logo、评价或其他社会证明。
- 不出现未经发布前重新核对的模板总数；可以介绍已确认的 8 个模板分类，但不能把旧文档中的数量直接当作最终数量。
- 不把源码或 Manifest 中的“代码配置”描述为“稳定支持”“Verified”或当前版本已验证；平台页必须区分 `Historically verified` / `历史验证` 与 `Configured · Not verified` / `代码配置 · 未验证`。
- 不宣传“支持所有 AI 网站”“所有平台稳定可用”“完全兼容”“完全离线”“绝对安全”或其他超出 `PRODUCT_FACTS.md` 的承诺。
- 不把本地规则优化写成云端模型改写、先进 AI 模型增强、联网优化或远程提示词处理。
- 不把 `chrome.storage.local` 描述为云端同步；如提及旧设置迁移，必须与产品事实中读取旧 `chrome.storage.sync` 的边界一致。
- 不宣传未经确认的 Chrome 版本、平台数量、版本号、价格、付费方案或线上商店版本对应关系。
- CTA、截图和使用说明不暗示自动导航、自动发送、自动提交或无需用户确认的插件行为。

### 3.3 Privacy 一致性

- `/privacy` 和 `/zh-CN/privacy` 的内容与 `docs/seo/PRODUCT_FACTS.md`、`public/privacy_en.html`、`public/privacy_zh.html` 及 `src/manifest.ts` 一致。
- Privacy 页面准确说明无需账号、浏览器本地处理、浏览器存储、权限用途和用户触发边界。
- Privacy 页面不把“当前没有发现新的远程提示词处理服务”扩大成对未来版本的永久保证。
- Privacy 页面不声称“从未读取任何数据”，也不隐瞒与实际实现相关的存储迁移边界。

## 4. Desktop / Mobile 响应式验收

必须在以下视口宽度分别检查所有已实际开发、计划进入发布 Gate 的页面：

`360px`、`390px`、`768px`、`1024px`、`1280px`、`1440px`。

### 4.1 通用检查

- 页面无非预期横向滚动；允许的 Platform/Template 卡片横向滚动不会扩大页面整体 scroll width。
- Header 不溢出，Navigation 不碰撞，Language Switcher 和 CTA 保持完整可用。
- H1、H2 能自然换行，不使用固定高度截断标题或正文。
- Primary、Secondary CTA 不截断文字、不被遮挡；移动端长 CTA 可以增高或换行。
- Feature Card、Privacy Item、Platform Card、Template Card 不截断标题、Badge 或正文。
- Badge 的完整文字可见；`Configured · Not verified` 等长状态允许自然换行或在卡片内调整布局。
- Footer 不溢出，分组链接可读、可点击并保持当前语言上下文。
- 图片不超出 Container、不拉伸、不造成布局跳动或页面横向滚动。
- Container 最大宽度、页面水平安全间距和 Section 间距符合 `DESIGN_SYSTEM.md`，1280px 以上不无限拉宽正文。

### 4.2 Mobile 专项

- Mobile 不是 Desktop 的简单缩放：使用 Mobile Navigation、Hero 单列、内容优先级和独立的 CTA 排列。
- Hero 在 360px 和 390px 下保持 H1、说明、主 CTA、次 CTA 和产品截图的完整信息。
- Hero 和 Final CTA 的主 CTA 在 Mobile 可使用容器全宽；360px 下主次 CTA 可纵向排列。
- Product Screenshot 单列展示，完整可见、可读，不因容器裁剪核心 UI。
- Platform/Template 横向滚动只发生在对应内容区域，不导致页面整体横向滚动；在 768px 及以上按设计规则优先转为 Grid。
- 360px 下仍可正常阅读、滚动、打开菜单、切换语言、点击内部链接和点击安装 CTA。

## 5. 图片验收

针对 `website/public/images/product/raw/`：

- raw 原图不修改、不覆盖、不删除，不把生成的裁剪图写回 raw 目录。
- 页面展示使用 `contain`，保持原始比例；禁止使用 `cover` 裁剪输入框、优化结果、模板入口、状态或其他核心 UI。
- 图片不拉伸；展示槽尺寸变化不改变图片内容比例。
- 每张图片都有当前语言下准确、简洁、描述用途的 `alt`；alt 不堆叠关键词，也不把装饰图误写成功能证明。
- 图片不包含个人信息、真实账号信息、敏感提示词、未脱敏 URL、命令、内部路径或不应公开的测试数据。
- 图片与当前产品版本、当前实现和所描述功能一致；旧版本截图、历史变体和未复核商店素材不得直接作为最终证明。
- Mobile 下截图完整展示并保持核心文字可读；无法满足时重新截图或调整容器，不通过裁剪隐藏问题。
- 图片加载失败时仍有可理解的 HTML 说明和稳定的布局占位。

## 6. Design System 验收

- Container 最大宽度和页面安全边距全站一致；`≥1280px` 的内容最大宽度为 `1200px`，1440px 只增加外侧留白。
- Section 上下间距、标题与内容间距使用已定义 Token，不为单页新增孤立视觉尺寸。
- Button 仅使用已定义的 `primary`、`secondary`、`text/link` 等变体；按钮内容驱动宽度。
- Card 使用统一的 Surface、边框、圆角、Padding 和内容驱动高度；不复制独立视觉体系。
- Badge 的尺寸、圆角、语义和状态样式一致；平台状态同时显示文字，不只依赖颜色。
- Platform 状态至少在文字上区分历史验证和代码配置未验证，不把未验证状态弱化为脚注。
- Focus Visible 存在且符合 Design System 的颜色和对比度要求。
- Hover、Active、Focus、Disabled 状态符合 `DESIGN_SYSTEM.md`；禁用状态不承载必须完成的操作，也不只通过颜色表达。
- 不新增未经定义的颜色、字体、间距、按钮、卡片、Badge 或独立页面视觉体系；如确需扩展，先更新 Design System 再实现。

## 7. Accessibility 验收

- Button、Menu Button、关闭按钮、Language Switcher、Header 链接和主要 CTA 的点击区域至少为 `44 × 44px`。
- 所有核心内容和交互可通过键盘访问；Tab 顺序符合视觉和语义顺序。
- Focus 状态始终可见，且不被 Header、菜单、卡片或截图容器遮挡。
- Mobile Menu 支持 `Escape` 关闭；关闭按钮和遮罩关闭行为清晰。
- 菜单关闭后焦点返回触发菜单的按钮；菜单打开时焦点不会落入不可见背景内容。
- 图片 alt 正确；纯装饰图使用合适的空 alt 或等效语义处理。
- 普通文字、主要文字、控件边界和 Focus 指示的对比度符合 Design System 中的 WCAG AA 要求。
- 平台状态、错误、选中项和其他语义不只通过颜色表达，文字或可访问名称同时提供信息。
- `prefers-reduced-motion: reduce` 生效，非必要位移、过渡和动画被移除或降级。

## 8. SEO 验收

对每个正式页面逐页检查：

- 有唯一、准确的 `Title`。
- 有唯一、准确且与可见正文一致的 `Description`。
- 有且只有一个唯一 H1，H1 与页面职责对应。
- canonical 使用正式 HTTPS Origin、无尾斜杠规范，并指向当前页面自身。
- hreflang 与页面对应关系正确；5 组 `en` / `zh-CN` 页面双向对应。
- `en` 和 `zh-CN` 均输出对方对应页面的 alternate；不输出规划语言 alternate。
- `x-default` 策略符合 `SEO_PAGE_MATRIX.md`，指向对应页面组的英文版本；根路径不作为独立内容页索引。
- Open Graph 的 title、description、locale、alternate locale、URL 和图片正确，且与当前页面内容和正式域名一致。
- sitemap 只包含当前实际完成页面的规范 URL（包含 `/`），不包含重定向 URL、未完成的 IA v2 planned pages、Future SEO pages、规划语言或 Chrome Web Store 外链；所有 URL 无 trailing slash。
- robots 指向正式 sitemap；正式环境的 robots、sitemap、canonical 和 OG 不出现 `example.com` 或其他占位域名。
- JSON-LD 只描述页面可见且已确认的内容，不输出虚假评分、安装量、价格、版本、平台数量或页面不存在的 FAQ；`SoftwareApplication` 的下载地址和版本字段只有在事实已冻结后才可输出。
- `/` 是默认英文页面的规范 URL，不生成 `/en` 或 `/en/*`。

## 9. Build / 浏览器验收

### 9.1 Build

在官网工程根目录执行：

```bash
npm run build
```

要求：

- 命令成功退出。
- TypeScript 检查和 Next.js/Vite（如适用）构建均通过。
- 生成产物不作为源码修改，不把 `node_modules/`、`.next/`、`out/`、`.vercel/` 或其他构建目录纳入源码验收。

### 9.2 浏览器

至少在以下浏览器验证：

- Chrome
- Edge

如条件允许，再验证 Safari/WebKit。

每个浏览器至少检查：

- 控制台无新增错误。
- 页面无 hydration error。
- 所有已实际开发页面均可访问，路由和 404 正常；未开发 planned pages 不通过空路由或 TODO 页面伪装为完成。
- Header、Mobile Menu、Escape 关闭、语言切换和焦点返回正常。
- Chrome Web Store CTA 打开最终确认的链接。
- 内部链接不产生错误页面或错误 locale。
- 图片加载、alt、contain 展示和 Mobile 完整性正常。
- 360px、390px、768px、1024px、1280px、1440px 的响应式检查完成。

## 10. 发布前 Gate

只有以下条件全部满足，才允许进入 Vercel 正式发布：

- Core product pages 和计划纳入首版发布的 foundational pages 必须实际开发完成，且页面职责、内链、语言对应关系符合本标准。
- Desktop/Mobile 六个视口验收通过，真实浏览器验证通过。
- 中英文内容完成产品事实审核、中文审校和隐私一致性审核。
- Chrome Web Store URL 已最终复核并冻结。
- 正式域名、HTTPS Origin、canonical、OG URL、sitemap 和 robots 使用的域名已冻结。
- 每页 SEO metadata、canonical、hreflang、Open Graph、sitemap、robots 和 JSON-LD 已完成并逐页验证。
- 不存在 TODO、Lorem ipsum、占位 CTA 或占位域名。
- 不存在未经确认的用户数、评分、安装量、模板数量、价格、版本或平台数量声明。
- 图片版本、来源、脱敏状态、alt 和 Mobile 展示已验收；raw 原图未被修改。
- `npm run build` 通过。
- 控制台无新增错误，正式页面、404、语言切换和安装 CTA 在 Chrome/Edge 中正常。
- 官网仍保持静态优先和隐私边界：不读取插件运行时数据、不使用 `chrome.*`、不接入数据库、登录或未经批准的分析/遥测。
- Changelog 没有真实版本内容时可以保持 planned，不作为首版发布硬阻塞；一旦发布 Changelog，必须通过真实版本记录审核。

任一 Gate 未满足时，发布状态为“未通过”，不得以“页面已能打开”“build 通过”或“旧截图可用”替代完整验收。

## 11. 本阶段限制

本 Acceptance Criteria 阶段禁止：

- 修改 `website` 源码；
- 创建 React/Next.js 组件；
- 修改 CSS、Design Token 或布局实现；
- 实现正式页面、SEO metadata、sitemap、robots、JSON-LD 或部署；
- 修改、裁剪、覆盖或删除 `website/public/images/product/raw/` 中的原始截图；
- 连接数据库、登录、分析、遥测或新的远程服务；
- 以本文件的存在声称页面已经完成、已经通过浏览器验收或已经可以发布。

本阶段只新增：

```text
docs/website/ACCEPTANCE_CRITERIA.md
```

## 12. 下一阶段进入条件和建议

进入页面开发前，先完成或冻结以下外部依赖：

1. 冻结正式域名、生产 Origin、根路径默认语言策略和 `x-default` 目标。
2. 复核并冻结 Chrome Web Store 最终 URL，以及链接对应的线上产品版本。
3. 根据 `ASSET_INVENTORY.md` 完成最终截图的版本核对、脱敏和 alt 文本。
4. 以 `COPY_DECK.md` 和 `PRODUCT_FACTS.md` 为内容源，建立 Core product pages 和实际纳入首版的 foundational pages 的中英文内容，并先清除对应 TODO 骨架。
5. 按 `COMPONENT_PLAN.md` 实现共享 Header、Footer、Language Switcher、Button、Card、Badge、Screenshot 容器和 Mobile Menu。
6. 页面结构稳定后实现 SEO metadata、canonical、hreflang、Open Graph、JSON-LD、sitemap 和 robots。
7. 按本文件逐项执行静态检查、`npm run build`、Chrome/Edge 浏览器检查和六个视口的视觉/交互验收，记录证据后再进入发布准备。

本文件冻结的是验收门槛，不替代产品事实、SEO 页面矩阵、视觉规范、素材清单或浏览器验证记录。产品事实、平台验证、正式域名、商店链接或截图版本发生变化时，应先更新对应上游文档，再同步评估本标准。
