---
date: 2023-02-24
category: 实践
tag:
  - linux
  - Go
---

# 使用Go打包代理前端代码

## 背景

近日有一前端项目需要写部署文档有甲方内网离线部署。考虑到nginx安装、配置复杂容易出错。遂想到之前使用GO可直接生成运行文件、简化部署流程。

## 生成运行文件

### 代码

```go
package main

import (
 "fmt"
 "log"
 "net/http"
)

func main() {
 http.Handle("/", http.FileServer(http.Dir("static")))
 fmt.Println("访问 http://localhost:8000 查看")
 err := http.ListenAndServe(":8000", nil)
 log.Fatal("ListenAndServe: ", err)
 if err != nil {
  log.Fatal("ListenAndServe: ", err)
 }
}
```

### 打包

本机为windows系统遂需要交叉编译命令如下

```sh
SET CGO_ENABLED=0
SET GOOS=linux
SET GOARCH=amd64
go build

# 或
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build
```

### 运行

```sh
# 如提示权限问题需要执行该命令
chmod 777 main

# 进入文件
 ./main
```

## 部署前端项目

将前端项目放至同层static目录下即可
