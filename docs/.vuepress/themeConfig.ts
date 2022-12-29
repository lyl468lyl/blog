import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  hostname: 'https://caigouzi1.github.io/blog/',

  author: {
    name: '爵爵爵',
    url: 'https://github.com/caigouzi1',
  },

  iconPrefix: 'iconfont icon-',

  logo: '/avatar.png',

  repo: 'https://github.com/caigouzi1/blog',

  docsDir: '/docs',

  navbar: navbar,

  sidebar: false,
  // sidebar: sidebar,
  blog: {
    description: '一个前端开发者',
    // intro: '/intro.html',
    medias: {
      GitHub: 'https://github.com/caigouzi1',
    },
  },

  footer: '船到桥头自然直',

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  // locales: {
  //   '/': {
  //     navbar: false,

  //     sidebar: false
  //   }
  // },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['woshicaigouzi'],
    },
  },

  plugins: {
    blog: {
      excerpt: false,
      article: '/',
    },
    seo: false,
    pwa: {
      favicon: '/blog/logo.ico',
    },

    // 你也可以使用 Waline
    comment: false,
    mdEnhance: {
      // enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
  },
})
