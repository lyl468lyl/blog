---
date: 2013-6-25
category: python
tag:
  - erp
---

# erp_next使用教程

```per
su - root
#添加用户
adduser frappe
#将新建的用户添加到sudo组
usermod -aG sudo frappe

```

2. 更换apt源

   ```perl
   #备份
   sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
   #修改
   sudo vim /etc/apt/sources.list
   #按ggVG进行全选，按d进行删除
   #将下面源粘贴,wq保存退出
   
   
   ```

   ```perl
   # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
   deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
   # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
   deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
   # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
   deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
   # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
   deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
   # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
   ```

   

3. 更新源

   ```perl
   apt update && apt upgrade -y
   ```

   

4. 下载nodejs 16.xx版本

   ```perl
   curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   ```

   

5. 安装程序运行时的依赖()

   ```perl
   sudo apt install -y  python3-setuptools python3-pip python3-distutils  software-properties-common mariadb-server-10.3 mariadb-client redis-server nodejs xvfb libfontconfig wkhtmltopdf libmysqlclient-dev nginx cron vim git ttf-wqy-zenhei ttf-wqy-microhei
   ```

   

6. 修改mariadb配置文件

   ```perl
   vi /etc/mysql/mariadb.conf.d/50-server.cnf
   ```

   ```perl
   #加入如下配置
   
   [mysqld]
   bind-address            = 0.0.0.0
   character-set-client-handshake = FALSE
   character-set-server = utf8mb4
   collation-server = utf8mb4_unicode_ci
   
   #注意,删除配置后面的character-set-server和collation-server配置
   [mysql]
   default-character-set=utf8mb4
   
   ```

   

7. 重启mysql

   ```perl
   sudo service mysql restart
   ```

   

8. mysql安全配置

   ```perl
   sudo mysql_secure_installation
   ```

   ```perl
   #进入MySQL安全配置
   Set root password? [Y/n] Y
   New password:  #输入数据库密码
   Re-enter new password: #重复输入数据库密码
   Remove anonymous users? [Y/n] Y
   Disallow root login remotely? [Y/n] n
   Remove test database and access to it? [Y/n] Y
   Reload privilege tables now? [Y/n] Y
   ```

   

9. 连接mysql

   ```perl
   mysql -u root -p
   #输入上面新设置的数据库root账号密码，进入数据库命令行，并执行下面的语句
   USE mysql; 
   UPDATE user SET plugin=' ' WHERE user ='root'; 
   FLUSH PRIVILEGES;
   exit;
   ```

   

10. 安装yarn,并切换国内源

    ```perl
    sudo npm install -g yarn
    #查看是否官方源
    yarn config get registry
    
    #查看源, 如果不是淘宝的源就切换为淘宝的源
    yarn config set registry https://registry.npm.taobao.org
    yarn config set sass_binary_site "node-sass Mirror"
    yarn config set phantomjs_cdnurl "http://cnpmjs.org/downloads"
    yarn config set electron_mirror "electron Mirror"
    yarn config set sqlite3_binary_host_mirror "https://foxgis.oss-cn-shanghai.aliyuncs.com/"
    yarn config set profiler_binary_host_mirror "node-inspector Mirror"
    yarn config set chromedriver_cdnurl "https://cdn.npm.taobao.org/dist/chromedriver"
    ```

    

11. 更改pip镜像源

    ```perl
    pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip
    #升级pip到最新版本（>10.0.0）后进行配置
    pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
    ```

    

12. 更改root账户镜像源

    ```perl
    sudo pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
    ```

    

13. 基础环境安装完成,查看版本

    ```perl
    node -v && npm -v && python3 -V && pip3 -V && yarn -v
    ```

    

14. 安装bench

    ```perl
    切换到frappe账号
    su - frappe
    sudo -H pip3 install frappe-bench
    ```

    

15. 查看bench版本

    ```perl
    bench --version
    ```

    

16. 创建虚拟环境,安装conda(注意在新建的frappe用户下安装conda)

    ```perl
    #root用户切换到frappe用户
    su frappe
    #下载
    wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-2022.10-Linux-x86_64.sh
    #执行脚本
    sudo bash Anaconda3-2021.11-Linux-x86_64.sh
    #设置环境变量
    vi ~/.bashrc
    export PATH="/home/frappe/anaconda3/bin/:$PATH"
    
    source ~/.bashrc
    #查看conda版本
    conda --version
    
    
    ```

    

    

