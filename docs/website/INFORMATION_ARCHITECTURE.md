# PromptPro 官网信息架构

更新时间：2026-09-02

本文档用于冻结 PromptPro 官网 Website IA v2、用户访问路径、导航、页面职责、CTA、内链和语言 URL 关系。本阶段不涉及页面正文开发或完整 SEO Implementation。

## 1. 网站地图

### 1.1 当前已存在页面

```text
/
/features
/privacy
/platforms
/templates
/faq
/support
/terms
```

当前实现状态：Homepage、Features、Privacy、Platforms、Templates、FAQ、Support、Terms 已完成；Pricing、About、Changelog 保持未开放，不创建空路由。

### 1.2 Website IA v2

```text
Home
Product: Features · Platforms · Templates · Pricing
Resources: FAQ · Support · Changelog
Company: About
Legal: Privacy Policy · Terms of Use
```

`Pricing`、`Changelog` 和 `About` 仍属于规划页面；`FAQ`、`Support` 和 `Terms of Use` 已有真实正文和正式路由。未完成页面不创建空路由、不使用 `#` 或占位域名。`Features`、`Platforms`、`Templates`、`Privacy` 的现有路径保留。

未来 SEO Growth IA 仅作规划：`Use Cases`（Writing、Coding、Marketing、SEO、Translation 及经事实和关键词研究确认的其他场景）。Blog 只记录为未来可能性，不进入当前导航。

### 1.3 正式语言路径

首版正式语言为 `en` 和 `zh-CN`，使用独立语言路径：

```text
/
/features
/privacy
/platforms
/templates

/zh-CN/
/zh-CN/features
/zh-CN/privacy
/zh-CN/platforms
/zh-CN/templates
```

根路径 `/` 直接渲染默认英文首页，不进行重定向。英文 default locale 不使用 URL 前缀；正式 URL 统一不使用 trailing slash。

### 1.4 未来语言

以下语言仅作为规划配置保留：

```text
ja
ko
de
fr
es
```

未来语言在具备完整的本地化页面、页面级 SEO metadata、语言审校和事实审查前，不生成正式页面，不加入正式 sitemap，也不作为当前官网支持语言宣传。

## 2. 用户访问路径

官网的主访问和转化路径如下：

```text
SEO 搜索
    ↓
首页 / 内容页
    ↓
了解 PromptPro 的定位和核心功能
    ↓
查看功能、模板、隐私和平台状态
    ↓
前往 Chrome Web Store
```

### 2.1 首页路径

```text
搜索或分享访问
    ↓
Hero：产品是什么、适合谁
    ↓
功能价值和使用方式
    ↓
平台状态与使用边界
    ↓
隐私说明
    ↓
Chrome Web Store 安装 CTA
```

### 2.2 内容页路径

平台页、模板页和隐私页可以作为搜索落地页，但都必须提供清晰的产品解释和回到安装路径的 CTA，不创建脱离真实内容的 SEO 门户页。

## 3. Header 信息架构

### 3.1 Desktop

Desktop Header 包含以下信息层级：

```text
Logo
    ├── Features
    ├── Platforms
    ├── Templates
    ├── Pricing（未启用时显示为不可用项）
    ├── Chrome Web Store CTA
    └── Language Switcher
```

具体职责：

- **Logo**：返回当前语言版本的首页。
- **导航**：进入 Features、Platforms、Templates；Pricing 纳入 IA，在页面未完成前不启用为链接。
- **CTA**：进入 Chrome Web Store 安装入口。
- **Language Switcher**：在同一内容页面的 `en` 与 `zh-CN` 路径之间切换；如果对应语言页面不存在，不应静默跳转到无内容页面。

### 3.2 Mobile

Mobile Header 包含：

```text
Logo
    ├── Menu Button
    └── 展开的 Mobile Navigation
            ├── Features
            ├── Platforms
            ├── Templates
            ├── Pricing（未启用时显示为不可用项）
            ├── Language Switcher
            └── Chrome Web Store CTA
```

移动端不是 Desktop Header 的简单缩小版：

- 导航默认收起，通过 Menu Button 打开；
- 菜单需要有明确的打开、关闭和焦点行为；
- CTA 在狭窄屏幕下需要保持可点击，不应被导航文本挤压；
- 语言切换属于 Mobile Navigation 的完整功能，而不是隐藏在不可见区域；
- 菜单打开时页面滚动和遮罩行为需要在 Wireframe/交互规范阶段单独确定。

## 4. Footer 信息架构

Footer 按栏目组织，不在本阶段冻结视觉排列。

### Product

- Features
- Platforms
- Templates
- Pricing（未启用时不作为链接）

### Resources

- FAQ（未启用时不作为链接）
- Support（未启用时不作为链接）
- Changelog（无真实更新记录前不创建）

### Company

- About（未启用时不作为链接）

### Legal

- Privacy Policy
- Terms of Use（未启用时不作为链接）

Footer 左侧品牌区域包含一句事实审查后的产品定位、Add to Chrome CTA 和 Legal 链接；不创建独立 Install 列，不添加不存在的社交入口。Chrome Web Store URL 未冻结前 CTA 保持 disabled/unavailable，并保留集中配置。

