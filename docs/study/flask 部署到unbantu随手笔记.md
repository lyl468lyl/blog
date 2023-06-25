\---

date: 2013-6-25

category: python

tag:

  \- flask

\---

# flask 部署到unbantu教程



```perl
# 安装虚拟环境
pip3 install virtualenv

# 创建虚拟环境 ENV,在当前目录下创建名为ENV的虚拟环境
virtualenv ENV

# 启用虚拟环境
source ./bin/activate

#退出虚拟环境
在虚拟环境中 输入dactivate

#在本地环境中收集依赖文件
pip3 freeze >requirements.txt

# 在服务中安装依赖清单里的库
pip3 install -r requirements.txt

# 列出当前虚拟环境所安装的依赖库
pip3 list

#在虚拟环境中安装uwsgi
apt-get install uwsgi

#安装gunicorn
pip install gunicorn

# 此处app:app中，第一个app为flask项目实例所在的包，第二个app为生成的flask项目实例
#第一个app是flask的启动python文件，第二个app则是flask应用程序实例
nohup gunicorn -w 4 -b 192.168.50.230:8001 app:app &> ./logs/flask.log &



```

flask 将表转换为model

```perl
pip3 install flask-sqlacodegen
flask-sqlacodegen "mysql+pymysql://root:shangjian@127.0.0.1/sz_sps_javaweb" --tables tbl_fzkpi --outfile "model.py" --flask

```

python 后台启动

```perl
[root@java-dev data1]# nohup python3 app.py >my.log &
或者nohup python3 app.py >/dev/null 2>&1 &

使用完nohup后，千万不能直接关闭SSH，要使用exit退出shell。

再用外网访问一下flask，发现没有问题了！可以后台启动了！
```



mysql too many connection

```perl

mysql> set global max_connections = 300;
Query OK, 0 rows affected
mysql> show variables like 'max_connections';


[mysqld]
datadir=C:/devlope/Mariadb
port=3369
innodb_buffer_pool_size=3053M
character-set-server=utf8
# 添加一行如下
max_connections=300
```



