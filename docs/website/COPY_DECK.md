# PromptPro 官网 MVP Content Copy Deck

更新时间：2026-08-24

本文档冻结 PromptPro 官网 MVP 的中英文页面内容方向、页面级候选文案、事实来源和国际化风险。它继承以下文档：

- `docs/website/WEBSITE_STATUS.md`
- `docs/website/INFORMATION_ARCHITECTURE.md`
- `docs/website/WIREFRAME_HOME.md`
- `docs/website/DESIGN_SYSTEM.md`
- `docs/seo/PRODUCT_FACTS.md`
- `docs/seo/WEBSITE_MVP.md`

当前 checkpoint 保留已确认营销文案不变；Homepage 与 Features 已使用对应中英文内容，Privacy、Platforms、Templates 的页面内容仍在实现中。Title 和 Description 仍是候选文案，不是最终 SEO 页面矩阵。

## 1. 文案原则

### 1.1 事实边界

官网文案必须以 `docs/seo/PRODUCT_FACTS.md` 的当前事实和验证等级为准：

- 可以描述本地规则优化、模板搜索、模板复用、自定义模板、优化历史、本地存储和中英文界面；
- 可以说“不要求账号”；
- 可以说“提示词在浏览器本地处理”“提示词不上传到新的远程服务”，但不扩展为绝对安全承诺；
- 可以说明当前平台状态分为历史验证依据和代码配置未验证；
- 可以介绍 8 个模板分类，但不在未重新核对数据前承诺模板总数；
- 可以说明扩展只在支持或已配置的 AI 网站中尝试工作，平台可用性以当前版本实际验证情况为准。

不得使用：

- “支持所有 AI 网站”“所有平台稳定可用”“完全兼容”；
- “完全离线”“100% 私密”“绝对安全”“零数据访问”；
- “由先进 AI 模型自动改写”“云端 AI 增强”“联网优化”；
- 用户数量、安装量、评分、成功率、客户 Logo、案例或未经核实的模板总数；
- 云端同步、账号体系、团队协作、在线个人中心或付费 Pro 能力；
- 将代码中已配置的平台写成当前版本已验证平台。

### 1.2 中英文写作策略

英文优先考虑搜索理解和自然的产品官网表达：

- 使用 `local prompt optimizer`、`bilingual prompt templates`、`Chrome extension` 等用户能理解的词；
- 短句、主动语态、先说产品价值再说边界；
- 使用 `supported AI websites`，不使用笼统的 `every AI tool`；
- CTA 使用动词，但不制造强迫安装或虚假紧迫感。

中文优先考虑简体中文阅读习惯：

- 使用“本地处理”“提示词优化”“双语模板”“无需账号”等自然表达；
- 不把英文的 SaaS 口号逐字翻译成生硬的“释放你的提示词潜力”；
- 平台状态和隐私边界使用完整句子，避免只剩抽象标签；
- CTA 直接说明动作和目标，不使用“立即解锁”等夸张表达。

### 1.3 文案状态

本文档中的内容分为：

- **冻结**：可进入后续组件内容规划的推荐文案；
- **候选**：需要在 SEO Matrix、真实素材或 Chrome Web Store URL 确认后才能发布；
- **限制说明**：必须保留的事实边界，不是可删减的免责声明。

所有页面最终仍需经过事实审查、中文审校和真实素材核对。

## 2. 首页 Copy

首页内容顺序与 `WIREFRAME_HOME.md` 对齐：

```text
Header
→ Hero
→ Product Preview
→ Feature Section
→ Privacy Section
→ Platform Section
→ Template Section
→ Final CTA
→ Footer
```

### 2.1 Hero

#### English

**H1**

> Improve your prompts locally.

**Subtitle**

> PromptPro is a Chrome extension for refining prompts in your browser and reusing bilingual templates on supported AI websites. No account required.

**Primary CTA**

> Add to Chrome

**Secondary CTA**

> Explore features

**Hero content note**

Hero 需要在截图或正文附近补充边界说明：PromptPro 在浏览器本地处理提示词，当前官网不承诺所有已配置平台均已验证。Subtitle 不使用 cloud AI、fully offline 或 model-powered rewriting 等说法。

#### 简体中文

**H1**

> 本地优化提示词，快速复用双语模板。

**Subtitle**

> PromptPro 是一款 Chrome 扩展，可在支持的 AI 网站中帮助你整理提示词，并在浏览器本地复用中英双语模板。无需账号。

**主 CTA**

> 前往 Chrome Web Store 安装

**次 CTA**

> 查看功能

**Hero content note**

