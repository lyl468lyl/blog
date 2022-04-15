---
date: 2022-03-07
category: 前端
tag:
  - Webpack
---
# Webpack常用配置

## devServer相关配置

### 网络代理

```javascript
  proxy: {
    '/xxx/api': {
      target: targetUrl,
      changeOrigin: true,
      pathRewrite: {'^': ''},
      onProxyRes(proxyRes, req, res) {
        proxyRes.headers['x-real-url'] = targetUrl + req.url;
      }
    }
  }
```
