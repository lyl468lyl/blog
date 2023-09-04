import{_ as s,o as n,c as a,e}from"./app-9bfb3056.js";const p={},o=e(`<h1 id="qio-项目" tabindex="-1"><a class="header-anchor" href="#qio-项目" aria-hidden="true">#</a> qio 项目</h1><ol><li>aws 主机同步到物理主机中(云主机挂载物理主机)</li></ol><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>sshfs sj01<span class="token variable">@192</span><span class="token operator">.</span><span class="token v-string string">168.50.230</span><span class="token punctuation">:</span><span class="token operator">/</span>opt<span class="token operator">/</span>sharedata <span class="token operator">/</span>home<span class="token operator">/</span>sharedata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><p>aws 和物理主机 (反向代理) 物理主机response给aws ,需要做nginx反向代理,配置如下</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">10073</span><span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span><span class="token operator">//</span><span class="token variable">$docker_host</span><span class="token punctuation">:</span><span class="token number">10073</span><span class="token punctuation">;</span>
        proxy_set_header HOST <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Host <span class="token variable">$host</span><span class="token punctuation">:</span><span class="token variable">$server_port</span><span class="token punctuation">;</span>
        proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
        proxy_set_header Connection upgrade<span class="token punctuation">;</span>
        proxy_set_header Accept<span class="token operator">-</span>Encoding gzip<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>目录存在位置</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#192.168.50.230/opt/coderdata</span>
<span class="token comment">#更新脚本的目录</span>
<span class="token operator">/</span>opt<span class="token operator">/</span>coderdata<span class="token operator">/</span>packages

<span class="token comment">#更新脚本/opt/coderdata/install_package.sh</span>

<span class="token comment">#!/bin/bash</span>

<span class="token comment"># 获取正在运行的容器列表</span>
containers<span class="token operator">=</span><span class="token variable">$(</span>docker ps <span class="token operator">--</span>format <span class="token string">&quot;{{.Names}}&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 遍历容器列表</span>
<span class="token keyword">for</span> container in <span class="token variable">$containers</span>
<span class="token keyword">do</span>
            echo <span class="token string">&quot;Installing source  in container: $container&quot;</span>
                
                <span class="token comment"># 在容器中执行 pip 安装命令</span>
                    docker exec <span class="token operator">-</span>it <span class="token variable">$container</span> pip config set global<span class="token operator">.</span>index<span class="token operator">-</span>url https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token regex">/pypi.tuna.tsinghua.edu.cn/simp</span><span class="token operator">le</span>
                    docker exec <span class="token operator">-</span>it <span class="token variable">$container</span> pip install <span class="token operator">--</span>force<span class="token operator">-</span>reinstall  <span class="token operator">/</span>liyulong<span class="token operator">/</span>isingsolver<span class="token operator">-</span><span class="token v-string string">0.0.1</span><span class="token operator">-</span>cp310<span class="token operator">-</span>cp310<span class="token operator">-</span>linux_x86_64<span class="token operator">.</span>whl
                    docker exec <span class="token operator">-</span>it <span class="token variable">$container</span> pip install <span class="token operator">--</span>force<span class="token operator">-</span>reinstall  <span class="token regex">/liyulong/isingmod</span><span class="token operator">-</span><span class="token v-string string">1.0.0</span><span class="token operator">-</span>cp310<span class="token operator">-</span>cp310<span class="token operator">-</span>linux_x86_64<span class="token operator">.</span>whl
                        echo <span class="token string">&quot;Package installed in container: $container&quot;</span>
                            echo <span class="token string">&quot;------------------------------&quot;</span>
                    done

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>镜像备份的位置</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">/</span>opt<span class="token regex">/coderdata/ima</span><span class="token operator">ge</span><span class="token operator">-</span>back<span class="token operator">/</span>qio<span class="token operator">-</span><span class="token v-string string">v2</span><span class="token operator">.</span>tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li></li><li></li><li></li><li></li></ol>`,4),t=[o];function l(i,r){return n(),a("div",null,t)}const d=s(p,[["render",l],["__file","qio 项目.html.vue"]]);export{d as default};
