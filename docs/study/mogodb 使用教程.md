---

date: 2013-6-25

category: 数据库

tag:

  - mongodb

---

# mogodb 使用教程



1. 安装使用

   ```perl
   sudo apt-get install mongodb
   ```

2. 进入mongodb命令行

   ```perl
   mongo
   ```

   

3. 创建一 用户名为 admin 密码为 adminl23 的用户，赋予最高权限

   ```perl
   use sps_mongo_v2
   
   db.createUser({user: 'root', pwd: 'shangjian123456', roles: [{role: 'dbAdmin', db: 'sps_mongo_v2'}]});
   ```

   

4. 插入一条数据

   ```perl
   db.book.insert({name:"test"})
   ```

   

5.  启动、关闭、重启

   ```perl
   sudo service mongod stop
   
   service mongod start
   
   sudo service mongod restart
   ```

   

6. 配置:要想让别的主机连接安装好的mongodb需要修改配置文件，配置文件位于/etc目录下

   ```perl'
   /etc/mongodb.conf
   
   将bind_ip = 127.0.0.1 修改为0.0.0.0
   ```

   

7. java 开发相关依赖

   ```perl
   <dependency>
   
     <groupId>org.springframework.boot</groupId>
   
     <artifactId>spring-boot-starter-data-mongodb</artifactId>
   
   </dependency>
   ```

   

8. spring 链接方式

   ```perl
   spring:
   
     data:
   
   ​    mongodb:
   
   ​      uri: mongodb://root:shangjian123456@192.168.50.230:27017/shangjian
   ```

   

9. 图形界面工具

   ```pel
   https://www.mongodb.com/try/download/community
   ```

   

10. 基本操作

    ```perl
    1.mongoTemplate.findAll(Student.class): 查询Student文档的全部数据
    
    2.mongoTemplate.findById(<id>, Student.class): 查询Student文档id为id的数据
    
    3.mongoTemplate.find(query, Student.class): 根据query内的查询条件查询
    
    4.mongoTemplate.upsert(query, update, Student.class): 修改
    
    5.mongoTemplate.remove(query, Student.class): 删除
    
    6.mongoTemplate.insert(student): 新增
    ```

    

    

    

