# PromptPro 官网 MVP SEO Page Matrix

更新时间：2026-08-24

本文档冻结 PromptPro 官网 Website IA v2 的页面级 SEO 规格，供后续页面实现、metadata、结构化数据、sitemap 与发布验收使用。当前 checkpoint 中 SEO implementation、JSON-LD、canonical、hreflang 和正式 sitemap URL 均未开始；本文件仍是规格，不代表已实现。

上游事实与内容来源：

- `docs/website/WEBSITE_STATUS.md`
- `docs/website/INFORMATION_ARCHITECTURE.md`
- `docs/website/WIREFRAME_HOME.md`
- `docs/website/DESIGN_SYSTEM.md`
- `docs/website/COPY_DECK.md`
- `docs/seo/PRODUCT_FACTS.md`
- `public/privacy_en.html`
- `public/privacy_zh.html`

## 1. 范围与冻结原则

### 1.1 页面分层

#### A. Existing core pages

这些页面属于当前核心产品页面范围：

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

当前 Homepage 已有实现；Features、Privacy、Platforms、Templates 仍需完成正文、事实审核和发布前验收。存在路由或页面骨架不等于允许索引。

#### B. IA v2 planned pages

```text
Pricing
FAQ
Support
About
Terms of Use
Changelog
```

这些页面属于 Website IA v2 的 foundational pages，但在正文完整、事实审核和对应语言内容完成前，不进入 index、sitemap、hreflang、canonical、OG 或 JSON-LD。

#### C. Future SEO Growth

```text
Use Cases
Blog
```

Use Cases 和 Blog 只作为未来 SEO 增长方向记录，不进入当前正式路由、导航、sitemap 或 SEO 实现范围。

`ja`、`ko`、`de`、`fr`、`es` 仍是未来规划语言。本阶段不为它们定义页面、关键词、metadata、canonical、hreflang、Open Graph、Schema 或 sitemap 条目，也不在页面中宣传为已支持语言。

### 1.2 全局 SEO 原则

1. 每页只有一个 H1，H1 必须描述页面真实可见内容；H2/H3 不为关键词机械改写。
2. Title 使用自然产品表达，不重复堆叠同义关键词；Description 只概括页面已有信息，不承诺排名、效果、平台数量、模板数量或稳定性。
3. Primary Keyword 用于确定单页主题，不要求逐字重复出现在每个标题和段落中。
4. 只有正文完整、事实审核通过、页面级语言内容完成且进入发布范围的页面允许索引，并使用自引用 canonical；英文和中文页面不是重复页，不互相 canonical。
5. 只有允许索引的页面进入 sitemap、hreflang、canonical、OG 和 JSON-LD；MVP 不输出 `changefreq`，避免给出无法持续保证的更新频率。
6. Schema 只能描述页面可见、可核验的信息。不得加入页面没有的 FAQ、评分、评论、价格、安装量、模板数量、平台数量或支持承诺。
7. 正式域名尚未冻结。本文以 `https://{siteOrigin}` 表示未来经确认的唯一生产 Origin；实现前必须替换为正式 HTTPS 域名，不得把占位符发布上线。
8. URL 规范采用无尾斜杠形式；canonical、alternate、Open Graph URL 与 sitemap 必须使用同一规范。English 为 default locale，不使用 `/` 前缀。

### 1.3 全站固定内链来源

以下链接属于每个页面共同的全站入口，不在后续各页重复展开：

- Header：当前语言首页、Features、Platforms、Templates、Pricing（未启用时不可用）、语言下拉和 Add to Chrome CTA；
- Footer：品牌区域、Product、Resources、Company、Legal；尚无真实正文的页面只保留规划项，不创建空链接；
- Language Switcher：当前页面对应的另一正式语言版本。

后续“链接到该页面”包含以上适用的 Header、Footer 和语言切换入口；表格重点记录正文上下文内链。Chrome Web Store 是外链 CTA，不属于站内 SEO 内链。

## 2. 页面 SEO Matrix 摘要

| 页面层级 | 页面 | URL/状态 | 页面目标 | 当前 SEO 状态 |
|---|---|---|---|---|
| A | Home | `/`、`/zh-CN` | 说明产品定位并引导安装 | 页面完成后可评估 index/sitemap/metadata |
| A | Features / Privacy / Platforms / Templates | 现有双语路径 | 解释核心能力、隐私、平台状态和模板 | 当前为页面开发范围；TODO 或未完成页面不得进入 SEO |
| B | Pricing / FAQ / Support / About / Terms / Changelog | 规划页面 | 承担 IA v2 的基础产品、资源、公司和法律信息 | 正文完整并通过事实审核后才可进入 SEO |
| C | Use Cases / Blog | 未来 SEO Growth | 后续真实能力和关键词研究驱动的增长页面 | 当前不创建路由、不进入 SEO |

