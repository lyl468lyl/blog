---

date: 2013-9-110

category: datahub-sass

tag:

  - datahub-sass

---

# datahub-sass 项目



1. 环境选择

```perl
#主机目录
192.168.50.60/home/data/sass_aps


```



2.nginx 配置

```perl
#/home/data/sass_aps/nginx/conf/nginx.conf
user www-data;
worker_processes auto;
pid /run/nginx.pid;
error_log /var/log/nginx/error.log;
#include /etc/nginx/modules-enabled/*.conf;

events {
        worker_connections 768;
        # multi_accept on;
}

http {

        ##
        # Basic Settings
        ##

        sendfile on;
        tcp_nopush on;
        types_hash_max_size 2048;
        # server_tokens off;

        # server_names_hash_bucket_size 64;
        # server_name_in_redirect off;

        include /etc/nginx/mime.types;
        default_type application/octet-stream;

        ##
        # SSL Settings
        ##

        ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
        ssl_prefer_server_ciphers on;

        ##
        # Logging Settings
        ##

        #access_log /var/log/nginx/access.log;

        ##
        # Gzip Settings
        ##

        gzip on;

  server { 
        listen 80;
        server_name localhost;
        location /app1/ {
             rewrite ^/app1(/.*)$ $1 break;
             proxy_pass http://127.0.0.1:5008;
         }
        location /app2/ {
              rewrite ^/app2(/.*)$ $1 break;
              proxy_pass http://127.0.0.1:5001;
         }
        location /ss/ {
              rewrite ^/ss(/.*)$ $1 break;
              proxy_pass http://127.0.0.1:9990;
         }      
        
    }

        # gzip_vary on;
        # gzip_proxied any;
        # gzip_comp_level 6;
        # gzip_buffers 16 8k;
        # gzip_http_version 1.1;
        # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

        ##
        # Virtual Host Configs
        ##

        #include /etc/nginx/conf.d/*.conf;
        #include /etc/nginx/sites-enabled/*;
}


#mail {
#       # See sample authentication script at:
#       # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
#
#       # auth_http localhost/auth.php;
#       # pop3_capabilities "TOP" "USER";
#       # imap_capabilities "IMAP4rev1" "UIDPLUS";
#
#       server {
#               listen     localhost:110;
#               protocol   pop3;
#               proxy      on;
#       }
#
#       server {
#               listen     localhost:143;
#               protocol   imap;
#               proxy      on;
#       }
#}

```

3. 自启动脚本

   ```perl
   #/home/data/sass_aps/start.sh
   #!/bin/bash
   
   # 启动 Nginx 服务
   service nginx start
   
   
   python /app1/app.py &
   
   python /app2/app.py
   
   ```

   

4. Dockerfile 文件

   ```perl
   #/home/data/sass_aps/Dockerfile
   
   # 使用官方的 Python 3.9 基础映像
   FROM python:3.9
   # 设置工作目录
   WORKDIR /app1
   WORKDIR /app2
   
   
   # 将应用程序代码复制到容器中
   #COPY app.py /app
   
   # 安装 Flask
   # 安装Python 3.9 和pip
   RUN pip install Flask
   # 安装Nginx
   RUN apt-get update && apt-get install -y nginx
   RUN apt-get install net-tools
   
   
   
   # 暴露容器内部的端口
   EXPOSE 80
   
   # 启动Nginx和Flask应用
   # 赋予脚本可执行权限
   
   
   # 在容器启动时执行自定义启动脚本
   CMD ["/start.sh" ]
   
   
   ```

   

5. docker 生成镜像

   ```perl
   docker build -t nginx-flask .
   ```

   

6. 生成容器

   ```perl
   docker run -p 5050:80 -v /home/data/sass_aps/start.sh:/start.sh -v /home/data/sass_aps/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /home/data/sass_aps/app1:/app1  -v /home/data/sass_aps/app2:/app2  --name aps -d nginx-flask:latest
   ```

   





