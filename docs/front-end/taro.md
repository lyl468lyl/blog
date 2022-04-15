---
date: 2020-09-07
category: 前端
tag:
  - Taro
---
# Taro开发

## Taro-ui自定义主题

1. 创建 custom-variables.scss 文件

```scss
$color-brand: #fa3e47;

@import "~taro-ui/dist/style/index.scss";
```

2. 入口文件中导入样式文件

```js
  import "./custom-variables.scss";
```

## 别名路径

1. config文件

```js
const path = require("path");

  alias: {
    "@": path.resolve(__dirname, "../src")
  },
```

2. tsconfig.json

```json
    "paths": {
      "@/*": ["./src/*"]
    }
```

## 集成dva

```bash
  yarn add dva-core-ts dva-loading-ts
```
