---
date: 2021-01-24
category: 前端
tag:
  - CSS
---

# Css常见问题解决

## 伪类元素换行

```css
.xxx:after {
    content: '需要换行的元素&#13;&#10;下一行';
    white-space: pre;
}
```
