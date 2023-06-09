---

date: 2013-6-25

category: java

tag:

  - 问题

---

# IDEA 找不到或无法加载主类

java项目

描述：
从同事那里复制过来的项目，或者经过修改的项目，或者本地项目更改了启动类的名称时，都有可能会出现此异常“找不到或无法加载主类xxxx”。

**先说原因：由于target目录中没有生成对应的class文件，导致抛出这一异常**

## 方案1

打开idea的 project structure
1、看一下moudle的名称是否与现在的项目名称一致。
2、看一下moudle中的paths设置中，jar包的输出位置，以及编译输出位置是否和现在修改后预设的相同

![image-20220425110530058](/Users/li/Library/Application Support/typora-user-images/image-20220425110530058.png)

3、修改为相同后，[maven](https://so.csdn.net/so/search?q=maven&spm=1001.2101.3001.7020) clean，重新运行项目，看看是不是有了



## 方案2

1、将xxx.iml 文件删除，然后maven clean，再利用mvn命令行执行：

> mvn idea:idea install

buid失败的时候考虑换成阿里云的Maven源

```perl
<mirror>  
     <id>alimaven</id>  
     <name>aliyun maven</name>  
     <url>http://maven.aliyun.com/nexus/content/groups/public/</url>  
     <mirrorOf>central</mirrorOf>          
</mirror>

```

方案3
1、打开运行设置，Edit Configurations，看下Name，Main Class，directory，和moudle几个选项是否和现在预设的相同。
2、maven compile之后看看能不能运行（出现的一个现象是，直接编译不能通过，但是先maven compile之后，就可以通过了，但是maven clean 后又不行，而且每次修改程序，都要maven compile）。
3、上述问题主要是看下project build的时候是否产生了target文件夹，大部分这种情况都是因为直接build时，原本应该先编译产生的target文件夹里的class文件，但是却没有。
4、利用方案2生成项目名.iml文件，放到.idea文件夹里
5、删除缓存并重新启动，File -> Invalidate Caches / Restart
6、进入项目后等待indexing重新生成.idea文件夹，再build看看
![image-20220425110640891](/Users/li/Library/Application Support/typora-user-images/image-20220425110640891.png)

方案4
看一下Project Structure里面，Exclued Folders里面有没有target，可以把target删除后重新maven reimport，看看是不是重新生成了。

如果是多module项目，看看最外层的大Module是不是设置了什么source之类的目录，不要设置，全都，掉，最外面的module只做一个集合用，不设置任何目录结构


## 方案5

1、git重新拉取。
2、重新下idea
3、把同事电脑抢过来用。
4、在电脑本地磁盘目录中看有没有target，有可能只是没显示在idea里，但磁盘中有。