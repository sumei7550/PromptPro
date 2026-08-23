# PromptPro 官网 Component Plan

更新时间：2026-08-24

本文档冻结 PromptPro 官网组件边界、内容组织、图片使用方式和开发顺序。当前 checkpoint 已完成 Brand Logo、Header/Footer、CTA system、Homepage 和 Features；Privacy、Platforms、Templates 仍按既定边界进入后续实现。不得修改 `website/public/images/product/raw/` 中的原始截图。

## 1. 组件设计原则

### 1.1 Server Component 优先

- 页面、页面区块、SEO metadata、内容读取和图片展示默认使用 Server Component。
- 首版以静态生成和可索引 HTML 为主，避免为静态内容引入不必要的客户端 JavaScript。
- 组件只在确实需要浏览器状态、事件监听或焦点管理时进入 Client Component 边界。
- Server/Client 边界以交互需求为依据，不以组件视觉大小或页面重要性为依据。

### 1.2 内容数据与 UI 分离

- 页面 JSX 不直接写死中英文导航、标题、描述、Badge 文案或模板分类数据。
- 内容模型负责语言内容、页面文案、链接目标、图片引用、alt 和状态语义；UI 组件负责结构、样式变体和响应式行为。
- `en` 和 `zh-CN` 使用同一套内容结构，通过 locale 内容源提供不同语言值。
- 页面组件只组合内容模型和 UI 组件，不在组件内部复制另一语言的文案或事实判断。
- 产品事实、平台验证等级和权限说明继续以现有事实文档、扩展实现和发布前复核结果为准；组件规划不把配置站点自动升级为稳定支持。

### 1.3 不过度抽象

- 只抽取跨页面重复、语义稳定且具有独立响应式或可访问性行为的组件。
- 页面专属的组合区块保留在对应页面目录或页面模块中，不为一次性布局创建通用组件。
- 基础 UI 组件通过少量、明确的 `variant` 和数据驱动复用，不为每一张 Feature Card 或模板卡创建独立视觉组件。
- 组件 API 优先表达产品语义，例如 `PlatformStatusBadge`、`ProductScreenshot`；避免无法说明职责的 `GenericBlock`、`UniversalPanel` 等抽象。

### 1.4 图片展示由组件控制

- 图片组件负责展示尺寸、容器比例、响应式缩放、`object-fit`、边框、圆角和可访问的 alt。
- 页面不通过临时 CSS 或素材文件名决定裁剪方式。
- 产品截图保持原始比例，使用 `object-fit: contain`，不使用 `cover` 隐藏输入框、优化结果、模板入口、状态或关键文字。
- Desktop 可以使用 16:10 展示槽；Mobile 根据素材原始比例自然缩放，不能为了铺满容器而变形或强制裁剪。
- 图片附近应保留可索引的 HTML 说明；图片本身不是正文、SEO 文案或功能事实的唯一载体。

### 1.5 raw 素材作为 source asset

- `website/public/images/product/raw/` 只保存原始截图，是展示组件的 source asset。
- 原始截图不直接修改，不在素材阶段裁剪、不重绘、不压缩覆盖、不添加文字或装饰。
- 后续页面由 `ProductScreenshot` 控制显示尺寸、比例、留白和 Desktop/Mobile 行为；如需派生交付格式，应输出到明确的派生资源位置并保留原始文件。
- 当前 raw 目录中的候选素材为：
  - `promptpro-template-library`
  - `promptpro-ai-chat-integration`
  - `promptpro-prompt-optimization-review`
  - `promptpro-template-search`
  - `promptpro-custom-template`
- 上述文件名代表组件映射和内容意图，不等于已经完成当前版本真实 Chrome 验证、脱敏或上线冻结。最终发布前仍需复核版本、语言、测试数据、隐私信息和截图中的可变文案。

## 2. 全局组件

### 2.1 SiteHeader

