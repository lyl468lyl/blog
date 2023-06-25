---

date: 2013-6-25

category: 大数据

tag:

  - clickhouse

---

# clickhouse随手笔记

![image-20220305154136568](/Users/li/Library/Application Support/typora-user-images/image-20220305154136568.png)

![image-20220305155923527](/Users/li/Library/Application Support/typora-user-images/image-20220305155923527.png)

![image-20220305155942511](/Users/li/Library/Application Support/typora-user-images/image-20220305155942511.png)

下载地址:

https://repo.yandex.ru/clickhouse/rpm/stable/x86_64/

![image-20220305162326551](/Users/li/Library/Application Support/typora-user-images/image-20220305162326551.png)

![image-20220305164106829](/Users/li/Library/Application Support/typora-user-images/image-20220305164106829.png)

![image-20220305164722347](/Users/li/Library/Application Support/typora-user-images/image-20220305164722347.png)

![image-20220305165819326](/Users/li/Library/Application Support/typora-user-images/image-20220305165819326.png)

![image-20220305170431547](/Users/li/Library/Application Support/typora-user-images/image-20220305170431547.png)



```perl
[root@centos01 clickhouse]# rpm -ivh *.rpm --force --nodeps

//删除rpm包
[root@centos01 clickhouse]# rpm -evh --nodeps clickhouse-client-21.7.3.14-2.noarch

[root@centos01 clickhouse]# clickhouse-client --host 192.168.0.185 --password=123456


```

```perl
--host, -h -– 服务端的host名称, 默认是localhost。您可以选择使用host名称或者IPv4或IPv6地址。
--port – 连接的端口，默认值：9000。注意HTTP接口以及TCP原生接口使用的是不同端口。
--user, -u – 用户名。 默认值：default。
--password – 密码。 默认值：空字符串。
--query, -q – 使用非交互模式查询。
--database, -d – 默认当前操作的数据库. 默认值：服务端默认的配置（默认是default）。
--multiline, -m – 如果指定，允许多行语句查询（Enter仅代表换行，不代表查询语句完结）。
--multiquery, -n – 如果指定, 允许处理用;号分隔的多个查询，只在非交互模式下生效。
--format, -f – 使用指定的默认格式输出结果。
--vertical, -E – 如果指定，默认情况下使用垂直格式输出结果。这与–format=Vertical相同。在这种格式中，每个值都在单独的行上打印，这种方式对显示宽表很有帮助。
--time, -t – 如果指定，非交互模式下会打印查询执行的时间到stderr中。
--stacktrace – 如果指定，如果出现异常，会打印堆栈跟踪信息。
--config-file – 配置文件的名称。
--secure – 如果指定，将通过安全连接连接到服务器。
--history_file — 存放命令历史的文件的路径。
--param_<name> — 查询参数配置查询参数.
```

![image-20220305193453486](/Users/li/Library/Application Support/typora-user-images/image-20220305193453486.png)

![image-20220305193823073](/Users/li/Library/Application Support/typora-user-images/image-20220305193823073.png)

```perl
create table t_order_mt3(\
 id UInt32,\
 sku_id String,\
 total_amount Decimal(16,2) TTL create_time+interval 10 SECOND,\
 create_time Datetime\
) engine =MergeTree\
partition by toYYYYMMDD(create_time)\
 primary key (id)\
 order by (id, sku_id);
```





去重只能同一分区内去重

![image-20220305201943724](/Users/li/Library/Application Support/typora-user-images/image-20220305201943724.png)

![image-20220305201956561](/Users/li/Library/Application Support/typora-user-images/image-20220305201956561.png)

![image-20220305202600686](/Users/li/Library/Application Support/typora-user-images/image-20220305202600686.png)

![image-20220305204507504](/Users/li/Library/Application Support/typora-user-images/image-20220305204507504.png)

groupie 去重:





测试:

先创建个表:



```perl
create table temp1(\
id UInt32,\
sku_id String,\
total_amount Decimal(16,2),\
create_time Datetime\
) engine =ReplacingMergeTree(create_time)\
partition by toYYYYMMDD(create_time)\
primary key (id)\
order by (id, sku_id);
```

插入数据

```perl
insert into temp1 values\
(101,'sku_001',1000.00,'2020-06-01 12:00:00'),\
(102,'sku_002',2000.00,'2020-06-03 11:00:00'),\
(102,'sku_004',2500.00,'2020-06-01 12:00:00'),\
(102,'sku_002',2000.00,'2020-06-01 13:00:00'),\
(102,'sku_002',12000.00,'2020-06-01 13:00:00'),\
(102,'sku_002',600.00,'2020-06-02 12:00:00');
```

![image-20220305221534028](/Users/li/Library/Application Support/typora-user-images/image-20220305221534028.png)

只能在分区中去重

再次插入数据重复的

```perl
insert into temp1 values\
(101,'sku_001',1000.00,'2020-06-01 12:00:00'),\
(102,'sku_002',2000.00,'2020-06-01 11:00:00'),\
(102,'sku_004',2500.00,'2020-06-01 12:00:00'),\
(102,'sku_002',2000.00,'2020-06-01 13:00:00'),\
(102,'sku_002',12000.00,'2020-06-01 13:00:00'),\
(102,'sku_002',600.00,'2020-06-02 12:00:00');
```

因为新建数据在临时分区,只有合并分区,才能把数据去重.(这需要时间)



使用groupby

```perl
SELECT id,sku_id,argMax(total_amount,create_time) as amount ,max(create_time) AS ctime　FROM temp1　GROUP BY (id,sku_id)

```

![image-20220305221618164](/Users/li/Library/Application Support/typora-user-images/image-20220305221618164.png)

![image-20220305222143697](/Users/li/Library/Application Support/typora-user-images/image-20220305222143697.png)

副本同步



![image-20220306095446251](/Users/li/Library/Application Support/typora-user-images/image-20220306095446251.png)

https://www.cnblogs.com/shengyang17/p/14282944.html

![image-20220306095410812](/Users/li/Library/Application Support/typora-user-images/image-20220306095410812.png)