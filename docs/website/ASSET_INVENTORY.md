# PromptPro 官网 MVP 素材清单

更新时间：2026-08-23  
阶段：官网设计准备阶段 / Asset Inventory  
状态：素材清单已冻结；真实截图版本、最终脱敏结果和 OG 成品仍待上线前确认

本文档只冻结官网 MVP 所需素材、来源、用途、处理规则和缺口，不创建或修改图片，不实现页面、CSS、SEO 或 Open Graph 代码。

## 1. 结论摘要

当前仓库已有可作为设计参考和后续截图输入的素材，但还没有一套可以直接视为官网最终发布资产的完整素材包：

- `store-assets/` 有 13 张 PNG，包括 5 张 Chrome Web Store 截图、2 张宣传图和 6 张历史/变体截图；全部为 2026-08-15 文件时间，尺寸已盘点，但来源版本和最终脱敏记录没有随文件冻结。
- `src/assets/icons/` 有插件图标 SVG 和 16/48/128px PNG；它们可证明扩展图标来源，但官网 Logo 仍需要“图标 + PromptPro”组合，不应直接把小尺寸扩展图标当作完整 Logo。
- `website/public/favicon.svg` 已存在，为 64 × 64 viewBox 的深色底白色 P 图形；它与当前紫色渐变插件图标不是同一图形系统，需在实现前确认是否保留或替换。
- `public/` 只有扩展隐私页和 locale 消息，不包含官网产品截图、Logo、OG 图片或平台 Logo 素材。
- `website/public/` 当前只有 `favicon.svg`，没有 Hero Screenshot、Product Preview、平台视觉、模板视觉或 OG 图片。
- 当前官网 MVP 的 10 个正式 URL 仅为 `/`、`/features`、`/privacy`、`/platforms`、`/templates` 及对应 `/zh-CN` 页面；因此图片素材至少需要支持英文和简体中文 OG 版本，页面内产品截图可以共享无文字或可读性足够的真实界面素材。

在页面开发前，以下项目必须补齐：一套以当前扩展版本为来源、使用安全测试数据重新截取并完成检查的产品截图；英文/中文五类 OG 图片；最终 Logo/Wordmark 处理；favicon 取舍和文件命名；素材版权和发布路径记录。

## 2. 素材来源盘点

### 2.1 `store-assets/`

