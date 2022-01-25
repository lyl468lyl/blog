# nginx相关

## 漏洞扫描

```nginx
    location ~ ^/(wp|think-php|phpmyadmin)/.*\.php$ {
    access_log off;
    log_not_found off;
    return 444;
}
```

> 444 状态码表示不返回内容就直接断开连接，省流量。如果用到这些路径，需配置重写，放到子目录