中文 Hero 不写“完全离线”或“适用于所有 AI 网站”。如需补充隐私句，使用“提示词在浏览器本地处理，不上传到新的远程服务”，并与 Privacy 页面保持一致。

### 2.2 Product Preview 附近说明

截图素材尚未最终冻结，以下是截图旁的短说明候选，不应把占位图当作发布素材。

#### English

> See how PromptPro fits into your existing AI workflow: refine a prompt, review the result, and reuse a template when you need it.

#### 简体中文

> 在熟悉的 AI 工作流程中使用 PromptPro：整理提示词、确认结果，并在需要时复用模板。

**限制**：使用“review/确认”是因为当前实现包含预览和用户确认流程；不写自动提交、自动发送或无需用户操作。

### 2.3 Feature Section

首页展示六项能力。每项描述控制在 Card 可读长度内，完整解释放在 Features 页面。

| 能力 | English title | English description | 中文标题 | 中文描述 | 事实来源 |
|---|---|---|---|---|---|
| Prompt 优化 | Local prompt optimization | Refine the prompt you are working on with local rules, review the result, and apply it when it is ready. | 本地提示词优化 | 使用本地规则整理当前提示词，先查看结果，再决定是否应用。 | `PRODUCT_FACTS.md` D；源码 `src/content/optimizer.ts`、预览/应用流程 |
| 模板库 | Bilingual prompt templates | Browse reusable templates across writing, work, coding, translation, marketing, academic, analysis, and creative tasks. | 双语模板库 | 按写作、职场、编程、翻译、营销、学术、分析和创意等场景浏览可复用模板。 | `PRODUCT_FACTS.md` D；`src/shared/templates/` |
| 自定义模板 | Custom templates | Save your own templates and fill in variables when a reusable workflow needs more context. | 自定义模板 | 保存个人模板，并在需要时填写模板变量。 | `PRODUCT_FACTS.md` D；Popup 个人资产和变量入口 |
| 优化历史 | Local optimization history | Revisit recent optimization records stored in your browser, without promising cloud backup or cross-device sync. | 本地优化历史 | 查看保存在浏览器本地的近期优化记录，不承诺云端备份或跨设备同步。 | `PRODUCT_FACTS.md` D、E；`src/shared/storage.ts` |
| 双语体验 | English and Chinese experience | Switch the interface and work with bilingual template content as you move between English and Chinese tasks. | 中英双语体验 | 在中英文界面之间切换，处理适合不同语言任务的模板内容。 | `PRODUCT_FACTS.md` D；现有 locale 与设置入口 |
| 本地数据管理 | Local data management | Keep settings, templates, history, and usage data in browser storage managed by the extension. | 本地数据管理 | 设置、模板、历史和使用次数由扩展保存在浏览器本地存储中。 | `PRODUCT_FACTS.md` D、E；`src/shared/storage.ts` |

**Feature wording limits**

- 不把“local rules”改写成“AI model rewriting”；
- 不把历史描述成 unlimited history；
- 不把自定义模板写成 cloud workspace 或 team library；
- 不把 bilingual experience 扩展为已经完成的多语言官网；
- 不写模板总数，发布前如需数字必须重新从当前模板数组核对。

### 2.4 Privacy Section

Privacy Section 使用三项短内容，详细解释留给 `/privacy`。

#### English

**Section title**

> Local-first by design.

**Intro**

> PromptPro is designed to keep prompt work close to the browser. The extension does not require an account, and the current implementation does not add a remote prompt-processing service.

**Three items**

1. **No account required** — Use the extension without creating a PromptPro account or signing in to a website service.
2. **Stored in your browser** — Settings, templates, history, and usage data are stored through the extension’s browser storage. An older settings migration path may read from `chrome.storage.sync`; ongoing storage uses local storage.
3. **No new remote prompt upload** — The current source does not add a remote prompt-processing request. Prompt handling is described within the browser and must remain aligned with the extension privacy page.

**Privacy link**

> Read the privacy details

#### 简体中文

**Section title**

> 以本地处理为基础。

**Intro**

> PromptPro 让提示词处理尽量靠近浏览器完成。扩展无需账号，当前实现没有新增远程提示词处理服务。

**三项内容**

1. **无需账号** —— 不需要创建 PromptPro 账号，也不需要登录云端服务。
2. **保存在浏览器本地** —— 设置、模板、历史和使用次数通过扩展的浏览器存储保存。旧设置迁移路径可能读取 `chrome.storage.sync`；持续存储使用本地存储。
3. **提示词不上传到新的远程服务** —— 当前源码没有新增远程提示词处理请求。官网表述必须与扩展隐私页和 Manifest 保持一致。