Priority 只在页面真正进入发布范围后表达相对重要性，不代表搜索引擎排名承诺。

以下 Home、Features、Privacy、Platforms、Templates 的双语规格是 Core product pages 完成后的目标 SEO 规格；当前 Homepage 已实现，其他页面仍未满足索引条件。表格中的“允许索引：是”表示完成 Gate 后的目标状态，不代表当前 TODO 页面已经允许索引。

## 3. 首页规格

### 3.1 English Home

| 字段 | 冻结规格 |
|---|---|
| URL | `/` |
| 页面目标 | 解释 PromptPro 是本地优先的 Chrome 提示词优化器与双语模板库，建立隐私和平台边界认知，引导前往 Chrome Web Store。 |
| 搜索意图 | 用户寻找本地提示词优化工具、Chrome 提示词扩展或双语模板入口，并希望快速判断产品用途。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/zh-CN` |
| Primary Keyword | `local prompt optimizer` |
| Secondary Keywords | `bilingual prompt templates`; `Chrome prompt extension`; `prompt optimizer without account` |
| Title | `PromptPro — Local Prompt Optimizer & Bilingual Templates` |
| Description | `Improve prompts locally and reuse bilingual templates on supported AI websites. No account required, and prompts are not uploaded to a new remote service.` |
| H1 / Hero H1 | `Improve your prompts locally.` |
| CTA 目标 | 主 CTA：经最终复核的 Chrome Web Store 产品页；次 CTA：`/features`。模板、平台和隐私 Section 分别链接到对应详情页。 |

核心 Section H2：

1. `See PromptPro in your AI workflow`
2. `Tools for clearer, reusable prompts`
3. `Local-first by design`
4. `Platform availability and verification status`
5. `Bilingual templates for everyday AI work`
6. `How PromptPro works`
7. `Make your next prompt easier to reuse`

H3 方向：六项真实功能卡片；三项隐私事实；`Historically verified` 与 `Configured · Not verified` 两个平台状态组；八个真实模板分类；使用流程步骤。H3 不添加用户量、平台数量或模板数量。

正文内链：

- 链接到该页：四个英文内容页的 Logo、Footer、返回首页链接和相关 CTA；`/zh-CN` 的语言切换。
- 该页链接到：`/features`、`/privacy`、`/platforms`、`/templates`、`/zh-CN`，以及 Chrome Web Store 外链。

Open Graph：

- OG Title：`PromptPro — Improve Your Prompts Locally`
- OG Description：`Refine prompts in your browser and reuse bilingual templates on supported AI websites. No account required.`
- OG Image 需求：英文品牌总览图，`1200 × 630`；包含 PromptPro 标识、简短英文定位和经确认的真实扩展截图。不得使用 AI 生成界面充当产品证据，不展示未验证的平台数量、模板数量或用户数据。

### 3.2 中文首页

| 字段 | 冻结规格 |
|---|---|
| URL | `/zh-CN` |
| 页面目标 | 解释 PromptPro 的本地提示词优化与双语模板价值，建立隐私和平台边界认知，引导前往 Chrome Web Store。 |
| 搜索意图 | 用户寻找本地提示词优化器、Chrome 提示词扩展或双语提示词模板，并希望快速判断产品用途。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/` |
| Primary Keyword | `本地提示词优化器` |
| Secondary Keywords | `双语提示词模板`; `Chrome 提示词扩展`; `无需账号的提示词优化` |
| Title | `PromptPro｜本地提示词优化器与双语模板库` |
| Description | `在支持的 AI 网站中本地整理提示词并复用中英双语模板。无需账号，提示词不上传到新的远程服务。` |
| H1 / Hero H1 | `本地优化提示词，快速复用双语模板。` |
| CTA 目标 | 主 CTA：经最终复核的 Chrome Web Store 产品页；次 CTA：`/zh-CN/features`。模板、平台和隐私 Section 分别链接到对应详情页。 |

核心 Section H2：

1. `在现有 AI 工作流程中使用 PromptPro`
2. `让提示词更清晰，也更容易复用`
3. `以本地处理为基础`
4. `平台适配与验证状态`
5. `面向日常 AI 工作的双语模板`
6. `PromptPro 如何使用`
7. `让下一次提示词更容易复用`

H3 方向：六项真实功能卡片；三项隐私事实；“历史验证”与“代码配置 · 未验证”两个平台状态组；八个真实模板分类；使用流程步骤。H3 不添加用户量、平台数量或模板数量。

正文内链：

- 链接到该页：四个中文内容页的 Logo、Footer、返回首页链接和相关 CTA；`/` 的语言切换。
- 该页链接到：`/zh-CN/features`、`/zh-CN/privacy`、`/zh-CN/platforms`、`/zh-CN/templates`、`/`，以及 Chrome Web Store 外链。

Open Graph：

