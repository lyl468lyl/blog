import{_ as s,o as a,c as n,e}from"./app-d0d9d347.js";const p={},o=e(`<h1 id="flink1-2-数仓项目" tabindex="-1"><a class="header-anchor" href="#flink1-2-数仓项目" aria-hidden="true">#</a> flink1.2 数仓项目</h1><p>flume安装</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>wget https<span class="token punctuation">:</span><span class="token regex">//dlcdn</span><span class="token operator">.</span>apache<span class="token operator">.</span>org<span class="token operator">/</span>flume<span class="token operator">/</span><span class="token v-string string">1.9.0</span><span class="token operator">/</span>apache<span class="token operator">-</span>flume<span class="token operator">-</span><span class="token v-string string">1.9.0</span><span class="token operator">-</span>bin<span class="token operator">.</span>tar<span class="token operator">.</span>gz <span class="token operator">--</span>no<span class="token operator">-</span>check<span class="token operator">-</span>certificate
 tar <span class="token operator">-</span>zxvf apache<span class="token operator">-</span>flume<span class="token operator">-</span><span class="token v-string string">1.9.0</span><span class="token operator">-</span>bin<span class="token operator">.</span>tar<span class="token operator">.</span>gz <span class="token operator">-c</span> <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>
mv apache<span class="token operator">-</span>flume<span class="token operator">-</span><span class="token v-string string">1.9.0</span><span class="token operator">-</span>bin flume<span class="token operator">-</span><span class="token number">1.9</span>

<span class="token comment">#设置环境变量</span>
export FLUME_HOME<span class="token operator">=</span><span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>flume<span class="token operator">-</span><span class="token number">1.9</span>
export PATH<span class="token operator">=</span><span class="token variable">$PATH</span><span class="token punctuation">:</span><span class="token variable">$HADOOP_HOME</span><span class="token operator">/</span>bin<span class="token punctuation">:</span><span class="token variable">$HADOOP_HOME</span><span class="token operator">/</span>sbin<span class="token punctuation">:</span><span class="token variable">$HBASE_HOME</span><span class="token operator">/</span>bin<span class="token punctuation">:</span><span class="token variable">$FLUME_HOME</span><span class="token operator">/</span>bin
export FLUME_CONF_DIR<span class="token operator">=</span><span class="token variable">$FLUME_HOME</span><span class="token operator">/</span>conf

<span class="token comment">#生效</span>
source <span class="token operator">/</span>etc<span class="token operator">/</span>profile

<span class="token comment">#修改flume-env.sh配置文件</span>
cd  <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>flume<span class="token operator">-</span><span class="token number">1.9</span><span class="token operator">/</span>conf
mv flume<span class="token operator">-</span>env<span class="token operator">.</span>sh<span class="token operator">.</span>template flume<span class="token operator">-</span>env<span class="token operator">.</span>sh

vi flume<span class="token operator">-</span>env<span class="token operator">.</span>sh文件开头
export JAVA_HOME<span class="token operator">=</span><span class="token operator">/</span>opt<span class="token operator">/</span>software<span class="token operator">/</span>jdk<span class="token v-string string">1.8.0</span>_241

<span class="token comment">#查看flume的版本</span>
<span class="token punctuation">[</span>root<span class="token variable">@centos01</span> conf<span class="token punctuation">]</span><span class="token comment"># flume-ng version</span>


<span class="token comment">#修改配置文件</span>
cd  <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>flume<span class="token operator">-</span><span class="token number">1.9</span><span class="token operator">/</span>conf

vim taildir<span class="token operator">-</span>file<span class="token operator">-</span>hdfs<span class="token operator">.</span>conf 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tidier-file-hdfs.conf</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#agent_name</span>
a1<span class="token operator">.</span>sources<span class="token operator">=</span>r1
a1<span class="token operator">.</span>sinks<span class="token operator">=</span>k1
a1<span class="token operator">.</span>channels<span class="token operator">=</span>c1

<span class="token comment"># source类型</span>
a1<span class="token operator">.</span>sources<span class="token operator">.</span>r1<span class="token operator">.</span>type <span class="token operator">=</span> TAILDIR
<span class="token comment"># 元数据位置</span>
a1<span class="token operator">.</span>sources<span class="token operator">.</span>r1<span class="token operator">.</span>positionFile <span class="token operator">=</span> <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>flume<span class="token operator">-</span><span class="token number">1.9</span><span class="token operator">/</span>taildir_position<span class="token operator">.</span>json
<span class="token comment"># 监控的目录</span>
a1<span class="token operator">.</span>sources<span class="token operator">.</span>r1<span class="token operator">.</span>filegroups <span class="token operator">=</span> f1
a1<span class="token operator">.</span>sources<span class="token operator">.</span>r1<span class="token operator">.</span>filegroups<span class="token operator">.</span>f1<span class="token operator">=</span><span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>flume<span class="token operator">-</span><span class="token number">1.9</span><span class="token operator">/</span>files<span class="token operator">/</span>file<span class="token operator">.</span><span class="token operator">*</span>
a1<span class="token operator">.</span>sources<span class="token operator">.</span>r1<span class="token operator">.</span>fileHeader <span class="token operator">=</span> true
a1<span class="token operator">.</span>sources<span class="token operator">.</span>r1<span class="token operator">.</span>interceptors <span class="token operator">=</span> i1
a1<span class="token operator">.</span>sources<span class="token operator">.</span>r1<span class="token operator">.</span>interceptors<span class="token operator">.</span>i1<span class="token operator">.</span>type <span class="token operator">=</span> timestamp

<span class="token comment">#sink的配置</span>

a1<span class="token operator">.</span>sinks<span class="token operator">.</span>k1<span class="token operator">.</span>type <span class="token operator">=</span> logger
<span class="token comment">#channel的配置</span>
a1<span class="token operator">.</span>channels<span class="token operator">.</span>c1<span class="token operator">.</span>type <span class="token operator">=</span> memory
a1<span class="token operator">.</span>channels<span class="token operator">.</span>c1<span class="token operator">.</span>capacity <span class="token operator">=</span> <span class="token number">10000000</span>
a1<span class="token operator">.</span>channels<span class="token operator">.</span>c1<span class="token operator">.</span>transactionCapacity <span class="token operator">=</span> <span class="token number">5000</span>
<span class="token comment">#用channel链接source和sink</span>

a1<span class="token operator">.</span>sources<span class="token operator">.</span>r1<span class="token operator">.</span>channels <span class="token operator">=</span> c1
a1<span class="token operator">.</span>sinks<span class="token operator">.</span>k1<span class="token operator">.</span>channel <span class="token operator">=</span>c1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#启动</span>
flume<span class="token operator">-</span>ng agent <span class="token operator">--</span>name a1 <span class="token operator">-c</span> <span class="token variable">$FLUME_HOME</span><span class="token operator">/</span>conf  <span class="token operator">-f</span> <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>flume<span class="token operator">-</span><span class="token number">1.9</span><span class="token operator">/</span>conf<span class="token operator">/</span>taildir<span class="token operator">-</span>file<span class="token operator">-</span>hdfs<span class="token operator">.</span>conf <span class="token operator">-</span>Dflume<span class="token operator">.</span>root<span class="token operator">.</span>logger<span class="token operator">=</span>INFO<span class="token punctuation">,</span>console

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#测试</span>
cd <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>flume<span class="token operator">-</span><span class="token number">1.9</span><span class="token operator">/</span>files
 echo ddd<span class="token operator">&gt;</span>file1<span class="token operator">.</span>log 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>日志文件更名的问题

<span class="token number">1</span><span class="token operator">.</span>使用不更名的打印日志框架logback
<span class="token number">2</span><span class="token operator">.</span>修改源码  
cd <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>flume<span class="token operator">-</span><span class="token number">1.9</span><span class="token operator">/</span>lib
flume<span class="token operator">-</span>taildir<span class="token operator">-</span>source<span class="token operator">-</span><span class="token v-string string">1.9.0</span><span class="token operator">.</span>jar 
这个源码文件在尚硅谷的flink数仓项目中源文件中找<span class="token operator">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[o];function t(l,c){return a(),n("div",null,r)}const k=s(p,[["render",t],["__file","flink1.2 数仓项目随手笔记.html.vue"]]);export{k as default};