**隐私链接**

> 阅读隐私说明

**Privacy Section hard limits**

- 不使用“100% 私密”“绝对安全”“零数据访问”；
- 不把 `chrome.storage.local` 表述为云端同步；
- 不把“当前没有发现远程请求”扩大成对所有未来版本的永久承诺；
- 权限说明必须在 Privacy 页面与 Manifest 同步，首页只显示摘要。

### 2.5 Platform Section

Platform Section 必须呈现两个独立状态组，不合并为一个“支持平台”列表。

#### Group A：历史验证依据

平台：

- ChatGPT
- Claude
- Gemini
- DeepSeek

**Badge**

- English: `Historically verified`
- 中文：`历史验证`

**Group explanation — English**

> These platforms have historical verification evidence. They have not been retested in the current validation cycle, so availability may change with platform updates.

**Group explanation — 中文**

> 这些平台有历史验证依据，但尚未完成当前验证周期的复测。平台页面更新后，可用性可能发生变化。

#### Group B：代码配置但未验证

公开首页可使用“Other configured platforms”作为总览，不必在首页堆出长平台清单。Platforms 页面可以列出当前代码配置的其他平台，例如豆包、Perplexity、Copilot、Grok / X Grok、Google AI Studio、Cursor、v0 和 Lovable，但必须保留未验证状态。

**Badge**

- English: `Configured · Not verified`
- 中文：`代码配置 · 未验证`

**Group explanation — English**

> Other platforms are configured in the extension, but they have not been sufficiently verified in the current version. Configuration does not guarantee a stable experience.

**Group explanation — 中文**

> 其他平台已在扩展中配置，但当前版本还没有足够的验证依据。代码配置不等于稳定可用。

**Platform availability note — English**

> Platform availability depends on the current version and the platform’s page structure.

**平台可用性说明 — 中文**

> 平台可用性以当前版本和对应网站页面结构的实际验证情况为准。

**Platform restrictions**

- 不写“支持 X 个 AI 平台”；
- 不写“稳定支持”“完整兼容”“所有平台一致体验”；
- 不把历史验证 Badge 简化成 `Verified`；
- 未验证平台只做总览，不创建没有实际截图、日期、环境和限制说明的独立平台详情页。

### 2.6 Template Section

首页展示 8 个真实分类入口。分类描述表达使用场景，不承诺分类内的模板数量。

| 中文分类 | English category | English use case | 中文使用场景描述 |
|---|---|---|---|
| 写作 | Writing | Draft, rewrite, and structure everyday writing tasks. | 用于起草、改写和整理日常文字内容。 |
| 职场 | Workplace | Prepare clearer workplace messages, plans, and documents. | 用于整理工作沟通、计划和业务文档。 |
| 编程 | Coding | Turn technical tasks into clearer prompts for coding work. | 用于整理编程任务、技术问题和代码相关提示词。 |
| 翻译 | Translation | Prepare prompts for translation, localization, and language comparison. | 用于翻译、本地化和多语言对照任务。 |
| 营销 | Marketing | Plan marketing copy, campaigns, and audience-focused content. | 用于规划营销文案、活动内容和受众沟通。 |
| 学术 | Academic | Organize research, reading, and academic writing tasks. | 用于整理研究、阅读和学术写作任务。 |
| 分析 | Analysis | Break down information, compare options, and structure findings. | 用于拆解信息、比较选项和整理分析结果。 |
| 创意 | Creative | Explore ideas, variations, and creative directions. | 用于发散想法、生成变体和整理创意方向。 |

**Template Section intro — English**

> Start with a template for the task in front of you, then adapt it to your own context.

**Template Section intro — 中文**

> 从当前任务对应的模板开始，再根据自己的场景进行调整。

**Template link**

- English: `Browse all template categories`
- 中文：`浏览全部模板分类`

**Template restrictions**

- 不写 `66 templates` 或其他未经发布前复核的数字；
- 不把内置模板写成用户私有模板；
- 不展示用户的个人模板、历史记录或浏览器本地数据；
- 分类页只有在有真实模板、示例和独立搜索意图后才创建。

### 2.7 Final CTA

#### English

**Heading**

> Make your next prompt easier to reuse.

**Description**

> Install PromptPro from the Chrome Web Store and try local prompt refinement and bilingual templates on supported AI websites.

**CTA**

> Add to Chrome

#### 简体中文

**标题**

> 让下一次提示词更容易复用。

**描述**

> 前往 Chrome Web Store 安装 PromptPro，在支持的 AI 网站中尝试本地提示词优化和双语模板。

