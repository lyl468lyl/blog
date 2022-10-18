// .vuepress/theme/index.ts
import {defineUserConfig, Theme} from 'vuepress'
import {path} from '@vuepress/utils'
import themeConfig from './themeConfig'

const customTheme = (): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: themeConfig,
    alias: {
      '@theme-hope/components/HomePage.js': path.resolve(__dirname, './components/HomePage')
    }
  }
}

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: '工作学习记录',
  theme: customTheme()
  // theme: themeConfig
})
