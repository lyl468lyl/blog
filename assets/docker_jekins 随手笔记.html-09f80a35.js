import{_ as p,r as o,o as t,c as r,a as s,b as n,d as i,e as a}from"./app-8afc1b14.js";const l={},c=a(`<h1 id="docker-jekins-随手笔记" tabindex="-1"><a class="header-anchor" href="#docker-jekins-随手笔记" aria-hidden="true">#</a> docker+jekins 随手笔记</h1><p>1.安装docker</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>$ uname <span class="token operator">-r</span>  <span class="token comment">#通过 uname -r 命令查看你当前的内核版本</span>

$ sudo yum remove docker  docker<span class="token operator">-</span>common docker<span class="token operator">-</span>selinux docker<span class="token operator">-</span>engine <span class="token comment">#卸载旧版本(如果安装过旧版本的话)</span>

<span class="token comment">#安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的</span>
$ sudo yum install <span class="token operator">-</span>y yum<span class="token operator">-</span>utils device<span class="token operator">-</span>mapper<span class="token operator">-</span>persistent<span class="token operator">-</span>data lvm2 
<span class="token comment">#设置yum源</span>
$ sudo yum<span class="token operator">-</span>config<span class="token operator">-</span>manager <span class="token operator">--</span>add<span class="token operator">-</span>repo https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/download.docker.com/linu</span><span class="token operator">x</span><span class="token operator">/</span>centos<span class="token operator">/</span>docker<span class="token operator">-</span>ce<span class="token operator">.</span>repo
<span class="token comment">#可以查看所有仓库中所有docker版本，并选择特定版本安装</span>
$ yum list docker<span class="token operator">-</span>ce <span class="token operator">--</span>showduplicates <span class="token operator">|</span> sort <span class="token operator">-r</span>

<span class="token comment">#安装docker</span>
$ sudo yum install docker<span class="token operator">-</span>ce
<span class="token comment">#启动并加入开机启动</span>
$ sudo systemctl start docker
$ sudo systemctl enable docker
<span class="token comment">#验证安装是否成功</span>
$ docker version

<span class="token comment">#如果安装不成功,卸载旧的包,再次安装</span>
$ sudo yum erase docker<span class="token operator">-</span>common<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token v-string string">1.12.6</span><span class="token operator">-</span><span class="token number">68</span><span class="token operator">.</span>gitec8512b<span class="token operator">.</span>el7<span class="token operator">.</span>centos<span class="token operator">.</span>x86_64
$ sudo yum install docker<span class="token operator">-</span>ce

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启docker2375端口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /usr/lib/systemd/system/docker.service
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H fd:// --containerd=/run/containerd/containerd.sock
systemctl daemon-reload // 1，加载docker守护线程
systemctl restart docker // 2，重启docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.docker 安装nginx</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#第一步 pull nginx</span>
$ docker pull nginx
<span class="token comment">#创建本地文件夹,与容器产生映射</span>

mkdir <span class="token operator">-p</span> <span class="token regex">/data/nginx</span>
mkdir <span class="token operator">-p</span> <span class="token regex">/data/ngin</span><span class="token operator">x</span><span class="token operator">/</span>www
mkdir <span class="token operator">-p</span> <span class="token regex">/data/ngin</span><span class="token operator">x</span><span class="token operator">/</span>conf
mkdir <span class="token operator">-p</span> <span class="token regex">/data/ngin</span><span class="token operator">x</span><span class="token operator">/</span>logs

<span class="token comment">#创建nginx配置文件. 创建nginx.conf 放到/data/nginx/conf 目录下</span>

user  nginx<span class="token punctuation">;</span>
worker_processes  auto<span class="token punctuation">;</span>

error_log  <span class="token operator">/</span>var<span class="token regex">/log/ngin</span><span class="token operator">x</span><span class="token operator">/</span>error<span class="token operator">.</span>log notice<span class="token punctuation">;</span>
pid        <span class="token operator">/</span>var<span class="token regex">/run/nginx</span><span class="token operator">.</span>pid<span class="token punctuation">;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       <span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>mime<span class="token operator">.</span>types<span class="token punctuation">;</span>
    default_type  application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>

    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  <span class="token operator">/</span>var<span class="token regex">/log/ngin</span><span class="token operator">x</span><span class="token operator">/</span>access<span class="token operator">.</span>log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

   
    
        location <span class="token operator">/</span> <span class="token punctuation">{</span>
            root   <span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>html<span class="token punctuation">;</span>
            index  index<span class="token operator">.</span>html index<span class="token operator">.</span>htm<span class="token punctuation">;</span>
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span><span class="token operator">/</span> <span class="token operator">/</span>index<span class="token operator">.</span>html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  <span class="token operator">/</span>50x<span class="token operator">.</span>html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> <span class="token operator">/</span>50x<span class="token operator">.</span>html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># proxy the PHP scripts to Apache listening on 127.0.0.1:80</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    proxy_pass   http://127.0.0.1;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ \\.php$ {</span>
        <span class="token comment">#    root           html;</span>
        <span class="token comment">#    fastcgi_pass   127.0.0.1:9000;</span>
        <span class="token comment">#    fastcgi_index  index.php;</span>
        <span class="token comment">#    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span>
        <span class="token comment">#    include        fastcgi_params;</span>
        <span class="token comment">#}</span>

        <span class="token comment"># deny access to .htaccess files, if Apache&#39;s document root</span>
        <span class="token comment"># concurs with nginx&#39;s one</span>
        <span class="token comment">#</span>
        <span class="token comment">#location ~ /\\.ht {</span>
        <span class="token comment">#    deny  all;</span>
        <span class="token comment">#}</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

<span class="token comment">#将前端代码放到 /data/nginx/www中</span>

<span class="token comment">#可以用如下命令将docker容器的文件拷贝到本地主机,67e为容器的id</span>
docker cp 67e<span class="token punctuation">:</span><span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>nginx<span class="token operator">.</span>conf <span class="token regex">/data/ngin</span><span class="token operator">x</span><span class="token regex">/conf/</span>

<span class="token comment">#启动容器</span>
docker run <span class="token operator">--</span>name nginx <span class="token operator">-p</span> <span class="token number">80</span><span class="token punctuation">:</span><span class="token number">80</span>  <span class="token operator">-</span>v <span class="token regex">/data/ngin</span><span class="token operator">x</span><span class="token regex">/conf/nginx</span><span class="token operator">.</span>conf<span class="token punctuation">:</span><span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>nginx<span class="token operator">.</span>conf <span class="token operator">-</span>v <span class="token regex">/data/ngin</span><span class="token operator">x</span><span class="token operator">/</span>www<span class="token operator">/</span>dist<span class="token operator">/</span><span class="token punctuation">:</span><span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token regex">/html/</span> <span class="token operator">-</span>v <span class="token regex">/data/ngin</span><span class="token operator">x</span><span class="token operator">/</span>logs<span class="token operator">/</span><span class="token punctuation">:</span><span class="token operator">/</span>var<span class="token regex">/log/ngin</span><span class="token operator">x</span><span class="token operator">/</span> <span class="token operator">-d</span> nginx
<span class="token comment">#停止容器：</span>
docker stop 67e
<span class="token comment">#移除容器：</span>
docker rm 67e

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jenkins 安装和相关配置</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#官网</span>
https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>tuna<span class="token operator">.</span>tsinghua<span class="token operator">.</span>edu<span class="token operator">.</span>cn<span class="token operator">/</span>jenkins<span class="token regex">/redhat/</span>
<span class="token comment">#下载jenkins</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># yum -y install daemonize</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># yum -y install epel-release</span>



<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># wget https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat/jenkins-2.327-1.1.noarch.rpm --no-check-certificate</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># rpm -ivh jenkins-2.327-1.1.noarch.rpm </span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># vi /etc/sysconfig/jenkins</span>
找到JENKINS_PORT<span class="token operator">=</span><span class="token string">&quot;8080&quot;</span>这行，
修改为自定义的端口号
JENKINS_PORT<span class="token operator">=</span><span class="token string">&quot;9090&quot;</span>

<span class="token comment">#修改配置</span>
<span class="token variable">$JENKINS_USER</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span>
保存
<span class="token punctuation">:</span>wq

<span class="token comment">#修改配置文件：vi /etc/init.d/jenkins</span>
这里请核实自己的java环境 java home
candidates<span class="token operator">=</span>&quot;
<span class="token operator">/</span>opt<span class="token operator">/</span>software<span class="token operator">/</span>jdk<span class="token v-string string">1.8.0</span>_311<span class="token operator">/</span>bin<span class="token operator">/</span>java
<span class="token operator">/</span>etc<span class="token operator">/</span>alternatives<span class="token operator">/</span>java
<span class="token operator">/</span>usr<span class="token operator">/</span>lib<span class="token operator">/</span>jvm<span class="token operator">/</span>java<span class="token operator">-</span><span class="token v-string string">1.6.0</span><span class="token operator">/</span>bin<span class="token operator">/</span>java


<span class="token comment">#启动</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># systemctl daemon-reload</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># service jenkins start</span>

<span class="token comment">#设置开机自启</span>
systemctl enable jenkins

<span class="token comment">#登录平台</span>
浏览器输入：http<span class="token punctuation">:</span><span class="token operator">//</span>ip<span class="token punctuation">:</span>port

<span class="token comment">#默认密码页面会提示在如下文件中 初始化密码</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># cat /var/lib/jenkins/secrets/initialAdminPassword</span>


<span class="token comment">#jenkins 卸载</span>
rpm <span class="token operator">-e</span> jenkins
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># find / -iname jenkins |xargs -n 1000 rm -rf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装配置git</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>yum install git

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>系统管理 -&gt; Global Tool Configuration -&gt; Git</p><p>![image-20220421105532016](/Users/li/Library/Application Support/typora-user-images/image-20220421105532016.png)</p><p>jdk安装</p><p>![image-20220421105948590](/Users/li/Library/Application Support/typora-user-images/image-20220421105948590.png)</p><p>maven安装</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#maven 下载</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev maven<span class="token operator">-</span><span class="token v-string string">3.6.3</span><span class="token punctuation">]</span><span class="token comment"># wget https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz  --no-check-certificate</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev maven<span class="token operator">-</span><span class="token v-string string">3.6.3</span><span class="token punctuation">]</span><span class="token comment"># tar -zxvf apache-maven-3.6.3-bin.tar.gz </span>
<span class="token comment">#设置环境变量</span>
export JAVA_HOME<span class="token operator">=</span><span class="token operator">/</span>opt<span class="token operator">/</span>software<span class="token operator">/</span>jdk<span class="token v-string string">1.8.0</span>_311
export PATH<span class="token operator">=</span><span class="token variable">$JAVA_HOME</span><span class="token operator">/</span>bin<span class="token punctuation">:</span><span class="token variable">$PATH</span>
export MAVEN_HOME<span class="token operator">=</span><span class="token operator">/</span>opt<span class="token operator">/</span>software<span class="token operator">/</span>maven<span class="token operator">-</span><span class="token v-string string">3.6.3</span>
export PATH<span class="token operator">=</span><span class="token variable">$MAVEN_HOME</span><span class="token operator">/</span>bin<span class="token punctuation">:</span><span class="token variable">$PATH</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev maven<span class="token operator">-</span><span class="token v-string string">3.6.3</span><span class="token punctuation">]</span><span class="token comment"># source /etc/profile</span>

<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev maven<span class="token operator">-</span><span class="token v-string string">3.6.3</span><span class="token punctuation">]</span><span class="token comment"># mvn -v</span>

<span class="token comment">#maven加速</span>

编辑修改 <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>apache<span class="token operator">-</span>maven<span class="token operator">-</span><span class="token v-string string">3.6.3</span><span class="token operator">/</span>conf<span class="token operator">/</span>settings<span class="token operator">.</span>xml
在 <span class="token filehandle symbol">&lt;mirrors&gt;</span><span class="token filehandle symbol">&lt;/mirrors&gt;</span> 标签对⾥添加如下内容即可：
<span class="token filehandle symbol">&lt;mirror&gt;</span>
  <span class="token filehandle symbol">&lt;id&gt;</span>aliyunmaven<span class="token filehandle symbol">&lt;/id&gt;</span>
  <span class="token filehandle symbol">&lt;mirrorOf&gt;</span><span class="token operator">*</span><span class="token filehandle symbol">&lt;/mirrorOf&gt;</span>
  <span class="token filehandle symbol">&lt;name&gt;</span>阿里云公共仓库<span class="token filehandle symbol">&lt;/name&gt;</span>
  <span class="token filehandle symbol">&lt;url&gt;</span>https<span class="token punctuation">:</span><span class="token operator">//</span>maven<span class="token operator">.</span>aliyun<span class="token operator">.</span>com<span class="token operator">/</span>repository<span class="token operator">/</span>public<span class="token filehandle symbol">&lt;/url&gt;</span>
<span class="token filehandle symbol">&lt;/mirror&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20220421130505989](/Users/li/Library/Application Support/typora-user-images/image-20220421130505989.png)</p><p>插件安装:</p><p>安装gitlab插件</p><p>plugin manager---&gt;gitlab</p><p>安装nodejs</p><p>plugin manager---&gt;nodejs</p><p>安装maven 插件</p>`,24),d={href:"https://wiki.jenkins.io/display/JENKINS/Maven+Project+Plugin",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>jenkins服务器与gitlab ssh登录</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev conf<span class="token punctuation">]</span><span class="token comment"># ssh-keygen -t rsa -C &quot;420949705@qq.com&quot;</span>
拷贝id_rsa<span class="token operator">.</span>pub到gitlab配置ssh<span class="token operator">-</span>key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20220421133753521](/Users/li/Library/Application Support/typora-user-images/image-20220421133753521.png)</p><p>#验证</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev software<span class="token punctuation">]</span><span class="token comment"># git clone git@139.219.8.206:szapi/javaweb.git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置nodejs</p><p>gloabalToolConfiguration</p><p>![image-20220421140046238](/Users/li/Library/Application Support/typora-user-images/image-20220421140046238.png)</p><p>全局配置私钥</p><p>globalcredentials---&gt;add credentials</p><p>![image-20220421141225652](/Users/li/Library/Application Support/typora-user-images/image-20220421141225652.png)</p><p>![image-20220421141259495](/Users/li/Library/Application Support/typora-user-images/image-20220421141259495.png)</p><p>安装publish over ssh插件</p><p>![image-20220421144449025](/Users/li/Library/Application Support/typora-user-images/image-20220421144449025.png)</p><p>配置publish over ssh服务器</p><p>系统配置</p><p>![image-20220421150327244](/Users/li/Library/Application Support/typora-user-images/image-20220421150327244.png)</p><p>![image-20220421170425650](/Users/li/Library/Application Support/typora-user-images/image-20220421170425650.png)</p><p>创建项目</p><p>create item</p><p>选择maven项目</p><p>![image-20220421151202511](/Users/li/Library/Application Support/typora-user-images/image-20220421151202511.png)</p><p>![image-20220421170548431](/Users/li/Library/Application Support/typora-user-images/image-20220421170548431.png)</p><p>![image-20220421170605660](/Users/li/Library/Application Support/typora-user-images/image-20220421170605660.png)</p><p>![image-20220421170629218](/Users/li/Library/Application Support/typora-user-images/image-20220421170629218.png)</p><p>![image-20220421170645620](/Users/li/Library/Application Support/typora-user-images/image-20220421170645620.png)</p><p>Exec command也可以插入脚本</p><p>![image-20221102153549127](/Users/li/Library/Application Support/typora-user-images/image-20221102153549127.png)</p><p>SSH Server是在上面步骤中配置的要连接的远程服务器。</p><p>Source files 设置要传输的Jenkins服务器文件路径。全路径=项目的构建路径+Source files。 /var/lib/jenkins/workspace/blog/blog/target/blog-1.0.0.jar = /var/lib/jenkins/workspace/blog/ + blog/target/blog-1.0.0.jar</p><p>jekins 前端代码</p><p>![image-20220422121139310](/Users/li/Library/Application Support/typora-user-images/image-20220422121139310.png)</p><p>![image-20220422121201788](/Users/li/Library/Application Support/typora-user-images/image-20220422121201788.png)</p><p>![image-20220422121247160](/Users/li/Library/Application Support/typora-user-images/image-20220422121247160.png)</p><p>![image-20220422121217293](/Users/li/Library/Application Support/typora-user-images/image-20220422121217293.png)</p><p>![image-20220422140603156](/Users/li/Library/Application Support/typora-user-images/image-20220422140603156.png)</p><p>vue 不要用下面的功能,下面的功能部署java时用</p><p>![image-20220422140718919](/Users/li/Library/Application Support/typora-user-images/image-20220422140718919.png)</p><p>springboot dockerfile</p><p>![image-20220321134030456](/Users/li/Library/Application Support/typora-user-images/image-20220321134030456.png)</p><p>![image-20220321181823741](/Users/li/Library/Application Support/typora-user-images/image-20220321181823741.png)</p><p>创建dockerfile</p><p>![image-20220321150619907](/Users/li/Library/Application Support/typora-user-images/image-20220321150619907.png)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 基础镜像使用java</span>
FROM java<span class="token punctuation">:</span><span class="token number">8</span>
<span class="token comment"># 作者MAINTAINER liyulong</span>
<span class="token comment"># VOLUME 指定临时文件目录为/tmp，在主机/data/springboot/tmp目录下创建了一个临时文件并链接到容器的/tmp</span>
VOLUME <span class="token operator">/</span>tmp <span class="token operator">/</span>usr<span class="token operator">/</span>tmp
<span class="token comment"># 将jar包添加到容器中</span>
ADD JavaWeb_Admin_Pro<span class="token operator">.</span>jar <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>springboot<span class="token operator">/</span>JavaWeb_Admin_Pro<span class="token operator">.</span>jar
ADD JavaWeb_Api_Pro<span class="token operator">.</span>jar <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>springboot<span class="token operator">/</span>JavaWeb_Api_Pro<span class="token operator">.</span>jar
ADD javaweb<span class="token operator">-</span>common<span class="token operator">-</span><span class="token v-string string">0.0.1</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">.</span>jar <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>springboot<span class="token operator">/</span>javaweb<span class="token operator">-</span>common<span class="token operator">-</span><span class="token v-string string">0.0.1</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">.</span>jar
ADD javaweb<span class="token operator">-</span>generator<span class="token operator">-</span><span class="token v-string string">0.0.1</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">.</span>jar <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>springboot<span class="token operator">/</span>javaweb<span class="token operator">-</span>generator<span class="token operator">-</span><span class="token v-string string">0.0.1</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">.</span>jar
ADD javaweb<span class="token operator">-</span>system<span class="token operator">-</span><span class="token v-string string">0.0.1</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">.</span>jar <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>springboot<span class="token operator">/</span>javaweb<span class="token operator">-</span>system<span class="token operator">-</span><span class="token v-string string">0.0.1</span><span class="token operator">-</span>SNAPSHOT<span class="token operator">.</span>jar
<span class="token comment">#切换目录</span>
WORKDIR <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>springboot
<span class="token comment"># 修改jar文件的访问时间和修改时间为当前时间,不改变文件的内容</span>
RUN bash <span class="token operator">-c</span> <span class="token string">&#39;touch JavaWeb_Admin_Pro.jar&#39;</span>
RUN bash <span class="token operator">-c</span> <span class="token string">&#39;touch JavaWeb_Api_Pro.jar&#39;</span>
RUN bash <span class="token operator">-c</span> <span class="token string">&#39;touch javaweb-common-0.0.1-SNAPSHOT.jar&#39;</span>
RUN bash <span class="token operator">-c</span> <span class="token string">&#39;touch javaweb-generator-0.0.1-SNAPSHOT.jar&#39;</span>
RUN bash <span class="token operator">-c</span> <span class="token string">&#39;touch javaweb-system-0.0.1-SNAPSHOT.jar&#39;</span>

ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-server&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-Xms128m&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-Xmx128m&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-Dspring.profiles.active=dev&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-jar&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;JavaWeb_Admin_Pro.jar&quot;</span><span class="token punctuation">]</span>


