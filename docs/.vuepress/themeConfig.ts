import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'
import {getDirname, path} from '@vuepress/utils'
const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  hostname: 'https://caigouzi1.github.io/blog/',

  author: {
    name: '龙哥',
    url: 'https://github.com/lyl468lyl',
  },

  iconPrefix: 'iconfont icon-',

  logo: '/avatar.png',

  repo: 'https://github.com/lyl468lyl/blog',

  docsBranch: 'master',

  docsDir: '/docs',

  navbar: navbar,

  sidebar: false,
  // sidebar: sidebar,
  blog: {
    description: '龙哥的博客',
    // intro: '/intro.html',
    medias: {
      GitHub: 'https://github.com/lyl468lyl/blog',
    },
  },

  footer: '我是个神人',

  displayFooter: true,

  pageInfo: ['Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  lastUpdated: true,

  editLink: true,

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
    autoCatalog :false,
    blog: {
      excerpt: false,
      excerptLength: 0,
      article: '/',
    },
    seo: false,
    pwa: {
      favicon: '/blog/logo.ico',
    },

    // 评论插件配置
    comment: {
      provider: 'Giscus',
      comment: true,
      repo:"caigouzi1/blog",
      repoId:"R_kgDOGubgfg",
      category:"Q&A",
      categoryId:"DIC_kwDOGubgfs4CW2ab",
    },
    mdEnhance: {
      // enableAll: true,
      demo: true,  // 代码演示
      vuePlayground: true,  // Vue 交互演示
      playground: {
        // 添加预设
        presets: [
          "ts",
          "vue",
        ],
        // 设置内置预设 (可选)
        config: {
          ts: {
            // ...
          },
          vue: {
            // ...
          },
        },
      },
      include: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
  },
}, {custom: true})
