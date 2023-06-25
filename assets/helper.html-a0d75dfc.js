import{_ as n,o as s,c as a,e as t}from"./app-331163d5.js";const p={},e=t(`<h1 id="常用javascript代码" tabindex="-1"><a class="header-anchor" href="#常用javascript代码" aria-hidden="true">#</a> 常用JavaScript代码</h1><h2 id="helper" tabindex="-1"><a class="header-anchor" href="#helper" aria-hidden="true">#</a> helper</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 计算文件大小
 * <span class="token keyword">@param</span> <span class="token parameter">bytes</span>
 * <span class="token keyword">@returns</span> string
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">byteConvert</span><span class="token punctuation">(</span>bytes<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> symbols <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;bytes&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;KB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;GB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;TB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;EB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ZB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;YB&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> exp <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span> <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>exp <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    exp <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>exp <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
  bytes <span class="token operator">=</span> bytes <span class="token operator">/</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token operator">*</span> i<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>bytes<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&gt;</span> bytes<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> bytes<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    bytes <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> bytes <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> symbols<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 判断滚动条是否触底
 * <span class="token keyword">@param</span> <span class="token parameter">target</span>
 * <span class="token keyword">@returns</span> boolean
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isScrollTouchBottom</span><span class="token punctuation">(</span>target<span class="token operator">:</span> Element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> scrollTop<span class="token punctuation">,</span> clientHeight<span class="token punctuation">,</span> scrollHeight <span class="token punctuation">}</span> <span class="token operator">=</span> target
    <span class="token keyword">return</span> scrollTop <span class="token operator">+</span> clientHeight <span class="token operator">===</span> scrollHeight
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 将滚动条移动到底部
 * <span class="token keyword">@param</span> <span class="token parameter">scrollElement</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toBottom</span><span class="token punctuation">(</span>scrollElement<span class="token operator">:</span> Element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>scrollElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scrollElement<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      top<span class="token operator">:</span> scrollElement<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">,</span>
      behavior<span class="token operator">:</span> <span class="token string">&#39;smooth&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","helper.html.vue"]]);export{r as default};