**CTA**

> 前往 Chrome Web Store 安装

**CTA restriction**：正式发布前必须复核 Chrome Web Store URL 和线上版本；当前文案只是内容设计，不代表链接已经可用。

## 3. 其他页面内容规划

以下规划与 `INFORMATION_ARCHITECTURE.md` 的页面职责一致。每页的 Title 和 Description 仍属于候选值，canonical、hreflang 和 JSON-LD 留到 SEO Matrix 阶段。

### 3.1 Features `/features`

**页面目标**

解释当前已确认的功能能力和使用边界，帮助用户判断 PromptPro 是否适合自己的提示词工作流，并引导安装、查看模板和阅读隐私说明。

**H1 — English**

> Tools for clearer, reusable prompts.

**H1 — 中文**

> 让提示词更清晰，也更容易复用。

**Section 结构**

1. **Prompt optimization / 提示词优化**：本地规则整理 → 预览 → 用户确认 → 应用或撤销。
2. **Bilingual template library / 双语模板库**：8 个真实分类和模板搜索入口。
3. **Search and reuse / 搜索与复用**：按标题、关键词、描述、标签和分类查找模板。
4. **Custom templates / 自定义模板**：保存个人模板并填写变量，不暗示云端同步。
5. **Optimization history / 优化历史**：查看近期本地记录，不承诺无限历史或跨设备同步。
6. **English and Chinese experience / 中英双语体验**：界面和模板内容的中英文使用边界。
7. **Local data management / 本地数据管理**：设置、模板、历史和使用次数的本地存储说明。

**Feature page support copy — English**

> PromptPro keeps the workflow close to the page you are already using: refine a prompt, review the result, reuse a template, and keep your extension data in browser storage.

**Feature page support copy — 中文**

> PromptPro 把常用流程放在你正在使用的页面附近：整理提示词、确认结果、复用模板，并将扩展数据保存在浏览器本地。

**页面 CTA**

- Primary: `Add to Chrome` / `添加到 Chrome`
- Secondary: `Browse templates` / `查看模板`

**功能页事实来源**：`PRODUCT_FACTS.md` D、E；`WEBSITE_MVP.md` 2.2 和 4；扩展 Popup、Content 和 Storage 源码。

### 3.2 Privacy `/privacy`

**页面目标**

清楚说明本地处理、浏览器存储、权限用途和用户触发边界，建立与扩展隐私页、Manifest 和当前代码一致的信任基础。

**H1 — English**

> Privacy and local data handling.

**H1 — 中文**

> 隐私与本地数据处理。

**Section 结构**

1. **At a glance / 快速了解**：无需账号；提示词在浏览器本地处理；不新增远程提示词处理服务。
2. **Prompt handling / 提示词处理**：用户主动触发优化或模板插入；不自动导航、不代用户提交或发送消息。
3. **Browser storage / 浏览器存储**：设置、自定义模板、优化历史和使用次数；说明 `chrome.storage.local`，并如实说明旧设置迁移读取 `chrome.storage.sync` 的路径。
4. **Permissions / 权限说明**：`storage`、`scripting`、`contextMenus` 和明确主机权限的用途。
5. **Remote requests and analytics / 远程请求与分析**：当前源码没有发现新增远程提示词处理、分析、广告或遥测实现；这不是对未来版本的永久承诺。
6. **User control / 用户控制**：操作由用户触发；提供与实际实现一致的本地数据管理说明。
7. **Install CTA / 安装入口**：返回 Chrome Web Store。

**Privacy summary — English**

> PromptPro does not require an account. Prompt work is handled in the browser, and the current implementation does not add a remote prompt-processing service. Extension data is stored through browser storage, with permissions explained on this page.

**Privacy summary — 中文**

> PromptPro 无需账号。提示词处理在浏览器中完成，当前实现没有新增远程提示词处理服务。扩展数据通过浏览器存储保存，页面会说明相关权限用途。

**Privacy page restrictions**

- 必须与 `public/privacy_en.html`、`public/privacy_zh.html`、`src/manifest.ts` 和 `PRODUCT_FACTS.md` 复核；
- 不使用“完全离线”“绝对安全”“从未读取任何数据”；
- 不把本地存储写成云同步；
- 不把“没有发现远程请求”写成不可撤销的未来保证。

**隐私页事实来源**：`PRODUCT_FACTS.md` E、F、G；`WEBSITE_MVP.md` 2.3、8.3；扩展隐私页和 Manifest。

### 3.3 Platforms `/platforms`

**页面目标**

