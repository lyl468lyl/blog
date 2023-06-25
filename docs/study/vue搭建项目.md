\---

date: 2013-6-25

category: 前端

tag:

  \- vue

\---

# vue 搭建一个vue的项目

参考:https://blog.csdn.net/weixin_44882488/article/details/124220864



```perl
下载地址：https://nodejs.org/zh-cn/
界面展示
```

 ![image-20230222181601014](/Users/li/Library/Application Support/typora-user-images/image-20230222181601014.png)

```perl
2 .检查node.js版本
查看版本的两种方式
1|node -v
2|node -version
```

 ![image-20230222181639637](/Users/li/Library/Application Support/typora-user-images/image-20230222181639637.png)

```perl
为了提高我们的效率，可以使用淘宝的镜像源
输入：npm install -g cnpm --registry=https://registry.npm.taobao.org 即可安装npm镜像源
以后再用到npm的地方直接用cnpm来代替就好了，因为没有镜像源的话，安装速度比较慢
```

 ![image-20230222181712596](/Users/li/Library/Application Support/typora-user-images/image-20230222181712596.png)

```perl
检查是否安装成功：cnpm -v
```

 ![image-20230222181743145](/Users/li/Library/Application Support/typora-user-images/image-20230222181743145.png)

```perl
搭建vue环境
1、全局安装vue-cli
这里注意：安装vue-cli对node.js的版本是有要求的:
```

 ![image-20230222181844071](/Users/li/Library/Application Support/typora-user-images/image-20230222181844071.png)

```perl
装的两种方式：输入cmd命令
1|npm install -g @vue/cli //这个是从国外下载的比较慢
2|cnpm install -g @vue/cli //这个是从镜像源下载

查看安装的版本（显示版本号说明安装成功）
1|vue --version

如果你原来有版本或者版本比较低，可以升级
1|npm update -g @vue/cli
2|yarn global upgrade --latest @vue/cli
```

### 用cmd命令创建项目

```perl
vue create vue01
```

 ![image-20230222182032359](/Users/li/Library/Application Support/typora-user-images/image-20230222182032359.png)

 ![image-20230222182215220](/Users/li/Library/Application Support/typora-user-images/image-20230222182215220.png)

 ![image-20230222182238543](/Users/li/Library/Application Support/typora-user-images/image-20230222182238543.png)

 ![image-20230222182512419](/Users/li/Library/Application Support/typora-user-images/image-20230222182512419.png)

 ![image-20230222182525662](/Users/li/Library/Application Support/typora-user-images/image-20230222182525662.png)

 ![image-20230222182539365](/Users/li/Library/Application Support/typora-user-images/image-20230222182539365.png)

 ![image-20230222182554497](/Users/li/Library/Application Support/typora-user-images/image-20230222182554497.png)

 ![image-20230222182604615](/Users/li/Library/Application Support/typora-user-images/image-20230222182604615.png)

 ![image-20230222182614858](/Users/li/Library/Application Support/typora-user-images/image-20230222182614858.png)

 ![image-20230222182627770](/Users/li/Library/Application Support/typora-user-images/image-20230222182627770.png)

 ![image-20230222182642798](/Users/li/Library/Application Support/typora-user-images/image-20230222182642798.png)

 ![image-20230222182657928](/Users/li/Library/Application Support/typora-user-images/image-20230222182657928.png)