| 文件路径 | 尺寸 | 文件用途/内容 | 当前状态 | 是否可用于官网 |
|---|---:|---|---|---|
| `store-assets/cws-screenshot-01-library.png` | 1280 × 800 | Chrome Web Store 用的模板库/Popup 主视图 | 真实扩展界面候选；包含平台标签、模板搜索和模板列表；版本、测试数据和脱敏记录未冻结 | 可作为设计参考和候选 Hero/Product Preview；重新确认后可用 |
| `store-assets/cws-screenshot-02-optimize.png` | 1280 × 800 | 优化前后对比、Review optimization 流程 | 真实流程候选；画面包含示例英文提示词；来源版本未冻结 | 可作为优化流程候选；需用安全测试数据重新截图或逐项复核 |
| `store-assets/cws-screenshot-03-search.png` | 1280 × 800 | 模板搜索结果 | 真实功能候选；画面可见搜索词和模板结果，且存在可能随版本变化的模板数量文案 | 可作为搜索功能候选；数量和示例数据需复核 |
| `store-assets/cws-screenshot-04-variables.png` | 1280 × 800 | 模板变量填写和生成插入 | 真实功能候选；包含 URL/命令样例和页面环境信息，当前不应直接视为脱敏完成 | 可作为变量流程候选；需重新截图或严格脱敏 |
| `store-assets/cws-screenshot-05-assets.png` | 1280 × 800 | 个人资产/自定义模板相关界面 | 真实功能候选；功能范围需与当前 Popup 实现和 Copy Deck 对照 | 可作为 Features/Product Preview 候选；需当前版本复核 |
| `store-assets/promo-marquee-1400x560.png` | 1400 × 560 | Chrome Web Store 横幅宣传图 | 商店宣传素材；不是完整产品界面截图，文字和构图服务于商店而非官网响应式容器 | 不直接作为 Hero Screenshot；可作为宣传构图参考，必要时重新制作官网版 |
| `store-assets/promo-small-440x280-final.png` | 440 × 280 | Chrome Web Store 小型宣传图 | 带 `final` 命名的历史宣传变体；没有官网使用说明和语言版本记录 | 不冻结为官网资产；仅作参考，需重新确认 |
| `store-assets/promo-small-440x280.png` | 440 × 280 | Chrome Web Store 小型宣传图 | 旧/非 final 变体；与同尺寸 `final` 文件并存，选用关系未记录 | 不直接使用；仅作历史参考 |
| `store-assets/screenshot-01-optimize.png` | 1280 × 800 | 历史优化流程截图 | 历史命名；与 CWS 优化截图存在潜在重复，版本未冻结 | 仅作候选和对比，不作为最终资产 |
| `store-assets/screenshot-02-library-v2.png` | 1280 × 800 | 历史模板库 v2 截图 | 历史变体；文件较大，版本和 UI 差异未记录 | 仅作候选和对比，不作为最终资产 |
| `store-assets/screenshot-02-library.png` | 1280 × 800 | 历史模板库截图 | 历史变体；与 v2 和 CWS 版本存在重复命名语义 | 仅作候选和对比，不作为最终资产 |
| `store-assets/screenshot-03-privacy.png` | 1280 × 800 | 历史隐私/本地处理相关截图 | 真实界面候选，但官网 Privacy 页不要求产品截图，且隐私视觉不能造成绝对安全承诺 | 不用于 Privacy 主视觉；仅作参考，除非后续验证其内容与事实一致 |
| `store-assets/screenshot-03-search-v2.png` | 1280 × 800 | 历史搜索 v2 截图 | 历史变体；版本、数据和文案未冻结 | 仅作候选和对比，不作为最终资产 |
| `store-assets/screenshot-05-variables-v2.png` | 1280 × 800 | 历史变量流程 v2 截图 | 历史变体；与 CWS 变量截图存在重复用途 | 仅作候选和对比，不作为最终资产 |

这些 PNG 均为 16:10，适合 Design System 规定的 Desktop Screenshot 首选槽比例。但“尺寸匹配”不等于“官网发布确认”：使用前仍需记录当前扩展版本、Chrome 环境、截图日期、语言、测试数据、脱敏检查和最终文件名。

### 2.2 `src/assets/icons/`

| 文件路径 | 尺寸/类型 | 文件用途 | 当前状态 | 是否可用于官网 |
|---|---:|---|---|---|
| `src/assets/icons/icon.svg` | SVG，128 × 128 viewBox | 插件主图标源，紫色/靛蓝渐变、白色提示符和暖黄色星光 | 当前扩展品牌图标源；适合生成或作为官网 Logo 图标输入，但官网不能依赖扩展构建路径 | 可作为官网品牌图标输入；实现时应复制/导出到官网公开资源并保留源文件，不修改本阶段文件 |
| `src/assets/icons/icon16.png` | 16 × 16 | Manifest、浏览器小尺寸图标 | 当前 Manifest 图标 | 仅适合作为扩展图标；不适合作为官网 Header Logo 或 OG 主图 |
| `src/assets/icons/icon48.png` | 48 × 48 | Manifest、扩展管理页面图标 | 当前 Manifest 图标 | 可作小尺寸平台/扩展识别参考，不作为官网主 Logo |
| `src/assets/icons/icon128.png` | 128 × 128 | Manifest、Chrome Web Store/扩展大图标 | 当前 Manifest 图标 | 可作官网图标输入或导出源；不应直接拉伸到 Logo Wordmark |

### 2.3 `public/`

