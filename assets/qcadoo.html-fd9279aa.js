import{_ as e,o as n,c as s,e as a}from"./app-c74164ac.js";const l={},i=a(`<h1 id="qcadoo开发文档" tabindex="-1"><a class="header-anchor" href="#qcadoo开发文档" aria-hidden="true">#</a> qcadoo开发文档</h1><h4 id="一-postgres数据库安装" tabindex="-1"><a class="header-anchor" href="#一-postgres数据库安装" aria-hidden="true">#</a> 一 .postgres数据库安装</h4><ol><li><p>输入以下命令安装PostgreSQL</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo apt install postgresql postgresql<span class="token operator">-</span>contrib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看运行状态</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo service postgresql status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>登录postgres账户</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo su postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入sql命令行</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#默认登入postgres数据库</span>
psql

<span class="token comment">#以zhangsan用户登入,登入mes数据库</span>
psql <span class="token operator">-</span>U zhangsan <span class="token operator">-d</span> mes <span class="token operator">-</span>h <span class="token v-string string">127.0.0.1</span> <span class="token operator">-p</span> <span class="token number">5432</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建数据库</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>create database test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改访问ip，允许远程访问</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># vi /etc/postgresql/10/main/postgresql.conf</span>
listen_addresses <span class="token operator">=</span> <span class="token string">&#39;*&#39;</span>
<span class="token comment">#vi /etc/postgresql/10/main/pg_hba.conf</span>
<span class="token comment"># 在文件中加入这一行</span>
host    all             all             <span class="token v-string string">0.0.0.0</span><span class="token operator">/</span><span class="token number">0</span>               md5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>退出命令行</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">\\</span>q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重启服务</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#提示,需在root用户下执行</span>
sudo service postgresql restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数据库创建用户</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#需要用postgres 用户去创建,否则没有权限</span>
<span class="token operator">\\</span>q
CREATE USER zhangsan WITH PASSWORD <span class="token string">&#39;123&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建数据库，与用户关联</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>CREATE DATABASE shop OWNER liyulong
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置所有权</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>GRANT ALL PRIVILEGES ON test exampledb to zhangsan<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询用户集</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>mes<span class="token operator">=&gt;</span> select <span class="token operator">*</span> from pg_user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询所有的库名</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>SELECT datname FROM pg_database<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建新表</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>CREATE TABLE t_order<span class="token punctuation">(</span>ID SERIAL PRIMARY KEY<span class="token punctuation">,</span>name VARCHAR<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> signup_date DATE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>插入数据</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>shop<span class="token operator">=&gt;</span> INSERT INTO t_order<span class="token punctuation">(</span>name<span class="token punctuation">,</span> signup_date<span class="token punctuation">)</span> VALUES<span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2013-12-22&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>选择记录</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>SELECT <span class="token operator">*</span> FROM t_order<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更新数据</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>UPDATE t_order set name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span> WHERE name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除记录</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>shop<span class="token operator">=&gt;</span> DELETE FROM t_order WHERE name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>添加栏位</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>shop<span class="token operator">=&gt;</span> ALTER TABLE t_order ADD email VARCHAR<span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更新字段结构</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>ALTER TABLE t_order ALTER COLUMN signup_date SET NOT NULL<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更新字段名</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>ALTER TABLE t_order RENAME COLUMN signup_date TO signup<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>表更名</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>ALTER TABLE t_order RENAME TO t_item<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除表</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>DROP TABLE IF EXISTS t_order<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询库中的表</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>SELECT table_name FROM information_schema<span class="token operator">.</span>tables WHERE table_schema <span class="token operator">=</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查询当前的库名</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>SELECT current_database<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li></li></ol><pre><code>\`\`\`perl

\`\`\`

#### 二 .  qcadoo 配置

1. 下载qcadoo

   \`\`\`perl
   wget  https://github.com/qcadoo/mes/releases/download/2.4.1/qcadoo-mes-2.4.1.zip
   unzip qcadoo-mes-2.4.1.zip
   \`\`\`

   

2. 数据库配置信息

   \`\`\`perl
   
   #qcadoo/qcadoo/db.properties
   
   dbDriverClass=org.postgresql.Driver
   dbJdbcUrl=jdbc:postgresql:mes
   dbUsername=postgres
   dbPassword=postgres123
   hibernateDialect=org.hibernate.dialect.PostgreSQLDialect
   \`\`\`

   

3. 导入数据

   \`\`\`perl
   cd /opt/module/mes/webapps/ROOT/WEB-INF/classes/schema
   
   psql -U postgres mes &lt; demo_db_en.sql
   \`\`\`

   

4. 运行

   \`\`\`perl
   cd /opt/module/mes/bin
   ./startup.sh
   \`\`\`

   

5. 打开

   \`\`\`perl
   http://192.168.50.230:8080
   用户名:superadmin
   密码:superadmin
   \`\`\`

   

   

6. 

7. 
</code></pre>`,4),p=[i];function r(d,t){return n(),s("div",null,p)}const c=e(l,[["render",r],["__file","qcadoo.html.vue"]]);export{c as default};