展示平台范围和验证边界，帮助用户理解“历史验证依据”和“代码配置但未验证”不是同一种状态。

**H1 — English**

> PromptPro on supported AI websites.

**H1 — 中文**

> 了解 PromptPro 的平台适配状态。

**Section 结构**

1. **Availability note / 可用性说明**：平台可用性以当前版本实际验证情况为准。
2. **Historically verified / 历史验证**：ChatGPT、Claude、Gemini、DeepSeek；Badge 为 `Historically verified` / `历史验证`；说明本轮未复测。
3. **Configured · Not verified / 代码配置 · 未验证**：其他已配置平台；列出具体名称时必须来自当前 Manifest 和事实文档；Badge 固定为 `Configured · Not verified` / `代码配置 · 未验证`。
4. **What to expect / 使用边界**：平台页面结构可能变化；配置不保证稳定体验；未验证平台不创建独立详情页。
5. **Related links / 相关入口**：Features、Templates、Privacy 和安装 CTA。

**Platform intro — English**

> PromptPro is configured for multiple AI and developer websites. Platform availability depends on the current extension version and each site’s page structure.

**Platform intro — 中文**

> PromptPro 已针对多个 AI 和开发工具网站进行配置。平台可用性取决于当前扩展版本和对应网站的页面结构。

**Platform page restrictions**

- 不使用“支持 X 个平台”；
- 不将历史验证写成当前 Verified；
- 不将配置列表直接写成稳定支持列表；
- 每个具体平台若展示验证日期、截图或操作步骤，必须有对应证据；
- 平台状态组必须使用文字 Badge，不能只使用品牌 Logo 或颜色。

**平台页事实来源**：`PRODUCT_FACTS.md` C、F、G；`WEBSITE_MVP.md` 2.4、5；`CURRENT_VERSION_VALIDATION.md`（后续真实验证更新）。

### 3.4 Templates `/templates`

**页面目标**

展示真实模板分类、任务场景和使用方式，让用户理解安装后如何搜索、填写变量和插入模板；不索引用户私有模板或历史。

**H1 — English**

> Bilingual prompt templates for everyday AI work.

**H1 — 中文**

> 面向日常 AI 工作的双语提示词模板。

**Section 结构**

1. **Template overview / 模板总览**：8 个分类和适用场景。
2. **Category cards / 分类卡片**：Writing、Workplace、Coding、Translation、Marketing、Academic、Analysis、Creative。
3. **How to use / 使用方式**：在 Popup 中搜索 → 查看模板 → 填写变量（如有）→ 插入当前输入框或复制文本。
4. **Bilingual workflow / 双语使用**：中英文标题、关键词、描述和标签的搜索边界。
5. **Platform context / 平台上下文**：模板插入受当前页面和平台适配状态影响。
6. **Install CTA / 安装入口**：Chrome Web Store。

**Templates intro — English**

> Find a starting point for writing, work, coding, translation, marketing, academic, analysis, and creative tasks. Search, adapt, and reuse templates in the extension.

**Templates intro — 中文**

> 从写作、职场、编程、翻译、营销、学术、分析和创意任务中找到合适的起点，在扩展中搜索、调整并复用模板。

**How-to copy — English**

> Search by category or keyword, review the template, fill in any variables, then insert it into the current input or copy the text.

**使用方式 — 中文**

> 按分类或关键词搜索模板，查看内容，填写变量，然后插入当前输入框或复制文本。

**Templates page restrictions**

- 只展示真实模板分类和经核对的示例；
- 不展示用户个人模板、优化历史或浏览器本地数据；
- 不发布未经再次计数的模板总数；
- 不承诺每个平台都支持相同的插入体验；
- 不在内容不足时批量创建分类 SEO 页面。

**模板页事实来源**：`PRODUCT_FACTS.md` D、F、G；`WEBSITE_MVP.md` 2.5、6；`src/shared/templates/`。

### 3.5 Pricing `/pricing`（IA v2 规划）

**页面状态**：规划中，不创建空页面，不写入具体价格、货币、试用期、付费方案或功能门槛。

**内容框架**：

1. 说明当前商业化信息是否已经公开；未冻结前只保留“Pricing information will be published when the offer is confirmed.” / “商业化方案确认后再公布定价信息。”这类状态表达。
2. 解释当前可确认的产品价值：本地提示词优化、双语模板和浏览器内工作流。
3. 如果未来存在方案对比，只能基于已冻结的真实功能、价格和限制编写。
4. CTA 使用 Add to Chrome，但 Chrome Web Store URL 未冻结前保持 unavailable。