- OG Title：`PromptPro｜在浏览器本地优化提示词`
- OG Description：`在支持的 AI 网站中整理提示词并复用中英双语模板，无需 PromptPro 账号。`
- OG Image 需求：中文品牌总览图，`1200 × 630`；包含 PromptPro 标识、简短中文定位和经确认的真实扩展截图；其他限制与英文首页一致。

## 4. Features 页面规格

### 4.1 English Features

| 字段 | 冻结规格 |
|---|---|
| URL | `/features` |
| 页面目标 | 解释本地规则优化、预览与应用、模板搜索与复用、自定义模板、本地历史、双语体验和本地数据管理。 |
| 搜索意图 | 用户正在比较提示词优化扩展的具体功能和使用边界。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/zh-CN/features` |
| Primary Keyword | `prompt optimizer extension` |
| Secondary Keywords | `prompt template library`; `local prompt optimizer`; `custom prompt templates`; `prompt history` |
| Title | `Prompt Optimizer Extension and Template Library | PromptPro` |
| Description | `Refine prompts locally, search bilingual templates, save custom templates, and review recent history in PromptPro.` |
| H1 | `Tools for clearer, reusable prompts.` |

H2 方向：`Local prompt optimization`; `Bilingual template library`; `Search and reuse`; `Custom templates`; `Local optimization history`; `English and Chinese experience`; `Local data management`; `Try PromptPro in Chrome`。

H3 方向：本地规则 → 预览 → 用户确认 → 应用/撤销；按标题、关键词、描述、标签和分类搜索；模板变量；浏览器本地存储边界。不得出现云端模型、自动提交、无限历史或跨设备同步。

正文内链：

- 链接到该页：`/` 功能 Section/Hero 次 CTA；`/platforms`、`/privacy` 的相关入口；全站导航；`/zh-CN/features` 的语言切换。
- 该页链接到：`/templates`、`/platforms`、`/privacy`、`/`、`/zh-CN/features`，以及 Chrome Web Store 外链。

Open Graph：

- OG Title：`PromptPro Features — Local Prompt Tools and Templates`
- OG Description：`Explore local prompt refinement, bilingual template search, custom templates, recent history, and browser-based data management.`
- OG Image 需求：英文功能概览图，`1200 × 630`；使用真实、已确认的扩展界面组合或六项功能的抽象图标，不把装饰图标当功能证据，不展示未经核实的数量。

### 4.2 中文功能页

| 字段 | 冻结规格 |
|---|---|
| URL | `/zh-CN/features` |
| 页面目标 | 解释本地规则优化、预览与应用、模板搜索与复用、自定义模板、本地历史、双语体验和本地数据管理。 |
| 搜索意图 | 用户正在比较提示词优化扩展的具体功能和使用边界。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/features` |
| Primary Keyword | `提示词优化扩展` |
| Secondary Keywords | `提示词模板库`; `本地提示词优化`; `自定义提示词模板`; `提示词历史` |
| Title | `提示词优化扩展与双语模板库｜PromptPro` |
| Description | `了解 PromptPro 的本地提示词优化、双语模板搜索、自定义模板和本地历史功能。` |
| H1 | `让提示词更清晰，也更容易复用。` |

H2 方向：“本地提示词优化”“双语模板库”“搜索与复用”“自定义模板”“本地优化历史”“中英双语体验”“本地数据管理”“在 Chrome 中使用 PromptPro”。

H3 方向：本地规则 → 预览 → 用户确认 → 应用/撤销；按标题、关键词、描述、标签和分类搜索；模板变量；浏览器本地存储边界。不得出现云端模型、自动提交、无限历史或跨设备同步。

正文内链：

- 链接到该页：`/zh-CN` 功能 Section/Hero 次 CTA；`/zh-CN/platforms`、`/zh-CN/privacy` 的相关入口；全站导航；`/features` 的语言切换。
- 该页链接到：`/zh-CN/templates`、`/zh-CN/platforms`、`/zh-CN/privacy`、`/zh-CN`、`/features`，以及 Chrome Web Store 外链。

Open Graph：

- OG Title：`PromptPro 功能｜本地提示词工具与双语模板`
- OG Description：`了解本地提示词整理、双语模板搜索、自定义模板、本地历史和浏览器数据管理。`
- OG Image 需求：中文功能概览图，`1200 × 630`；素材和事实限制与英文功能页一致。

## 5. Privacy 页面规格

Privacy SEO 文案以 `docs/seo/PRODUCT_FACTS.md`、`public/privacy_en.html` 和 `public/privacy_zh.html` 为共同基线。页面必须如实解释：用户主动使用时会读取支持页面输入框中的文本；处理在浏览器本地完成；设置、自定义模板、历史、语言偏好和使用次数通过浏览器存储保存；旧设置迁移可能读取 `chrome.storage.sync`；权限用于明确功能；扩展不自动导航或代用户发送消息。

