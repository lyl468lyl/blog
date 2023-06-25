

---

date: 2013-6-25

category: 大数据

tag:

  - hive

---



# hive架构教程

hadoop3 mysql5.6 zookeeper 安装

https://blog.csdn.net/yoshubom/article/details/113845190



hadoop3.2 安装

https://blog.csdn.net/m0_37829442/article/details/114004981



hive3.12 安装



```perl
wget https://downloads.apache.org/hive/hive-3.1.2/apache-hive-3.1.2-bin.tar.gz

[root@centos01 software]# tar -zxvf apache-hive-3.1.2-bin.tar.gz -C /opt/module/

[root@centos01 conf]# mv hive-default.xml.template hive-default.xml

vi hive-site.xml

<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
  <property>
    <name>javax.jdo.option.ConnectionURL</name>
    <value>jdbc:mysql://192.168.8.185:3306/hive?createDatabaseIfNotExist=true</value>
    <description>JDBC connect string for a JDBC metastore</description>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionDriverName</name>
    <value>com.mysql.jdbc.Driver</value>
    <description>Driver class name for a JDBC metastore</description>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionUserName</name>
    <value>root</value>
    <description>username to use against metastore database</description>
  </property>
  <property>
    <name>javax.jdo.option.ConnectionPassword</name>
    <value>123456</value>
    <description>password to use against metastore database</description>
  </property>
  
  
</configuration>

```

```perl
复制mysql驱动到hive3.1/lib
[root@centos01 lib]# cp  mysql-connector-java-5.1.37-bin.jar  /opt/module/hive3.1/lib/

[root@centos01 bin]# cd /opt/module/hive3.1/bin
schematool -dbType mysql -initSchema
会报错:

解决:
[root@centos01 lib]# cp guava-27.0-jre.jar /opt/module/hive3.1/lib/ 
                     cd  /opt/module/hive3.1/lib/
[root@centos01 lib]# rm -rf guava-19.0.jar 

```



hive 架构笔记随笔

hive分区表

```perl
hive (db_hive)> create table dept(no int,name string,loc string)partitioned by(day string) row format delimited fields terminated by '\t';

样本数据
vi dept.log  (tab键分开)
1       zhangangsan     3
2       muliu   4
3       hei     5


导入数据
hive (db_hive)> load data local inpath '/opt/module/hive-2.3.0/dept.log' into table dept partition(day='20220501');


删除一个分区的数据
hive (db_hive)> alter table dept drop partition(day='20220501');

添加分区

hive (db_hive)> alter table dept add partition(day='20220502');

分区查询
hive (db_hive)> select * from dept where day='20220501';

多分区联合查询

hive (db_hive)> select * from dept where day='20220501' union select * from dept where day='20220502';

查看有多少分区
hive (db_hive)> show partitions dept;


查看分区结构

hive (db_hive)> desc formatted dept;



在分区的基础上创建分桶表
分区针对的是数据的存储路径；分桶针对的是数据文件。

分桶规则：
根据结果可知：Hive的分桶采用对分桶字段的值进行哈希，然后除以桶的个数求余的方式决定该条记录存放在哪个桶当中

hive (db_hive)>  create table deptc(no int,name string,loc string)partitioned by(day string) clustered by(name) into 2 buckets row format delimited fields terminated by '\t';

查看分桶表结构
hive (db_hive)> desc formatted deptc;

向分桶表中导入数据
注意:
Hive默认不支持通过load命令导入数据到分桶表.
1.创建和分桶表结构相同的普通表
2.给普通表加载数据
3 使用 insert into select 导入数据

操作:
1.创建临时表
create table dept_temp(no int,name string,loc string) row format delimited fields terminated by '\t';
2.向临时表导入数据
hive (db_hive)> load data local inpath '/opt/module/hive-2.3.0/dept.log' into table dept_temp;
3. 将临时表数据插入到分桶表

hive (db_hive)> insert into table deptc partition(day='20220501') select * from dept_temp;



```

