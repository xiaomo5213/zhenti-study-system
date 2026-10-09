# 撷墨真题 · 自考英语（专升本）真题学习系统

把原来 6 个各自独立的题型练习页，合并成**一个统一的学习系统**：同一套顶部导航、同一个考期、同一份题库入口。

- 覆盖考期：**2013 年 10 月 — 2026 年 4 月**，共 26 期
- 覆盖题型：**第一 ~ 第六部分**（阅读判断 / 阅读选择 / 概括段落大意与补全句子 / 填句补文 / 填词补文 / 完形补文）
- 题量：**26 × 50 = 1300 题**，对应笔试客观题 **70 分**

## 目录结构

```
zhenti-study-system/            ← 站点根目录（整个文件夹上传 Git 即可）
├── index.html                  # 学习中心：题型卡片 + 26 期考期速查表
├── wordbook.html               # 生词本（WordForest 词书风格：连播/搜索/导出 CSV）
├── _sys/
│   ├── sys.css                 # 统一顶部导航样式
│   ├── sys.js                  # 统一导航注入 + 考期同步 + 顶栏生词本入口
│   ├── catalog.js              # 索引数据（由题库自动生成，勿手改）
│   ├── dict.css                # 点词查词弹窗样式
│   ├── dict.js                 # 点词查词（分词 / 词典查询 / 生词本）
│   └── favicon.svg             # 站点图标
├── modules/                    # 6 个题型（各自独立、自包含）
│   ├── reading-quiz/           # 第一部分 阅读判断
│   ├── ydxz/                   # 第二部分 阅读选择
│   ├── dldy/                   # 第三部分 概括段落大意与补全句子
│   ├── tianju/                 # 第四部分 填句补文
│   ├── tianci/                 # 第五部分 填词补文
│   └── zikao-test/             # 第六部分 完形补文（填空判分交互）
└── .nojekyll                   # GitHub Pages 需要（避免下划线目录被忽略）
```

## 合并方式（为什么这样做）

6 个题型页的题库结构完全不同（字段名、渲染逻辑、分页变量都不一样），直接揉进一个 SPA 会互相污染全局变量、且改动面极大。因此采用**「外壳 + 原页」**方案：

1. 每个题型页**原封不动**保留自己的 `index.html` / `data*.js` / `translations*.js` / `lecture-*` 文件；
2. 只在 `<head>` 注入 1 行样式、在 `</body>` 前注入 1 行脚本（见下），加一个**固定顶部导航栏**；
3. 导航栏用「填期次输入框 / 点上一页下一页」的方式**驱动原页面跳转到指定考期**，所以一切原有功能（提交判分、全文翻译、发音、🎧 讲解模式）都不受影响。

每个题型页新增的内容只有这两处：

```html
<!-- </head> 之前 -->
<script>document.documentElement.className += " xt-shell";</script>
<link rel="stylesheet" href="../../_sys/sys.css">
<link rel="stylesheet" href="../../_sys/dict.css">

<!-- </body> 之前 -->
<script src="../../_sys/catalog.js"></script>
<script src="../../_sys/sys.js"></script>
<script src="../../_sys/dict.js"></script>
```

另外 `html.xt-shell body { padding-top: ... }` 会给页面顶部留出导航栏高度，导航栏 `z-index: 900`，低于各页自己的弹窗（1000/2000）和讲解模式（9000），**弹窗与讲解模式打开时会自然盖住导航栏**，不会串层。

## 核心功能

| 功能 | 说明 |
|---|---|
| 统一导航 | 顶部固定栏：品牌 / 6 个题型切换 / 期次下拉 / 回学习中心 |
| 考期同步 | 切换题型时自动停在**同一个考期**（`?p=N` + 本地记录双保险） |
| 学习中心 | 6 张题型卡片（题量、分值、说明）+ 26 期 × 6 题型的直达矩阵 |
| 搜索定位 | 考期速查表支持按「考期 / 材料标题」搜索，如输入 `澳大利亚` |
| 继续上次 | 首页显示上次练习的题型与考期，一键续做 |
| 移动端 | ≤860px 导航栏变两行，题型标签横向滑动 |
| 讲解模式·移动端 | ≤900px 改为全屏 + 三 Tab（📄 材料 / ✅ 详解 / ☰ 题号）+ 底部固定控制条，微信内单手可操作 |
| 界面统一 | 6 个题型均为同一套布局：标题 + 期次 + 左材料卡（🎧 讲解 / 🌐 翻译 / 音色）+ 右题目卡 + 底部翻页 |
| 点词查词 | 材料中的英文单词可点击：弹窗显示 单词 / 英美发音 / 音标 / 中文释义 / 原文例句；移动端为底部抽屉，可收藏进生词本 |

## 本地预览

直接双击 `index.html` 即可（各页面都是纯静态、兼容 `file://`）。
若要更接近线上环境，在站点根目录起一个静态服务：

```bash
cd zhenti-study-system
python -m http.server 8080
# 打开 http://localhost:8080
```

## 发布到 Git（GitHub Pages）

本机已 `git init` 并完成首次提交（49 个文件，分支 `main`），**只剩两步**。

### 第 1 步：在 GitHub 新建仓库并推送

