import{_ as n,o as s,c as a,e as t}from"./app-9bfb3056.js";const e={},p=t(`<h1 id="python-flask-推送功能" tabindex="-1"><a class="header-anchor" href="#python-flask-推送功能" aria-hidden="true">#</a> python flask 推送功能</h1><p>python代码</p><p>sse.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/6/8 19:01</span>
<span class="token comment"># @Author  : dzg</span>
from flask import Flask<span class="token punctuation">,</span> render_template
from flask_sse import sse
from flask_cors import CORS

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
app<span class="token operator">.</span>config<span class="token punctuation">[</span><span class="token string">&quot;REDIS_URL&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;redis://:123456@192.168.50.230&quot;</span>
app<span class="token operator">.</span>register_blueprint<span class="token punctuation">(</span>sse<span class="token punctuation">,</span> url_prefix<span class="token operator">=</span><span class="token string">&quot;/stream&quot;</span><span class="token punctuation">)</span>
CORS<span class="token punctuation">(</span>app<span class="token punctuation">,</span> resources<span class="token operator">=</span><span class="token punctuation">{</span>r<span class="token string">&quot;/stream/*&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;origins&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment"># @app.route(&#39;/&#39;)</span>
<span class="token comment"># def index():</span>
<span class="token comment">#     return render_template(&quot;index.html&quot;)</span>


<span class="token variable">@app</span><span class="token operator">.</span>route<span class="token punctuation">(</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">)</span>
def test<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    sse<span class="token operator">.</span>publish<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;dzg111&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;16&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span> type<span class="token operator">=</span><span class="token string">&quot;sseTest&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Message send&quot;</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app<span class="token operator">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token filehandle symbol">&lt;head&gt;</span>
    <span class="token filehandle symbol">&lt;title&gt;</span>flask<span class="token operator">-</span>sse test<span class="token filehandle symbol">&lt;/title&gt;</span>
<span class="token filehandle symbol">&lt;/head&gt;</span>
<span class="token filehandle symbol">&lt;body&gt;</span>
    <span class="token filehandle symbol">&lt;h1&gt;</span>flask<span class="token operator">-</span>sse test<span class="token filehandle symbol">&lt;/h1&gt;</span>
<span class="token filehandle symbol">&lt;/body&gt;</span>
<span class="token filehandle symbol">&lt;script&gt;</span>
    <span class="token operator">//</span> 创建 EventSource 对象连接服务器
    var source <span class="token operator">=</span> new EventSource<span class="token punctuation">(</span><span class="token string">&quot;http://192.168.50.230:5000/stream&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">//</span> 服务器发送信息到客户端时，会触发
    source<span class="token operator">.</span>addEventListener<span class="token punctuation">(</span><span class="token string">&#39;sseTest&#39;</span><span class="token punctuation">,</span> function<span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">{</span>
        var res_data <span class="token operator">=</span> JSON<span class="token operator">.</span>parse<span class="token punctuation">(</span>event<span class="token operator">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token operator">.</span>log<span class="token punctuation">(</span>res_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> false<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">//</span> 连接异常时会触发 error 事件并自动重连
    source<span class="token operator">.</span>addEventListener<span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> function<span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token operator">.</span>target<span class="token operator">.</span>readyState <span class="token operator">==</span><span class="token operator">=</span> EventSource<span class="token operator">.</span>CLOSED<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&#39;Disconnected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token operator">.</span>target<span class="token operator">.</span>readyState <span class="token operator">==</span><span class="token operator">=</span> EventSource<span class="token operator">.</span>CONNECTING<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&#39;Connecting...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> false<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token filehandle symbol">&lt;/script&gt;</span>
<span class="token filehandle symbol">&lt;/html&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","python flask 推送功能.html.vue"]]);export{r as default};