17. 在==frappe==用户下创建虚拟环境

    ```perl
    su frappe
    conda create -n my_env python=3.10 #一定要指定python为3.10 ,erpnext14,需要python3.10
    conda activate my_env #激活虚拟环境
    
    #激活后
    (my_env) frappe@erpnext:/opt/moudle$ 
    
    ```

    备注:conda相关的命令

    ```perl
    #删除虚拟环境
    conda remove -n my_env --all
    #在虚拟环境中安装
    conda install -n my_env [package]
    #退出虚拟环境
    conda deactivate
    #查看所有的虚拟环境
    conda info --envs
    
    ```

    

    

18. 安装frappe框架

    ```perl
    (my_env) frappe@erpnext:/opt/moudle$ 
    bench init --frappe-branch version-14 frappe-bench --frappe-path=https://gitee.com/mirrors/frappe
    #如果出现网络问题加载不上，用官方工具回滚，或者参考下面的命令，删除相关文件夹
    rm -r frappe-bench
    
    #SUCCESS: Bench frappe-bench initialized
    #出现warn不要慌，正常现象，当提示success时，说明安装完全成功
    ```

    

19. 安装新站点

    ```perl
    #安装的系统用户分配权限
    sudo chmod -R o+rx /home/frappe/
    #进入到 frappe-bench目录
    cd frappe-bench
    
    #创建站点
    #名字可以随意改，不一定叫demo
    #需要输入mariadb密码
    #安装结束后，需要设置administrator的密码
    bench new-site demo
    
    #Updating Dashboard for frappe
    #demo: SystemSettings.enable_scheduler is UNSET
    #*** Scheduler is disabled ***
    #出现以上提示，说明站点创建完成
    ```

    

20. 下载App

    ```perl
    
    #创建新的应用
    bench new-app library_management
    
    #下载payment，node报WARN可以忽略，报ERROR说明真的出错了
    bench get-app https://gitee.com/phipsoft/payments
    #下载erpnext，同理，报WARN可忽略，大约需要3分钟，不要慌，就是等
    bench get-app --branch version-14 erpnext https://gitee.com/mirrors/erpnext
    #下载hrms
    bench get-app https://gitee.com/qpchen888/hrms
    
    ```

    ## 启用开发者模式

    到您的终端并退出工作台服务器（如果它已经在运行）`frappe-bench`，然后从目录中运行以下命令

    ```perl
    
    $ bench set-config -g developer_mode true
    $ bench start
    ```

    

    

21. 安装app

    ```perl
    #首先安装payments(erpnext应用需要payments应用)
    bench --site demo install-app payments
    bench --site demo install-app erpnext
    
    #下面是重点中的重点
    #在安装hrms前，先启动bench，并在bench启动后，新建终端窗口，用安装用户登录，进入frappe-bench目录安装hrms，命令如下
    
    
    bench start
    #在新窗口中进入frappe-bench目录
    cd frappe-bench
    #安装hrms
    bench --site demo install-app hrms
    ```

    

22. 设置为生产环境

    ```perl
    #在前面运行bench的窗口按Ctrl+C，结束bench运行，结束后才能设置生产环境
    Ctrl+C
    #设置生产环境
    sudo bench setup production frappe  //执行这个命令会在 /etc/nginx/conf.d/ 增加frappe-bench.conf ,并配置nginx(/etc/nginx/nginx.conf),并加载
    
    ```

    

23. 安装完成后检查

    ```perl
    bench doctor
    
    #出现这个:@ redis://localhost:11000，说明生产环境配置出现问题，重新运行配置命令,
    #出现覆盖提示，全部填y
    sudo bench setup production frappe
    
    #Workers online: 3
    #-----None Jobs-----
    #出现上面的提示，说明生产环境设置正确
    
    ```

    

24. 配置supervisord

    ```perl
    sudo vi /etc/supervisor/supervisord.conf
    #用supervisorctl管理所有进程，使用nginx做反向代理
    #修改unix_http_server内容
    
    [unix_http_server]
    file=var/tmp/supervisord.sock
    chmod=0700
    chown={USERNAME}:{USERNAME} #添加第四行代码，并将username改成frappe（或者你自定义的用户名）
    
    sudo -A systemctl restart supervisor #修改完成后执行上面的命令
    supervisorctl stop all //关闭所有的服务
    ```