`SiteHeader` 负责当前语言上下文下的品牌入口、Features/Platforms/Templates/Pricing 单层导航、Add to Chrome CTA 和语言切换。Pricing 尚无正式页面时保留 IA 位置但不可用；组件不负责页面正文，也不读取插件运行时数据。

#### Desktop

```text
SiteHeader
├── Logo
├── Navigation
│   ├── Features
│   ├── Platforms
│   ├── Templates
│   └── Pricing (unavailable until page exists)
├── LanguageSwitcher
└── Add to Chrome CTA
```

- Logo 返回当前语言版本首页；英文返回 `/`，中文返回 `/zh-CN`。
- Navigation 使用当前 locale 的路径。
- Add to Chrome CTA 指向最终复核并冻结的 Chrome Web Store URL；在 URL 尚未冻结前保持 disabled/unavailable，不在代码中伪造正式安装目标。
- `LanguageSwitcher` 保留当前页面路径并切换到对应语言页面。
- Desktop Header 在设计系统规定的宽度下保持足够的文字和触控空间；中英文内容变长时不通过缩小字号解决碰撞。

#### Mobile

```text
SiteHeader
├── Logo
└── Menu Button
    └── Mobile Navigation
        ├── Features
        ├── Platforms
        ├── Templates
        ├── Pricing (unavailable until page exists)
        ├── LanguageSwitcher
        └── Add to Chrome CTA
```

- Mobile 首行只保留 Logo 和 Menu Button。
- Menu Button 最小触控区域为 `44px × 44px`，必须有可见焦点样式和动态可访问名称。
- Mobile Navigation 默认收起；打开后包含完整导航、语言切换和安装 CTA，不隐藏主要功能。
- 菜单的打开、关闭、遮罩、滚动限制、焦点移入和关闭后的焦点返回属于 Client 交互边界；结构和内容仍由 Server Component 提供。
- 360px 和 390px 下不通过压缩导航文字或缩小触控区域解决布局问题。

### 2.2 SiteFooter

`SiteFooter` 保留当前语言上下文，按 Product、Resources、Company 分组，Legal 放在左侧品牌区域；尚不存在的页面显示为不可用文本，不链接到空路由。

```text
SiteFooter
├── Product
│   ├── Features
│   ├── Platforms
│   └── Templates
├── Resources
│   ├── FAQ (planned)
│   ├── Support (planned)
│   └── Changelog (planned)
├── Company
│   └── About (planned)
└── Brand / Legal / Add to Chrome
    ├── Privacy Policy
    └── Terms of Use (unavailable until page exists)
```

- `Pricing`、`FAQ`、`Support`、`Changelog`、`About` 和 `Terms of Use` 在没有正式页面和事实/法律内容前不作为已存在链接。
- Footer 链接使用当前 locale；不会无提示地把中文页面链接到英文页面。
- Mobile 允许按设计系统自然堆叠或折叠分组，但必须保留品牌区域、Privacy Policy 和 Add to Chrome 状态入口。

### 2.3 LanguageSwitcher

`LanguageSwitcher` 只提供正式语言 `en` 与 `zh-CN`。

```text
/*（English default locale）      ↔      /zh-CN/*
```

- 当前页面优先互切到对应语言的同一路径，例如 `/features` ↔ `/zh-CN/features`；所有正式 URL 不带 trailing slash。
- 不把所有切换统一跳到语言首页。
- 不把 `ja`、`ko`、`de`、`fr`、`es` 放入正式导航、Footer、hreflang 或语言选择器，直到它们具备完整内容、SEO metadata、事实审查和验收结果。
- 如果对应语言页面不存在，处理方式在国际化实现阶段冻结；不得跳转到空白或 TODO 页面。
- 组件显示的语言名称和可访问标签来自 locale 内容模型，而不是写死在 JSX 中。

## 3. 基础 UI

### 3.1 Container

`Container` 统一控制页面内容的水平安全边界和最大宽度。

