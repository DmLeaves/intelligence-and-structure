# 智能与结构——诞生于 AI 时代下的哲学观

一本正在公开写作中的开源书。
在线阅读：<https://DmLeaves.github.io/intelligence-and-structure/>

## 本地预览

```bash
npm install
npm run dev      # 启动写作预览，浏览器打开 http://localhost:5173
npm run build    # 构建静态站点（输出到 .vitepress/dist）
```

## 目录结构

```
index.md                 首页
about.md                 关于本书
chapters/                正文章节（每章一个 .md 文件）
.vitepress/config.mts    站点标题、侧边栏目录等配置
.github/workflows/       推送到 main 分支后自动部署 GitHub Pages
```

新增章节：在 `chapters/` 里建 `.md` 文件，再到 `.vitepress/config.mts`
的 `sidebar` 中加一行链接。

## 参与贡献

欢迎通过 Issue 提勘误、通过 Pull Request 改进内容。

## 许可

正文内容采用 [CC BY-SA 4.0](LICENSE) 许可发布。