​    

二 安装常用的app

1. 安装ERPnext界面汉化

   ```perl
      bench get-app https://gitee.com/yuzelin/erpnext_chinese.git #下载
      bench --site demo install-app erpnext_chinese #安装
   
   ```

   

   

   2. 安装ERPnext开箱即用（深度汉化+国内环境使用）

      ```perl
       bench get-app --branch version-14 https://gitee.com/yuzelin/erpnext_oob.git
       bench --site demo install-app erpnext_oob
      ```

      


      ​        

   ```perl
    
   
    
    3. 安装ERPNext权限优化
    
   bench get-app https://gitee.com/yuzelin/zelin_permission.git
       bench --site demo install-app zelin_permission
   ```


三 登录使用
​    
​    1. 登录网址

   ```perl
       http://139.219.0.35/app
   ```


​    
​    2. 修改中文界面

   ```perl
       选择头像--我的设置---基本信息--语言(进行修改)
   ```

四 相关报错解决方案
    
```perl
1. 安装MySQL后解决普通用户不能进入MySQL的问题


   #mysql5.7安装完成后普通用户不能进mysql，原因：root的plugin被修改成了auth_socket，用密码登陆的plugin应该是mysql_native_password，直接用root权限登录就不用密码,修改root密码和登录验证方式
   
   mysql> select user, plugin from mysql.user;
   +------------------+-----------------------+
   | user             | plugin                |
   +------------------+-----------------------+
   | root             | auth_socket           |
   | mysql.session    | mysql_native_password |
   | mysql.sys        | mysql_native_password |
   | debian-sys-maint | mysql_native_password |
   +------------------+-----------------------+
   4 rows in set (0.00 sec)
   mysql> update mysql.user set authentication_string=PASSWORD('123'), plugin='mysql_native_password' where user='root';
   mysql> flush privileges;
   mysql> exit
   
   # exit
```
   $ sudo /etc/init.d/mysql restart
       
   ```perl
    
   
    
    2. 彻底删除mariadb问题
   
        sudo apt-get remove --purge mysql
        sudo apt-get remove --purge maria*
        rm -f /var/log/mariadb
        rm -f /var/log/mariadb/mariadb.log
        rm -rf /var/lib/mysql
        rm -rf /usr/lib64/mysql
        rm -rf /usr/share/mysql
        #重新安装
        apt-get install mariadb-server mariadb-client
        
        #mariadb 安全配置
        sudo mysql_secure_installation
        #修改配置文件
        vi /etc/mysql/mariadb.conf.d/50-server.cnf
           "
        		bind-address            = 0.0.0.0
           character-set-client-handshake = FALSE
           character-set-server = utf8mb4
           collation-server = utf8mb4_unicode_ci
           "
       #重新启动
       sudo systemctl restart mariadb
       #查看mysql的字符编码:
       mysql -uroot -p
       
   MariaDB [(none)]> SHOW VARIABLES LIKE 'character%';
        
   ```

五 关于supervisorctl 相关说明

1. 启动supervisord

   ```perl
   (base) root@erpnext-dev:/etc/supervisor/conf.d# ps -ef|grep supervisord
   root     1599283       1  0 06:02 ?        00:00:00 /usr/bin/python3 /usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf
   
   #重启加载配置
   supervisorctl reload
   #查看配置状态
   supervisorctl status
   
   ```

   

