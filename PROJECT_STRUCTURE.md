# X-AGEING 官网项目结构说明

> 上海小龄生物医药技术有限公司官方网站 — 基于 Next.js 16 + Tailwind CSS + Framer Motion + next-intl 构建

---

## 技术栈总览

| 技术 | 版本 | 用途 |
|---|---|---|
| Next.js | 16.1.6 | React 全栈框架，App Router 模式，SSR/SSG |
| React | 19.2.3 | UI 库 |
| TypeScript | 5.x | 类型安全 |
| Tailwind CSS | v4 | 原子化 CSS 样式 |
| Framer Motion | 12.x | 页面动效（淡入、滑入、交错、滚动触发） |
| next-intl | - | 中英双语国际化（`/zh/...` `/en/...`） |
| React Hook Form | - | 表单状态管理 |
| Zod | - | 表单数据校验 |
| clsx + tailwind-merge | - | CSS 类名合并工具 |

---

## 目录结构总览

```
x-ageing-website/
├── public/                     # 静态资源（图片、视频、字体）
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── layout.tsx          # 根布局
│   │   ├── globals.css         # 全局样式 & 设计系统
│   │   └── [locale]/           # 国际化路由（zh / en）
│   │       ├── layout.tsx      # 带 Header/Footer 的语言布局
│   │       ├── page.tsx        # 首页
│   │       ├── about/          # 企业介绍模块（6 个页面）
│   │       ├── products/       # 产品与解决方案（3 个页面）
│   │       ├── news/           # 新闻资讯（2 个页面）
│   │       └── contact/        # 联系我们（1 个页面）
│   ├── components/
│   │   ├── layout/             # 全局布局组件（导航、页脚）
│   │   ├── sections/           # 首页各个区块组件
│   │   └── ui/                 # 通用 UI 原子组件
│   ├── i18n/                   # 国际化配置
│   ├── lib/                    # 工具函数
│   ├── messages/               # 中英文翻译 JSON
│   └── middleware.ts           # 语言路由中间件
├── next.config.ts              # Next.js 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 依赖与脚本
```

---

## 根目录配置文件

### `package.json`
项目元信息和依赖声明。定义了 `dev`、`build`、`start` 三个脚本。所有运行时依赖（next、react、framer-motion、next-intl、react-hook-form、zod 等）和开发依赖（tailwindcss、typescript、eslint 等）均在此声明。

### `next.config.ts`
Next.js 配置文件。关键操作是通过 `createNextIntlPlugin` 包裹默认配置，使 next-intl 的国际化与 Next.js 路由系统深度集成。

### `tsconfig.json`
TypeScript 编译配置。启用严格模式（`strict: true`），配置路径别名 `@/*` → `./src/*`，使项目中可以用 `@/components/...` 的方式引入模块。

---

## `src/middleware.ts` — 语言路由中间件

拦截所有页面请求，根据浏览器语言偏好或 Cookie 自动将用户重定向到 `/zh/...` 或 `/en/...`。排除 `api`、`_next`、静态文件等路径不做处理。

---

## `src/app/` — 页面目录

### `src/app/layout.tsx` — 根布局
最顶层的 HTML 壳子，仅传递 `children`，不包含任何样式或逻辑。实际的 `<html>` 和 `<body>` 标签由下层 `[locale]/layout.tsx` 负责渲染。

### `src/app/globals.css` — 全局样式 & 设计系统
整个网站的样式基础，包含：

| 内容 | 说明 |
|---|---|
| **主题色变量** | `--color-primary: #0D9488`（科技感蓝绿）、`--color-dark: #0A0A0A`、灰色系列等 |
| **字体栈** | Inter（英文）+ Noto Sans SC（中文）+ 系统字体回退 |
| **响应式字号** | `.text-display`、`.text-heading`、`.text-subheading`、`.text-body-lg` 均使用 `clamp()` 实现流式缩放 |
| **Scroll-snap** | `.scroll-snap-container` 和 `.scroll-snap-section` 在桌面端（≥1024px）启用全屏区域滚动 |
| **Hero 渐变遮罩** | `.hero-gradient` — 从上到下的多层半透明黑色渐变，覆盖在背景图/视频之上 |
| **分割线** | `.section-divider` — 60px 宽的主题色装饰线 |

---

### `src/app/[locale]/layout.tsx` — 语言布局（核心）

每个语言版本的公共外壳，职责：

1. **语言校验** — 检查 URL 中的 `locale` 是否为 `zh` 或 `en`，否则返回 404
2. **加载翻译** — 通过 `getMessages()` 加载对应语言的 JSON 翻译文件
3. **注入 Provider** — 用 `<NextIntlClientProvider>` 包裹页面，使所有子组件可用 `useTranslations()`
4. **渲染布局** — 输出 `<html lang="zh">` + `<Header />` + `<main>{页面内容}</main>` + `<Footer />`
5. **SEO 元数据** — 根据语言动态生成 `title`、`description`、`keywords`、`hreflang`

---

### 首页 `src/app/[locale]/page.tsx`

组合 5 个区块组件，外层用 `.scroll-snap-container` 包裹实现桌面端全屏滚动：