禁止使用 `100% private`、`zero data collection forever`、“100% 私密”“永久零数据收集”“完全离线”或等价绝对承诺。

### 5.1 English Privacy

| 字段 | 冻结规格 |
|---|---|
| URL | `/privacy` |
| 页面目标 | 说明提示词处理、浏览器存储、权限用途、远程请求边界和用户控制。 |
| 搜索意图 | 用户在安装前核查 PromptPro 是否需要账号、如何处理输入内容及为何申请权限。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/zh-CN/privacy` |
| Primary Keyword | `local prompt processing` |
| Secondary Keywords | `PromptPro privacy`; `prompt optimizer without login`; `browser storage`; `Chrome extension permissions` |
| Title | `PromptPro Privacy — Local Prompt Processing Without an Account` |
| Description | `Learn how PromptPro handles prompts, browser storage, permissions, and user-triggered actions without requiring an account.` |
| H1 | `Privacy and local data handling.` |

H2 方向：`At a glance`; `Prompt handling`; `Browser storage`; `Permissions`; `Remote requests and analytics`; `User control`; `Contact`; `Install PromptPro`。

H3 方向：`storage`; `scripting`; `contextMenus`; `host permissions`；本地历史和清除扩展本地数据；用户触发的优化与模板插入。权限内容必须与发布时 Manifest 再次核对。

正文内链：

- 链接到该页：`/` Privacy Section；`/features`、`/platforms` 的边界说明；全站导航；`/zh-CN/privacy` 的语言切换。
- 该页链接到：`/features`、`/`、`/zh-CN/privacy`，以及 Chrome Web Store 和公开联系方式外链。只在正文确有上下文时链接 `/platforms`。

Open Graph：

- OG Title：`PromptPro Privacy and Local Data Handling`
- OG Description：`Understand how PromptPro handles prompt text, browser storage, permissions, and user-triggered actions.`
- OG Image 需求：英文隐私说明图，`1200 × 630`；以浏览器、本地处理、权限说明为信息方向，不使用“100% private”“fully offline”或盾牌评分，不暗示第三方安全认证。

### 5.2 中文隐私页

| 字段 | 冻结规格 |
|---|---|
| URL | `/zh-CN/privacy` |
| 页面目标 | 说明提示词处理、浏览器存储、权限用途、远程请求边界和用户控制。 |
| 搜索意图 | 用户在安装前核查 PromptPro 是否需要账号、如何处理输入内容及为何申请权限。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/privacy` |
| Primary Keyword | `本地提示词处理` |
| Secondary Keywords | `PromptPro 隐私`; `无需账号的提示词优化`; `浏览器本地存储`; `Chrome 扩展权限` |
| Title | `PromptPro 隐私说明｜本地处理与浏览器存储` |
| Description | `了解 PromptPro 的提示词处理、浏览器存储、权限用途和无需账号的使用边界。` |
| H1 | `隐私与本地数据处理。` |

H2 方向：“快速了解”“提示词处理”“浏览器存储”“权限说明”“远程请求与分析”“用户控制”“联系方式”“安装 PromptPro”。

H3 方向：`storage`、`scripting`、`contextMenus`、主机权限；本地历史和清除扩展本地数据；用户触发的优化与模板插入。权限内容必须与发布时 Manifest 再次核对。

正文内链：

- 链接到该页：`/zh-CN` Privacy Section；`/zh-CN/features`、`/zh-CN/platforms` 的边界说明；全站导航；`/privacy` 的语言切换。
- 该页链接到：`/zh-CN/features`、`/zh-CN`、`/privacy`，以及 Chrome Web Store 和公开联系方式外链。只在正文确有上下文时链接 `/zh-CN/platforms`。

Open Graph：

- OG Title：`PromptPro 隐私与本地数据处理`
- OG Description：`了解 PromptPro 如何处理提示词、浏览器存储、权限和用户主动触发的操作。`
- OG Image 需求：中文隐私说明图，`1200 × 630`；素材和表述限制与英文隐私页一致。

## 6. Platforms 页面规格

平台状态是产品事实与验证信息，不是 SEO 关键词承诺。页面不得使用 `Supports 12 AI platforms`、“支持 12 个 AI 平台”、`works everywhere`、“稳定支持全部平台”或相似文案。

平台页必须解释两组状态：

- `Historically verified` / “历史验证”：有历史验证依据，但当前验证周期未复测；
- `Configured · Not verified` / “代码配置 · 未验证”：源码或 Manifest 中已配置，但当前版本没有足够的真实验证证据。

平台可用性取决于当前扩展版本和对应网站页面结构；配置不保证稳定体验。未来真实 Chrome 验证更新时，先更新事实与验证文档，再更新页面状态和 metadata。

### 6.1 English Platforms