1. 命令相关

   ```perl
   bench restart 
   
   会启动如下服务:
   (base) root@erpnext-dev:/opt/moudle/frappe-bench# supervisorctl status
   frappe-bench-redis:frappe-bench-redis-cache                 FATAL     Exited too quickly (process log may have details)
   frappe-bench-redis:frappe-bench-redis-queue                 FATAL     Exited too quickly (process log may have details)
   frappe-bench-redis:frappe-bench-redis-socketio              FATAL     Exited too quickly (process log may have details)
   frappe-bench-web:frappe-bench-frappe-web                    STOPPED   Apr 28 04:01 AM
   frappe-bench-web:frappe-bench-node-socketio                 FATAL     Exited too quickly (process log may have details)
   frappe-bench-workers:frappe-bench-frappe-default-worker-0   RUNNING   pid 1409659, uptime 0:10:27
   frappe-bench-workers:frappe-bench-frappe-long-worker-0      RUNNING   pid 1409661, uptime 0:10:27
   frappe-bench-workers:frappe-bench-frappe-schedule           RUNNING   pid 1409658, uptime 0:10:27
   frappe-bench-workers:frappe-bench-frappe-short-worker-0     RUNNING   pid 1409660, uptime 0:10:27
   
   这些服务受 supervisorctl监视控制,响应的程序杀掉就会被supervisorctl重启,如frappe-bench-web:frappe-bench-frappe-web 就是frappe 后台程序占用8000端口
   
   可以手动关闭服务:
   supervisorctl stop all //关掉所有服务
   supervisorctl stop frappe-bench-web:frappe-bench-frappe-web //关掉的服务就不受supervisiorctl监视控制了,就能kill掉了
   
   bench start
   
   启动 frappe服务 占用8000端口
   启动 三个redis的服务: 各占用11000端口,12000端口,13000端口
   
   sudo bench setup production frappe  
   1)在/opt/moudle/frappe-bench/config 创建nginx.conf文件
     在/opt/moudle/frappe-bench/config 创建supervisor.conf文件
   
   
   2)启动nginx 80 端口,
     在/etc/nginx/conf.d/ 增加frappe-bench.conf (软连接frappe-bench.conf -> /opt/moudle/frappe-bench/config/nginx.conf)
     在/etc/supervisor/conf.d 添加frappe-bench.conf (软连接frappe-bench.conf -> /opt/moudle/frappe-bench/config/supervisor.conf)
   
   
   
   
   
   
   
   ```



   frappe 操作数据库

   ```perl
    print("\033[32m" + "李玉龙2222" + "\033[0m")
    
    #从sigle talbe(所有单个值都存储在一个名为tabSingles) 读出数据
		loan_period = frappe.db.get_single_value("Library Settings", "loan_period")

		print(loan_period)
	
		#修改记录的值(第一种方法)
		doc1=frappe.get_doc("Library Member","LM0002")
		doc1.email_adress = "xiao@gmail.com"
		doc1.save()
		
		#直接更改数据的值(第二种方法)
		doc1.db_set('full_name',"gerui")
		print(doc1.email_adress)
		
		
   #插入一条新的记录(第一种方法)
		doc=frappe.get_doc(doctype="Library Member", full_name='li yu',
						   first_name="li",last_name = "yu",email_address="li@123.com",
						   phone="12345")
		print(doc.full_name)
		doc.insert()

		# 创建一哥新的记录的另一种方式(第二种方法)
		doc3=frappe.new_doc("Library Member")
		doc3.title ='LM100000'
		doc3.first_name="sss"
		doc3.insert()



		#查询数据,只返回name字段
		list1=frappe.db.get_list("Library Member",pluck='name')
		print("\033[32m" + "list1" + "\033[0m")
		print(list1)

		#按条件查询
		list1 = frappe.db.get_list("Library Member", filters={'full_name':"zhang san"},fields=['name','full_name'])
		print(list1)
		list2 = frappe.get_all("Library Member", filters={'full_name': "zhang san"}, fields=['name', 'full_name'])
		print(list2)

		# 删除一条记录
		frappe.delete_doc('Library Member', 'LM0010')
		
		#判断记录是否存在
		frappe.db.exists("User", {"full_name": "Jane Doe"})
   ```



##### erpnext 在page下,用js 加载html 

frappe在js中render到html中(page显示html内容)

 ![image-20230614153324258](/Users/li/Library/Application Support/typora-user-images/image-20230614153324258.png)

gantt.js

```perl
 const data={"name":"liyulong","age":"12"}
 $(frappe.render_template("index")).appendTo(page.body.addClass("no-border1"));
```

gantt.html

```perl

<div class="ok">ganttokccccccc</div>
<div>{%=name%}</div>
<div>{%=age%}</div>
```



在应用的的www目录下添加usrs.py usr.html

usrs.py

