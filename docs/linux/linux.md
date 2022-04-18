---
date: 2019-11-14
category: 后端
tag:
  - linux
---

# linux相关

> 操作工具
> [xshell](https://51.ruyo.net/test/download_xshell_xftp.html)

> ## 系统管理

```shell
lsof -i :3306 //查看谁在占用该端口
ps -axjf|grep 3306 //搜索相关进程
ls -al /proc/3306 //查看进程详情
nohup node index.js & //不挂断地运行命令，即使终端ssh关闭了也一直运行
```

> ##  文件管理

```shell
mkdir newfile  //创建文件夹
rm -f blog.exe  //删除指定文件
touch test/a.txt //新建文件
rmdir filename  //删除空文件夹
rm -rf  fileName //递归删除文件夹下所有内容
mv A B  //将目录A重命名为B
mv /a ./b/c //将/a目录移动到/b下，并重命名为c
chmod 777 -R *  //文件权限改为:读 写 运行
```

实用博文

- <https://juejin.im/post/5dd292ef518825638b753975>