## 5. 页面职责

### 5.1 首页 `/`

目标：

- 说明 PromptPro 是什么；
- 说明适合什么用户和使用场景；
- 建立本地处理和隐私信任；
- 引导用户前往 Chrome Web Store。

主要内容模块：

- Hero；
- 功能价值；
- 隐私优势；
- 平台状态；
- 模板入口；
- 使用方式；
- Chrome Web Store CTA。

首页是主要转化页，同时向 Features、Platforms、Templates 和 Privacy 分发内链。

### 5.2 Features `/features`

目标：

- 解释 PromptPro 当前已经确认的核心能力；
- 说明提示词优化、模板搜索、模板复用、自定义模板、历史和本地数据管理等功能边界；
- 引导用户安装或继续了解模板和隐私。

Features 不新增产品能力，不将未来规划功能写成当前功能。

### 5.3 Privacy `/privacy`

目标：

- 建立用户对本地处理、存储和权限边界的信任；
- 解释不要求账号、不接入新远程提示词处理服务以及用户触发边界；
- 提供与扩展隐私页和 Manifest 一致的说明。

Privacy 页面必须保持谨慎表述，不把“本地处理”扩大成未经验证的“完全离线”，也不能将 `chrome.storage.local` 表述为云端同步。

### 5.4 Platforms `/platforms`

目标：

- 解释 PromptPro 的平台适配范围和使用边界；
- 让用户理解平台状态可能随当前版本和页面 DOM 变化；
- 引导用户查看隐私、功能并前往安装。

平台内容必须区分：

- **历史验证**：曾有验证依据，但本轮未复测；
- **已配置未验证**：源码或 Manifest 有配置，但当前没有足够的真实验证证据。

平台总览不应把所有代码配置站点写成稳定支持，不创建没有真实验证内容的独立平台详情页。

### 5.5 Templates `/templates`

目标：

- 展示真实模板分类和使用场景；
- 说明模板搜索、复用、变量和插入方式；
- 提供与功能页、平台页和安装入口的关联。

Templates 是模板相关搜索入口，但不索引用户私有模板、优化历史或浏览器本地数据。没有真实内容的分类不单独生成 SEO 页面。

## 6. 页面 CTA 规则

### 6.1 主 CTA

主 CTA 的 UI 文案为：

> Add to Chrome / 添加到 Chrome

所有主安装 CTA 应指向经过最终复核和冻结的 Chrome Web Store URL。当前 URL 尚未冻结，代码和文档只保留 disabled/unavailable 状态，不使用候选 URL 或占位 URL。

### 6.2 次 CTA

次 CTA 包括：

- 查看功能；
- 查看模板；
- 查看平台状态；
- 阅读隐私说明。

次 CTA 用于帮助用户完成理解，不替代主安装 CTA。

### 6.3 CTA 分布

- 首页首屏：主 CTA + 查看功能或查看模板；
- 功能页：主 CTA + 查看模板；
- 平台页：主 CTA + 查看隐私；
- 模板页：主 CTA + 查看功能或查看平台；
- 隐私页：主 CTA + 返回功能或首页；
- 页面底部：保留一次主安装 CTA。

CTA 不自动导航、不代用户安装、不自动执行插件操作。

## 7. 内链关系

### 7.1 首页

首页链接到：

- Features；
- Platforms；
- Templates；
- Privacy；
- Chrome Web Store 安装入口。

### 7.2 Features

Features 链接到：

- Templates；
- Platforms；
- Privacy；
- 首页；
- Chrome Web Store 安装入口。

### 7.3 Platforms

Platforms 链接到：

- Privacy；
- Features；
- Templates；
- 首页；
- Chrome Web Store 安装入口。

未验证平台只链接到总览和相关说明，不创建无证据的独立平台详情页。

### 7.4 Templates

Templates 链接到：

- Features；
- Platforms；
- 首页；
- Chrome Web Store 安装入口。

### 7.5 Privacy

Privacy 链接到：

- 首页；
- Features；
- Chrome Web Store 安装入口。

## 8. URL 和语言关系

正式语言使用独立路径：

```text
/*（English default locale，无 locale 前缀）
/zh-CN/*
```

对应页面应保持一一映射，例如：

```text
/features         ↔ /zh-CN/features
/privacy          ↔ /zh-CN/privacy
/platforms        ↔ /zh-CN/platforms
/templates        ↔ /zh-CN/templates
```

语言切换应优先进入当前页面的对应语言版本，而不是统一跳转到语言首页。页面不存在对应语言内容时，处理方式需在国际化实现阶段冻结，不能生成空白或 TODO 页面。

未来语言 `ja`、`ko`、`de`、`fr`、`es`：

- 当前不属于正式支持语言；
- 不生成正式页面；
- 不加入正式 sitemap；
- 不加入 hreflang；
- 不出现在正式导航和 Footer 的语言选择中；
- 只有在内容、SEO metadata、事实审查和验收完成后，才可单独提升为正式语言。