```perl
def get_context(context):
    context.users = frappe.get_list("User", fields=["first_name", "last_name"])
```

usrs.html

```perl
<h3>List of Users</h3>
<ol>
{% for user in users %}
    <li>{{ user.first_name }} {{ user.get("last_name", "") }}</li>
{% endfor %}
</ol>

```





#### api的相关操作

##### 一. 自定义函数调用

http://192.168.50.23/应用.模块.文件夹.文件.方法名

```perl
http://192.168.50.23/api/method/library_management.library_management.doctype.article.article.hello
http://192.168.50.23/api/method/frappe.good.aaa.get_test_user

```



1. `/api/method/{methodname}` will call a whitelisted method

http://192.168.50.23//api/method/frappe.test.get_test_user

路径: frappe.test.get_test_user相当于 apps/frappe/frappe/test.py/get_test_user(funciton)

注意:必须在/apps/frappe/frappe下创建xxx.py

test.py

```perl
# Copyright (c) 2021, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See LICENSE
# from urllib.parse import quote

import frappe

@frappe.whitelist()
def get_logged_user():
	return frappe.session.user

@frappe.whitelist()
def get_test_user():
	return "liyulong1233358"


```



第二种:

在apps/frappe/frappe/ 下创建good文件夹.

然后在apps/frappe/frappe/good/aaa.py

```perl
import frappe
@frappe.whitelist(allow_guest=True)
def get_logged_user():
	return frappe.session.user

@frappe.whitelist(allow_guest=True)
def get_test_user():
	return "liyulong1233358"

```

```perl
#访问url
http://192.168.50.23/api/method/frappe.good.aaa.get_test_user
```



第一种和第二种区别

```perl
放在apps/frappe/frappe下的aaa.py 白名单这样写:@frappe.whitelist()
放在apps/frappe/frappe/good/aaa.py 白名单这样写@frappe.whitelist(allow_guest=True)
```

##### 二. 数据查询 

```perl
/api/resource/{doctype}` will query a table
#获取doctype的文档内容
http://192.168.50.23/api/resource/Article
#查询过滤
http://192.168.50.23/api/resource/Article?fields=["name","owner"]&&filters=[["Article","name","=","3ca986277a"]]
#根据id查询一条记录
http://192.168.50.23/api/resource/Article/f7da379402

```



##### 三. 数据增删操作

1. 插入一条记录

   ```perl
   # api/resource/{doctype}/{name}` will point to a resource
   #POST` will insert
   
   post http://192.168.50.23/api/resource/Article
   {"article_name":"水浒转"}
   ```

   

2. 修改数据

   ```perl
   put http://192.168.50.23/api/resource/Article/3ca986277a
   {"article_name":"xxxx","isdn":"000"}
   ```

   

3. 删除数据

   ```perl
   delete http://192.168.50.23/api/resource/Article/3ca986277a
   ```

   

##### 四. 数据授权

直接发放登录接口,或者把 article 的权限加上guest

```perl
curl -X POST http://192.168.50.23/api/method/login \
     -H 'Content-Type: application/json' \
     -H 'Accept: application/json' \
     -d '{"usr":"Administrator","pwd":"123"}'
```

查看目前登录的用户

```perl
http://192.168.50.23//api/method/frappe.test.get_logged_user
http://192.168.50.23/api/method/frappe.auth.get_logged_user(标准)
```



python脚本apitoke登录验证:

```perl
#python代码
#带全正的请求
if __name__ == '__main__':
    url = "http://192.168.50.23/api/resource/Article?fields=[\"name\",\"owner\"]&&filters=[[\"Article\",\"name\",\"=\",\"3ca986277a\"]]"
    headers = {
         'Authorization': "token 17d6d3b731d2546:c9942ba1fa92ffa"
    }
    #response = requests.get(url)
    response = requests.request("GET", url, headers=headers)
    print(response.json())
```



erpnext 数据库字段查询脚本

```perl
import frappe
import difflib
def find_similar_words(word_list, target_word):
    similar_words = difflib.get_close_matches(target_word, word_list)
    return similar_words

