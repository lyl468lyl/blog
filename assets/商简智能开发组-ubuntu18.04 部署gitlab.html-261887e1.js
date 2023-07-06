import{_ as l,r as i,o as p,c as r,a as n,b as s,d as e,e as t}from"./app-d13f43c9.js";const o={},c=n("h1",{id:"ubuntu18-04-安装gitlab",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ubuntu18-04-安装gitlab","aria-hidden":"true"},"#"),s(" ubuntu18.04 安装gitlab")],-1),d=n("h2",{id:"安装依赖",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装依赖","aria-hidden":"true"},"#"),s(" 安装依赖")],-1),u={href:"https://so.csdn.net/so/search?q=gitlab&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo apt update
sudo apt install ca<span class="token operator">-</span>certificates curl openssh<span class="token operator">-</span>server postfix

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于<code>postfix</code>的安装，请在出现提示时选择“ <strong>Internet站点”</strong>。在下一个屏幕上，输入服务器的域名以配置系统发送邮件的方式</p><h2 id="安装gitlab" tabindex="-1"><a class="header-anchor" href="#安装gitlab" aria-hidden="true">#</a> 安装gitlab</h2>`,3),b={href:"https://so.csdn.net/so/search?q=ubuntu&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lsb_release -a

#显示如下信息
LSB Version:	core-9.20170808ubuntu1-noarch:security-9.20170808ubuntu1-noarch
Distributor ID:	Ubuntu
Description:	Ubuntu 18.04.5 LTS
Release:	18.04
Codename:	bionic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看gcc和linux的版本</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /proc/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下载并安装gitlab" tabindex="-1"><a class="header-anchor" href="#下载并安装gitlab" aria-hidden="true">#</a> 下载并安装gitlab</h3><p>通过安装wget，下载指定的gitlab文件后，手动安装。</p><ul><li>安装wget</li></ul><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo apt<span class="token operator">-</span>get install wget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>下载gitlab-ce</li></ul><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>实例如下，下载的是<span class="token number">20.04</span>版本的
wget <span class="token operator">-</span>P <span class="token operator">/</span>Downloads https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>tuna<span class="token operator">.</span>tsinghua<span class="token operator">.</span>edu<span class="token operator">.</span>cn<span class="token operator">/</span>gitlab<span class="token operator">-</span>ce<span class="token operator">/</span>ubuntu<span class="token operator">/</span>pool<span class="token operator">/</span>focal<span class="token operator">/</span>main<span class="token operator">/</span>g<span class="token operator">/</span>gitlab<span class="token operator">-</span>ce<span class="token operator">/</span>gitlab<span class="token operator">-</span>ce_<span class="token v-string string">13.10.0</span><span class="token operator">-</span>ce<span class="token operator">.</span>0_amd64<span class="token operator">.</span>deb

实例如下，下载的是<span class="token number">18.4</span>版本的

wget https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>tuna<span class="token operator">.</span>tsinghua<span class="token operator">.</span>edu<span class="token operator">.</span>cn<span class="token operator">/</span>gitlab<span class="token operator">-</span>ce<span class="token operator">/</span>ubuntu<span class="token operator">/</span>pool<span class="token operator">/</span>bionic<span class="token operator">/</span>main<span class="token operator">/</span>g<span class="token operator">/</span>gitlab<span class="token operator">-</span>ce<span class="token operator">/</span>gitlab<span class="token operator">-</span>ce_<span class="token v-string string">14.8.5</span><span class="token operator">-</span>ce<span class="token operator">.</span>0_amd64<span class="token operator">.</span>deb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装gitlab</li></ul><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>dpkg说明：
dpkg <span class="token operator">-</span>L 查看软件的状态，如：dpkg <span class="token operator">-</span>L gitlab<span class="token operator">-</span>ce
dpkg <span class="token operator">-</span>P 卸载软件（软件名，而不是安装包名）
dpkg <span class="token operator">--</span>remove 删除安装包，不删除配置
dpkg <span class="token operator">--</span>purge 删除安装包和配置文件
<span class="token operator">*</span>注意
gitlab 使用的是PostgreSQL数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装软件指令如下</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo dpkg <span class="token operator">-</span>i gitlab<span class="token operator">-</span>ce_<span class="token v-string string">14.8.5</span><span class="token operator">-</span>ce<span class="token operator">.</span>0_amd64<span class="token operator">.</span>deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改配置文件</p><p>在gitlab配置文件 /etc/gitlab/gitlab.rb 中修改外部url，改为自己的ip地址或者域名</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo vim <span class="token operator">/</span>etc<span class="token operator">/</span>gitlab<span class="token operator">/</span>gitlab<span class="token operator">.</span>rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改内容如下:</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>external_url <span class="token string">&#39;http://192.168.50.230&#39;</span>
puma<span class="token punctuation">[</span><span class="token string">&#39;port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8050</span>
nginx<span class="token punctuation">[</span><span class="token string">&#39;listen_addresses&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span>
nginx<span class="token punctuation">[</span><span class="token string">&#39;listen_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8060</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更改代码存储的路径</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> git_data_dirs<span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token string">&quot;default&quot;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token string">&quot;path&quot;</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;/opt/data/git-data&quot;</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新载入配置</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo gitlab<span class="token operator">-</span>ctl reconfigure
执行完这个命令后会创建<span class="token operator">/</span>var<span class="token operator">/</span>opt<span class="token operator">/</span>gitlab文件夹<span class="token punctuation">,</span>并创建下面配置文件

卸载了GitLab，重装了GitLab之后，运行 sudo gitlab<span class="token operator">-</span>ctl reconfigure命令的时候，卡死在
<span class="token operator">*</span> ruby_block<span class="token punctuation">[</span>supervise_redis_sleep<span class="token punctuation">]</span> action run 
需要执行 如下命令
<span class="token punctuation">[</span>root<span class="token variable">@localhost</span> <span class="token operator">/</span><span class="token punctuation">]</span><span class="token comment"># sudo systemctl restart gitlab-runsvdir</span>
<span class="token punctuation">[</span>root<span class="token variable">@localhost</span> <span class="token operator">/</span><span class="token punctuation">]</span><span class="token comment"># </span>
<span class="token punctuation">[</span>root<span class="token variable">@localhost</span> <span class="token operator">/</span><span class="token punctuation">]</span><span class="token comment"># sudo gitlab-ctl reconfigure</span>
<span class="token punctuation">[</span>root<span class="token variable">@localhost</span> <span class="token operator">/</span><span class="token punctuation">]</span><span class="token comment"># </span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vim /var/opt/gitlab/gitlab-rails/etc/gitlab.yml</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>  gitlab<span class="token punctuation">:</span>
    <span class="token comment">## Web server settings (note: host is the FQDN, do not include http://)</span>
    host<span class="token punctuation">:</span> <span class="token v-string string">192.168.50.230</span>
    port<span class="token punctuation">:</span> <span class="token number">8060</span>
    https<span class="token punctuation">:</span> false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vim /var/opt/gitlab/gitlab-rails/etc/puma.rb</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>bind <span class="token string">&#39;tcp://127.0.0.1:8050&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vim /var/opt/gitlab/nginx/conf/gitlab-http.conf</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
server <span class="token punctuation">{</span>
  listen <span class="token operator">*</span><span class="token punctuation">:</span><span class="token number">8060</span><span class="token punctuation">;</span>


  server_name <span class="token v-string string">192.168.50.230</span><span class="token punctuation">;</span>
  server_tokens off<span class="token punctuation">;</span> <span class="token comment">## Don</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 启动gitlab，指行如下指令</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo gitlab<span class="token operator">-</span>ctl start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
如果重新执行gitlab<span class="token operator">-</span>ctl reconfigure情况<span class="token punctuation">:</span>
puma<span class="token operator">.</span>rb文件在你执行gitlab<span class="token operator">-</span>ctl reconfigure 的时候会被重置，所以需要再做修改，
最后执行
gitlab<span class="token operator">-</span>ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关指令的说明:</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo gitlab<span class="token operator">-</span>ctl reconfigure	重新加载配置，每次修改<span class="token operator">/</span>etc<span class="token operator">/</span>gitlab<span class="token operator">/</span>gitlab<span class="token operator">.</span>rb文件之后执行
sudo gitlab<span class="token operator">-</span>ctl status	查看 GitLab 状态
sudo gitlab<span class="token operator">-</span>ctl start	启动 GitLab
sudo gitlab<span class="token operator">-</span>ctl stop	停止 GitLab
sudo gitlab<span class="token operator">-</span>ctl restart	重启 GitLab
sudo gitlab<span class="token operator">-</span>ctl tail	查看所有日志
sudo gitlab<span class="token operator">-</span>ctl tail nginx<span class="token operator">/</span>gitlab_acces<span class="token operator">.</span>log	查看 nginx 访问日志
sudo gitlab<span class="token operator">-</span>ctl tail postgresql	查看 postgresql 日志
apt<span class="token operator">-</span>get <span class="token operator">-f</span> install  更新安装

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.230</span><span class="token punctuation">:</span><span class="token number">8060</span><span class="token operator">/</span>users<span class="token operator">/</span>sign_in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询首次登录的密码</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>cat <span class="token operator">/</span>etc<span class="token operator">/</span>gitlab<span class="token operator">/</span>initial_root_password

Password<span class="token punctuation">:</span> QQSAyQySeyCxRGcqXd52V0nwMrYtn<span class="token v-string string">v9</span>tyH2yaCfvU0c<span class="token operator">=</span>

用户名为root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改root密码:</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>gitlab<span class="token operator">-</span>rails console production
user <span class="token operator">=</span> User<span class="token operator">.</span>where<span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">.</span>first <span class="token comment">#查看id为1的账号</span>
或者 user <span class="token operator">=</span> User<span class="token operator">.</span>where<span class="token punctuation">(</span>name<span class="token punctuation">:</span><span class="token string">&#39;&#39;</span>root&quot;<span class="token punctuation">)</span><span class="token operator">.</span>first

user<span class="token operator">.</span>password<span class="token operator">=</span>‘<span class="token number">123456789</span>’ <span class="token comment">#修改密码为12345678</span>
user<span class="token operator">.</span>password_confirmation<span class="token operator">=</span>‘<span class="token number">123456789</span>’ <span class="token comment">#确认密码</span>
user<span class="token operator">.</span>save<span class="token operator">!</span> <span class="token comment">#保存</span>
quit <span class="token comment">#退出‘’</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gitlab 错误日志的查看</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>gitlab<span class="token operator">-</span>ctl tail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重新安装</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>卸载gitlab

sudo apt<span class="token operator">-</span>get remove <span class="token operator">--</span>purge gitlab<span class="token operator">-</span>ce
rm <span class="token operator">-</span>rf <span class="token operator">/</span>var<span class="token operator">/</span>opt<span class="token operator">/</span>gitlab

杀死所有进程
pkill <span class="token operator">-f</span> gitlab

<span class="token operator">-</span> 删除路径

rm <span class="token operator">-</span>rf <span class="token operator">/</span>opt<span class="token operator">/</span>gitlab

rm <span class="token operator">-</span>rf <span class="token operator">/</span>etc<span class="token operator">/</span>gitlab

rm <span class="token operator">-</span>rf <span class="token operator">/</span>var<span class="token operator">/</span>opt<span class="token operator">/</span>gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="gitlab-数据迁移" tabindex="-1"><a class="header-anchor" href="#gitlab-数据迁移" aria-hidden="true">#</a> gitlab 数据迁移</h5><p>查看gitlab 版本</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>cat <span class="token operator">/</span>opt<span class="token operator">/</span>gitlab<span class="token operator">/</span>embedded<span class="token operator">/</span>service<span class="token operator">/</span>gitlab<span class="token operator">-</span>rails<span class="token operator">/</span>VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意事项:</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>两台服务器的Gitlab版本必须是统一的，如有不统一，请先进行升级统一
如需升级可在数据迁移完成之后进行gitlab版本升级。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="备份数据-将旧服务器上的数据打包" tabindex="-1"><a class="header-anchor" href="#备份数据-将旧服务器上的数据打包" aria-hidden="true">#</a> 备份数据，将旧服务器上的数据打包</h5><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>gitlab<span class="token operator">-</span>rake gitlab<span class="token punctuation">:</span>backup<span class="token punctuation">:</span>create RAILS_ENV<span class="token operator">=</span>production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>备份后的文件一般是位于/var/opt/gitlab/backups下, 自动生成文件名文件名如 1614232417_2021_02_25_12.8.7_gitlab_backup.tar</p><h5 id="数据迁移-将备份数据拷贝至新服务器-已经搭建好giltab同版本环境" tabindex="-1"><a class="header-anchor" href="#数据迁移-将备份数据拷贝至新服务器-已经搭建好giltab同版本环境" aria-hidden="true">#</a> 数据迁移，将备份数据拷贝至新服务器（已经搭建好giltab同版本环境）</h5><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> scp 1681874921_2023_04_19_<span class="token v-string string">14.8.5</span>_gitlab_backup<span class="token operator">.</span>tar sj<span class="token variable">@192</span><span class="token operator">.</span><span class="token v-string string">168.50.60</span><span class="token punctuation">:</span><span class="token operator">/</span>var<span class="token operator">/</span>opt<span class="token operator">/</span>gitlab<span class="token operator">/</span>backups
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在新的服务器中恢复命令</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>chown <span class="token operator">-R</span> git<span class="token operator">.</span>git <span class="token operator">/</span>var<span class="token operator">/</span>opt<span class="token operator">/</span>gitlab<span class="token regex">/backups/</span>

gitlab<span class="token operator">-</span>rake gitlab<span class="token punctuation">:</span>backup<span class="token punctuation">:</span>restore RAILS_ENV<span class="token operator">=</span>production BACKUP<span class="token operator">=</span>1681874921_2023_04_19_<span class="token v-string string">14.8.5</span>
注意：这里没有后面的_gitlab_backup<span class="token operator">.</span>tar名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git使用说明</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>第一步：下载安装git，在官网下载安装即可

第二步：在左面空白处点击鼠标右键，点击Git Bash Here，出现对话框
第三步：配置本地仓库的账号邮箱git

git config <span class="token operator">--</span>global user<span class="token operator">.</span>name  <span class="token string">&quot;liyulong&quot;</span>

git config <span class="token operator">--</span>global user<span class="token operator">.</span>email <span class="token string">&quot;liyulong@szwanggu.com&quot;</span>

第四步：使用ssh密钥登陆。
用下面指令生成ssh<span class="token punctuation">(</span>执行命令后一路回车<span class="token punctuation">)</span>
$ ssh<span class="token operator">-</span>keygen <span class="token operator">-t</span> rsa <span class="token operator">-C</span> <span class="token string">&quot;liyulong@szwanggu.com&quot;</span>

根据生产命令提示<span class="token punctuation">,</span>找到公钥的生成路径
如<span class="token punctuation">:</span>vi <span class="token operator">/</span>Users<span class="token regex">/li/</span><span class="token operator">.</span>ssh<span class="token operator">/</span>id_rsa<span class="token operator">.</span>pub

第五步 使用账户登录gitlab
登录url<span class="token punctuation">:</span>  http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/192.168.50.230:8060/</span>
登录系统后<span class="token punctuation">,</span>点击头像的下拉菜单<span class="token punctuation">,</span>选择偏好设置<span class="token punctuation">,</span>找到ssh秘钥菜单
将第四步的公钥内容<span class="token punctuation">,</span>粘贴到<span class="token string">&quot;秘钥&quot;</span>框中<span class="token punctuation">,</span>如图<span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20221115103540380](/Users/li/Library/Application Support/typora-user-images/image-20221115103540380.png)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第六步 clone 代码测试,是否能够顺利下载代码
git clone http://192.168.50.230:8060/gengda/sps-vue.git

第七步: 提交本地仓库
1)git add .  或者 git add xxx
  git add xxx ：提交指定文件；  git add . 提交全部
2)git commit -m &quot;提交代码&quot;   推送修改到本地git库中
  git commit -m &quot;添加xx文件&quot;
3)连接远程仓库(前端/后端/算法都有对应响应的gitlab库),以前端为例:
  git remote add origin http://192.168.50.230:8060/gengda/sps-vue.git
注意:如果origin 已经存在可以用如下命令删除
  git remote rm origin
4)提交到远程仓库
  1)创建分支
    1.列出所有分支
    git branch -a
    2.创建dev分支
    git branch dev
    
    3.切换分支
    git checkout dev
5)提交代码到远程的(master或dev)分支
git push origin dev
      

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59);function g(k,h){const a=i("ExternalLinkIcon");return p(),r("div",null,[c,d,n("p",null,[s("安装"),n("a",u,[s("gitlab"),e(a)]),s("前需要对其依赖包进行安装，确保符合安装gitlab的条件")]),v,n("p",null,[s("安装gitlab前需要确定"),n("a",b,[s("ubuntu"),e(a)]),s("的版本代号，才能选择对应的gitlab版本。")]),m])}const x=l(o,[["render",g],["__file","商简智能开发组-ubuntu18.04 部署gitlab.html.vue"]]);export{x as default};