<span class="token comment">#暴露9031端口作为微服务</span>
EXPOSE <span class="token number">9031</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20220321151836423](/Users/li/Library/Application Support/typora-user-images/image-20220321151836423.png)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> 将jar打包为镜像（docker build <span class="token operator">-t</span> sps<span class="token operator">-</span>docker <span class="token operator">.</span>）
 
 <span class="token comment">#Dockerfile 和jar包在同一个目录中</span>
 <span class="token punctuation">[</span>root<span class="token variable">@aps</span> jardata<span class="token punctuation">]</span><span class="token comment"># docker build -t spsdocker .</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">[</span>root<span class="token variable">@aps</span> jardata<span class="token punctuation">]</span><span class="token comment"># docker images;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行镜像</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">[</span>root<span class="token variable">@aps</span> jardata<span class="token punctuation">]</span><span class="token comment"># docker run --name sps-docker -p 86:9031 -d sps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#进入镜像</span>
<span class="token punctuation">[</span>root<span class="token variable">@aps</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment"># docker exec -it a60fccc47a36 /bin/bash</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker可视化工具: porter安装:</p><p>https://www.cnblogs.com/davidgu/p/14464906.html</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token number">1</span><span class="token punctuation">)</span> 下载镜像

docker search portainer

<span class="token comment"># 我们这里安装第一个</span>
docker pull portainer<span class="token operator">/</span>portainer