**允许表达范围**：产品价值、已确认能力、定价信息尚未发布的状态。

**禁止表达**：具体价格、折扣、免费试用、Pro/Team 方案、付款方式、退款承诺或“即将上线”的未经确认时间。

### 3.6 FAQ `/faq`（IA v2 规划）

**页面状态**：规划中，不创建只有问题标题的空页面。

**内容框架**：未来只收录有真实答案的问题，至少覆盖：

- PromptPro 做什么，以及当前支持范围如何理解；
- 本地规则优化和结果确认流程；
- 模板搜索、变量和插入方式；
- 无账号、浏览器存储和用户触发边界；
- 平台状态的“历史验证”和“代码配置 · 未验证”区别；
- 安装入口和 Chrome Web Store URL。

**允许表达范围**：来自 `PRODUCT_FACTS.md`、Manifest、扩展隐私页和已完成页面正文的可核验问答。

**禁止表达**：没有事实依据的兼容性、性能、隐私绝对承诺、平台数量、模板数量、价格或支持承诺。没有真实问答内容前不创建 FAQPage JSON-LD。

### 3.7 Support `/support`

**页面状态**：已完成。展示 FAQ、真实 GitHub 仓库、开发者邮箱和 Ko-fi 支持入口；不编造工单系统、SLA、客服时间或社区入口。

**内容框架**：

1. 常见使用问题的排查入口；
2. 支持平台和页面结构变化的说明；
3. 需要用户提供的信息范围，避免要求提交敏感提示词；
4. 联系方式只有在真实渠道和负责主体确认后才加入；
5. 返回 FAQ、Privacy 和安装入口。

**允许表达范围**：已确认的产品使用边界、隐私安全边界和未来支持流程占位说明。

**禁止表达**：未确认的邮箱、工单地址、响应时间、全天候支持、人工客服、社区或远程诊断能力。

### 3.8 About `/about`（IA v2 规划）

**页面状态**：规划中，不编造法律主体、团队规模、办公地址、客户、用户数量、使命数据或社会证明。

**内容框架**：

1. PromptPro 解决的工作流问题；
2. 产品当前明确的设计取向：本地优先、可复用提示词、双语模板；
3. 独立开发者产品背景只有在用户或事实来源明确确认后再写；
4. 关联 Features、Privacy 和 Support。

**允许表达范围**：产品定位和已确认能力。

**禁止表达**：未确认的公司名称、法律主体、成立时间、团队成员、融资、用户规模、客户 Logo、奖项和媒体报道。

### 3.9 Terms of Use `/terms`（IA v2 规划）

**页面状态**：规划中，不创建未经法律审查的法律正文。

**内容框架**：未来由明确的法律主体和审查后的条款组成，覆盖服务范围、用户责任、知识产权、免责声明、变更和联系信息。

**允许表达范围**：页面职责和需要法律确认的章节清单。

**禁止表达**：虚构法律主体、地址、适用法律、争议解决地、联系方式、生效日期或责任限制。

### 3.10 Changelog `/changelog`（IA v2 规划）

**页面状态**：规划中。当前没有经过确认的真实版本记录，因此不创建虚假更新内容。

**内容框架**：未来按版本、日期、变更类别和事实来源记录真实发布内容；每条记录必须能回溯到实际版本或变更文档。

**允许表达范围**：已确认版本、功能修复、兼容性变化和隐私/权限变化。

**禁止表达**：虚构版本号、发布日期、性能改进、平台支持、用户反馈或未发布功能。没有真实记录时，Changelog 可以继续保持 planned，不作为首版发布硬阻塞。

## 4. SEO 内容准备

以下是页面主题和候选 metadata，供后续 SEO Matrix 使用。它们不是最终 canonical、hreflang、JSON-LD 或 sitemap 实现。

### 4.1 首页

| 语言 | 目标关键词方向 | Title 候选 | Description 候选 |
|---|---|---|---|
| English | local prompt optimizer；bilingual prompt templates；Chrome prompt extension | `PromptPro — Local Prompt Optimizer & Bilingual Templates` | `Improve prompts locally and reuse bilingual templates on supported AI websites. No account required, and prompts are not uploaded to a new remote service.` |
| 简体中文 | 本地提示词优化器；双语提示词模板；Chrome 提示词扩展 | `PromptPro｜本地提示词优化器与双语模板库` | `在支持的 AI 网站中本地整理提示词并复用中英双语模板。无需账号，提示词不上传到新的远程服务。` |

### 4.2 Features

