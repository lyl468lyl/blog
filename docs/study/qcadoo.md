---

date: 2013-7-19

category: qcadoo

tag:

  - qcadoo

---

# qcadoo开发文档

####  一 .postgres数据库安装

1. 输入以下命令安装PostgreSQL

   ```perl
   sudo apt install postgresql postgresql-contrib
   ```

2. 查看运行状态

   ```perl
   sudo service postgresql status
   ```

3. 登录postgres账户

   ```perl
   sudo su postgres
   ```

   

4. 进入sql命令行

   ```perl
   #默认登入postgres数据库
   psql
   
   #以zhangsan用户登入,登入mes数据库
   psql -U zhangsan -d mes -h 127.0.0.1 -p 5432
   ```

   

5. 创建数据库

   ```perl
   create database test;
   ```

   

6. 修改访问ip，允许远程访问

   ```perl
   # vi /etc/postgresql/10/main/postgresql.conf
   listen_addresses = '*'
   #vi /etc/postgresql/10/main/pg_hba.conf
   # 在文件中加入这一行
   host    all             all             0.0.0.0/0               md5
   ```

   

7. 退出命令行

   ```perl
   \q
   ```

   

8. 重启服务

   ```perl
   #提示,需在root用户下执行
   sudo service postgresql restart
   ```

   

9. 数据库创建用户

   ```perl
   #需要用postgres 用户去创建,否则没有权限
   \q
   CREATE USER zhangsan WITH PASSWORD '123'
   ```

   

10. 创建数据库，与用户关联

    ```perl
    CREATE DATABASE shop OWNER liyulong
    ```

    

11. 设置所有权

    ```perl
    GRANT ALL PRIVILEGES ON test exampledb to zhangsan;
    ```

    

12. 查询用户集

    ```perl
    mes=> select * from pg_user;
    ```

    

13. 查询所有的库名

    ```perl
    SELECT datname FROM pg_database;
    ```

    

14. 创建新表

    ```perl
    CREATE TABLE t_order(ID SERIAL PRIMARY KEY,name VARCHAR(20), signup_date DATE);
    ```

    

15. 插入数据

    ```perl
    shop=> INSERT INTO t_order(name, signup_date) VALUES('张三', '2013-12-22');
    ```

    

16. 选择记录

    ```perl
    SELECT * FROM t_order;
    ```

    

17. 更新数据

    ```perl
    UPDATE t_order set name = '李四' WHERE name = '张三';
    ```

    

18. 删除记录

    ```perl
    shop=> DELETE FROM t_order WHERE name = '李四' ;
    ```

    

19. 添加栏位

    ```perl
    shop=> ALTER TABLE t_order ADD email VARCHAR(40);
    ```

    

20. 更新字段结构

    ```perl
    ALTER TABLE t_order ALTER COLUMN signup_date SET NOT NULL;
    ```

    

21. 更新字段名

    ```perl
    ALTER TABLE t_order RENAME COLUMN signup_date TO signup;
    ```

22. 表更名

    ```perl
    ALTER TABLE t_order RENAME TO t_item;
    ```

    

23. 删除表

    ```perl
    DROP TABLE IF EXISTS t_order;
    ```

    

24. 查询库中的表

    ```perl
    SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
    ```

    

25. 查询当前的库名

    ```perl
    SELECT current_database();
    ```

    

26. 

    ```perl
    
    ```

    #### 二 .  qcadoo 配置

    1. 下载qcadoo

       ```perl
       wget  https://github.com/qcadoo/mes/releases/download/2.4.1/qcadoo-mes-2.4.1.zip
       unzip qcadoo-mes-2.4.1.zip
       ```

       

    2. 数据库配置信息

       ```perl
       
       #qcadoo/qcadoo/db.properties
       
       dbDriverClass=org.postgresql.Driver
       dbJdbcUrl=jdbc:postgresql:mes
       dbUsername=postgres
       dbPassword=postgres123
       hibernateDialect=org.hibernate.dialect.PostgreSQLDialect
       ```

       

    3. 导入数据

       ```perl
       cd /opt/module/mes/webapps/ROOT/WEB-INF/classes/schema
       
       psql -U postgres mes < demo_db_en.sql
       ```

       

    4. 运行

       ```perl
       cd /opt/module/mes/bin
       ./startup.sh
       ```

       

    5. 打开

       ```perl
       http://192.168.50.230:8080
       用户名:superadmin
       密码:superadmin
       ```

       

       

    6. 

    7. 

       

       

       

    

    









 





















