import{_ as e,o as a,c as s,e as n}from"./app-c9231c3a.js";const r={},d=n(`<h1 id="node后台常驻运行" tabindex="-1"><a class="header-anchor" href="#node后台常驻运行" aria-hidden="true">#</a> Node后台常驻运行</h1><h2 id="情境" tabindex="-1"><a class="header-anchor" href="#情境" aria-hidden="true">#</a> 情境</h2><p>​ <em>linux开启程序当shell关闭后，进程丢失</em></p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><ul><li><p>安装forever</p><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>yarn global add forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>用forever开启nodejs程序</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>forever start xxx<span class="token operator">.</span>js <span class="token comment">//运行node程序</span>
forever start <span class="token operator">-</span>c “npm start”  path<span class="token operator">/</span>xxx<span class="token operator">.</span>js <span class="token comment">//用npm start来运行你的程序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>停止运行nodejs程序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  forever stop xxx.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,5),i=[d];function o(l,t){return a(),s("div",null,i)}const p=e(r,[["render",o],["__file","node.html.vue"]]);export{p as default};
