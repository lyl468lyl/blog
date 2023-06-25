\---

date: 2013-6-25

category: 中间件

tag:

  \- kafka

\---

# kafak随手笔记

![image-20220306113634069](/Users/li/Library/Application Support/typora-user-images/image-20220306113634069.png)







kafka集群的搭建:



https://www.cnblogs.com/ysocean/p/9860529.html

zookeeper 集群启动的时候,

./zkServer.sh start (需要在每台机器上都启用一下)





vim操作手册:





![image-20220306122423433](/Users/li/Library/Application Support/typora-user-images/image-20220306122423433.png)

```perl
[root@centos01 kafka3.0]# bin/kafka-topics.sh --bootstrap-server centos01:9092 --create --partitions 1 --replication-factor 3 --topic hello
Created topic hello.
[root@centos01 kafka3.0]# bin/kafka-topics.sh --bootstrap-server centos01:9092 --list
hello
[root@centos01 kafka3.0]# 

./kafka-topics.sh --bootstrap-server centos01:9092  --alter --topic china --partitions 3

[root@centos01 kafka3.0]# ./bin/kafka-topics.sh --bootstrap-server centos01:9092 --topic order --describe



```

![image-20220306154359872](/Users/li/Library/Application Support/typora-user-images/image-20220306154359872.png)

生产环境:

![image-20220306154502645](/Users/li/Library/Application Support/typora-user-images/image-20220306154502645.png)

![image-20220306154918188](/Users/li/Library/Application Support/typora-user-images/image-20220306154918188.png)

```perl
[root@centos01 bin]# ./kafka-console-producer.sh --bootstrap-server centos01:9092 --topic china
>

```

```perl
[root@centos02 bin]# ./kafka-console-consumer.sh --bootstrap-server centos01:9092 --topic hello
[root@centos03 bin]# ./kafka-server-start.sh -daemon ../config/server.properties 
```

![image-20220306161636238](/Users/li/Library/Application Support/typora-user-images/image-20220306161636238.png)

![image-20220306173021461](/Users/li/Library/Application Support/typora-user-images/image-20220306173021461.png)

![image-20220306200309193](/Users/li/Library/Application Support/typora-user-images/image-20220306200309193.png)

![image-20220306203435607](/Users/li/Library/Application Support/typora-user-images/image-20220306203435607.png)

![image-20220306204048791](/Users/li/Library/Application Support/typora-user-images/image-20220306204048791.png)

![image-20220306204957891](/Users/li/Library/Application Support/typora-user-images/image-20220306204957891.png)

![image-20220306212753020](/Users/li/Library/Application Support/typora-user-images/image-20220306212753020.png)

![image-20220306213411354](/Users/li/Library/Application Support/typora-user-images/image-20220306213411354.png)

zookeeper 客户端启动:

zkCli.sh



ls /

![image-20220306213957406](/Users/li/Library/Application Support/typora-user-images/image-20220306213957406.png)

![image-20220307085926313](/Users/li/Library/Application Support/typora-user-images/image-20220307085926313.png)

![image-20220307091356488](/Users/li/Library/Application Support/typora-user-images/image-20220307091356488.png)

![image-20220307094010771](/Users/li/Library/Application Support/typora-user-images/image-20220307094010771.png)

![image-20220307094038223](/Users/li/Library/Application Support/typora-user-images/image-20220307094038223.png)

![image-20220307101503277](/Users/li/Library/Application Support/typora-user-images/image-20220307101503277.png)

![image-20220307105729465](/Users/li/Library/Application Support/typora-user-images/image-20220307105729465.png)

![image-20220307105939802](/Users/li/Library/Application Support/typora-user-images/image-20220307105939802.png)

![image-20220307110129945](/Users/li/Library/Application Support/typora-user-images/image-20220307110129945.png)

![image-20220307110257703](/Users/li/Library/Application Support/typora-user-images/image-20220307110257703.png)

恢复节点

![image-20220307110449454](/Users/li/Library/Application Support/typora-user-images/image-20220307110449454.png)

![image-20220307110854498](/Users/li/Library/Application Support/typora-user-images/image-20220307110854498.png)

![image-20220307111502530](/Users/li/Library/Application Support/typora-user-images/image-20220307111502530.png)





![image-20220307112101496](/Users/li/Library/Application Support/typora-user-images/image-20220307112101496.png)

![image-20220307111945499](/Users/li/Library/Application Support/typora-user-images/image-20220307111945499.png)

![image-20220307112412314](/Users/li/Library/Application Support/typora-user-images/image-20220307112412314.png)

![image-20220307112659837](/Users/li/Library/Application Support/typora-user-images/image-20220307112659837.png)

![image-20220307112827944](/Users/li/Library/Application Support/typora-user-images/image-20220307112827944.png)

![image-20220307114420855](/Users/li/Library/Application Support/typora-user-images/image-20220307114420855.png)

![image-20220307124051848](/Users/li/Library/Application Support/typora-user-images/image-20220307124051848.png)

![image-20220307124218830](/Users/li/Library/Application Support/typora-user-images/image-20220307124218830.png)

![image-20220307125535839](/Users/li/Library/Application Support/typora-user-images/image-20220307125535839.png)

![image-20220307131700013](/Users/li/Library/Application Support/typora-user-images/image-20220307131700013.png)

![image-20220307131937167](/Users/li/Library/Application Support/typora-user-images/image-20220307131937167.png)





kafka消费方式:



pull拉模式

![image-20220307151823395](/Users/li/Library/Application Support/typora-user-images/image-20220307151823395.png)

![image-20220307160537093](/Users/li/Library/Application Support/typora-user-images/image-20220307160537093.png)

![image-20220307161604431](/Users/li/Library/Application Support/typora-user-images/image-20220307161604431.png)

![image-20220307162658573](/Users/li/Library/Application Support/typora-user-images/image-20220307162658573.png)

![image-20220307183334797](/Users/li/Library/Application Support/typora-user-images/image-20220307183334797.png)

![image-20220307184535757](/Users/li/Library/Application Support/typora-user-images/image-20220307184535757.png)

range

![image-20220307185107345](/Users/li/Library/Application Support/typora-user-images/image-20220307185107345.png)

ribbon

![image-20220307185125529](/Users/li/Library/Application Support/typora-user-images/image-20220307185125529.png)

striry(粘性)

![image-20220307185729541](/Users/li/Library/Application Support/typora-user-images/image-20220307185729541.png)

![image-20220307185928984](/Users/li/Library/Application Support/typora-user-images/image-20220307185928984.png)

![image-20220307190411015](/Users/li/Library/Application Support/typora-user-images/image-20220307190411015.png) 

![image-20220307191126557](/Users/li/Library/Application Support/typora-user-images/image-20220307191126557.png)

![image-20220307192420498](/Users/li/Library/Application Support/typora-user-images/image-20220307192420498.png)

安装指定offset消费



安装指定的时间消费