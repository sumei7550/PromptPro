# PromptPro 官网 Design System

更新时间：2026-08-23

本文档冻结 PromptPro 官网 MVP 的视觉基础、设计 Token、核心组件、响应式规则和基础可访问性要求。它服务于 `en` 与 `zh-CN` 两个正式语言版本，并以 `INFORMATION_ARCHITECTURE.md`、`WIREFRAME_HOME.md` 和 `docs/seo/PRODUCT_FACTS.md` 为上游约束。本阶段只定义视觉规范，不修改 `website/` 源码，不代表正式页面已经开发或上线。

## 1. 设计目标

PromptPro 官网的视觉设计需要同时满足以下目标：

1. **清晰说明产品**：优先解释本地提示词优化、模板和平台适配，不用装饰掩盖信息。
2. **建立可信感**：隐私、平台状态和功能边界使用克制、可核验的表达。
3. **保持产品一致性**：延续插件图标和现有界面中的紫色、靛蓝色品牌识别，但不复制插件 Popup 的固定尺寸布局。
4. **服务安装转化**：Chrome Web Store 主 CTA 清晰、稳定，不使用强迫式弹窗或虚假稀缺提示。
5. **适合独立维护**：首版使用少量 Token 和组件变体，不引入重型 UI 框架或复杂主题系统。
6. **中英文同等可用**：组件不能依赖固定英文长度；中文和英文必须使用同一信息层级和状态语义。

## 2. 设计原则

### 2.1 事实优先

- 视觉层级不能把“已配置未验证”弱化成难以察觉的脚注；
- 历史验证和已配置未验证必须使用不同标签、说明和分组标题；
- 不使用用户量、评分、模板数量或平台数量作为视觉卖点，除非发布前已有当前证据；
- 真实扩展截图与装饰性插图必须明确区分。

### 2.2 内容优先

- 标题、说明、状态和 CTA 先于装饰图形；
- 正文采用高对比度中性色，不使用低对比度灰色承载关键说明；
- 页面主要阅读区域保持有限行宽；
- 每个 Section 只保留一个主要信息目标。

### 2.3 渐进增强

- 没有动画、JavaScript 或横向拖动时，核心内容仍可阅读和访问；
- Hover 只作为补充，不能成为发现链接或理解状态的唯一方式；
- `prefers-reduced-motion` 下移除非必要动画；
- 键盘操作和焦点状态与鼠标操作同等完整。

## 3. 品牌基础

### 3.1 Logo

- 官网使用 PromptPro 现有产品图标作为品牌识别来源；
- Header 使用“图标 + PromptPro”组合，不能只依赖图标表达站点身份；
- Logo 链接返回当前语言首页；
- 不拉伸、不重新着色、不添加强阴影；
- 图标安全区至少为图标可视宽度的 `25%`；
- Header 图标建议为 `28px`，Footer 可使用 `32px`；低于 `24px` 时需要单独检查识别度。

### 3.2 品牌视觉方向

现有插件图标使用紫色到靛蓝色渐变，并以暖黄色作为局部强调。官网冻结以下方向：

- 紫色/靛蓝用于主 CTA、焦点、品牌装饰和主要链接；
- 暖黄色只用于小面积品牌亮点，不用于大段正文或状态警告；
- 页面背景以白色和轻微紫灰色为主；
- 首版只提供 Light Theme，不在 MVP 中实现 Dark Theme；
- 渐变仅用于 Hero 局部背景、品牌装饰或主 CTA，不能铺满所有卡片。

## 4. 颜色系统

### 4.1 语义 Token

MVP 页面优先使用以下语义 Token。具体色阶是实现这些语义的基础值，组件不应直接散落使用未定义的新颜色。

| Token | 值 | 用途 |
|---|---|---|
| Primary | `#6D28D9` | 主 CTA、主要链接和 Focus |
| Secondary | `#4F46E5` | 品牌辅助强调、渐变终点 |
| Background | `#FFFFFF` | 页面主背景 |
| Background Subtle | `#F8FAFC` | Section 交替背景 |
| Surface | `#FFFFFF` | Card、Menu、Screenshot 容器 |
| Surface Brand | `#F5F3FF` | 轻品牌提示和选中背景 |
| Border | `#E2E8F0` | 默认边框和分隔线 |
| Text | `#0F172A` | 标题和主要正文 |
| Text Secondary | `#334155` | 普通正文 |
| Muted Text | `#64748B` | 辅助说明，不承载关键事实 |