| 字段 | 冻结规格 |
|---|---|
| URL | `/platforms` |
| 页面目标 | 说明 PromptPro 的平台配置范围、验证等级和页面结构变化带来的使用边界。 |
| 搜索意图 | 用户核查 PromptPro 是否可尝试用于特定 AI 网站，以及该平台状态的证据等级。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/zh-CN/platforms` |
| Primary Keyword | `AI website prompt tool` |
| Secondary Keywords | `ChatGPT prompt optimizer extension`; `AI platform compatibility`; `prompt tool platform status`; `supported AI websites` |
| Title | `PromptPro Platforms — AI Website Compatibility and Verification Status` |
| Description | `See PromptPro’s platform status, including historically verified platforms and configured sites that have not been verified in the current version.` |
| H1 | `PromptPro on supported AI websites.` |

H2 方向：`Platform availability`; `Historically verified`; `Configured · Not verified`; `What platform status means`; `What to expect when sites change`; `Related PromptPro resources`。

H3 方向：具体平台名称仅作为当前状态卡片标题；状态、验证周期说明、页面结构风险和使用边界。未验证平台不创建独立详情页，也不为平台名称拼接批量 SEO H3 文案。

正文内链：

- 链接到该页：`/` Platform Section；`/features`、`/templates` 的平台上下文；全站导航；`/zh-CN/platforms` 的语言切换。
- 该页链接到：`/privacy`、`/features`、`/templates`、`/`、`/zh-CN/platforms`，以及 Chrome Web Store 外链。

Open Graph：

- OG Title：`PromptPro Platform Compatibility and Verification Status`
- OG Description：`Review historically verified platforms and sites that are configured but not verified in the current version.`
- OG Image 需求：英文平台状态图，`1200 × 630`；清楚显示两种状态分组和文字 Badge。平台 Logo 仅作识别，不得用 Logo 集合暗示全部稳定支持，也不得写平台总数。

### 6.2 中文平台页

| 字段 | 冻结规格 |
|---|---|
| URL | `/zh-CN/platforms` |
| 页面目标 | 说明 PromptPro 的平台配置范围、验证等级和页面结构变化带来的使用边界。 |
| 搜索意图 | 用户核查 PromptPro 是否可尝试用于特定 AI 网站，以及该平台状态的证据等级。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/platforms` |
| Primary Keyword | `AI 网站提示词工具` |
| Secondary Keywords | `ChatGPT 提示词优化`; `AI 平台兼容性`; `提示词工具平台状态`; `AI 网站适配` |
| Title | `PromptPro 平台状态｜AI 网站适配与验证说明` |
| Description | `查看 PromptPro 的平台适配状态，区分历史验证平台和当前版本尚未验证的代码配置平台。` |
| H1 | `了解 PromptPro 的平台适配状态。` |

H2 方向：“平台可用性”“历史验证”“代码配置 · 未验证”“平台状态代表什么”“网站变化时的使用边界”“相关 PromptPro 页面”。

H3 方向：具体平台名称仅作为当前状态卡片标题；状态、验证周期说明、页面结构风险和使用边界。未验证平台不创建独立详情页，也不为平台名称拼接批量 SEO H3 文案。

正文内链：

- 链接到该页：`/zh-CN` Platform Section；`/zh-CN/features`、`/zh-CN/templates` 的平台上下文；全站导航；`/platforms` 的语言切换。
- 该页链接到：`/zh-CN/privacy`、`/zh-CN/features`、`/zh-CN/templates`、`/zh-CN`、`/platforms`，以及 Chrome Web Store 外链。

Open Graph：

- OG Title：`PromptPro 平台适配与验证状态`
- OG Description：`查看历史验证平台，以及当前版本中代码已配置但尚未验证的平台。`
- OG Image 需求：中文平台状态图，`1200 × 630`；分组、Badge 和平台承诺限制与英文平台页一致。

## 7. Templates 页面规格

Templates 页的关键词方向是 `AI prompt templates` / “AI 提示词模板”，但页面只展示经核对的真实分类、场景和使用方式。禁止承诺模板数量、编造模板内容、展示用户私有模板、优化历史、收藏量、下载量或使用次数。

### 7.1 English Templates