1. 打开 https://github.com/new ，仓库名建议 `zhenti-study-system`（纯静态站点必须是 **Public**，免费 Pages 才可用）
2. 不要勾选 README / .gitignore / License（保持空仓库）
3. 创建后在页面复制仓库地址，回到本机终端执行（把 `<你的用户名>` / `<仓库名>` 换成实际值）：

```bash
cd "C:/Users/Administrator/WorkBuddy/2026-10-08-20-20-57/zhenti-study-system"
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

> 推送需要身份认证：HTTPS 会弹出浏览器登录授权，或用 Personal Access Token（勾 `repo`）；若已配 SSH key，把地址换成 `git@github.com:<用户名>/<仓库名>.git` 即可免密。

### 第 2 步：开启 Pages

1. 进仓库 → **Settings → Pages** → Source 选 `Deploy from a branch`
2. Branch 选 `main`、目录选 `/ (root)` → Save
3. 等 1~3 分钟构建完成，访问 `https://<你的用户名>.github.io/<仓库名>/`

### 以后再更新内容

```bash
cd "C:/Users/Administrator/WorkBuddy/2026-10-08-20-20-57/zhenti-study-system"
git add -A && git commit -m "描述本次改动" && git push
```

Pages 会自动重新部署（约 1 分钟生效）。

### 不想用命令行？

GitHub 网页也能传：新建空仓库 → 打开仓库页 **Add file → Upload files** → 把整个 `zhenti-study-system` **文件夹拖进上传区**（GitHub 会保留目录结构）→ Commit changes → 再按第 2 步开 Pages。

### 常见问题

| 现象 | 原因 / 处理 |
|---|---|
| 顶部导航栏消失、`_sys` 请求 404 | `.nojekyll` 没上传（Pages 的 Jekyll 会忽略下划线开头的目录），重新上传该文件 |
| 页面打开是 404 | Pages 目录选成了 `/docs`，应选 `/ (root)` |
| 样式/题库不生效 | 检查 `modules/*/index.html` 是否被包进了子目录，正常应在 `modules/<题型>/index.html` |
| 想换成自己的域名 | Settings → Pages → Custom domain 填域名，按提示加 CNAME |

> 部署到自己的服务器（宝塔 / Nginx）更简单：把整个 `zhenti-study-system` 文件夹丢进站点根目录即可，无需任何 rewrite 规则。

## 语音与网络依赖

- 朗读 / 讲解模式使用线上 TTS：`https://api.xiemojy.mom/v1/audio/speech`，需要联网。
- 其余所有内容（题库、翻译、解析、划线）都在本地文件里，**断网也能正常做题**。

## 维护提示

- 新增考期：改对应题型目录下的 `data*.js`（追加一期），再重新生成一次 `_sys/catalog.js` 里的 `XT_PERIODS` / `XT_TITLES` 即可，首页矩阵会自动多一行。
- `modules/ydxz|dldy|tianju|tianci|zikao-test` 下的 `lecture-core.js` / `lecture-core.css` 是 5 份完全相同的副本（自包含部署，避免跨目录相对路径失效），如需升级讲解模式引擎，记得 5 个目录一起替换；`reading-quiz` 用的是独立引擎 `lecture.js` + `lecture-ui.js` + `lecture.css`，类名与前者兼容，移动端 Tab 逻辑两边都已内置。
- **点词查词**（`_sys/dict.js` + `_sys/dict.css`）：6 个题型材料区 + 讲解模式材料自动分词，点单词弹出词典卡片。数据源：有道词典 JSONP（中文释义，浏览器直连可用）+ Free Dictionary API（音标/英英例句，CORS 开放）+ 有道 dictvoice（英音/美音）+ 当前短文原文例句；带 7 天本地缓存与词形还原（dogs→dog）。若某环境拦截了 Dictionary API，仅音标/词典例句缺失，中文释义与发音不受影响。
  - 自建代理（可选）：页面里设 `window.XT_DICT_PROXY='https://你的域名/dict-proxy.php?q='`，代理返回 `{word, mean:[{pos,zh}]}` 即可替代有道直连。
  - 例句翻译：6 个题型均已覆盖 —— ydxz 走 translationsMap；tianju / tianci / reading-quiz / zikao-test / dldy 在各自页面渲染时把当期「英文句子 → 中文译文」写入 `window.__xtTrans`（挖空句与填答句都登记，兼容填空题），弹窗按句子精确匹配 + 归一化兜底；例句可整句朗读（有道 dictvoice）。
  - 释义排版：有道返回的 `adv. 前文; prep. 在……上面; …` 会按分号切片，**无词性的条目继承上一个词性**，再把**相同词性的义项用「；」合并成一行**（不同词性才分行），重复义项自动去重；英英释义同理。弹窗与生词本一致。
  - 生词本：收藏存 localStorage `xt.wordbook.v1`（单词/音标/释义/原文例句/例句翻译），顶栏 📖 入口打开 `wordbook.html`（WordForest 词书风格：序号色块 + 蓝色单词 + 红色词性 + 英美发音 + 连播 + 搜索 + 导出 CSV + 删除/清空），后续可对接 review_cards.php 同步「真题生词」卡包。
- 完形补文为「填空判分」交互：在左侧短文空格中输入单词 → 提交答案 → 自动判分（每题 1.5 分）并标绿/标红，右栏点击题目可定位空格、提交后可查看解析。
