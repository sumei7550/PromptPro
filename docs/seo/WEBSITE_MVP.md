# PromptPro 官网 MVP 信息架构与 SEO 基础方案

更新时间：2026-08-21

## 证据与文案边界

本文档用于定义官网 MVP，不代表官网页面已经实现或上线。

平台状态采用以下规则：

- **历史验证通过，本轮未复测**：根据既有验证结果和本轮用户确认，作为已有验证依据；不表述为 2026-08-21 新测试通过。
- **未验证**：当前只有代码配置或规划信息，没有可引用的真实验证依据。
- 官网只能引用 `docs/seo/PRODUCT_FACTS.md` 和 `docs/seo/CURRENT_VERSION_VALIDATION.md` 中已经确认的事实。
- 本方案不新增产品功能，不把未来规划、代码入口或 SEO 关键词写成当前已验证能力。

## 1. 官网目标

### 1.1 服务对象

官网面向以下用户：

- 经常使用 ChatGPT、Claude、Gemini、DeepSeek 等 AI 网站的中文或英文用户；
- 希望在发送提示词前进行整理和优化的个人用户；
- 希望复用写作、编程、营销、职场、翻译、学术、分析和创意类提示词的用户；
- 关注提示词隐私、不希望把提示词上传到新远程服务的用户；
- 希望使用 Chrome 插件，而不是单独登录一个在线提示词工具的用户。

官网不定位为云端 AI SaaS，也不面向需要团队协作、账号体系、云端同步或远程模型调用的用户。

### 1.2 核心价值

PromptPro 的首版官网应围绕以下事实表达价值：

> 在浏览器本地整理提示词，并通过双语模板库复用常见工作场景中的提示词。

核心价值包括：

- 本地优先的提示词优化；
- 中英文模板库；
- 模板搜索和复用；
- 自定义模板和优化历史入口；
- 数据保存在浏览器本地；
- 无需账号；
- 提示词不上传到新的远程服务。

不得将本地规则优化包装为云端 AI 模型能力，也不得承诺所有 AI 网站都具备相同体验。

### 1.3 Chrome Web Store 转化目标

官网首要转化目标是将搜索访问者和产品访问者引导至 PromptPro Chrome Web Store 页面：

