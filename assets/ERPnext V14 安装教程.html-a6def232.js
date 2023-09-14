import{_ as n,o as s,c as a,e}from"./app-d0d8bb13.js";const p={},t=e(`<h1 id="erp-next使用教程" tabindex="-1"><a class="header-anchor" href="#erp-next使用教程" aria-hidden="true">#</a> erp_next使用教程</h1><div class="language-per line-numbers-mode" data-ext="per"><pre class="language-per"><code>su - root
#添加用户
adduser frappe
#将新建的用户添加到sudo组
usermod -aG sudo frappe

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>更换apt源</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#备份</span>
sudo cp <span class="token operator">/</span>etc<span class="token operator">/</span>apt<span class="token operator">/</span>sources<span class="token operator">.</span>list <span class="token operator">/</span>etc<span class="token operator">/</span>apt<span class="token operator">/</span>sources<span class="token operator">.</span>list<span class="token operator">.</span>bak
<span class="token comment">#修改</span>
sudo vim <span class="token operator">/</span>etc<span class="token operator">/</span>apt<span class="token operator">/</span>sources<span class="token operator">.</span>list
<span class="token comment">#按ggVG进行全选，按d进行删除</span>
<span class="token comment">#将下面源粘贴,wq保存退出</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span>
deb https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>tuna<span class="token operator">.</span>tsinghua<span class="token operator">.</span>edu<span class="token operator">.</span>cn<span class="token operator">/</span>ubuntu<span class="token operator">/</span> focal main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse</span>
deb https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>tuna<span class="token operator">.</span>tsinghua<span class="token operator">.</span>edu<span class="token operator">.</span>cn<span class="token operator">/</span>ubuntu<span class="token operator">/</span> focal<span class="token operator">-</span>updates main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse</span>
deb https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>tuna<span class="token operator">.</span>tsinghua<span class="token operator">.</span>edu<span class="token operator">.</span>cn<span class="token operator">/</span>ubuntu<span class="token operator">/</span> focal<span class="token operator">-</span>backports main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse</span>
deb https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>tuna<span class="token operator">.</span>tsinghua<span class="token operator">.</span>edu<span class="token operator">.</span>cn<span class="token operator">/</span>ubuntu<span class="token operator">/</span> focal<span class="token operator">-</span>security main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更新源</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>apt update <span class="token operator">&amp;&amp;</span> apt upgrade <span class="token operator">-</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>下载nodejs 16.xx版本</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>curl <span class="token operator">-</span>sL https<span class="token punctuation">:</span><span class="token operator">//</span>deb<span class="token operator">.</span>nodesource<span class="token operator">.</span>com<span class="token operator">/</span>setup_16<span class="token operator">.</span><span class="token operator">x</span> <span class="token operator">|</span> sudo <span class="token operator">-</span>E bash <span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装程序运行时的依赖()</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo apt install <span class="token operator">-</span>y  python3<span class="token operator">-</span>setuptools python3<span class="token operator">-</span>pip python3<span class="token operator">-</span>distutils  software<span class="token operator">-</span>properties<span class="token operator">-</span>common mariadb<span class="token operator">-</span>server<span class="token operator">-</span><span class="token number">10.3</span> mariadb<span class="token operator">-</span>client redis<span class="token operator">-</span>server nodejs xvfb libfontconfig wkhtmltopdf libmysqlclient<span class="token operator">-</span>dev nginx cron vim git ttf<span class="token operator">-</span>wqy<span class="token operator">-</span>zenhei ttf<span class="token operator">-</span>wqy<span class="token operator">-</span>microhei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改mariadb配置文件</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>vi <span class="token operator">/</span>etc<span class="token operator">/</span>mysql<span class="token operator">/</span>mariadb<span class="token operator">.</span>conf<span class="token operator">.</span>d<span class="token operator">/</span><span class="token number">50</span><span class="token operator">-</span>server<span class="token operator">.</span>cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#加入如下配置</span>

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
bind<span class="token operator">-</span>address            <span class="token operator">=</span> <span class="token v-string string">0.0.0.0</span>
character<span class="token operator">-</span>set<span class="token operator">-</span>client<span class="token operator">-</span>handshake <span class="token operator">=</span> FALSE
character<span class="token operator">-</span>set<span class="token operator">-</span>server <span class="token operator">=</span> utf8mb4
collation<span class="token operator">-</span>server <span class="token operator">=</span> utf8mb4_unicode_ci

<span class="token comment">#注意,删除配置后面的character-set-server和collation-server配置</span>
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token keyword">default</span><span class="token operator">-</span>character<span class="token operator">-</span>set<span class="token operator">=</span>utf8mb4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启mysql</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo service mysql restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>mysql安全配置</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#进入MySQL安全配置</span>
Set root password<span class="token operator">?</span> <span class="token punctuation">[</span>Y<span class="token operator">/</span>n<span class="token punctuation">]</span> Y
New password<span class="token punctuation">:</span>  <span class="token comment">#输入数据库密码</span>
Re<span class="token operator">-</span>enter new password<span class="token punctuation">:</span> <span class="token comment">#重复输入数据库密码</span>
Remove anonymous users<span class="token operator">?</span> <span class="token punctuation">[</span>Y<span class="token operator">/</span>n<span class="token punctuation">]</span> Y
Disallow root login remotely<span class="token operator">?</span> <span class="token punctuation">[</span>Y<span class="token operator">/</span>n<span class="token punctuation">]</span> n
Remove test database <span class="token operator">and</span> access to it<span class="token operator">?</span> <span class="token punctuation">[</span>Y<span class="token operator">/</span>n<span class="token punctuation">]</span> Y
Reload privilege tables now<span class="token operator">?</span> <span class="token punctuation">[</span>Y<span class="token operator">/</span>n<span class="token punctuation">]</span> Y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>连接mysql</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>mysql <span class="token operator">-u</span> root <span class="token operator">-p</span>
<span class="token comment">#输入上面新设置的数据库root账号密码，进入数据库命令行，并执行下面的语句</span>
USE mysql<span class="token punctuation">;</span> 
UPDATE user SET plugin<span class="token operator">=</span><span class="token string">&#39; &#39;</span> WHERE user <span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span> 
FLUSH PRIVILEGES<span class="token punctuation">;</span>
exit<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装yarn,并切换国内源</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo npm install <span class="token operator">-g</span> yarn
<span class="token comment">#查看是否官方源</span>
yarn config get registry

<span class="token comment">#查看源, 如果不是淘宝的源就切换为淘宝的源</span>
yarn config set registry https<span class="token punctuation">:</span><span class="token operator">//</span>registry<span class="token operator">.</span>npm<span class="token operator">.</span>taobao<span class="token operator">.</span>org
yarn config set sass_binary_site <span class="token string">&quot;node-sass Mirror&quot;</span>
yarn config set phantomjs_cdnurl <span class="token string">&quot;http://cnpmjs.org/downloads&quot;</span>
yarn config set electron_mirror <span class="token string">&quot;electron Mirror&quot;</span>
yarn config set sqlite3_binary_host_mirror <span class="token string">&quot;https://foxgis.oss-cn-shanghai.aliyuncs.com/&quot;</span>
yarn config set profiler_binary_host_mirror <span class="token string">&quot;node-inspector Mirror&quot;</span>
yarn config set chromedriver_cdnurl <span class="token string">&quot;https://cdn.npm.taobao.org/dist/chromedriver&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更改pip镜像源</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>pip install <span class="token operator">-</span>i https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/pypi.tuna.tsinghua.edu.cn/simp</span><span class="token operator">le</span> <span class="token operator">--</span>upgrade pip
<span class="token comment">#升级pip到最新版本（&gt;10.0.0）后进行配置</span>
pip config set global<span class="token operator">.</span>index<span class="token operator">-</span>url https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/pypi.tuna.tsinghua.edu.cn/simp</span><span class="token operator">le</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>更改root账户镜像源</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo pip config set global<span class="token operator">.</span>index<span class="token operator">-</span>url https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/pypi.tuna.tsinghua.edu.cn/simp</span><span class="token operator">le</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>基础环境安装完成,查看版本</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>node <span class="token operator">-</span>v <span class="token operator">&amp;&amp;</span> npm <span class="token operator">-</span>v <span class="token operator">&amp;&amp;</span> python3 <span class="token operator">-</span>V <span class="token operator">&amp;&amp;</span> pip3 <span class="token operator">-</span>V <span class="token operator">&amp;&amp;</span> yarn <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装bench</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>切换到frappe账号
su <span class="token operator">-</span> frappe
sudo <span class="token operator">-</span>H pip3 install frappe<span class="token operator">-</span>bench
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查看bench版本</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>bench <span class="token operator">--</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建虚拟环境,安装conda(注意在新建的frappe用户下安装conda)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#root用户切换到frappe用户</span>
su frappe
<span class="token comment">#下载</span>
wget https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>tuna<span class="token operator">.</span>tsinghua<span class="token operator">.</span>edu<span class="token operator">.</span>cn<span class="token operator">/</span>anaconda<span class="token operator">/</span>archive<span class="token operator">/</span>Anaconda3<span class="token operator">-</span><span class="token number">2022.10</span><span class="token operator">-</span>Linux<span class="token operator">-</span>x86_64<span class="token operator">.</span>sh
<span class="token comment">#执行脚本</span>
sudo bash Anaconda3<span class="token operator">-</span><span class="token number">2021.11</span><span class="token operator">-</span>Linux<span class="token operator">-</span>x86_64<span class="token operator">.</span>sh
<span class="token comment">#设置环境变量</span>
vi <span class="token operator">~</span><span class="token operator">/</span><span class="token operator">.</span>bashrc
export PATH<span class="token operator">=</span><span class="token string">&quot;/home/frappe/anaconda3/bin/:$PATH&quot;</span>

source <span class="token operator">~</span><span class="token operator">/</span><span class="token operator">.</span>bashrc
<span class="token comment">#查看conda版本</span>
conda <span class="token operator">--</span>version


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在==frappe==用户下创建虚拟环境</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>su frappe
conda create <span class="token operator">-</span>n my_env python<span class="token operator">=</span><span class="token number">3.10</span> <span class="token comment">#一定要指定python为3.10 ,erpnext14,需要python3.10</span>
conda activate my_env <span class="token comment">#激活虚拟环境</span>

<span class="token comment">#激活后</span>
<span class="token punctuation">(</span>my_env<span class="token punctuation">)</span> frappe<span class="token variable">@erpnext</span><span class="token punctuation">:</span><span class="token regex">/opt/moud</span><span class="token operator">le</span>$ 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注:conda相关的命令</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#删除虚拟环境</span>
conda remove <span class="token operator">-</span>n my_env <span class="token operator">--</span>all
<span class="token comment">#在虚拟环境中安装</span>
conda install <span class="token operator">-</span>n my_env <span class="token punctuation">[</span><span class="token keyword">package</span><span class="token punctuation">]</span>
<span class="token comment">#退出虚拟环境</span>
conda deactivate
<span class="token comment">#查看所有的虚拟环境</span>
conda info <span class="token operator">--</span>envs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装frappe框架</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">(</span>my_env<span class="token punctuation">)</span> frappe<span class="token variable">@erpnext</span><span class="token punctuation">:</span><span class="token regex">/opt/moud</span><span class="token operator">le</span>$ 
bench init <span class="token operator">--</span>frappe<span class="token operator">-</span>branch version<span class="token operator">-</span><span class="token number">14</span> frappe<span class="token operator">-</span>bench <span class="token operator">--</span>frappe<span class="token operator">-</span>path<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">//</span>gitee<span class="token operator">.</span>com<span class="token operator">/</span>mirrors<span class="token operator">/</span>frappe
<span class="token comment">#如果出现网络问题加载不上，用官方工具回滚，或者参考下面的命令，删除相关文件夹</span>
rm <span class="token operator">-r</span> frappe<span class="token operator">-</span>bench

<span class="token comment">#SUCCESS: Bench frappe-bench initialized</span>
<span class="token comment">#出现warn不要慌，正常现象，当提示success时，说明安装完全成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装新站点</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#安装的系统用户分配权限</span>
sudo chmod <span class="token operator">-R</span> o<span class="token operator">+</span>rx <span class="token operator">/</span>home<span class="token regex">/frappe/</span>
<span class="token comment">#进入到 frappe-bench目录</span>
cd frappe<span class="token operator">-</span>bench

<span class="token comment">#创建站点</span>
<span class="token comment">#名字可以随意改，不一定叫demo</span>
<span class="token comment">#需要输入mariadb密码</span>
<span class="token comment">#安装结束后，需要设置administrator的密码</span>
bench new<span class="token operator">-</span>site demo

<span class="token comment">#Updating Dashboard for frappe</span>
<span class="token comment">#demo: SystemSettings.enable_scheduler is UNSET</span>
<span class="token comment">#*** Scheduler is disabled ***</span>
<span class="token comment">#出现以上提示，说明站点创建完成</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载App</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token comment">#创建新的应用</span>
bench new<span class="token operator">-</span>app library_management

<span class="token comment">#下载payment，node报WARN可以忽略，报ERROR说明真的出错了</span>
bench get<span class="token operator">-</span>app https<span class="token punctuation">:</span><span class="token operator">//</span>gitee<span class="token operator">.</span>com<span class="token operator">/</span>phipsoft<span class="token operator">/</span>payments
<span class="token comment">#下载erpnext，同理，报WARN可忽略，大约需要3分钟，不要慌，就是等</span>
bench get<span class="token operator">-</span>app <span class="token operator">--</span>branch version<span class="token operator">-</span><span class="token number">14</span> erpnext https<span class="token punctuation">:</span><span class="token operator">//</span>gitee<span class="token operator">.</span>com<span class="token operator">/</span>mirrors<span class="token operator">/</span>erpnext
<span class="token comment">#下载hrms</span>
bench get<span class="token operator">-</span>app https<span class="token punctuation">:</span><span class="token operator">//</span>gitee<span class="token operator">.</span>com<span class="token operator">/</span>qpchen888<span class="token operator">/</span>hrms

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启用开发者模式" tabindex="-1"><a class="header-anchor" href="#启用开发者模式" aria-hidden="true">#</a> 启用开发者模式</h2><p>到您的终端并退出工作台服务器（如果它已经在运行）<code>frappe-bench</code>，然后从目录中运行以下命令</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
$ bench set<span class="token operator">-</span>config <span class="token operator">-g</span> developer_mode true
$ bench start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装app</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#首先安装payments(erpnext应用需要payments应用)</span>
bench <span class="token operator">--</span>site demo install<span class="token operator">-</span>app payments
bench <span class="token operator">--</span>site demo install<span class="token operator">-</span>app erpnext

<span class="token comment">#下面是重点中的重点</span>
<span class="token comment">#在安装hrms前，先启动bench，并在bench启动后，新建终端窗口，用安装用户登录，进入frappe-bench目录安装hrms，命令如下</span>


bench start
<span class="token comment">#在新窗口中进入frappe-bench目录</span>
cd frappe<span class="token operator">-</span>bench
<span class="token comment">#安装hrms</span>
bench <span class="token operator">--</span>site demo install<span class="token operator">-</span>app hrms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置为生产环境</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#在前面运行bench的窗口按Ctrl+C，结束bench运行，结束后才能设置生产环境</span>
Ctrl<span class="token operator">+</span>C
<span class="token comment">#设置生产环境</span>
sudo bench setup production frappe  <span class="token operator">//</span>执行这个命令会在 <span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>conf<span class="token operator">.</span>d<span class="token operator">/</span> 增加frappe<span class="token operator">-</span>bench<span class="token operator">.</span>conf <span class="token punctuation">,</span>并配置nginx<span class="token punctuation">(</span><span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>nginx<span class="token operator">.</span>conf<span class="token punctuation">)</span><span class="token punctuation">,</span>并加载

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装完成后检查</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>bench doctor

<span class="token comment">#出现这个:@ redis://localhost:11000，说明生产环境配置出现问题，重新运行配置命令,</span>
<span class="token comment">#出现覆盖提示，全部填y</span>
sudo bench setup production frappe

<span class="token comment">#Workers online: 3</span>
<span class="token comment">#-----None Jobs-----</span>
<span class="token comment">#出现上面的提示，说明生产环境设置正确</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置supervisord</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo vi <span class="token operator">/</span>etc<span class="token operator">/</span>supervisor<span class="token operator">/</span>supervisord<span class="token operator">.</span>conf
<span class="token comment">#用supervisorctl管理所有进程，使用nginx做反向代理</span>
<span class="token comment">#修改unix_http_server内容</span>

<span class="token punctuation">[</span>unix_http_server<span class="token punctuation">]</span>
file<span class="token operator">=</span>var<span class="token operator">/</span>tmp<span class="token operator">/</span>supervisord<span class="token operator">.</span>sock
chmod<span class="token operator">=</span><span class="token number">0700</span>
chown<span class="token operator">=</span><span class="token punctuation">{</span>USERNAME<span class="token punctuation">}</span><span class="token punctuation">:</span><span class="token punctuation">{</span>USERNAME<span class="token punctuation">}</span> <span class="token comment">#添加第四行代码，并将username改成frappe（或者你自定义的用户名）</span>

sudo <span class="token operator">-A</span> systemctl restart supervisor <span class="token comment">#修改完成后执行上面的命令</span>
supervisorctl stop all <span class="token operator">//</span>关闭所有的服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>​</p><p>二 安装常用的app</p><ol><li><p>安装ERPnext界面汉化</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>   bench get<span class="token operator">-</span>app https<span class="token punctuation">:</span><span class="token operator">//</span>gitee<span class="token operator">.</span>com<span class="token operator">/</span>yuzelin<span class="token operator">/</span>erpnext_chinese<span class="token operator">.</span>git <span class="token comment">#下载</span>
   bench <span class="token operator">--</span>site demo install<span class="token operator">-</span>app erpnext_chinese <span class="token comment">#安装</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>安装ERPnext开箱即用（深度汉化+国内环境使用）</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> bench get<span class="token operator">-</span>app <span class="token operator">--</span>branch version<span class="token operator">-</span><span class="token number">14</span> https<span class="token punctuation">:</span><span class="token operator">//</span>gitee<span class="token operator">.</span>com<span class="token operator">/</span>yuzelin<span class="token operator">/</span>erpnext_oob<span class="token operator">.</span>git
 bench <span class="token operator">--</span>site demo install<span class="token operator">-</span>app erpnext_oob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p></li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> 

 
 <span class="token number">3</span><span class="token operator">.</span> 安装ERPNext权限优化
 
bench get<span class="token operator">-</span>app https<span class="token punctuation">:</span><span class="token operator">//</span>gitee<span class="token operator">.</span>com<span class="token operator">/</span>yuzelin<span class="token operator">/</span>zelin_permission<span class="token operator">.</span>git
    bench <span class="token operator">--</span>site demo install<span class="token operator">-</span>app zelin_permission
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>三 登录使用 ​<br> ​ 1. 登录网址</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>    http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/139.219.0.35/app</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​<br> ​ 2. 修改中文界面</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>    选择头像<span class="token operator">--</span>我的设置<span class="token operator">--</span><span class="token operator">-</span>基本信息<span class="token operator">--</span>语言<span class="token punctuation">(</span>进行修改<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>四 相关报错解决方案</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token number">1</span><span class="token operator">.</span> 安装MySQL后解决普通用户不能进入MySQL的问题


   <span class="token comment">#mysql5.7安装完成后普通用户不能进mysql，原因：root的plugin被修改成了auth_socket，用密码登陆的plugin应该是mysql_native_password，直接用root权限登录就不用密码,修改root密码和登录验证方式</span>
   
   mysql<span class="token operator">&gt;</span> select user<span class="token punctuation">,</span> plugin from mysql<span class="token operator">.</span>user<span class="token punctuation">;</span>
   <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
   <span class="token operator">|</span> user             <span class="token operator">|</span> plugin                <span class="token operator">|</span>
   <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
   <span class="token operator">|</span> root             <span class="token operator">|</span> auth_socket           <span class="token operator">|</span>
   <span class="token operator">|</span> mysql<span class="token operator">.</span>session    <span class="token operator">|</span> mysql_native_password <span class="token operator">|</span>
   <span class="token operator">|</span> mysql<span class="token operator">.</span>sys        <span class="token operator">|</span> mysql_native_password <span class="token operator">|</span>
   <span class="token operator">|</span> debian<span class="token operator">-</span>sys<span class="token operator">-</span>maint <span class="token operator">|</span> mysql_native_password <span class="token operator">|</span>
   <span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span>
   <span class="token number">4</span> rows in set <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
   mysql<span class="token operator">&gt;</span> update mysql<span class="token operator">.</span>user set authentication_string<span class="token operator">=</span>PASSWORD<span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> plugin<span class="token operator">=</span><span class="token string">&#39;mysql_native_password&#39;</span> where user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
   mysql<span class="token operator">&gt;</span> flush privileges<span class="token punctuation">;</span>
   mysql<span class="token operator">&gt;</span> exit
   
   <span class="token comment"># exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$ sudo /etc/init.d/mysql restart</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> 

 
 <span class="token number">2</span><span class="token operator">.</span> 彻底删除mariadb问题

     sudo apt<span class="token operator">-</span>get remove <span class="token operator">--</span>purge mysql
     sudo apt<span class="token operator">-</span>get remove <span class="token operator">--</span>purge maria<span class="token operator">*</span>
     rm <span class="token operator">-f</span> <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>mariadb
     rm <span class="token operator">-f</span> <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>mariadb<span class="token operator">/</span>mariadb<span class="token operator">.</span>log
     rm <span class="token operator">-</span>rf <span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>mysql
     rm <span class="token operator">-</span>rf <span class="token operator">/</span>usr<span class="token operator">/</span>lib64<span class="token operator">/</span>mysql
     rm <span class="token operator">-</span>rf <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>mysql
     <span class="token comment">#重新安装</span>
     apt<span class="token operator">-</span>get install mariadb<span class="token operator">-</span>server mariadb<span class="token operator">-</span>client
     
     <span class="token comment">#mariadb 安全配置</span>
     sudo mysql_secure_installation
     <span class="token comment">#修改配置文件</span>
     vi <span class="token operator">/</span>etc<span class="token operator">/</span>mysql<span class="token operator">/</span>mariadb<span class="token operator">.</span>conf<span class="token operator">.</span>d<span class="token operator">/</span><span class="token number">50</span><span class="token operator">-</span>server<span class="token operator">.</span>cnf
        <span class="token string">&quot;
     		bind-address            = 0.0.0.0
        character-set-client-handshake = FALSE
        character-set-server = utf8mb4
        collation-server = utf8mb4_unicode_ci
        &quot;</span>
    <span class="token comment">#重新启动</span>
    sudo systemctl restart mariadb
    <span class="token comment">#查看mysql的字符编码:</span>
    mysql <span class="token operator">-</span>uroot <span class="token operator">-p</span>
    
MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> SHOW VARIABLES LIKE <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>
     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>五 关于supervisorctl 相关说明</p><ol><li><p>启动supervisord</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> root<span class="token variable">@erpnext</span><span class="token operator">-</span>dev<span class="token punctuation">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>supervisor<span class="token operator">/</span>conf<span class="token operator">.</span>d<span class="token comment"># ps -ef|grep supervisord</span>
root     <span class="token number">1599283</span>       <span class="token number">1</span>  <span class="token number">0</span> <span class="token number">06</span><span class="token punctuation">:</span><span class="token number">02</span> <span class="token operator">?</span>        <span class="token number">00</span><span class="token punctuation">:</span><span class="token number">00</span><span class="token punctuation">:</span><span class="token number">00</span> <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>python3 <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>supervisord <span class="token operator">-</span>n <span class="token operator">-c</span> <span class="token operator">/</span>etc<span class="token operator">/</span>supervisor<span class="token operator">/</span>supervisord<span class="token operator">.</span>conf

<span class="token comment">#重启加载配置</span>
supervisorctl reload
<span class="token comment">#查看配置状态</span>
supervisorctl status

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>命令相关</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>bench restart 

会启动如下服务<span class="token punctuation">:</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> root<span class="token variable">@erpnext</span><span class="token operator">-</span>dev<span class="token punctuation">:</span><span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>frappe<span class="token operator">-</span>bench<span class="token comment"># supervisorctl status</span>
frappe<span class="token operator">-</span>bench<span class="token operator">-</span>redis<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>redis<span class="token operator">-</span>cache                 FATAL     Exited too quickly <span class="token punctuation">(</span>process log may have details<span class="token punctuation">)</span>
frappe<span class="token operator">-</span>bench<span class="token operator">-</span>redis<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>redis<span class="token operator">-</span>queue                 FATAL     Exited too quickly <span class="token punctuation">(</span>process log may have details<span class="token punctuation">)</span>
frappe<span class="token operator">-</span>bench<span class="token operator">-</span>redis<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>redis<span class="token operator">-</span>socketio              FATAL     Exited too quickly <span class="token punctuation">(</span>process log may have details<span class="token punctuation">)</span>
frappe<span class="token operator">-</span>bench<span class="token operator">-</span>web<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>frappe<span class="token operator">-</span>web                    STOPPED   Apr <span class="token number">28</span> <span class="token number">04</span><span class="token punctuation">:</span><span class="token number">01</span> AM
frappe<span class="token operator">-</span>bench<span class="token operator">-</span>web<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>node<span class="token operator">-</span>socketio                 FATAL     Exited too quickly <span class="token punctuation">(</span>process log may have details<span class="token punctuation">)</span>
frappe<span class="token operator">-</span>bench<span class="token operator">-</span>workers<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>frappe<span class="token operator">-</span><span class="token keyword">default</span><span class="token operator">-</span>worker<span class="token operator">-</span><span class="token number">0</span>   RUNNING   pid <span class="token number">1409659</span><span class="token punctuation">,</span> uptime <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token number">27</span>
frappe<span class="token operator">-</span>bench<span class="token operator">-</span>workers<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>frappe<span class="token operator">-</span>long<span class="token operator">-</span>worker<span class="token operator">-</span><span class="token number">0</span>      RUNNING   pid <span class="token number">1409661</span><span class="token punctuation">,</span> uptime <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token number">27</span>
frappe<span class="token operator">-</span>bench<span class="token operator">-</span>workers<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>frappe<span class="token operator">-</span>schedule           RUNNING   pid <span class="token number">1409658</span><span class="token punctuation">,</span> uptime <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token number">27</span>
frappe<span class="token operator">-</span>bench<span class="token operator">-</span>workers<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>frappe<span class="token operator">-</span>short<span class="token operator">-</span>worker<span class="token operator">-</span><span class="token number">0</span>     RUNNING   pid <span class="token number">1409660</span><span class="token punctuation">,</span> uptime <span class="token number">0</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">:</span><span class="token number">27</span>

这些服务受 supervisorctl监视控制<span class="token punctuation">,</span>响应的程序杀掉就会被supervisorctl重启<span class="token punctuation">,</span>如frappe<span class="token operator">-</span>bench<span class="token operator">-</span>web<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>frappe<span class="token operator">-</span>web 就是frappe 后台程序占用<span class="token number">8000</span>端口

可以手动关闭服务<span class="token punctuation">:</span>
supervisorctl stop all <span class="token operator">//</span>关掉所有服务
supervisorctl stop frappe<span class="token operator">-</span>bench<span class="token operator">-</span>web<span class="token punctuation">:</span>frappe<span class="token operator">-</span>bench<span class="token operator">-</span>frappe<span class="token operator">-</span>web <span class="token operator">//</span>关掉的服务就不受supervisiorctl监视控制了<span class="token punctuation">,</span>就能kill掉了

bench start

启动 frappe服务 占用<span class="token number">8000</span>端口
启动 三个redis的服务<span class="token punctuation">:</span> 各占用<span class="token number">11000</span>端口<span class="token punctuation">,</span><span class="token number">12000</span>端口<span class="token punctuation">,</span><span class="token number">13000</span>端口

sudo bench setup production frappe  
<span class="token number">1</span><span class="token punctuation">)</span>在<span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>frappe<span class="token operator">-</span>bench<span class="token operator">/</span>config 创建nginx<span class="token operator">.</span>conf文件
  在<span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>frappe<span class="token operator">-</span>bench<span class="token operator">/</span>config 创建supervisor<span class="token operator">.</span>conf文件


<span class="token number">2</span><span class="token punctuation">)</span>启动nginx <span class="token number">80</span> 端口<span class="token punctuation">,</span>
  在<span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>conf<span class="token operator">.</span>d<span class="token operator">/</span> 增加frappe<span class="token operator">-</span>bench<span class="token operator">.</span>conf <span class="token punctuation">(</span>软连接frappe<span class="token operator">-</span>bench<span class="token operator">.</span>conf <span class="token operator">-&gt;</span> <span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>frappe<span class="token operator">-</span>bench<span class="token regex">/config/nginx</span><span class="token operator">.</span>conf<span class="token punctuation">)</span>
  在<span class="token operator">/</span>etc<span class="token operator">/</span>supervisor<span class="token operator">/</span>conf<span class="token operator">.</span>d 添加frappe<span class="token operator">-</span>bench<span class="token operator">.</span>conf <span class="token punctuation">(</span>软连接frappe<span class="token operator">-</span>bench<span class="token operator">.</span>conf <span class="token operator">-&gt;</span> <span class="token regex">/opt/moud</span><span class="token operator">le</span><span class="token operator">/</span>frappe<span class="token operator">-</span>bench<span class="token operator">/</span>config<span class="token operator">/</span>supervisor<span class="token operator">.</span>conf<span class="token punctuation">)</span>







</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>frappe 操作数据库</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[32m&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;李玉龙2222&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\\033[0m&quot;</span><span class="token punctuation">)</span>
 
 <span class="token comment">#从sigle talbe(所有单个值都存储在一个名为tabSingles) 读出数据</span>
 	loan_period <span class="token operator">=</span> frappe<span class="token operator">.</span>db<span class="token operator">.</span>get_single_value<span class="token punctuation">(</span><span class="token string">&quot;Library Settings&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;loan_period&quot;</span><span class="token punctuation">)</span>

 	<span class="token keyword">print</span><span class="token punctuation">(</span>loan_period<span class="token punctuation">)</span>
 
 	<span class="token comment">#修改记录的值(第一种方法)</span>
 	doc1<span class="token operator">=</span>frappe<span class="token operator">.</span>get_doc<span class="token punctuation">(</span><span class="token string">&quot;Library Member&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;LM0002&quot;</span><span class="token punctuation">)</span>
 	doc1<span class="token operator">.</span>email_adress <span class="token operator">=</span> <span class="token string">&quot;xiao@gmail.com&quot;</span>
 	doc1<span class="token operator">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>
 	
 	<span class="token comment">#直接更改数据的值(第二种方法)</span>
 	doc1<span class="token operator">.</span>db_set<span class="token punctuation">(</span><span class="token string">&#39;full_name&#39;</span><span class="token punctuation">,</span><span class="token string">&quot;gerui&quot;</span><span class="token punctuation">)</span>
 	<span class="token keyword">print</span><span class="token punctuation">(</span>doc1<span class="token operator">.</span>email_adress<span class="token punctuation">)</span>
 	
 	
<span class="token comment">#插入一条新的记录(第一种方法)</span>
 	doc<span class="token operator">=</span>frappe<span class="token operator">.</span>get_doc<span class="token punctuation">(</span>doctype<span class="token operator">=</span><span class="token string">&quot;Library Member&quot;</span><span class="token punctuation">,</span> full_name<span class="token operator">=</span><span class="token string">&#39;li yu&#39;</span><span class="token punctuation">,</span>
 					   first_name<span class="token operator">=</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">,</span>last_name <span class="token operator">=</span> <span class="token string">&quot;yu&quot;</span><span class="token punctuation">,</span>email_address<span class="token operator">=</span><span class="token string">&quot;li@123.com&quot;</span><span class="token punctuation">,</span>
 					   phone<span class="token operator">=</span><span class="token string">&quot;12345&quot;</span><span class="token punctuation">)</span>
 	<span class="token keyword">print</span><span class="token punctuation">(</span>doc<span class="token operator">.</span>full_name<span class="token punctuation">)</span>
 	doc<span class="token operator">.</span>insert<span class="token punctuation">(</span><span class="token punctuation">)</span>

 	<span class="token comment"># 创建一哥新的记录的另一种方式(第二种方法)</span>
 	doc3<span class="token operator">=</span>frappe<span class="token operator">.</span>new_doc<span class="token punctuation">(</span><span class="token string">&quot;Library Member&quot;</span><span class="token punctuation">)</span>
 	doc3<span class="token operator">.</span>title <span class="token operator">=</span><span class="token string">&#39;LM100000&#39;</span>
 	doc3<span class="token operator">.</span>first_name<span class="token operator">=</span><span class="token string">&quot;sss&quot;</span>
 	doc3<span class="token operator">.</span>insert<span class="token punctuation">(</span><span class="token punctuation">)</span>



 	<span class="token comment">#查询数据,只返回name字段</span>
 	list1<span class="token operator">=</span>frappe<span class="token operator">.</span>db<span class="token operator">.</span>get_list<span class="token punctuation">(</span><span class="token string">&quot;Library Member&quot;</span><span class="token punctuation">,</span>pluck<span class="token operator">=</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
 	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\033[32m&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;list1&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\\033[0m&quot;</span><span class="token punctuation">)</span>
 	<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>

 	<span class="token comment">#按条件查询</span>
 	list1 <span class="token operator">=</span> frappe<span class="token operator">.</span>db<span class="token operator">.</span>get_list<span class="token punctuation">(</span><span class="token string">&quot;Library Member&quot;</span><span class="token punctuation">,</span> filters<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;full_name&#39;</span><span class="token punctuation">:</span><span class="token string">&quot;zhang san&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>fields<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;full_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 	<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>
 	list2 <span class="token operator">=</span> frappe<span class="token operator">.</span>get_all<span class="token punctuation">(</span><span class="token string">&quot;Library Member&quot;</span><span class="token punctuation">,</span> filters<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;full_name&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;zhang san&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> fields<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;full_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 	<span class="token keyword">print</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span>

 	<span class="token comment"># 删除一条记录</span>
 	frappe<span class="token operator">.</span>delete_doc<span class="token punctuation">(</span><span class="token string">&#39;Library Member&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;LM0010&#39;</span><span class="token punctuation">)</span>
 	
 	<span class="token comment">#判断记录是否存在</span>
 	frappe<span class="token operator">.</span>db<span class="token operator">.</span>exists<span class="token punctuation">(</span><span class="token string">&quot;User&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&quot;full_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Jane Doe&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h5 id="erpnext-在page下-用js-加载html" tabindex="-1"><a class="header-anchor" href="#erpnext-在page下-用js-加载html" aria-hidden="true">#</a> erpnext 在page下,用js 加载html</h5><p>frappe在js中render到html中(page显示html内容)</p><p>![image-20230614153324258](/Users/li/Library/Application Support/typora-user-images/image-20230614153324258.png)</p><p>gantt.js</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> const data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;liyulong&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">}</span>
 <span class="token variable">$(</span>frappe<span class="token operator">.</span>render_template<span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">.</span>appendTo<span class="token punctuation">(</span>page<span class="token operator">.</span>body<span class="token operator">.</span>addClass<span class="token punctuation">(</span><span class="token string">&quot;no-border1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">#添加div到html</span>
<span class="token variable">$(</span><span class="token string">&quot;&lt;div class=&#39;perm-engine&#39; style=&#39;min-height: 200px; padding: 15px;&#39;&gt;sss&lt;/div&gt;&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>appendTo<span class="token punctuation">(</span>
		page<span class="token operator">.</span>main
	<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#找到html元素,并添加事件</span>
	page<span class="token operator">.</span>main<span class="token operator">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;.btn1&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>click<span class="token punctuation">(</span>function<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gantt.html</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token operator">&lt;</span>div class<span class="token operator">=</span><span class="token string">&quot;ok&quot;</span><span class="token operator">&gt;</span>ganttokccccccc<span class="token filehandle symbol">&lt;/div&gt;</span>
<span class="token filehandle symbol">&lt;div&gt;</span><span class="token punctuation">{</span><span class="token operator">%=</span>name<span class="token variable">%}</span><span class="token filehandle symbol">&lt;/div&gt;</span>
<span class="token filehandle symbol">&lt;div&gt;</span><span class="token punctuation">{</span><span class="token operator">%=</span>age<span class="token variable">%}</span><span class="token filehandle symbol">&lt;/div&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在应用的的www目录下添加usrs.py usr.html</p><p>usrs.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>def get_context<span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">:</span>
    context<span class="token operator">.</span>users <span class="token operator">=</span> frappe<span class="token operator">.</span>get_list<span class="token punctuation">(</span><span class="token string">&quot;User&quot;</span><span class="token punctuation">,</span> fields<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;first_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;last_name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>usrs.html</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token filehandle symbol">&lt;h3&gt;</span>List of Users<span class="token filehandle symbol">&lt;/h3&gt;</span>
<span class="token filehandle symbol">&lt;ol&gt;</span>
<span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">for</span> user in users <span class="token variable">%}</span>
    <span class="token filehandle symbol">&lt;li&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> user<span class="token operator">.</span>first_name <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> user<span class="token operator">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;last_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token filehandle symbol">&lt;/li&gt;</span>
<span class="token punctuation">{</span><span class="token operator">%</span> endfor <span class="token variable">%}</span>
<span class="token filehandle symbol">&lt;/ol&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="api的相关操作" tabindex="-1"><a class="header-anchor" href="#api的相关操作" aria-hidden="true">#</a> api的相关操作</h4><h5 id="一-自定义函数调用" tabindex="-1"><a class="header-anchor" href="#一-自定义函数调用" aria-hidden="true">#</a> 一. 自定义函数调用</h5><p>http://192.168.50.23/应用.模块.文件夹.文件.方法名</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>method<span class="token operator">/</span>library_management<span class="token operator">.</span>library_management<span class="token operator">.</span>doctype<span class="token operator">.</span>article<span class="token operator">.</span>article<span class="token operator">.</span>hello
http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>method<span class="token operator">/</span>frappe<span class="token operator">.</span>good<span class="token operator">.</span>aaa<span class="token operator">.</span>get_test_user

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>/api/method/{methodname}</code> will call a whitelisted method</li></ol><p>http://192.168.50.23//api/method/frappe.test.get_test_user</p><p>路径: frappe.test.get_test_user相当于 apps/frappe/frappe/test.py/get_test_user(funciton)</p><p>注意:必须在/apps/frappe/frappe下创建xxx.py</p><p>test.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># Copyright (c) 2021, Frappe Technologies Pvt. Ltd. and Contributors</span>
<span class="token comment"># MIT License. See LICENSE</span>
<span class="token comment"># from urllib.parse import quote</span>

import frappe

<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span><span class="token punctuation">)</span>
def get_logged_user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">return</span> frappe<span class="token operator">.</span>session<span class="token operator">.</span>user

<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span><span class="token punctuation">)</span>
def get_test_user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">return</span> <span class="token string">&quot;liyulong1233358&quot;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种:</p><p>在apps/frappe/frappe/ 下创建good文件夹.</p><p>然后在apps/frappe/frappe/good/aaa.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>import frappe
<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span>allow_guest<span class="token operator">=</span>True<span class="token punctuation">)</span>
def get_logged_user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">return</span> frappe<span class="token operator">.</span>session<span class="token operator">.</span>user

<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span>allow_guest<span class="token operator">=</span>True<span class="token punctuation">)</span>
def get_test_user<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">return</span> <span class="token string">&quot;liyulong1233358&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#访问url</span>
http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>method<span class="token operator">/</span>frappe<span class="token operator">.</span>good<span class="token operator">.</span>aaa<span class="token operator">.</span>get_test_user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一种和第二种区别</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>放在apps<span class="token operator">/</span>frappe<span class="token operator">/</span>frappe下的aaa<span class="token operator">.</span>py 白名单这样写<span class="token punctuation">:</span><span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span><span class="token punctuation">)</span>
放在apps<span class="token operator">/</span>frappe<span class="token operator">/</span>frappe<span class="token regex">/good/aaa</span><span class="token operator">.</span>py 白名单这样写<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span>allow_guest<span class="token operator">=</span>True<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="二-数据查询" tabindex="-1"><a class="header-anchor" href="#二-数据查询" aria-hidden="true">#</a> 二. 数据查询</h5><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">/</span>api<span class="token operator">/</span>resource<span class="token operator">/</span><span class="token punctuation">{</span>doctype<span class="token punctuation">}</span>\` will query a table
<span class="token comment">#获取doctype的文档内容</span>
http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>resource<span class="token operator">/</span>Article
<span class="token comment">#查询过滤</span>
http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>resource<span class="token operator">/</span>Article<span class="token operator">?</span>fields<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token variable">&amp;filters</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;Article&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;3ca986277a&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment">#根据id查询一条记录</span>
http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>resource<span class="token operator">/</span>Article<span class="token operator">/</span>f7da379402

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="三-数据增删操作" tabindex="-1"><a class="header-anchor" href="#三-数据增删操作" aria-hidden="true">#</a> 三. 数据增删操作</h5><ol><li><p>插入一条记录</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># api/resource/{doctype}/{name}\` will point to a resource</span>
<span class="token comment">#POST\` will insert</span>

post http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>resource<span class="token operator">/</span>Article
<span class="token punctuation">{</span><span class="token string">&quot;article_name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;水浒转&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改数据</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>put http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>resource<span class="token operator">/</span>Article<span class="token operator">/</span>3ca986277a
<span class="token punctuation">{</span><span class="token string">&quot;article_name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;isdn&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;000&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除数据</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token keyword">delete</span> http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>resource<span class="token operator">/</span>Article<span class="token operator">/</span>3ca986277a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h5 id="四-数据授权" tabindex="-1"><a class="header-anchor" href="#四-数据授权" aria-hidden="true">#</a> 四. 数据授权</h5><p>直接发放登录接口,或者把 article 的权限加上guest</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>curl <span class="token operator">-X</span> POST http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>method<span class="token operator">/</span>login <span class="token operator">\\</span>
     <span class="token operator">-</span>H <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token operator">\\</span>
     <span class="token operator">-</span>H <span class="token string">&#39;Accept: application/json&#39;</span> <span class="token operator">\\</span>
     <span class="token operator">-d</span> <span class="token string">&#39;{&quot;usr&quot;:&quot;Administrator&quot;,&quot;pwd&quot;:&quot;123&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看目前登录的用户</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">//</span>api<span class="token operator">/</span>method<span class="token operator">/</span>frappe<span class="token operator">.</span>test<span class="token operator">.</span>get_logged_user
http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>method<span class="token operator">/</span>frappe<span class="token operator">.</span>auth<span class="token operator">.</span>get_logged_user<span class="token punctuation">(</span>标准<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>python脚本apitoke登录验证:</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#python代码</span>
<span class="token comment">#带全正的请求</span>
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    url <span class="token operator">=</span> <span class="token string">&quot;http://192.168.50.23/api/resource/Article?fields=[\\&quot;name\\&quot;,\\&quot;owner\\&quot;]&amp;&amp;filters=[[\\&quot;Article\\&quot;,\\&quot;name\\&quot;,\\&quot;=\\&quot;,\\&quot;3ca986277a\\&quot;]]&quot;</span>
    headers <span class="token operator">=</span> <span class="token punctuation">{</span>
         <span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;token 17d6d3b731d2546:c9942ba1fa92ffa&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">#response = requests.get(url)</span>
    response <span class="token operator">=</span> requests<span class="token operator">.</span>request<span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token operator">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>erpnext 数据库字段查询脚本</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>import frappe
import difflib
def find_similar_words<span class="token punctuation">(</span>word_list<span class="token punctuation">,</span> target_word<span class="token punctuation">)</span><span class="token punctuation">:</span>
    similar_words <span class="token operator">=</span> difflib<span class="token operator">.</span>get_close_matches<span class="token punctuation">(</span>target_word<span class="token punctuation">,</span> word_list<span class="token punctuation">)</span>
    <span class="token keyword">return</span> similar_words

def get_context<span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">:</span>
	queryName<span class="token operator">=</span>frappe<span class="token operator">.</span>form_dict<span class="token operator">.</span>name
	sheetList<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
	sheet<span class="token operator">=</span>frappe<span class="token operator">.</span>db<span class="token operator">.</span>sql<span class="token punctuation">(</span><span class="token string">&quot;show tables&quot;</span><span class="token punctuation">)</span>
	<span class="token comment"># print(sheet)</span>
	<span class="token comment"># sheet=[&quot;tabArticle&quot;,&quot;tabAddress&quot;]</span>

	<span class="token keyword">for</span> row in sheet<span class="token punctuation">:</span>
		<span class="token comment"># print(&quot;get_context&quot;)</span>
		<span class="token comment"># print(row)</span>
		descInfo<span class="token operator">=</span>frappe<span class="token operator">.</span>db<span class="token operator">.</span>sql<span class="token punctuation">(</span>f<span class="token string">&quot;desc \`{row[0]}\`&quot;</span><span class="token punctuation">)</span>
		list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
		<span class="token keyword">for</span> item in descInfo<span class="token punctuation">:</span>
			list<span class="token operator">.</span>append<span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

		similar_words <span class="token operator">=</span> difflib<span class="token operator">.</span>get_close_matches<span class="token punctuation">(</span>queryName<span class="token punctuation">,</span> list<span class="token punctuation">)</span>
		<span class="token comment"># print(similar_words)</span>
		<span class="token keyword">if</span> len<span class="token punctuation">(</span>similar_words<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
			dict<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
			dict<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span>row<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
			dict<span class="token punctuation">[</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span>list
			dict<span class="token punctuation">[</span><span class="token string">&quot;word&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span>similar_words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
			sheetList<span class="token operator">.</span>append<span class="token punctuation">(</span>dict<span class="token punctuation">)</span>
		<span class="token comment"># print(sheetList)</span>
		context<span class="token operator">.</span>sheetData<span class="token operator">=</span>sheetList


    <span class="token comment"># context.users = frappe.get_list(&quot;User&quot;, fields=[&quot;first_name&quot;, &quot;last_name&quot;])</span>
	<span class="token comment"># context.sheet=frappe.db.get_all;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>doctype python 代码的回调函数</p><p>![image-20230616151719253](/Users/li/Library/Application Support/typora-user-images/image-20230616151719253.png)</p><p>js 代码的回调函数</p><p>![image-20230616151830540](/Users/li/Library/Application Support/typora-user-images/image-20230616151830540.png)</p><p>在 doctype 下的下载功能</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># Copyright (c) 2023, liyulong and contributors</span>
<span class="token comment"># For license information, please see license.txt</span>

import frappe
from frappe<span class="token operator">.</span>model<span class="token operator">.</span>document import Document

class Article<span class="token punctuation">(</span>Document<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\033[0;31m---article---\\033[0m&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\033[0;31m---liyulong---\\033[0m&#39;</span><span class="token punctuation">)</span>

	def before_save<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\033[0;31m---before_save---\\033[0m&#39;</span><span class="token punctuation">)</span>


	def autoname<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\033[0;31m---auto name---\\033[0m&#39;</span><span class="token punctuation">)</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;autoname&quot;</span><span class="token punctuation">)</span>

	def validate<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\033[0;31m---validate---\\033[0m&#39;</span><span class="token punctuation">)</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;validata&quot;</span><span class="token punctuation">)</span>
	def before_insert<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\033[0;31m---insert---\\033[0m&#39;</span><span class="token punctuation">)</span>
	def show<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\\033[0;31m---show article---\\033[0m&#39;</span><span class="token punctuation">)</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token operator">.</span>name<span class="token punctuation">)</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token operator">.</span>description<span class="token punctuation">)</span>
		<span class="token keyword">return</span> frappe<span class="token operator">.</span>render_template<span class="token punctuation">(</span>
			<span class="token string">&quot;library_management/templates/article/index.html&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> self<span class="token operator">.</span>name<span class="token punctuation">,</span>
				<span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> self<span class="token operator">.</span>description<span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>



<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span><span class="token punctuation">)</span>
def hello<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	article<span class="token operator">=</span>frappe<span class="token operator">.</span>get_doc<span class="token punctuation">(</span><span class="token string">&quot;Article&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2a13224fce&quot;</span><span class="token punctuation">)</span>
	data<span class="token operator">=</span>article<span class="token operator">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
	frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>response<span class="token operator">.</span>filecontent <span class="token operator">=</span> data
	frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>response<span class="token operator">.</span>type <span class="token operator">=</span> <span class="token string">&quot;download&quot;</span>
	frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>response<span class="token operator">.</span>filename <span class="token operator">=</span> <span class="token string">&quot;index.html&quot;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求连接</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.23</span><span class="token operator">/</span>api<span class="token operator">/</span>method<span class="token operator">/</span>library_management<span class="token operator">.</span>library_management<span class="token operator">.</span>doctype<span class="token operator">.</span>article<span class="token operator">.</span>article<span class="token operator">.</span>hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>javascript 直接调用python 的代码</p><p>![image-20230616184111229](/Users/li/Library/Application Support/typora-user-images/image-20230616184111229.png)</p><p>article.js 代码</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">//</span> Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2023</span><span class="token punctuation">,</span> liyulong <span class="token operator">and</span> contributors
<span class="token operator">//</span> For license information<span class="token punctuation">,</span> please see license<span class="token operator">.</span>txt

frappe<span class="token operator">.</span>ui<span class="token operator">.</span>form<span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;Article&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	refresh<span class="token punctuation">:</span> function<span class="token punctuation">(</span>frm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;article test&quot;</span><span class="token punctuation">)</span>
		frappe<span class="token operator">.</span>call<span class="token punctuation">(</span><span class="token punctuation">{</span>
				method<span class="token punctuation">:</span> <span class="token string">&quot;library_management.library_management.doctype.article.article.sendMessage&quot;</span><span class="token punctuation">,</span>
				args<span class="token punctuation">:</span> <span class="token punctuation">{</span>

					message<span class="token punctuation">:</span> frm<span class="token operator">.</span>doc<span class="token operator">.</span>article_name<span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				callback<span class="token punctuation">:</span> function <span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>r<span class="token operator">.</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						console<span class="token operator">.</span>log<span class="token punctuation">(</span>r<span class="token operator">.</span>message<span class="token punctuation">)</span>
						<span class="token operator">//</span> <span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token operator">.</span>message<span class="token punctuation">)</span>

					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>article.py 代码</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token operator">//</span> Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2023</span><span class="token punctuation">,</span> liyulong <span class="token operator">and</span> contributors
<span class="token operator">//</span> For license information<span class="token punctuation">,</span> please see license<span class="token operator">.</span>txt

frappe<span class="token operator">.</span>ui<span class="token operator">.</span>form<span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;Article&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	refresh<span class="token punctuation">:</span> function<span class="token punctuation">(</span>frm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;article test&quot;</span><span class="token punctuation">)</span>
		frappe<span class="token operator">.</span>call<span class="token punctuation">(</span><span class="token punctuation">{</span>
				method<span class="token punctuation">:</span> <span class="token string">&quot;library_management.library_management.doctype.article.article.sendMessage&quot;</span><span class="token punctuation">,</span>
				args<span class="token punctuation">:</span> <span class="token punctuation">{</span>

					message<span class="token punctuation">:</span> frm<span class="token operator">.</span>doc<span class="token operator">.</span>article_name<span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				callback<span class="token punctuation">:</span> function <span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>r<span class="token operator">.</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						console<span class="token operator">.</span>log<span class="token punctuation">(</span>r<span class="token operator">.</span>message<span class="token punctuation">)</span>
						<span class="token operator">//</span> <span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token operator">.</span>message<span class="token punctuation">)</span>

					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="frappe-www下的请求流程" tabindex="-1"><a class="header-anchor" href="#frappe-www下的请求流程" aria-hidden="true">#</a> frappe www下的请求流程:</h5><p>例如:</p><ol><li>frappe/www/contact.html</li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token filehandle symbol">&lt;script&gt;</span>
	<span class="token punctuation">{</span><span class="token operator">%</span> include <span class="token string">&quot;templates/includes/contact.js&quot;</span> <span class="token variable">%}</span>
<span class="token filehandle symbol">&lt;/script&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>frappe/templates/includes/contact.js</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>frappe<span class="token operator">.</span>send_message<span class="token punctuation">(</span><span class="token punctuation">{</span>
			subject<span class="token punctuation">:</span> <span class="token variable">$(</span><span class="token string">&#39;[name=&quot;subject&quot;]&#39;</span><span class="token punctuation">)</span><span class="token operator">.</span>val<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			sender<span class="token punctuation">:</span> email<span class="token punctuation">,</span>
			message<span class="token punctuation">:</span> message<span class="token punctuation">,</span>
			callback<span class="token punctuation">:</span> function<span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>r<span class="token operator">.</span>exc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					frappe<span class="token operator">.</span>msgprint<span class="token punctuation">(</span><span class="token string">&#39;{{ _(&quot;Thank you for your message&quot;) }}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token variable">$(</span><span class="token string">&#39;:input&#39;</span><span class="token punctuation">)</span><span class="token operator">.</span>val<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> this<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>frappe/website/js/website.js</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>send_message<span class="token punctuation">:</span> function <span class="token punctuation">(</span>opts<span class="token punctuation">,</span> btn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token operator">.</span>log<span class="token punctuation">(</span>opts<span class="token punctuation">)</span>
		console<span class="token operator">.</span>log<span class="token punctuation">(</span>btn<span class="token punctuation">)</span>
		<span class="token keyword">return</span> frappe<span class="token operator">.</span>call<span class="token punctuation">(</span><span class="token punctuation">{</span>
			type<span class="token punctuation">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
			method<span class="token punctuation">:</span> <span class="token string">&quot;frappe.www.contact.send_message&quot;</span><span class="token punctuation">,</span>
			btn<span class="token punctuation">:</span> btn<span class="token punctuation">,</span>
			args<span class="token punctuation">:</span> opts<span class="token punctuation">,</span>
			callback<span class="token punctuation">:</span> opts<span class="token operator">.</span>callback<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	
	<span class="token comment">#调用frappe.call调用此方法</span>
	call<span class="token punctuation">:</span> function <span class="token punctuation">(</span>opts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
	<span class="token keyword">return</span> <span class="token variable">$.</span>ajax<span class="token punctuation">(</span><span class="token punctuation">{</span>
			type<span class="token punctuation">:</span> opts<span class="token operator">.</span>type <span class="token operator">||</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
			url<span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
			data<span class="token punctuation">:</span> opts<span class="token operator">.</span>args<span class="token punctuation">,</span>
			dataType<span class="token punctuation">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
			headers<span class="token punctuation">:</span> <span class="token punctuation">{</span>
				<span class="token string">&quot;X-Frappe-CSRF-Token&quot;</span><span class="token punctuation">:</span> frappe<span class="token operator">.</span>csrf_token<span class="token punctuation">,</span>
				<span class="token string">&quot;X-Frappe-CMD&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>opts<span class="token operator">.</span>args <span class="token operator">&amp;&amp;</span> opts<span class="token operator">.</span>args<span class="token operator">.</span>cmd<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			statusCode<span class="token punctuation">:</span> opts<span class="token operator">.</span>statusCode <span class="token operator">||</span> <span class="token punctuation">{</span>
				<span class="token number">404</span><span class="token punctuation">:</span> function <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					frappe<span class="token operator">.</span>msgprint<span class="token punctuation">(</span>__<span class="token punctuation">(</span><span class="token string">&quot;Not found&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token number">403</span><span class="token punctuation">:</span> function <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					frappe<span class="token operator">.</span>msgprint<span class="token punctuation">(</span>__<span class="token punctuation">(</span><span class="token string">&quot;Not permitted&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token number">200</span><span class="token punctuation">:</span> function <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token operator">.</span>callback<span class="token punctuation">)</span> opts<span class="token operator">.</span>callback<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token operator">.</span>success<span class="token punctuation">)</span> opts<span class="token operator">.</span>success<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">.</span>always<span class="token punctuation">(</span>function <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>opts<span class="token operator">.</span>freeze<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				frappe<span class="token operator">.</span>unfreeze<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
	
	
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>frappe/app.py 接收请求,启用一个python服务占用8000端口.接收上面的ajax请求</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token variable">@local_manager</span><span class="token operator">.</span>middleware
<span class="token variable">@Request</span><span class="token operator">.</span>application
def application<span class="token punctuation">(</span>request<span class="token punctuation">:</span> Request<span class="token punctuation">)</span><span class="token punctuation">:</span>
			  init_request<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
				<span class="token keyword">if</span> request<span class="token operator">.</span>method <span class="token operator">==</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">:</span>
			       response <span class="token operator">=</span> Response<span class="token punctuation">(</span><span class="token punctuation">)</span>

		    elif frappe<span class="token operator">.</span>form_dict<span class="token operator">.</span>cmd<span class="token punctuation">:</span>
			  response <span class="token operator">=</span> frappe<span class="token operator">.</span>handler<span class="token operator">.</span>handle<span class="token punctuation">(</span><span class="token punctuation">)</span>

		     elif request<span class="token operator">.</span>path<span class="token operator">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;/api/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
			   response <span class="token operator">=</span> frappe<span class="token operator">.</span>api<span class="token operator">.</span>handle<span class="token punctuation">(</span><span class="token punctuation">)</span>
			   
			   
def init_request<span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
			import json
			request_data <span class="token operator">=</span> request<span class="token operator">.</span>get_data<span class="token punctuation">(</span>as_text<span class="token operator">=</span>True<span class="token punctuation">)</span>
	
	    frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>request <span class="token operator">=</span> request
	    frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>is_ajax <span class="token operator">=</span> frappe<span class="token operator">.</span>get_request_header<span class="token punctuation">(</span><span class="token string">&quot;X-Requested-With&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;XMLHttpRequest&quot;</span>

	    site <span class="token operator">=</span> _site <span class="token operator">or</span> request<span class="token operator">.</span>headers<span class="token operator">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;X-Frappe-Site-Name&quot;</span><span class="token punctuation">)</span> <span class="token operator">or</span> get_site_name<span class="token punctuation">(</span>request<span class="token operator">.</span>host<span class="token punctuation">)</span>
	    frappe<span class="token operator">.</span>init<span class="token punctuation">(</span>site<span class="token operator">=</span>site<span class="token punctuation">,</span> sites_path<span class="token operator">=</span>_sites_path<span class="token punctuation">,</span> force<span class="token operator">=</span>True<span class="token punctuation">)</span>
	    make_form_dict<span class="token punctuation">(</span>request<span class="token punctuation">)</span>
	    
	    <span class="token keyword">if</span> request<span class="token operator">.</span>method <span class="token operator">!=</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">:</span>

		       frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>http_request <span class="token operator">=</span> frappe<span class="token operator">.</span>auth<span class="token operator">.</span>HTTPRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
	    
	    
def make_form_dict<span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>
         import json
         request_data <span class="token operator">=</span> request<span class="token operator">.</span>get_data<span class="token punctuation">(</span>as_text<span class="token operator">=</span>True<span class="token punctuation">)</span> <span class="token operator">//</span> sender<span class="token operator">=</span>huachun<span class="token variable">%40123</span><span class="token operator">.</span>com<span class="token variable">&amp;message</span><span class="token operator">=</span>gg<span class="token variable">&amp;cmd</span><span class="token operator">=</span>frappe<span class="token operator">.</span>www<span class="token operator">.</span>contact<span class="token operator">.</span>send_message
         args <span class="token operator">=</span> json<span class="token operator">.</span>loads<span class="token punctuation">(</span>request_data<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token punctuation">{</span><span class="token string">&#39;sender&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;huachun@123.com&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;gg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cmd&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;frappe.www.contact.send_message&#39;</span><span class="token punctuation">}</span>

def serve<span class="token punctuation">(</span>
	port<span class="token operator">=</span><span class="token number">8000</span><span class="token punctuation">,</span> profile<span class="token operator">=</span>False<span class="token punctuation">,</span> no_reload<span class="token operator">=</span>False<span class="token punctuation">,</span> no_threading<span class="token operator">=</span>False<span class="token punctuation">,</span> site<span class="token operator">=</span>None<span class="token punctuation">,</span> sites_path<span class="token operator">=</span><span class="token string">&quot;.&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>frappe.local.http_request = frappe.auth.HTTPRequest()</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>class HTTPRequest<span class="token punctuation">:</span>
    self<span class="token operator">.</span>set_request_ip<span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token comment"># load cookies</span>
		self<span class="token operator">.</span>set_cookies<span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token comment"># login and start/resume user session</span>
		self<span class="token operator">.</span>set_session<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>self.set_session()</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>login_manager <span class="token operator">=</span> LoginManager<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>LoginManager()</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>class LoginManager<span class="token punctuation">:</span>

	__slots__ <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;full_name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user_type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;resume&quot;</span><span class="token punctuation">)</span>

	def __init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
			frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>form_dict<span class="token operator">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;cmd&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;login&quot;</span> <span class="token operator">or</span> frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>request<span class="token operator">.</span>path <span class="token operator">==</span> <span class="token string">&quot;/api/method/login&quot;</span>
		<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">if</span> self<span class="token operator">.</span>login<span class="token punctuation">(</span><span class="token punctuation">)</span> is False<span class="token punctuation">:</span>
	<span class="token keyword">else</span><span class="token punctuation">:</span>
			try<span class="token punctuation">:</span>
			self<span class="token operator">.</span>resume <span class="token operator">=</span> True
			self<span class="token operator">.</span>make_session<span class="token punctuation">(</span>resume<span class="token operator">=</span>True<span class="token punctuation">)</span>
			self<span class="token operator">.</span>get_user_info<span class="token punctuation">(</span><span class="token punctuation">)</span>
			self<span class="token operator">.</span>set_user_info<span class="token punctuation">(</span>resume<span class="token operator">=</span>True<span class="token punctuation">)</span>
	  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>self.login()</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>def login<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		self<span class="token operator">.</span>authenticate<span class="token punctuation">(</span>user<span class="token operator">=</span>user<span class="token punctuation">,</span> pwd<span class="token operator">=</span>pwd<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>frappe/handler</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
def handle<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	cmd <span class="token operator">=</span> frappe<span class="token operator">.</span><span class="token keyword">local</span><span class="token operator">.</span>form_dict<span class="token operator">.</span>cmd
	data <span class="token operator">=</span> None

	<span class="token keyword">if</span> cmd <span class="token operator">!=</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">:</span>

		<span class="token keyword">print</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>  <span class="token operator">//</span>frappe<span class="token operator">.</span>www<span class="token operator">.</span>contact<span class="token operator">.</span>send_message
		data <span class="token operator">=</span> execute_cmd<span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>
	<span class="token keyword">if</span> data is <span class="token operator">not</span> None<span class="token punctuation">:</span>
		<span class="token keyword">if</span> isinstance<span class="token punctuation">(</span>data<span class="token punctuation">,</span> Response<span class="token punctuation">)</span><span class="token punctuation">:</span>
			<span class="token comment"># method returns a response object, pass it on</span>
			<span class="token keyword">return</span> data
		frappe<span class="token operator">.</span>response<span class="token punctuation">[</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调用frappe/www/contact.send_message</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span>allow_guest<span class="token operator">=</span>True<span class="token punctuation">)</span>
<span class="token variable">@rate_limit</span><span class="token punctuation">(</span>limit<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">,</span> seconds<span class="token operator">=</span><span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">)</span>
def send_message<span class="token punctuation">(</span>sender<span class="token punctuation">,</span> message<span class="token punctuation">,</span> subject<span class="token operator">=</span><span class="token string">&quot;Website Query&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    frappe<span class="token operator">.</span>get_doc<span class="token punctuation">(</span>
		dict<span class="token punctuation">(</span>
			doctype<span class="token operator">=</span><span class="token string">&quot;Communication&quot;</span><span class="token punctuation">,</span>
			sender<span class="token operator">=</span>sender<span class="token punctuation">,</span>
			subject<span class="token operator">=</span><span class="token filehandle symbol">_</span><span class="token punctuation">(</span><span class="token string">&quot;New Message from Website Contact Page&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			sent_or_received<span class="token operator">=</span><span class="token string">&quot;Received&quot;</span><span class="token punctuation">,</span>
			content<span class="token operator">=</span>message<span class="token punctuation">,</span>
			status<span class="token operator">=</span><span class="token string">&quot;Open&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token operator">.</span>insert<span class="token punctuation">(</span>ignore_permissions<span class="token operator">=</span>True<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>js与html互操作</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> <span class="token variable">$(</span>frappe<span class="token operator">.</span>render_template<span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">.</span>appendTo<span class="token punctuation">(</span>page<span class="token operator">.</span>body<span class="token operator">.</span>addClass<span class="token punctuation">(</span><span class="token string">&quot;no-border1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>#添加div到html $(&quot;<div class="perm-engine" style="min-height:200px;padding:15px;">sss</div>&quot;).appendTo( page.main );</p><pre><code>#找到html元素,并添加事件

	page.main.find(&quot;.btn1&quot;).click(function(){
		console.log(&quot;click&quot;)
	})
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
8. frappe doctype文档操作 

\`\`\`perl
#请求地址:
http://192.168.50.23/api/method/library_management.library_management.doctype.article.article.test


#1. 文档更新
@frappe.whitelist()
def test():
	doc = frappe.get_doc(&#39;Article&#39;, &#39;bf2207a914&#39;)
	doc.address = &#39;wang&#39;
	doc.save()
	frappe.db.commit()
#1.1 文档更新

@frappe.whitelist()
def test():
	doc = frappe.get_doc(&#39;Article&#39;, &#39;bf2207a914&#39;)
	doc.db_set(&quot;address&quot;,&quot;成都&quot;)
	frappe.db.commit()
	
#1.2 自动提交更新

	@frappe.whitelist()
  def test():
	doc = frappe.get_doc(&#39;Article&#39;, &#39;bf2207a914&#39;)
	doc.db_set(&#39;address&#39;, &quot;xxx&quot;, commit=True)
	
#2. 文档插入

doc = frappe.get_doc({
		&#39;doctype&#39;: &#39;Article&#39;,
		&#39;article_name&#39;: &#39;aaa&#39;
	})
	doc.insert()
	frappe.db.commit()

#3. 文档插入
doc = frappe.new_doc(&#39;Article&#39;)
doc.article_name = &#39;New Task 2&#39;
doc.insert()
frappe.db.commit()

#4. 文档中类的方法调用
#1) Article 类的方法如下
import frappe
from frappe.model.document import Document

class Article(Document):
	def on_insert(self):
		print(&quot;inserting article&quot;)

#任何接口调用上述方法
#http://192.168.50.23/api/method/library_management.library_management.api.test.test
@frappe.whitelist()
def test():
	doc = frappe.get_doc(&#39;Article&#39;, &#39;bf2207a914&#39;)
	doc.run_method(&#39;on_insert&#39;)
	
#验证
import frappe
from frappe.model.document import Document

class Article(Document):
	def before_save(self):
		print(self)
		if self.article_name==&quot;aa&quot;:
			frappe.throw(&quot;con not aa&quot;)
			





	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li><p>single type doctype 默认存储的路径</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>The data in Single DocType is stored in tabSingles <span class="token punctuation">(</span>doctype<span class="token punctuation">,</span> field<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>js 中直接操作数据库(article.js)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>     <span class="token comment">#1.查询article文档,只返回name(id)字段的值</span>
     frappe<span class="token operator">.</span>db<span class="token operator">.</span>get_list<span class="token punctuation">(</span><span class="token string">&#39;Article&#39;</span><span class="token punctuation">)</span><span class="token operator">.</span>then<span class="token punctuation">(</span>doc <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token operator">.</span>log<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

     <span class="token comment">#获取tabSingles表中System Settings的value值</span>
     frappe<span class="token operator">.</span>db<span class="token operator">.</span>get_single_value<span class="token punctuation">(</span><span class="token string">&quot;System Settings&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;otp_issuer_name&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>then<span class="token punctuation">(</span>data <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         console<span class="token operator">.</span>log<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
     <span class="token punctuation">}</span>
     
     <span class="token comment">#获取当前登录的账号</span>
     var info<span class="token operator">=</span>frappe<span class="token operator">.</span>session<span class="token operator">.</span>user
        console<span class="token operator">.</span>log<span class="token punctuation">(</span>info<span class="token punctuation">)</span>
        
        <span class="token comment">#弹出框</span>
     frappe<span class="token operator">.</span>msgprint<span class="token punctuation">(</span><span class="token string">&#39;{{ _(&quot;Both login and password required&quot;) }}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>python 接口返回json</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>frappe<span class="token operator">.</span>response<span class="token punctuation">[</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>doctype数据验证功能(article.py)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#1. 在apps/frappe/frappe/utils/_init_.py 加入验证代码</span>
IP_ADDRESS_PATTERN <span class="token operator">=</span> re<span class="token operator">.</span>compile<span class="token punctuation">(</span>r<span class="token string">&quot;(\\d{1,3}\\.){3}\\d{1,3}&quot;</span><span class="token punctuation">)</span>

def validate_code<span class="token punctuation">(</span>code_str<span class="token punctuation">,</span> throw<span class="token operator">=</span>False<span class="token punctuation">)</span><span class="token punctuation">:</span>
	code <span class="token operator">=</span> code_str<span class="token operator">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
	match<span class="token operator">=</span>IP_ADDRESS_PATTERN<span class="token operator">.</span>match<span class="token punctuation">(</span>code<span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">not</span> match <span class="token operator">and</span> throw<span class="token punctuation">:</span>
		frappe<span class="token operator">.</span>throw<span class="token punctuation">(</span>frappe<span class="token operator">.</span><span class="token filehandle symbol">_</span><span class="token punctuation">(</span><span class="token string">&quot;{0} is not a valid ip address&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>format<span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">,</span> frappe<span class="token operator">.</span>InvalidNameError<span class="token punctuation">)</span>

	<span class="token keyword">return</span> bool<span class="token punctuation">(</span>match<span class="token punctuation">)</span>

<span class="token comment">#2. 在apps/library_management/library_management/library_management/doctype/article/article.py 加入验证代码</span>
class Article<span class="token punctuation">(</span>Document<span class="token punctuation">)</span><span class="token punctuation">:</span>
	def before_save<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
		from frappe<span class="token operator">.</span>utils import validate_email_address

		<span class="token comment"># validate_email_address(self.article_name.strip(), True)</span>
		from frappe<span class="token operator">.</span>utils import validate_code
		validate_code<span class="token punctuation">(</span>self<span class="token operator">.</span>article_name<span class="token punctuation">,</span>True<span class="token punctuation">)</span>

		


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>前端验证功能(article.js)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>frappe<span class="token operator">.</span>ui<span class="token operator">.</span>form<span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;Article&#39;</span><span class="token punctuation">,</span>  <span class="token punctuation">{</span>

    
    article_name<span class="token punctuation">:</span>function<span class="token punctuation">(</span>frm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">//</span>取出填入的值
        console<span class="token operator">.</span>log<span class="token punctuation">(</span>frm<span class="token operator">.</span>doc<span class="token operator">.</span>article_name<span class="token punctuation">)</span>
        var emailRegExp<span class="token operator">=</span><span class="token regex">/^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/</span><span class="token punctuation">;</span>
        <span class="token operator">//</span>填入的值做正则匹配
        var ok<span class="token operator">=</span>emailRegExp<span class="token operator">.</span>test<span class="token punctuation">(</span>frm<span class="token operator">.</span>doc<span class="token operator">.</span>article_name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token operator">//</span>验证是否符合要求

         <span class="token operator">//</span>根据匹配结果查找相应的input输入框<span class="token punctuation">,</span>将input输入框的boder设置为红色
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             var elements <span class="token operator">=</span> document<span class="token operator">.</span>querySelector<span class="token punctuation">(</span>
            <span class="token string">&#39;div.frappe-control[data-fieldname=&quot;article_name&quot;]&#39;</span>
             <span class="token punctuation">)</span><span class="token punctuation">;</span>

             var item<span class="token operator">=</span>elements<span class="token operator">.</span>querySelector<span class="token punctuation">(</span><span class="token string">&quot;.control-input-wrapper .control-input&quot;</span><span class="token punctuation">)</span>
             item<span class="token operator">.</span>style<span class="token operator">.</span>border <span class="token operator">=</span> <span class="token string">&#39;1px solid red&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            var elements <span class="token operator">=</span> document<span class="token operator">.</span>querySelector<span class="token punctuation">(</span>
            <span class="token string">&#39;div.frappe-control[data-fieldname=&quot;article_name&quot;]&#39;</span>
             <span class="token punctuation">)</span><span class="token punctuation">;</span>

             var item<span class="token operator">=</span>elements<span class="token operator">.</span>querySelector<span class="token punctuation">(</span><span class="token string">&quot;.control-input-wrapper .control-input&quot;</span><span class="token punctuation">)</span>
             item<span class="token operator">.</span>style<span class="token operator">.</span>border <span class="token operator">=</span> <span class="token string">&#39;0px solid red&#39;</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    refresh<span class="token punctuation">:</span> function<span class="token punctuation">(</span>frm<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;refresh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>article.js 调用article.py的方法</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#article.py 中定义方法</span>

class Article<span class="token punctuation">(</span>Document<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token variable">@frappe</span><span class="token operator">.</span>whitelist<span class="token punctuation">(</span><span class="token punctuation">)</span>
	def test1<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		bb <span class="token operator">=</span> frappe<span class="token operator">.</span>qb<span class="token operator">.</span>from_<span class="token punctuation">(</span><span class="token string">&quot;Article&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
		frappe<span class="token operator">.</span>response<span class="token punctuation">[</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> bb
		
<span class="token comment">#article.js 调用</span>

frappe<span class="token operator">.</span>ui<span class="token operator">.</span>form<span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;Article&#39;</span><span class="token punctuation">,</span>  <span class="token punctuation">{</span>

    setup<span class="token punctuation">:</span> function <span class="token punctuation">(</span>frm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        frm<span class="token operator">.</span>call<span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span>
			<span class="token operator">.</span>then<span class="token punctuation">(</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token operator">.</span>log<span class="token punctuation">(</span>items<span class="token operator">.</span>message<span class="token punctuation">)</span>
				<span class="token operator">//</span>frappe<span class="token operator">.</span>msgprint<span class="token punctuation">(</span><span class="token string">&#39;{{ _(&quot;Both login and password required&quot;) }}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>data hub 的page加载html</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># gantt.js</span>
frappe<span class="token operator">.</span>pages<span class="token punctuation">[</span><span class="token string">&#39;gantt&#39;</span><span class="token punctuation">]</span><span class="token operator">.</span>on_page_load <span class="token operator">=</span> function<span class="token punctuation">(</span>wrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	var page <span class="token operator">=</span> frappe<span class="token operator">.</span>ui<span class="token operator">.</span>make_app_page<span class="token punctuation">(</span><span class="token punctuation">{</span>
		parent<span class="token punctuation">:</span> wrapper<span class="token punctuation">,</span>
		title<span class="token punctuation">:</span> <span class="token string">&#39;mypage&#39;</span><span class="token punctuation">,</span>
		single_column<span class="token punctuation">:</span> true
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$(</span><span class="token string">&quot;&lt;div class=&#39;flex&#39; style=&#39;min-height: 200px; padding: 15px;background-color: red&#39;&gt;&lt;/div&gt;&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>appendTo<span class="token punctuation">(</span>
	page<span class="token operator">.</span>main<span class="token punctuation">)</span><span class="token punctuation">;</span>

     const container<span class="token operator">=</span><span class="token variable">$(</span><span class="token string">&quot;&lt;div class=&#39;flex&#39; style=&#39;width: 200px; alignment: left; background-color: blue&#39;&gt;sss&lt;/div&gt;&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>appendTo<span class="token punctuation">(</span>
	page<span class="token operator">.</span>main<span class="token operator">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;.flex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token comment">#在创建的div上添加控件</span>
		frappe<span class="token operator">.</span>ui<span class="token operator">.</span>form<span class="token operator">.</span>make_control<span class="token punctuation">(</span><span class="token punctuation">{</span>
    parent<span class="token punctuation">:</span> container<span class="token punctuation">,</span>
    df<span class="token punctuation">:</span> <span class="token punctuation">{</span>
     label<span class="token punctuation">:</span> <span class="token string">&#39;New Password&#39;</span><span class="token punctuation">,</span>
    fieldname<span class="token punctuation">:</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span>
    fieldtype<span class="token punctuation">:</span> <span class="token string">&#39;Password&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    render_input<span class="token punctuation">:</span> true
<span class="token punctuation">}</span><span class="token punctuation">)</span>

	frappe<span class="token operator">.</span>ui<span class="token operator">.</span>form<span class="token operator">.</span>make_control<span class="token punctuation">(</span><span class="token punctuation">{</span>
    parent<span class="token punctuation">:</span> wrapper<span class="token punctuation">,</span>
    df<span class="token punctuation">:</span> <span class="token punctuation">{</span>
   label<span class="token punctuation">:</span> <span class="token string">&#39;Description&#39;</span><span class="token punctuation">,</span>
    fieldname<span class="token punctuation">:</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">,</span>
    fieldtype<span class="token punctuation">:</span> <span class="token string">&#39;Text Editor&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    render_input<span class="token punctuation">:</span> true
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>page js刷新html功能</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#gantt.js</span>
var infoPage<span class="token punctuation">;</span>
frappe<span class="token operator">.</span>pages<span class="token punctuation">[</span><span class="token string">&#39;gantt&#39;</span><span class="token punctuation">]</span><span class="token operator">.</span>on_page_load <span class="token operator">=</span> function<span class="token punctuation">(</span>wrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	var page <span class="token operator">=</span> frappe<span class="token operator">.</span>ui<span class="token operator">.</span>make_app_page<span class="token punctuation">(</span><span class="token punctuation">{</span>
		parent<span class="token punctuation">:</span> wrapper<span class="token punctuation">,</span>
		title<span class="token punctuation">:</span> <span class="token string">&#39;mypage&#39;</span><span class="token punctuation">,</span>
		single_column<span class="token punctuation">:</span> true
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	infoPage <span class="token operator">=</span>page



    <span class="token variable">$(</span><span class="token string">&quot;&lt;div class=&#39;flex&#39; style=&#39;min-height: 200px; padding: 15px;background-color: red&#39;&gt;&lt;/div&gt;&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>appendTo<span class="token punctuation">(</span>
	page<span class="token operator">.</span>main<span class="token punctuation">)</span><span class="token punctuation">;</span>

     const container<span class="token operator">=</span><span class="token variable">$(</span><span class="token string">&quot;&lt;div class=&#39;flex&#39; style=&#39;width: 200px; alignment: left; background-color: blue&#39;&gt;&lt;/div&gt;&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>appendTo<span class="token punctuation">(</span>
	page<span class="token operator">.</span>main<span class="token operator">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;.flex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	 const data<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;liyulong&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;gerui&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
     <span class="token variable">$(</span>frappe<span class="token operator">.</span>render_template<span class="token punctuation">(</span><span class="token string">&quot;gantt&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>data<span class="token punctuation">:</span>data<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">.</span>appendTo<span class="token punctuation">(</span>container<span class="token operator">.</span>addClass<span class="token punctuation">(</span><span class="token string">&quot;dataItem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	 page<span class="token operator">.</span>add_inner_button<span class="token punctuation">(</span><span class="token string">&#39;sendmessage&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> sendMessage<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

function sendMessage<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;send message&quot;</span><span class="token punctuation">)</span>


	var element<span class="token operator">=</span>infoPage<span class="token operator">.</span>main<span class="token operator">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;.dataItem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token operator">.</span>log<span class="token punctuation">(</span>element<span class="token punctuation">)</span>
	<span class="token operator">//</span> element<span class="token operator">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token operator">//</span> element<span class="token operator">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;&lt;div&gt;aaa&lt;/div&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token operator">//</span> element<span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>function<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token operator">//</span>     console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">)</span>
	<span class="token regex">//</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token operator">//</span>element<span class="token operator">.</span>html<span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span>
	<span class="token operator">//</span> element<span class="token operator">.</span>css<span class="token punctuation">(</span><span class="token string">&quot;border&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;6px solid yellow&quot;</span><span class="token punctuation">)</span>



	const data<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;wangwu111&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;maliu&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

		aa<span class="token operator">=</span><span class="token variable">$(</span>frappe<span class="token operator">.</span>render_template<span class="token punctuation">(</span><span class="token string">&quot;gantt&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>data<span class="token punctuation">:</span>data<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	element<span class="token operator">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span>
	element<span class="token operator">.</span>append<span class="token punctuation">(</span>aa<span class="token punctuation">)</span>


<span class="token punctuation">}</span>


<span class="token comment">#gantt.html</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token punctuation">{</span><span class="token operator">%</span> set max_width <span class="token operator">=</span> <span class="token string">&#39;600&#39;</span> <span class="token variable">%}</span><span class="token operator">--</span><span class="token operator">&gt;</span>


<span class="token filehandle symbol">&lt;div&gt;</span>

    <span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">if</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">.</span>name <span class="token variable">%}</span>
    <span class="token operator">&lt;</span>h2 class<span class="token operator">=</span><span class="token string">&quot;section-title&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token filehandle symbol">&lt;/h2&gt;</span>
    <span class="token punctuation">{</span><span class="token operator">%</span> endif <span class="token variable">%}</span>

   <span class="token punctuation">{</span><span class="token operator">%</span> <span class="token keyword">for</span> <span class="token punctuation">(</span>var key in data<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token variable">%}</span>



    <span class="token operator">&lt;</span><span class="token regex">tr&gt;
        &lt;td&gt;&lt;code&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> key <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token filehandle symbol">&lt;/code&gt;</span><span class="token filehandle symbol">&lt;/td&gt;</span>
        <span class="token filehandle symbol">&lt;td&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token filehandle symbol">&lt;/td&gt;</span>
        <span class="token filehandle symbol">&lt;td&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">.</span>age <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token filehandle symbol">&lt;/td&gt;</span>
    <span class="token filehandle symbol">&lt;/tr&gt;</span>
    <span class="token punctuation">{</span><span class="token operator">%</span> <span class="token punctuation">}</span> <span class="token variable">%}</span>

<span class="token filehandle symbol">&lt;/div&gt;</span>





</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改doctype 页,添加单选按钮,实现单选按钮的级联</p><p>supper.js</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>frappe<span class="token operator">.</span>ui<span class="token operator">.</span>form<span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&quot;Supplier&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>


	geo<span class="token punctuation">:</span>function <span class="token punctuation">(</span>frm<span class="token punctuation">)</span><span class="token punctuation">{</span>

		<span class="token keyword">if</span><span class="token punctuation">(</span>frm<span class="token operator">.</span>doc<span class="token operator">.</span>geo<span class="token operator">==</span><span class="token string">&quot;北京&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>

			frm<span class="token operator">.</span>set_value<span class="token punctuation">(</span><span class="token string">&#39;zone&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;昌平&#39;</span><span class="token punctuation">)</span>
		    frm<span class="token operator">.</span>set_df_property<span class="token punctuation">(</span><span class="token string">&#39;zone&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;options&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;昌平&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;顺义&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;平谷&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">if</span> <span class="token punctuation">(</span>frm<span class="token operator">.</span>doc<span class="token operator">.</span>geo<span class="token operator">==</span><span class="token string">&quot;上海&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			frm<span class="token operator">.</span>set_value<span class="token punctuation">(</span><span class="token string">&#39;zone&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;苹果&#39;</span><span class="token punctuation">)</span>
		    frm<span class="token operator">.</span>set_df_property<span class="token punctuation">(</span><span class="token string">&#39;zone&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;options&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;苹果&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;香蕉&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;橘子&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token punctuation">}</span>



	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改apps/erpnext/erpnext/controll/buying_controller.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># liyulong by 2023.8.18</span>
	def set_total_in_words<span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
		from frappe<span class="token operator">.</span>utils import money_in_words

		<span class="token keyword">if</span> self<span class="token operator">.</span>meta<span class="token operator">.</span>get_field<span class="token punctuation">(</span><span class="token string">&quot;base_in_words&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
			<span class="token keyword">if</span> self<span class="token operator">.</span>meta<span class="token operator">.</span>get_field<span class="token punctuation">(</span><span class="token string">&quot;base_rounded_total&quot;</span><span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token operator">not</span> self<span class="token operator">.</span>is_rounded_total_disabled<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
				amount <span class="token operator">=</span> abs<span class="token punctuation">(</span>float<span class="token punctuation">(</span>self<span class="token operator">.</span>base_rounded_total<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">else</span><span class="token punctuation">:</span>
				grand_total<span class="token operator">=</span>float<span class="token punctuation">(</span>self<span class="token operator">.</span>base_grand_total<span class="token punctuation">)</span>
				amount <span class="token operator">=</span> abs<span class="token punctuation">(</span>grand_total<span class="token punctuation">)</span>
			self<span class="token operator">.</span>base_in_words <span class="token operator">=</span> money_in_words<span class="token punctuation">(</span>amount<span class="token punctuation">,</span> self<span class="token operator">.</span>company_currency<span class="token punctuation">)</span>

		<span class="token keyword">if</span> self<span class="token operator">.</span>meta<span class="token operator">.</span>get_field<span class="token punctuation">(</span><span class="token string">&quot;in_words&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
			<span class="token keyword">if</span> self<span class="token operator">.</span>meta<span class="token operator">.</span>get_field<span class="token punctuation">(</span><span class="token string">&quot;rounded_total&quot;</span><span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token operator">not</span> self<span class="token operator">.</span>is_rounded_total_disabled<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
				amount <span class="token operator">=</span> abs<span class="token punctuation">(</span>float<span class="token punctuation">(</span>self<span class="token operator">.</span>rounded_total<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">else</span><span class="token punctuation">:</span>
				amount <span class="token operator">=</span> abs<span class="token punctuation">(</span>float<span class="token punctuation">(</span>self<span class="token operator">.</span>grand_total<span class="token punctuation">)</span><span class="token punctuation">)</span>

			self<span class="token operator">.</span>in_words <span class="token operator">=</span> money_in_words<span class="token punctuation">(</span>amount<span class="token punctuation">,</span> self<span class="token operator">.</span>currency<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>erpnext sass操作</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#备份demo 站点数据</span>
 bench <span class="token operator">--</span>site demo backup
 Config  <span class="token punctuation">:</span> <span class="token operator">.</span><span class="token operator">/</span>demo<span class="token operator">/</span>private<span class="token operator">/</span>backups<span class="token operator">/</span><span class="token number">20230817_163310</span><span class="token operator">-</span>demo<span class="token operator">-</span>site_config_backup<span class="token operator">.</span>json <span class="token number">225</span><span class="token operator">.</span>0B
Database<span class="token punctuation">:</span> <span class="token operator">.</span><span class="token operator">/</span>demo<span class="token operator">/</span>private<span class="token operator">/</span>backups<span class="token operator">/</span><span class="token number">20230817_163310</span><span class="token operator">-</span>demo<span class="token operator">-</span>database<span class="token operator">.</span>sql<span class="token operator">.</span>gz         <span class="token number">152</span><span class="token operator">.</span>5MiB

<span class="token comment">#恢复数据到datahub 站点中123</span>

bench <span class="token operator">--</span>site datahub <span class="token operator">--</span>force restore <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>frappe<span class="token operator">-</span>bench<span class="token operator">/</span>sites<span class="token operator">/</span>demo<span class="token operator">/</span>private<span class="token operator">/</span>backups<span class="token operator">/</span><span class="token number">20230817_163310</span><span class="token operator">-</span>demo<span class="token operator">-</span>database<span class="token operator">.</span>sql<span class="token operator">.</span>gz

<span class="token comment">#更新站点配置</span>
<span class="token comment">#在目标站点的工作目录中，编辑 sites/datahub/site_config.json 文件，确保数据库连接等配置是正确的</span>
<span class="token punctuation">{</span>
 <span class="token string">&quot;db_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;_9eff1d3a996284a5&quot;</span><span class="token punctuation">,</span>
 <span class="token string">&quot;db_password&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;uAaUGsuhwHhPGRTM&quot;</span><span class="token punctuation">,</span>
 <span class="token string">&quot;db_type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;mariadb&quot;</span><span class="token punctuation">,</span>
 <span class="token string">&quot;user_type_doctype_limit&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;employee_self_service&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#执行迁移命令,</span>
<span class="token comment">#在目标站点的工作目录中，运行以下命令以确保数据库结构与代码一致：</span>
bench <span class="token operator">--</span>site datahub migrate

bench <span class="token operator">--</span>site datahub clear<span class="token operator">-</span>cache

<span class="token comment">#验证访问</span>
http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.194</span><span class="token operator">/</span>app<span class="token operator">/</span>selling

<span class="token comment">#删除站点操作</span>
bench drop<span class="token operator">-</span>site test1
 
bench new<span class="token operator">-</span>site demo2 <span class="token operator">--</span>admin<span class="token operator">-</span>password <span class="token number">123</span> <span class="token operator">--</span>db<span class="token operator">-</span>root<span class="token operator">-</span>password <span class="token number">123</span> <span class="token operator">--</span>db<span class="token operator">-</span>name demo2  <span class="token operator">--</span>install<span class="token operator">-</span>app payments <span class="token operator">--</span>install<span class="token operator">-</span>app erpnext

<span class="token comment">#注意/opt/module/frappe-bench/sites/demo/private/backups/20230818_181903-demo-database.sql.gz是否存在</span>
bench <span class="token operator">--</span>site demo2 <span class="token operator">--</span>force restore <span class="token regex">/opt/modu</span><span class="token operator">le</span><span class="token operator">/</span>frappe<span class="token operator">-</span>bench<span class="token operator">/</span>sites<span class="token operator">/</span>demo<span class="token operator">/</span>private<span class="token operator">/</span>backups<span class="token operator">/</span><span class="token number">20230825_104327</span><span class="token operator">-</span>demo<span class="token operator">-</span>database<span class="token operator">.</span>sql<span class="token operator">.</span>gz <span class="token operator">--</span>db<span class="token operator">-</span>root<span class="token operator">-</span>password <span class="token number">123</span>


<span class="token comment">#重启服务</span>
sudo bench setup production frappe 

<span class="token comment">#查询站点的应用</span>
bench <span class="token operator">--</span>site test1 list<span class="token operator">-</span>apps <span class="token operator">--</span>format json
   
   
<span class="token comment">#nginx 配置的路径</span>
<span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>conf<span class="token operator">.</span>d<span class="token operator">/</span>frappe<span class="token operator">-</span>bench<span class="token operator">.</span>conf


<span class="token comment">#sudo bench setup production frappe 自动启动命令脚本</span>
<span class="token comment">#test.sh脚本内容如下:</span>

<span class="token comment">#!/bin/bash</span>

<span class="token comment"># 文件名用于保存输出内容</span>
output_file<span class="token operator">=</span><span class="token string">&quot;output.log&quot;</span>

<span class="token comment"># 执行 bench setup production frappe 命令，并自动交互输入，同时将输出信息重定向到文件</span>
echo <span class="token operator">-e</span> <span class="token string">&quot;123\\ny\\ny\\ny&quot;</span> <span class="token operator">|</span> sudo <span class="token operator">-S</span> bench setup production frappe <span class="token number">2</span><span class="token operator">&gt;</span><span class="token variable">&amp;1</span> <span class="token operator">|</span> tee <span class="token operator">-</span>a <span class="token string">&quot;$output_file&quot;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改库存--物料中采购中的采购配比 相加必须等于100%</p><p>/Users/li/Desktop/frappe35/sites/assets/frappe/js/frappe/form/save.js</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>var check_mandatory <span class="token operator">=</span> function <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

		var has_errors <span class="token operator">=</span> false<span class="token punctuation">;</span>
		frm<span class="token operator">.</span>scroll_set <span class="token operator">=</span> false<span class="token punctuation">;</span>

		<span class="token operator">//</span>liyulong modify by <span class="token v-string string">2023.9.12</span>
		<span class="token operator">//</span>修改库存<span class="token operator">--</span>物料中采购中的采购配比 相加必须等于<span class="token number">100</span><span class="token operator">%</span>
		var isSupplierItem<span class="token operator">=</span>frm<span class="token operator">.</span>doc<span class="token operator">.</span>hasOwnProperty<span class="token punctuation">(</span><span class="token string">&quot;supplier_items&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>isSupplierItem<span class="token punctuation">)</span><span class="token punctuation">{</span>

			var suppliers<span class="token operator">=</span>frm<span class="token operator">.</span>doc<span class="token operator">.</span>supplier_items
			var sum_rate<span class="token operator">=</span><span class="token number">0</span>

				suppliers<span class="token operator">.</span>forEach<span class="token punctuation">(</span>function <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token operator">.</span>log<span class="token punctuation">(</span>item<span class="token operator">.</span>purchase_ratio<span class="token punctuation">)</span>
				sum_rate <span class="token operator">+=</span> item<span class="token operator">.</span>purchase_ratio
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>sum_rate <span class="token operator">!=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

				frappe<span class="token operator">.</span>msgprint<span class="token punctuation">(</span><span class="token punctuation">{</span>
					message<span class="token punctuation">:</span> <span class="token string">&quot;采购配比和不是100%&quot;</span><span class="token punctuation">,</span>
					indicator<span class="token punctuation">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
					title<span class="token punctuation">:</span> <span class="token string">&quot;输入参数值错误&quot;</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token keyword">return</span> false
			<span class="token punctuation">}</span>

		<span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li><li></li><li></li><li></li><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
8. 总结
测试中ssss


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,82),o=[t];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","ERPnext V14 安装教程.html.vue"]]);export{u as default};