分桶示意图:

![image-20220501120017979](/Users/li/Library/Application Support/typora-user-images/image-20220501120017979.png)

![image-20220501120222311](/Users/li/Library/Application Support/typora-user-images/image-20220501120222311.png)



参考:

https://blog.csdn.net/yoshubom/article/details/113845190

spark on hive 配置

需要的版本如下:

spark 版本:spark 2.4.7

hive 版本: hive3.1.2

hadoop版本:hadoop3.2.2

scala 版本:scala2.12.10



```perl
#下载 

#spark 官网
http://spark.apache.org/downloads.html


安装scala 2.12

[root@centos01 software]# rpm -ivh scala-2.12.10.rpm 
准备中...                          ################################# [100%]
正在升级/安装...
   1:scala-2.12.10-1                  ################################# [100%]
[root@centos01 software]# which scala
/usr/bin/scala
[root@centos01 software]# scala version
No such file or class on classpath: version
[root@centos01 software]# scala -version
Scala code runner version 2.12.10 

```

```perl
vim /opt/module/hive3.1/conf/spark-defaults.conf

spark.master                             yarn
spark.eventLog.enabled                   true
spark.eventLog.dir                       hdfs://centos01:9000/spark-history
spark.executor.memory                    1g
spark.driver.memory                      1g

在HDFS创建如下路径，用于存储历史日志
hadoop fs -mkdir /spark-history

```

修改vim /opt/module/hive3.1/conf/hive-site.xml

```perl
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <property>
        <name>javax.jdo.option.ConnectionURL</name>
        <value>jdbc:mysql://192.168.8.185:3306/hive?createDatabaseIfNotExist=true</value>
        <description>JDBC connect string for a JDBC metastore</description>
    </property>
    <property>
        <name>javax.jdo.option.ConnectionDriverName</name>
        <value>com.mysql.jdbc.Driver</value>
        <description>Driver class name for a JDBC metastore</description>
    </property>
    <property>
        <name>javax.jdo.option.ConnectionUserName</name>
        <value>root</value>
        <description>username to use against metastore database</description>
    </property>
    <property>
        <name>javax.jdo.option.ConnectionPassword</name>
        <value>123456</value>
        <description>password to use against metastore database</description>
    </property>
    <property>
        <name>hive.execution.engine</name>
        <value>spark</value>
    </property>
    <property>
        <name>spark.yarn.jars</name>
        <value>hdfs://centos01:9000/spark-jars/*</value>
    </property>
    <property>
        <name>hive.spark.client.connect.timeout</name>
        <value>10000ms</value>
    </property>
</configuration>
```