| 语言 | 目标关键词方向 | Title 候选 | Description 候选 |
|---|---|---|---|
| English | prompt optimizer extension；prompt template library；prompt manager | `Prompt Optimizer Extension and Template Library | PromptPro` | `Refine prompts locally, search bilingual templates, save custom templates, and review recent history in PromptPro.` |
| 简体中文 | 提示词优化扩展；提示词模板库；提示词管理 | `提示词优化扩展与双语模板库｜PromptPro` | `了解 PromptPro 的本地提示词优化、双语模板搜索、自定义模板和本地历史功能。` |

### 4.3 Privacy

| 语言 | 目标关键词方向 | Title 候选 | Description 候选 |
|---|---|---|---|
| English | private prompt optimizer；prompt optimizer without login；local prompt processing | `PromptPro Privacy — Local Prompt Processing Without an Account` | `Learn how PromptPro handles prompts, browser storage, permissions, and user-triggered actions without requiring an account.` |
| 简体中文 | 提示词隐私；无需账号的提示词优化；本地提示词处理 | `PromptPro 隐私说明｜本地处理与浏览器存储` | `了解 PromptPro 的提示词处理、浏览器存储、权限用途和无需账号的使用边界。` |

### 4.4 Platforms

| 语言 | 目标关键词方向 | Title 候选 | Description 候选 |
|---|---|---|---|
| English | ChatGPT prompt optimizer extension；AI website prompt tool；supported AI websites | `PromptPro Platforms — AI Website Compatibility and Verification Status` | `See PromptPro’s platform status, including historically verified platforms and configured sites that have not been verified in the current version.` |
| 简体中文 | ChatGPT 提示词优化；AI 网站提示词工具；平台验证状态 | `PromptPro 平台状态｜AI 网站适配与验证说明` | `查看 PromptPro 的平台适配状态，区分历史验证平台和当前版本尚未验证的代码配置平台。` |

### 4.5 Templates

| 语言 | 目标关键词方向 | Title 候选 | Description 候选 |
|---|---|---|---|
| English | AI prompt templates；bilingual AI prompts；writing and coding prompts | `AI Prompt Templates for Writing, Coding, and More | PromptPro` | `Explore bilingual prompt templates for writing, work, coding, translation, marketing, academic, analysis, and creative tasks.` |
| 简体中文 | AI 提示词模板；双语提示词；写作和编程提示词 | `AI 提示词模板｜写作、编程与双语场景 | PromptPro` | `浏览写作、职场、编程、翻译、营销、学术、分析和创意等双语提示词模板分类。` |

**SEO content limits**

- Title 和 Description 是候选值，不在本阶段写入 metadata；
- 不为了关键词编造平台支持、云端模型、用户规模或模板数量；
- 平台页 Description 必须保留验证状态边界；
- canonical、hreflang、Open Graph、JSON-LD 和 sitemap 进入独立 SEO Matrix 阶段；
- 目标关键词只用于组织内容，不在正文中堆叠。

## 5. 国际化检查

### 5.1 正式语言范围

本 Deck 只覆盖：

```text
/（English default locale）
/zh-CN
```

`ja`、`ko`、`de`、`fr`、`es` 仍是规划语言，不生成正式 Copy，不加入导航、sitemap 或 hreflang。

### 5.2 内容长度风险

| 区域 | English 风险 | 中文风险 | 处理原则 |
|---|---|---|---|
| Hero H1 | 可能因关键词表达变长，尤其包含 `locally`、`bilingual templates` 时 | 中文通常更短，但信息密度高 | 不固定高度；允许自然换行；360px 不删减定位 |
| Hero Subtitle | 英文通常比中文长，可能超过两行 | 中文字符密度高，单行信息量大 | Desktop 限制阅读宽度；Mobile 使用自然多行 |
| Primary CTA | `Add to Chrome` | `添加到 Chrome` | Mobile 使用全宽按钮；保持明确的主 CTA 层级 |
| 390px Hero 与 CTA | 英文 Subtitle 和安装 CTA 可能连续占用首屏多行 | 中文 CTA 较短，但 H1 信息密度仍高 | 390px 保持 H1、Subtitle、主 CTA、次 CTA 和截图完整，不通过隐藏内容解决空间问题 |
| Navigation | `Platforms`、`Templates`、`Pricing` 长度适中 | `平台`、`模板`、`定价` 较短 | 以更长语言决定 Header 切换，不在窄屏压缩导航 |
| Platform Badge | `Configured · Not verified` 明显较长 | `代码配置 · 未验证` 也较长 | Badge 内容驱动宽度；必要时在 Card 内换行 |
| Feature Card | 英文说明可能多 20–30% 字符 | 中文标题短但解释密度较高 | Card 高度由内容决定，不截断描述 |
| Template Card | `Historically verified` 等标签占用更多宽度 | 中文分类名较短 | 保留统一语义，不为视觉等宽删掉状态词 |
| Footer | 英文分组链接整体略长 | 中文链接短但组标题仍需清晰 | Mobile 使用自然堆叠或合理分组，保留品牌 CTA 和 Legal |

