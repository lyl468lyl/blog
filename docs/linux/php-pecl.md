---
date: 2019-12-27
category: 后端
tag:
  - linux
  - php
---
# php扩展安装

## 情境

​ *源码安装redis扩展*

## 解决方法

- 下载redis的安装包

  地址：<https://github.com/phpredis/phpredis/archive/5.1.1.tar.gz>
  扩展下载地址：<https://pecl.php.net/>

- 使用tar命令解压到指定目录，并进入文件夹

  ```
  tar zcxf phpredis-5.1.1
  ```
  
- 查看扩展目录

    ```
    在phpinfo的结果中，搜索extension_dir找到扩展目录
    ```

- 生成 .configure文件

  ```
  phpize
  ```
  
- 编译到指定目录

    ```
     ./configure --with-php-config=/usr/lib64/php/modules
    ```

- 安装

    ```
    make install
    ```

- 配置扩展信息

    ```
    extension=redis.so
    ```

- php -m 查看

    注意：如果使用nginx代理的服务查看扩展的话，需要重启nginx和php-fpm

    ```
    nginx -s stop //停止nginx
    nginx   //开启nginx
    pkill php-fpm //停止php-fpm
    php-fpm -R  //重启或启动php-fpm
    ```

## 注意

> 如报错:
> PHP Warning: PHP Startup: Unable to load dynamic library '/usr/lib64/php/modules/redis.so' - /usr/lib64/php/modules/redis.so: undefined symbol: php_json_decode_ex in Unknown on line 0

- ### 原因

    这是因为和json扩展加载顺序冲突导致的

- ### 解决

    不要在php.ini里加入extension=redis.so这行，可在php.d文件夹下创建新文件redis.ini，在redis.ini里加入extension=redis.so这行.
    重启php
    php -m 发现redis扩展加载上了