| 文件路径 | 文件用途 | 当前状态 | 是否可用于官网 |
|---|---|---|---|
| `public/privacy_en.html` | Chrome 扩展英文隐私说明页 | 扩展静态页面，不是图片素材；内容是 Privacy 页面事实来源之一 | 不作为图片；可作为官网 Privacy 文案核对来源 |
| `public/privacy_zh.html` | Chrome 扩展中文隐私说明页 | 扩展静态页面，不是图片素材；内容是 Privacy 页面事实来源之一 | 不作为图片；可作为官网 Privacy 文案核对来源 |
| `public/_locales/*/messages.json` | 扩展国际化消息 | 文案/locale 数据，不是官网图片素材；正式官网语言仍以 `en`、`zh-CN` 为准 | 不作为图片；可作产品名称和界面文案核对来源 |

`public/` 中没有可直接用于官网的截图、Logo、favicon 或 OG 图片。

### 2.4 `website/public/`

| 文件路径 | 尺寸/类型 | 文件用途 | 当前状态 | 是否可用于官网 |
|---|---:|---|---|---|
| `website/public/favicon.svg` | SVG，64 × 64 viewBox | 官网 favicon 入口 | 已存在；深色圆角方形底、白色 P 图形，和 `src/assets/icons/icon.svg` 的紫色渐变提示符图标不完全一致 | 可暂时作为 favicon；需在官网视觉实现前确认品牌一致性，必要时重新导出同源图标 |

`website/public/` 目前没有其他产品图片或社交分享图片。文件路径、语言命名和公开 URL 仍需在实现阶段按本清单冻结。

### 2.5 Chrome Web Store 已有素材

仓库存在一组以 `cws-` 和 `promo-` 命名的 Chrome Web Store 素材，因此可以确认“仓库内已有商店素材”。但本次没有把文件直接等同于当前线上 Chrome Web Store 素材：仓库没有记录线上商店 URL、线上版本、审核状态、发布时间或素材版权说明。最终官网使用前应以当前 `1.1.0` 工作区构建/真实 Chrome 截图和最终商店链接再次核对。

## 3. Logo、Icon、Favicon

### 3.1 产品 Logo

官网 Logo 已冻结为 `PromptPro Logo Final`：紫色渐变圆角方形背景、白色 P 和隐藏式琥珀金 Tail。唯一 authoritative Master 为 `assets/brand/promptpro-icon.svg`，官网以该图形与 `PromptPro` 文字组合使用。

| 使用场景 | 建议尺寸/要求 | 当前来源 | 状态 |
|---|---|---|---|
| Desktop Header | 图标建议 28px；组合 Logo 保持清晰、不可拉伸；触控区域按至少 44px 处理 | `website/public/favicon.svg` + 文本 `PromptPro` | 已切换 Final |
| Mobile Header | 图标建议 28px；保留文字，不只显示图标 | 同上 | 已切换 Final |
| Footer | 图标可约 32px；配合站点信息 | 同上 | 已切换 Final |
| OG Image | 建议在 1200 × 630 安全区内使用清晰 Logo | `assets/brand/promptpro-icon.svg` | Logo Master 已冻结；OG 版式另行处理 |

约束：不重新着色、不添加强阴影、不拉伸；图标可视宽度周围保留至少 25% 安全区。是否把 Logo 导出为 SVG、PNG 或由官网组件组合，应在实现阶段决定，但不能引用扩展构建后的 `dist-new/` 产物作为源码资产。

### 3.2 Chrome Extension Icon

Chrome 扩展图标由 Manifest 使用：

- `src/assets/icons/icon16.png`：16 × 16；
- `src/assets/icons/icon48.png`：48 × 48；
- `src/assets/icons/icon128.png`：128 × 128；
- 源文件：`src/assets/icons/icon.svg`，128 × 128 viewBox。

这些尺寸满足扩展 Manifest/浏览器场景，但不满足官网完整 Logo 的语义和可读性要求。官网可以复用同一图形作为品牌识别来源，不应把扩展图标本身当作带产品名称的 Logo。

### 3.3 Favicon

