# npm相关

### 切换镜像源

```bash
# 全局切换
npm config set registry https://registry.npmjs.org

# 临时切换
npm install express --registry https://registry.npmjs.org
```

```
  # 可用镜像源
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
```

> 出现sass相关的安装错误
>
> ```bash
> npm install -g mirror-config-china
> ```