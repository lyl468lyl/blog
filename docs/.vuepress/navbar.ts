import {defineNavbarConfig} from 'vuepress-theme-hope'

export default defineNavbarConfig([
  // {text: '首页', link: '/home'},
  {text: '文章', link: '/article', activeMatch: '^/article'},
  {text: '收藏', link: '/collection'}
])