当前 favicon 为 `website/public/favicon.svg`，使用与 `assets/brand/promptpro-icon.svg` 相同的 `PromptPro Logo Final` 矢量结构，viewBox 为 `0 0 128 128`。官网 Header、Footer 和 metadata icon 均通过该 favicon 入口使用 Final Logo。

## 4. 产品截图规划

### 4.1 统一截图状态

官网所有产品截图必须来自真实扩展功能，不使用 AI 生成 UI 作为功能证据。当前产品事实基线为扩展版本 `1.1.0`，但仓库截图没有把版本写入文件名或元数据，因此下列现有图片统一标记为“候选，不冻结”。

截图发布前必须：

- 使用当前待发布扩展版本，在真实 Chrome 中重新打开对应支持页面；
- 使用安全、虚构、短小的测试提示词和 URL，不使用用户真实内容；
- 清理邮箱、头像、账号名、历史记录、License、浏览器个人资料和通知；
- 复核画面中的平台标签、模板数量、版本文字和功能名称是否仍与产品事实一致；
- 记录截图来源版本、平台、语言、Chrome 环境、日期、脱敏结果和文件用途；
- 保留完整 UI 上下文，不用 `cover` 隐藏输入框、优化结果、模板入口或状态说明。

### 4.2 Hero Screenshot

| 项目 | 冻结规划 |
|---|---|
| 使用哪类真实截图 | 优先使用 `cws-screenshot-01-library.png` 类型的“AI 页面 + PromptPro Popup 模板库”完整画面；若当前版本 UI 已变化，以重新截图后的模板库主视图替换 |
| 展示目标 | 让用户一眼理解 PromptPro 在熟悉的 AI 工作流中提供模板搜索、复用和插入，而不是展示抽象营销插画 |
| Desktop 尺寸 | 原始截图目标 1280 × 800（16:10）；Hero 右栏按原比例缩放，容器不强制裁切；Desktop 首选槽比例为 16:10 |
| Mobile 展示方式 | CTA 后单列纵向展示，宽度不超过内容容器，按原始比例自然缩放；360px/390px 不使用横向滚动，不缩小到核心文字不可读 |
| 是否裁剪 | 不裁剪核心 UI；允许在重新截图阶段减少无关浏览器空白，但必须记录裁剪边界并保持画面上下文可理解；不使用 CSS `cover` |
| 当前可用性 | 现有截图可作候选/设计参考；版本、脱敏、数量文案和最终文件名未冻结 |

### 4.3 Product Preview

Product Preview 需要覆盖以下真实功能证明，建议首页最多并列两张，其他截图纵向排列或移至 Features：

| 截图主题 | 首选来源 | 证明内容 | 是否真实功能证明 | 是否需要脱敏 | 是否需要重新截图 |
|---|---|---|---|---|---|
| Popup / 模板库 | `cws-screenshot-01-library.png` | Popup、平台识别、模板分类、搜索入口和插入入口 | 是，前提是当前版本复核 | 是；清理账号/个人浏览器信息，核对模板与平台文案 | 是，建议按当前版本重拍 |
| Prompt 优化流程 | `cws-screenshot-02-optimize.png` 或 `screenshot-01-optimize.png` | 用户输入原始提示词、查看优化结果、确认使用或保留原文 | 是，前提是当前版本复核 | 是；使用安全测试提示词，不能含真实业务内容 | 是，优先只保留一套当前版本截图 |
| 模板搜索 | `cws-screenshot-03-search.png` 或 `screenshot-03-search-v2.png` | 按任务/关键词搜索模板并查看结果 | 是，前提是当前版本复核 | 是；避免把可变模板总数作为产品承诺 | 是，数量和搜索结果需复核 |
| 变量填写 | `cws-screenshot-04-variables.png` 或 `screenshot-05-variables-v2.png` | 填写模板变量、查看预览并生成/插入 | 是，前提是当前版本复核 | 是；现有 URL/命令样例需替换为明确安全样例 | 是，建议重拍 |
| 设置 / 历史 | 当前没有单独冻结的官网候选图 | 说明设置、优化历史和本地数据管理入口 | 可由真实功能证明，但不是首页必需截图 | 是；不得显示真实历史、账号或 License | 需要；若 Features 页面确实需要再制作 |
| 个人资产 / 自定义模板 | `cws-screenshot-05-assets.png` | 自定义模板、个人资产或版本历史相关能力 | 是，前提是与当前实现核对 | 是；不得显示真实个人资产 | 需要；仅在功能页需要时保留 |