def get_context(context):
	queryName=frappe.form_dict.name
	sheetList=[]
	sheet=frappe.db.sql("show tables")
	# print(sheet)
	# sheet=["tabArticle","tabAddress"]

	for row in sheet:
		# print("get_context")
		# print(row)
		descInfo=frappe.db.sql(f"desc `{row[0]}`")
		list=[]
		for item in descInfo:
			list.append(item[0])

		similar_words = difflib.get_close_matches(queryName, list)
		# print(similar_words)
		if len(similar_words) != 0:
			dict={}
			dict["name"]=row[0]
			dict["data"]=list
			dict["word"]=similar_words[0]
			sheetList.append(dict)
		# print(sheetList)
		context.sheetData=sheetList


    # context.users = frappe.get_list("User", fields=["first_name", "last_name"])
	# context.sheet=frappe.db.get_all;



```



doctype python 代码的回调函数

 ![image-20230616151719253](/Users/li/Library/Application Support/typora-user-images/image-20230616151719253.png)

js 代码的回调函数

 ![image-20230616151830540](/Users/li/Library/Application Support/typora-user-images/image-20230616151830540.png)



在 doctype 下的下载功能

```perl
# Copyright (c) 2023, liyulong and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Article(Document):
	print('\033[0;31m---article---\033[0m')
	print('\033[0;31m---liyulong---\033[0m')

	def before_save(self):
		print('\033[0;31m---before_save---\033[0m')


	def autoname(self):
		print('\033[0;31m---auto name---\033[0m')
		print("autoname")

	def validate(self):
		print('\033[0;31m---validate---\033[0m')
		print("validata")
	def before_insert(self):
		print('\033[0;31m---insert---\033[0m')
	def show(self):
		print('\033[0;31m---show article---\033[0m')
		print(self.name)
		print(self.description)
		return frappe.render_template(
			"library_management/templates/article/index.html",
			{
				"title": self.name,
				"description": self.description,
			},
		)



@frappe.whitelist()
def hello():
	article=frappe.get_doc("Article", "2a13224fce")
	data=article.show()
	frappe.local.response.filecontent = data
	frappe.local.response.type = "download"
	frappe.local.response.filename = "index.html"



```

请求连接

```perl
http://192.168.50.23/api/method/library_management.library_management.doctype.article.article.hello
```



javascript 直接调用python 的代码



 ![image-20230616184111229](/Users/li/Library/Application Support/typora-user-images/image-20230616184111229.png)

article.js 代码

```perl
// Copyright (c) 2023, liyulong and contributors
// For license information, please see license.txt

frappe.ui.form.on('Article', {
	refresh: function(frm) {
        console.log("article test")
		frappe.call({
				method: "library_management.library_management.doctype.article.article.sendMessage",
				args: {

					message: frm.doc.article_name,
				},
				callback: function (r) {
					if (r.message) {
						console.log(r.message)
						// print(r.message)

					}
				},
			})

	}
});

```

article.py 代码

```perl

// Copyright (c) 2023, liyulong and contributors
// For license information, please see license.txt

frappe.ui.form.on('Article', {
	refresh: function(frm) {
        console.log("article test")
		frappe.call({
				method: "library_management.library_management.doctype.article.article.sendMessage",
				args: {

					message: frm.doc.article_name,
				},
				callback: function (r) {
					if (r.message) {
						console.log(r.message)
						// print(r.message)

					}
				},
			})

	}
});

```



##### frappe www下的请求流程:



例如:

1. frappe/www/contact.html 

   

```perl
<script>
	{% include "templates/includes/contact.js" %}
