import{_ as s,o as n,c as a,e}from"./app-ce4edb7a.js";const p={},o=e(`<p>---</p><p>date: 2013-6-25</p><p>category: linux</p><p>tag:</p><p>- 安装mysql</p><p>---</p><h1 id="ubuntu18-04-安装mysql5-7-30" tabindex="-1"><a class="header-anchor" href="#ubuntu18-04-安装mysql5-7-30" aria-hidden="true">#</a> ubuntu18.04 安装mysql5.7.30</h1><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>下载源文件
https<span class="token punctuation">:</span><span class="token operator">//</span>downloads<span class="token operator">.</span>mysql<span class="token operator">.</span>com<span class="token operator">/</span>archives<span class="token regex">/community/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20220407132332619](/Users/li/Library/Application Support/typora-user-images/image-20220407132332619.png)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#查询所有安装mysql模块</span>
dpkg <span class="token operator">-l</span> <span class="token operator">|</span>grep mysql


<span class="token comment">#删除某个模块</span>
apt<span class="token operator">-</span>get <span class="token operator">--</span>purge remove   mysql<span class="token operator">-</span>server<span class="token operator">-</span>core<span class="token operator">-</span><span class="token number">5.7</span> 
<span class="token comment">#1</span>
sudo dpkg <span class="token operator">-</span>i mysql<span class="token operator">-</span>common_<span class="token v-string string">5.7.30</span><span class="token operator">-</span>1ubuntu18<span class="token operator">.</span>04_amd64<span class="token operator">.</span>deb
<span class="token comment">#2</span>
sudo dpkg <span class="token operator">-</span>i mysql<span class="token operator">-</span>community<span class="token operator">-</span>client_<span class="token v-string string">5.7.30</span><span class="token operator">-</span>1ubuntu18<span class="token operator">.</span>04_amd64<span class="token operator">.</span>deb

会提示缺少依赖包libaio1
sudo apt install libaio1
<span class="token comment"># 如果报错按照提示操作即可 会提示运行👇的命令</span>
sudo apt <span class="token operator">--</span>fix<span class="token operator">-</span>broken instalL
<span class="token comment">#3</span>
sudo dpkg <span class="token operator">-</span>i mysql<span class="token operator">-</span>client_<span class="token v-string string">5.7.30</span><span class="token operator">-</span>1ubuntu18<span class="token operator">.</span>04_amd64<span class="token operator">.</span>deb
<span class="token comment">#4</span>
<span class="token comment">#安装 mysql-community-server_5.7.29-1ubuntu18.04_amd64.deb</span>
<span class="token comment">#安装过程中会提示缺少依赖包libmecab2：</span>

sudo apt<span class="token operator">-</span>get install libmecab2
sudo apt<span class="token operator">-</span>get install libtinfo5
sudo dpkg <span class="token operator">-</span>i mysql<span class="token operator">-</span>community<span class="token operator">-</span>server_<span class="token v-string string">5.7.30</span><span class="token operator">-</span>1ubuntu18<span class="token operator">.</span>04_amd64<span class="token operator">.</span>deb
安装过程中会要求在粉色的大页面上输入密码，输入两次即可，至此安装完成

<span class="token comment">#使用</span>
<span class="token comment">#启动</span>
mysql：service mysql start 
<span class="token comment">#停止</span>
mysql：service mysql stop
<span class="token comment">#重启</span>
mysql：service mysql restart


<span class="token comment">#修改配置文件</span>
root<span class="token variable">@shangjian</span><span class="token punctuation">:</span><span class="token operator">/</span>opt<span class="token operator">/</span>software<span class="token comment"># vi /etc/mysql/mysql.conf.d/mysqld.cnf </span>
注释掉bind<span class="token operator">-</span>address <span class="token operator">=</span> <span class="token v-string string">127.0.0.1</span>：

<span class="token comment">#设置开机自启动</span>
编辑软件源列表：sudo vim <span class="token operator">/</span>etc<span class="token operator">/</span>apt<span class="token operator">/</span>sources<span class="token operator">.</span>list
末尾添加软件源：deb http<span class="token punctuation">:</span><span class="token operator">//</span>archive<span class="token operator">.</span>ubuntu<span class="token operator">.</span>com<span class="token operator">/</span>ubuntu<span class="token operator">/</span> trusty main universe restricted multiverse
更新apt<span class="token operator">-</span>get：sudo apt<span class="token operator">-</span>get update


<span class="token comment">#设置开机自启动</span>
sudo systemctl is<span class="token operator">-</span>enabled mysql


<span class="token comment">#在mysql环境下执行授权命令(授权给远程任何电脑登录数据库)</span>

mysql<span class="token operator">&gt;</span> GRANT ALL PRIVILEGES ON <span class="token operator">*</span><span class="token operator">.</span><span class="token operator">*</span> TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED BY <span class="token string">&#39;shangjian123456&#39;</span><span class="token punctuation">;</span>
FLUSH   PRIVILEGES<span class="token punctuation">;</span>



<span class="token comment">#doker 运行nginx</span>

docker run <span class="token operator">\\</span>
<span class="token operator">-p</span> <span class="token number">90</span><span class="token punctuation">:</span><span class="token number">80</span> <span class="token operator">\\</span>
<span class="token operator">--</span>name nginx <span class="token operator">\\</span>
<span class="token operator">-</span>v <span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>nginx<span class="token regex">/conf/nginx</span><span class="token operator">.</span>conf<span class="token punctuation">:</span><span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>nginx<span class="token operator">.</span>conf <span class="token operator">\\</span>
<span class="token operator">-</span>v <span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>conf<span class="token operator">.</span>d<span class="token punctuation">:</span><span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>conf<span class="token operator">.</span>d <span class="token operator">\\</span>
<span class="token operator">-</span>v <span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>nginx<span class="token operator">/</span>log<span class="token punctuation">:</span><span class="token operator">/</span>var<span class="token regex">/log/ngin</span><span class="token operator">x</span> <span class="token operator">\\</span>
<span class="token operator">-</span>v <span class="token operator">/</span>data<span class="token operator">/</span>gengda<span class="token operator">/</span>front<span class="token operator">/</span>dist<span class="token punctuation">:</span><span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>html <span class="token operator">\\</span>
<span class="token operator">-d</span> nginx<span class="token punctuation">:</span>latest


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#配置下载文件 多加了 -v </span>
docker run <span class="token operator">\\</span>
<span class="token operator">-p</span> <span class="token number">90</span><span class="token punctuation">:</span><span class="token number">80</span> <span class="token operator">\\</span>
<span class="token operator">--</span>name nginx <span class="token operator">\\</span>
<span class="token operator">-</span>v <span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>nginx<span class="token regex">/conf/nginx</span><span class="token operator">.</span>conf<span class="token punctuation">:</span><span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>nginx<span class="token operator">.</span>conf <span class="token operator">\\</span>
<span class="token operator">-</span>v <span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>conf<span class="token operator">.</span>d<span class="token punctuation">:</span><span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>conf<span class="token operator">.</span>d <span class="token operator">\\</span>
<span class="token operator">-</span>v <span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>nginx<span class="token operator">/</span>log<span class="token punctuation">:</span><span class="token operator">/</span>var<span class="token regex">/log/ngin</span><span class="token operator">x</span> <span class="token operator">\\</span>
<span class="token operator">-</span>v <span class="token operator">/</span>data<span class="token operator">/</span>gengda<span class="token operator">/</span>front<span class="token operator">/</span>dist<span class="token punctuation">:</span><span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>html <span class="token operator">\\</span>
<span class="token operator">-</span>v <span class="token operator">/</span>data<span class="token operator">/</span>gengda<span class="token operator">/</span>front<span class="token operator">/</span>file<span class="token punctuation">:</span><span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>file <span class="token operator">\\</span>
<span class="token operator">-d</span> nginx<span class="token punctuation">:</span>latest

<span class="token comment">#部署文件下载配置</span>
server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>
        location <span class="token operator">/</span> <span class="token punctuation">{</span>
           add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Origin <span class="token operator">*</span><span class="token punctuation">;</span>
          
            root   <span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>html<span class="token punctuation">;</span>
            index  index<span class="token operator">.</span>html index<span class="token operator">.</span>htm<span class="token punctuation">;</span>
            <span class="token comment">#try_files $uri $uri/ /index.html;</span>
        <span class="token punctuation">}</span>

       
          location <span class="token operator">/</span>file <span class="token punctuation">{</span>
           add_header Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Origin <span class="token operator">*</span><span class="token punctuation">;</span>
          
           alias  <span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>file<span class="token punctuation">;</span>
            
            <span class="token comment">#try_files $uri $uri/ /index.html;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[o];function r(l,c){return n(),a("div",null,t)}const d=s(p,[["render",r],["__file","ubuntu18.04-mysql5.7.30_nginx.html.vue"]]);export{d as default};