### 4.2 品牌色

| Token | 值 | 用途 |
|---|---|---|
| `--color-brand-50` | `#F5F3FF` | 轻品牌背景、选中背景 |
| `--color-brand-100` | `#EDE9FE` | Badge 背景、Hover 辅助背景 |
| `--color-brand-200` | `#DDD6FE` | 轻边框 |
| `--color-brand-300` | `#C4B5FD` | 装饰、禁用边界辅助 |
| `--color-brand-500` | `#7C3AED` | 品牌主色、装饰 |
| `--color-brand-600` | `#6D28D9` | 主按钮默认背景 |
| `--color-brand-700` | `#5B21B6` | 主按钮 Hover、正文链接 |
| `--color-brand-800` | `#4C1D95` | 主按钮 Active、深色品牌文字 |
| `--color-indigo-600` | `#4F46E5` | 品牌渐变终点、辅助强调 |

品牌渐变冻结为：

```text
linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)
```

渐变不能用作正文背景。使用渐变的按钮必须验证白色文字在整个渐变范围内均保持足够对比度。

### 4.3 中性色

| Token | 值 | 用途 |
|---|---|---|
| `--color-white` | `#FFFFFF` | 页面、卡片和按钮文字 |
| `--color-slate-25` | `#FCFCFD` | 极浅分区背景 |
| `--color-slate-50` | `#F8FAFC` | 次级页面背景 |
| `--color-slate-100` | `#F1F5F9` | Hover 背景、分隔区域 |
| `--color-slate-200` | `#E2E8F0` | 默认边框 |
| `--color-slate-300` | `#CBD5E1` | 强边框、禁用控件 |
| `--color-slate-500` | `#64748B` | 辅助文字，仅限较大字号 |
| `--color-slate-600` | `#475569` | 正文次级信息 |
| `--color-slate-700` | `#334155` | 正文 |
| `--color-slate-900` | `#0F172A` | 标题和主要文字 |

### 4.4 状态颜色

| 语义 | 前景 | 背景 | 边框 | 使用边界 |
|---|---|---|---|---|
| Verified | `#166534` | `#F0FDF4` | `#BBF7D0` | 当前版本已完成真实验证后才可使用 |
| Historical Verified | `#1D4ED8` | `#EFF6FF` | `#BFDBFE` | 有历史验证依据，但本轮未复测 |
| Configured | `#3730A3` | `#EEF2FF` | `#C7D2FE` | 代码或 Manifest 已配置，不代表可用性验证 |
| Not Verified | `#92400E` | `#FFFBEB` | `#FDE68A` | 当前版本没有足够真实验证证据 |
| Info | `#3730A3` | `#EEF2FF` | `#C7D2FE` | 中性说明、隐私边界 |
| Error | `#B91C1C` | `#FEF2F2` | `#FECACA` | 表单或运行错误；首版少量使用 |

平台状态不能只用颜色区分，必须同时显示文字 Badge。“Configured”出现时必须同时提供“Not Verified”文字或合并为“Configured · Not verified”，不能让用户把已配置理解为已验证。当前事实基线没有本轮 Chrome 功能验证，因此 `Verified` 是保留状态，不能在发布内容中使用；不使用绿色表示历史验证，因为历史验证不等于当前稳定支持。

### 4.5 对比度要求

- 普通文字和背景至少达到 WCAG AA `4.5:1`；
- `24px` 常规或 `18.66px` 粗体以上的大文字至少达到 `3:1`；
- 图标、控件边界和焦点指示至少达到 `3:1`；
- `--color-slate-500` 不用于小于 `16px` 的关键正文；
- 禁用状态可以降低强调，但仍需可辨识，且不能承载必须完成的操作。

