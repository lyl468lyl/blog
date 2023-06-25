import{_ as s,o as n,c as a,e}from"./app-03280341.js";const p={},o=e(`<h1 id="centos7-6-搭建mysql" tabindex="-1"><a class="header-anchor" href="#centos7-6-搭建mysql" aria-hidden="true">#</a> centos7.6 搭建mysql</h1><p>下载:</p><p>https://downloads.mysql.com/archives/community/</p><p>version:5.7.33</p><p>sysem:redhat Enterprice oracle Liunx</p><p>osversion red hat enterprice linux 7 (x86 64-bit)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>mkdir <span class="token operator">/</span>opt<span class="token operator">/</span>software<span class="token operator">/</span>mysql
cd <span class="token operator">/</span>opt<span class="token operator">/</span>software<span class="token operator">/</span>mysql
wget https<span class="token punctuation">:</span><span class="token operator">//</span>downloads<span class="token operator">.</span>mysql<span class="token operator">.</span>com<span class="token operator">/</span>archives<span class="token operator">/</span>get<span class="token operator">/</span>p<span class="token operator">/</span><span class="token number">23</span><span class="token operator">/</span>file<span class="token operator">/</span>mysql<span class="token operator">-</span><span class="token v-string string">5.7.33</span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">.</span>el7<span class="token operator">.</span>x86_64<span class="token operator">.</span>rpm<span class="token operator">-</span>bundle<span class="token operator">.</span>tar
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># tar -xvf mysql-5.7.33-1.el7.x86_64.rpm-bundle.tar </span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># rpm -qa|grep mariadb</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-common-5.7.33-1.el7.x86_64.rpm </span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-libs-5.7.33-1.el7.x86_64.rpm </span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-devel-5.7.33-1.el7.x86_64.rpm </span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-libs-compat-5.7.33-1.el7.x86_64.rpm </span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-client-5.7.33-1.el7.x86_64.rpm </span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># rpm -ivh mysql-community-server-5.7.33-1.el7.x86_64.rpm </span>

<span class="token comment">#查看启动状态</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># service mysqld status</span>
<span class="token comment">#启动</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># systemctl start mysqld</span>
<span class="token comment">#查看临时密码</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev mysql<span class="token punctuation">]</span><span class="token comment"># grep &quot;password&quot; /var/log/mysqld.log</span>

<span class="token comment">#客户端登录</span>
mysql <span class="token operator">-u</span> roor <span class="token operator">-p</span><span class="token operator">?</span>3pcNyGpPa0z

<span class="token comment">#设置密码策略为LOW，此策略只检查密码的长度</span>
mysql<span class="token operator">&gt;</span> set global validate_password_policy<span class="token operator">=</span>LOW<span class="token punctuation">;</span>
<span class="token comment">#设置密码最小长度</span>

set global validate_password_length<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span>
<span class="token comment">#修改mysql的root用户，本地登陆的密码为123456</span>

ALTER USER <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED BY <span class="token string">&#39;shangjian&#39;</span><span class="token punctuation">;</span>


<span class="token comment">#开启mysql远程登录连接</span>
mysql<span class="token operator">&gt;</span> grant all privileges on <span class="token operator">*</span><span class="token operator">.</span><span class="token operator">*</span> to <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;shangjian123456&#39;</span> with grant option<span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> FLUSH   PRIVILEGES<span class="token punctuation">;</span> 

<span class="token comment">#杀死批量的pid</span>
<span class="token punctuation">[</span>root<span class="token variable">@aps</span> <span class="token keyword">local</span><span class="token punctuation">]</span><span class="token comment"># ps -ef|grep sleep|grep -v grep|cut -c 9-15|xargs kill -9</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[o];function l(c,r){return n(),a("div",null,t)}const m=s(p,[["render",l],["__file","centos7.6 搭建mysql.html.vue"]]);export{m as default};
