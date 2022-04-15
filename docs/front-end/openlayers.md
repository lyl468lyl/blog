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