- Mobile `<390px`：水平安全间距 `16px`。
- Mobile `390–639px`：水平安全间距 `20px`。
- Desktop `1024–1279px`：水平安全间距 `32px`。
- Desktop `≥1280px`：最大内容宽度 `1200px`，水平安全间距 `32px`。
- 全宽背景可以延伸至视口边缘，但文字、Card、CTA 和截图必须回到 `Container`。
- 不使用固定宽度承载中英文内容，不因语言切换产生横向滚动。

### 3.2 Section

`Section` 负责页面区块的语义包裹、上下间距、可选背景和标题区域，不负责具体业务内容。

- 每个 Section 只有一个主要信息目标。
- 结构可包含 `Eyebrow`、H2、说明和内容区域；标题内容宽度不超过设计系统规定的可读范围。
- Mobile 默认上下间距 `64px`，Desktop 默认上下间距 `96px`；Hero 和 Final CTA 可使用专属间距但仍受 `Container` 约束。
- 不使用固定 Section 高度容纳可变的中英文文案。
- 主要区块必须有可见标题或可访问名称，标题层级不跳级。

### 3.3 Button

`Button` 提供少量明确变体：

- `primary`：安装 CTA 或页面主要动作。
- `secondary`：查看 Features、Templates、Platforms 或 Privacy 等次要动作。
- `text` / `link`：低强调的上下文链接。

规则：

- 内容驱动宽度，不为英文或中文设置固定文字宽度。
- 保持最小 `44px` 触控高度；图标与文字间距为 `8px`。
- Mobile Hero 和 Final CTA 的 Primary 使用容器全宽；360px 下 Primary 与 Secondary 纵向排列，间距 `12px`。
- Desktop Header CTA 使用内容宽度，不拉满 Header。
- Hover、Focus、Disabled 状态必须可见；状态不能只依赖颜色。
- 安装动作只负责打开最终安装入口，不自动导航到 AI 网站、不自动发送提示词、不代用户执行插件操作。

### 3.4 Card

`Card` 是 Feature、Privacy、Platform 和 Template 分类内容的基础容器。

- Desktop 默认 Padding `24px`，Mobile 默认 Padding `20px`。
- 高度由内容决定，不截断中英文标题或说明。
- 默认使用 Surface、边框和适度圆角；可点击 Card 只在交互状态使用轻量阴影或品牌边框。
- Card 的语义名称、标题、描述、链接和状态来自内容数据。
- 需要不同语义时使用明确变体或组合组件，不复制一套视觉 CSS。

### 3.5 Badge

`Badge` 用于短标签、分类或状态提示。

- 内容驱动宽度，允许中英文自然换行或在 Card 内调整布局。
- 使用 `pill` 等明确圆角变体，但不把长 CTA 做成 Badge。
- Badge 文案、语义颜色和可访问文本必须同步提供；不能只用颜色表达状态。

### 3.6 PlatformStatusBadge

`PlatformStatusBadge` 是 `Badge` 的平台状态语义组件，必须显式区分：

1. `Historical Verified`：有历史验证依据，但不代表当前版本已经复测或稳定支持。
2. `Configured · Not verified`：源码或 Manifest 已配置，但当前没有足够的真实验证证据。

- 两组状态不能合并成一个“Supported”列表。
- 状态必须同时包含文字和可感知的视觉差异，不能仅用绿色/灰色区分。
- 不使用 `Verified` 表示当前稳定支持，除非发布前完成对应版本的真实 Chrome 验证并更新事实基线。
- Badge 的英文和中文显示分别来自内容模型，例如 `Historically verified` / `历史验证依据`、`Configured · Not verified` / `代码配置 · 未验证`。

### 3.7 ProductScreenshot

`ProductScreenshot` 是所有真实扩展界面截图的统一展示边界。

#### 输入

```text
ProductScreenshot
├── image source
├── alt
├── aspect ratio
└── variant
```

- `image source`：引用经过内容模型映射的 source asset，当前来自 `website/public/images/product/raw/`。
- `alt`：当前页面语言的简洁、准确说明，描述“界面 + 用途”，不堆砌关键词，也不重复附近标题。
- `aspect ratio`：声明素材或展示槽比例；产品截图优先 `16:10`，但素材原比例优先。
- `variant`：区分 Hero、Product Preview、Feature Showcase、Template Screenshot 等展示语义和容器密度，不改变原始图片内容。