## 5. 字体系统

### 5.1 字体栈

首版不引入必须远程下载的 Web Font，使用系统字体以降低加载成本和隐私依赖：

```text
Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont,
"Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
Arial, sans-serif
```

如果设备没有 Inter，则自动使用系统字体。后续如引入本地托管字体，需要单独评估字体体积、中文覆盖和许可。

代码或快捷键使用：

```text
"SFMono-Regular", Consolas, "Liberation Mono", monospace
```

### 5.2 字重

| Token | 字重 | 用途 |
|---|---:|---|
| Regular | `400` | 正文、说明 |
| Medium | `500` | 导航、次级按钮、标签 |
| Semibold | `600` | 卡片标题、按钮、Section 标题 |
| Bold | `700` | H1 和必要的数字强调 |

首版不使用 `300` 或 `800+`，避免中英文字重表现不一致。

### 5.3 字号与行高

| 角色 | Desktop | Mobile | 行高 | 字重 |
|---|---:|---:|---:|---:|
| Display / H1 | `56px` | `40px` | `1.08` / `1.12` | `700` |
| H2 | `40px` | `32px` | `1.15` / `1.2` | `600` |
| H3 | `24px` | `22px` | `1.3` | `600` |
| Lead | `20px` | `18px` | `1.6` | `400` |
| Body Large | `18px` | `17px` | `1.65` | `400` |
| Body | `16px` | `16px` | `1.65` | `400` |
| Small | `14px` | `14px` | `1.55` | `400/500` |
| Caption | `13px` | `13px` | `1.5` | `400` |
| Label / Badge | `13px` | `13px` | `1.4` | `600` |

- 中文标题不强制使用全大写或额外字距；
- 英文短标签可使用 `0.01em` 至 `0.03em` 字距，不使用宽字距大写正文；
- H1 最多建议 12 个英文单词或 24 个中文字符，实际限制由 Copy Deck 冻结；
- 正文理想行宽为 `60–72ch`，Hero 描述不超过 `62ch`。

## 6. 间距系统

使用 `4px` 基础网格：

| Token | 值 | 常见用途 |
|---|---:|---|
| `space-1` | `4px` | 图标内部微间距 |
| `space-2` | `8px` | 紧凑标签、图标与文字 |
| `space-3` | `12px` | 紧凑控件 |
| `space-4` | `16px` | 卡片内部小间距 |
| `space-5` | `20px` | Mobile 卡片 Padding |
| `space-6` | `24px` | 默认 Grid Gap、卡片 Padding |
| `space-8` | `32px` | 模块内部间距 |
| `space-10` | `40px` | 标题与内容 |
| `space-12` | `48px` | 大模块内部间距 |
| `space-16` | `64px` | Mobile Section Padding |
| `space-20` | `80px` | Tablet Section Padding |
| `space-24` | `96px` | Desktop Section Padding |
| `space-28` | `112px` | Hero 大屏上下留白上限 |

不得为单个页面随意创造 `5px`、`11px`、`37px` 等孤立值；视觉微调必须先判断是否应扩展 Token。

## 7. 圆角、边框和阴影

### 7.1 圆角

| Token | 值 | 用途 |
|---|---:|---|
| `radius-sm` | `8px` | 小标签、紧凑控件 |
| `radius-md` | `12px` | Button、普通 Card |
| `radius-lg` | `16px` | 重点 Card、菜单面板 |
| `radius-xl` | `24px` | 截图容器、Hero 视觉容器 |
| `radius-pill` | `999px` | Badge，不用于长按钮 |

### 7.2 边框

- 默认边框：`1px solid #E2E8F0`；
- 强调边框：`1px solid #C7D2FE`；
- 分隔线：`1px solid #F1F5F9`；
- 不使用多层描边制造拟物效果。

### 7.3 阴影

