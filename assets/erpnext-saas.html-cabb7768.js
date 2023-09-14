import{_ as n,o as s,c as a,e}from"./app-d0d8bb13.js";const p={},i=e(`<h1 id="erpnext-sass-项目" tabindex="-1"><a class="header-anchor" href="#erpnext-sass-项目" aria-hidden="true">#</a> erpnext-sass 项目</h1><ol><li>环境选择</li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#主机目录</span>
<span class="token v-string string">192.168.50.60</span><span class="token operator">/</span>home<span class="token operator">/</span>data<span class="token operator">/</span>sass_aps


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.nginx 配置</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#/home/data/sass_aps/nginx/conf/nginx.conf</span>
user www<span class="token operator">-</span>data<span class="token punctuation">;</span>
worker_processes auto<span class="token punctuation">;</span>
pid <span class="token regex">/run/nginx</span><span class="token operator">.</span>pid<span class="token punctuation">;</span>
error_log <span class="token operator">/</span>var<span class="token regex">/log/ngin</span><span class="token operator">x</span><span class="token operator">/</span>error<span class="token operator">.</span>log<span class="token punctuation">;</span>
<span class="token comment">#include /etc/nginx/modules-enabled/*.conf;</span>

events <span class="token punctuation">{</span>
        worker_connections <span class="token number">768</span><span class="token punctuation">;</span>
        <span class="token comment"># multi_accept on;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>

        <span class="token comment">##</span>
        <span class="token comment"># Basic Settings</span>
        <span class="token comment">##</span>

        sendfile on<span class="token punctuation">;</span>
        tcp_nopush on<span class="token punctuation">;</span>
        types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>
        <span class="token comment"># server_tokens off;</span>

        <span class="token comment"># server_names_hash_bucket_size 64;</span>
        <span class="token comment"># server_name_in_redirect off;</span>

        include <span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>mime<span class="token operator">.</span>types<span class="token punctuation">;</span>
        default_type application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>

        <span class="token comment">##</span>
        <span class="token comment"># SSL Settings</span>
        <span class="token comment">##</span>

        ssl_protocols TLS<span class="token v-string string">v1</span> TLS<span class="token v-string string">v1.1</span> TLS<span class="token v-string string">v1.2</span> TLS<span class="token v-string string">v1.3</span><span class="token punctuation">;</span> <span class="token comment"># Dropping SSLv3, ref: POODLE</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

        <span class="token comment">##</span>
        <span class="token comment"># Logging Settings</span>
        <span class="token comment">##</span>

        <span class="token comment">#access_log /var/log/nginx/access.log;</span>

        <span class="token comment">##</span>
        <span class="token comment"># Gzip Settings</span>
        <span class="token comment">##</span>

        gzip on<span class="token punctuation">;</span>

  server <span class="token punctuation">{</span> 
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name localhost<span class="token punctuation">;</span>
        location <span class="token operator">/</span>app1<span class="token operator">/</span> <span class="token punctuation">{</span>
             rewrite <span class="token operator">^</span><span class="token regex">/app1(/</span><span class="token operator">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ <span class="token variable">$1</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
             proxy_pass http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">127.0.0.1</span><span class="token punctuation">:</span><span class="token number">5008</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
        location <span class="token operator">/</span>app2<span class="token operator">/</span> <span class="token punctuation">{</span>
              rewrite <span class="token operator">^</span><span class="token regex">/app2(/</span><span class="token operator">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ <span class="token variable">$1</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
              proxy_pass http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">127.0.0.1</span><span class="token punctuation">:</span><span class="token number">5001</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
        location <span class="token operator">/</span>ss<span class="token operator">/</span> <span class="token punctuation">{</span>
              rewrite <span class="token operator">^</span><span class="token regex">/ss(/</span><span class="token operator">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ <span class="token variable">$1</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
              proxy_pass http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">127.0.0.1</span><span class="token punctuation">:</span><span class="token number">9990</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>      
        
    <span class="token punctuation">}</span>

        <span class="token comment"># gzip_vary on;</span>
        <span class="token comment"># gzip_proxied any;</span>
        <span class="token comment"># gzip_comp_level 6;</span>
        <span class="token comment"># gzip_buffers 16 8k;</span>
        <span class="token comment"># gzip_http_version 1.1;</span>
        <span class="token comment"># gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;</span>

        <span class="token comment">##</span>
        <span class="token comment"># Virtual Host Configs</span>
        <span class="token comment">##</span>

        <span class="token comment">#include /etc/nginx/conf.d/*.conf;</span>
        <span class="token comment">#include /etc/nginx/sites-enabled/*;</span>
<span class="token punctuation">}</span>


<span class="token comment">#mail {</span>
<span class="token comment">#       # See sample authentication script at:</span>
<span class="token comment">#       # http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript</span>
<span class="token comment">#</span>
<span class="token comment">#       # auth_http localhost/auth.php;</span>
<span class="token comment">#       # pop3_capabilities &quot;TOP&quot; &quot;USER&quot;;</span>
<span class="token comment">#       # imap_capabilities &quot;IMAP4rev1&quot; &quot;UIDPLUS&quot;;</span>
<span class="token comment">#</span>
<span class="token comment">#       server {</span>
<span class="token comment">#               listen     localhost:110;</span>
<span class="token comment">#               protocol   pop3;</span>
<span class="token comment">#               proxy      on;</span>
<span class="token comment">#       }</span>
<span class="token comment">#</span>
<span class="token comment">#       server {</span>
<span class="token comment">#               listen     localhost:143;</span>
<span class="token comment">#               protocol   imap;</span>
<span class="token comment">#               proxy      on;</span>
<span class="token comment">#       }</span>
<span class="token comment">#}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>自启动脚本</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#/home/data/sass_aps/start.sh</span>
<span class="token comment">#!/bin/bash</span>

<span class="token comment"># 启动 Nginx 服务</span>
service nginx start


python <span class="token regex">/app1/app</span><span class="token operator">.</span>py <span class="token operator">&amp;</span>

python <span class="token regex">/app2/app</span><span class="token operator">.</span>py

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Dockerfile 文件</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#/home/data/sass_aps/Dockerfile</span>

<span class="token comment"># 使用官方的 Python 3.9 基础映像</span>
FROM python<span class="token punctuation">:</span><span class="token number">3.9</span>
<span class="token comment"># 设置工作目录</span>
WORKDIR <span class="token operator">/</span>app1
WORKDIR <span class="token operator">/</span>app2


<span class="token comment"># 将应用程序代码复制到容器中</span>
<span class="token comment">#COPY app.py /app</span>

<span class="token comment"># 安装 Flask</span>
<span class="token comment"># 安装Python 3.9 和pip</span>
RUN pip install Flask
<span class="token comment"># 安装Nginx</span>
RUN apt<span class="token operator">-</span>get update <span class="token operator">&amp;&amp;</span> apt<span class="token operator">-</span>get install <span class="token operator">-</span>y nginx
RUN apt<span class="token operator">-</span>get install net<span class="token operator">-</span>tools



<span class="token comment"># 暴露容器内部的端口</span>
EXPOSE <span class="token number">80</span>

<span class="token comment"># 启动Nginx和Flask应用</span>
<span class="token comment"># 赋予脚本可执行权限</span>


<span class="token comment"># 在容器启动时执行自定义启动脚本</span>
CMD <span class="token punctuation">[</span><span class="token string">&quot;/start.sh&quot;</span> <span class="token punctuation">]</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>docker 生成镜像</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>docker build <span class="token operator">-t</span> nginx<span class="token operator">-</span>flask <span class="token operator">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>生成容器</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>docker run <span class="token operator">-p</span> <span class="token number">5050</span><span class="token punctuation">:</span><span class="token number">80</span> <span class="token operator">-</span>v <span class="token operator">/</span>home<span class="token operator">/</span>data<span class="token operator">/</span>sass_aps<span class="token operator">/</span>start<span class="token operator">.</span>sh<span class="token punctuation">:</span><span class="token operator">/</span>start<span class="token operator">.</span>sh <span class="token operator">-</span>v <span class="token operator">/</span>home<span class="token operator">/</span>data<span class="token regex">/sass_aps/ngin</span><span class="token operator">x</span><span class="token regex">/conf/nginx</span><span class="token operator">.</span>conf<span class="token punctuation">:</span><span class="token regex">/etc/ngin</span><span class="token operator">x</span><span class="token operator">/</span>nginx<span class="token operator">.</span>conf <span class="token operator">-</span>v <span class="token operator">/</span>home<span class="token operator">/</span>data<span class="token operator">/</span>sass_aps<span class="token operator">/</span>app1<span class="token punctuation">:</span><span class="token operator">/</span>app1  <span class="token operator">-</span>v <span class="token operator">/</span>home<span class="token operator">/</span>data<span class="token operator">/</span>sass_aps<span class="token operator">/</span>app2<span class="token punctuation">:</span><span class="token operator">/</span>app2  <span class="token operator">--</span>name aps <span class="token operator">-d</span> nginx<span class="token operator">-</span>flask<span class="token punctuation">:</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,6),l=[i];function t(o,c){return s(),a("div",null,l)}const d=n(p,[["render",t],["__file","erpnext-saas.html.vue"]]);export{d as default};
