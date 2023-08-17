import{_ as n,o as s,c as a,e}from"./app-c74164ac.js";const p={},o=e(`<p>date: 2013-7-19</p><p>category: sass</p><p>tag:</p><ul><li>sass</li></ul><h1 id="sass-aps-开发文档" tabindex="-1"><a class="header-anchor" href="#sass-aps-开发文档" aria-hidden="true">#</a> sass(aps)开发文档</h1><h4 id="前提准备" tabindex="-1"><a class="header-anchor" href="#前提准备" aria-hidden="true">#</a> 前提准备</h4><p>参考:https://www.yuque.com/leifengyang/oncloud/ctiwgo#gSYVF</p><ol><li>创建aws 云主机</li></ol><p>2)设置主机密码登录</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 编辑ssh 配置文件</span>
vi <span class="token operator">/</span>etc<span class="token operator">/</span>ssh<span class="token operator">/</span>sshd_config

<span class="token comment">#PasswordAuthentication 将no改成yes</span>
PasswordAuthentication yes

<span class="token comment">#重启ssh</span>
sudo service ssh restart

<span class="token comment">#设置用户名和密码</span>
adduser aps
密码<span class="token punctuation">:</span>zxc<span class="token filehandle symbol">&lt;&gt;</span><span class="token operator">?</span><span class="token number">123</span>

sudo passwd aps

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一-安装docker-compose-最新版-192-168-50-230" tabindex="-1"><a class="header-anchor" href="#一-安装docker-compose-最新版-192-168-50-230" aria-hidden="true">#</a> 一 .安装docker-compose 最新版(192.168.50.230)</h4><ol><li><p>compse稳定版</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sudo curl <span class="token operator">-</span>L <span class="token string">&quot;https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)&quot;</span> <span class="token operator">-o</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>bin<span class="token operator">/</span>docker<span class="token operator">-</span>compose

sudo chmod <span class="token operator">+</span><span class="token operator">x</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>bin<span class="token operator">/</span>docker<span class="token operator">-</span>compose

docker<span class="token operator">-</span>compose <span class="token operator">--</span>version

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装erpnext</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#下载</span>
git clone https<span class="token punctuation">:</span><span class="token operator">//</span>gitee<span class="token operator">.</span>com<span class="token operator">/</span>yuzelin<span class="token operator">/</span>erpnext_oob_docker <span class="token operator">&amp;&amp;</span> cd erpnext_oob_docker

cd <span class="token operator">/</span>opt<span class="token operator">/</span>software<span class="token operator">/</span>frappe_docker
<span class="token comment">#安装</span>
docker<span class="token operator">-</span>compose <span class="token operator">--</span>project<span class="token operator">-</span>name erpnext_oob <span class="token operator">-f</span> pwd<span class="token operator">.</span>yml up <span class="token operator">-d</span>

<span class="token comment">#访问</span>
http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.230</span><span class="token operator">/</span>login<span class="token comment">#login</span>

<span class="token comment">#用户名和密码</span>
<span class="token comment">#administrator,密码admin登录系统</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>报错</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># docker login -u &quot;\${DOCKER_USER}&quot; -p &quot;\${DOCKER_PASS}&quot; &quot;\${DOCKER_URL}&quot;</span>
<span class="token key atrule">error getting credentials - err</span><span class="token punctuation">:</span> exit status 1<span class="token punctuation">,</span> <span class="token key atrule">out</span><span class="token punctuation">:</span> \`Cannot autolaunch D<span class="token punctuation">-</span>Bus without X11 $DISPLAY\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解决:</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>rm <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>docker<span class="token operator">-</span>credential<span class="token operator">-</span>secretservice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>停止所有的docker</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>docker<span class="token operator">-</span>compose <span class="token operator">--</span>project<span class="token operator">-</span>name erpnext_oob <span class="token operator">-f</span> pwd<span class="token operator">.</span>yml down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看compose中yaml文件中创建的卷标</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> root<span class="token variable">@shangjian</span><span class="token punctuation">:</span><span class="token operator">~</span><span class="token comment"># docker volume ls |grep db-data</span>
<span class="token punctuation">(</span>base<span class="token punctuation">)</span> root<span class="token variable">@shangjian</span><span class="token punctuation">:</span><span class="token operator">~</span><span class="token comment"># docker volume inspect erpnext_oob_db-data</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;CreatedAt&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2023-08-15T14:01:17+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Driver&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Labels&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;com.docker.compose.project&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;erpnext_oob&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;com.docker.compose.version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2.20.2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;com.docker.compose.volume&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;db-data&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Mountpoint&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;/var/lib/docker/volumes/erpnext_oob_db-data/_data&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;erpnext_oob_db-data&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Options&quot;</span><span class="token punctuation">:</span> null<span class="token punctuation">,</span>
        <span class="token string">&quot;Scope&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;local&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>docker 查看内部占用的端口</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>docker exec <span class="token operator">-</span>it 23db451681a3 ss <span class="token operator">-</span>tuln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>ubuntu20.04 部署k8s</p><ol><li>环境初始化</li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 关闭SWAP</span>
swapoff <span class="token operator">-</span>a
rm <span class="token operator">-f</span> <span class="token operator">/</span>swap<span class="token operator">.</span>img
vim <span class="token operator">/</span>etc<span class="token operator">/</span>fstab
<span class="token comment"># /swap.img                         注释掉</span>

<span class="token comment"># 开启IP转发</span>
vim <span class="token operator">/</span>etc<span class="token operator">/</span>sysctl<span class="token operator">.</span>conf
net<span class="token operator">.</span>ip<span class="token v-string string">v4</span><span class="token operator">.</span>ip_forward<span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># 查看状态</span>
sysctl <span class="token operator">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>安装docker</li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#安装依赖</span>
sudo apt<span class="token operator">-</span>get update
sudo apt<span class="token operator">-</span>get <span class="token operator">-</span>y install apt<span class="token operator">-</span>transport<span class="token operator">-</span>https ca<span class="token operator">-</span>certificates curl software<span class="token operator">-</span>properties<span class="token operator">-</span>common
<span class="token comment">#安装GPG证书</span>
curl <span class="token operator">-</span>fsSL https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>aliyun<span class="token operator">.</span>com<span class="token regex">/docker-ce/linu</span><span class="token operator">x</span><span class="token regex">/ubuntu/gpg</span> <span class="token operator">|</span> sudo apt<span class="token operator">-</span>key add <span class="token operator">-</span>

<span class="token comment">#写入软件源信息</span>
sudo add<span class="token operator">-</span>apt<span class="token operator">-</span>repository <span class="token string">&quot;deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable&quot;</span>

<span class="token comment">#更新安装docker</span>
sudo apt<span class="token operator">-</span>get <span class="token operator">-</span>y update
apt install <span class="token operator">-</span>y docker<span class="token operator">-</span>ce

<span class="token comment">#安装docker-compose</span>
apt install <span class="token operator">-</span>y docker<span class="token operator">-</span>compose

<span class="token comment">#安装docker开机启动</span>
systemctl enable docker

<span class="token comment">#配置镜像</span>

$ cat <span class="token operator">&gt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>docker<span class="token operator">/</span>daemon<span class="token operator">.</span>json <span class="token operator">&lt;&lt;</span> EOF
<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://b9pmyelo.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
EOF

<span class="token comment">#查看docker 版本</span>
docker <span class="token operator">--</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装k8s</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#添加证书</span>
curl https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>aliyun<span class="token operator">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>apt<span class="token operator">/</span>doc<span class="token operator">/</span>apt<span class="token operator">-</span>key<span class="token operator">.</span>gpg <span class="token operator">|</span> apt<span class="token operator">-</span>key add <span class="token operator">-</span> 

<span class="token comment">#添加apt源</span>
cat <span class="token operator">&lt;&lt;</span>EOF <span class="token operator">&gt;</span><span class="token operator">/</span>etc<span class="token operator">/</span>apt<span class="token operator">/</span>sources<span class="token operator">.</span>list<span class="token operator">.</span>d<span class="token operator">/</span>kubernetes<span class="token operator">.</span>list
deb https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token operator">.</span>aliyun<span class="token operator">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>apt<span class="token operator">/</span> kubernetes<span class="token operator">-</span>xenial main
EOF

apt<span class="token operator">-</span>get update

<span class="token comment">#查看可安装版本</span>
apt<span class="token operator">-</span>cache madison kubelet

<span class="token comment">#安装指定的版本</span>
apt<span class="token operator">-</span>get install <span class="token operator">-</span>y kubelet<span class="token operator">=</span><span class="token v-string string">1.20.9</span><span class="token operator">-</span><span class="token number">00</span> kubeadm<span class="token operator">=</span><span class="token v-string string">1.20.9</span><span class="token operator">-</span><span class="token number">00</span> kubectl<span class="token operator">=</span><span class="token v-string string">1.20.9</span><span class="token operator">-</span><span class="token number">00</span>

<span class="token comment">#设置开机自启动</span>
sudo systemctl enable kubelet <span class="token operator">&amp;&amp;</span> sudo systemctl start kubelet

<span class="token comment">#查看所需的镜像</span>
kubeadm config images list <span class="token operator">--</span>kubernetes<span class="token operator">-</span>version<span class="token operator">=</span><span class="token v-string string">v1.20.9</span>

k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>apiserver<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>controller<span class="token operator">-</span>manager<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>scheduler<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>proxy<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>pause<span class="token punctuation">:</span><span class="token number">3.2</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>etcd<span class="token punctuation">:</span><span class="token v-string string">3.4.13</span><span class="token operator">-</span><span class="token number">0</span>
k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>coredns<span class="token punctuation">:</span><span class="token v-string string">1.7.0</span>

<span class="token comment">#从新地址下载镜像(将上面的地址换成下面的)</span>

docker pull registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>kube<span class="token operator">-</span>apiserver<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
docker pull registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>kube<span class="token operator">-</span>controller<span class="token operator">-</span>manager<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
docker pull registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>kube<span class="token operator">-</span>scheduler<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
docker pull registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>kube<span class="token operator">-</span>proxy<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
docker pull registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>pause<span class="token punctuation">:</span><span class="token number">3.2</span>
docker pull registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>etcd<span class="token punctuation">:</span><span class="token v-string string">3.4.13</span><span class="token operator">-</span><span class="token number">0</span>
docker pull registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>coredns<span class="token punctuation">:</span><span class="token v-string string">1.7.0</span>

<span class="token comment">#为镜像重新打Tag(重新命名上面拉取的镜像)</span>
docker tag registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>kube<span class="token operator">-</span>apiserver<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span> k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>apiserver<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
docker tag registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>kube<span class="token operator">-</span>controller<span class="token operator">-</span>manager<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span> k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>controller<span class="token operator">-</span>manager<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
docker tag registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>kube<span class="token operator">-</span>scheduler<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span> k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>scheduler<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
docker tag registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>kube<span class="token operator">-</span>proxy<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span> k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>kube<span class="token operator">-</span>proxy<span class="token punctuation">:</span><span class="token v-string string">v1.20.9</span>
docker tag registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>pause<span class="token punctuation">:</span><span class="token number">3.2</span> k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>pause<span class="token punctuation">:</span><span class="token number">3.2</span>
docker tag registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>etcd<span class="token punctuation">:</span><span class="token v-string string">3.4.13</span><span class="token operator">-</span><span class="token number">0</span> k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>etcd<span class="token punctuation">:</span><span class="token v-string string">3.4.13</span><span class="token operator">-</span><span class="token number">0</span>
docker tag registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>google_containers<span class="token operator">/</span>coredns<span class="token punctuation">:</span><span class="token v-string string">1.7.0</span> k8s<span class="token operator">.</span>gcr<span class="token operator">.</span>io<span class="token operator">/</span>coredns<span class="token punctuation">:</span><span class="token v-string string">1.7.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>主节点初始化</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#所有机器添加master域名映射,以下需要修改为自己的</span>
echo <span class="token string">&quot;172.31.75.125  cluster-endpoint&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>hosts

kubeadm init <span class="token operator">\\</span>
<span class="token operator">--</span>apiserver<span class="token operator">-</span>advertise<span class="token operator">-</span>address<span class="token operator">=</span><span class="token v-string string">172.31.75.125</span> <span class="token operator">\\</span>
<span class="token operator">--</span>control<span class="token operator">-</span>plane<span class="token operator">-</span>endpoint<span class="token operator">=</span>cluster<span class="token operator">-</span>endpoint<span class="token operator">\\</span>
<span class="token operator">--</span>service<span class="token operator">-</span>cidr<span class="token operator">=</span><span class="token v-string string">10.96.0.0</span><span class="token operator">/</span><span class="token number">16</span> <span class="token operator">\\</span>
<span class="token operator">--</span>pod<span class="token operator">-</span>network<span class="token operator">-</span>cidr<span class="token operator">=</span><span class="token v-string string">192.168.0.0</span><span class="token operator">/</span><span class="token number">16</span>


kubeadm init <span class="token operator">--</span>kubernetes<span class="token operator">-</span>version<span class="token operator">=</span><span class="token v-string string">v1.20.9</span> <span class="token operator">--</span>pod<span class="token operator">-</span>network<span class="token operator">-</span>cidr<span class="token operator">=</span><span class="token v-string string">192.168.0.0</span><span class="token operator">/</span><span class="token number">16</span> <span class="token operator">--</span>service<span class="token operator">-</span>cidr<span class="token operator">=</span><span class="token v-string string">10.96.0.0</span><span class="token operator">/</span><span class="token number">16</span> <span class="token operator">--</span>ignore<span class="token operator">-</span>preflight<span class="token operator">-</span>errors<span class="token operator">=</span>Swap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完主节点配置出现如下提示:</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>Your Kubernetes control<span class="token operator">-</span>plane has initialized successfully<span class="token operator">!</span>             <span class="token comment"># 安装成功的提示</span>

To start using your cluster<span class="token punctuation">,</span> you need to run the following as a regular user<span class="token punctuation">:</span>

  mkdir <span class="token operator">-p</span> <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token operator">.</span>kube
  sudo cp <span class="token operator">-</span>i <span class="token operator">/</span>etc<span class="token regex">/kubernetes/admin</span><span class="token operator">.</span>conf <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token operator">.</span>kube<span class="token operator">/</span>config
  sudo chown <span class="token variable">$(</span>id <span class="token operator">-u</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token variable">$(</span>id <span class="token operator">-g</span><span class="token punctuation">)</span> <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token operator">.</span>kube<span class="token operator">/</span>config

You should now deploy a pod network to the cluster<span class="token operator">.</span>
Run <span class="token string">&quot;kubectl apply -f [podnetwork].yaml&quot;</span> with one of the options listed at<span class="token punctuation">:</span>
  https<span class="token punctuation">:</span><span class="token operator">//</span>kubernetes<span class="token operator">.</span>io<span class="token operator">/</span>docs<span class="token operator">/</span>concepts<span class="token operator">/</span>cluster<span class="token operator">-</span>administration<span class="token regex">/addons/</span>

Then you can join <span class="token keyword">any</span> number of worker nodes by running the following on each as root<span class="token punctuation">:</span>

kubeadm join <span class="token v-string string">192.168.93.136</span><span class="token punctuation">:</span><span class="token number">6443</span> <span class="token operator">--</span>token vvd4zg<span class="token operator">.</span>4ay8rxanmh7fopec <span class="token operator">\\</span>
    <span class="token operator">--</span>discovery<span class="token operator">-</span>token<span class="token operator">-</span>ca<span class="token operator">-</span>cert<span class="token operator">-</span>hash sha256<span class="token punctuation">:</span>df77248c6939eb6c6062d50e6e99c4f881f48e619ef4d2e61304a529a4c2eb1f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装上述提示在master节点上执行</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>  mkdir <span class="token operator">-p</span> <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token operator">.</span>kube
  sudo cp <span class="token operator">-</span>i <span class="token operator">/</span>etc<span class="token regex">/kubernetes/admin</span><span class="token operator">.</span>conf <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token operator">.</span>kube<span class="token operator">/</span>config
  sudo chown <span class="token variable">$(</span>id <span class="token operator">-u</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token variable">$(</span>id <span class="token operator">-g</span><span class="token punctuation">)</span> <span class="token variable">$HOME</span><span class="token operator">/</span><span class="token operator">.</span>kube<span class="token operator">/</span>config
  export KUBECONFIG<span class="token operator">=</span><span class="token operator">/</span>etc<span class="token regex">/kubernetes/admin</span><span class="token operator">.</span>conf
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时执行命令kubectl get nodes 会报错</p><p>错误:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>The connection to the server <span class="token property">localhost</span><span class="token punctuation">:</span>8080 was refused - did you specify the right host or port?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#解决</span>
<span class="token comment">#在每个节点上操作</span>
将master节点的<span class="token operator">/</span>etc<span class="token regex">/kubernetes/admin</span><span class="token operator">.</span>conf 拷贝到每个节点<span class="token operator">/</span>etc<span class="token regex">/kubernetes/admin</span><span class="token operator">.</span>conf
echo <span class="token string">&quot;export KUBECONFIG=/etc/kubernetes/admin.conf&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>profile
<span class="token comment">#生效</span>
source <span class="token operator">/</span>etc<span class="token operator">/</span>profile
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下命令kubectl get cs,报错:</p><p>如果出现Get &quot;http://127.0.0.1:10252/healthz&quot;: dial tcp 127.0.0.1:10252: connect: connection refused 错误</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#解决</span>
<span class="token comment">#在master节点执行</span>
vim <span class="token operator">/</span>etc<span class="token operator">/</span>kubernetes<span class="token operator">/</span>manifests<span class="token operator">/</span>kube<span class="token operator">-</span>scheduler<span class="token operator">.</span>yaml
<span class="token comment">#将</span>
<span class="token operator">-</span> <span class="token operator">--</span>port<span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#这行注释掉</span>

vim <span class="token operator">/</span>etc<span class="token operator">/</span>kubernetes<span class="token operator">/</span>manifests<span class="token operator">/</span>kube<span class="token operator">-</span>controller<span class="token operator">-</span>manager<span class="token operator">.</span>yaml
<span class="token comment">#将</span>
<span class="token operator">-</span> <span class="token operator">--</span>port<span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#这行注释掉</span>

<span class="token comment">#再次执行命令kubectl get cs</span>
<span class="token comment">#如下为正常的结果</span>

NAME                 STATUS    MESSAGE             ERROR
controller<span class="token operator">-</span>manager   Healthy   ok                  
scheduler            Healthy   ok                  
etcd<span class="token operator">-</span><span class="token number">0</span>               Healthy   <span class="token punctuation">{</span><span class="token string">&quot;health&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span> 



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#这时运行 kubectl get node,为noready 需要安装网络插件</span>

<span class="token comment"># -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml(这个需要验证是否能用)</span>

curl https<span class="token punctuation">:</span><span class="token regex">//docs</span><span class="token operator">.</span>projectcalico<span class="token operator">.</span>org<span class="token operator">/</span><span class="token v-string string">v3.20</span><span class="token regex">/manifests/calico</span><span class="token operator">.</span>yaml <span class="token operator">-O</span>
kubectl apply <span class="token operator">-f</span> calico<span class="token operator">.</span>yaml

<span class="token comment">#这时在运行kubectl get node 为ready状态</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建部署:在k8s创建一个pod,验证是否正常</p></li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>kubectl create deployment nginx <span class="token operator">--</span>image<span class="token operator">=</span>nginx
kubectl expose deployment nginx <span class="token operator">--</span>port<span class="token operator">=</span><span class="token number">80</span> <span class="token operator">--</span>type<span class="token operator">=</span>NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li><p>查询pod 和svc状态</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>kubectl get pod<span class="token punctuation">,</span>svc

root<span class="token variable">@ip</span><span class="token operator">-</span><span class="token number">172</span><span class="token operator">-</span><span class="token number">31</span><span class="token operator">-</span><span class="token number">70</span><span class="token operator">-</span><span class="token number">77</span><span class="token punctuation">:</span><span class="token operator">~</span><span class="token comment"># kubectl get pod,svc</span>
NAME                          READY   STATUS    RESTARTS   AGE
pod<span class="token operator">/</span>nginx<span class="token operator">-</span>6799fc88d8<span class="token operator">-</span><span class="token number">22459</span>    <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     Running   <span class="token number">0</span>          16h
pod<span class="token operator">/</span>nginx3<span class="token operator">-</span>5465449d99<span class="token operator">-</span>76blm   <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     Running   <span class="token number">0</span>          16m

NAME                 TYPE        CLUSTER<span class="token operator">-</span>IP     EXTERNAL<span class="token operator">-</span>IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE
service<span class="token operator">/</span>kubernetes   ClusterIP   <span class="token v-string string">10.96.0.1</span>      <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">443</span><span class="token operator">/</span>TCP        17h
service<span class="token operator">/</span>nginx        NodePort    <span class="token v-string string">10.96.94.166</span>   <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">80</span><span class="token punctuation">:</span><span class="token number">30221</span><span class="token operator">/</span>TCP   16h
service<span class="token operator">/</span>nginx3       NodePort    <span class="token v-string string">10.96.3.97</span>     <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">80</span><span class="token punctuation">:</span><span class="token number">32630</span><span class="token operator">/</span>TCP   16m

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>访问</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">18.206.193.80</span><span class="token punctuation">:</span><span class="token number">30221</span> <span class="token comment">#就能访问nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>kubctl 相关操作</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 获取节点的状态</span>
kubectl get node

<span class="token comment"># 获取pod 状态</span>
kubectl get pod<span class="token punctuation">,</span>svc

<span class="token comment">#获取组件状态</span>
kubectl get cs

<span class="token comment">#部署和暴露端口</span>

kubectl create deployment nginx <span class="token operator">--</span>image<span class="token operator">=</span>nginx
kubectl expose deployment nginx <span class="token operator">--</span>port<span class="token operator">=</span><span class="token number">80</span> <span class="token operator">--</span>type<span class="token operator">=</span>NodePort

<span class="token comment">#查看部署</span>
kubectl get deployment
root<span class="token variable">@ip</span><span class="token operator">-</span><span class="token number">172</span><span class="token operator">-</span><span class="token number">31</span><span class="token operator">-</span><span class="token number">70</span><span class="token operator">-</span><span class="token number">77</span><span class="token punctuation">:</span><span class="token operator">~</span><span class="token comment"># kubectl get deployment</span>
NAME     READY   UP<span class="token operator">-</span>TO<span class="token operator">-</span>DATE   AVAILABLE   AGE
nginx    <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     <span class="token number">1</span>            <span class="token number">1</span>           16h
nginx1   <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     <span class="token number">1</span>            <span class="token number">1</span>           37m
nginx3   <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     <span class="token number">1</span>            <span class="token number">1</span>           6m31s

<span class="token comment">#删除一个部署</span>
root<span class="token variable">@ip</span><span class="token operator">-</span><span class="token number">172</span><span class="token operator">-</span><span class="token number">31</span><span class="token operator">-</span><span class="token number">70</span><span class="token operator">-</span><span class="token number">77</span><span class="token punctuation">:</span><span class="token operator">~</span><span class="token comment"># kubectl delete deployment nginx1</span>
deployment<span class="token operator">.</span>apps <span class="token string">&quot;nginx1&quot;</span> deleted

<span class="token comment">#删除service</span>
<span class="token comment">#查看service的状态</span>
kubectl get pod<span class="token punctuation">,</span>svc

root<span class="token variable">@ip</span><span class="token operator">-</span><span class="token number">172</span><span class="token operator">-</span><span class="token number">31</span><span class="token operator">-</span><span class="token number">70</span><span class="token operator">-</span><span class="token number">77</span><span class="token punctuation">:</span><span class="token operator">~</span><span class="token comment"># kubectl get svc</span>
NAME         TYPE        CLUSTER<span class="token operator">-</span>IP      EXTERNAL<span class="token operator">-</span>IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE
kubernetes   ClusterIP   <span class="token v-string string">10.96.0.1</span>       <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">443</span><span class="token operator">/</span>TCP        17h
nginx        NodePort    <span class="token v-string string">10.96.94.166</span>    <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">80</span><span class="token punctuation">:</span><span class="token number">30221</span><span class="token operator">/</span>TCP   16h
nginx1       NodePort    <span class="token v-string string">10.96.156.183</span>   <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">81</span><span class="token punctuation">:</span><span class="token number">31116</span><span class="token operator">/</span>TCP   40m
nginx3       NodePort    <span class="token v-string string">10.96.3.97</span>      <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">80</span><span class="token punctuation">:</span><span class="token number">32630</span><span class="token operator">/</span>TCP   9m33s

<span class="token comment">#我们要删除service nginx1</span>
 kubectl <span class="token keyword">delete</span> svc nginx1
kubectl <span class="token keyword">delete</span> svc nginx<span class="token operator">-</span>service

<span class="token comment">#k8s 查看命名空间</span>
kubectl get namespace 
<span class="token comment">#k8s 创建命名空间</span>
kubectl create ns liyulong

<span class="token comment">#查看命名空间的pod</span>
kubectl get pods <span class="token operator">-</span>n liyulong

<span class="token comment">#在命名空间创建pod</span>
kubectl run <span class="token keyword">my</span><span class="token operator">-</span>pod <span class="token operator">--</span>image<span class="token operator">=</span>nginx <span class="token operator">--</span>namespace<span class="token operator">=</span>liyulong

<span class="token comment">#在指定的命名空间中创建两个副本的部署</span>
 kubectl create deployment <span class="token keyword">my</span><span class="token operator">-</span>deployment <span class="token operator">--</span>image<span class="token operator">=</span>nginx <span class="token operator">--</span>replicas<span class="token operator">=</span><span class="token number">2</span> <span class="token operator">--</span>namespace<span class="token operator">=</span>liyulong
 
<span class="token comment">#用负载均衡的方式暴露这两个部署</span>
kubectl expose deployment <span class="token keyword">my</span><span class="token operator">-</span>deployment <span class="token operator">--</span>type<span class="token operator">=</span>LoadBalancer <span class="token operator">--</span>port<span class="token operator">=</span><span class="token number">80</span> <span class="token operator">--</span>namespace<span class="token operator">=</span>liyulong

<span class="token comment">#进入pod 内部</span>
kubectl exec <span class="token operator">-</span>it <span class="token keyword">my</span><span class="token operator">-</span>deployment<span class="token operator">-</span>57d86476b6<span class="token operator">-</span>skh2s <span class="token operator">--</span>namespace<span class="token operator">=</span>liyulong <span class="token operator">--</span> <span class="token operator">/</span>bin<span class="token operator">/</span>sh

<span class="token comment">#查看命名空间的service</span>
kubectl get svc <span class="token operator">--</span>namespace<span class="token operator">=</span>liyulong

<span class="token comment">#查看所有空间的pod</span>
kubectl get pods <span class="token operator">--</span>all<span class="token operator">-</span>namespaces

<span class="token comment">#应用dashboard</span>
kubectl apply <span class="token operator">-f</span> recommended<span class="token operator">.</span>yaml
<span class="token comment">#dashbord  删除dashboard</span>
kubectl <span class="token keyword">delete</span> <span class="token operator">-f</span> recommended<span class="token operator">.</span>yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建k8s dashboard</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#下载dashboard</span>

wget https<span class="token punctuation">:</span><span class="token operator">//</span>raw<span class="token operator">.</span>githubusercontent<span class="token operator">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>dashboard<span class="token operator">/</span><span class="token v-string string">v2.3.1</span><span class="token operator">/</span>aio<span class="token operator">/</span>deploy<span class="token operator">/</span>recommended<span class="token operator">.</span>yaml

<span class="token comment">#修改配置</span>

kind<span class="token punctuation">:</span> Service
apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    k8s<span class="token operator">-</span>app<span class="token punctuation">:</span> kubernetes<span class="token operator">-</span>dashboard
  name<span class="token punctuation">:</span> kubernetes<span class="token operator">-</span>dashboard
  namespace<span class="token punctuation">:</span> kubernetes<span class="token operator">-</span>dashboard
spec<span class="token punctuation">:</span>
  type<span class="token punctuation">:</span> NodePort  <span class="token comment"># 新增</span>
  ports<span class="token punctuation">:</span>
    <span class="token operator">-</span> port<span class="token punctuation">:</span> <span class="token number">443</span>
      targetPort<span class="token punctuation">:</span> <span class="token number">8443</span>
      nodePort<span class="token punctuation">:</span> <span class="token number">30001</span>  <span class="token comment"># 新增</span>
  selector<span class="token punctuation">:</span>
    k8s<span class="token operator">-</span>app<span class="token punctuation">:</span> kubernetes<span class="token operator">-</span>dashboard

<span class="token comment">#应用配置</span>
kubectl apply <span class="token operator">-f</span> recommended<span class="token operator">.</span>yaml

<span class="token comment">#查看相应的状态</span>


<span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">#查看dashboard 的pod信息</span>
kubectl get pod <span class="token operator">-A</span> <span class="token operator">|</span>grep kubernetes<span class="token operator">-</span>dashboard

kubernetes<span class="token operator">-</span>dashboard   dashboard<span class="token operator">-</span>metrics<span class="token operator">-</span>scraper<span class="token operator">-</span>79c5968bdc<span class="token operator">-</span>bnvss   <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     Running            <span class="token number">0</span>          51m
kubernetes<span class="token operator">-</span>dashboard   kubernetes<span class="token operator">-</span>dashboard<span class="token operator">-</span>658485d5c7<span class="token operator">-</span>pq55z        <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     Running            <span class="token number">0</span>          51m

<span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">#查看dashboard 暴露的服务</span>
kubectl get svc <span class="token operator">-A</span> <span class="token operator">|</span>grep kubernetes<span class="token operator">-</span>dashboard

<span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">#查看kubernetes-dashboard-658485d5c7-pq55z的log信息</span>
kubectl logs <span class="token operator">-f</span> <span class="token operator">-</span>n kubernetes<span class="token operator">-</span>dashboard kubernetes<span class="token operator">-</span>dashboard<span class="token operator">-</span>658485d5c7<span class="token operator">-</span>pq55z


<span class="token comment">#登录ui</span>
https<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">3.238.176.211</span><span class="token punctuation">:</span><span class="token number">30001</span><span class="token operator">/</span><span class="token comment">#/login  一定是https请求,否则无响应</span>

<span class="token comment">#创建管理员token，可查看任何空间权限</span>

kubectl create clusterrolebinding dashboard<span class="token operator">-</span>cluster<span class="token operator">-</span>admin  <span class="token operator">--</span>clusterrole<span class="token operator">=</span>cluster<span class="token operator">-</span>admin <span class="token operator">--</span>serviceaccount<span class="token operator">=</span>kubernetes<span class="token operator">-</span>dashboard<span class="token punctuation">:</span>kubernetes<span class="token operator">-</span>dashboard

<span class="token comment">#查看kubernetes-dashboard名称空间下的secret</span>
kubectl get secret <span class="token operator">-</span>n kubernetes<span class="token operator">-</span>dashboard

admin<span class="token operator">-</span>token<span class="token operator">-</span>mpskd                  kubernetes<span class="token operator">.</span>io<span class="token operator">/</span>service<span class="token operator">-</span>account<span class="token operator">-</span>token   <span class="token number">3</span>      2m55s
<span class="token keyword">default</span><span class="token operator">-</span>token<span class="token operator">-</span>87n6p                kubernetes<span class="token operator">.</span>io<span class="token operator">/</span>service<span class="token operator">-</span>account<span class="token operator">-</span>token   <span class="token number">3</span>      22m
kubernetes<span class="token operator">-</span>dashboard<span class="token operator">-</span>certs         Opaque                                <span class="token number">0</span>      22m
kubernetes<span class="token operator">-</span>dashboard<span class="token operator">-</span>csrf          Opaque                                <span class="token number">1</span>      22m
kubernetes<span class="token operator">-</span>dashboard<span class="token operator">-</span>key<span class="token operator">-</span>holder    Opaque                                <span class="token number">2</span>      22m
kubernetes<span class="token operator">-</span>dashboard<span class="token operator">-</span>token<span class="token operator">-</span>67vpt   kubernetes<span class="token operator">.</span>io<span class="token operator">/</span>service<span class="token operator">-</span>account<span class="token operator">-</span>token   <span class="token number">3</span>      22m

<span class="token comment">#找到对应的带有token的kubernetes-dashboard-token-67vpt</span>
kubectl describe secret kubernetes<span class="token operator">-</span>dashboard<span class="token operator">-</span>token<span class="token operator">-</span>67vpt <span class="token operator">-</span>n kubernetes<span class="token operator">-</span>dashboard

eyJhbGciOiJSUzI1NiIsImtpZCI6Ilc4Tm1oakpEMDJSNDhSQVlSWDhSTTR5dm5FVjc2SGVBZTExQVhLQklOX0EifQ<span class="token operator">.</span>eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJrdWJlcm5ldGVzLWRhc2hib2FyZC10b2tlbi1scG5obCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjYzMGQyNzYxLTA3ZTMtNDVhOS05NjczLWUyMGZmYmIxNWExZSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDprdWJlcm5ldGVzLWRhc2hib2FyZCJ9<span class="token operator">.</span>r80pKVeOVPxrZVBs0MUFjMNC<span class="token operator">-</span>SfaMgO<span class="token operator">-</span>9j4GdLoM8udcFZUAx16DgVvY8RirouEZx7jvFbw2ycUWr6IDWiqgx4KKR7cAfpZ2J4OpxUniUlZnhZKEJvWQtvFzfWpygCJctcL30NIGUHTEz1IF5VmQ7Ngb<span class="token operator">-</span>AGcwfLFFr6D5cwr2ScRDpVPWCXrUNi2te9SLhEFGob4AXVSLj8oH9WgbKE1SuCbf0LYbHWK2eRSRtWjQsh0UobeGLU0JwDnP_tiMpDV4<span class="token operator">-</span>3q4ns54NdW_AbR8eLbNB6IvMAyiJTwsY3hd1i9WPP0Z1GLIwjl9OvbLEb6KOKzDnLeydEKffo1ngf6jdJByw

<span class="token comment">#将生成的token 复制到页面中,进行登录</span>
https<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">3.238.176.211</span><span class="token punctuation">:</span><span class="token number">30001</span><span class="token operator">/</span><span class="token comment">#/secret?namespace=default</span>

<span class="token comment">#创建pod ,新建httpd.yml,如下</span>
apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Pod
metadata<span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> pod<span class="token operator">-</span>httpd
  namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> httpdlab
spec<span class="token punctuation">:</span>
  nodeName<span class="token punctuation">:</span>ip<span class="token operator">-</span><span class="token number">172</span><span class="token operator">-</span><span class="token number">31</span><span class="token operator">-</span><span class="token number">64</span><span class="token operator">-</span><span class="token number">176</span>
  containers<span class="token punctuation">:</span>
  <span class="token operator">-</span> name<span class="token punctuation">:</span> httpd
    image<span class="token punctuation">:</span> httpd<span class="token punctuation">:</span>latest
    imagePullPolicy<span class="token punctuation">:</span> IfNotPresent

<span class="token comment">#执行</span>
kubectl apply <span class="token operator">-f</span> httpd<span class="token operator">.</span>yml

<span class="token comment">#查看</span>
kubectl get pods





<span class="token comment">#修改访问端口</span>
kubectl edit svc kubernetes<span class="token operator">-</span>dashboard <span class="token operator">-</span>n kubernetes<span class="token operator">-</span>dashboard




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>dashboard 日志查看</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#查看dashboard 的pod信息</span>
kubectl get pod <span class="token operator">-A</span> <span class="token operator">|</span>grep kubernetes<span class="token operator">-</span>dashboard

kubernetes<span class="token operator">-</span>dashboard   dashboard<span class="token operator">-</span>metrics<span class="token operator">-</span>scraper<span class="token operator">-</span>79c5968bdc<span class="token operator">-</span>bnvss   <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     Running            <span class="token number">0</span>          51m
kubernetes<span class="token operator">-</span>dashboard   kubernetes<span class="token operator">-</span>dashboard<span class="token operator">-</span>658485d5c7<span class="token operator">-</span>pq55z        <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     Running            <span class="token number">0</span>          51m

<span class="token comment">#查看dashboard 暴露的服务</span>
kubectl get svc <span class="token operator">-A</span> <span class="token operator">|</span>grep kubernetes<span class="token operator">-</span>dashboard

<span class="token comment">#查看kubernetes-dashboard-658485d5c7-pq55z的log信息</span>
kubectl logs <span class="token operator">-f</span> <span class="token operator">-</span>n kubernetes<span class="token operator">-</span>dashboard kubernetes<span class="token operator">-</span>dashboard<span class="token operator">-</span>658485d5c7<span class="token operator">-</span>pq55z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>nginx yaml 部署实例</p><ol><li>node port 方式部署</li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Service
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>servie
  name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>service
  <span class="token comment"># 命名空间，没有可以删除，默认是default</span>
  namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
spec<span class="token punctuation">:</span>
  ports<span class="token punctuation">:</span>
  <span class="token comment"># 对外暴露的端口</span>
  <span class="token operator">-</span> nodePort<span class="token punctuation">:</span> <span class="token number">30002</span>
    port<span class="token punctuation">:</span> <span class="token number">80</span>
    protocol<span class="token punctuation">:</span> TCP
    targetPort<span class="token punctuation">:</span> <span class="token number">80</span>
  selector<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pod
  <span class="token comment"># NodePort类型可以对外暴露端口</span>
  type<span class="token punctuation">:</span> NodePort

<span class="token operator">--</span><span class="token operator">-</span>
apiVersion<span class="token punctuation">:</span> apps<span class="token operator">/</span><span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Deployment
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>deploy
  name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>deploy
  namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
spec<span class="token punctuation">:</span>
  replicas<span class="token punctuation">:</span> <span class="token number">1</span>
  selector<span class="token punctuation">:</span>
    matchLabels<span class="token punctuation">:</span>
      app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pod
  template<span class="token punctuation">:</span>
    metadata<span class="token punctuation">:</span>
      labels<span class="token punctuation">:</span>
        app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pod
      namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
    spec<span class="token punctuation">:</span>
      containers<span class="token punctuation">:</span>
    <span class="token comment"># 镜像名称</span>
      <span class="token operator">-</span> image<span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token v-string string">1.22.0</span>
        name<span class="token punctuation">:</span> nginx
        ports<span class="token punctuation">:</span>
        <span class="token operator">-</span> containerPort<span class="token punctuation">:</span> <span class="token number">80</span>
        resources<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>configmap 方式</li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 1) 定义nginx的configmap配置</span>

apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> ConfigMap
metadata<span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>configmap
data<span class="token punctuation">:</span>
  nginx_conf<span class="token punctuation">:</span> <span class="token operator">|</span><span class="token operator">-</span>
    <span class="token comment">#user  nobody;</span>
    worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
    events <span class="token punctuation">{</span>
        worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    http <span class="token punctuation">{</span>
        include       mime<span class="token operator">.</span>types<span class="token punctuation">;</span>
        default_type  application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>
        sendfile        on<span class="token punctuation">;</span>
        keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
        server <span class="token punctuation">{</span>
            listen       <span class="token number">80</span><span class="token punctuation">;</span>
            server_name  localhost<span class="token punctuation">;</span>
            location <span class="token operator">/</span> <span class="token punctuation">{</span>
                root   html<span class="token punctuation">;</span>
                index  index<span class="token operator">.</span>html index<span class="token operator">.</span>htm<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  <span class="token operator">/</span>50x<span class="token operator">.</span>html<span class="token punctuation">;</span>
            location <span class="token operator">=</span> <span class="token operator">/</span>50x<span class="token operator">.</span>html <span class="token punctuation">{</span>
                root   html<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># 2) nginx servce和deploy 配置</span>
    apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Service
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>servie
  name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>service
  <span class="token comment"># 命名空间，没有可以删除，默认是default</span>
  namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
spec<span class="token punctuation">:</span>
  ports<span class="token punctuation">:</span>
  <span class="token comment"># 对外暴露的端口</span>
  <span class="token operator">-</span> nodePort<span class="token punctuation">:</span> <span class="token number">30002</span>
    port<span class="token punctuation">:</span> <span class="token number">80</span>
    protocol<span class="token punctuation">:</span> TCP
    targetPort<span class="token punctuation">:</span> <span class="token number">80</span>
  selector<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pod
  <span class="token comment"># NodePort类型可以对外暴露端口</span>
  type<span class="token punctuation">:</span> NodePort

<span class="token operator">--</span><span class="token operator">-</span>
apiVersion<span class="token punctuation">:</span> apps<span class="token operator">/</span><span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Deployment
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>deploy
  name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>deploy
  namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
spec<span class="token punctuation">:</span>
  replicas<span class="token punctuation">:</span> <span class="token number">1</span>
  selector<span class="token punctuation">:</span>
    matchLabels<span class="token punctuation">:</span>
      app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pod
  template<span class="token punctuation">:</span>
    metadata<span class="token punctuation">:</span>
      labels<span class="token punctuation">:</span>
        app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pod
      namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
    spec<span class="token punctuation">:</span>
      containers<span class="token punctuation">:</span>
    <span class="token comment"># 镜像名称</span>
      <span class="token operator">-</span> image<span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token v-string string">1.22.0</span>
        name<span class="token punctuation">:</span> nginx
        ports<span class="token punctuation">:</span>
        <span class="token operator">-</span> containerPort<span class="token punctuation">:</span> <span class="token number">80</span>
        resources<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        volumeMounts<span class="token punctuation">:</span>
        <span class="token operator">-</span> name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>config
          mountPath<span class="token punctuation">:</span> <span class="token string">&quot;/etc/nginx/conf.d/&quot;</span>
          readOnly<span class="token punctuation">:</span> true
      volumes<span class="token punctuation">:</span>
      <span class="token operator">-</span> name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>config
        configMap<span class="token punctuation">:</span>
          name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>configmap

     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Ingress 的安装和使用</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 下载ingress</span>
kubectl apply <span class="token operator">-f</span> deploy<span class="token operator">.</span>yaml
<span class="token comment">#修改镜像</span>
vi deploy<span class="token operator">.</span>yaml
<span class="token comment">#将image的值改为如下值：</span>
registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>lfy_k8s_images<span class="token operator">/</span>ingress<span class="token operator">-</span>nginx<span class="token operator">-</span>controller<span class="token punctuation">:</span><span class="token v-string string">v0.46.0</span>
<span class="token comment">#执行</span>
kubectl apply <span class="token operator">-f</span> deploy<span class="token operator">.</span>yaml

<span class="token comment"># 检查安装的结果</span>
kubectl get pod<span class="token punctuation">,</span>svc <span class="token operator">-</span>n ingress<span class="token operator">-</span>nginx

NAME                                         TYPE        CLUSTER<span class="token operator">-</span>IP      EXTERNAL<span class="token operator">-</span>IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                      AGE
service<span class="token operator">/</span>ingress<span class="token operator">-</span>nginx<span class="token operator">-</span>controller             NodePort    <span class="token v-string string">10.96.231.254</span>   <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">80</span><span class="token punctuation">:</span><span class="token number">31623</span><span class="token operator">/</span>TCP<span class="token punctuation">,</span><span class="token number">443</span><span class="token punctuation">:</span><span class="token number">30811</span><span class="token operator">/</span>TCP   6m34s
service<span class="token operator">/</span>ingress<span class="token operator">-</span>nginx<span class="token operator">-</span>controller<span class="token operator">-</span>admission   ClusterIP   <span class="token v-string string">10.96.72.253</span>    <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">443</span><span class="token operator">/</span>TCP                      6m34s

<span class="token comment"># 最后别忘记把svc暴露的端口要放行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Ingress 的使用</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 创建service和depoly</span>
<span class="token comment">#测试环境</span>
apiVersion<span class="token punctuation">:</span> apps<span class="token operator">/</span><span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Deployment
metadata<span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> hello<span class="token operator">-</span>server
spec<span class="token punctuation">:</span>
  replicas<span class="token punctuation">:</span> <span class="token number">2</span>
  selector<span class="token punctuation">:</span>
    matchLabels<span class="token punctuation">:</span>
      app<span class="token punctuation">:</span> hello<span class="token operator">-</span>server
  template<span class="token punctuation">:</span>
    metadata<span class="token punctuation">:</span>
      labels<span class="token punctuation">:</span>
        app<span class="token punctuation">:</span> hello<span class="token operator">-</span>server
    spec<span class="token punctuation">:</span>
      containers<span class="token punctuation">:</span>
      <span class="token operator">-</span> name<span class="token punctuation">:</span> hello<span class="token operator">-</span>server
        image<span class="token punctuation">:</span> registry<span class="token operator">.</span>cn<span class="token operator">-</span>hangzhou<span class="token operator">.</span>aliyuncs<span class="token operator">.</span>com<span class="token operator">/</span>lfy_k8s_images<span class="token operator">/</span>hello<span class="token operator">-</span>server
        ports<span class="token punctuation">:</span>
        <span class="token operator">-</span> containerPort<span class="token punctuation">:</span> <span class="token number">9000</span>
<span class="token operator">--</span><span class="token operator">-</span>
apiVersion<span class="token punctuation">:</span> apps<span class="token operator">/</span><span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Deployment
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>demo
  name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>demo
spec<span class="token punctuation">:</span>
  replicas<span class="token punctuation">:</span> <span class="token number">2</span>
  selector<span class="token punctuation">:</span>
    matchLabels<span class="token punctuation">:</span>
      app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>demo
  template<span class="token punctuation">:</span>
    metadata<span class="token punctuation">:</span>
      labels<span class="token punctuation">:</span>
        app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>demo
    spec<span class="token punctuation">:</span>
      containers<span class="token punctuation">:</span>
      <span class="token operator">-</span> image<span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token v-string string">1.22.0</span>
        name<span class="token punctuation">:</span> nginx
<span class="token operator">--</span><span class="token operator">-</span>
apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Service
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>demo
  name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>demo
spec<span class="token punctuation">:</span>
  selector<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>demo
  ports<span class="token punctuation">:</span>
  <span class="token operator">-</span> port<span class="token punctuation">:</span> <span class="token number">8000</span>
    protocol<span class="token punctuation">:</span> TCP
    targetPort<span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token operator">--</span><span class="token operator">-</span>
apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Service
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> hello<span class="token operator">-</span>server
  name<span class="token punctuation">:</span> hello<span class="token operator">-</span>server
spec<span class="token punctuation">:</span>
  selector<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> hello<span class="token operator">-</span>server
  ports<span class="token punctuation">:</span>
  <span class="token operator">-</span> port<span class="token punctuation">:</span> <span class="token number">8000</span>
    protocol<span class="token punctuation">:</span> TCP
    targetPort<span class="token punctuation">:</span> <span class="token number">9000</span>
    
<span class="token comment"># 域名访问</span>

apiVersion<span class="token punctuation">:</span> networking<span class="token operator">.</span>k8s<span class="token operator">.</span>io<span class="token operator">/</span><span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Ingress  
metadata<span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> ingress<span class="token operator">-</span>host<span class="token operator">-</span>bar
spec<span class="token punctuation">:</span>
  ingressClassName<span class="token punctuation">:</span> nginx
  rules<span class="token punctuation">:</span>
  <span class="token operator">-</span> host<span class="token punctuation">:</span> <span class="token string">&quot;hello.atguigu.com&quot;</span>
    http<span class="token punctuation">:</span>
      paths<span class="token punctuation">:</span>
      <span class="token operator">-</span> pathType<span class="token punctuation">:</span> Prefix
        path<span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        backend<span class="token punctuation">:</span>
          service<span class="token punctuation">:</span>
            name<span class="token punctuation">:</span> hello<span class="token operator">-</span>server
            port<span class="token punctuation">:</span>
              number<span class="token punctuation">:</span> <span class="token number">8000</span>
  <span class="token operator">-</span> host<span class="token punctuation">:</span> <span class="token string">&quot;demo.atguigu.com&quot;</span>
    http<span class="token punctuation">:</span>
      paths<span class="token punctuation">:</span>
      <span class="token operator">-</span> pathType<span class="token punctuation">:</span> Prefix
        path<span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>  <span class="token comment"># 把请求会转给下面的服务，下面的服务一定要能处理这个路径，不能处理就是404</span>
        backend<span class="token punctuation">:</span>
          service<span class="token punctuation">:</span>
            name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>demo  <span class="token comment">## java，比如使用路径重写，去掉前缀nginx</span>
            port<span class="token punctuation">:</span>
              number<span class="token punctuation">:</span> <span class="token number">8000</span>
        
<span class="token comment">#配置本地域名</span>
vi <span class="token operator">/</span>etc<span class="token operator">/</span>hosts
<span class="token v-string string">3.238.176.211</span> hello<span class="token operator">.</span>atguigu<span class="token operator">.</span>com
<span class="token v-string string">3.238.176.211</span> demo<span class="token operator">.</span>atguigu<span class="token operator">.</span>com


          
<span class="token comment"># 测试访问:</span>
查询ingress service的node port端口
 kubectl get pod<span class="token punctuation">,</span>svc <span class="token operator">-</span>n ingress<span class="token operator">-</span>nginx

NAME                                         TYPE        CLUSTER<span class="token operator">-</span>IP      EXTERNAL<span class="token operator">-</span>IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                      AGE
service<span class="token operator">/</span>ingress<span class="token operator">-</span>nginx<span class="token operator">-</span>controller             NodePort    <span class="token v-string string">10.96.231.254</span>   <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">80</span><span class="token punctuation">:</span><span class="token number">31623</span><span class="token operator">/</span>TCP<span class="token punctuation">,</span><span class="token number">443</span><span class="token punctuation">:</span><span class="token number">30811</span><span class="token operator">/</span>TCP   170m
service<span class="token operator">/</span>ingress<span class="token operator">-</span>nginx<span class="token operator">-</span>controller<span class="token operator">-</span>admission   ClusterIP   <span class="token v-string string">10.96.72.253</span>    <span class="token filehandle symbol">&lt;none&gt;</span>        <span class="token number">443</span><span class="token operator">/</span>TCP                      170m


<span class="token comment">#在防火墙中开放31623端口</span>

<span class="token comment">#访问</span>
http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/hello.atguigu.com:31623/</span>
Hello World<span class="token operator">!</span>

http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/demo.atguigu.com:31623/</span>
Welcome to nginx<span class="token operator">!</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>service 中port 和nodeport的区别</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code> port 是 Service 暴露给集群内其他组件（例如其他 Pod）的端口号<span class="token punctuation">,</span>例如ingress 直接可以用<span class="token operator">.</span>
 它表示你可以通过 Service 名称和这个端口号来访问 Service。port 是 Service 自身的端口，用于集群内部的 Pod 通信。外部流量无法直接通过这个端口访问 Service。
 
 NodePort 是一种 Kubernetes Service 类型，用于将服务暴露到集群外部。它在每个节点上开放一个高位端口，然后将外部流量通过这个节点端口转发到 Service 的 port 上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>pv 和pvc</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#安装nfs (每个机器都安装)</span>
sudo apt update

<span class="token comment">#在主节点中安装 </span>
sudo apt install nfs<span class="token operator">-</span>kernel<span class="token operator">-</span>server nfs<span class="token operator">-</span>common

<span class="token comment">#在主节点中操作</span>
<span class="token comment">#创建同步文件夹</span>
mkdir <span class="token operator">-p</span> <span class="token operator">/</span>nfs<span class="token operator">/</span>data
<span class="token comment">#配置NFS 服务器</span>
<span class="token comment">#nfs主节点</span>
echo <span class="token string">&quot;/nfs/data/ *(insecure,rw,sync,no_root_squash)&quot;</span> <span class="token operator">&gt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>exports

systemctl enable rpcbind <span class="token operator">--</span>now
systemctl enable nfs<span class="token operator">-</span>server <span class="token operator">--</span>now
<span class="token comment">#导出生效(主节点操作)</span>
sudo exportfs <span class="token operator">-</span>ra
<span class="token comment">#启动nfs(主节点操作)</span>
sudo systemctl start nfs<span class="token operator">-</span>kernel<span class="token operator">-</span>server

<span class="token comment">#在从从节点中安装</span>

sudo apt install nfs<span class="token operator">-</span>common

mkdir <span class="token operator">-p</span> <span class="token operator">/</span>nfs<span class="token operator">/</span>data
<span class="token comment">#执行以下命令挂载 nfs 服务器上的共享目录</span>
mount <span class="token operator">-t</span> nfs <span class="token v-string string">172.31.70.77</span><span class="token punctuation">:</span><span class="token operator">/</span>nfs<span class="token operator">/</span>data <span class="token operator">/</span>nfs<span class="token operator">/</span>data <span class="token comment">#172.31.70.77 是aws的私有地址</span>

<span class="token comment"># 写入一个测试文件</span>
echo <span class="token string">&quot;hello nfs server&quot;</span> <span class="token operator">&gt;</span> <span class="token operator">/</span>nfs<span class="token operator">/</span>data<span class="token operator">/</span>test<span class="token operator">.</span>txt

<span class="token comment">#pv 和pvc</span>
<span class="token comment">#PV：持久卷（Persistent Volume），将应用需要持久化的数据保存到指定位置</span>
<span class="token comment">#PVC：持久卷申明（Persistent Volume Claim），申明需要使用的持久卷规格</span>

<span class="token comment">#创建pv</span>
<span class="token comment">#pv.yml</span>

apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> PersistentVolume
metadata<span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> p<span class="token v-string string">v01</span>
spec<span class="token punctuation">:</span>
  capacity<span class="token punctuation">:</span>
    storage<span class="token punctuation">:</span> 1000M
  accessModes<span class="token punctuation">:</span>
    <span class="token operator">-</span> ReadWriteMany
  storageClassName<span class="token punctuation">:</span> nfs
  nfs<span class="token punctuation">:</span>
    path<span class="token punctuation">:</span> <span class="token operator">/</span>nfs<span class="token operator">/</span>data<span class="token operator">/</span><span class="token number">01</span>
    server<span class="token punctuation">:</span> <span class="token v-string string">172.31.70.77</span>

<span class="token comment">#执行</span>
kebuctl apply <span class="token operator">-f</span> pv<span class="token operator">.</span>yml

<span class="token comment">#pvc 创建与绑定</span>

kind<span class="token punctuation">:</span> PersistentVolumeClaim
apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
metadata<span class="token punctuation">:</span>
  name<span class="token punctuation">:</span> logs<span class="token operator">-</span>pvc
spec<span class="token punctuation">:</span>
  accessModes<span class="token punctuation">:</span>
    <span class="token operator">-</span> ReadWriteMany
  resources<span class="token punctuation">:</span>
    requests<span class="token punctuation">:</span>
      storage<span class="token punctuation">:</span> 900Mi
  storageClassName<span class="token punctuation">:</span> nfs

<span class="token comment">#创建一个service和deployment,测试</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建一个service和deployment,测试</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>apiVersion<span class="token punctuation">:</span> <span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Service
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>servie
  name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>service
  <span class="token comment"># 命名空间，没有可以删除，默认是default</span>
  namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
spec<span class="token punctuation">:</span>
  ports<span class="token punctuation">:</span>
  <span class="token comment"># 对外暴露的端口</span>
  <span class="token operator">-</span> nodePort<span class="token punctuation">:</span> <span class="token number">30002</span>
    port<span class="token punctuation">:</span> <span class="token number">80</span>
    protocol<span class="token punctuation">:</span> TCP
    targetPort<span class="token punctuation">:</span> <span class="token number">80</span>
  selector<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pod
  <span class="token comment"># NodePort类型可以对外暴露端口</span>
  type<span class="token punctuation">:</span> NodePort

<span class="token operator">--</span><span class="token operator">-</span>
apiVersion<span class="token punctuation">:</span> apps<span class="token operator">/</span><span class="token v-string string">v1</span>
kind<span class="token punctuation">:</span> Deployment
metadata<span class="token punctuation">:</span>
  labels<span class="token punctuation">:</span>
    app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>deploy
  name<span class="token punctuation">:</span> nginx<span class="token operator">-</span>deploy
  namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
spec<span class="token punctuation">:</span>
  replicas<span class="token punctuation">:</span> <span class="token number">1</span>
  selector<span class="token punctuation">:</span>
    matchLabels<span class="token punctuation">:</span>
      app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pod
  template<span class="token punctuation">:</span>
    metadata<span class="token punctuation">:</span>
      labels<span class="token punctuation">:</span>
        app<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pod
      namespace<span class="token punctuation">:</span> <span class="token keyword">default</span>
    spec<span class="token punctuation">:</span>
      containers<span class="token punctuation">:</span>
    <span class="token comment"># 镜像名称</span>
      <span class="token operator">-</span> image<span class="token punctuation">:</span> nginx<span class="token punctuation">:</span><span class="token v-string string">1.22.0</span>
        name<span class="token punctuation">:</span> nginx
        ports<span class="token punctuation">:</span>
        <span class="token operator">-</span> containerPort<span class="token punctuation">:</span> <span class="token number">80</span>
        resources<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        volumeMounts<span class="token punctuation">:</span>
        <span class="token operator">-</span> name<span class="token punctuation">:</span> html
          mountPath<span class="token punctuation">:</span> <span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>html
      volumes<span class="token punctuation">:</span>
        <span class="token operator">-</span> name<span class="token punctuation">:</span> html
          persistentVolumeClaim<span class="token punctuation">:</span>
            claimName<span class="token punctuation">:</span> nginx<span class="token operator">-</span>pvc

     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建文件</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#在任何一台机器上</span>
<span class="token comment">#/nfs/data/01</span>
<span class="token comment">#创建index.html 文件</span>
<span class="token filehandle symbol">&lt;html&gt;</span><span class="token number">123</span><span class="token filehandle symbol">&lt;/html&gt;</span>

<span class="token comment">#访问</span>
http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/3.238.176.211:30002/</span>
<span class="token number">123</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li><li></li></ol>`,14),t=[o];function l(i,c){return s(),a("div",null,t)}const d=n(p,[["render",l],["__file","erpnext sass化.html.vue"]]);export{d as default};
