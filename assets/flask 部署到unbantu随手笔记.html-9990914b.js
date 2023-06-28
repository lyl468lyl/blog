import{_ as n,o as s,c as a,e}from"./app-402b2ba9.js";const l={},p=e(`<h1 id="flask-部署到unbantu教程" tabindex="-1"><a class="header-anchor" href="#flask-部署到unbantu教程" aria-hidden="true">#</a> flask 部署到unbantu教程</h1><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 安装虚拟环境</span>
pip3 install virtualenv

<span class="token comment"># 创建虚拟环境 ENV,在当前目录下创建名为ENV的虚拟环境</span>
virtualenv ENV

<span class="token comment"># 启用虚拟环境</span>
source <span class="token operator">.</span><span class="token operator">/</span>bin<span class="token operator">/</span>activate

<span class="token comment">#退出虚拟环境</span>
在虚拟环境中 输入dactivate

<span class="token comment">#在本地环境中收集依赖文件</span>
pip3 freeze <span class="token operator">&gt;</span>requirements<span class="token operator">.</span>txt

<span class="token comment"># 在服务中安装依赖清单里的库</span>
pip3 install <span class="token operator">-r</span> requirements<span class="token operator">.</span>txt

<span class="token comment"># 列出当前虚拟环境所安装的依赖库</span>
pip3 list

<span class="token comment">#在虚拟环境中安装uwsgi</span>
apt<span class="token operator">-</span>get install uwsgi

<span class="token comment">#安装gunicorn</span>
pip install gunicorn

<span class="token comment"># 此处app:app中，第一个app为flask项目实例所在的包，第二个app为生成的flask项目实例</span>
<span class="token comment">#第一个app是flask的启动python文件，第二个app则是flask应用程序实例</span>
nohup gunicorn <span class="token operator">-w</span> <span class="token number">4</span> <span class="token operator">-b</span> <span class="token v-string string">192.168.50.230</span><span class="token punctuation">:</span><span class="token number">8001</span> app<span class="token punctuation">:</span>app <span class="token operator">&amp;</span><span class="token operator">&gt;</span> <span class="token operator">.</span><span class="token operator">/</span>logs<span class="token operator">/</span>flask<span class="token operator">.</span>log <span class="token operator">&amp;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flask 将表转换为model</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>pip3 install flask<span class="token operator">-</span>sqlacodegen
flask<span class="token operator">-</span>sqlacodegen <span class="token string">&quot;mysql+pymysql://root:shangjian@127.0.0.1/sz_sps_javaweb&quot;</span> <span class="token operator">--</span>tables tbl_fzkpi <span class="token operator">--</span>outfile <span class="token string">&quot;model.py&quot;</span> <span class="token operator">--</span>flask

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>python 后台启动</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">[</span>root<span class="token variable">@java</span><span class="token operator">-</span>dev data1<span class="token punctuation">]</span><span class="token comment"># nohup python3 app.py &gt;my.log &amp;</span>
或者nohup python3 app<span class="token operator">.</span>py <span class="token operator">&gt;</span><span class="token operator">/</span>dev<span class="token operator">/</span>null <span class="token number">2</span><span class="token operator">&gt;</span><span class="token variable">&amp;1</span> <span class="token operator">&amp;</span>

使用完nohup后，千万不能直接关闭SSH，要使用exit退出shell。

再用外网访问一下flask，发现没有问题了！可以后台启动了！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mysql too many connection</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
mysql<span class="token operator">&gt;</span> set global max_connections <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
Query OK<span class="token punctuation">,</span> <span class="token number">0</span> rows affected
mysql<span class="token operator">&gt;</span> show variables like <span class="token string">&#39;max_connections&#39;</span><span class="token punctuation">;</span>


<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
datadir<span class="token operator">=</span>C<span class="token punctuation">:</span><span class="token operator">/</span>devlope<span class="token operator">/</span>Mariadb
port<span class="token operator">=</span><span class="token number">3369</span>
innodb_buffer_pool_size<span class="token operator">=</span>3053M
character<span class="token operator">-</span>set<span class="token operator">-</span>server<span class="token operator">=</span>utf8
<span class="token comment"># 添加一行如下</span>
max_connections<span class="token operator">=</span><span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[p];function o(t,r){return s(),a("div",null,i)}const d=n(l,[["render",o],["__file","flask 部署到unbantu随手笔记.html.vue"]]);export{d as default};