<span class="token number">2</span><span class="token punctuation">)</span>运行
docker run <span class="token operator">-d</span> <span class="token operator">-p</span> <span class="token number">9000</span><span class="token punctuation">:</span><span class="token number">9000</span> <span class="token operator">--</span>restart<span class="token operator">=</span>always <span class="token operator">-</span>v <span class="token operator">/</span>var<span class="token operator">/</span>run<span class="token operator">/</span>docker<span class="token operator">.</span>sock<span class="token punctuation">:</span><span class="token operator">/</span>var<span class="token operator">/</span>run<span class="token operator">/</span>docker<span class="token operator">.</span>sock <span class="token operator">--</span>name prtainer<span class="token operator">-</span>test portainer<span class="token operator">/</span>portainer

<span class="token number">3</span><span class="token punctuation">)</span>登录
http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/42.159.81.133:9000/</span>
<span class="token number">4</span><span class="token punctuation">)</span>首次登陆需要注册用户，给admin用户设置密码
<span class="token number">5</span><span class="token punctuation">)</span>单机直接选<span class="token keyword">local</span>指定docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://blog.csdn.net/zgfyxc/article/details/84904920</p><p>https://www.cnblogs.com/beyang/p/11416646.html</p><p>创建docker-compose文件</p><p>![image-20220422143704696](/Users/li/Library/Application Support/typora-user-images/image-20220422143704696.png)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>version<span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>
services<span class="token punctuation">:</span>
  web<span class="token punctuation">:</span>
    build<span class="token punctuation">:</span> <span class="token operator">/</span>data<span class="token operator">/</span>springboot<span class="token operator">/</span>jardata
    ports<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token number">88</span><span class="token punctuation">:</span><span class="token number">9031</span>
    networks<span class="token punctuation">:</span>
      <span class="token operator">-</span> back<span class="token operator">-</span>tier
    volumes<span class="token punctuation">:</span>
      <span class="token operator">-</span> <span class="token operator">/</span>data<span class="token operator">/</span>springboot<span class="token operator">/</span>jardata<span class="token operator">/</span>uploads<span class="token punctuation">:</span><span class="token operator">/</span>usr<span class="token regex">/local/uploads</span>
 