[PromptPro Chrome Web Store](https://chromewebstore.google.com/detail/promptpro-local-prompt-op/lakcfmbmainingemilkajglcmlplkhdj?authuser=0&hl=zh-CN)

建议转化路径：

```text
搜索 / 分享访问
    -> 了解本地优先定位
    -> 查看功能、平台范围和隐私说明
    -> 查看真实截图或模板示例
    -> Add to Chrome / 添加到 Chrome
```

安装 CTA 应出现在首页首屏、主体功能说明之后和页面底部。CTA 只负责打开 Chrome Web Store，不自动导航、不代用户安装。

### 1.4 SEO 长期入口目标

官网长期通过三类入口获得自然搜索流量：

1. 本地和隐私：local prompt optimizer、prompt optimizer without login、隐私提示词优化器；
2. 平台和插件：ChatGPT prompt optimizer Chrome extension、Claude prompt optimizer extension 等；
3. 任务和模板：AI writing prompts、coding prompts、marketing prompts、双语提示词模板等。

第一阶段不批量生成相似平台页或模板页，优先建设少量能够解释产品、展示真实内容并推动安装的页面。

## 2. MVP 页面范围

第一版只规划以下 5 个页面：

| 路由 | 页面 | 页面目的 | 主要搜索意图 | 主要 CTA | 内链关系 |
|---|---|---|---|---|---|
| `/` | 首页 | 解释定位并推动安装 | 了解本地提示词优化器和模板工具 | `Add to Chrome` | 链接到 `/features`、`/platforms`、`/templates`、`/privacy` |
| `/features` | 功能页 | 解释已确认的功能模块 | 寻找提示词优化扩展和模板库 | `Add to Chrome`、`See How It Works` | 链接回首页，指向隐私、平台和模板页 |
| `/privacy` | 隐私页 | 建立本地处理和权限信任 | 验证提示词是否上传、是否需要账号 | `Add to Chrome` | 从首页、功能页和页脚进入；链接回功能页 |
| `/platforms` | 平台支持页 | 展示平台状态和使用边界 | 寻找特定 AI 网站的提示词工具 | `Try PromptPro`、`Add to Chrome` | 链接到首页、功能页、隐私页和模板页 |
| `/templates` | 模板库介绍页 | 展示真实模板分类和使用方式 | 寻找 AI 提示词模板和双语模板 | `Explore Templates`、`Add to Chrome` | 链接到功能页、平台页和首页 |

第一版不单独创建 `/about`、平台详情页、模板分类详情页或教程页，避免在没有足够实测和真实内容时扩张页面数量。

### 2.1 首页 `/`

- 页面目的：在几秒内说明 PromptPro 是什么、适合谁以及为什么值得安装。
- 搜索意图：寻找本地 AI 提示词优化器、Chrome 提示词插件或提示词模板工具。
- 核心内容：一句话定位、真实功能、平台状态、隐私说明、真实截图、使用流程、FAQ。
- CTA：`Add to Chrome`、`Explore Features`、`Browse Templates`。
- 内链：首屏链接功能页或安装入口；中段链接平台、模板和隐私；底部再次安装。

### 2.2 功能页 `/features`

- 页面目的：解释当前源码和既有产品事实中已经存在的功能入口。
- 搜索意图：寻找 AI prompt optimizer extension、prompt template library 或 prompt manager extension。
- 核心内容：Prompt 优化、模板库、模板搜索、自定义模板、历史记录、多语言、本地数据管理。
- CTA：`Add to Chrome`、`See How It Works`。
- 内链：每个模块链接到隐私页或模板页；页面顶部和底部链接首页。

### 2.3 隐私页 `/privacy`

- 页面目的：明确数据处理、存储、权限和用户触发边界。
- 搜索意图：确认 prompt optimizer without login、private prompt optimizer 等问题。
- 核心内容：无需账号、提示词处理边界、本地存储、没有发现的远程请求/分析/广告/遥测、权限用途、不自动提交、清除本地数据的说明。
- CTA：`Install PromptPro`。
- 内链：从首页、功能页、平台页进入；链接回功能页和首页。

隐私页必须与 `public/privacy_en.html`、`public/privacy_zh.html`、Manifest 和当前事实文档同步。不得把“本地处理”扩大为未经验证的“完全离线”。

### 2.4 平台支持页 `/platforms`

- 页面目的：展示平台相关信息，但明确区分历史验证和未验证配置。
- 搜索意图：寻找 ChatGPT、Claude、Gemini、DeepSeek 等平台上的提示词工具。
- 核心内容：平台状态、可引用的历史验证范围、代码配置但未充分验证的平台、使用流程、限制、FAQ、截图占位和安装入口。
- CTA：`Try PromptPro`、`Add to Chrome`。
- 内链：链接到功能页、隐私页和模板页；未验证平台不创建独立详情页。

统一声明：

> 平台可用性以当前版本实际验证情况为准。

不得写“支持 X 个 AI 平台”，除非后续有明确、可追溯的验证数据。

### 2.5 模板介绍页 `/templates`

- 页面目的：展示真实模板分类和使用价值，引导用户安装后在 Popup 中搜索和插入模板。
- 搜索意图：寻找 AI writing prompts、coding prompts、marketing prompts、academic prompts、中文提示词模板和双语提示词模板。
- 核心内容：模板分类、精选模板示例、适用场景、变量说明、搜索和插入方式、平台状态提示。
- CTA：`Explore Templates`、`Add to Chrome`。
- 内链：链接功能页、平台页和首页；后续有足够真实内容时再拆分分类页。

## 3. 首页设计

### 3.1 SEO 元信息

英文首版建议：

- Title：`PromptPro — Local Prompt Optimizer & Bilingual Templates`
- Meta Description：`Improve prompts locally and reuse bilingual templates in supported AI websites. No account and no prompt uploads to a new remote service.`

中文首版建议：

- Title：`PromptPro｜本地提示词优化器与双语模板库`
- Meta Description：`在支持的 AI 网站中本地整理提示词并复用中英双语模板。无需账号，提示词不上传到新的远程服务。`

Meta Description 不写：云端 AI、模型能力、完全离线、所有平台稳定支持、用户数量、评分或成功率。

### 3.2 H1

英文方向：

> Improve your AI prompts locally.

中文方向：

> 本地优化提示词，复用双语模板。

H1 下面应立即解释：PromptPro 是 Chrome 插件，提供本地优先的提示词优化和模板复用能力；无需账号，提示词不上传到新的远程服务。

### 3.3 Hero 文案方向

英文方向：

> PromptPro helps you organize prompts locally and reuse bilingual templates while working in supported AI websites.

中文方向：

> PromptPro 帮助你在支持的 AI 网站中本地整理提示词，并通过双语模板库快速复用常见工作场景。

不使用“让 AI 自动变聪明”“由先进模型重写”等模型能力描述。

### 3.4 核心卖点

首页只展示以下卖点：

1. **本地优先提示词优化**：当前源码包含本地规则优化逻辑。
2. **双语模板库**：仓库文案和 locale 声明为 66 个中英双语模板；正式页面上线前应继续以实际模板数据核对数量。
3. **模板搜索**：Popup 中按中英文标题、关键词、描述、标签和分类搜索。
4. **自定义模板**：源码包含自定义模板、变量填写和个人资产入口。
5. **优化历史**：源码包含优化历史入口，并将最近记录保存到浏览器本地存储。
6. **本地数据管理**：设置、模板、历史和使用次数使用 Chrome 本地存储。
7. **无需账号**：当前仓库未发现账号体系。
8. **提示词不上传**：当前源码未发现远程请求，现有隐私页说明提示词在浏览器本地处理；文案应限定为“不上传到新的远程服务”。

### 3.5 CTA

首屏：

- `Add to Chrome`
- `Browse Templates`

主体之后：

- `See How It Works`
- `Read Privacy Details`

底部：

- `Install PromptPro`

所有安装 CTA 指向 Chrome Web Store 页面。没有官网实现前，CTA 仅作为设计要求，不代表已经可点击。

### 3.6 首页结构

```text
Hero：定位 + 安装 CTA
  -> 当前可引用的平台状态
  -> 本地优化说明
  -> 双语模板和搜索
  -> 自定义模板与历史
  -> 使用流程
  -> 隐私与权限摘要
  -> FAQ
  -> 最终安装 CTA
```

平台模块必须显示状态标签，例如：

- `历史验证通过，本轮未复测`
- `代码配置，未验证`

不得显示“稳定支持”或“完全兼容”。

## 4. 功能页

功能页按用户任务组织，不按源码文件组织。

### Prompt 优化

- 说明：在支持的 AI 页面中读取用户主动输入的提示词，使用本地规则进行整理，并提供预览、应用和撤销入口。
- 边界：官网不能把它描述为云端 AI 模型改写，也不能宣称所有平台当前都能正常完成该流程。
- 推荐内链：隐私页、平台页。

### 模板库

- 说明：按写作、职场、编程、翻译、营销、学术、分析和创意等分类组织内置模板。
- 展示：使用真实模板标题、描述、标签和部分可复制内容。
- 边界：模板数量发布前应以实际数据核对，不使用历史文档中的旧数量。
- 推荐内链：模板页、平台页。

### 自定义模板

- 说明：用户可以管理个人模板，并使用变量填写入口。
- 边界：不得宣传云端同步、团队共享或账号绑定。
- 推荐内链：隐私页、模板页。

### 历史记录

- 说明：源码包含优化历史入口，最近记录保存在浏览器本地。
- 边界：页面不宣称无限历史、跨设备同步或云端备份。
- 推荐内链：隐私页。

### 多语言

- 说明：界面和模板内容包含中文、英文切换能力。
- 边界：不把仓库存在的其他 locale 文件自动宣传为完整多语言产品能力；首版官网先聚焦中英文。
- 推荐内链：模板页、首页。

### 本地数据管理

- 说明：设置、模板、历史和使用次数写入 `chrome.storage.local`；旧设置存在从 `chrome.storage.sync` 迁移读取的代码路径。
- 说明权限：`storage`、`scripting`、`contextMenus` 及明确的主机权限用途应在隐私页解释。
- 边界：不使用“零数据访问”或“完全离线”等绝对表达。
- 推荐内链：隐私页。

## 5. 平台页

### 5.1 一级：历史验证过的平台

根据既有验证结果和本轮用户确认，官网设计可以把以下平台归入“历史验证通过，本轮未复测”组：

- ChatGPT；
- Claude；
- Gemini；
- DeepSeek。

页面标注必须使用：

> 历史验证通过，本轮未复测。

这表示曾有验证依据，不表示本轮重新通过，也不承诺当前平台页面版本永久可用。

在官网 MVP 中建议只做总览，不立即创建 4 个独立平台详情页。后续若要创建详情页，每页至少要补齐实际截图、操作步骤、限制和 FAQ。

### 5.2 二级：代码配置但未充分验证的平台

以下平台在 Manifest 和平台检测器中有配置，但当前事实文档没有足够的本轮验证结果，应保持“未验证”：

- 豆包；
- Perplexity；
- Copilot；
- Grok / X Grok；
- Google AI Studio；
- Cursor；
- v0；
- Lovable。

官网可以在平台总览中以“代码配置，未验证”列出，或在首版只写“其他已配置站点”，但不能写成稳定平台支持清单。

统一平台声明：

> 平台可用性以当前版本实际验证情况为准。

### 5.3 平台页内容模板

未来每个平台页使用同一信息结构：

1. 平台名称和状态标签；
2. PromptPro 在该页面的可尝试操作；
3. 实际验证日期和环境；
4. 真实截图；
5. 已知限制；
6. 推荐模板；
7. FAQ；
8. 安装 CTA。

如果某一项没有实际验证证据，就显示“未验证”，不补写推测性结果。

## 6. 模板页

### 6.1 分类展示方式

首版 `/templates` 使用真实分类总览：

- 写作 `Writing`；
- 职场 `Workplace`；
- 编程 `Coding`；
- 翻译 `Translation`；
- 营销 `Marketing`；
- 学术 `Academic`；
- 分析 `Analysis`；
- 创意 `Creative`。

每个分类卡片至少包含：

- 分类名称；
- 适用任务；
- 2—3 个真实模板标题或短示例；
- 是否包含变量；
- 在插件中搜索/插入的说明；
- 指向安装 CTA。

没有真实模板内容的分类不单独生成 SEO 页面。

### 6.2 SEO 可索引内容

模板页应让搜索引擎和用户都能看到真实内容，而不是只有“立即安装”：

- 模板标题；
- 模板用途说明；
- 可复制的短示例或经过脱敏的模板片段；
- 适用语言；
- 适用场景；
- 变量说明；
- 相关分类和平台页链接。

用户私有模板、优化历史和浏览器本地数据不应被索引，也不应上传到官网。

### 6.3 中英文关键词方向

英文：

- AI prompt templates；
- bilingual AI prompts；
- AI writing prompts；
- coding prompts for ChatGPT；
- marketing prompts；
- academic research prompts；
- reusable AI prompts。

中文：

- AI 提示词模板；
- 双语提示词模板；
- ChatGPT 写作提示词；
- AI 编程提示词；
- AI 营销提示词；
- 学术研究提示词；
- 职场提示词模板。

每个页面只选择一个主关键词，其他词作为自然相关词，不堆叠关键词。

### 6.4 后续扩展空间

第二阶段可在有真实内容和使用数据后扩展：

- `/templates/writing`；
- `/templates/coding`；
- `/templates/marketing`；
- `/templates/academic`；
- 其他分类页；
- 使用场景页；
- 模板使用教程。

扩展的前提是每页有真实模板、实际示例、独立搜索意图和明确内链价值。

## 7. SEO 基础规划

### 7.1 URL 结构

MVP：

```text
/
/features
/privacy
/platforms
/templates
```

中英文版本建议使用独立路径，具体实现阶段再确定语言策略：

```text
/en/
/en/features/
/en/privacy/
/en/platforms/
/en/templates/

/zh-CN/
/zh-CN/features/
/zh-CN/privacy/
/zh-CN/platforms/
/zh-CN/templates/
```

在官网技术方案确定前，不同时实现混合语言页面和独立语言路由，避免产生重复内容和错误 canonical。

### 7.2 Title 策略

- 每页一个独立 Title；
- 前半部分描述页面主题，后半部分统一使用 PromptPro 品牌；
- 首页围绕 `local prompt optimizer` 和 `bilingual templates`；
- 功能页围绕 `prompt optimizer extension` 和 `prompt template library`；
- 隐私页围绕 `private prompt optimizer` 和 `without login`；
- 平台页围绕具体平台关键词，但只能配合真实验证状态；
- 模板页围绕 `AI prompt templates` 或具体模板分类。

不得为了关键词加入不存在的云端模型、平台兼容性或商业数据。

### 7.3 Description 策略

- 每页独立 Description；
- 描述用户问题、当前真实能力和下一步 CTA；
- 隐私页明确无需账号、本地处理和权限说明；
- 平台页必须包含“平台可用性以当前版本实际验证情况为准”的同义表达；
- 模板页描述真实分类和模板示例。

### 7.4 H 标签结构

每页只使用一个 H1：

- H1：页面核心主题；
- H2：主要内容模块；
- H3：具体功能、模板分类或 FAQ 问题。

建议首页 H2：

1. Local prompt optimization；
2. Bilingual prompt templates；
3. Search, customize and reuse；
4. Local-first privacy；
5. How PromptPro works；
6. FAQ。

中文页面采用自然中文改写，不直接把英文 H 标签机械翻译后混用。

### 7.5 内链策略

- 全站导航：Features、Platforms、Templates、Privacy、Install；
- 首页向四个核心页面分发权重；
- 功能模块链接到对应隐私说明和模板内容；
- 平台总览链接到功能、模板和隐私，而不是链接到未验证的独立平台页；
- 模板分类链接到相关平台和功能页；
- 每页至少保留一个安装 CTA 和一个返回产品解释页的链接；
- 不创建无内容的“SEO 门户页”。

### 7.6 sitemap / robots 后续需求

官网实现阶段需要新增：

- `sitemap.xml`：只收录实际存在且可访问的官网页面；
- `robots.txt`：允许公开产品页面，禁止本地/私有数据路径；
- canonical URL：每个页面指向自身规范地址；
- Open Graph 和 Twitter Card；
- favicon；
- 中英文版本的 `hreflang`；
- 基础 `SoftwareApplication`、`Organization` 和 `WebSite` 结构化数据。

FAQ 结构化数据只有在页面真实展示 FAQ 内容并满足搜索引擎规则时再添加；不为了 SEO 隐藏虚构问答。

## 8. 官网与插件同步原则

### 8.1 唯一事实来源

官网文案只能引用以下两份文档中已经确认的事实：

- `docs/seo/PRODUCT_FACTS.md`；
- `docs/seo/CURRENT_VERSION_VALIDATION.md`。

如果两份文档出现差异：

1. 优先保留更谨慎的表述；
2. 标记为“未验证”或“本轮未复测”；
3. 先更新事实文档，再更新官网页面；
4. 不通过 SEO 文案推断插件能力。

### 8.2 平台状态同步

- 历史验证通过的平台：官网显示“历史验证通过，本轮未复测”；
- 本轮重新验证通过的平台：只有在验证文档明确记录后，才可改为当前验证状态；
- 仅代码配置的平台：显示“未验证”；
- 平台页面 DOM、输入框或写回流程发生变化时，立即降低官网表述等级。

### 8.3 隐私与权限同步

- 官网、Chrome Web Store 和扩展隐私页的本地处理描述必须一致；
- `storage`、`scripting`、`contextMenus` 和主机权限用途必须与 Manifest 一致；
- 不新增远程服务、统计或遥测宣传；
- 不把 `chrome.storage.local` 表述为云端同步；
- 不把历史规划、PRD 或旧架构文档内容当作当前能力。

### 8.4 截图同步

官网截图只能来自真实扩展界面或已确认的产品素材。截图需要标注版本和来源，不能使用 AI 生成的 UI 图作为真实功能证明。

## 9. 下一步官网技术方案建议

当前仓库没有官网代码，因此建议先做技术选型和最小落地，而不是直接修改插件仓库结构：

1. 优先选择支持静态生成的轻量 Web 技术栈，减少首屏 JavaScript 和第三方脚本；
2. 明确官网独立目录或独立仓库，避免与 Chrome 扩展构建产物混用；
3. 首版使用已有 `store-assets/` 截图，并补充真实浏览器截图；
4. 使用固定的 Chrome Web Store CTA，不引入账号系统；
5. 默认不接入分析、广告或遥测，若未来需要统计必须单独审查隐私边界；
6. 先实现 5 个 MVP 页面和中英文页面策略，再补 sitemap、robots、canonical、结构化数据；
7. 部署后通过 Search Console 验证索引状态，再根据真实曝光和安装点击数据扩展平台/模板页面。

## 10. 当前仍需验证的问题

- ChatGPT、Claude、Gemini、DeepSeek 的历史验证记录需要在 `CURRENT_VERSION_VALIDATION.md` 中补充具体日期、环境、步骤和证据位置；当前文档只记录本轮未复测。
- 以上四个平台当前页面版本的输入框识别、浮动按钮、优化预览、写回、撤销、模板插入和刷新后状态仍需复测。
- 豆包、Perplexity、Copilot、Grok、Google AI Studio、Cursor、v0、Lovable 仍为未验证，不应作为稳定平台卖点。
- 实际内置模板数量需要在官网上线前从当前模板数据重新核对；“66 个”目前属于仓库文案/locale 声明，不应在没有再次计数时扩展为更多数量。
- Chrome 版本和 Chrome Web Store 线上包与工作区 `dist-new/` 的对应关系仍未在本轮确认。
- 官网域名、部署平台、独立目录/仓库、语言路由和截图版权/来源尚未确定。
- 是否接入安装点击统计尚未决定；如果接入，必须先完成隐私和数据流审查。