```perl
#下载spark2.4.7 纯净版
wget https://archive.apache.org/dist/spark/spark-2.4.7/spark-2.4.7-bin-without-hadoop.tgz
tar -zxvf spark-2.4.7-bin-without-hadoop.tgz -C /opt/module
mv spark-2.4.7-bin-without-hadoop spark-2.4.7-pure


#配置spark-env.sh

cat > /opt/module/spark-2.4.7-pure/conf/spark-env.sh << 'EOF'
export HADOOP_HOME=/opt/module/hadoop-3.2.2
export SPARK_DIST_CLASSPATH=$(${HADOOP_HOME}/bin/hdfs classpath)
export YARN_CONF_DIR=${HADOOP_HOME}/etc/hadoop
EOF



测试spark2.4.7

cd /opt/module/spark-2.4.7-pure &&\
  bin/run-example SparkPi 2>&1 | grep "Pi is"
  
配置Hive3 on Spark2


cat > /opt/module/hive3.1/conf/hive-env.sh << 'EOF'
export HADOOP_HOME=/opt/module/hadoop-3.2.2
# 新增SPARK_HOME 必须是without-hadoop 的纯净版
export SPARK_HOME=/opt/module/spark-2.4.7-pure
EOF


去除冲突的jar
# 1. 去除冲突jar 文件
cd /opt/module/spark-2.4.7-pure/jars &&\
  mv orc-core-1.5.5-nohive.jar orc-core-1.5.5-nohive.jar.bak

# 2. 上传spark2 纯净版依赖库到HDFS
cd /opt/module/hadoop-3.2.2 &&\
  bin/hdfs dfs -rm -r -f /spark-jars ; bin/hdfs dfs -mkdir /spark-jars &&\
  bin/hdfs dfs -put /opt/module/spark-2.4.7-pure/jars/* /spark-jars &&\
  bin/hdfs dfs -ls /spark-jars
## Hive 任务由Spark 执行，Spark 资源分配由Yarn 调度，该任务可能分配到任一个节点
## 所以需要将Spark 的依赖上传到HDFS 集群路径，这样集群中任何一个节点都能获取到

# 3. 复制Spark2 连接依赖库到Hive3
cd /opt/module/spark-2.4.7-pure/jars && cp \
  scala-compiler-2.11.12.jar scala-library-2.11.12.jar scala-reflect-2.11.12.jar \
  spark-core_2.11-2.4.7.jar spark-network-common_2.11-2.4.7.jar \
  spark-unsafe_2.11-2.4.7.jar spark-yarn_2.11-2.4.7.jar /opt/module/hive3.1/lib/


# 4. 上传Hive 的orc-core 依赖库
## Spark2 纯净版自带的orc-core-1.5.5-nohive.jar 会造成错误异常
## Job failed with java.lang.NoSuchMethodError: org.apache.orc.TypeDescription.createRowBatch
## 必须将其从HDFS 上/spark2-jars 里删除，因为Hive on Spark 的依赖库来源于HDFS，保险做法就是重命名
cd /opt/module/hadoop-3.2.2 && bin/hdfs dfs -mv \
  /spark-jars/orc-core-1.5.5-nohive.jar \
  /spark-jars/orc-core-1.5.5-nohive.jar.bak
## 另外还需将Hive 里的orc-core 上传至HDFS 才可以让Spark2 支持ORC 存储格式，详见下一节的测试
cd /opt/module/hadoop-3.2.2 &&\
  bin/hdfs dfs -put /opt/module/hive3.1/lib/orc-core-1.5.6.jar /spark-jars

```

### 测试Hive3 on Spark2

```perl

-- 1. 先启动MetaStore 和HiveServer2 服务，详见Hive3 启停操作或Hive3 服务脚本
-- 如果hive-site.xml 中没有配置hive.metastore.uris 则可跳过本步骤

-- 2. 启动Hive3
cd /opt/module/hive3.1 && bin/hive

-- 清屏小技巧 
!clear;

-- 2.1 查看Hive 引擎
set hive.execution.engine;
-- 结果显示如下，原默认是mr
-- hive.execution.engine=spark

-- 2.2 创建测试表
drop table if exists student;
create table student (id int, name string);
-- 测试Spark 的ORC 支持
drop table if exists student_orc;
create table student_orc (id int, name string) stored as orc;

-- 2.3 插入数据
-- 此时会触发Spark 计算引擎，但只有Map 用于写入磁盘，没有Reduce
insert into student values (1, "zhangsan");
-- 此时访问YARN，http://hadoop113:8088，可看到名为Hive on Spark 的任务
-- 点击其Tracking UI 属性的ApplicationMaster 超链接可进入Spark Web 页面
-- 在Environment 标签下可找到以下属性，表示Spark 已运行在cluster 模式下
-- spark.master               yarn
-- spark.submit.deployMode    cluster

-- 2.4 如果没有报错并显示结果数据就表示成功了
select * from student;
-- 结果显示
-- student.id	student.name
-- 1        	zhangsan
-- 需要计算的查询也会触发计算引擎
select count(*) from student where id>1;

-- 2.5 测试Spark 存储ORC 数据
insert into table student_orc select * from student; 
select * from student_orc;
select count(*) from student_orc;

-- 2.6 清理数据
drop table student;
drop table student_orc;

-- 2.7 退出hive
quit;


```

