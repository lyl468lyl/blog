---

date: 2013-6-25

category: 数据库

tag:

  - influxdb

---

# influxdb 时序数据的随手笔记

```perl
https://portal.influxdata.com/downloads/
ubuntu下安装influxdb
wget https://dl.influxdata.com/influxdb/releases/influxdb_1.8.3_amd64.deb 
dpkg -i influxdb_1.8.3_amd64.deb

修改配置:
vi /etc/influxdb/influxdb.conf 
# Bind address to use for the RPC service for backup and restore.
 bind-address = "0.0.0.0:8087"

[data]
  # The directory where the TSM storage engine stores TSM files.
  dir = "/data/influxdb/data"

  # The directory where the TSM storage engine stores WAL files.
  wal-dir = "/data/influxdb/wal"
 
 启动
 sudo service influxdb start
 查看状态
 service influxdb status //查看状态
 
 客户端启动
 influx
 
 安装可视化工具chrongograf
wget https://dl.influxdata.com/chronograf/releases/chronograf_1.8.7_amd64.deb
sudo dpkg -i chronograf_1.8.7_amd64.deb
 
 启动
 chronograf
 
 访问:
 http://192.168.50.230:8888/
 

操作
 客户端启动
 influx -precision rfc3339

显示数据库
> show databases;
name: databases
name
----
_internal

创建数据库

> create database testdb;
> use testdb;
Using database testdb

显示表
> show measurements

插入数据 (插入的第一条就定义了格式)
shop是表名称
insert shop,name=zhangsan age=2 sex=1

查询数据
>precision rfc3339 #将时间戳转换为具体的时间格式
> select * from shop;
2022-04-15T06:41:14.745633626Z 1   liyulong
2022-04-15T06:42:02.507852261Z 2   zhangsan

删除表
 drop measurement shop1;
删除数据库
> drop database mydb;

创建保留时效为5天的数据库
> CREATE DATABASE mydb WITH DURATION 5d;

查看数据库的保留时效
> SHOW RETENTION POLICIES ON mydbh

修改数据库保留数据的时效
alter retention policy "autogen" on "LeeMan_db" duration 4320h replication 1 default;
CREATE RETENTION POLICY "a_year" ON "mydb" DURATION 52h REPLICATION 1


insert插入数据
insert add_test,name=YiHui,phone=110 user_id=20,email="bangzewu@126.com"
新增一条数据,measurement为add_test,tag为name,phone,filed为user_id,email

查看所有的tag
> use mydb;
Using database mydb
> show tag keys from add_test;

查看所有的field

> show field keys from add_test;
name: add_test
fieldKey fieldType
-------- ---------
email    string
user_id  float


```



