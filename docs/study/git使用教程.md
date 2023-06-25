---

date: 2013-6-25

category: 数据仓

tag:

  - gitlab

---

#  gitlab 使用文档                                           

用户名:root/liyulong

密码:doudou0917

##### gitlab使用说明

第一步：下载安装git，在官网下载安装即可

第二步：在左面空白处点击鼠标右键，点击Git Bash Here，出现对话框

第三步：配置本地仓库的账号邮箱git

```perl
git config --global user.name  "liyulong"

git config --global user.email "liyulong@szwanggu.com"
```



第四步：使用ssh密钥登陆。
用下面指令生成ssh(执行命令后一路回车)

```perl
$ ssh-keygen -t rsa -C "liyulong@szwanggu.com"
根据生产命令提示,找到公钥的生成路径
/Users/li/.ssh/id_rsa.pub
```

第五步 使用账户登录gitlab

```perl
登录url:  http://192.168.50.230:8060/
用户名:名字拼音(如liyulong)
密码:shangjian

登录系统后,点击头像的下拉菜单,选择偏好设置,找到ssh秘钥菜单
将第四步的公钥内容,粘贴到"秘钥"框中,如图:
```

![image-20221115103540380](/Users/li/Library/Application Support/typora-user-images/image-20221115103540380.png)





第六步 clone 代码测试,是否能够顺利下载代码(输入自己git库)

```perl
git clone http://192.168.50.230:8060/gengda/xxx.git
```

第七步 连接远程仓库(前端/后端/算法都有对应响应的gitlab库),以前端为例:

```perl
git remote add origin http://192.168.50.230:8060/gengda/sps-vue.git
注意:如果origin 已经存在可以用如下命令删除
git remote rm origin
```

第八步 创建本地分支(dev)

```perl
1.列出所有分支
  git branch -a
2.创建dev分支
  git branch dev
3.切换分支
  git checkout dev
```

第九步 提交代码到本地仓库

```perl
1)git add .  或者 git add xxx
  git add xxx ：提交指定文件；  git add . 提交全部
2)git commit -m "提交代码"   推送修改到本地git库中
  git commit -m "添加xx文件"
```



第十步 提交代码到远程仓库

```perl
git push origin dev
```