networks<span class="token punctuation">:</span>
  front<span class="token operator">-</span>tier<span class="token punctuation">:</span>
    driver<span class="token punctuation">:</span> bridge
  back<span class="token operator">-</span>tier<span class="token punctuation">:</span>
    driver<span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#安装docker-compose</span>
<span class="token punctuation">[</span>root<span class="token variable">@sps</span><span class="token operator">-</span>dev jardata<span class="token punctuation">]</span><span class="token comment"># sudo curl -L https://github.com/docker/compose/releases/download/1.23.0-rc3/docker-compose-\`uname -s\`-\`uname -m\` -o /usr/local/bin/docker-compose</span>
<span class="token comment">#设置文件权限</span>
sudo chmod <span class="token operator">+</span><span class="token operator">x</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>bin<span class="token operator">/</span>docker<span class="token operator">-</span>compose
查看版本 <span class="token punctuation">:</span>
docker<span class="token operator">-</span>compose version

docker<span class="token operator">-</span>compose up <span class="token operator">-d</span>
<span class="token comment">#启动Web服务</span>
docker<span class="token operator">-</span>compose up  <span class="token operator">-d</span> web
<span class="token comment">#停止web服务</span>
docker<span class="token operator">-</span>compose stop web

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>git 相关</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sps<span class="token operator">-</span>vue前端源码