| Token | 值 | 用途 |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(15, 23, 42, 0.06)` | Header、轻卡片 |
| `shadow-md` | `0 8px 24px rgba(15, 23, 42, 0.08)` | Hover Card、菜单 |
| `shadow-lg` | `0 20px 60px rgba(15, 23, 42, 0.14)` | 产品截图容器 |

阴影不是状态的唯一表达。Mobile 默认减少阴影强度，以边框和背景分区为主。

## 8. Layout Tokens

| Token | Desktop | Mobile |
|---|---:|---:|
| 页面最大内容宽度 | `1200px` | `100%` |
| 阅读内容最大宽度 | `760px` | `100%` |
| 页面水平 Padding | `32px`（1280+） | `20px`（390）、`16px`（360） |
| Grid 列数 | `12` | `4` |
| Grid Gap | `24px` | `16px` |
| Header 高度 | `72px` | `64px` |
| 最小触控目标 | `44px × 44px` | `44px × 44px` |

### 8.1 Container

| 范围 | 水平安全间距 | 最大内容宽度 |
|---|---:|---:|
| Mobile `< 390px` | `16px` | `100%` |
| Mobile `390–639px` | `20px` | `100%` |
| Tablet `640–1023px` | `24px` | `100%` |
| Desktop `1024–1279px` | `32px` | `100%` |
| Desktop `≥ 1280px` | `32px` | `1200px` |

- 全宽背景可以延伸至视口边缘，文字、Card、CTA 和截图必须回到 Container；
- 阅读型正文最大宽度 `760px`；
- Hero 文案列最大宽度 `560px`；
- 1440px 以上只增加外侧留白，不继续拉宽正文和 Grid。

### 8.2 Section

| 范围 | 上下间距 | 标题区域与内容区域间距 |
|---|---:|---:|
| Mobile `< 640px` | `64px` | `32px` |
| Tablet `640–1023px` | `80px` | `36–40px` |
| Desktop `≥ 1024px` | `96px` | `40–48px` |
| Wide `≥ 1440px` | 最高 `112px` | 最高 `48px` |

- Section 标题区域由可选 Eyebrow、H2 和一段说明组成，宽度不超过 `760px`；
- 标题区域默认位于内容区域之前，居中或左对齐由页面区块统一决定，不能同一区块混用；
- 内容区域使用 Grid、单列正文或横向滚动结构；
- Hero 和 Final CTA 可以使用独立间距，但仍遵循 Container 安全边界；
- 不使用固定 Section 高度容纳可变的中英文内容。

## 9. Button

### 9.1 变体

#### Primary

- 用于 Chrome Web Store 安装主 CTA；
- 默认背景 `--color-brand-600`，白色文字；
- Hover 使用 `--color-brand-700`；
- Active 使用 `--color-brand-800`；
- 每个可视区域避免出现多个同等权重 Primary。

#### Secondary

- 用于查看功能、模板、平台或隐私；
- 白色背景，`--color-slate-300` 边框，`--color-slate-900` 文字；
- Hover 背景为 `--color-slate-50`，边框为 `--color-brand-300`。

#### Text / Link Button

- 用于卡片内部的低权重导航；
- 不使用填充背景；
- 必须有文字或文字加箭头，不能只显示含义不清的图标。

### 9.2 尺寸

| 尺寸 | 高度 | 水平 Padding | 字号 | 用途 |
|---|---:|---:|---:|---|
| Large | `52px` | `24px` | `16px` | Hero、Final CTA |
| Medium | `44px` | `18px` | `15px` | Header、页面内容 |
| Small | `36px` | `14px` | `14px` | 非核心紧凑操作 |

- 圆角统一使用 `radius-md`；
- Mobile Hero 和 Final CTA 的 Primary 宽度为容器 `100%`；
- 文案换行时优先增加按钮高度，不截断或缩小到不可读；
- 图标与文字间距为 `8px`，装饰箭头放在文字之后。

### 9.3 状态

| 状态 | Primary | Secondary | Text Link |
|---|---|---|---|
| Default | 品牌主色背景、白色文字 | 白色背景、中性边框、主要文字 | 透明背景、品牌深色文字 |
| Hover | 品牌色加深一级 | 轻中性背景、品牌浅边框 | 文字加深并显示下划线或箭头位移反馈 |
| Active | 使用品牌最深一级，阴影减弱 | 中性背景加深，边框保持清晰 | 文字使用品牌最深一级 |
| Disabled | 中性背景和低强调文字，无点击行为 | 浅中性背景和文字，无点击行为 | 低强调文字，无链接行为 |
| Focus Visible | `2px` 品牌色外框 + `2px` 白色间隔 | 同 Primary | 同 Primary，并保留下划线 |

- Hover 只作为补充反馈，Touch 和 Keyboard 用户不依赖 Hover 才能识别操作；
- Disabled 不能仅降低透明度到难以辨认，也不能承载必须完成的主操作；
- Loading 如果未来存在，仅用于真实异步动作；外链安装 CTA 不伪造 Loading；
- Chrome Web Store CTA 使用可访问名称说明目标，外链图标不替代文字。

## 10. Link

- 正文链接使用 `--color-brand-700`，默认保留下划线或使用足够明确的链接样式；
- 导航链接默认无下划线，Hover/Focus 提供背景或下划线反馈；
- 当前页面使用 `aria-current="page"`，视觉上增加品牌色或底部指示；
- 链接不能只通过颜色与正文区分；
- 外链是否新窗口打开由实现阶段统一决定，若新窗口打开必须提供合理提示。

## 11. Card

### 11.1 Base Card

- 白色背景、`1px` 中性边框、`radius-lg`；
- Desktop Padding `24px`，Mobile Padding `20px`；
- 默认不抬升；可点击 Card 在 Hover 时使用 `shadow-md` 和品牌边框；
- 整卡可点击时，内部不能再嵌套冲突的链接或按钮。

### 11.2 Feature Card

- 顺序：图标 → 标题 → 简介 → 可选链接；
- 图标容器为 `40px` 或 `44px`，使用轻品牌背景；
- 六张卡片保持相同层级，不使用一张超大卡暗示未冻结的功能优先级。

### 11.3 Privacy Item

- 使用 Info 语义色或中性品牌色；
- 文字必须解释实际边界，不只显示“安全”“隐私”等抽象口号；
- 不使用盾牌图标代替具体说明。

### 11.4 Platform Card

- 必须包含平台名称、状态 Badge 和短说明；
- 历史验证与已配置未验证分别位于独立分组；
- 两组使用相同 Card 结构，状态由文案、Badge 和边框共同表达；
- 平台品牌色只可作为小图标点缀，不能覆盖官网状态语义色。

### 11.5 Template Category Card

- 包含分类名称、用途说明和可选图标；
- 不展示未经核实的模板数量；
- 8 类顺序由 Copy Deck/内容阶段冻结，设计不根据英文长度强制等高标题单行。

## 12. Badge 与平台状态

### 12.1 Badge 基础

- 高度不低于 `28px`；
- 水平 Padding `10px`，圆角 `radius-pill`；
- 字号 `13px`、字重 `600`；
- 可包含一个 `8px` 状态圆点，但圆点不是唯一状态信息；
- 文本允许中文和英文自然宽度，不设固定宽度。

### 12.2 冻结状态

| 状态键 | 中文建议 | 英文建议 | 颜色语义 |
|---|---|---|---|
| `verified` | 当前版本已验证 | Verified in current version | Verified 绿色；当前暂不使用 |
| `historical` | 历史验证 · 本轮未复测 | Historically verified · Not retested | Historical 蓝色 |
| `configured` | 代码已配置 | Configured in code | Configured 靛蓝色，必须配合未验证说明 |
| `configured-unverified` | 代码配置 · 未验证 | Configured · Not verified | Configured + Not Verified 组合语义 |

最终公开文案仍由 Copy Deck 和事实审查确认；设计实现不得缩短为容易误解的“支持”或“可用”。

## 13. Product Screenshot 容器

- 只展示真实扩展界面截图，不使用 AI 生成 UI 作为功能证据；
- Desktop 首选展示槽比例为 `16:10`；只有真实截图本身适配该比例时才铺满；
- Mobile 保持素材原始比例，容器高度由图片自然计算；
- 当真实截图比例不是 `16:10` 时，使用完整原始比例或在容器内留白，不通过裁剪强行适配；
- 图片使用 `object-fit: contain`，禁止 `cover` 裁切核心界面；
- 容器背景使用 `--color-slate-50` 或轻品牌背景；
- Desktop 外层 Padding `24–32px`，Mobile `12–16px`；
- 外层使用 `radius-xl`、中性边框和 `shadow-lg`；
- 保留截图原始比例，不拉伸；
- 如果截图内文字对理解很关键，需要提供附近的可索引 HTML 说明；
- `alt` 描述界面和用途，不重复附近标题，不包含营销关键词堆砌；
- 素材未冻结前使用明确的设计占位框，不能把占位图发布为真实功能截图。

## 14. Header

### 14.1 Desktop

- 高度 `72px`，内容容器最大宽度 `1200px`；
- Logo 左侧、导航居中或靠右、语言切换和 CTA 位于末端；
- Header 可使用白色半透明背景和轻边框，但不得依赖毛玻璃效果保证可读性；
- Sticky 行为允许在实现阶段采用，若采用需避免遮挡锚点和键盘焦点。

### 14.2 Mobile

- 高度 `64px`；
- 首行只保留 Logo 和 Menu Button；
- Menu Button 为 `44px × 44px`，有可见 Focus 和动态可访问名称；
- 展开菜单中的语言切换与安装 CTA 不得隐藏；
- 菜单视觉使用独立面板，背景不透明度足以保证文字对比度。

## 15. Mobile Menu

- 面板从 Header 下方展开或作为右侧 Drawer 出现；首版优先选择 Header 下方的全宽面板，降低实现复杂度；
- 打开后聚焦第一个可操作元素，关闭后焦点返回 Menu Button；
- `Escape` 关闭，点击明确的关闭按钮或遮罩关闭；
- 菜单打开时锁定页面背景滚动；
- 焦点不能进入被遮挡的页面主体；
- 动画时长 `180–240ms`，仅使用 `opacity` 和 `transform`；
- `prefers-reduced-motion: reduce` 时取消位移动画；
- 切换页面或语言后自动关闭菜单。

## 16. Footer

### 16.1 Desktop

- 使用轻中性背景和顶部分隔线；
- Logo/站点简介与 Product、Resources、Company 三组内容排列；Privacy Policy/Terms of Use 放在左侧品牌区域，不创建独立 Install 列；
- 不显示未创建的 Terms 空链接；
- Chrome Web Store 安装链接保持可辨识，但不与页面 Final CTA 争夺视觉主导。

### 16.2 Mobile

- 使用原生语义可实现的 Disclosure/Accordion；
- 分组标题触控高度不低于 `44px`；
- 展开图标有旋转或替换反馈，但状态同时通过 `aria-expanded` 表达；
- 首版默认展开 Product 和 Install，其他分组默认状态在内容阶段最终确认；
- 即使 JavaScript 不可用，链接也应通过合理回退保持可访问。

## 17. 图标与插图

- 使用统一的线性图标风格，默认 `20px` 或 `24px`；
- 线宽保持一致，建议 `1.75–2px`；
- 装饰图标使用 `aria-hidden="true"`；有独立功能的图标按钮必须提供可访问名称；
- 不混用彩色 3D、Emoji 和不同线宽的图标作为同一层级功能图标；
- 平台 Logo 需确认商标使用方式，不擅自修改平台品牌图形；
- 首版可不引入大幅插画，真实产品截图优先级更高。

## 18. Motion

- 页面进入不使用大面积逐项飞入；
- Button、Link、Card 状态变化时长 `120–180ms`；
- Menu 和 Disclosure 时长 `180–240ms`；
- 动画曲线建议 `ease-out`，不使用弹跳效果传达严肃的隐私或平台状态；
- 不自动播放轮播，不使用无限跑马灯；
- 横向卡片区域由用户主动滚动，并提供完整键盘路径。

## 19. Responsive Rules

### 19.1 断点与总体变化

采用 Mobile-first 规则，基础布局从 360px 开始，通过内容驱动的 `min-width` 断点增强：

| 基准宽度 | Header | Grid / Card | CTA | 图片 | 横向滚动 |
|---:|---|---|---|---|---|
| `360px` | Logo + Menu Button | 单列；Card Padding `20px` | Hero/Final Primary 全宽、纵向排列 | 原始比例完整缩放，容器 Padding `12px` | Platform 两状态组分别滚动；Template 分类滚动；下一卡露出提示 |
| `390px` | Logo + Menu Button | 单列，页面安全间距增至 `20px` | 主 CTA 全宽，次 CTA 不隐藏 | 原始比例完整缩放，容器 Padding `16px` | 与 360px 相同，Card 可略增宽 |
| `768px` | Logo + Menu Button | Feature 2 列；Platform 每组 2 列；Template 2–3 列 | 可横向排列，保持至少 `44px` 高 | 宽幅完整截图，仍不裁切 | Platform/Template 优先转 Grid，不再依赖横向滚动 |
| `1024px` | 切换完整 Desktop Header | 12 列 Grid；Hero 双栏；Feature 3 列 | 内容宽度，Hero 横向排列 | Hero 右栏完整展示；Product Preview 宽幅 | 使用分组 Grid |
| `1280px` | 完整导航和标准间距 | Container 最大 `1200px`；Feature 3 列；Template 4 列 | Header CTA 为 Medium，Hero 为 Large | Screenshot 外层 Padding `24–32px` | 不启用横向滚动 |
| `1440px` | 与 1280px 相同，不继续拉宽 | 最大内容宽度不变，增加外侧留白和 Section 节奏 | 保持内容宽度，不扩大成超宽按钮 | 最大宽度受 Container 限制 | 不启用横向滚动 |

### 19.2 Header

- `< 1024px` 使用 Mobile Header，完整导航、Language Switcher 和 Store CTA 进入菜单；
- `≥ 1024px` 使用 Desktop Header；如果中英文在 1024px 发生碰撞，提高实际切换点，不缩小字体或触控区域；
- Mobile Menu 最大高度不超过可用视口，内容超出时菜单内部滚动；
- 360px 下 CTA 文字允许换行并增加高度，不能横向溢出。

### 19.3 Grid 与 Card

- Feature：360/390 单列，768 双列，1024+ 三列；
- Privacy：360/390 单列，768 可为标题加三项分栏，1024+ 使用说明区加三项信息布局；
- Platform：360/390 按状态分组横向滚动，768+ 每组独立 Grid，两个状态组始终分开；
- Template：360/390 横向滚动，768 为 2–3 列，1024+ 为 4 列 × 2 行；
- Card 高度由内容决定，不截断中文或英文说明；Desktop 可对齐同行 Card 外框，但不使用固定正文高度。

### 19.4 CTA

- 360/390 的 Hero 与 Final CTA Primary 使用 `100%` 宽度；
- 360px 下 Primary 与 Secondary 纵向排列，间距 `12px`；
- 768px+ 可横向排列；
- 1024px+ 按内容宽度展示，不把 CTA 拉满 Container；
- 所有宽度下文字完整可见，按钮最小高度 `44px`。

### 19.5 图片

- 所有宽度下保持截图原始比例和核心 UI 完整；
- 图片最大宽度为容器 `100%`，高度自动；
- 360/390 不通过裁切换取文字可读性，应改用适合移动端的真实素材或邻近 HTML 说明；
- 768px+ 增加容器 Padding，1024px+ 可进入 Hero 双栏；
- 不允许截图或 SVG 造成页面整体横向滚动。

### 19.6 横向滚动组件

- 仅 Mobile 的 Platform 和 Template 区域使用；
- 两个平台状态组分别滚动，不能合并；
- 首卡完整显示，下一卡露出 `24–40px`；Card Gap `16px`；
- 支持触控、触控板和键盘访问，不自动播放、不循环滚动；
- 滚动区域可以接近屏幕右边缘，但左边缘必须与页面内容对齐；
- 不隐藏核心内容；在 360px、浏览器放大或内容过长时允许退化为单列；
- 组件的横向滚动不能导致整个页面出现横向滚动条。

## 20. 基础可访问性

### 20.1 结构

- 每页一个 H1，标题层级不跳级；
- 使用 `header`、`nav`、`main`、`section`、`footer` 等语义结构；
- 每个主要 Section 由可见标题或可访问名称标识；
- 页面顶部提供“跳到主要内容”链接。

### 20.2 键盘与焦点

- 所有交互元素可通过键盘完成；
- Focus Visible 不能被全局移除；
- 焦点顺序与视觉顺序一致；
- 横向滚动区域中的 Card/Link 不制造陷阱；
- Sticky Header 不遮挡获得焦点的元素。

### 20.3 触控与输入

- 触控目标不小于 `44px × 44px`；
- 相邻触控目标至少保留 `8px` 空间；
- 不使用仅 Hover 可见的核心操作；
- 首版若无表单，不创建无实际用途的输入控件。

### 20.4 图片与状态

- 有信息价值的图片必须有适当 `alt`；纯装饰图片使用空 `alt`；
- 平台状态、错误和选择状态不能只用颜色表示；
- 不把大段文字嵌入图片；
- 截图中的敏感提示词、历史和用户数据在发布前必须清理或使用安全测试数据重新拍摄。

### 20.5 Reduced Motion

- 尊重系统 `prefers-reduced-motion` 设置；
- Reduced Motion 下取消菜单位移、Card 抬升和平滑滚动等非必要动画；
- 状态变化仍通过颜色、边框、文字或图标立即可见，不能因关闭动画而丢失反馈；
- 不自动播放轮播、视频或持续装饰动画；
- 任何必要的进度反馈都不能只依赖运动表达。

## 21. 国际化设计要求

- 所有组件至少为英文文案预留约 `30%` 的长度弹性；
- Button 和 Badge 使用内容驱动宽度，不用固定文字宽度；
- Header 在接近折行前切换到 Mobile Navigation，不缩小到低于规定字号；
- 中文使用自然断行，英文长单词和 URL 使用安全换行；
- 语言名称显示为 `English` 和 `简体中文`，不只显示国旗；
- Language Switcher 保留当前页面路径；
- `ja`、`ko`、`de`、`fr`、`es` 当前不出现在语言选择器中。

## 22. 组件命名建议

以下名称用于后续组件规划，不代表本阶段已经创建文件：

```text
SiteHeader
DesktopNavigation
MobileNavigation
LanguageSwitcher
StoreCta
SectionHeading
FeatureCard
PrivacyItem
PlatformGroup
PlatformCard
StatusBadge
TemplateCategoryCard
ProductScreenshot
FinalCta
SiteFooter
FooterDisclosure
```

组件应通过小规模变体和数据驱动内容复用，不为每张 Card 创建独立视觉组件。

## 23. 本阶段明确不包含

- 不修改 `website/` 源码或 CSS；
- 不实现 React 组件；
- 不提供 CSS 实现代码；
- 不接入 Tailwind、CSS-in-JS 或第三方 UI 库；
- 不新增远程字体、分析、遥测或第三方图片服务；
- 不冻结正式营销文案；
- 不确认 Chrome Web Store URL；
- 不确认真实截图素材；
- 不实现 Dark Theme；
- 不把 Design Token 当作已上线页面事实。

## 24. Design System 完成标准

进入 Copy Deck 和组件规划前，本规范必须满足：

- 品牌色、中性色、语义色和平台状态颜色已定义；
- 中英文字体栈、字号、字重、行高和行宽规则已定义；
- 间距、圆角、边框、阴影和布局基础 Token 已定义；
- Button、Link、Card、Badge、Platform Status、Screenshot 容器已有明确状态；
- Header、Mobile Menu 和 Footer 的关键视觉及交互约束已定义；
- 360、390、768、1024、1280、1440 的 Header、Grid、Card、CTA、图片和横向滚动规则已定义；
- Focus、键盘、触控、对比度、Reduced Motion 和图片替代文本要求已定义；
- 规范没有新增未经验证的产品能力或平台承诺；
- 所有未决内容都保留在事实验证、Copy Deck、素材或实现阶段处理。
