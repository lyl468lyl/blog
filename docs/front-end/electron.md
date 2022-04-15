---
date: 2020-02-29
category: 前端
tag:
  - electron
---

# electron项目初始化

## 1. 开发目录生成

- 创建 umi 项目并安装electron

  ```javascript
  yarn create umi // 完成文件初始化操作
  yarn add electron --dev
  yarn add electron-is-dev
  ```

## 2. 添加main.js

  ```javascript
const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const urlLocation = isDev ? 'http://localhost:8000' : `file://${path.join(__dirname, './dist/index.html')}`

  mainWindow.loadURL(urlLocation)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
  ```

## 3. 修改package.json  

  ```javascript
{
    "name": "ant-design-pro",
    "version": "1.0.0",
    "private": true,
    "main": "main.js",
    "description": "An out-of-box UI solution for enterprise applications",
    "scripts": {
        "build": "umi build",
        "start": "umi dev",
        "start:dev": "cross-env REACT_APP_ENV=dev MOCK=none umi dev",
        "dev:electron": "concurrently \"wait-on http://localhost:8000 && electron .\"  \" yarn start\" "
    }
}
  ```

### 注意

由于需要同时运行yarn start 命令结束时运行yarn  electron的命令启动electron所以需要用到concurrently。命令存在先后顺序需要使用wait-on。

```node
yarn add concurrently wait-on  --dev
```

更多技巧参考0查看<https://segmentfault.com/a/1190000019607202?utm_source=tag-newest>

## 4.使用electron-builder打包

使用命令安装electron-builder

```node
yarn add electron-builder  --dev
```

注意：

由于网络问题，需要添加环境变量：ELECTRON_MIRROR值为：<http://npm.taobao.org/mirrors/electron/>

淘宝镜像地址：<https://npm.taobao.org/mirrors/>
