import{_ as n,o as s,c as a,e}from"./app-9bfb3056.js";const p={},t=e(`<h1 id="tugraph-项目" tabindex="-1"><a class="header-anchor" href="#tugraph-项目" aria-hidden="true">#</a> tugraph 项目</h1><ol><li>安装tugraph</li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>docker run <span class="token operator">-</span>dt <span class="token operator">-p</span> <span class="token number">7070</span><span class="token punctuation">:</span><span class="token number">7070</span> <span class="token operator">--</span>name tugraph_demo tugraph<span class="token operator">/</span>tugraph<span class="token operator">-</span>runtime<span class="token operator">-</span>centos7
docker exec <span class="token operator">-</span>it tugraph_demo bash
<span class="token comment"># 进入docker环境后执行如下命令启动服务</span>
lgraph_server <span class="token operator">-d</span> start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.启动 TuGraph Explore</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 1) 下载镜像</span>
$ docker pull antvis<span class="token operator">/</span>tugraph_explore<span class="token punctuation">:</span><span class="token v-string string">1.0.0</span>

<span class="token operator">//</span> 加载完毕后，提示已加载镜像

<span class="token operator">//</span> 如果已经将镜像下载到本地了，使用 import
$ docker import antvis<span class="token operator">/</span>tugraph_explore<span class="token punctuation">:</span><span class="token v-string string">1.0.0</span>
<span class="token comment"># 2)启动容器</span>
$ docker run <span class="token operator">-d</span> <span class="token operator">-p</span> <span class="token number">7091</span><span class="token punctuation">:</span><span class="token number">7091</span> <span class="token operator">-</span>it antvis<span class="token operator">/</span>tugraph_explore<span class="token punctuation">:</span><span class="token v-string string">1.0.0</span>
$ docker exec <span class="token operator">-</span>it <span class="token punctuation">{</span>container_id<span class="token punctuation">}</span> bash

<span class="token comment">#3)启动 TuGraph Explore</span>
$ cd <span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>tugraphexplore
$ npm run dev <span class="token operator">--</span> <span class="token operator">-p</span> <span class="token number">7091</span>

<span class="token comment"># 访问</span>
http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token v-string string">192.168.50.230</span><span class="token punctuation">:</span><span class="token number">7091</span><span class="token operator">/</span>tugraph<span class="token operator">/</span>explore<span class="token operator">.</span>html

<span class="token comment">#链接图数据库</span>

输入admin
密码<span class="token punctuation">:</span><span class="token number">73</span><span class="token variable">@TuGraph</span>
链接数据库<span class="token punctuation">:</span><span class="token v-string string">192.168.50.230</span><span class="token punctuation">:</span><span class="token number">7070</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[t];function o(l,i){return s(),a("div",null,r)}const d=n(p,[["render",o],["__file","tugraph.html.vue"]]);export{d as default};