</script>
```

2. frappe/templates/includes/contact.js

   ```perl
   frappe.send_message({
   			subject: $('[name="subject"]').val(),
   			sender: email,
   			message: message,
   			callback: function(r) {
   				if (!r.exc) {
   					frappe.msgprint('{{ _("Thank you for your message") }}');
   				}
   				$(':input').val('');
   			}
   		}, this);
   ```

   

3. frappe/website/js/website.js

   ```perl
   send_message: function (opts, btn) {
   		console.log(opts)
   		console.log(btn)
   		return frappe.call({
   			type: "POST",
   			method: "frappe.www.contact.send_message",
   			btn: btn,
   			args: opts,
   			callback: opts.callback,
   		});
   	},
   	
   	#调用frappe.call调用此方法
   	call: function (opts) {
   	
   	return $.ajax({
   			type: opts.type || "POST",
   			url: "/",
   			data: opts.args,
   			dataType: "json",
   			headers: {
   				"X-Frappe-CSRF-Token": frappe.csrf_token,
   				"X-Frappe-CMD": (opts.args && opts.args.cmd) || "" || "",
   			},
   			statusCode: opts.statusCode || {
   				404: function () {
   					frappe.msgprint(__("Not found"));
   				},
   				403: function () {
   					frappe.msgprint(__("Not permitted"));
   				},
   				200: function (data) {
   					if (opts.callback) opts.callback(data);
   					if (opts.success) opts.success(data);
   				},
   			},
   		}).always(function (data) {
   			if (opts.freeze) {
   				frappe.unfreeze();
   			}
   	
   	
   	}
   ```

   

4. frappe/app.py 接收请求,启用一个python服务占用8000端口.接收上面的ajax请求

   ```perl
   @local_manager.middleware
   @Request.application
   def application(request: Request):
   			  init_request(request)
   				if request.method == "OPTIONS":
   			       response = Response()
   
   		    elif frappe.form_dict.cmd:
   			  response = frappe.handler.handle()
   
   		     elif request.path.startswith("/api/"):
   			   response = frappe.api.handle()
   			   
   			   
   def init_request(request):
   			import json
   			request_data = request.get_data(as_text=True)
   	
   	    frappe.local.request = request
   	    frappe.local.is_ajax = frappe.get_request_header("X-Requested-With") == "XMLHttpRequest"
   
   	    site = _site or request.headers.get("X-Frappe-Site-Name") or get_site_name(request.host)
   	    frappe.init(site=site, sites_path=_sites_path, force=True)
   	    make_form_dict(request)
   	    
   	    if request.method != "OPTIONS":
   
   		       frappe.local.http_request = frappe.auth.HTTPRequest()
   	    
   	    
   def make_form_dict(request):
            import json
            request_data = request.get_data(as_text=True) // sender=huachun%40123.com&message=gg&cmd=frappe.www.contact.send_message
            args = json.loads(request_data) // {'sender': 'huachun@123.com', 'message': 'gg', 'cmd': 'frappe.www.contact.send_message'}
   
   def serve(
   	port=8000, profile=False, no_reload=False, no_threading=False, site=None, sites_path="."
   ):
   ```

   frappe.local.http_request = frappe.auth.HTTPRequest()

   ```perl
   class HTTPRequest:
       self.set_request_ip()
   
   		# load cookies
   		self.set_cookies()
   
   		# login and start/resume user session
   		self.set_session()
   
   ```

   

   self.set_session()

   ```perl
   frappe.local.login_manager = LoginManager()
   
   ```

   LoginManager()

   ```perl
   class LoginManager:
   
   	__slots__ = ("user", "info", "full_name", "user_type", "resume")
   
   	def __init__(self):
   	if (
   			frappe.local.form_dict.get("cmd") == "login" or frappe.local.request.path == "/api/method/login"
   		):
   		if self.login() is False:
   	else:
   			try:
   			self.resume = True
   			self.make_session(resume=True)
   			self.get_user_info()
   			self.set_user_info(resume=True)
   	  
   
   ```

   self.login()

   ```perl
   def login(self):
   		self.authenticate(user=user, pwd=pwd)
   
   ```

   

   

   

5. frappe/handler

   ```perl
   
   def handle():
   	cmd = frappe.local.form_dict.cmd
   	data = None
   
   	if cmd != "login":
   
   		print(cmd)  //frappe.www.contact.send_message
   		data = execute_cmd(cmd)
   	if data is not None:
   		if isinstance(data, Response):
   			# method returns a response object, pass it on
   			return data
   		frappe.response["message"] = data
   ```

   

6. 调用frappe/www/contact.send_message

   

   ```perl
   
   @frappe.whitelist(allow_guest=True)
   @rate_limit(limit=1000, seconds=60 * 60)
   def send_message(sender, message, subject="Website Query"):
       frappe.get_doc(
   		dict(
   			doctype="Communication",
   			sender=sender,
   			subject=_("New Message from Website Contact Page"),
   			sent_or_received="Received",
   			content=message,
   			status="Open",
   		)
   	).insert(ignore_permissions=True)
   ```

   

   

   

7. 

8. 

