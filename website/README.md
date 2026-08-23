# PromptPro Website

PromptPro 官网基础工程，使用 Next.js App Router、TypeScript 和 Vercel。当前阶段为 Website MVP Foundation + Core Pages：Homepage 与 Features 已完成实现，Privacy、Platforms、Templates 仍在开发中。

## 本地启动

在 `website/` 目录执行：

```bash
npm install
npm run dev
```

默认访问 `http://localhost:3000`。默认支持语言：

- English: `en`
- 简体中文: `zh-CN`

未来规划语言配置为 `ja`、`ko`、`de`、`fr`、`es`，当前只作为可扩展配置保留，不生成页面、不加入 sitemap，也不作为正式支持语言。

当前正式 URL strategy 与路由范围包括：

- `/`
- `/features`
- `/privacy`
- `/platforms`
- `/templates`
- `/zh-CN`
- `/zh-CN/features`
- `/zh-CN/privacy`
- `/zh-CN/platforms`
- `/zh-CN/templates`

English 是 default locale，不使用 `/en` 前缀；中文使用 `/zh-CN` 前缀。Privacy、Platforms、Templates 当前由开发中页面骨架承载，不代表页面内容已完成或已经通过发布验收。

## 构建

```bash
npm run build
```

官网构建只在 `website/` 工程内执行，不会触发 Chrome 插件构建，也不修改根目录依赖。

## Vercel 部署

在 Vercel 中导入项目后，将 **Root Directory** 设置为：

```text
website
```

Vercel 使用该目录中的 `package.json` 执行安装和构建。正式域名确定后，可配置 `NEXT_PUBLIC_SITE_URL`，供 metadata、sitemap 和 robots 使用；当前默认值仅为占位地址，不代表正式官网域名。

## 与插件工程隔离

- Chrome 插件源码位于根目录 `src/`，官网不读取插件运行时 API；
- Chrome 插件继续使用根目录构建配置和 `dist-new/`；
- 官网使用自己的依赖、App Router 路由和 Next.js 构建目录；
- 官网不接入数据库、登录、后端 API、分析、广告或遥测；
- 官网页面只能根据 `docs/seo/PRODUCT_FACTS.md` 和验证文档补充公开内容。