```
HeroSection      → 全屏视觉冲击 + Slogan
BusinessCards    → 三大核心业务卡片
WhyNow           → 为什么是现在（三大趋势）
PainPoints       → 行业痛点 vs 解决方案
CTASection       → 底部联系表单
```

---

### 企业介绍 `src/app/[locale]/about/`

| 文件 | 路由 | 内容 |
|---|---|---|
| `page.tsx` | `/about` | 总览页：公司简介 + 核心理念 + 市场方向 + 核心优势 + 子页导航卡片 |
| `company/page.tsx` | `/about/company` | 公司详情：完整介绍 + 使命/市场 双栏 + 4 条核心优势 |
| `team/page.tsx` | `/about/team` | 科学家团队：4 个团队成员占位卡片（首席科学家/技术总监/临床负责人/产品总监） |
| `certifications/page.tsx` | `/about/certifications` | 企业资质：占位页面，待内容更新 |
| `patents/page.tsx` | `/about/patents` | 发明专利：占位页面，待内容更新 |
| `partners/page.tsx` | `/about/partners` | 合作单位：10 家合作机构列表（中山医院、和元生物、中科创星等） |

---

### 产品与解决方案 `src/app/[locale]/products/`

| 文件 | 路由 | 内容 |
|---|---|---|
| `page.tsx` | `/products` | 总览页：2 大产品平台 + 4 个解决方案预览 + 研发管线入口 |
| `solutions/page.tsx` | `/products/solutions` | 解决方案详情：医美机构 / 体检中心 / 三甲医院 / 品牌方联合开发 |
| `pipeline/page.tsx` | `/products/pipeline` | 研发管线：5 条管线的名称、阶段、进度条动画（20%~75%） |

---

### 新闻资讯 `src/app/[locale]/news/`

| 文件 | 路由 | 内容 |
|---|---|---|
| `page.tsx` | `/news` | 新闻列表：分类 Tab（公司动态/行业资讯/文章发表）+ 文章卡片列表 |
| `[slug]/page.tsx` | `/news/seed-funding` | 新闻详情：目前硬编码了天使轮融资的文章，后续可接入 CMS |

---

### 联系我们 `src/app/[locale]/contact/`

| 文件 | 路由 | 内容 |
|---|---|---|
| `page.tsx` | `/contact` | 左栏联系信息（公司名/联系人/邮箱/地址）+ 右栏商务合作表单 + 底部招贤纳士区域 |

---

## `src/components/` — 组件目录

### `layout/` — 全局布局组件

#### `Header.tsx` — 顶部导航栏
- **固定定位**，滚动时背景从透明变为白色毛玻璃（`backdrop-blur`）
- **桌面端**：水平菜单 + 鼠标悬停下拉子菜单（Framer Motion 动画）
- **移动端**：汉堡按钮 → 全屏抽屉菜单
- 包含语言切换按钮
- 导航项配置：企业介绍（5 个子项）、产品与解决方案（3 个子项）、新闻资讯（3 个子项）、联系我们（2 个子项）

#### `Footer.tsx` — 页脚
- 深色背景（`bg-dark`）三栏布局：品牌信息 / 快速链接 / 法律声明
- 底部显示 ICP 备案号 + 版权信息（年份动态生成）

#### `LanguageToggle.tsx` — 语言切换按钮
- 显示 "EN" 或 "中文"，点击后保持当前路径切换到另一种语言
- 样式根据 `scrolled` 状态自适应（透明背景时白色 / 白色背景时深色）

---

### `sections/` — 首页区块组件

#### `HeroSection.tsx` — 首屏英雄区
- **全屏高度**，深色背景 + Unsplash 高清图片 + 渐变遮罩
- 5 个浮动圆形装饰元素（循环上下动画 + 透明度变化）
- "X-AGEING" 标签 → 逐字淡入 Slogan → 副标题 → 双按钮（了解更多 / 联系我们）
- 底部滚动指示器（鼠标滚轮图标动画）

#### `BusinessCards.tsx` — 三大核心业务
- 标题 + 副标题 + 装饰线
- 3 张卡片（AI 健康管理 / 功能外泌体 / 临床研究转化），每张包含 SVG 图标 + 标题 + 描述
- 交错动画（stagger）依次出现，悬停时边框变色 + 阴影加深

#### `WhyNow.tsx` — 为什么是现在
- 浅灰背景 (`bg-light`) 区分上下区块
- 3 张卡片（技术拐点/国家议题/消费变化），左上角大号半透明数字（01/02/03）

#### `PainPoints.tsx` — 行业痛点与解决方案
- 2×2 网格，每个卡片分上下两层：
  - **上半**（浅灰底）：红色感叹号 + 痛点描述
  - **下半**（白色底）：绿色对勾 + 解决方案

#### `CTASection.tsx` — 底部行动号召
- 深色背景，左右两栏布局
- **左侧**：标题 + 说明文字
- **右侧**：联系表单（姓名/公司/电话/邮箱/需求），用 React Hook Form + Zod 做校验
- 提交成功后显示感谢提示

---