### 5.3 必须保留的语义

翻译时不能为了缩短而删除以下信息：

- `local` / “本地”；
- `supported` / “支持范围”；
- `historically verified` / “历史验证”；
- `configured · not verified` / “代码配置 · 未验证”；
- `no account required` / “无需账号”；
- `not uploaded to a new remote service` / “不上传到新的远程服务”。

中文可以自然改写句式，但不能把这些边界压缩成“安全”“可用”或“支持”。

### 5.4 语言切换

- Language Switcher 显示 `English` 和 `简体中文`，不只显示国旗；
- 在同一内容页切换到对应语言路径；
- 语言页面不存在时不能静默跳转到空白或 TODO 页面；
- Copy Deck 允许英文和中文有不同句式，但页面信息层级、事实等级和 CTA 目标必须一一对应。

## 6. 产品事实对应关系

| 文案主题 | 官网可用表述 | 证据来源 | 不能扩大为 |
|---|---|---|---|
| 本地优化 | `Refine prompts locally` / `使用本地规则整理提示词` | `PRODUCT_FACTS.md` D、E；`src/content/optimizer.ts` | 云端 AI 模型改写、先进模型生成 |
| 无需账号 | `No account required` / `无需账号` | `PRODUCT_FACTS.md` E、G | 用户中心、云端同步、团队空间 |
| 提示词处理 | `Handled in the browser` / `在浏览器中处理` | `PRODUCT_FACTS.md` E、F、G | 永久保证完全离线、绝对不访问任何数据 |
| 远程服务 | `No new remote prompt-processing service` / `没有新增远程提示词处理服务` | `PRODUCT_FACTS.md` E、F | 对未来版本的永久承诺 |
| 本地存储 | `Stored through browser storage` / `通过浏览器存储保存` | `PRODUCT_FACTS.md` D、E；`src/shared/storage.ts` | 云端备份、跨设备同步 |
| 模板 | 8 个分类及其真实场景 | `PRODUCT_FACTS.md` D；`src/shared/templates/` | 未复核的模板总数、用户私有模板 |
| 平台 | 历史验证与代码配置未验证分组 | `PRODUCT_FACTS.md` C、F、G；`CURRENT_VERSION_VALIDATION.md` | 所有配置站点稳定支持 |
| 用户触发 | `Review and apply when ready` / `先查看再决定是否应用` | `PRODUCT_FACTS.md` D、E | 自动提交、自动发送、自动导航 |

如果产品事实或 Chrome 验证结果更新，先更新事实文档，再更新本 Deck，最后更新正式页面文案。

## 7. 不包含

本文件不包含：

- React 代码；
- 页面实现；
- CSS 或 Design Token 实现代码；
- 组件设计和组件 API；
- canonical、hreflang、JSON-LD、sitemap 或 metadata 实现代码；
- Chrome Web Store 最终 URL；
- 真实截图、平台 Logo 或发布素材；
- 未经事实验证的案例、客户、评分、用户数量或性能数据。

## 8. Copy Deck 完成标准

进入 SEO Matrix、素材清单和页面组件规划前，本 Deck 必须满足：

- 首页 Hero、Feature、Privacy、Platform、Template、Final CTA 均有中英文内容；
- Features、Privacy、Platforms、Templates 四个页面均有目标、H1、Section 和页面级内容方向；
- 每页都有目标关键词方向、Title 候选和 Description 候选；
- 平台状态文案固定为 `Historically verified` / `历史验证` 与 `Configured · Not verified` / `代码配置 · 未验证`；
- 8 个模板分类均有中英文名称和使用场景；
- 每项核心能力均可回溯到 `PRODUCT_FACTS.md` 或明确源码事实；
- 未验证平台、模板数量、隐私边界和本地存储迁移均有保守表述；
- 已记录英文长度、中文字符密度、Hero、Button、Badge 和 Navigation 的布局风险；
- Website IA v2 的 Pricing、FAQ、Support、About、Terms of Use、Changelog 已有内容框架和事实边界；
- 未冻结价格、联系方式、法律主体或版本记录的页面不编造具体内容；
- 文档没有引入 React、CSS、组件实现或 SEO 代码。
