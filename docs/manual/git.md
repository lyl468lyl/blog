## 相关博客

[Git分支管理策略](<http://www.ruanyifeng.com/blog/2012/07/git.html>)

[Git远程操作详解](<http://www.ruanyifeng.com/blog/2014/06/git_remote.html>)

[Git使用规范流程](<http://www.ruanyifeng.com/blog/2015/08/git-use-process.html>)

[Git 解决远程仓库文件大小写问题](<https://www.jianshu.com/p/420d38913578>)


## git使用

### 基础推送操作

```php
git add .	//把文件添加到暂存区

git commit -m '注释'	//提交到版本库

git push	//推送
```



### 分支操作基础命令

```php
git branch dev  //创建本地分支 dev
git checkout dev   //切换本地分支 dev

git checkout -b dev   //相当于以上两条命令：创建 dev 

//分支并切换
//Switched to a new branch 'dev'
=============================
git branch //查看本地分支
* dev
  master
=============================
备注：git branch 命令会列出所有分支，当前分支前面会标一个*号。

git branch -d dev   //删除本地分支 dev
```

- **查看分支：git branch**
- **创建分支：git branch \<name\>**
- **切换分支：git checkout \<name\>**
- **创建+切换分支：git checkout -b \<name\>**
- **合并某分支到当前分支：git merge \<name\>**
- **删除分支：git branch -d \<name\>**

# git常用命令

## eslint 报错 Delete `␍`
```
git config --global core.autocrlf false
```

## 初始化项目

```php
git init	//初始.git文件
git add README.md	//添加readme文档
git commit -m "first commit"	//递交
git remote add origin https://github.com/caigouzi1/haha.git	//关联远程仓库
git push -u origin master	//推送代码到master分支
```

## Git 分支管理

```powershell
git branch		//列出本地分支基本命令
git branch -a	//列出本地分支及远程分支
git branch -d <dev>	//删除本地分支
git checkout -b dev		//本地新建一个本地的分支
git push origin panda	//代码推送到远端dev分支
```

## Git 推送（push）

> 格式 : git push <远程主机名> <本地分支名>  <远程分支名> 

```powershell
git push origin master	//如果远程分支被省略，如上则表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建
git push origin:refs/for/master		//如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，等同于 git push origin --delete master
git push origin		//如果当前分支与远程分支存在追踪关系，则本地分支和远程分支都可以省略，将当前分支推送到origin主机的对应分支
git push	//如果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名
```


## Git合并相关

 ```powershell
 //git取消合并
 git merge --abort
 ```
 
## Git调整文件大小写
```powershell
git rm fileName
或
git rm –r * 
```


## 实用案例

- ###  git 如何把分支代码合并到master主分支上

1. ##### 首先切换到分支：

  ```
  git checkout dev
  ```

  使用git pull 把分支代码pull下来:

 ```
  git pull
 ```

 3. ##### 切换到主分支:

 ```
  git checkout master
 ```

 4. #####  把分支的代码merge到主分支:

 ```
  git merge dev
 ```


 5. #####  git push推上去:  

 ```
  git push
 ```