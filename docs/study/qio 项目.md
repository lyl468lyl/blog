# qio 项目

1. aws 主机同步到物理主机中(云主机挂载物理主机)

```perl
sshfs sj01@192.168.50.230:/opt/sharedata /home/sharedata
```



2. aws 和物理主机 (反向代理) 物理主机response给aws ,需要做nginx反向代理,配置如下

   ```perl
   server {
       listen 10073;
       location / {
           proxy_pass http://$docker_host:10073;
           proxy_set_header HOST $host;
           proxy_set_header X-Forwarded-Host $host:$server_port;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection upgrade;
           proxy_set_header Accept-Encoding gzip;
       }
   }
   
   ```

   

3. 目录存在位置

   ```perl
   #192.168.50.230/opt/coderdata
   #更新脚本的目录
   /opt/coderdata/packages
   
   #更新脚本/opt/coderdata/install_package.sh
   
   #!/bin/bash
   
   # 获取正在运行的容器列表
   containers=$(docker ps --format "{{.Names}}")
   
   # 遍历容器列表
   for container in $containers
   do
               echo "Installing source  in container: $container"
                   
                   # 在容器中执行 pip 安装命令
                       docker exec -it $container pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
                       docker exec -it $container pip install --force-reinstall  /liyulong/isingsolver-0.0.1-cp310-cp310-linux_x86_64.whl
                       docker exec -it $container pip install --force-reinstall  /liyulong/isingmod-1.0.0-cp310-cp310-linux_x86_64.whl
                           echo "Package installed in container: $container"
                               echo "------------------------------"
                       done
   
   ```

   

4. 镜像备份的位置

   ```perl
   /opt/coderdata/image-back/qio-v2.tar
   ```

   

5. 

6. 

7. 

8. 

   