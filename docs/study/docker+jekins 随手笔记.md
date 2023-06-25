<<<<<<< HEAD


=======
>>>>>>> c5148dba8193fe1c1e78d373a13f718310d27630
---

date: 2013-6-25

category: linux

tag:

  - docker
<<<<<<< HEAD

=======
>>>>>>> c5148dba8193fe1c1e78d373a13f718310d27630
---



# docker+jekins 随手笔记

1.安装docker

```perl
$ uname -r  #通过 uname -r 命令查看你当前的内核版本

$ sudo yum remove docker  docker-common docker-selinux docker-engine #卸载旧版本(如果安装过旧版本的话)

#安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的
$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2 
#设置yum源
$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
#可以查看所有仓库中所有docker版本，并选择特定版本安装
$ yum list docker-ce --showduplicates | sort -r

#安装docker
$ sudo yum install docker-ce
#启动并加入开机启动
$ sudo systemctl start docker
$ sudo systemctl enable docker
#验证安装是否成功
$ docker version

#如果安装不成功,卸载旧的包,再次安装
$ sudo yum erase docker-common-2:1.12.6-68.gitec8512b.el7.centos.x86_64
$ sudo yum install docker-ce

```

开启docker2375端口

```
vim /usr/lib/systemd/system/docker.service
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H fd:// --containerd=/run/containerd/containerd.sock
systemctl daemon-reload // 1，加载docker守护线程
systemctl restart docker // 2，重启docker
```







2.docker 安装nginx

```perl
#第一步 pull nginx
$ docker pull nginx
#创建本地文件夹,与容器产生映射

mkdir -p /data/nginx
mkdir -p /data/nginx/www
mkdir -p /data/nginx/conf
mkdir -p /data/nginx/logs

#创建nginx配置文件. 创建nginx.conf 放到/data/nginx/conf 目录下

user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;
    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

   
    
        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
        }


        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }
    
}

#将前端代码放到 /data/nginx/www中

#可以用如下命令将docker容器的文件拷贝到本地主机,67e为容器的id
docker cp 67e:/etc/nginx/nginx.conf /data/nginx/conf/

#启动容器
docker run --name nginx -p 80:80  -v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /data/nginx/www/dist/:/usr/share/nginx/html/ -v /data/nginx/logs/:/var/log/nginx/ -d nginx
#停止容器：
docker stop 67e
#移除容器：
docker rm 67e

```





jenkins 安装和相关配置

```perl
#官网
https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat/
#下载jenkins
[root@sps-dev software]# yum -y install daemonize
[root@sps-dev software]# yum -y install epel-release



[root@sps-dev software]# wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat/jenkins-2.327-1.1.noarch.rpm --no-check-certificate
[root@sps-dev software]# rpm -ivh jenkins-2.327-1.1.noarch.rpm 
[root@sps-dev software]# vi /etc/sysconfig/jenkins
找到JENKINS_PORT="8080"这行，
修改为自定义的端口号
JENKINS_PORT="9090"

#修改配置
$JENKINS_USER="root"
保存
:wq

#修改配置文件：vi /etc/init.d/jenkins
这里请核实自己的java环境 java home
candidates="
/opt/software/jdk1.8.0_311/bin/java
/etc/alternatives/java
/usr/lib/jvm/java-1.6.0/bin/java


#启动
[root@sps-dev software]# systemctl daemon-reload
[root@sps-dev software]# service jenkins start

#设置开机自启
systemctl enable jenkins

#登录平台
浏览器输入：http://ip:port

#默认密码页面会提示在如下文件中 初始化密码
[root@sps-dev software]# cat /var/lib/jenkins/secrets/initialAdminPassword


#jenkins 卸载
rpm -e jenkins
[root@sps-dev software]# find / -iname jenkins |xargs -n 1000 rm -rf
```









安装配置git

```perl
yum install git

```

系统管理 -> Global Tool Configuration -> Git

![image-20220421105532016](/Users/li/Library/Application Support/typora-user-images/image-20220421105532016.png)



jdk安装

![image-20220421105948590](/Users/li/Library/Application Support/typora-user-images/image-20220421105948590.png)



maven安装



```perl
#maven 下载
[root@sps-dev maven-3.6.3]# wget https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz  --no-check-certificate
[root@sps-dev maven-3.6.3]# tar -zxvf apache-maven-3.6.3-bin.tar.gz 
#设置环境变量
export JAVA_HOME=/opt/software/jdk1.8.0_311
export PATH=$JAVA_HOME/bin:$PATH
export MAVEN_HOME=/opt/software/maven-3.6.3
export PATH=$MAVEN_HOME/bin:$PATH
[root@sps-dev maven-3.6.3]# source /etc/profile

[root@sps-dev maven-3.6.3]# mvn -v

#maven加速

编辑修改 /usr/local/apache-maven-3.6.3/conf/settings.xml
在 <mirrors></mirrors> 标签对⾥添加如下内容即可：
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```



