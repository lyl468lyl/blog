import {defineUserConfig} from 'vuepress'
import themeConfig from './themeConfig'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: '工作学习记录',
  theme: themeConfig
  // themeConfig: {
  //   home: '/',
  //   navbar: [
  //     {text: '首页', link: '/'},
  //     {text: '收藏', link: '/collection'}
  //   ],
  //   repo: 'caigouzi1/blog',
  //   contributors: false,
  //   editLink: false,
  //   lastUpdatedText: '更新时间',
  //   configureWebpack: {
  //     resolve: {
  //       alias: {
  //         '@': 'path/to/some/dir'
  //       }
  //     }
  //   },
  //   plugins: {blog: true}
  // }
})
