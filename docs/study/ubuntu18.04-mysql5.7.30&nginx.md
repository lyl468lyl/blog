---

date: 2013-6-25

category: linux

tag:

  - 安装mysql

---

# ubuntu18.04 安装mysql5.7.30

```perl
下载源文件
https://downloads.mysql.com/archives/community/

```

![image-20220407132332619](/Users/li/Library/Application Support/typora-user-images/image-20220407132332619.png)

```perl
#查询所有安装mysql模块
dpkg -l |grep mysql


#删除某个模块
apt-get --purge remove   mysql-server-core-5.7 
#1
sudo dpkg -i mysql-common_5.7.30-1ubuntu18.04_amd64.deb
#2
sudo dpkg -i mysql-community-client_5.7.30-1ubuntu18.04_amd64.deb

会提示缺少依赖包libaio1
sudo apt install libaio1
# 如果报错按照提示操作即可 会提示运行👇的命令
sudo apt --fix-broken instalL
#3
sudo dpkg -i mysql-client_5.7.30-1ubuntu18.04_amd64.deb
#4
#安装 mysql-community-server_5.7.29-1ubuntu18.04_amd64.deb
#安装过程中会提示缺少依赖包libmecab2：

sudo apt-get install libmecab2
sudo apt-get install libtinfo5
sudo dpkg -i mysql-community-server_5.7.30-1ubuntu18.04_amd64.deb
安装过程中会要求在粉色的大页面上输入密码，输入两次即可，至此安装完成

#使用
#启动
mysql：service mysql start 
#停止
mysql：service mysql stop
#重启
mysql：service mysql restart


#修改配置文件
root@shangjian:/opt/software# vi /etc/mysql/mysql.conf.d/mysqld.cnf 
注释掉bind-address = 127.0.0.1：

#设置开机自启动
编辑软件源列表：sudo vim /etc/apt/sources.list
末尾添加软件源：deb http://archive.ubuntu.com/ubuntu/ trusty main universe restricted multiverse
更新apt-get：sudo apt-get update


#设置开机自启动
sudo systemctl is-enabled mysql


#在mysql环境下执行授权命令(授权给远程任何电脑登录数据库)

mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'shangjian123456';
FLUSH   PRIVILEGES;




#拉取 nginx 最新版镜像，然后简单启动一个 nginx 容器
docker pull nginx:latest
docker run --name nginx01 -d -p 80:80 nginx

#下载nginx.conf
sudo mkdir -p /home/docker/nginx/{log,ssl,html,conf/conf.d}
sudo chmod -R 755 /home/docker/nginx/html

docker cp nginx01:/etc/nginx/nginx.conf /home/docker/nginx/conf/nginx.conf
docker cp nginx01:/etc/nginx/conf.d/default.conf /home/docker/nginx/conf/conf.d/default.conf

#删除容器和镜像
docker stop nginx01
docker rm nginx01


#重新配置nginx

docker run \
-p 90:80 \
--name nginx-flask \
--restart=always \
--privileged=true \
-v /home/data/sass_aps/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /home/data/sass_aps/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /home/data/sass_aps/nginx/log:/var/log/nginx \
-d nginx:latest

#doker 运行nginx

docker run \
-p 90:80 \
--name nginx \
-v /opt/moudle/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /opt/moudle/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /opt/moudle/nginx/log:/var/log/nginx \
-v /data/gengda/front/dist:/usr/share/nginx/html \
-d nginx:latest


```

```perl
#配置下载文件 多加了 -v 
docker run \
-p 90:80 \
--name nginx \
-v /opt/moudle/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /opt/moudle/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /opt/moudle/nginx/log:/var/log/nginx \
-v /data/gengda/front/dist:/usr/share/nginx/html \
-v /data/gengda/front/file:/usr/share/nginx/file \
-d nginx:latest

#部署文件下载配置
server {
        listen       80;
        server_name  localhost;
        location / {
           add_header Access-Control-Allow-Origin *;
          
            root   /usr/share/nginx/html;
            index  index.html index.htm;
            #try_files $uri $uri/ /index.html;
        }

       
          location /file {
           add_header Access-Control-Allow-Origin *;
          
           alias  /usr/share/nginx/file;
            
            #try_files $uri $uri/ /index.html;
        }
    }
```



