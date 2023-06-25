import{_ as e,o as a,c as n,e as s}from"./app-c9231c3a.js";const i={},r=s(`<h1 id="git-文件忽略" tabindex="-1"><a class="header-anchor" href="#git-文件忽略" aria-hidden="true">#</a> Git 文件忽略</h1><h2 id="情境" tabindex="-1"><a class="header-anchor" href="#情境" aria-hidden="true">#</a> 情境</h2><p>​ <em>git文件上传之后修改gitignore上传文件无法忽略</em></p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><ul><li>修改 .gitignore 文件</li></ul><div class="language-gitignore line-numbers-mode" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token entry string">node_modules</span>
<span class="token entry string">package-lock.json</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>清除对应文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),t=[r];function l(d,c){return a(),n("div",null,t)}const g=e(i,[["render",l],["__file","gitignore.html.vue"]]);export{g as default};
