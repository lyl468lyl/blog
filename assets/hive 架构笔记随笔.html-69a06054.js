import{_ as s,o as n,c as a,e}from"./app-601df8eb.js";const p={},o=e(`<h1 id="hive架构教程" tabindex="-1"><a class="header-anchor" href="#hive架构教程" aria-hidden="true">#</a> hive架构教程</h1><p>hadoop3 mysql5.6 zookeeper 安装</p><p>https://blog.csdn.net/yoshubom/article/details/113845190</p><p>hadoop3.2 安装</p><p>https://blog.csdn.net/m0_37829442/article/details/114004981</p><p>hive3.12 安装</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>wget https<span class="token punctuation">:</span><span class="token operator">//</span>downloads<span class="token operator">.</span>apache<span class="token operator">.</span>org<span class="token operator">/</span>hive<span class="token operator">/</span>hive<span class="token operator">-</span><span class="token v-string string">3.1.2</span><span class="token operator">/</span>apache<span class="token operator">-</span>hive<span class="token operator">-</span><span class="token v-string string">3.1.2</span><span class="token operator">-</span>bin<span class="token operator">.</span>tar<span class="token operator">.</span>gz

<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> software<span class="token punctuation">]</span><span class="token comment"># tar -zxvf apache-hive-3.1.2-bin.tar.gz -C /opt/module/</span>

<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> conf<span class="token punctuation">]</span><span class="token comment"># mv hive-default.xml.template hive-default.xml</span>

vi hive<span class="token operator">-</span>site<span class="token operator">.</span>xml

<span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> encoding<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">?</span>xml<span class="token operator">-</span>stylesheet type<span class="token operator">=</span><span class="token string">&quot;text/xsl&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;configuration.xsl&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token filehandle symbol">&lt;configuration&gt;</span>
  <span class="token filehandle symbol">&lt;property&gt;</span>
    <span class="token filehandle symbol">&lt;name&gt;</span>javax<span class="token operator">.</span>jdo<span class="token operator">.</span>option<span class="token operator">.</span>ConnectionURL<span class="token filehandle symbol">&lt;/name&gt;</span>
    <span class="token filehandle symbol">&lt;value&gt;</span>jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.8.185</span><span class="token punctuation">:</span><span class="token number">3306</span><span class="token operator">/</span>hive<span class="token operator">?</span>createDatabaseIfNotExist<span class="token operator">=</span>true<span class="token filehandle symbol">&lt;/value&gt;</span>
    <span class="token filehandle symbol">&lt;description&gt;</span>JDBC connect string <span class="token keyword">for</span> a JDBC metastore<span class="token filehandle symbol">&lt;/description&gt;</span>
  <span class="token filehandle symbol">&lt;/property&gt;</span>
  <span class="token filehandle symbol">&lt;property&gt;</span>
    <span class="token filehandle symbol">&lt;name&gt;</span>javax<span class="token operator">.</span>jdo<span class="token operator">.</span>option<span class="token operator">.</span>ConnectionDriverName<span class="token filehandle symbol">&lt;/name&gt;</span>
    <span class="token filehandle symbol">&lt;value&gt;</span>com<span class="token operator">.</span>mysql<span class="token operator">.</span>jdbc<span class="token operator">.</span>Driver<span class="token filehandle symbol">&lt;/value&gt;</span>
    <span class="token filehandle symbol">&lt;description&gt;</span>Driver class name <span class="token keyword">for</span> a JDBC metastore<span class="token filehandle symbol">&lt;/description&gt;</span>
  <span class="token filehandle symbol">&lt;/property&gt;</span>
  <span class="token filehandle symbol">&lt;property&gt;</span>
    <span class="token filehandle symbol">&lt;name&gt;</span>javax<span class="token operator">.</span>jdo<span class="token operator">.</span>option<span class="token operator">.</span>ConnectionUserName<span class="token filehandle symbol">&lt;/name&gt;</span>
    <span class="token filehandle symbol">&lt;value&gt;</span>root<span class="token filehandle symbol">&lt;/value&gt;</span>
    <span class="token filehandle symbol">&lt;description&gt;</span>username to <span class="token keyword">use</span> against metastore database<span class="token filehandle symbol">&lt;/description&gt;</span>
  <span class="token filehandle symbol">&lt;/property&gt;</span>
  <span class="token filehandle symbol">&lt;property&gt;</span>
    <span class="token filehandle symbol">&lt;name&gt;</span>javax<span class="token operator">.</span>jdo<span class="token operator">.</span>option<span class="token operator">.</span>ConnectionPassword<span class="token filehandle symbol">&lt;/name&gt;</span>
    <span class="token filehandle symbol">&lt;value&gt;</span><span class="token number">123456</span><span class="token filehandle symbol">&lt;/value&gt;</span>
    <span class="token filehandle symbol">&lt;description&gt;</span>password to <span class="token keyword">use</span> against metastore database<span class="token filehandle symbol">&lt;/description&gt;</span>
  <span class="token filehandle symbol">&lt;/property&gt;</span>
  
  
<span class="token filehandle symbol">&lt;/configuration&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>复制mysql驱动到hive3<span class="token number">.1</span><span class="token operator">/</span>lib
<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> lib<span class="token punctuation">]</span><span class="token comment"># cp  mysql-connector-java-5.1.37-bin.jar  /opt/module/hive3.1/lib/</span>

<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> bin<span class="token punctuation">]</span><span class="token comment"># cd /opt/module/hive3.1/bin</span>
schematool <span class="token operator">-</span>dbType mysql <span class="token operator">-</span>initSchema
会报错<span class="token punctuation">:</span>

解决<span class="token punctuation">:</span>
<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> lib<span class="token punctuation">]</span><span class="token comment"># cp guava-27.0-jre.jar /opt/module/hive3.1/lib/ </span>
                     cd  <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hive3<span class="token number">.1</span><span class="token regex">/lib/</span>
<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> lib<span class="token punctuation">]</span><span class="token comment"># rm -rf guava-19.0.jar </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hive 架构笔记随笔</p><p>hive分区表</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> create table dept<span class="token punctuation">(</span>no int<span class="token punctuation">,</span>name string<span class="token punctuation">,</span>loc string<span class="token punctuation">)</span>partitioned by<span class="token punctuation">(</span>day string<span class="token punctuation">)</span> row format delimited fields terminated by <span class="token string">&#39;\\t&#39;</span><span class="token punctuation">;</span>

样本数据
vi dept<span class="token operator">.</span>log  <span class="token punctuation">(</span>tab键分开<span class="token punctuation">)</span>
<span class="token number">1</span>       zhangangsan     <span class="token number">3</span>
<span class="token number">2</span>       muliu   <span class="token number">4</span>
<span class="token number">3</span>       hei     <span class="token number">5</span>


导入数据
hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> load data <span class="token keyword">local</span> inpath <span class="token string">&#39;/opt/module/hive-2.3.0/dept.log&#39;</span> into table dept partition<span class="token punctuation">(</span>day<span class="token operator">=</span><span class="token string">&#39;20220501&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


删除一个分区的数据
hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> alter table dept drop partition<span class="token punctuation">(</span>day<span class="token operator">=</span><span class="token string">&#39;20220501&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

添加分区

hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> alter table dept add partition<span class="token punctuation">(</span>day<span class="token operator">=</span><span class="token string">&#39;20220502&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

分区查询
hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> select <span class="token operator">*</span> from dept where day<span class="token operator">=</span><span class="token string">&#39;20220501&#39;</span><span class="token punctuation">;</span>

多分区联合查询

hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> select <span class="token operator">*</span> from dept where day<span class="token operator">=</span><span class="token string">&#39;20220501&#39;</span> union select <span class="token operator">*</span> from dept where day<span class="token operator">=</span><span class="token string">&#39;20220502&#39;</span><span class="token punctuation">;</span>

查看有多少分区
hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> show partitions dept<span class="token punctuation">;</span>


查看分区结构

hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> desc formatted dept<span class="token punctuation">;</span>



在分区的基础上创建分桶表
分区针对的是数据的存储路径；分桶针对的是数据文件。

分桶规则：
根据结果可知：Hive的分桶采用对分桶字段的值进行哈希，然后除以桶的个数求余的方式决定该条记录存放在哪个桶当中

hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span>  create table deptc<span class="token punctuation">(</span>no int<span class="token punctuation">,</span>name string<span class="token punctuation">,</span>loc string<span class="token punctuation">)</span>partitioned by<span class="token punctuation">(</span>day string<span class="token punctuation">)</span> clustered by<span class="token punctuation">(</span>name<span class="token punctuation">)</span> into <span class="token number">2</span> buckets row format delimited fields terminated by <span class="token string">&#39;\\t&#39;</span><span class="token punctuation">;</span>

查看分桶表结构
hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> desc formatted deptc<span class="token punctuation">;</span>

向分桶表中导入数据
注意<span class="token punctuation">:</span>
Hive默认不支持通过load命令导入数据到分桶表<span class="token operator">.</span>
<span class="token number">1</span><span class="token operator">.</span>创建和分桶表结构相同的普通表
<span class="token number">2</span><span class="token operator">.</span>给普通表加载数据
<span class="token number">3</span> 使用 insert into select 导入数据

操作<span class="token punctuation">:</span>
<span class="token number">1</span><span class="token operator">.</span>创建临时表
create table dept_temp<span class="token punctuation">(</span>no int<span class="token punctuation">,</span>name string<span class="token punctuation">,</span>loc string<span class="token punctuation">)</span> row format delimited fields terminated by <span class="token string">&#39;\\t&#39;</span><span class="token punctuation">;</span>
<span class="token number">2</span><span class="token operator">.</span>向临时表导入数据
hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> load data <span class="token keyword">local</span> inpath <span class="token string">&#39;/opt/module/hive-2.3.0/dept.log&#39;</span> into table dept_temp<span class="token punctuation">;</span>
<span class="token number">3</span><span class="token operator">.</span> 将临时表数据插入到分桶表

hive <span class="token punctuation">(</span>db_hive<span class="token punctuation">)</span><span class="token operator">&gt;</span> insert into table deptc partition<span class="token punctuation">(</span>day<span class="token operator">=</span><span class="token string">&#39;20220501&#39;</span><span class="token punctuation">)</span> select <span class="token operator">*</span> from dept_temp<span class="token punctuation">;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分桶示意图:</p><p>![image-20220501120017979](/Users/li/Library/Application Support/typora-user-images/image-20220501120017979.png)</p><p>![image-20220501120222311](/Users/li/Library/Application Support/typora-user-images/image-20220501120222311.png)</p><p>参考:</p><p>https://blog.csdn.net/yoshubom/article/details/113845190</p><p>spark on hive 配置</p><p>需要的版本如下:</p><p>spark 版本:spark 2.4.7</p><p>hive 版本: hive3.1.2</p><p>hadoop版本:hadoop3.2.2</p><p>scala 版本:scala2.12.10</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#下载 </span>

<span class="token comment">#spark 官网</span>
http<span class="token punctuation">:</span><span class="token operator">//</span>spark<span class="token operator">.</span>apache<span class="token operator">.</span>org<span class="token operator">/</span>downloads<span class="token operator">.</span>html


安装scala <span class="token number">2.12</span>

<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> software<span class="token punctuation">]</span><span class="token comment"># rpm -ivh scala-2.12.10.rpm </span>
准备中<span class="token operator">...</span>                          <span class="token comment">################################# [100%]</span>
正在升级<span class="token operator">/</span>安装<span class="token operator">...</span>
   <span class="token number">1</span><span class="token punctuation">:</span>scala<span class="token operator">-</span><span class="token v-string string">2.12.10</span><span class="token operator">-</span><span class="token number">1</span>                  <span class="token comment">################################# [100%]</span>
<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> software<span class="token punctuation">]</span><span class="token comment"># which scala</span>
<span class="token operator">/</span>usr<span class="token regex">/bin/scala</span>
<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> software<span class="token punctuation">]</span><span class="token comment"># scala version</span>
No such file <span class="token operator">or</span> class on classpath<span class="token punctuation">:</span> version
<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> software<span class="token punctuation">]</span><span class="token comment"># scala -version</span>
Scala code runner version <span class="token v-string string">2.12.10</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>vim <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hive3<span class="token number">.1</span><span class="token operator">/</span>conf<span class="token operator">/</span>spark<span class="token operator">-</span>defaults<span class="token operator">.</span>conf

spark<span class="token operator">.</span>master                             yarn
spark<span class="token operator">.</span>eventLog<span class="token operator">.</span>enabled                   true
spark<span class="token operator">.</span>eventLog<span class="token operator">.</span>dir                       hdfs<span class="token punctuation">:</span><span class="token operator">//</span>centos01<span class="token punctuation">:</span><span class="token number">9000</span><span class="token operator">/</span>spark<span class="token operator">-</span>history
spark<span class="token operator">.</span>executor<span class="token operator">.</span>memory                    1g
spark<span class="token operator">.</span>driver<span class="token operator">.</span>memory                      1g

在HDFS创建如下路径，用于存储历史日志
hadoop fs <span class="token operator">-</span>mkdir <span class="token operator">/</span>spark<span class="token operator">-</span>history

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改vim /opt/module/hive3.1/conf/hive-site.xml</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> encoding<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">?</span>xml<span class="token operator">-</span>stylesheet type<span class="token operator">=</span><span class="token string">&quot;text/xsl&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;configuration.xsl&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token filehandle symbol">&lt;configuration&gt;</span>
    <span class="token filehandle symbol">&lt;property&gt;</span>
        <span class="token filehandle symbol">&lt;name&gt;</span>javax<span class="token operator">.</span>jdo<span class="token operator">.</span>option<span class="token operator">.</span>ConnectionURL<span class="token filehandle symbol">&lt;/name&gt;</span>
        <span class="token filehandle symbol">&lt;value&gt;</span>jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.8.185</span><span class="token punctuation">:</span><span class="token number">3306</span><span class="token operator">/</span>hive<span class="token operator">?</span>createDatabaseIfNotExist<span class="token operator">=</span>true<span class="token filehandle symbol">&lt;/value&gt;</span>
        <span class="token filehandle symbol">&lt;description&gt;</span>JDBC connect string <span class="token keyword">for</span> a JDBC metastore<span class="token filehandle symbol">&lt;/description&gt;</span>
    <span class="token filehandle symbol">&lt;/property&gt;</span>
    <span class="token filehandle symbol">&lt;property&gt;</span>
        <span class="token filehandle symbol">&lt;name&gt;</span>javax<span class="token operator">.</span>jdo<span class="token operator">.</span>option<span class="token operator">.</span>ConnectionDriverName<span class="token filehandle symbol">&lt;/name&gt;</span>
        <span class="token filehandle symbol">&lt;value&gt;</span>com<span class="token operator">.</span>mysql<span class="token operator">.</span>jdbc<span class="token operator">.</span>Driver<span class="token filehandle symbol">&lt;/value&gt;</span>
        <span class="token filehandle symbol">&lt;description&gt;</span>Driver class name <span class="token keyword">for</span> a JDBC metastore<span class="token filehandle symbol">&lt;/description&gt;</span>
    <span class="token filehandle symbol">&lt;/property&gt;</span>
    <span class="token filehandle symbol">&lt;property&gt;</span>
        <span class="token filehandle symbol">&lt;name&gt;</span>javax<span class="token operator">.</span>jdo<span class="token operator">.</span>option<span class="token operator">.</span>ConnectionUserName<span class="token filehandle symbol">&lt;/name&gt;</span>
        <span class="token filehandle symbol">&lt;value&gt;</span>root<span class="token filehandle symbol">&lt;/value&gt;</span>
        <span class="token filehandle symbol">&lt;description&gt;</span>username to <span class="token keyword">use</span> against metastore database<span class="token filehandle symbol">&lt;/description&gt;</span>
    <span class="token filehandle symbol">&lt;/property&gt;</span>
    <span class="token filehandle symbol">&lt;property&gt;</span>
        <span class="token filehandle symbol">&lt;name&gt;</span>javax<span class="token operator">.</span>jdo<span class="token operator">.</span>option<span class="token operator">.</span>ConnectionPassword<span class="token filehandle symbol">&lt;/name&gt;</span>
        <span class="token filehandle symbol">&lt;value&gt;</span><span class="token number">123456</span><span class="token filehandle symbol">&lt;/value&gt;</span>
        <span class="token filehandle symbol">&lt;description&gt;</span>password to <span class="token keyword">use</span> against metastore database<span class="token filehandle symbol">&lt;/description&gt;</span>
    <span class="token filehandle symbol">&lt;/property&gt;</span>
    <span class="token filehandle symbol">&lt;property&gt;</span>
        <span class="token filehandle symbol">&lt;name&gt;</span>hive<span class="token operator">.</span>execution<span class="token operator">.</span>engine<span class="token filehandle symbol">&lt;/name&gt;</span>
        <span class="token filehandle symbol">&lt;value&gt;</span>spark<span class="token filehandle symbol">&lt;/value&gt;</span>
    <span class="token filehandle symbol">&lt;/property&gt;</span>
    <span class="token filehandle symbol">&lt;property&gt;</span>
        <span class="token filehandle symbol">&lt;name&gt;</span>spark<span class="token operator">.</span>yarn<span class="token operator">.</span>jars<span class="token filehandle symbol">&lt;/name&gt;</span>
        <span class="token filehandle symbol">&lt;value&gt;</span>hdfs<span class="token punctuation">:</span><span class="token operator">//</span>centos01<span class="token punctuation">:</span><span class="token number">9000</span><span class="token regex">/spark-jars/</span><span class="token operator">*</span><span class="token filehandle symbol">&lt;/value&gt;</span>
    <span class="token filehandle symbol">&lt;/property&gt;</span>
    <span class="token filehandle symbol">&lt;property&gt;</span>
        <span class="token filehandle symbol">&lt;name&gt;</span>hive<span class="token operator">.</span>spark<span class="token operator">.</span>client<span class="token operator">.</span>connect<span class="token operator">.</span>timeout<span class="token filehandle symbol">&lt;/name&gt;</span>
        <span class="token filehandle symbol">&lt;value&gt;</span>10000ms<span class="token filehandle symbol">&lt;/value&gt;</span>
    <span class="token filehandle symbol">&lt;/property&gt;</span>
<span class="token filehandle symbol">&lt;/configuration&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#下载spark2.4.7 纯净版</span>
wget https<span class="token punctuation">:</span><span class="token operator">//</span>archive<span class="token operator">.</span>apache<span class="token operator">.</span>org<span class="token operator">/</span>dist<span class="token operator">/</span>spark<span class="token operator">/</span>spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">/</span>spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>bin<span class="token operator">-</span>without<span class="token operator">-</span>hadoop<span class="token operator">.</span>tgz
tar <span class="token operator">-</span>zxvf spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>bin<span class="token operator">-</span>without<span class="token operator">-</span>hadoop<span class="token operator">.</span>tgz <span class="token operator">-C</span> <span class="token regex">/opt/modu</span><span class="token operator">le</span>
mv spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>bin<span class="token operator">-</span>without<span class="token operator">-</span>hadoop spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>pure


<span class="token comment">#配置spark-env.sh</span>

cat <span class="token operator">&gt;</span> <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>pure<span class="token operator">/</span>conf<span class="token operator">/</span>spark<span class="token operator">-</span>env<span class="token operator">.</span>sh <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;</span>
export HADOOP_HOME<span class="token operator">=</span><span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hadoop<span class="token operator">-</span><span class="token v-string string">3.2.2</span>
export SPARK_DIST_CLASSPATH<span class="token operator">=</span><span class="token variable">$(</span><span class="token variable">$</span><span class="token punctuation">{</span>HADOOP_HOME<span class="token punctuation">}</span><span class="token operator">/</span>bin<span class="token operator">/</span>hdfs classpath<span class="token punctuation">)</span>
export YARN_CONF_DIR<span class="token operator">=</span><span class="token variable">$</span><span class="token punctuation">{</span>HADOOP_HOME<span class="token punctuation">}</span><span class="token operator">/</span>etc<span class="token operator">/</span>hadoop
EOF



测试spark<span class="token v-string string">2.4.7</span>

cd <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>pure <span class="token operator">&amp;&amp;</span><span class="token operator">\\</span>
  bin<span class="token operator">/</span>run<span class="token operator">-</span>example SparkPi <span class="token number">2</span><span class="token operator">&gt;</span><span class="token variable">&amp;1</span> <span class="token operator">|</span> grep <span class="token string">&quot;Pi is&quot;</span>
  
配置Hive3 on Spark2


cat <span class="token operator">&gt;</span> <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hive3<span class="token number">.1</span><span class="token operator">/</span>conf<span class="token operator">/</span>hive<span class="token operator">-</span>env<span class="token operator">.</span>sh <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;</span>
export HADOOP_HOME<span class="token operator">=</span><span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hadoop<span class="token operator">-</span><span class="token v-string string">3.2.2</span>
<span class="token comment"># 新增SPARK_HOME 必须是without-hadoop 的纯净版</span>
export SPARK_HOME<span class="token operator">=</span><span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>pure
EOF


去除冲突的jar
<span class="token comment"># 1. 去除冲突jar 文件</span>
cd <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>pure<span class="token operator">/</span>jars <span class="token operator">&amp;&amp;</span><span class="token operator">\\</span>
  mv orc<span class="token operator">-</span>core<span class="token operator">-</span><span class="token v-string string">1.5.5</span><span class="token operator">-</span>nohive<span class="token operator">.</span>jar orc<span class="token operator">-</span>core<span class="token operator">-</span><span class="token v-string string">1.5.5</span><span class="token operator">-</span>nohive<span class="token operator">.</span>jar<span class="token operator">.</span>bak

<span class="token comment"># 2. 上传spark2 纯净版依赖库到HDFS</span>
cd <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hadoop<span class="token operator">-</span><span class="token v-string string">3.2.2</span> <span class="token operator">&amp;&amp;</span><span class="token operator">\\</span>
  bin<span class="token operator">/</span>hdfs dfs <span class="token operator">-</span>rm <span class="token operator">-r</span> <span class="token operator">-f</span> <span class="token operator">/</span>spark<span class="token operator">-</span>jars <span class="token punctuation">;</span> bin<span class="token operator">/</span>hdfs dfs <span class="token operator">-</span>mkdir <span class="token operator">/</span>spark<span class="token operator">-</span>jars <span class="token operator">&amp;&amp;</span><span class="token operator">\\</span>
  bin<span class="token operator">/</span>hdfs dfs <span class="token operator">-</span>put <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>pure<span class="token regex">/jars/</span><span class="token operator">*</span> <span class="token operator">/</span>spark<span class="token operator">-</span>jars <span class="token operator">&amp;&amp;</span><span class="token operator">\\</span>
  bin<span class="token operator">/</span>hdfs dfs <span class="token operator">-</span>ls <span class="token operator">/</span>spark<span class="token operator">-</span>jars
<span class="token comment">## Hive 任务由Spark 执行，Spark 资源分配由Yarn 调度，该任务可能分配到任一个节点</span>
<span class="token comment">## 所以需要将Spark 的依赖上传到HDFS 集群路径，这样集群中任何一个节点都能获取到</span>

<span class="token comment"># 3. 复制Spark2 连接依赖库到Hive3</span>
cd <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>spark<span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">-</span>pure<span class="token operator">/</span>jars <span class="token operator">&amp;&amp;</span> cp <span class="token operator">\\</span>
  scala<span class="token operator">-</span>compiler<span class="token operator">-</span><span class="token v-string string">2.11.12</span><span class="token operator">.</span>jar scala<span class="token operator">-</span>library<span class="token operator">-</span><span class="token v-string string">2.11.12</span><span class="token operator">.</span>jar scala<span class="token operator">-</span>reflect<span class="token operator">-</span><span class="token v-string string">2.11.12</span><span class="token operator">.</span>jar <span class="token operator">\\</span>
  spark<span class="token operator">-</span>core_2<span class="token number">.11</span><span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">.</span>jar spark<span class="token operator">-</span>network<span class="token operator">-</span>common_2<span class="token number">.11</span><span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">.</span>jar <span class="token operator">\\</span>
  spark<span class="token operator">-</span>unsafe_2<span class="token number">.11</span><span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">.</span>jar spark<span class="token operator">-</span>yarn_2<span class="token number">.11</span><span class="token operator">-</span><span class="token v-string string">2.4.7</span><span class="token operator">.</span>jar <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hive3<span class="token number">.1</span><span class="token regex">/lib/</span>


<span class="token comment"># 4. 上传Hive 的orc-core 依赖库</span>
<span class="token comment">## Spark2 纯净版自带的orc-core-1.5.5-nohive.jar 会造成错误异常</span>
<span class="token comment">## Job failed with java.lang.NoSuchMethodError: org.apache.orc.TypeDescription.createRowBatch</span>
<span class="token comment">## 必须将其从HDFS 上/spark2-jars 里删除，因为Hive on Spark 的依赖库来源于HDFS，保险做法就是重命名</span>
cd <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hadoop<span class="token operator">-</span><span class="token v-string string">3.2.2</span> <span class="token operator">&amp;&amp;</span> bin<span class="token operator">/</span>hdfs dfs <span class="token operator">-</span>mv <span class="token operator">\\</span>
  <span class="token operator">/</span>spark<span class="token operator">-</span>jars<span class="token operator">/</span>orc<span class="token operator">-</span>core<span class="token operator">-</span><span class="token v-string string">1.5.5</span><span class="token operator">-</span>nohive<span class="token operator">.</span>jar <span class="token operator">\\</span>
  <span class="token operator">/</span>spark<span class="token operator">-</span>jars<span class="token operator">/</span>orc<span class="token operator">-</span>core<span class="token operator">-</span><span class="token v-string string">1.5.5</span><span class="token operator">-</span>nohive<span class="token operator">.</span>jar<span class="token operator">.</span>bak
<span class="token comment">## 另外还需将Hive 里的orc-core 上传至HDFS 才可以让Spark2 支持ORC 存储格式，详见下一节的测试</span>
cd <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hadoop<span class="token operator">-</span><span class="token v-string string">3.2.2</span> <span class="token operator">&amp;&amp;</span><span class="token operator">\\</span>
  bin<span class="token operator">/</span>hdfs dfs <span class="token operator">-</span>put <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hive3<span class="token number">.1</span><span class="token operator">/</span>lib<span class="token operator">/</span>orc<span class="token operator">-</span>core<span class="token operator">-</span><span class="token v-string string">1.5.6</span><span class="token operator">.</span>jar <span class="token operator">/</span>spark<span class="token operator">-</span>jars

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试hive3-on-spark2" tabindex="-1"><a class="header-anchor" href="#测试hive3-on-spark2" aria-hidden="true">#</a> 测试Hive3 on Spark2</h3><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token operator">--</span> <span class="token number">1</span><span class="token operator">.</span> 先启动MetaStore 和HiveServer2 服务，详见Hive3 启停操作或Hive3 服务脚本
<span class="token operator">--</span> 如果hive<span class="token operator">-</span>site<span class="token operator">.</span>xml 中没有配置hive<span class="token operator">.</span>metastore<span class="token operator">.</span>uris 则可跳过本步骤

<span class="token operator">--</span> <span class="token number">2</span><span class="token operator">.</span> 启动Hive3
cd <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>hive3<span class="token number">.1</span> <span class="token operator">&amp;&amp;</span> bin<span class="token operator">/</span>hive

<span class="token operator">--</span> 清屏小技巧 
<span class="token operator">!</span>clear<span class="token punctuation">;</span>

<span class="token operator">--</span> <span class="token number">2.1</span> 查看Hive 引擎
set hive<span class="token operator">.</span>execution<span class="token operator">.</span>engine<span class="token punctuation">;</span>
<span class="token operator">--</span> 结果显示如下，原默认是mr
<span class="token operator">--</span> hive<span class="token operator">.</span>execution<span class="token operator">.</span>engine<span class="token operator">=</span>spark

<span class="token operator">--</span> <span class="token number">2.2</span> 创建测试表
drop table <span class="token keyword">if</span> exists student<span class="token punctuation">;</span>
create table student <span class="token punctuation">(</span>id int<span class="token punctuation">,</span> name string<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">--</span> 测试Spark 的ORC 支持
drop table <span class="token keyword">if</span> exists student_orc<span class="token punctuation">;</span>
create table student_orc <span class="token punctuation">(</span>id int<span class="token punctuation">,</span> name string<span class="token punctuation">)</span> stored as orc<span class="token punctuation">;</span>

<span class="token operator">--</span> <span class="token number">2.3</span> 插入数据
<span class="token operator">--</span> 此时会触发Spark 计算引擎，但只有Map 用于写入磁盘，没有Reduce
insert into student values <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">--</span> 此时访问YARN，http<span class="token punctuation">:</span><span class="token operator">//</span>hadoop113<span class="token punctuation">:</span><span class="token number">8088</span>，可看到名为Hive on Spark 的任务
<span class="token operator">--</span> 点击其Tracking UI 属性的ApplicationMaster 超链接可进入Spark Web 页面
<span class="token operator">--</span> 在Environment 标签下可找到以下属性，表示Spark 已运行在cluster 模式下
<span class="token operator">--</span> spark<span class="token operator">.</span>master               yarn
<span class="token operator">--</span> spark<span class="token operator">.</span>submit<span class="token operator">.</span>deployMode    cluster

<span class="token operator">--</span> <span class="token number">2.4</span> 如果没有报错并显示结果数据就表示成功了
select <span class="token operator">*</span> from student<span class="token punctuation">;</span>
<span class="token operator">--</span> 结果显示
<span class="token operator">--</span> student<span class="token operator">.</span>id	student<span class="token operator">.</span>name
<span class="token operator">--</span> <span class="token number">1</span>        	zhangsan
<span class="token operator">--</span> 需要计算的查询也会触发计算引擎
select count<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> from student where id<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token operator">--</span> <span class="token number">2.5</span> 测试Spark 存储ORC 数据
insert into table student_orc select <span class="token operator">*</span> from student<span class="token punctuation">;</span> 
select <span class="token operator">*</span> from student_orc<span class="token punctuation">;</span>
select count<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> from student_orc<span class="token punctuation">;</span>

<span class="token operator">--</span> <span class="token number">2.6</span> 清理数据
drop table student<span class="token punctuation">;</span>
drop table student_orc<span class="token punctuation">;</span>

<span class="token operator">--</span> <span class="token number">2.7</span> 退出hive
quit<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),t=[o];function l(r,i){return n(),a("div",null,t)}const d=s(p,[["render",l],["__file","hive 架构笔记随笔.html.vue"]]);export{d as default};
