import {navbar} from 'vuepress-theme-hope'

export default navbar([
  // {text: '首页', link: '/home'},
  {text: '文章', link: '/', activeMatch: '^/(?!collection).*'},
  // {text: '文章', link: '/article', activeMatch: '^/'},
  {text: '导航', link: '/collection'}
])
