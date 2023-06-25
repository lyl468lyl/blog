---
date: 2013-6-25
category: 运维
tag:
  - gitlab
---

#                                 ubuntu18.04 安装gitlab

## 安装依赖

安装[gitlab](https://so.csdn.net/so/search?q=gitlab&spm=1001.2101.3001.7020)前需要对其依赖包进行安装，确保符合安装gitlab的条件

```perl
sudo apt update
sudo apt install ca-certificates curl openssh-server postfix

```

对于`postfix`的安装，请在出现提示时选择“ **Internet站点”**。在下一个屏幕上，输入服务器的域名以配置系统发送邮件的方式

## 安装gitlab

安装gitlab前需要确定[ubuntu](https://so.csdn.net/so/search?q=ubuntu&spm=1001.2101.3001.7020)的版本代号，才能选择对应的gitlab版本。

```
lsb_release -a

#显示如下信息
LSB Version:	core-9.20170808ubuntu1-noarch:security-9.20170808ubuntu1-noarch
Distributor ID:	Ubuntu
Description:	Ubuntu 18.04.5 LTS
Release:	18.04
Codename:	bionic
```

- 查看gcc和linux的版本

```
cat /proc/version
```

### 下载并安装gitlab

通过安装wget，下载指定的gitlab文件后，手动安装。

- 安装wget

 ```perl
sudo apt-get install wget
 ```

- 下载gitlab-ce

```perl
实例如下，下载的是20.04版本的
wget -P /Downloads https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/ubuntu/pool/focal/main/g/gitlab-ce/gitlab-ce_13.10.0-ce.0_amd64.deb

实例如下，下载的是18.4版本的

wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/ubuntu/pool/bionic/main/g/gitlab-ce/gitlab-ce_14.8.5-ce.0_amd64.deb

```

- 安装gitlab

```perl
dpkg说明：
dpkg -L 查看软件的状态，如：dpkg -L gitlab-ce
dpkg -P 卸载软件（软件名，而不是安装包名）
dpkg --remove 删除安装包，不删除配置
dpkg --purge 删除安装包和配置文件
*注意
gitlab 使用的是PostgreSQL数据库
```

安装软件指令如下

```perl
sudo dpkg -i gitlab-ce_14.8.5-ce.0_amd64.deb
```

修改配置文件

在gitlab配置文件 /etc/gitlab/gitlab.rb 中修改外部url，改为自己的ip地址或者域名

```perl
sudo vim /etc/gitlab/gitlab.rb
```



修改内容如下:

```perl
external_url 'http://192.168.50.230'
puma['port'] = 8050
nginx['listen_addresses'] = ['*']
nginx['listen_port'] = 8060



```

更改代码存储的路径

```perl
 git_data_dirs({
   "default" => {
     "path" => "/opt/data/git-data"
    }
 })

```



重新载入配置

```perl
sudo gitlab-ctl reconfigure
执行完这个命令后会创建/var/opt/gitlab文件夹,并创建下面配置文件

卸载了GitLab，重装了GitLab之后，运行 sudo gitlab-ctl reconfigure命令的时候，卡死在
* ruby_block[supervise_redis_sleep] action run 
需要执行 如下命令
[root@localhost /]# sudo systemctl restart gitlab-runsvdir
[root@localhost /]# 
[root@localhost /]# sudo gitlab-ctl reconfigure
[root@localhost /]# 



```





vim /var/opt/gitlab/gitlab-rails/etc/gitlab.yml

```perl
  gitlab:
    ## Web server settings (note: host is the FQDN, do not include http://)
    host: 192.168.50.230
    port: 8060
    https: false

```

vim /var/opt/gitlab/gitlab-rails/etc/puma.rb

```perl
bind 'tcp://127.0.0.1:8050'
```

vim /var/opt/gitlab/nginx/conf/gitlab-http.conf

```perl

server {
  listen *:8060;


  server_name 192.168.50.230;
  server_tokens off; ## Don
  }
```



​    启动gitlab，指行如下指令

```perl
sudo gitlab-ctl start
```

```perl

如果重新执行gitlab-ctl reconfigure情况:
puma.rb文件在你执行gitlab-ctl reconfigure 的时候会被重置，所以需要再做修改，
最后执行
gitlab-ctl restart
```





相关指令的说明:

```perl
sudo gitlab-ctl reconfigure	重新加载配置，每次修改/etc/gitlab/gitlab.rb文件之后执行
sudo gitlab-ctl status	查看 GitLab 状态
sudo gitlab-ctl start	启动 GitLab
sudo gitlab-ctl stop	停止 GitLab
sudo gitlab-ctl restart	重启 GitLab
sudo gitlab-ctl tail	查看所有日志
sudo gitlab-ctl tail nginx/gitlab_acces.log	查看 nginx 访问日志
sudo gitlab-ctl tail postgresql	查看 postgresql 日志
apt-get -f install  更新安装

```

登录

```perl
http://192.168.50.230:8060/users/sign_in
```

 查询首次登录的密码

```perl
cat /etc/gitlab/initial_root_password

Password: QQSAyQySeyCxRGcqXd52V0nwMrYtnv9tyH2yaCfvU0c=

用户名为root
```



 修改root密码:

```perl
gitlab-rails console production
user = User.where(id: 1).first #查看id为1的账号
或者 user = User.where(name:''root").first

user.password=‘123456789’ #修改密码为12345678
user.password_confirmation=‘123456789’ #确认密码
user.save! #保存
quit #退出‘’
```



gitlab 错误日志的查看

```perl
gitlab-ctl tail
```

重新安装

```perl
卸载gitlab

sudo apt-get remove --purge gitlab-ce
rm -rf /var/opt/gitlab

杀死所有进程
pkill -f gitlab

- 删除路径

rm -rf /opt/gitlab

rm -rf /etc/gitlab

rm -rf /var/opt/gitlab
```



##### gitlab 数据迁移

查看gitlab 版本

```perl
cat /opt/gitlab/embedded/service/gitlab-rails/VERSION
```



注意事项:

```perl
两台服务器的Gitlab版本必须是统一的，如有不统一，请先进行升级统一
如需升级可在数据迁移完成之后进行gitlab版本升级。
```

##### 备份数据，将旧服务器上的数据打包

```perl
gitlab-rake gitlab:backup:create RAILS_ENV=production
```

备份后的文件一般是位于/var/opt/gitlab/backups下, 自动生成文件名文件名如 1614232417_2021_02_25_12.8.7_gitlab_backup.tar

##### 数据迁移，将备份数据拷贝至新服务器（已经搭建好giltab同版本环境）

```perl
 scp 1681874921_2023_04_19_14.8.5_gitlab_backup.tar sj@192.168.50.60:/var/opt/gitlab/backups
```

在新的服务器中恢复命令

```perl
chown -R git.git /var/opt/gitlab/backups/

gitlab-rake gitlab:backup:restore RAILS_ENV=production BACKUP=1681874921_2023_04_19_14.8.5
注意：这里没有后面的_gitlab_backup.tar名字
```









git使用说明

```perl
第一步：下载安装git，在官网下载安装即可

第二步：在左面空白处点击鼠标右键，点击Git Bash Here，出现对话框
第三步：配置本地仓库的账号邮箱git

git config --global user.name  "liyulong"

git config --global user.email "liyulong@szwanggu.com"

第四步：使用ssh密钥登陆。
用下面指令生成ssh(执行命令后一路回车)
$ ssh-keygen -t rsa -C "liyulong@szwanggu.com"

根据生产命令提示,找到公钥的生成路径
如:vi /Users/li/.ssh/id_rsa.pub

第五步 使用账户登录gitlab
登录url:  http://192.168.50.230:8060/
登录系统后,点击头像的下拉菜单,选择偏好设置,找到ssh秘钥菜单
将第四步的公钥内容,粘贴到"秘钥"框中,如图:

```

![image-20221115103540380](/Users/li/Library/Application Support/typora-user-images/image-20221115103540380.png)

```
第六步 clone 代码测试,是否能够顺利下载代码
git clone http://192.168.50.230:8060/gengda/sps-vue.git

第七步: 提交本地仓库
1)git add .  或者 git add xxx
  git add xxx ：提交指定文件；  git add . 提交全部
2)git commit -m "提交代码"   推送修改到本地git库中
  git commit -m "添加xx文件"
3)连接远程仓库(前端/后端/算法都有对应响应的gitlab库),以前端为例:
  git remote add origin http://192.168.50.230:8060/gengda/sps-vue.git
注意:如果origin 已经存在可以用如下命令删除
  git remote rm origin
4)提交到远程仓库
  1)创建分支
    1.列出所有分支
    git branch -a
    2.创建dev分支
    git branch dev
    
    3.切换分支
    git checkout dev
5)提交代码到远程的(master或dev)分支
git push origin dev
      

  
```