#### 展示规则

- `object-fit: contain`。
- 保持原比例，不拉伸。
- 不裁剪核心 UI，不使用 `object-fit: cover`。
- Desktop 可在 16:10 展示槽内按原比例缩放，外层 Padding `24–32px`。
- Mobile 使用单列自然缩放，外层 Padding 约 `12–16px`；不让截图造成页面横向滚动。
- 如果素材不是展示槽比例，使用完整原始比例或容器留白，而不是强行裁剪。
- 图片容器可以使用边框、圆角、轻品牌/中性背景和适度阴影；容器不能改变图片内容比例。
- 组件不负责编辑 raw 文件、生成裁剪版本或把截图中的文字当作可变数据。
- 图片加载失败时保留可理解的 HTML 说明和稳定的布局占位，避免页面结构跳动。

## 4. 页面组件树

以下树只冻结页面组合和职责，不代表现在创建这些 React 文件。

### 4.1 Homepage

```text
HomePage
├── SiteHeader
├── HeroSection
│   ├── SectionHeading / Hero copy
│   ├── Primary CTA
│   ├── Secondary CTA
│   └── ProductScreenshot (promptpro-template-library)
├── ProductPreviewSection
│   ├── ProductScreenshot (promptpro-template-library)
│   └── ProductScreenshot (promptpro-ai-chat-integration)
├── FeatureGrid
│   ├── Feature Card
│   ├── Feature Card
│   └── Feature Card ...
├── PrivacySection
├── PlatformStatusSection
│   ├── Historical Verified group
│   └── Configured · Not verified group
├── TemplateCategorySection
├── FinalCTA
└── SiteFooter
```

图片映射：

- Hero / Product Preview：`promptpro-template-library`、`promptpro-ai-chat-integration`。
- Feature：`promptpro-prompt-optimization-review`、`promptpro-template-search`、`promptpro-custom-template`。
- 首页 Privacy 不使用产品截图证明隐私；Privacy 页面和首页隐私说明使用可索引 HTML 内容。
- 首页截图最多并列两张；Mobile 改为纵向排列，仍保持完整 UI 和自然比例。

### 4.2 Features

```text
FeaturesPage
├── SiteHeader
├── FeatureHero
├── OptimizationShowcase
│   └── ProductScreenshot (promptpro-prompt-optimization-review)
├── TemplateSearchShowcase
│   └── ProductScreenshot (promptpro-template-search)
├── CustomTemplateShowcase
│   └── ProductScreenshot (promptpro-custom-template)
├── Feature detail / related links
├── Add to Chrome CTA
└── SiteFooter
```

- Feature 组件只描述已经确认的产品能力，不由截图推导未确认的平台、数量或效果承诺。
- 如后续需要 Popup 模板库或 AI 网站集成的补充展示，优先复用 `ProductScreenshot` 和现有 raw source asset，不创建重复的图片容器。
- 设置、历史、个人资产等截图不是本阶段必需素材；只有在当前版本复核并确定页面职责后才增加展示。

### 4.3 Privacy

```text
PrivacyPage
├── SiteHeader
├── PrivacyHero
├── PrivacyPrinciples
├── PermissionExplanation
├── Add to Chrome CTA
└── SiteFooter
```

- Privacy 页面不依赖产品截图。
- `PrivacyPrinciples` 解释本地处理、浏览器存储、无需账号和用户主动触发边界；不得扩大为“完全离线”或绝对安全承诺。
- `PermissionExplanation` 必须与 `src/manifest.ts`、`public/privacy_en.html`、`public/privacy_zh.html` 和发布时事实基线同步。
- 权限、读取页面输入、存储、迁移和用户操作边界使用正文 HTML 表达，不嵌入截图。

### 4.4 Platforms