| 字段 | 冻结规格 |
|---|---|
| URL | `/templates` |
| 页面目标 | 展示真实模板分类、任务场景、搜索/变量/插入流程和平台使用边界。 |
| 搜索意图 | 用户寻找可复用的 AI 提示词模板和写作、工作、编程等任务起点。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/zh-CN/templates` |
| Primary Keyword | `AI prompt templates` |
| Secondary Keywords | `bilingual AI prompts`; `writing prompts`; `coding prompts`; `prompt template library` |
| Title | `AI Prompt Templates for Writing, Coding, and More | PromptPro` |
| Description | `Explore bilingual prompt templates for writing, work, coding, translation, marketing, academic, analysis, and creative tasks.` |
| H1 | `Bilingual prompt templates for everyday AI work.` |

H2 方向：`Find a template for the task`; `Template categories`; `How to use templates in PromptPro`; `A bilingual template workflow`; `Platform availability`; `Start with PromptPro`。

H3 方向：`Writing`; `Workplace`; `Coding`; `Translation`; `Marketing`; `Academic`; `Analysis`; `Creative`；搜索、查看、填写变量、插入或复制步骤。只有真实、审核过的模板示例才能成为 H3 下内容，不创建空分类页。

正文内链：

- 链接到该页：`/` Template Section；`/features` 的模板功能；`/platforms` 的相关入口；全站导航；`/zh-CN/templates` 的语言切换。
- 该页链接到：`/features`、`/platforms`、`/`、`/zh-CN/templates`，以及 Chrome Web Store 外链；仅在有自然隐私上下文时链接 `/privacy`。

Open Graph：

- OG Title：`Bilingual AI Prompt Templates | PromptPro`
- OG Description：`Browse template categories for writing, work, coding, translation, marketing, academic, analysis, and creative tasks.`
- OG Image 需求：英文模板分类图，`1200 × 630`；可显示八个真实分类名称或真实扩展模板界面，不出现模板数量、用户收藏量或编造的模板正文。

### 7.2 中文模板页

| 字段 | 冻结规格 |
|---|---|
| URL | `/zh-CN/templates` |
| 页面目标 | 展示真实模板分类、任务场景、搜索/变量/插入流程和平台使用边界。 |
| 搜索意图 | 用户寻找可复用的 AI 提示词模板和写作、职场、编程等任务起点。 |
| 是否允许索引 | 是 |
| 对应语言页面 | `/templates` |
| Primary Keyword | `AI 提示词模板` |
| Secondary Keywords | `双语提示词`; `写作提示词`; `编程提示词`; `提示词模板库` |
| Title | `AI 提示词模板｜写作、编程与双语场景 | PromptPro` |
| Description | `浏览写作、职场、编程、翻译、营销、学术、分析和创意等双语提示词模板分类。` |
| H1 | `面向日常 AI 工作的双语提示词模板。` |

H2 方向：“为当前任务找到模板”“模板分类”“如何在 PromptPro 中使用模板”“中英双语模板工作流”“平台可用性”“开始使用 PromptPro”。

H3 方向：“写作”“职场”“编程”“翻译”“营销”“学术”“分析”“创意”；搜索、查看、填写变量、插入或复制步骤。只有真实、审核过的模板示例才能成为 H3 下内容，不创建空分类页。

正文内链：

- 链接到该页：`/zh-CN` Template Section；`/zh-CN/features` 的模板功能；`/zh-CN/platforms` 的相关入口；全站导航；`/templates` 的语言切换。
- 该页链接到：`/zh-CN/features`、`/zh-CN/platforms`、`/zh-CN`、`/templates`，以及 Chrome Web Store 外链；仅在有自然隐私上下文时链接 `/zh-CN/privacy`。

Open Graph：

- OG Title：`双语 AI 提示词模板｜PromptPro`
- OG Description：`浏览写作、职场、编程、翻译、营销、学术、分析和创意等真实模板分类。`
- OG Image 需求：中文模板分类图，`1200 × 630`；分类、素材和数量限制与英文模板页一致。

## 8. Schema 规划

### 8.1 页面级 Schema Matrix

| 页面 | WebSite | Organization | SoftwareApplication | FAQPage | BreadcrumbList |
|---|---|---|---|---|---|
| `/` | 使用 | 不使用 | 使用 | 不使用 | 不使用 |
| `/zh-CN` | 使用 | 不使用 | 使用 | 不使用 | 不使用 |
| `/features` | 不使用 | 不使用 | 不重复 | 不使用 | 使用 |
| `/zh-CN/features` | 不使用 | 不使用 | 不重复 | 不使用 | 使用 |
| `/privacy` | 不使用 | 不使用 | 不使用 | 不使用 | 使用 |
| `/zh-CN/privacy` | 不使用 | 不使用 | 不使用 | 不使用 | 使用 |
| `/platforms` | 不使用 | 不使用 | 不使用 | 不使用 | 使用 |
| `/zh-CN/platforms` | 不使用 | 不使用 | 不使用 | 不使用 | 使用 |
| `/templates` | 不使用 | 不使用 | 不使用 | 不使用 | 使用 |
| `/zh-CN/templates` | 不使用 | 不使用 | 不使用 | 不使用 | 使用 |

### 8.2 使用理由与限制

#### WebSite

- 只在两个语言首页使用，用于标识各语言版本的网站入口、名称、URL 和语言。
- 不添加 `SearchAction`，因为官网 MVP 没有站内搜索功能。
- 中英文节点使用对应页面语言和 URL，不把未来语言写入 `inLanguage`。

#### Organization

- MVP 不使用。当前上游文档没有冻结可在页面中完整展示的法定主体、组织名称、正式地址、社交账号或组织联系信息。
- PromptPro 产品品牌不自动等于可声明的 Organization。未来只有在页面公开相同主体信息且完成事实核对后再评估。

#### SoftwareApplication

- 只在两个语言首页使用，首页是产品实体的主要说明页；内容页不重复输出同一产品实体，避免维护漂移。
- 只使用页面可见且已确认的最小事实，例如产品名称、当前语言描述、`applicationCategory`、作为 Chrome 扩展的应用形态和正式产品 URL。
- 在 Chrome Web Store URL 和线上版本复核前，不输出不确定的 `downloadUrl` 或 `softwareVersion`。
- 不输出 `aggregateRating`、`review`、安装量、虚构 `offers`、价格、平台数量、模板数量、未经确认的 Chrome 最低版本或“所有操作系统支持”。
- `featureList` 仅可列出页面正文中真实可见的已确认能力，不添加规划功能。

#### FAQPage

- 当前 Core product pages 不使用。FAQ 页面属于 IA v2 planned page，只有真实展示完整问题和答案后才评估 FAQPage。
- 不为了获得搜索结果展示而创建隐藏 FAQ、把普通标题改造成问答，或在 JSON-LD 中加入页面不存在的问答。
- 将来只有页面真实展示完整问题和答案，并符合届时搜索引擎规范时，才重新评估。

#### BreadcrumbList

- 四类内容页的中英文版本使用，用于表达“当前语言首页 → 当前内容页”的可见层级。
- 首页不使用，因为首页没有上级页面。
- 面包屑必须在页面中可见或至少与可见导航层级一致；每个节点使用当前语言名称和规范 URL，不跨语言混合。
- 结构固定为两级，不编造不存在的中间栏目或未来页面。

## 9. hreflang 与 canonical 规划

### 9.1 语言映射

| English URL | 简体中文 URL | `hreflang="en"` | `hreflang="zh-CN"` | `hreflang="x-default"` |
|---|---|---|---|---|
| `/` | `/zh-CN` | `https://{siteOrigin}/` | `https://{siteOrigin}/zh-CN` | `https://{siteOrigin}/` |
| `/features` | `/zh-CN/features` | `https://{siteOrigin}/features` | `https://{siteOrigin}/zh-CN/features` | `https://{siteOrigin}/features` |
| `/privacy` | `/zh-CN/privacy` | `https://{siteOrigin}/privacy` | `https://{siteOrigin}/zh-CN/privacy` | `https://{siteOrigin}/privacy` |
| `/platforms` | `/zh-CN/platforms` | `https://{siteOrigin}/platforms` | `https://{siteOrigin}/zh-CN/platforms` | `https://{siteOrigin}/platforms` |
| `/templates` | `/zh-CN/templates` | `https://{siteOrigin}/templates` | `https://{siteOrigin}/zh-CN/templates` | `https://{siteOrigin}/templates` |

