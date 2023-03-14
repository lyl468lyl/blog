---
date: 2023-03-14
category: 前端
tag:
  - 大屏
  - echarts
---

# echarts合并多国数据数据

## 下载地图数据

> 世界地图geo数据访问[Surbowl/world-geo-json-zh](https://github.com/Surbowl/world-geo-json-zh)
> 国内数据 [阿里云数据可视化](http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=33.521903996156105&lng=104.29849999999999&zoom=4)

## 地图数据处理

1. 安装工具 `npm install -g mapshaper echarts-mapmaker`
  [文档](https://echarts-maps.github.io/echarts-geomapping-book-zh/howtos/add-ji-zhou-qu-to-tianjin/)

1. 整理要合并的地图数据

    ```JSON
    {
      "type": "FeatureCollection",
      "features": [
        // 此处放置各国数据
        ...
      ]
    }
    ```

    保存文件命名为`world.json`

1. 通过`https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json`下载国内geojson数据，命名为china.json

1. 执行命令

    ```bash
    merge china.json world.json
    ```

    生成文件 merged_china.json 文件

1. 执行命令

    ```bash
    markjs .\merged_china.json chinaworld.js chinaworld
    ```

    生成echarts可用的地图数据文件, 文件名称为`chinaworld.js`, echars中通过map的type值为`chinaworld`使用
