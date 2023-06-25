---

date: 2013-6-25

category: java

tag:

  - jvm

---

# jvm随手笔记



1. 堆空间的参数

   -xx:+PrintFlagInitial 参数的默认值

   -XX:PrintFlagsInitial -XX:SurvivorRatio=8

![image-20220220093841966](/Users/li/Library/Application Support/typora-user-images/image-20220220093841966.png)

调优避免stw

逃逸方法,栈上分配

Taobaovm 将生命周期较长的对象从heap中移到heap外,gc不能管理gcih内部的对象

以此降低gc的回收频率和提升gc回收效率的目的



逃逸分析:

当一个对象在方法中被定义后,对象只在方法内使用,没有发生逃逸,可以栈上分配

当一个对象在方法中被定义后,被外部的方法引用,则认为发生逃逸

![image-20220220100859320](/Users/li/Library/Application Support/typora-user-images/image-20220220100859320.png)

![image-20220220101119695](/Users/li/Library/Application Support/typora-user-images/image-20220220101119695.png)

![image-20220220101229870](/Users/li/Library/Application Support/typora-user-images/image-20220220101229870.png)

![image-20220220101300828](/Users/li/Library/Application Support/typora-user-images/image-20220220101300828.png)

java7开始就开启了逃逸分析



![image-20220220101624650](/Users/li/Library/Application Support/typora-user-images/image-20220220101624650.png)



没有开启逃逸分析

 ![image-20220220110009635](/Users/li/Library/Application Support/typora-user-images/image-20220220110009635.png)

![image-20220220112929255](/Users/li/Library/Application Support/typora-user-images/image-20220220112929255.png)

![image-20220220112959393](/Users/li/Library/Application Support/typora-user-images/image-20220220112959393.png)

![image-20220220120448256](/Users/li/Library/Application Support/typora-user-images/image-20220220120448256.png)

![image-20220220122242258](/Users/li/Library/Application Support/typora-user-images/image-20220220122242258.png)

![image-20220220160837498](/Users/li/Library/Application Support/typora-user-images/image-20220220160837498.png)

![](/Users/li/Library/Application Support/typora-user-images/image-20220220162742210.png)

![image-20220220162813527](/Users/li/Library/Application Support/typora-user-images/image-20220220162813527.png)

![image-20220220163539607](/Users/li/Library/Application Support/typora-user-images/image-20220220163539607.png)

![image-20220220163642307](/Users/li/Library/Application Support/typora-user-images/image-20220220163642307.png)

![image-20220220163743129](/Users/li/Library/Application Support/typora-user-images/image-20220220163743129.png)

![image-20220220163856706](/Users/li/Library/Application Support/typora-user-images/image-20220220163856706.png)

![image-20220220172252220](/Users/li/Library/Application Support/typora-user-images/image-20220220172252220.png)

![image-20220220172611092](/Users/li/Library/Application Support/typora-user-images/image-20220220172611092.png)

![image-20220220172725080](/Users/li/Library/Application Support/typora-user-images/image-20220220172725080.png)

![image-20220220173523343](/Users/li/Library/Application Support/typora-user-images/image-20220220173523343.png)

![image-20220220173740475](/Users/li/Library/Application Support/typora-user-images/image-20220220173740475.png)

![image-20220220174348668](/Users/li/Library/Application Support/typora-user-images/image-20220220174348668.png)

![image-20220220181447563](/Users/li/Library/Application Support/typora-user-images/image-20220220181447563.png)

![image-20220220184924003](/Users/li/Library/Application Support/typora-user-images/image-20220220184924003.png)

![image-20220220185043521](/Users/li/Library/Application Support/typora-user-images/image-20220220185043521.png) 

![image-20220220190405160](/Users/li/Library/Application Support/typora-user-images/image-20220220190405160.png)

![image-20220220190627771](/Users/li/Library/Application Support/typora-user-images/image-20220220190627771.png)

![image-20220220192530007](/Users/li/Library/Application Support/typora-user-images/image-20220220192530007.png)

![image-20220220192918442](/Users/li/Library/Application Support/typora-user-images/image-20220220192918442.png)

![image-20220220194735016](/Users/li/Library/Application Support/typora-user-images/image-20220220194735016.png)

arrcon

![image-20220221143318916](/Users/li/Library/Application Support/typora-user-images/image-20220221143318916.png)



创建对象的方式

![image-20220222164250543](/Users/li/Library/Application Support/typora-user-images/image-20220222164250543.png)

![image-20220222173006410](/Users/li/Library/Application Support/typora-user-images/image-20220222173006410.png)

![image-20220222173505439](/Users/li/Library/Application Support/typora-user-images/image-20220222173505439.png)

![image-20220222175325364](/Users/li/Library/Application Support/typora-user-images/image-20220222175325364.png)

