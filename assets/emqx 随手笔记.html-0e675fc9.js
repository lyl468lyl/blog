import{_ as s,o as n,c as a,e}from"./app-7d162ccd.js";const p={},o=e(`<p>---</p><p>date: 2013-6-25</p><p>category: 数据库</p><p>tag:</p><p>- emqx</p><p>---</p><h1 id="emqx-随手教程" tabindex="-1"><a class="header-anchor" href="#emqx-随手教程" aria-hidden="true">#</a> emqx 随手教程</h1><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>emqx  官网
https<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token operator">.</span>emqx<span class="token operator">.</span>io<span class="token operator">/</span>downloads<span class="token comment">#broker</span>

wget https<span class="token punctuation">:</span><span class="token operator">//</span>www<span class="token operator">.</span>emqx<span class="token operator">.</span>com<span class="token operator">/</span>en<span class="token operator">/</span>downloads<span class="token operator">/</span>broker<span class="token operator">/</span><span class="token v-string string">3.2.8</span><span class="token operator">/</span>emqx<span class="token operator">-</span>centos7<span class="token operator">-</span><span class="token v-string string">v3.2.8</span><span class="token operator">.</span>zip
unzip emqx<span class="token operator">-</span>centos7<span class="token operator">-</span><span class="token v-string string">v3.2.8</span><span class="token operator">.</span>zip
<span class="token punctuation">[</span>root<span class="token variable">@ps</span><span class="token operator">-</span>compute bin<span class="token punctuation">]</span><span class="token comment"># ./emqx start</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># centos7 安装emqx</span>
$ sudo yum install <span class="token operator">-</span>y yum<span class="token operator">-</span>utils device<span class="token operator">-</span>mapper<span class="token operator">-</span>persistent<span class="token operator">-</span>data lvm2
<span class="token comment">#使用以下命令设置稳定镜像库，以centos7为例</span>
sudo yum<span class="token operator">-</span>config<span class="token operator">-</span>manager <span class="token operator">--</span>add<span class="token operator">-</span>repo https<span class="token punctuation">:</span><span class="token operator">//</span>repos<span class="token operator">.</span>emqx<span class="token operator">.</span>io<span class="token operator">/</span>emqx<span class="token operator">-</span>ce<span class="token operator">/</span>redhat<span class="token operator">/</span>centos<span class="token operator">/</span><span class="token number">7</span><span class="token operator">/</span>emqx<span class="token operator">-</span>ce<span class="token operator">.</span>repo
<span class="token comment">#安装 EMQ X</span>
sudo yum install emqx
<span class="token comment">#启动</span>
emqx start

<span class="token comment">#下面是做一下修改连接用户名和密码，莫认是没账号密码的</span>
vim <span class="token operator">/</span>etc<span class="token operator">/</span>emqx<span class="token operator">/</span>plugins<span class="token operator">/</span>emqx_auth_username<span class="token operator">.</span>conf
<span class="token comment">#然后还要改下面的配置</span>
vim <span class="token operator">/</span>etc<span class="token operator">/</span>emqx<span class="token operator">/</span>emqx<span class="token operator">.</span>conf
查找allow_anonymous，修改为false
<span class="token comment"># 重启</span>
emqx restart

<span class="token comment">#打开</span>
http<span class="token punctuation">:</span><span class="token operator">//</span>localhost<span class="token punctuation">:</span><span class="token number">18083</span>
<span class="token comment">#默认认的账号密码是:admin/public</span>

<span class="token comment">#python 操作mqtt</span>
<span class="token comment">#Pip 安装 Paho MQTT 客户端</span>
pip3 install <span class="token operator">-</span>i https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/pypi.doubanio.com/simp</span><span class="token operator">le</span> paho<span class="token operator">-</span>mqtt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python pads连接数据库</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>  <span class="token comment"># engine = create_engine(&#39;dialect+driver://username:password@host:port/database&#39;)</span>
    engine <span class="token operator">=</span> create_engine<span class="token punctuation">(</span>
        <span class="token string">&#39;mysql+pymysql://szsps:%s@139.219.13.126:3306/sz_sps_javaweb?charset=utf8&#39;</span><span class="token variable">%(</span>urlquote<span class="token punctuation">(</span><span class="token string">&#39;szSj@1314&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    con <span class="token operator">=</span> engine<span class="token operator">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">)</span>


    finished_products <span class="token operator">=</span> get_finished_products_list<span class="token punctuation">(</span><span class="token punctuation">)</span>


    original_input_df <span class="token operator">=</span> pd<span class="token operator">.</span>read_sql_query<span class="token punctuation">(</span><span class="token string">&#39;select * from t_profile_split_origin where batch_num=%(va)s&#39;</span><span class="token punctuation">,</span> con<span class="token punctuation">,</span>params<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;va&#39;</span><span class="token punctuation">:</span>batch_num<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[o];function l(r,c){return n(),a("div",null,t)}const d=s(p,[["render",l],["__file","emqx 随手笔记.html.vue"]]);export{d as default};