```text
PlatformsPage
├── SiteHeader
├── PlatformHero
├── PlatformStatusGroup
│   ├── PlatformStatusBadge (Historical Verified)
│   └── Platform cards
├── PlatformStatusGroup
│   ├── PlatformStatusBadge (Configured · Not verified)
│   └── Platform cards
├── Availability note / related links
├── Add to Chrome CTA
└── SiteFooter
```

- `PlatformStatusGroup` 接收状态类型和平台数据，不能自行根据 hostname、Manifest 或数组存在性决定公开验证等级。
- `PlatformStatusBadge` 在两组中复用，但状态文案、颜色、边框和说明必须共同表达事实等级。
- 当前没有冻结的平台 Logo 资源；平台识别图形只能辅助识别，不能代替文字状态或暗示全部稳定支持。

### 4.5 Templates

```text
TemplatesPage
├── SiteHeader
├── TemplateHero
├── TemplateCategoryGrid
├── TemplateWorkflow
│   ├── 搜索
│   ├── 查看/填写变量
│   └── 插入当前 AI 页面
├── TemplateScreenshot
│   └── ProductScreenshot (promptpro-template-library)
├── Add to Chrome CTA
└── SiteFooter
```

- `TemplateCategoryGrid` 使用当前真实的 8 个分类和适用场景；不承诺未经核对的模板总数，不展示用户私有模板、历史、收藏量或使用次数。
- `TemplateWorkflow` 解释搜索、双语模板、变量和插入方式；页面内容不代替用户执行提交操作。
- `TemplateScreenshot` 复用 `promptpro-template-library`，图片保持 raw source asset，不在素材阶段裁剪。

### 4.6 Planned page patterns

以下只是后续页面的组件边界规划，不提前实现组件、路由或空页面：

```text
PricingPage   ├── SiteHeader ├── PricingHero ├── ConfirmedOfferContent ├── AddToChromeCTA └── SiteFooter
FAQPage       ├── SiteHeader ├── FAQHero ├── FAQList ├── RelatedLinks └── SiteFooter
SupportPage   ├── SiteHeader ├── SupportHero ├── SupportContent ├── PrivacyBoundary └── SiteFooter
AboutPage     ├── SiteHeader ├── AboutHero ├── ProductStory ├── ConfirmedFacts └── SiteFooter
TermsPage     ├── SiteHeader ├── LegalHeader ├── LegalContent ├── EffectiveDate └── SiteFooter
ChangelogPage ├── SiteHeader ├── ChangelogHero ├── ChangelogList └── SiteFooter
```

- FAQ 使用真实问答列表；没有完整答案时不创建 FAQPage 或 FAQ JSON-LD。
- Support 使用可核验的支持内容；没有真实联系方式时不编造邮箱、工单或 SLA。
- Legal content layout 只在法律主体、条款正文和法律审查完成后实现。
- Pricing content layout 只使用已冻结的价格、方案和限制；未冻结时不编造具体商业化信息。
- About content layout 只使用已确认的产品事实，不编造公司主体、团队、用户规模或客户。
- Changelog list 只渲染真实版本记录；没有真实版本内容时保持 planned。

## 5. 内容模型

### 5.1 目录形态

内容模型建议独立于 UI 组件，按页面职责组织：

```text
content/
├── navigation
├── homepage
├── features
├── privacy
├── platforms
└── templates
    ├── en
    └── zh-CN
```

实际实现可以按现有 `website/src/content/` 目录约定拆分文件，但必须保持以下逻辑结构：`navigation`、`homepage`、`features`、`privacy`、`platforms`、`templates` 均有 `en` 和 `zh-CN` 的同构内容。

### 5.2 内容模型职责

每个页面内容模型至少应能表达：

- 页面标题、H1、Section 标题和正文；
- CTA label、CTA 类型和目标路径；
- 当前页面对应语言的导航标签和语言切换标签；
- 图片 source key、alt、aspect ratio 和展示 variant；
- Feature、Privacy、Platform、Template 卡片的标题、描述、链接和状态；
- Platforms 的状态组类型，不把平台名称数组直接等同于验证状态；
- 页面级 SEO metadata 所需的 title、description、canonical/alternate 映射输入。

