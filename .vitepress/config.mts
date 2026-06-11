import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '我的开源书',
  description: '一本正在写作中的开源书',

  // GitHub Pages 项目站点需要以仓库名作为路径前缀。
  // 如果将来改了仓库名，这里要同步修改；用自定义域名时改为 '/'
  base: '/my-open-book/',

  lastUpdated: true,

  // README 是给 GitHub 仓库首页看的，不编入书中
  srcExclude: ['README.md'],

  themeConfig: {
    nav: [
      { text: '开始阅读', link: '/chapters/preface' },
      { text: '关于本书', link: '/about' }
    ],

    sidebar: [
      {
        text: '正文',
        items: [
          { text: '前言', link: '/chapters/preface' },
          { text: '第一章', link: '/chapters/chapter-01' }
        ]
      }
    ],

    outline: { label: '本页目录', level: [2, 3] },

    // 推送到 GitHub 后把 your-name/my-open-book 换成实际仓库
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-name/my-open-book' }
    ],
    editLink: {
      pattern: 'https://github.com/your-name/my-open-book/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    search: { provider: 'local' },

    footer: {
      message: '本书采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans">CC BY-SA 4.0</a> 许可发布',
      copyright: 'Copyright © 2026 作者名'
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
