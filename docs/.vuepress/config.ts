import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/blog/',
  lang: 'zh-CN',
  title: '学习记录',
  themeConfig: {
    home: '/',
    navbar: [
      {text: '首页', link: '/'},
      {text: '收藏', link: '/collection'}
    ],
    repo: 'caigouzi1/blog',
    contributors: false,
    editLink: false,
    lastUpdatedText: '更新时间',
    configureWebpack: {
      resolve: {
        alias: {
          '@': 'path/to/some/dir'
        }
      }
    }
  }
})