### 9.2 冻结规则

1. 每个英文和中文页面都输出完整、双向、对称的 alternate 集合，并包含自身。
2. `x-default` 指向同一页面组的英文版本。英语作为未匹配语言的默认内容，不代表其他规划语言已支持。
3. 根路径 `/` 直接承载默认英文首页，是英文页面的规范 URL；不生成 `/`，并进入 sitemap。
4. 每页使用自引用 canonical：英文页 canonical 到自身英文 URL，中文页 canonical 到自身中文 URL。
5. alternate 与 canonical 使用绝对 HTTPS URL、同一正式 Origin 和统一无尾斜杠规范。
6. `ja`、`ko`、`de`、`fr`、`es` 不加入 hreflang。只有对应页面完成本地化内容、metadata、事实审查和验收后，才能按语言逐组加入。
7. 页面不存在或仍是 TODO 时，不发布该语言 alternate；进入发布范围的页面必须同时具备完整中英文内容，避免不对称 hreflang。
8. 语言切换链接与 hreflang 映射必须一致，优先切换到当前内容页的对应语言版本，不统一跳回语言首页。

## 10. Open Graph 全局规则

1. 每页使用本 Matrix 中的本地化 OG Title、OG Description 和自有规范 URL。
2. 英文与中文使用独立图片或同一无文字安全底图；如果图片包含文字，必须按语言分别制作，不能在中文页复用英文宣传文字。
3. 建议尺寸为 `1200 × 630`，安全区内保留产品名称和页面主题；最终文件格式、压缩和绝对 URL 在素材阶段冻结。
4. 使用 `og:type = website`；当前没有文章、作者或发布时间模型，不伪装成 Article。
5. 首页图片可以使用经确认的真实扩展截图；内容页可以使用真实截图或克制的结构图。不得泄露真实用户提示词、模板、历史或浏览器本地数据。
6. 平台页图片必须显示验证状态，模板页图片不得显示数量，隐私页图片不得使用绝对隐私承诺。
7. Open Graph 文案不承担正文没有的营销承诺；OG Image 不是替代可索引 HTML 内容的载体。

