import {defineThemeConfig} from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default defineThemeConfig({
  hostname: 'https://caigouzi1.github.io/blog/',

  author: {
    name: '爵爵爵',
    url: 'https://mrhope.site'
  },

  iconPrefix: 'iconfont icon-',

  logo: '/logo.svg',

  repo: 'https://github.com/caigouzi1/blog',

  docsDir: '/docs',

  // navbar
  navbar: navbar,

  sidebar: false,
  // sidebar: sidebar,

  footer: '默认页脚',

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    description: '一个前端开发者',
    // intro: '/intro.html',
    medias: {
      GitHub: 'https://github.com/caigouzi1'
    }
  },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234']
    }
  },

  plugins: {
    blog: {
      autoExcerpt: true,
      article: '/'
    },
    seo: false,

    // 你也可以使用 Waline
    comment: {
      type: 'giscus',
      repo: 'caigouzi1/blog',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69'
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
})
