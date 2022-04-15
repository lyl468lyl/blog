---
date: 2021-04-10
category: 前端
tag:
  - CSS
  - 积累
---

# 公用样式

```css
$color-primary: #E02727;
$color-font-main: #0f0f0f;
$color-font-sub: #424242;
$color-font-info: #7f7f7f;
$color-white: #ffffff;
$color-info: #fcfcfc;
$color-border: #d1d1d1;
$color-shadow: rgba(15, 15, 15, 0.15);

$font-size-large: 16px;
$font-size-medium: 14px;
$font-size-small: 12px;
$font-weight-main: 500;
$font-weight-sub: 400;
$padding: 16px;
$margin: 16px;

* {
  padding: 0;
  margin: 0;
}

body,
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(225, 226, 229);
  font-size: 14px;
  font-weight: 400;
  color: #424242;
}

.color {
  &-primary {
    color: $color-primary;
  }

  &-font {
    &-main {
      color: $color-font-main;
    }

    &-sub {
      color: $color-font-sub;
    }

    &-info {
      color: $color-font-info;
    }
  }
}

.bg {
  &-white {
    background-color: $color-white;
  }

  &-info {
    background-color: $color-info;
  }

}

.border {

  border: 1px solid $color-border;

  &-dashed {
    border: 1px dashed $color-border;
  }

  &-bottom {
    border-bottom: 1px solid $color-border;

    &-dashed {
      border-bottom: 1px dashed $color-border;
    }

    &-unset {
      border-bottom: unset !important;
      border-bottom: 0 !important;
    }

  }

  &-top {
    border-top: 1px solid $color-border;

    &-dashed {
      border-top: 1px dashed $color-border;
    }

    &-unset {
      border-top: unset !important;
      border-top: 0 !important;
    }
  }

  &-right {
    border-right: 1px solid $color-border;

    &-dashed {
      border-right: 1px dashed $color-border;
    }

    &-unset {
      border-right: unset !important;
      border-right: 0 !important;
    }

  }

  &-left {
    border-left: 1px solid $color-border;

    &-dashed {
      border-left: 1px dashed $color-border;
    }

    &-unset {
      border-left: unset !important;
      border-left: 0 !important;
    }

  }

}

.title {
  &-main {
    font-size: $font-size-large;
    font-weight: $font-weight-main;
    color: $color-font-main;
  }

  &-sub {
    font-size: $font-size-medium;
    font-weight: $font-weight-main;
    color: $color-font-main;
  }

  &-tip {
    font-size: $font-size-small;
    font-weight: $font-weight-sub;
    color: $color-font-info;
  }
}

.flex {
  display: flex;

  &-nowrap {
    flex-wrap: nowrap;
  }

  &-direction {
    &-row {
      flex-direction: row;

      &-reverse {
        flex-direction: row-reverse;
      }
    }

    &-column {
      flex-direction: column;

      &-reverse {
        flex-direction: column-reverse;
      }
    }
  }

  &-content {
    &-start {
      justify-content: flex-start;
    }

    &-end {
      justify-content: flex-end;
    }

    &-center {
      justify-content: center;
    }

    &-between {
      justify-content: space-between;
    }

    &-around {
      justify-content: space-around;
    }

    &-evenly {
      justify-content: space-evenly;
    }
  }

  &-align {
    &-start {
      align-items: flex-start;
    }

    &-center {
      align-items: center;
    }

    &-end {
      align-items: flex-end;
    }
  }

  &-fill {
    flex: 1;
    overflow: hidden;
  }
}

.visibility {
  &-visible {
    visibility: visible;
  }

  &-hidden {
    visibility: hidden;

  }
}

.ov {
  &-hidden {
    overflow: hidden;
  }

  &-auto {
    overflow: auto;
  }
}

.box {
  &-sizing {
    &-border {
      box-sizing: border-box;
    }

    &-content {
      box-sizing: content-box;
    }
  }

  &-shadow {
    box-shadow: 0px 4px 13px 0px $color-shadow;
  }
}

.text {
  &-nowrap {
    white-space: nowrap;
  }

  &-align {
    &-right {
      text-align: right;
    }

    &-center {
      text-align: center;
    }
  }

  &-overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.padding {
  padding: $padding;

  &-horizontal {
    padding: 0 $padding;
  }

  &-vertical {
    padding: $padding 0;
  }

  &-top {
    padding-top: $padding;
  }

  &-bottom {
    padding-bottom: $padding;
  }

  &-left {
    padding-left: $padding;
  }

  &-right {
    padding-right: $padding;
  }

  &-unset {
    padding: 0 !important;

    &-horizontal {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    &-vertical {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  }
}

.margin {

  margin: $margin;

  &-horizontal {
    margin: 0 $margin;
  }

  &-vertical {
    margin: $margin 0;
  }

  &-top {
    margin-top: $margin;
  }

  &-bottom {
    margin-bottom: $margin;
  }

  &-left {
    margin-left: $margin;
  }

  &-right {
    margin-right: $margin;
  }
}

.position {
  &-relative {
    position: relative !important;
  }

  &-fixed {
    position: fixed !important;

    &-fill {
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }

  &-absolute {
    position: absolute !important;

    &-fill {
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }
}

.cursor {
  &-pointer {
    cursor: pointer;
  }

  &-move {
    cursor: move;
  }
}

.canClick {
  cursor: pointer;
  color: $color-font-sub !important;

  &:hover {
    color: $color-primary !important;
  }
}

.heart {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}


```
