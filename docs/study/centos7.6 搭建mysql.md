---

date: 2013-6-25

category: linux

tag:

  - centos

---

# centos7.6 搭建mysql

下载:

https://downloads.mysql.com/archives/community/

version:5.7.33

sysem:redhat Enterprice oracle Liunx

osversion red hat enterprice linux 7 (x86 64-bit)



```perl
mkdir /opt/software/mysql
cd /opt/software/mysql
wget https://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.33-1.el7.x86_64.rpm-bundle.tar
[root@sps-dev mysql]# tar -xvf mysql-5.7.33-1.el7.x86_64.rpm-bundle.tar 
[root@sps-dev mysql]# rpm -qa|grep mariadb
[root@sps-dev mysql]# rpm -ivh mysql-community-common-5.7.33-1.el7.x86_64.rpm 
[root@sps-dev mysql]# rpm -ivh mysql-community-libs-5.7.33-1.el7.x86_64.rpm 
[root@sps-dev mysql]# rpm -ivh mysql-community-devel-5.7.33-1.el7.x86_64.rpm 
[root@sps-dev mysql]# rpm -ivh mysql-community-libs-compat-5.7.33-1.el7.x86_64.rpm 
[root@sps-dev mysql]# rpm -ivh mysql-community-client-5.7.33-1.el7.x86_64.rpm 
[root@sps-dev mysql]# rpm -ivh mysql-community-server-5.7.33-1.el7.x86_64.rpm 

#查看启动状态
[root@sps-dev mysql]# service mysqld status
#启动
[root@sps-dev mysql]# systemctl start mysqld
#查看临时密码
[root@sps-dev mysql]# grep "password" /var/log/mysqld.log

#客户端登录
mysql -u roor -p?3pcNyGpPa0z

#设置密码策略为LOW，此策略只检查密码的长度
mysql> set global validate_password_policy=LOW;
#设置密码最小长度

set global validate_password_length=6;
#修改mysql的root用户，本地登陆的密码为123456

ALTER USER 'root'@'localhost' IDENTIFIED BY 'shangjian';


#开启mysql远程登录连接
mysql> grant all privileges on *.* to 'root'@'%' identified by 'shangjian123456' with grant option;

mysql> FLUSH   PRIVILEGES; 

#杀死批量的pid
[root@aps local]# ps -ef|grep sleep|grep -v grep|cut -c 9-15|xargs kill -9


```