当前建议的最小官网截图包为：Hero 模板库 1 张、优化流程 1 张、搜索/变量流程 2 张、可选个人资产 1 张。设置/历史不作为首页必需素材，Privacy 页不使用产品截图。

### 4.4 版本与真实性规则

现有截图中可见的示例内容和数字不能直接成为官网事实。例如搜索截图中出现的“66 bilingual templates”应在发布前以当前真实模板数组核对；如果数字不再准确，重拍时移除或改为不承诺数量的画面。截图可以证明界面流程存在，但不能单独证明所有列出的平台当前已稳定支持；平台状态仍以 `PRODUCT_FACTS.md` 和真实 Chrome 验证为准。

## 5. 页面素材映射

| 页面 | 必需素材 | 可选素材 | 当前可用状态与限制 |
|---|---|---|---|
| 首页 `/`、`/zh-CN` | Hero Screenshot；至少 1 张 Feature/Product Preview；Logo；favicon；对应语言 OG | 搜索、变量或个人资产截图；模板分类辅助视觉 | 真实截图候选已有；Hero 最终版本和双语 OG 缺失 |
| Features `/features` | Logo；favicon；优化流程、Popup/模板库、搜索、变量等真实功能截图 | 设置/历史、个人资产截图 | 现有截图可覆盖大部分能力；需按当前版本重拍并脱敏 |
| Privacy `/privacy` | Logo；favicon；本地处理/权限的 HTML 说明 | 克制的辅助视觉或结构图 | 不需要产品截图；不得用盾牌、评分或“100% private/fully offline”视觉 |
| Platforms `/platforms` | Logo；favicon；文字状态 Badge；必要的平台识别图形 | 平台 Logo 或简洁状态结构图 | 当前没有冻结的平台 Logo 资源；平台图形不能暗示全部稳定支持，状态必须有文字 |
| Templates `/templates` | Logo；favicon；8 个真实分类名称；至少一组真实模板界面/示例截图 | 分类卡片图标或模板库截图 | 分类本身来自代码事实；不显示未核实模板总数，不索引用户私有模板 |
| 全部正式语言页 | 当前语言 Logo/导航资源；当前语言 alt；当前语言 OG | 共用无语言界面截图 | 正式语言仅 `en`、`zh-CN`；含文字的 OG 必须分别制作 |

页面素材优先级：真实产品截图 > 克制的结构/状态视觉 > 纯装饰图形。首版不需要大幅插画，也不应为填充空白临时生成图片。

## 6. OG Image 规划

### 6.1 通用规格

- 尺寸冻结为 `1200 × 630`，比例约 1.91:1。
- 文字和 Logo 放在安全区内，避免社交平台裁切；不把正文信息全部嵌入图片。
- `og:type` 仍按 SEO Matrix 使用 `website`；本清单只规划图片，不修改 SEO 实现。
- 英文和中文均需独立版本；含文字的图片不得跨语言复用。
- 图片必须使用自有品牌和经确认的真实截图/结构视觉，不使用 AI 生成 UI 充当产品证据。
- 所有 OG 图片均需在发布前清除真实提示词、模板、历史、邮箱、License 和浏览器个人数据。

### 6.2 五类页面 OG 素材

下表的“需要成品”按语言计算，因此首页、Features、Privacy、Platforms、Templates 各需要英文 1 张、简体中文 1 张，共 10 张最终图片；如果实现选择无文字安全底图，也必须确认语言 metadata 与图片内容不产生误导。