## 11. Sitemap 冻结规格

| URL | 进入 sitemap | priority | changefreq | lastmod 触发条件 |
|---|---|---:|---|---|
| `/` | 是 | `1.0` | 不输出 | 首页内容、产品定位或主要 CTA 实质更新 |
| `/zh-CN` | 是 | `1.0` | 不输出 | 中文首页内容、产品定位或主要 CTA 实质更新 |
| `/features` | 是 | `0.8` | 不输出 | 功能事实或页面正文实质更新 |
| `/zh-CN/features` | 是 | `0.8` | 不输出 | 中文功能事实或页面正文实质更新 |
| `/privacy` | 是 | `0.6` | 不输出 | 数据处理、权限、隐私政策或页面正文实质更新 |
| `/zh-CN/privacy` | 是 | `0.6` | 不输出 | 中文数据处理、权限、隐私政策或页面正文实质更新 |
| `/platforms` | 是 | `0.7` | 不输出 | 平台验证状态、配置范围或边界实质更新 |
| `/zh-CN/platforms` | 是 | `0.7` | 不输出 | 中文平台验证状态、配置范围或边界实质更新 |
| `/templates` | 是 | `0.8` | 不输出 | 真实分类、示例或使用流程实质更新 |
| `/zh-CN/templates` | 是 | `0.8` | 不输出 | 中文分类、示例或使用流程实质更新 |

Sitemap 额外规则：

- TODO 页面、重定向 URL、未来语言、Chrome Web Store 外链和隐私静态扩展资源不进入官网 sitemap；当前实际路由 `/` 进入 sitemap。
- `lastmod` 必须来自真实内容更新时间或构建内容版本，不在每次部署时无条件刷新。
- 中英文页面独立记录 `lastmod`；只修改一种语言时，不伪造另一语言的更新时间。
- Pricing、FAQ、Support、About、Terms、Changelog 在正文完整并通过事实审核前不进入 sitemap；Use Cases 和 Blog 当前不进入 sitemap。

## 12. 发布前 SEO 验收门槛

进入 metadata、sitemap 和 JSON-LD 实现前，必须完成：

- 冻结正式 HTTPS 域名并替换 `{siteOrigin}`；
- 最终复核 Chrome Web Store URL 和线上产品版本；
- 确认计划纳入发布范围的页面均有非 TODO、语言对应且事实一致的可见内容；
- Privacy 页再次对照发布时 `src/manifest.ts`、`PRODUCT_FACTS.md` 和两份扩展隐私页；
- Platforms 页根据最新真实 Chrome 验证更新状态，不把配置当作稳定支持；
- Templates 页只展示真实分类和经审核示例，不承诺总数或收藏量；
- 冻结真实截图和 OG 图片，清除用户数据并记录素材版本；
- 检查每页一个 H1、H2/H3 不跳级、Title/Description 不重复、不关键词堆叠；
- 检查已完成页面的 canonical 自引用、双向 hreflang 和 `x-default` 指向对应英文页；
- 检查 Schema 与可见正文一致，不存在隐藏 FAQ、评分、价格、数量或未验证能力；
- 检查 sitemap 只包含已完成并允许索引的规范 URL，且 `lastmod` 反映真实内容变化。

## 13. 本阶段不包含

- 不修改 `website/src/app/sitemap.ts` 或任何 sitemap 实现；
- 不修改 metadata、canonical、alternate 或 Open Graph 代码；
- 不修改页面、组件、样式或路由代码；
- 不添加 JSON-LD 代码；
- 不添加 SEO 插件或依赖；
- 不创建未来语言页面；
- 不创建平台详情页、模板分类页、FAQ 页或其他 SEO 门户页；FAQ 只有在真实内容完成后才进入页面开发。
- 不部署网站，也不把本规格视为已经上线的 SEO 实现。

## 14. 下一阶段建议

下一阶段建议先执行“SEO 实现前置核对”，而不是立即批量写 metadata：

1. 冻结正式域名、生产 Origin 与 Chrome Web Store 正式 URL；
2. 完成真实截图和五类本地化 OG 图片素材清单；
3. 将本 Matrix 的页面内容映射到可复用的类型化 SEO 配置，但先不扩展未来语言；
4. 只为已完成并通过事实审核的页面实现 metadata、canonical、alternate、Open Graph 和 sitemap；
5. 最后实现最小 Schema：双语首页的 `WebSite`/`SoftwareApplication`，以及实际完成页面所需的 `BreadcrumbList`；FAQPage 仅在真实 FAQ 内容存在时评估；
6. 用构建结果和渲染后的 HTML 验证 Title、Description、H1、canonical、hreflang、OG、JSON-LD 与 sitemap，再进行真实浏览器和搜索引擎工具检查。
