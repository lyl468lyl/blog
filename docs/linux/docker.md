---
date: 2021-04-03
category: 后端
tag:
  - linux
  - docker
---
# Docker Nginx部署

## 服务器地址

```bash
vm@10.2.24.41 
P@ssw0rd
```

## nginx文件代理

- docker-compose.yaml添加软连接

```yaml
    version: '3.5'
    services:
      web:
        container_name: nginx
        image: nginx:1.13
        restart: always
        ports:
          - 80:80
          - 443:443
        volumes:
          - ./nginx/conf.d:/etc/nginx/conf.d:ro
          - ./nginx/ssl:/etc/nginx/ssl:ro
          - ./nginx/static:/etc/nginx/static:ro
          - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
          - /home/vm/www/innet:/var/www/html:ro
    networks:
      default:
        external: true
        name: appNet
```

```bash
  // 重启docker
  docker-compose restart
  // docker列表
  docker container ls 或 (docker ps)
  //进入docker
  docker exec -it e26420ec272c /bin/bash
```