| 页面 | 英文/中文需求 | 内容方向 | 是否使用产品截图 | 当前状态 |
|---|---|---|---|---|
| 首页 | `home-en`、`home-zh-CN` | PromptPro 标识、简短定位、Hero 模板库真实截图；中文版本使用中文定位 | 是，使用确认后的 Hero Screenshot | 缺失，需制作 |
| Features | `features-en`、`features-zh-CN` | 本地提示词整理、模板搜索/复用、优化流程等功能概览 | 是，优先使用优化流程与 Popup 组合；也可使用克制结构图 | 缺失，需制作 |
| Privacy | `privacy-en`、`privacy-zh-CN` | 浏览器本地处理、存储和权限说明的克制视觉 | 否，建议不用产品截图，避免截图被误读为隐私承诺 | 缺失，需制作 |
| Platforms | `platforms-en`、`platforms-zh-CN` | `Historically verified` 与 `Configured · Not verified` 两种文字状态分组 | 否，或只使用经确认的识别图形；不得用平台 Logo 集合暗示稳定支持 | 缺失，需制作 |
| Templates | `templates-en`、`templates-zh-CN` | 8 个真实模板分类或模板库界面，不显示模板总数 | 可使用确认后的模板库截图，也可用分类结构视觉 | 缺失，需制作 |

建议文件命名：`og-home-en.png`、`og-home-zh-CN.png` 等；实际公开路径和是否压缩为 WebP 需在实现阶段确认，但不能把现有商店宣传图直接改名当作五类 OG 成品。

## 7. 图片规范

以下规则来自 `DESIGN_SYSTEM.md`、`WIREFRAME_HOME.md` 和 `SEO_PAGE_MATRIX.md`，作为页面实现和素材验收的硬约束：

| 项目 | 冻结规则 |
|---|---|
| 产品截图比例 | 现有候选截图为 16:10；Desktop 首选槽为 16:10，但素材比例优先，不能为铺满槽位而变形或强裁切 |
| OG 比例 | 1200 × 630；约 1.91:1；Logo、主题文字和截图位于安全区 |
| 最大尺寸 | 产品截图源文件以 1280 × 800 为当前基准；网页显示宽度由容器控制，不通过放大低分辨率图标替代截图；OG 源文件按 1200 × 630 制作 |
| Desktop | Hero 双栏；截图按原始比例缩放；Product Preview 外层 Padding 24–32px；最多并列 2 张且必须可读 |
| Mobile | 单列；截图宽度不超过内容容器；按原始比例自然缩放；多张纵向堆叠；360px/390px 不通过裁切隐藏核心 UI |
| `object-fit` | 使用 `contain`；禁止 `cover` 裁剪输入框、优化结果、模板入口、状态和关键文字 |
| 容器 | 使用轻品牌/中性背景、边框、圆角和适度阴影；图片本身不拉伸，容器不强迫改变比例 |
| 核心 UI | 截图周围保留足够上下文；如果 UI 文字对理解关键，在图片附近提供可索引 HTML 说明 |
| Alt | 有信息价值的图片必须有简洁、准确的 alt，说明“界面 + 用途”，不重复附近标题，不堆营销关键词；纯装饰图片使用空 alt |
| 格式建议 | 源截图保留 PNG 作为无损母版；网页交付可评估 WebP/AVIF，但需保留 PNG 回退或确保浏览器/社交平台兼容；Logo/favicon 优先 SVG，需检查 SVG 安全和小尺寸识别度 |
| 禁止内容 | 不把大段营销文案嵌入截图；不使用 AI 生成 UI 作为功能证明；不使用 cover 隐藏核心 UI；不让图片造成页面横向滚动 |

## 8. 隐私与脱敏要求

任何进入官网或 OG 的截图不得包含：

- 用户真实提示词、真实模板正文或业务数据；
- 用户历史记录、最近使用内容、自定义模板或使用次数；
- 邮箱、头像、账号名、个人资料、通知、浏览器同步信息；
- License、订单、付款、订阅或其他授权信息；
- 真实 API Key、Token、内部 URL、客户名称、私有仓库或公司信息；
- 无法确认来源的个人数据或第三方品牌素材。

