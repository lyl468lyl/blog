---
date: 2019-06-04
category: 前端
tag:
  - 积累
  - code
---
# 前端常用代码块

```js
const currency = (money, needDecimal = true) => {
  // 格式化货币显示
  if (isNaN(money)) {
    return 0;
  }
  let value = ('' + money).split('.');

  let num = value[0].replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  if (needDecimal === true && value.length === 2) {
    // 不带小数位(默认是有小数位)
    num = num + '.' + value[1];
  }
  return num;
};

const fixedDecimal = (value, fixCount = 2) => {
  // 格式化小数位数
  return value ? value.toFixed(fixCount) : 0;
};


// 保留一位小数
export function formatNumber(x) {

 return parseFloat(Number(x).toFixed(1));

}



// 处理大数字的显示
export function CutNumber(x) {

 if (x === '-' || (!x && x !== 0)) {

  return '-';

 }

 if (x >= 10000000) {

  return `${parseFloat((x / 10000000).toFixed(1))}KW`;

 } else if (x >= 10000) {

  return `${parseFloat((x / 10000).toFixed(1))}W`;

 } else if (x >= 1000) {

  return `${parseFloat((x / 1000).toFixed(1))}K`;

 }

 return parseFloat(x);

}


// 生成带get参数的url
export function makeUrl(uri, params) {

 const paramsArray = [];

 Object.keys(params).forEach(key => params[key] && paramsArray.push(`${key}=${params[key]}`));

 if (uri.search(/\?/) === -1) {

  uri += `?${paramsArray.join('&')}`;

 } else {

  uri += `&${paramsArray.join('&')}`;

 }

 return uri;

}
```

## 助手函数

```js
import { Component } from "react";


/* 
    React组件中需要顺序执行 setState 时, 应该使用这个封装, 将回调封装为 Promise
    方便使用 await 顺序执行
*/

export function $(context: Component): { setState(state: any): Promise<void> } {
  return {
    setState(state: any): Promise<void> {
      return new Promise(resolve => {
        context.setState(state, () => {
          resolve();
        });
      });
    }
  };
}


/* 
    延时执行, 将 setTimeout 封装为 Promise, 方便在循环中实现轮询操作
    使用 await sleep 类似其他语言的 sleep 操作
*/

export function sleep(seconds: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}
```

## 动态修改网站图标

```js
const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = data.systemFavicon;
    document.getElementsByTagName('head')[0].appendChild(link);
```

## 问题处理

```
// 图片403
<meta name="referrer" content="no-referrer" />
```

# JavaScript

## 基础函数

### DOM

#### 鼠标右击（右键）

```javascript
// 绑定右击事件
bindEvent(divChess, 'mousedown', function (event){
    // 禁止鼠标右键(右击)弹出选项卡
    divChess.oncontextmenu = function(e){
        return false;
    } 
    let target = event.target
    // 判断是否为右击操作
    if(event.button==2){
        if(target.classList.contains('cell')){
            toggleClass(target, 'flag')
        }
    }

})
```

## 工具函数集合

### DOM操作

```javascript
// 获取页面元素
var e = function (element) {
    return document.querySelector(element)
}

// 给父元素的子节点添加内容
var appendHtml = function (element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

// 绑定事件
var bindEvent = function (element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

// 开关某一个类
var toggleClass = function (element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}
```

### JavaScript功能块

```javascript
// 打印显示结果
var log = console.log.bind(console)

// 返回1 - num 之间的数字（ 包括 num ）
function getRandNum(num) {
    return Math.floor(Math.random() * num + 1)
}
```
