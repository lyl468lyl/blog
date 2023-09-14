---

date: 2013-7-19

category: tugraph

tag:

  - tugraph

---

# tugraph 项目



1. 安装tugraph

```perl
docker run -dt -p 7070:7070 --name tugraph_demo tugraph/tugraph-runtime-centos7
docker exec -it tugraph_demo bash
# 进入docker环境后执行如下命令启动服务
lgraph_server -d start

```

2.启动 TuGraph Explore

```perl
# 1) 下载镜像
$ docker pull antvis/tugraph_explore:1.0.0

// 加载完毕后，提示已加载镜像

// 如果已经将镜像下载到本地了，使用 import
$ docker import antvis/tugraph_explore:1.0.0
# 2)启动容器
$ docker run -d -p 7091:7091 -it antvis/tugraph_explore:1.0.0
$ docker exec -it {container_id} bash

#3)启动 TuGraph Explore
$ cd /usr/src/tugraphexplore
$ npm run dev -- -p 7091

# 访问
http://192.168.50.230:7091/tugraph/explore.html

#链接图数据库

输入admin
密码:73@TuGraph
链接数据库:192.168.50.230:7070

```





