import{_ as n,o as s,c as a,e as p}from"./app-06032555.js";const t={},e=p(`<h1 id="人工智能基础算法" tabindex="-1"><a class="header-anchor" href="#人工智能基础算法" aria-hidden="true">#</a> 人工智能基础算法</h1><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>import math

import numpy
import numpy as np
from scipy import stats
import matplotlib<span class="token operator">.</span>pyplot as plt
<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    speed <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">86</span><span class="token punctuation">,</span> <span class="token number">87</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">86</span><span class="token punctuation">,</span> <span class="token number">103</span><span class="token punctuation">,</span> <span class="token number">87</span><span class="token punctuation">,</span> <span class="token number">94</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">86</span><span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token operator">.</span>sum<span class="token punctuation">(</span>speed<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token comment">#89.76923076923077</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token operator">.</span>mean<span class="token punctuation">(</span>speed<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#89.76923076923077</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token operator">.</span>median<span class="token punctuation">(</span>speed<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">#87.0</span>
    <span class="token comment">#众数是出现次数最多的值</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>stats<span class="token operator">.</span>mode<span class="token punctuation">(</span>speed<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">#86</span>
    <span class="token comment">#标准差</span>
    <span class="token comment">#1.avg=sum(speed)/13</span>
    <span class="token comment">#2. diff=数组中每个值-avg</span>
    <span class="token comment">#3. 将所有diff相加取平均</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token operator">.</span>std<span class="token punctuation">(</span>speed<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">#方差</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token operator">.</span>var<span class="token punctuation">(</span>speed<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">#百分比</span>
    ages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">43</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">61</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span>

<span class="token comment">#百分之75是 43岁以下</span>
    <span class="token operator">x=</span>np<span class="token operator">.</span>percentile<span class="token punctuation">(</span>ages<span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token operator">x</span><span class="token punctuation">)</span><span class="token comment">#43</span>

<span class="token comment">#创建 0 到5 之间的随机浮点数 6个</span>
x1<span class="token operator">=</span>np<span class="token operator">.</span>random<span class="token operator">.</span>uniform<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x1<span class="token punctuation">)</span> <span class="token comment">#[0.47466292 0.18468731 0.31919511 0.12901193 0.02076105 0.31130294]</span>


<span class="token comment"># x=numpy.random.uniform(0, 0.5, 6)</span>
<span class="token comment"># x=np.linspace(0.5,10,20)</span>
<span class="token comment">#</span>
<span class="token comment"># y=x*2</span>
<span class="token comment"># plt.plot(x,y)</span>
<span class="token comment"># plt.show()</span>

<span class="token comment">#高斯分布</span>

<span class="token comment">#第一个参数</span>
<span class="token comment">#loc：float 此概率分布的均值</span>
<span class="token comment">#scale,此概率分布的标准差(对应于分布宽度,scale越大越胖)</span>
<span class="token comment"># x5 = numpy.random.normal(10.0, 5.0, 10000)  # (平均值，标准差，100000个数据)</span>
<span class="token comment">#</span>
<span class="token comment">#</span>
<span class="token comment"># print(x5)</span>
<span class="token comment">#</span>
<span class="token comment"># plt.hist(x5,100)</span>
<span class="token comment"># plt.show()</span>
<span class="token comment">#</span>
<span class="token comment"># #散点图</span>
<span class="token comment"># x8 = [5,7,8,7,2,17,2,9,4,11,12,9,6]</span>
<span class="token comment"># y8 = [99,86,87,88,111,86,103,87,94,78,77,85,86]</span>
<span class="token comment"># plt.scatter(x8,y8)</span>
<span class="token comment"># plt.show()</span>


<span class="token comment">#线性回归</span>
xs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>         					 <span class="token comment"># 创建表示 x 和 y 轴值的数组</span>
ys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token number">86</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">111</span><span class="token punctuation">,</span><span class="token number">86</span><span class="token punctuation">,</span><span class="token number">103</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">,</span><span class="token number">94</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">,</span><span class="token number">77</span><span class="token punctuation">,</span><span class="token number">85</span><span class="token punctuation">,</span><span class="token number">86</span><span class="token punctuation">]</span>
slope<span class="token punctuation">,</span> intercept<span class="token punctuation">,</span> r<span class="token punctuation">,</span> p<span class="token punctuation">,</span> std_err <span class="token operator">=</span> stats<span class="token operator">.</span>linregress<span class="token punctuation">(</span>xs<span class="token punctuation">,</span> ys<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;slope&quot;</span><span class="token punctuation">,</span>slope<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;intercept&quot;</span><span class="token punctuation">,</span>intercept<span class="token punctuation">)</span>
def myfunc<span class="token punctuation">(</span><span class="token operator">x</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">return</span> slope<span class="token variable">*x</span><span class="token operator">+</span>intercept
plt<span class="token operator">.</span>scatter<span class="token punctuation">(</span>xs<span class="token punctuation">,</span>ys<span class="token punctuation">)</span>

def add<span class="token punctuation">(</span><span class="token operator">x</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token operator">x</span><span class="token variable">*10</span>
list1<span class="token operator">=</span>map<span class="token punctuation">(</span>add<span class="token punctuation">,</span>xs<span class="token punctuation">)</span>


<span class="token keyword">for</span> key in list1<span class="token operator">.</span>values<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span>key<span class="token punctuation">)</span>


plt<span class="token operator">.</span>plot<span class="token punctuation">(</span>xs<span class="token punctuation">,</span>list<span class="token punctuation">(</span>map<span class="token punctuation">(</span>myfunc<span class="token punctuation">,</span>xs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
plt<span class="token operator">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","人工智能基础算法.html.vue"]]);export{k as default};
