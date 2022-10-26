export type IWebItem = {
  title: string
  link: string
  icon?: string
}

export type ICategary = {
  category: string
  list: IWebItem[]
}

export const webList: ICategary[] = [
  {
    category: 'React',
    list: [
      { title: 'Ant Design 文档', link: 'https://ant-design.antgroup.com/components/overview-cn/' },
      { title: 'Umi 文档', link: 'https://umijs.org/zh-CN/docs' },
      { title: 'Taro 文档', link: 'https://docs.taro.zone/docs' },
    ],
  },
  {
    category: 'Vue',
    list: [
      { title: 'Vue2 文档', link: 'https://cn.vuejs.org/v2/guide' },
      { title: 'Antd Vue 文档', link: 'https://1x.antdv.com/docs/vue/introduce-cn/' },
      { title: 'Vue3 文档', link: 'https://cn.vuejs.org/guide/introduction.html' },
      { title: 'Element 文档', link: 'https://element.eleme.cn/#/zh-CN/component/installation' },
      { title: 'VuePress 文档', link: 'https://vuepress.vuejs.org/zh/guide/' },
    ],
  },
  {
    category: '微信相关',
    list: [
      { title: '微信公众平台', link: 'https://mp.weixin.qq.com/' },
      { title: '微信小程序文档', link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/' },
    ],
  },
  {
    category: '技术文档',
    list: [
      { title: 'docker', link: 'https://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP' },
      { title: 'Kubenetes', link: 'https://k8s.easydoc.net/docs/dRiQjyTY/28366845/6GiNOzyZ/9EX8Cp45' },
    ],
  },
]