The repository <span class="token keyword">for</span> this project is empty
You can get started by cloning the repository <span class="token operator">or</span> start adding files to it with one of the following options<span class="token operator">.</span>

Command line instructions
You can also upload existing files from your computer using the instructions below<span class="token operator">.</span>


Git global setup
git config <span class="token operator">--</span>global user<span class="token operator">.</span>name <span class="token string">&quot;李玉龙&quot;</span>
git config <span class="token operator">--</span>global user<span class="token operator">.</span>email <span class="token string">&quot;liyulong@szwanggu.com&quot;</span>

Create a new repository
git clone http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">139.219.8.206</span><span class="token punctuation">:</span><span class="token number">8081</span><span class="token operator">/</span>szapi<span class="token operator">/</span>javavue<span class="token operator">.</span>git
cd javavue
git <span class="token keyword">switch</span> <span class="token operator">-c</span> main
touch README<span class="token operator">.</span>md
git add README<span class="token operator">.</span>md
git commit <span class="token operator">-</span><span class="token regex">m &quot;add README&quot;</span>

Push an existing folder
cd existing_folder
git init <span class="token operator">--</span>initial<span class="token operator">-</span>branch<span class="token operator">=</span>main
git remote add origin http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">139.219.8.206</span><span class="token punctuation">:</span><span class="token number">8081</span><span class="token operator">/</span>szapi<span class="token operator">/</span>javavue<span class="token operator">.</span>git
git add <span class="token operator">.</span>
git commit <span class="token operator">-</span><span class="token regex">m &quot;Initial commit&quot;</span>

