import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

export default defineConfig({
  lang: 'zh-CN',
  title: '智能与结构',
  description: '诞生于 AI 时代下的哲学观',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/intelligence-and-structure/logo.svg' }]],

  markdown: {
    config: (md) => {
      // 启用 Markdown 脚注语法 [^1] ... [^1]: 注释内容
      md.use(footnote)
      // 把图片的 alt 文本同时渲染成图下方的图注（编号由 CSS 计数器生成）
      const renderImage = md.renderer.rules.image!
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const img = renderImage(tokens, idx, options, env, self)
        const caption = tokens[idx].content
        if (!caption) return img
        return `<span class="figure">${img}<span class="figcaption">${md.utils.escapeHtml(caption)}</span></span>`
      }
    }
  },

  // GitHub Pages 项目站点需要以仓库名作为路径前缀。
  // 如果将来改了仓库名，这里要同步修改；用自定义域名时改为 '/'
  base: '/intelligence-and-structure/',

  lastUpdated: true,

  // README 是给 GitHub 仓库首页看的；scripts/ 放出图脚本和备份稿，都不编入书中
  srcExclude: ['README.md', 'scripts/**'],

  themeConfig: {
    nav: [
      { text: '开始阅读', link: '/chapters/preface' },
      { text: '关于本书', link: '/about' }
    ],

    logo: '/logo.svg',

    sidebar: [
      { text: '前言', link: '/chapters/preface' },
      {
        text: '打磨工具',
        items: [
          { text: '第一章：元数据', link: '/chapters/chapter-01' },
          { text: '第二章：生命', link: '/chapters/chapter-02' },
          { text: '第三章：概率', link: '/chapters/chapter-03' }
        ]
      },
      {
        text: '走向主角',
        items: [
          { text: '第四章：智能', link: '/chapters/chapter-04' },
          { text: '第五章：意识与结构', link: '/chapters/chapter-05' }
        ]
      },
      {
        text: '回到当下',
        items: [
          { text: '第六章：人工智能', link: '/chapters/chapter-06' },
          { text: '第七章：预见智能时代', link: '/chapters/chapter-07' }
        ]
      }
    ],

    outline: { label: '本页目录', level: [2, 3] },

    // 推送到 GitHub 后把 DmLeaves 换成实际用户名
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DmLeaves/intelligence-and-structure' }
    ],
    editLink: {
      pattern: 'https://github.com/DmLeaves/intelligence-and-structure/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    search: { provider: 'local' },

    footer: {
      message: '本书采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans">CC BY-SA 4.0</a> 许可发布',
      copyright: 'Copyright © 2026 DmLeaves'
    },

    docFooter: { prev: '上一章', next: '下一章' },
    lastUpdatedText: '最后更新于',
    darkModeSwitchLabel: '深色模式',
    returnToTopLabel: '回到顶部'
  },

  vite: {
    server: { host: '127.0.0.1' }
  }
})
