import { navbar } from 'vuepress-theme-hope'

export default navbar([
  { text: '笔记', link: '/', activeMatch: '^/(?!nav).*' },
  { text: '导航', link: '/nav' },
  // {text: '文章', link: '/article', activeMatch: '^/'},
  // { text: '导航', link: '/home', activeMatch: '^/home' },
])
