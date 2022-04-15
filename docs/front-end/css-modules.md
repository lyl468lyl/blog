---
date: 2020-03-12
category: 前端
tag:
  - CSS
---
# CSS Modules下使用classnames

## 情境

​ *CSS Modules下使用 classnames 无法将classname转化为 hash 格式*

## 解决方法

```javascript
import classNames from 'classnames/bind';   //引用classnames/bind
import styles from './index.less';
let classStyles = classNames.bind(styles);  //调用classNames


const tabItems = tabList.map((item, idx) => {
  const itemCls = classStyles({
    "item": !(idx === current),
    "active": idx === current
  });

  return (
    <div key={idx} path={item.path} className={[itemCls]}>{item.name}</div>
  )
```

或者：

```javascript
import classNames from 'classnames';

<div
  className={classNames(styles.chartTop, {
    [styles.chartTopMargin]: !children && !footer,
  })}
>
  <div className={styles.avatar}>{avatar}</div>
  <div className={styles.metaWrap}>
    <div className={styles.meta}>
      <span className={styles.title}>{title}</span>
      <span className={styles.action}>{action}</span>
    </div>
    {renderTotal(total)}
  </div>
  <span className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}>
    {i + 1}
  </span>
</div>
```
