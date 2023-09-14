import{_ as n,o as s,c as a,e}from"./app-d0d8bb13.js";const t={},p=e(`<h1 id="flask-和vue实现网页客服" tabindex="-1"><a class="header-anchor" href="#flask-和vue实现网页客服" aria-hidden="true">#</a> flask 和vue实现网页客服</h1><ol><li><p>服务端安装(flask 组件安装)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>Flask<span class="token operator">==</span><span class="token v-string string">2.2.5</span>
Flask<span class="token operator">-</span>SocketIO<span class="token operator">==</span><span class="token v-string string">5.2.0</span>
Flask<span class="token operator">-</span>Cors
Flask<span class="token operator">-</span>SQLAlchemy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>随后我们简单写一个flask的入口启动文件 manage.py</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import pymysql
from flask import request<span class="token punctuation">,</span>jsonify
from flask_cors import CORS
from flask_socketio import SocketIO<span class="token punctuation">,</span>send<span class="token punctuation">,</span>emit
import urllib<span class="token operator">.</span>parse

pymysql<span class="token operator">.</span>install_as_MySQLdb<span class="token punctuation">(</span><span class="token punctuation">)</span>

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

CORS<span class="token punctuation">(</span>app<span class="token punctuation">,</span>cors_allowed_origins<span class="token operator">=</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>

socketio <span class="token operator">=</span> SocketIO<span class="token punctuation">(</span>app<span class="token punctuation">,</span>cors_allowed_origins<span class="token operator">=</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>

<span class="token variable">@socketio</span><span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">)</span>
def handle_message<span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    message <span class="token operator">=</span> urllib<span class="token operator">.</span>parse<span class="token operator">.</span>unquote<span class="token punctuation">(</span>message<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
    send<span class="token punctuation">(</span>message<span class="token punctuation">,</span>broadcast<span class="token operator">=</span>True<span class="token punctuation">)</span>

<span class="token variable">@socketio</span><span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span> namespace<span class="token operator">=</span><span class="token string">&#39;/chat&#39;</span><span class="token punctuation">)</span>
def test_connect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    emit<span class="token punctuation">(</span><span class="token string">&#39;my response&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Connected&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token variable">@socketio</span><span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span> namespace<span class="token operator">=</span><span class="token string">&#39;/chat&#39;</span><span class="token punctuation">)</span>
def test_disconnect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Client disconnected&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    socketio<span class="token operator">.</span>run<span class="token punctuation">(</span>app<span class="token punctuation">,</span>debug<span class="token operator">=</span>True<span class="token punctuation">,</span>host<span class="token operator">=</span><span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token number">5050</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>vue 2.6.11 前端安装依赖</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token string">&quot;socket.io-client&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;^4.5.3&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;vue-socket.io&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;^3.0.10&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#在入口文件main.js中引用</span>
import VueSocketIO from <span class="token string">&quot;vue-socket.io&quot;</span><span class="token punctuation">;</span>
import SocketIO from <span class="token string">&quot;socket.io-client&quot;</span><span class="token punctuation">;</span>
Vue<span class="token operator">.</span><span class="token keyword">use</span><span class="token punctuation">(</span>new VueSocketIO<span class="token punctuation">(</span><span class="token punctuation">{</span>
connection<span class="token punctuation">:</span> SocketIO<span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:5050&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
autoConnect<span class="token punctuation">:</span> true <span class="token operator">//</span> 自动连接
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
extraHeaders<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>1</p></li><li><p>1</p></li></ol>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","flask 和vue实现网页客服.html.vue"]]);export{r as default};
