---
date: 2023-01-04
category: 前端
tag:
  - 大屏
  - echarts
---
# 可视化大屏

- [大屏原型图](https://www.pmdaniu.com/storages/123891/a6cfee2e80382b72a4c5ef27b35f99ec-70319/start.html?_d=Thu%20Dec%2001%202022%2009%3A19%3A18%20GMT%200800%20%28%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4%29%3F_d%3DThu%20Dec%2001%202022%2022%3A59%3A02%20GMT%200800%20%28%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4%29%3F_d%3DMon%20Dec%2012%202022%2010%3A58%3A01%20GMT%200800%20%28%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4%29?_d=Wed%20Jan%2004%202023%2010:07:22%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)#p=%E6%95%B0%E6%8D%AE%E5%85%B1%E4%BA%AB%E9%97%A8%E6%88%B7&g=1)
- [ThreeJS 线相关](https://juejin.cn/post/7078932375127719966)
- [动画库](https://juejin.cn/post/6844904016292347918)  
- [3D轮播图](https://wlada.github.io/vue-carousel-3d/guide/)
- [灯果可视化:可视化模板参考](http://www.dengguobi.com/?type=store)

## echarts图表

[配置项](https://echarts.apache.org/zh/option.html#title)  
[示例](https://echarts.apache.org/examples/zh/index.html)  

### echarts配置渐变色

```js
color: {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
    offset: 0, color: '#FFD87580' // 0% 处的颜色
  }, {
    offset: 1, color: '#FFD87526' // 100% 处的颜色
  }],
  global: false // 缺省为 false
}
```

### 参考案例

- [echarts社区](https://www.makeapie.cn/echarts)
- [echarts Demo集](https://www.isqqw.com/)
