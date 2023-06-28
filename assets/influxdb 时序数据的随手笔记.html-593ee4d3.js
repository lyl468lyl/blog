import{_ as n,o as s,c as a,e}from"./app-14556c47.js";const i={},t=e(`<h1 id="influxdb-时序数据的随手笔记" tabindex="-1"><a class="header-anchor" href="#influxdb-时序数据的随手笔记" aria-hidden="true">#</a> influxdb 时序数据的随手笔记</h1><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>https<span class="token punctuation">:</span><span class="token operator">//</span>portal<span class="token operator">.</span>influxdata<span class="token operator">.</span>com<span class="token regex">/downloads/</span>
ubuntu下安装influxdb
wget https<span class="token punctuation">:</span><span class="token regex">//dl</span><span class="token operator">.</span>influxdata<span class="token operator">.</span>com<span class="token operator">/</span>influxdb<span class="token operator">/</span>releases<span class="token operator">/</span>influxdb_<span class="token v-string string">1.8.3</span>_amd64<span class="token operator">.</span>deb 
dpkg <span class="token operator">-</span>i influxdb_<span class="token v-string string">1.8.3</span>_amd64<span class="token operator">.</span>deb

修改配置<span class="token punctuation">:</span>
vi <span class="token operator">/</span>etc<span class="token operator">/</span>influxdb<span class="token operator">/</span>influxdb<span class="token operator">.</span>conf 
<span class="token comment"># Bind address to use for the RPC service for backup and restore.</span>
 bind<span class="token operator">-</span>address <span class="token operator">=</span> <span class="token string">&quot;0.0.0.0:8087&quot;</span>

<span class="token punctuation">[</span>data<span class="token punctuation">]</span>
  <span class="token comment"># The directory where the TSM storage engine stores TSM files.</span>
  dir <span class="token operator">=</span> <span class="token string">&quot;/data/influxdb/data&quot;</span>

  <span class="token comment"># The directory where the TSM storage engine stores WAL files.</span>
  wal<span class="token operator">-</span>dir <span class="token operator">=</span> <span class="token string">&quot;/data/influxdb/wal&quot;</span>
 
 启动
 sudo service influxdb start
 查看状态
 service influxdb status <span class="token operator">//</span>查看状态
 
 客户端启动
 influx
 
 安装可视化工具chrongograf
wget https<span class="token punctuation">:</span><span class="token regex">//dl</span><span class="token operator">.</span>influxdata<span class="token operator">.</span>com<span class="token operator">/</span>chronograf<span class="token operator">/</span>releases<span class="token operator">/</span>chronograf_<span class="token v-string string">1.8.7</span>_amd64<span class="token operator">.</span>deb
sudo dpkg <span class="token operator">-</span>i chronograf_<span class="token v-string string">1.8.7</span>_amd64<span class="token operator">.</span>deb
 
 启动
 chronograf
 
 访问<span class="token punctuation">:</span>
 http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/192.168.50.230:8888/</span>
 

操作
 客户端启动
 influx <span class="token operator">-</span>precision rfc3339

显示数据库
<span class="token operator">&gt;</span> show databases<span class="token punctuation">;</span>
name<span class="token punctuation">:</span> databases
name
<span class="token operator">--</span><span class="token operator">--</span>
_internal

创建数据库

<span class="token operator">&gt;</span> create database testdb<span class="token punctuation">;</span>
<span class="token operator">&gt;</span> <span class="token keyword">use</span> testdb<span class="token punctuation">;</span>
Using database testdb

显示表
<span class="token operator">&gt;</span> show measurements

插入数据 <span class="token punctuation">(</span>插入的第一条就定义了格式<span class="token punctuation">)</span>
shop是表名称
insert shop<span class="token punctuation">,</span>name<span class="token operator">=</span>zhangsan age<span class="token operator">=</span><span class="token number">2</span> sex<span class="token operator">=</span><span class="token number">1</span>

查询数据
<span class="token operator">&gt;</span>precision rfc3339 <span class="token comment">#将时间戳转换为具体的时间格式</span>
<span class="token operator">&gt;</span> select <span class="token operator">*</span> from shop<span class="token punctuation">;</span>
<span class="token number">2022</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span>15T06<span class="token punctuation">:</span><span class="token number">41</span><span class="token punctuation">:</span><span class="token number">14</span><span class="token operator">.</span>745633626Z <span class="token number">1</span>   liyulong
<span class="token number">2022</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span>15T06<span class="token punctuation">:</span><span class="token number">42</span><span class="token punctuation">:</span><span class="token number">02</span><span class="token operator">.</span>507852261Z <span class="token number">2</span>   zhangsan

删除表
 drop measurement shop1<span class="token punctuation">;</span>
删除数据库
<span class="token operator">&gt;</span> drop database mydb<span class="token punctuation">;</span>

创建保留时效为<span class="token number">5</span>天的数据库
<span class="token operator">&gt;</span> CREATE DATABASE mydb WITH DURATION 5d<span class="token punctuation">;</span>

查看数据库的保留时效
<span class="token operator">&gt;</span> SHOW RETENTION POLICIES ON mydbh

修改数据库保留数据的时效
alter retention policy <span class="token string">&quot;autogen&quot;</span> on <span class="token string">&quot;LeeMan_db&quot;</span> duration 4320h replication <span class="token number">1</span> <span class="token keyword">default</span><span class="token punctuation">;</span>
CREATE RETENTION POLICY <span class="token string">&quot;a_year&quot;</span> ON <span class="token string">&quot;mydb&quot;</span> DURATION 52h REPLICATION <span class="token number">1</span>


insert插入数据
insert add_test<span class="token punctuation">,</span>name<span class="token operator">=</span>YiHui<span class="token punctuation">,</span>phone<span class="token operator">=</span><span class="token number">110</span> user_id<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span>email<span class="token operator">=</span><span class="token string">&quot;bangzewu@126.com&quot;</span>
新增一条数据<span class="token punctuation">,</span>measurement为add_test<span class="token punctuation">,</span>tag为name<span class="token punctuation">,</span>phone<span class="token punctuation">,</span>filed为user_id<span class="token punctuation">,</span>email

查看所有的tag
<span class="token operator">&gt;</span> <span class="token keyword">use</span> mydb<span class="token punctuation">;</span>
Using database mydb
<span class="token operator">&gt;</span> show tag keys from add_test<span class="token punctuation">;</span>

查看所有的field

<span class="token operator">&gt;</span> show field keys from add_test<span class="token punctuation">;</span>
name<span class="token punctuation">:</span> add_test
fieldKey fieldType
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
email    string
user_id  float


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[t];function o(l,r){return s(),a("div",null,p)}const d=n(i,[["render",o],["__file","influxdb 时序数据的随手笔记.html.vue"]]);export{d as default};
