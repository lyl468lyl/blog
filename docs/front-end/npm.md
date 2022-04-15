---
date: 2021-07-09
category: 前端
tag:
  - npm
---
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

### 私有镜像npm登陆问题

```bash
    npm set registry http://nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/  
    npm config set //nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/:_authToken=NpmToken.3bb085e0-a9b5-36e1-be9f-311bb5630c2b  
```

- 获取authToken

>打开用户目录的 .npmrc，Linux在 ~/.npmrc， Windows在 C:/Users/<用户名>/.npmrc中，找到 \<registry-url\> 对应仓库地址
