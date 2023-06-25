\---

date: 2013-6-25

category: 大数据

tag:

  \- flink

\---

# flink1.2 数仓项目

flume安装



```perl
wget https://dlcdn.apache.org/flume/1.9.0/apache-flume-1.9.0-bin.tar.gz --no-check-certificate
 tar -zxvf apache-flume-1.9.0-bin.tar.gz -c /opt/module/
mv apache-flume-1.9.0-bin flume-1.9

#设置环境变量
export FLUME_HOME=/opt/module/flume-1.9
export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin:$HBASE_HOME/bin:$FLUME_HOME/bin
export FLUME_CONF_DIR=$FLUME_HOME/conf

#生效
source /etc/profile

#修改flume-env.sh配置文件
cd  /opt/module/flume-1.9/conf
mv flume-env.sh.template flume-env.sh

vi flume-env.sh文件开头
export JAVA_HOME=/opt/software/jdk1.8.0_241

#查看flume的版本
[root@centos01 conf]# flume-ng version


#修改配置文件
cd  /opt/module/flume-1.9/conf

vim taildir-file-hdfs.conf 

```

tidier-file-hdfs.conf

```perl
#agent_name
a1.sources=r1
a1.sinks=k1
a1.channels=c1

# source类型
a1.sources.r1.type = TAILDIR
# 元数据位置
a1.sources.r1.positionFile = /opt/module/flume-1.9/taildir_position.json
# 监控的目录
a1.sources.r1.filegroups = f1
a1.sources.r1.filegroups.f1=/opt/module/flume-1.9/files/file.*
a1.sources.r1.fileHeader = true
a1.sources.r1.interceptors = i1
a1.sources.r1.interceptors.i1.type = timestamp

#sink的配置

a1.sinks.k1.type = logger
#channel的配置
a1.channels.c1.type = memory
a1.channels.c1.capacity = 10000000
a1.channels.c1.transactionCapacity = 5000
#用channel链接source和sink

a1.sources.r1.channels = c1
a1.sinks.k1.channel =c1

```

```perl
#启动
flume-ng agent --name a1 -c $FLUME_HOME/conf  -f /opt/module/flume-1.9/conf/taildir-file-hdfs.conf -Dflume.root.logger=INFO,console

```

```perl
#测试
cd /opt/module/flume-1.9/files
 echo ddd>file1.log 


```

```perl
日志文件更名的问题

1.使用不更名的打印日志框架logback
2.修改源码  
cd /opt/module/flume-1.9/lib
flume-taildir-source-1.9.0.jar 
这个源码文件在尚硅谷的flink数仓项目中源文件中找.
```