### `ui/` — 通用 UI 原子组件

#### `Button.tsx` — 按钮
支持 3 种样式变体和 3 种尺寸：

| 变体 | 外观 |
|---|---|
| `primary` | 主题色实心背景，白色文字 |
| `outline` | 白色边框，透明背景（用于深色区域） |
| `ghost` | 无边框，主题色文字 |

#### `SectionWrapper.tsx` — 区块包裹器
为每个内容区块提供统一的样式和动效：
- 响应式内边距（`py-20 md:py-28`）
- 最大宽度容器（`max-w-7xl`）
- 可选深色模式（`dark` prop）
- 可选 scroll-snap 对齐（`snap` prop）
- 进入视口时自动触发 fadeUp 动画

#### `StaggerText.tsx` — 逐字动画文本
将传入的文本拆分为单个字符，每个字符独立执行淡入 + 上移动画，延迟递增（0.03s/字），形成打字机效果。支持渲染为 `h1`~`h3`、`p`、`span` 标签。

#### `MotionDiv.tsx` — 动效容器
通用的 Framer Motion 包裹组件，支持传入自定义动画变体和延迟时间，进入视口时触发动画。

---

## `src/i18n/` — 国际化配置

### `routing.ts` — 路由定义
声明支持的语言列表 `["zh", "en"]` 和默认语言 `"zh"`。这份配置被中间件、导航工具、布局共同引用。

### `request.ts` — 服务端消息加载
在服务端根据请求的 `locale` 参数动态 `import` 对应的翻译 JSON 文件（`zh.json` 或 `en.json`），注入到页面渲染上下文中。

### `navigation.ts` — 导航工具
基于 next-intl 创建带语言前缀的导航工具：
- `Link` — 替代 `next/link`，自动添加 `/zh` 或 `/en` 前缀
- `useRouter` — 替代 `next/navigation`，切换语言时保持路径
- `usePathname` — 获取不含语言前缀的当前路径
- `redirect` — 服务端重定向

---

## `src/messages/` — 翻译文件

### `zh.json` — 中文内容
### `en.json` — 英文内容

两份文件结构完全对称，按模块组织：

```json
{
  "nav": { ... },          // 导航菜单文案
  "hero": { ... },         // 首屏 Slogan、副标题、按钮
  "business": { ... },     // 三大业务板块
  "whyNow": { ... },       // 为什么是现在
  "painPoints": { ... },   // 痛点与解决方案（数组）
  "cta": { ... },          // 底部表单标签
  "about": { ... },        // 企业介绍所有子页面内容
  "products": { ... },     // 产品、解决方案、管线
  "news": { ... },         // 新闻分类标签
  "contact": { ... },      // 联系方式
  "footer": { ... }        // 页脚法律信息
}
```

在组件中通过 `useTranslations("hero")` 获取对应模块，再用 `t("slogan")` 读取具体字段。

---

## `src/lib/` — 工具函数

### `cn.ts` — 类名合并
组合 `clsx`（条件拼接类名）和 `tailwind-merge`（智能合并冲突的 Tailwind 类），全项目组件统一用 `cn()` 函数处理 className。

### `animations.ts` — Framer Motion 动效预设
定义 7 种可复用动画变体：

| 名称 | 效果 |
|---|---|
| `fadeUp` | 从下方 30px 淡入上移 |
| `fadeIn` | 原地淡入 |
| `slideInLeft` | 从左侧 40px 滑入 |
| `slideInRight` | 从右侧 40px 滑入 |
| `staggerContainer` | 父容器，子元素依次延迟 0.1s 出现 |
| `staggerItem` | 配合 staggerContainer 的子元素动画 |
| `scaleIn` | 从 90% 缩放淡入到 100% |

---

## 数据流示意

```
用户访问 /zh/about/partners
         │
         ▼
   middleware.ts          ← 检测 locale，设置 Cookie
         │
         ▼
   [locale]/layout.tsx    ← locale="zh"，加载 zh.json，渲染 Header + Footer
         │
         ▼
   about/partners/page.tsx ← useTranslations("about") 读取中文内容
         │
         ▼
   SectionWrapper + motion ← 进入视口触发 stagger 动画
         │
         ▼
   浏览器渲染 10 家合作单位卡片
```

---

## 如何运行

```bash
# 开发模式
npm run dev           # http://localhost:3000 → 自动跳转 /zh

# 生产构建
npm run build         # 输出到 .next/
npm run start         # 启动生产服务器

# 访问
http://localhost:3000/zh    # 中文版
http://localhost:3000/en    # 英文版
```

---

## 待完成事项

- [ ] 替换 Hero 背景为公司专属图片/视频
- [ ] 补充科学家团队真实照片与简介
- [ ] 补充企业资质和发明专利详情
- [ ] 接入表单提交后端（邮件通知）
- [ ] 新闻系统接入 CMS（如 Sanity）替代硬编码
- [ ] 自托管 Noto Sans SC + Inter 字体
- [ ] 百度统计 / 百度站长验证
- [ ] ICP 备案号更新
- [ ] JSON-LD 结构化数据
- [ ] sitemap.xml 生成
