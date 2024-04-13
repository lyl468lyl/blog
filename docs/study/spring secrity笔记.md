---

date: 2014-4-04

category: c++ 教程

tag:

  - spring cloud


---





1. spring serciry认证流程图

   ![image-20240404064923537](/Users/li/gitblog/blog1/blog/docs/study/images/image-20240404064923537.png)
   
2.  认证流程

   ![image-20240404065114876](/Users/li/gitblog/blog1/blog/docs/study/images/image-20240404065114876.png)

   ```perl
   
   思路分析
   登录
   1)自定义登录接口
   调用provider maanger 的方法进行认证,如果认证通过生成jwt
   把用户信息存入redis
   2)自定义userdetailserivce
   在这个实现中取查询数据库
   校验
   1)定义jwt认证过滤器
     获取token
     解析token获取其中的uerid
     存入securitycontextholder中
   
   ```

   全栈开发

   ```perl
   https://www.bilibili.com/video/BV14z4y1N7pg/?p=81&vd_source=dbfad152a1eda98b77bf76ac186933b1
   ```

   

3. 下周三汇报

4. 垃圾分类的方式,对接人

5. 垃圾设施的责任区划

6. 垃圾分类监管

7. 区域划分,(是否对)

8. 城管核实审批

9. 考核赋分(系统化)

10. 管理层面的考核

11. 

12. 1

13. 1

14. 1

15. 1

16. 1

17. 1

18. 1

19. 1

20. 







   ```

   
   
   











   ```