![image-20220222175743732](/Users/li/Library/Application Support/typora-user-images/image-20220222175743732.png)

![image-20220222180012750](/Users/li/Library/Application Support/typora-user-images/image-20220222180012750.png)

![image-20220222181852717](/Users/li/Library/Application Support/typora-user-images/image-20220222181852717.png)

![image-20220222184251763](/Users/li/Library/Application Support/typora-user-images/image-20220222184251763.png)

![image-20220223102832045](/Users/li/Library/Application Support/typora-user-images/image-20220223102832045.png)

![image-20220223104917449](/Users/li/Library/Application Support/typora-user-images/image-20220223104917449.png)

![image-20220223110509040](/Users/li/Library/Application Support/typora-user-images/image-20220223110509040.png)

在运行之前直接将字节码翻译成机器码指令.

缺点破坏了一次编译到处运行

![image-20220223111859279](/Users/li/Library/Application Support/typora-user-images/image-20220223111859279.png)

![image-20220223112048884](/Users/li/Library/Application Support/typora-user-images/image-20220223112048884.png)

![image-20220223112059769](/Users/li/Library/Application Support/typora-user-images/image-20220223112059769.png)

char =2个byte

1byte=8bit



gdk9

string 

byte[] jdk9

char[] jdk8

![image-20220223114711981](/Users/li/Library/Application Support/typora-user-images/image-20220223114711981.png)

string的不可变性

![image-20220223115234056](/Users/li/Library/Application Support/typora-user-images/image-20220223115234056.png)

![image-20220223115827776](/Users/li/Library/Application Support/typora-user-images/image-20220223115827776.png)

ti

![image-20220223115846603](/Users/li/Library/Application Support/typora-user-images/image-20220223115846603.png)

![image-20220223133539455](/Users/li/Library/Application Support/typora-user-images/image-20220223133539455.png)

![image-20220223134058985](/Users/li/Library/Application Support/typora-user-images/image-20220223134058985.png)

![image-20220223134259603](/Users/li/Library/Application Support/typora-user-images/image-20220223134259603.png)

![image-20220223134314436](/Users/li/Library/Application Support/typora-user-images/image-20220223134314436.png)

![image-20220223134759140](/Users/li/Library/Application Support/typora-user-images/image-20220223134759140.png)

![image-20220223135355954](/Users/li/Library/Application Support/typora-user-images/image-20220223135355954.png)

![image-20220223141015188](/Users/li/Library/Application Support/typora-user-images/image-20220223141015188.png)

![image-20220223141642680](/Users/li/Library/Application Support/typora-user-images/image-20220223141642680.png)

![image-20220223141658929](/Users/li/Library/Application Support/typora-user-images/image-20220223141658929.png)

![image-20220223141735785](/Users/li/Library/Application Support/typora-user-images/image-20220223141735785.png)

![image-20220223143630635](/Users/li/Library/Application Support/typora-user-images/image-20220223143630635.png)

![ ](/Users/li/Library/Application Support/typora-user-images/image-20220223144829732.png)

![image-20220223145912236](/Users/li/Library/Application Support/typora-user-images/image-20220223145912236.png)  

![image-20220223150502819](/Users/li/Library/Application Support/typora-user-images/image-20220223150502819.png)

![image-20220223151932778](/Users/li/Library/Application Support/typora-user-images/image-20220223151932778.png)

![image-20220223153754884](/Users/li/Library/Application Support/typora-user-images/image-20220223153754884.png)

![image-20220223154211599](/Users/li/Library/Application Support/typora-user-images/image-20220223154211599.png)

![image-20220223155353389](/Users/li/Library/Application Support/typora-user-images/image-20220223155353389.png)

![image-20220223160133842](/Users/li/Library/Application Support/typora-user-images/image-20220223160133842.png)

![image-20220223160654139](/Users/li/Library/Application Support/typora-user-images/image-20220223160654139.png)

![image-20220223160836096](/Users/li/Library/Application Support/typora-user-images/image-20220223160836096.png)

![image-20220223162546739](/Users/li/Library/Application Support/typora-user-images/image-20220223162546739.png)

![image-20220223163930744](/Users/li/Library/Application Support/typora-user-images/image-20220223163930744.png)

![image-20220223164049428](/Users/li/Library/Application Support/typora-user-images/image-20220223164049428.png)

![image-20220223164903116](/Users/li/Library/Application Support/typora-user-images/image-20220223164903116.png)

![image-20220223181529474](/Users/li/Library/Application Support/typora-user-images/image-20220223181529474.png)

![image-20220223181639584](/Users/li/Library/Application Support/typora-user-images/image-20220223181639584.png)

![image-20220223184521633](/Users/li/Library/Application Support/typora-user-images/image-20220223184521633.png)