Push an existing Git repository
cd existing_repo
git remote rename origin old<span class="token operator">-</span>origin
git remote add origin http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">139.219.8.206</span><span class="token punctuation">:</span><span class="token number">8081</span><span class="token operator">/</span>szapi<span class="token operator">/</span>javavue<span class="token operator">.</span>git

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jekins 部署vue</p><p>cmd excute</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
npm install 
rm <span class="token operator">-</span>rf <span class="token operator">.</span><span class="token regex">/dist/</span><span class="token operator">*</span>
npm run build
rm <span class="token operator">-</span>rf <span class="token operator">/</span>www<span class="token operator">/</span>web<span class="token regex">/site/</span><span class="token operator">*</span>
cp <span class="token operator">-</span>rf <span class="token operator">.</span><span class="token regex">/dist/</span><span class="token operator">*</span> <span class="token operator">/</span>www<span class="token operator">/</span>web<span class="token operator">/</span>site
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
npm install
rm <span class="token operator">-</span>rf <span class="token operator">.</span><span class="token regex">/dist/</span><span class="token operator">*</span>
npm run build
rm <span class="token operator">-</span>rf <span class="token regex">/data/ngin</span><span class="token operator">x</span><span class="token operator">/</span>www<span class="token regex">/dist/</span><span class="token operator">*</span>
cp <span class="token operator">-</span>rf <span class="token operator">.</span><span class="token regex">/dist/</span><span class="token operator">*</span> <span class="token regex">/data/ngin</span><span class="token operator">x</span><span class="token operator">/</span>www<span class="token operator">/</span>dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,66);function v(m,k){const e=o("ExternalLinkIcon");return t(),r("div",null,[c,s("p",null,[s("a",d,[n("安装Maven Integration plugin"),i(e)]),n(" 插件")]),u])}const g=p(l,[["render",v],["__file","docker_jekins 随手笔记.html.vue"]]);export{g as default};
