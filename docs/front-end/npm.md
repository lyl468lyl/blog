# npm 相关

## 切换镜像源

```bash
# 全局切换
npm config set registry https://registry.npmjs.org

# 临时切换
npm install express --registry https://registry.npmjs.org
```

## 可用镜像源

> npm -------- `https://registry.npmjs.org/` \
> yarn ------- `https://registry.yarnpkg.com/` \
> cnpm ------- `http://r.cnpmjs.org/` \
> ~~taobao ----- `https://registry.npm.taobao.org/`~~ \
> taobao ----- `https://registry.npmmirror.com/` \
> nj --------- `https://registry.nodejitsu.com/` \
> npmMirror -- `https://skimdb.npmjs.com/registry/` \
> edunpm ----- `http://registry.enpmjs.org/`

## 出现 sass 相关的安装错误

> ```bash
> npm install -g mirror-config-china
> ```

## 常用命令

- 列出软件包所有的以前的版本

```bash
npm view vue versions
```

- 查看所有已安装的 npm 软件包

```bash
npm list

# 仅获取顶层的软件包
npm list --depth=0

# 通过指定名称来获取特定软件包的版本
npm list cowsay
```

- 查看软件包在 npm 仓库上最新的可用版本

```bash
  npm view cowsay version
```
