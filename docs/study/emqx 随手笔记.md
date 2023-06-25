\---

date: 2013-6-25

category: 数据库

tag:

  \- emqx

\---

# emqx 随手教程

```perl
emqx  官网
https://www.emqx.io/downloads#broker

wget https://www.emqx.com/en/downloads/broker/3.2.8/emqx-centos7-v3.2.8.zip
unzip emqx-centos7-v3.2.8.zip
[root@ps-compute bin]# ./emqx start
```



```perl
# centos7 安装emqx
$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2
#使用以下命令设置稳定镜像库，以centos7为例
sudo yum-config-manager --add-repo https://repos.emqx.io/emqx-ce/redhat/centos/7/emqx-ce.repo
#安装 EMQ X
sudo yum install emqx
#启动
emqx start

#下面是做一下修改连接用户名和密码，莫认是没账号密码的
vim /etc/emqx/plugins/emqx_auth_username.conf
#然后还要改下面的配置
vim /etc/emqx/emqx.conf
查找allow_anonymous，修改为false
# 重启
emqx restart

#打开
http://localhost:18083
#默认认的账号密码是:admin/public

#python 操作mqtt
#Pip 安装 Paho MQTT 客户端
pip3 install -i https://pypi.doubanio.com/simple paho-mqtt
```

python pads连接数据库

```perl
  # engine = create_engine('dialect+driver://username:password@host:port/database')
    engine = create_engine(
        'mysql+pymysql://szsps:%s@139.219.13.126:3306/sz_sps_javaweb?charset=utf8'%(urlquote('szSj@1314')))
    con = engine.connect()


    finished_products = get_finished_products_list()


    original_input_df = pd.read_sql_query('select * from t_profile_split_origin where batch_num=%(va)s', con,params={'va':batch_num})
```

