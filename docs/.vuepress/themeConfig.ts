import {defineThemeConfig} from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default defineThemeConfig({
  hostname: 'https://caigouzi1.github.io/blog/',

  author: {
    name: '爵爵爵',
    url: 'https://github.com/caigouzi1'
  },

  iconPrefix: 'iconfont icon-',

  logo: '/avatar.png',

  repo: 'https://github.com/caigouzi1/blog',

  docsDir: '/docs',

  // navbar
  navbar: navbar,

  sidebar: false,
  // sidebar: sidebar,

  footer: '船到桥头自然直',

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
      '/guide/encrypt.html': ['woshicaigouzi']
    }
  },

  plugins: {
    blog: {
      autoExcerpt: true,
      article: '/'
    },
    seo: false,

    // 你也可以使用 Waline
    comment: false,
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
})
