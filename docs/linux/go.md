---
date: 2023-02-23
category: 后端
tag:
  - Go
---


# 使用Gin初始化一个Go项目

## 安装Go语言环境

进入[官网](https://golang.google.cn/dl/)下载windows系统的安装包，当前版本为go1.20.1.windows-amd64.msi

## 初始化项目

### 配置代理

[代理文档](https://goproxy.cn/)

```sh
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```

### 创建项目

```sh
# xxx为项目名称
go mod init xxx
```

根据[Gin](https://gin-gonic.com/zh-cn/docs/quickstart/)文档执行即可