现有素材的特别检查项：

- `cws-screenshot-02-optimize.png` 类画面包含示例提示词，需确认不是用户内容，并以安全测试文本重拍为优先方案。
- `cws-screenshot-04-variables.png` 类画面包含命令/URL 样例，发布前必须确认其为安全虚构值，不含真实服务或敏感参数。
- 搜索、模板库和资产画面中的模板名称、标签、数量和平台 Badge 可能随当前代码变化；不得通过截图固化未经复核的数字或支持承诺。
- 浏览器地址栏、扩展栏、账户状态和站点页面应使用干净测试配置；发现账号名或“Paused”等非产品必要状态时应重新截图。

## 9. 未完成素材

### 必须在页面开发前补齐

1. 当前扩展版本 `1.1.0` 的真实 Chrome 截图包，并记录平台、语言、日期、版本和测试环境。
2. 最终 Hero Screenshot：优先模板库主视图，确认 16:10、完整 UI、脱敏和当前功能事实。
3. 最终优化流程截图：确认原始提示词、优化结果和用户确认流程仍与当前实现一致。
4. 最终搜索和变量截图：清除可变数量、敏感 URL 和不必要的浏览器个人信息。
5. 是否需要设置/历史、个人资产截图的页面级决定；如果 Features 使用，制作独立的当前版本安全截图。
6. 官网可引用的 Logo/Wordmark 资源，以及与插件图标同源的 favicon 最终决定。

### 必须在 OG/页面实现前补齐

1. 英文和简体中文五类 OG 图片，共 10 张成品，尺寸 1200 × 630。
2. Privacy OG 的克制视觉，不使用绝对隐私承诺、盾牌评分或第三方认证暗示。
3. Platforms OG 的两种文字状态分组，不用平台 Logo 集合代替验证状态。
4. Templates OG 的 8 个真实分类或真实模板库界面，不显示未经核实的模板总数。
5. 所有图片的 alt 文本初稿、来源版本记录、脱敏检查记录和公开文件路径。

### 只能在上线前补充

- 最终 Chrome Web Store URL、线上商店素材/版本对应关系和安装入口复核；仓库已有 CWS 素材，但当前不能证明线上素材仍与工作区 `1.1.0` 完全一致。
- 生产域名确定后的 OG 绝对 URL、社交平台预览检查和缓存刷新。
- 发布构建后的真实浏览器标签页 favicon 检查、移动端图片可读性检查和社交平台卡片检查。
- 若平台真实验证结果改变，重新制作 Platforms 视觉和受影响页面截图；不能沿用过时的平台状态图片。

## 10. 本阶段限制与验收边界

本阶段仅新增 `docs/website/ASSET_INVENTORY.md`。没有创建图片，没有修改现有图片，没有修改 `website` 代码、CSS、SEO 实现、构建配置或扩展运行代码。现有截图的视觉检查仅用于素材盘点，不等同于当前 Chrome 功能验收，也不等同于官网发布视觉验收。

素材冻结的含义是冻结“需要什么、从哪里来、怎样使用和还缺什么”，不是宣称现有 PNG 已经可以直接上线。只有在完成当前版本真实 Chrome 截图、隐私脱敏、事实核对、双语 OG 制作和页面/社交平台视觉检查后，才可以把候选素材标记为最终发布资产。

## 11. 下一阶段建议

1. 先完成一次当前 `1.1.0` 的真实 Chrome 素材采集，只覆盖首页和 Features 所需的最小截图包；同时保留测试数据和截图记录。
2. 依据截图结果冻结 Hero、优化、搜索、变量、个人资产/历史的最终选用关系，清理重复的 `v2`/历史文件，不在本阶段删除任何旧素材。
3. 单独制作并检查 10 张双语 OG 图片；完成后再进入 SEO 实现，不要在页面代码中临时生成 OG 占位图。
4. 最后确认 Logo/Wordmark、favicon、公开资源命名和 `website/public/` 目录映射，再开始页面实现和真实浏览器响应式检查。
