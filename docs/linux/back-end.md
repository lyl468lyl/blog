---
date: 2019-06-04
category: 后端
tag:
  - 积累
  - php
---
# php常用

## 文档

<https://laravel-china.github.io/php-the-right-way/>

## 常用函数

### 时间函数

#### strtotime()

将任何字符串的日期时间描述解析为 Unix 时间戳

```php
strtotime("2018-01-18 08:08:08");  // 将指定日期转成时间戳
```

### PHP Misc. 杂项函数

#### uniqid()

uniqid() 函数基于以微秒计的当前时间，生成一个唯一的 ID。

**注释：**由于基于系统时间，通过该函数生成的 ID 不是最佳的。如需生成绝对唯一的 ID，请使用 [md5()](https://www.runoob.com/php/func-string-md5.html) 函数。

## 接口文档

### apidoc

官方文档[http://apidocjs.com](http://apidocjs.com/)

#### 安装apiDoc

```
npm install apidoc -g
```

#### 文档示例

```php
    /**
     * @api               {post} xx/xx/all 列表
     * @apiName           sort1
     * @apiGroup          xx
     * @apiDescription    xx
     *
     * @apiSuccess {String}  result 结果 suc-成功，error-失败
     * @apiSuccess {String}  msg 返回信息
     * @apiSuccess {String}  errorCode 错误编码
     * @apiSuccess {Object[]}  data 返回数据
     * @apiSuccess {Number}  data.id 编码
     * @apiSuccess {String}  data.xx xx
     *
     *
     * @apiSuccessExample 示例
     * {
     *      result: "suc",
     *      msg: "操作成功",
     *      errorCode: 0,
     *      data: [
     *          {
     *              id: 1,
     *              regular: 'XXX',
     *          },
     *          {
     *              id: 2,
     *              regular: 'XXX',
     *          },
     *          ......
     *      ]
     * }
     */
```

#### 生成文档

cd到**apidoc.json**所在路径（即项目根目录）执行如下命令即可

```
apidoc -i src/ -o apidoc/
```
