---

date: 2013-6-25

category: Electron

tag:

  - Electron

---

# Electron构建Vue项目

参考:https://blog.csdn.net/weixin_43558927/article/details/127224465

前置要求

node版本需要在16以上, electron-forge要求至少14.7以上
npm最好使用淘宝镜像, 通过 npm config set xxx xxx 设置对应参数
registry = “https://registry.npm.taobao.org/”
disturl = “https://npm.taobao.org/dist”

下载 electron-quick-start

git clone https://github.com/electron/electron-quick-start.git

cd electron-quick-start

npm install

安装electron相关的插件

npm install --save-dev @electron-forge/cli

npm install --save-dev electron-builder

node install electron --save-dev

node install electron-packager

更换packeage.json文件,如下:

```perl
{
  "name": "aps",
  "version": "1.0.0",
  "description": "生产计划与排成",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "start1": "electron-forge start",
    "buildwin":"electron-builder --win --x64",
    "package": "electron-forge package",
    "win":"electron-packager ./ --platform=win64 --out ./windows  --overwrite  --ignore=node_modules --arch=x64",
    "build": "electron-packager ./dist/ --platform=win32 --arch=x64 --icon=./static/shangjian.ico --overwrite"
  },
 
  "author": "商简智能",
  "license": "CC0-1.0",
  "devDependencies": {
    "electron": "^23.1.4",
    "@electron-forge/cli": "^6.0.5",
    "electron-builder": "^23.6.0",
    "electron-packager": "^17.1.1"
  },

  "build":{
	
    "productName":"生产计划与排成系统",
    "appId":"sj_001",
    
    "directories":{
        "output":"build"
    },
  
    "dmg":{
      "icon":"./static/shangjian.ico",
      "window":{
        "x":"200",
        "y":"150",
        "width":500,
        "height":400
      }
    },
    "mac":{
      "icon":"./static/shangjian.ico",
      "target": [
          "dmg",
          "zip"
        ]
    },

    "win": {
        "icon":"./static/shangjian.ico",
        "target": [
          "nsis",
          "zip"
        ]
    },
 
    "nsis": {
    	
        "oneClick": false,
        "allowElevation": true,
        "allowToChangeInstallationDirectory": true,
        "installerIcon": "static/shangjian.ico",
        "installerHeaderIcon": "static/shangjian.ico",
        "createDesktopShortcut": true,
        "createStartMenuShortcut": true
     }
  }

}

```



上述配置解释:

 "scripts": {
  	// forge组件是官方推荐的, 使用forge来启动测试即可
    "start": "electron-forge start",
    // electron builder 生成可执行文件和安装包
    "buildwin":"electron-builder --win --x64",
    // forge没有仔细查, 目前在macOS环境下是直接打包为macOS的可执行文件.app
    "package": "electron-forge package",
    // 另一个打包组件 packager, 此方式只能生成可执行文件, 没有安装包
    "package-win":"electron-packager ./ --platform=win32 --out ./dist  --overwrite  --ignore=node_modules --arch=x64",
    // 用forge创建可分发的应用程序
    "make": "electron-forge make"
  },

修改main.js 如下

```perl
// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
var os = require("os");
function createWindow () {

  // app.dock.hide();
  // console.log("xxxx");
  // console.log(os.networkInterfaces().en1[1].mac)
  // var mac=os.networkInterfaces().en1[1].mac
  // if(mac!="20:c9:d0:cd:76:71"){

  //   app.quit()
  //   console.log("enter system")
  // }

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: __dirname+ "/static/shangjian.ico",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('./source/index.html')

  // Open the DevTools.
   //mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

```



将vue打包的dist 文件拷贝到,source文件夹中

运行: npm run win //直接运行的文件



对打包的文件加密**1.全局安装 `asar`**

```
　　npm install asar -g
　　
```

**2.在resources目录下使用asar指令进行加密**

　　asar pack ./app app.asar

**将原来的app文件夹删除**就可以了，这样生成的app.asar就加密了之前的源代码，保证了安全性

 ![image-20230321185600790](/Users/li/Library/Application Support/typora-user-images/image-20230321185600790.png)