内容模型不应保存：

- 用户私有提示词、模板、历史或浏览器数据；
- 运行时 `chrome.*` 数据；
- 尚未验证的平台稳定支持承诺；
- 未核对的模板总数、用户数量、评分、成功率或效果保证。

### 5.3 同构与本地化规则

- `en` 和 `zh-CN` 的页面模块顺序、事实等级和 CTA 目标一一对应。
- 英文和中文允许自然句式不同，但不能删掉隐私边界、平台状态或产品限制。
- 不使用固定高度容纳文案；英文较长的 Badge、中文较高的信息密度和 CTA 换行由布局自然处理。
- 内容模型中的图片 alt、Badge、按钮和导航文案必须本地化。
- 页面不存在对应语言内容时不输出空白或 TODO 页面，具体回退策略在国际化实现阶段冻结。

## 6. Server / Client 边界

### 6.1 Server Component

以下内容默认属于 Server Component：

- 所有页面入口和页面布局；
- SEO metadata、canonical、hreflang、Open Graph 输入和结构化数据输出；
- `content/` 内容读取、locale 路由解析和静态参数；
- SiteHeader、SiteFooter 的静态结构；
- Navigation、CTA、Card、Badge、PlatformStatusBadge 的静态渲染；
- Privacy、Platforms 的正文和状态说明；
- ProductScreenshot、TemplateScreenshot 以及所有图片展示；
- Homepage、Features、Privacy、Platforms、Templates 的页面区块组合。

Server Component 不读取插件运行时用户数据，不调用 `chrome.*`，不接数据库、账号、遥测或新的远程提示词处理服务。

### 6.2 Client Component

首版只允许以下必要交互进入 Client Component：

- Mobile Menu：打开/关闭、遮罩、页面滚动处理、焦点管理和可访问名称更新；
- LanguageSwitcher：只有在实现需要浏览器事件或当前 URL 状态管理时才使用 Client Component；如果使用普通链接即可完成切换，应保持 Server-rendered 链接。

以下内容不应为了方便而转为 Client Component：

- 静态页面、SEO 文案和页面 Section；
- ProductScreenshot 图片展示；
- Feature、Privacy、Platform、Template Card；
- Add to Chrome CTA 和内部导航链接；
- 平台状态计算、产品事实判断和内容读取。

### 6.3 边界验收

- 首次 HTML 应包含主要页面标题、正文、CTA、平台状态文字和图片 alt。
- 未启用 JavaScript 时，静态导航、语言链接、内部页面链接和安装链接仍应可用；Mobile Menu 的增强交互除外。
- Client Component 不接收或记录用户提示词、模板正文、历史和设置。
- 任何新增客户端状态都必须说明其无法由静态 HTML/原生链接完成的具体理由。

## 7. 开发顺序

页面实现按以下顺序冻结：

1. Design Tokens
2. Layout Components
3. UI Components
4. Content Model
5. Homepage
6. Features
7. Privacy
8. Platforms
9. Templates
10. Remaining Pages Development
11. SEO Implementation

每一步完成后应保持 `en` 与 `zh-CN` 同构，并继续遵守真实截图、平台验证、隐私事实和静态优先边界。SEO Implementation 放在页面结构和内容模型之后，但页面实现时必须预留每页一个 H1、页面级 metadata、canonical、双向 hreflang、Open Graph 和结构化数据所需的数据入口。

## 8. 本阶段限制

- 本次只同步文档，不实现 planned page components。
- 不修改 `website` 源码、React 组件、CSS、构建配置、SEO 实现或扩展源码。
- 不修改、裁剪、覆盖或删除 `website/public/images/product/raw/` 中的任何原始截图。
- 不创建派生图片、OG 图片、Logo/Wordmark 或新的素材文件。
- 不把候选 raw 素材、历史平台验证或代码配置直接表述为当前稳定支持。
