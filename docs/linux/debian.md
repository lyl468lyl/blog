---
date: 2021-07-08
category: 后端
tag:
  - linux
  - debian
---

# debian常用命令

```bash
# 查看debian版本
cat /etc/debian_version 
```

## 修改文件镜像源

> 打开 /etc/apt/sources.list

```txt
deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian-security buster/updates main
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib

deb-src http://mirrors.aliyun.com/debian-security buster/updates main
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
```

```bash
# 执行
sudo apt update
```
