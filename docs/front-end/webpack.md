# Webpack常用配置

## devServer相关配置

### 网络代理

```javascript
  '/xxx/api': {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: {'^': ''},
    onProxyRes(proxyRes, req, res) {
      proxyRes.headers['x-real-url'] = targetUrl + req.url;
    }
  },
```
