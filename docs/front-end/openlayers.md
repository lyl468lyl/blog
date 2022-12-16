---
date: 2021-12-24
category: 前端
tag:
  - openlayers
  - 地图 
---

# openlayers自定义地图图层

## 使用maptiler可完成切图

> 免费版会有水印，需要使用付费版  
> [下载](/blog/utils/MapTilerPjb.rar)

## 瓦片地图汇总

参考：`https://www.cnblogs.com/HandyLi/p/11137367.html`  

> arcgis街道图  
> 默认图：`https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}`  
> 灰色图：`https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}`  
> 深蓝夜色：`https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}`  
>
> googlemap: lys参数可选值包括：h（街道图）、m（街道图）、p（街道图）、r（街道图）、s（影像无注记）、y（影像含注记）、t（地形图）  
> `https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}`
>
> 高德地图  
> 街道（z>=3才有数据）：`https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}`  
> 影像图：`https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}`  
>
> OSM
> 街道图（国外服务器，访问较慢）：
> `https://c.tile.openstreetmap.org/{z}/{x}/{y}.png`
> `https://tile-b.openstreetmap.fr/hot/{z}/{x}/{y}.png`

## 相关扩展插件

- [ol-wind](https://www.npmjs.com/package/ol-wind) : 风矢量场图绘制  
- [turfjs](https://turfjs.fenxianglu.cn/category/#cdn%E9%93%BE%E6%8E%A5) : 地理相关计算
- [thunderforest](https://www.thunderforest.com/maps/landscape/) : 等高线图层
- [windy](https://www.windy.com/) ：Leaflet实现各种功能参考

## 实用代码片段

```js
  // 参考自：https://turfjs.fenxianglu.cn/category/interpolation/isobands.html
  import * as turf from '@turf/turf'

  // 生成随机数据
  const extent = [0, 30, 20, 50]
  const cellWidth = 100
  const pointGrid = turf.pointGrid(extent, cellWidth, {units: 'miles'})

  for (const i = 0; i < pointGrid.features.length; i++) {
      pointGrid.features[i].properties.elevationLayer = Math.random() * 10
  }

  // 给数据分组
  const breaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 数据区间
  const lines = turf.isobands(pointGrid, breaks, {zProperty: 'elevationLayer'});

  // 生成数据加入图层
  let vectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(lines, { featureProjection: 'EPSG:3857' }),
  });
  this.elevationLayer = new VectorLayer({
    source: vectorSource,
    style: (feature) => {
      return new Style({
        stroke: new Stroke({
          color: '#1a91c5',
        })
      });
    },
  });
this.map.addLayer(this.elevationLayer)
```
