import{_ as n,o as s,c as a,e}from"./app-d0d8bb13.js";const t={},o=e(`<h1 id="机器学习" tabindex="-1"><a class="header-anchor" href="#机器学习" aria-hidden="true">#</a> 机器学习</h1><h4 id="一-开发工具" tabindex="-1"><a class="header-anchor" href="#一-开发工具" aria-hidden="true">#</a> 一 开发工具</h4><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#1. python 3.7 安装</span>
<span class="token comment">#2. anaconda 安装</span>
<span class="token comment">#3. jupyter notebook 安装</span>
 <span class="token number">1</span><span class="token punctuation">)</span> conda创建一个ai虚拟环境
 conda create <span class="token operator">-</span>n my_env python<span class="token operator">=</span><span class="token number">3.10</span>
 <span class="token number">2</span><span class="token punctuation">)</span> 安装jupyter notebook
 conda install jupyter notebook
 <span class="token number">3</span><span class="token punctuation">)</span> 启动jupyter notebook
 jupyter notebook
 <span class="token number">4</span><span class="token punctuation">)</span> jupyter 优化插件
 pip install jupyterthemes
 配置<span class="token punctuation">:</span>
 jt <span class="token operator">-t</span> grade3 <span class="token operator">-f</span> fira <span class="token operator">-</span>fs <span class="token number">16</span> <span class="token operator">-</span>cellw <span class="token number">90</span><span class="token operator">%</span> <span class="token operator">-</span>ofs <span class="token number">11</span> <span class="token operator">-</span>dfs <span class="token number">11</span> <span class="token operator">-T</span>
 启动
 jupyter notebook
  
 会弹出jupyter 交互网址<span class="token punctuation">:</span>
 http<span class="token punctuation">:</span><span class="token operator">//</span>localhost<span class="token punctuation">:</span><span class="token number">8888</span><span class="token operator">/</span>tree

<span class="token comment">#安装matplotlib</span>
 pip install matplotlib



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[o];function p(i,c){return s(),a("div",null,l)}const d=n(t,[["render",p],["__file","机器学习.html.vue"]]);export{d as default};