![image-20220421130505989](/Users/li/Library/Application Support/typora-user-images/image-20220421130505989.png)



插件安装:

安装gitlab插件

plugin manager--->gitlab

安装nodejs

plugin manager--->nodejs



安装maven 插件

[安装Maven Integration plugin](https://wiki.jenkins.io/display/JENKINS/Maven+Project+Plugin) 插件





jenkins服务器与gitlab ssh登录

```perl
[root@sps-dev conf]# ssh-keygen -t rsa -C "420949705@qq.com"
拷贝id_rsa.pub到gitlab配置ssh-key
```



![image-20220421133753521](/Users/li/Library/Application Support/typora-user-images/image-20220421133753521.png)





#验证



```perl
[root@sps-dev software]# git clone git@139.219.8.206:szapi/javaweb.git
```





配置nodejs

gloabalToolConfiguration

![image-20220421140046238](/Users/li/Library/Application Support/typora-user-images/image-20220421140046238.png)







全局配置私钥



globalcredentials--->add credentials

![image-20220421141225652](/Users/li/Library/Application Support/typora-user-images/image-20220421141225652.png)



![image-20220421141259495](/Users/li/Library/Application Support/typora-user-images/image-20220421141259495.png)



安装publish over ssh插件

![image-20220421144449025](/Users/li/Library/Application Support/typora-user-images/image-20220421144449025.png)





配置publish over ssh服务器

系统配置

![image-20220421150327244](/Users/li/Library/Application Support/typora-user-images/image-20220421150327244.png)



![image-20220421170425650](/Users/li/Library/Application Support/typora-user-images/image-20220421170425650.png)



创建项目



create item



选择maven项目







![image-20220421151202511](/Users/li/Library/Application Support/typora-user-images/image-20220421151202511.png)





![image-20220421170548431](/Users/li/Library/Application Support/typora-user-images/image-20220421170548431.png)



![image-20220421170605660](/Users/li/Library/Application Support/typora-user-images/image-20220421170605660.png)





![image-20220421170629218](/Users/li/Library/Application Support/typora-user-images/image-20220421170629218.png)



![image-20220421170645620](/Users/li/Library/Application Support/typora-user-images/image-20220421170645620.png)



Exec command也可以插入脚本

![image-20221102153549127](/Users/li/Library/Application Support/typora-user-images/image-20221102153549127.png)

SSH Server是在上面步骤中配置的要连接的远程服务器。

Source files 设置要传输的Jenkins服务器文件路径。全路径=项目的构建路径+Source files。
/var/lib/jenkins/workspace/blog/blog/target/blog-1.0.0.jar = /var/lib/jenkins/workspace/blog/ + blog/target/blog-1.0.0.jar







jekins 前端代码



![image-20220422121139310](/Users/li/Library/Application Support/typora-user-images/image-20220422121139310.png)





![image-20220422121201788](/Users/li/Library/Application Support/typora-user-images/image-20220422121201788.png)



![image-20220422121247160](/Users/li/Library/Application Support/typora-user-images/image-20220422121247160.png)

![image-20220422121217293](/Users/li/Library/Application Support/typora-user-images/image-20220422121217293.png)



![image-20220422140603156](/Users/li/Library/Application Support/typora-user-images/image-20220422140603156.png)





vue 不要用下面的功能,下面的功能部署java时用

![image-20220422140718919](/Users/li/Library/Application Support/typora-user-images/image-20220422140718919.png)



springboot dockerfile

![image-20220321134030456](/Users/li/Library/Application Support/typora-user-images/image-20220321134030456.png)



![image-20220321181823741](/Users/li/Library/Application Support/typora-user-images/image-20220321181823741.png)

创建dockerfile

![image-20220321150619907](/Users/li/Library/Application Support/typora-user-images/image-20220321150619907.png)

```perl
# 基础镜像使用java
FROM java:8
# 作者MAINTAINER liyulong
# VOLUME 指定临时文件目录为/tmp，在主机/data/springboot/tmp目录下创建了一个临时文件并链接到容器的/tmp
VOLUME /tmp /usr/tmp
# 将jar包添加到容器中
ADD JavaWeb_Admin_Pro.jar /usr/local/springboot/JavaWeb_Admin_Pro.jar
ADD JavaWeb_Api_Pro.jar /usr/local/springboot/JavaWeb_Api_Pro.jar
ADD javaweb-common-0.0.1-SNAPSHOT.jar /usr/local/springboot/javaweb-common-0.0.1-SNAPSHOT.jar
ADD javaweb-generator-0.0.1-SNAPSHOT.jar /usr/local/springboot/javaweb-generator-0.0.1-SNAPSHOT.jar
ADD javaweb-system-0.0.1-SNAPSHOT.jar /usr/local/springboot/javaweb-system-0.0.1-SNAPSHOT.jar
#切换目录
WORKDIR /usr/local/springboot
# 修改jar文件的访问时间和修改时间为当前时间,不改变文件的内容
RUN bash -c 'touch JavaWeb_Admin_Pro.jar'
RUN bash -c 'touch JavaWeb_Api_Pro.jar'
RUN bash -c 'touch javaweb-common-0.0.1-SNAPSHOT.jar'
RUN bash -c 'touch javaweb-generator-0.0.1-SNAPSHOT.jar'
RUN bash -c 'touch javaweb-system-0.0.1-SNAPSHOT.jar'

ENTRYPOINT ["java","-server","-Xms128m","-Xmx128m","-Dspring.profiles.active=dev","-jar","JavaWeb_Admin_Pro.jar"]


#暴露9031端口作为微服务
EXPOSE 9031 
```

![image-20220321151836423](/Users/li/Library/Application Support/typora-user-images/image-20220321151836423.png)

```perl
 将jar打包为镜像（docker build -t sps-docker .）
 
 #Dockerfile 和jar包在同一个目录中
 [root@aps jardata]# docker build -t spsdocker .

```

```perl
[root@aps jardata]# docker images;
```

运行镜像

```perl
[root@aps jardata]# docker run --name sps-docker -p 86:9031 -d sps
```

```perl
#进入镜像
[root@aps ~]# docker exec -it a60fccc47a36 /bin/bash

```













docker可视化工具:
porter安装:

https://www.cnblogs.com/davidgu/p/14464906.html

```perl
1) 下载镜像

docker search portainer

# 我们这里安装第一个
docker pull portainer/portainer

2)运行
docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --name prtainer-test portainer/portainer

3)登录
http://42.159.81.133:9000/
4)首次登陆需要注册用户，给admin用户设置密码
5)单机直接选local指定docker
```



https://blog.csdn.net/zgfyxc/article/details/84904920

https://www.cnblogs.com/beyang/p/11416646.html

创建docker-compose文件

![image-20220422143704696](/Users/li/Library/Application Support/typora-user-images/image-20220422143704696.png)

```perl
version: '2'
services:
  web:
    build: /data/springboot/jardata
    ports:
      - 88:9031
    networks:
      - back-tier
    volumes:
      - /data/springboot/jardata/uploads:/usr/local/uploads
 
networks:
  front-tier:
    driver: bridge
  back-tier:
    driver: bridge
```

```perl
#安装docker-compose
[root@sps-dev jardata]# sudo curl -L https://github.com/docker/compose/releases/download/1.23.0-rc3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
#设置文件权限
sudo chmod +x /usr/local/bin/docker-compose
查看版本 :
docker-compose version

docker-compose up -d
#启动Web服务
docker-compose up  -d web
#停止web服务
docker-compose stop web

```





```perl


```









git 相关



```perl
sps-vue前端源码

The repository for this project is empty
You can get started by cloning the repository or start adding files to it with one of the following options.

Command line instructions
You can also upload existing files from your computer using the instructions below.


Git global setup
git config --global user.name "李玉龙"
git config --global user.email "liyulong@szwanggu.com"

Create a new repository
git clone http://139.219.8.206:8081/szapi/javavue.git
cd javavue
git switch -c main
touch README.md
git add README.md
git commit -m "add README"

Push an existing folder
cd existing_folder
git init --initial-branch=main
git remote add origin http://139.219.8.206:8081/szapi/javavue.git
git add .
git commit -m "Initial commit"

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin http://139.219.8.206:8081/szapi/javavue.git

```

jekins 部署vue

cmd excute

```perl

npm install 
rm -rf ./dist/*
npm run build
rm -rf /www/web/site/*
cp -rf ./dist/* /www/web/site
```

```perl

npm install
rm -rf ./dist/*
npm run build
rm -rf /data/nginx/www/dist/*
cp -rf ./dist/* /data/nginx/www/dist
```



