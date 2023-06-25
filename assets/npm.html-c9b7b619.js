import{_ as n,o as e,c as a,e as s}from"./app-c9231c3a.js";const i={},r=s(`<h1 id="npm-相关" tabindex="-1"><a class="header-anchor" href="#npm-相关" aria-hidden="true">#</a> npm 相关</h1><h2 id="切换镜像源" tabindex="-1"><a class="header-anchor" href="#切换镜像源" aria-hidden="true">#</a> 切换镜像源</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局切换</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org

<span class="token comment"># 临时切换</span>
<span class="token function">npm</span> <span class="token function">install</span> express <span class="token parameter variable">--registry</span> https://registry.npmjs.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可用镜像源" tabindex="-1"><a class="header-anchor" href="#可用镜像源" aria-hidden="true">#</a> 可用镜像源</h2><blockquote><p>npm -------- <code>https://registry.npmjs.org/</code> <br> yarn ------- <code>https://registry.yarnpkg.com/</code> <br> cnpm ------- <code>http://r.cnpmjs.org/</code> <br><s>taobao ----- <code>https://registry.npm.taobao.org/</code></s> <br> taobao ----- <code>https://registry.npmmirror.com/</code> <br> nj --------- <code>https://registry.nodejitsu.com/</code> <br> npmMirror -- <code>https://skimdb.npmjs.com/registry/</code> <br> edunpm ----- <code>http://registry.enpmjs.org/</code></p></blockquote><h2 id="提高node模块安装速度" tabindex="-1"><a class="header-anchor" href="#提高node模块安装速度" aria-hidden="true">#</a> 提高node模块安装速度</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> mirror-config-china
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>出现 sass 相关的安装错误时可解决该问题</p></blockquote><h2 id="npm-scripts相关" tabindex="-1"><a class="header-anchor" href="#npm-scripts相关" aria-hidden="true">#</a> npm scripts相关</h2><h3 id="pre和post两个钩子" tabindex="-1"><a class="header-anchor" href="#pre和post两个钩子" aria-hidden="true">#</a> pre和post两个钩子</h3><blockquote><p>npm会先查看有没有定义prelint和postlint两个钩子，如果有的话，就会先执行npm run prelint，然后执行npm run lint，最后执行npm run postlint</p></blockquote><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><ul><li>列出软件包所有的以前的版本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> view vue versions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看所有已安装的 npm 软件包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> list

<span class="token comment"># 仅获取顶层的软件包</span>
<span class="token function">npm</span> list <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token comment"># 通过指定名称来获取特定软件包的版本</span>
<span class="token function">npm</span> list cowsay
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看软件包在 npm 仓库上最新的可用版本</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">npm</span> view cowsay version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="私有镜像npm登陆问题" tabindex="-1"><a class="header-anchor" href="#私有镜像npm登陆问题" aria-hidden="true">#</a> 私有镜像npm登陆问题</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token builtin class-name">set</span> registry http://nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/  
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> //nvwa.jiuqi.com.cn/nexus/repository/npm-nvware-group/:_authToken<span class="token operator">=</span>NpmToken.3bb085e0-a9b5-36e1-be9f-311bb5630c2b  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>获取authToken</li></ul><blockquote><p>打开用户目录的 .npmrc，Linux在 ~/.npmrc， Windows在 C:/Users/&lt;用户名&gt;/.npmrc中，找到 &lt;registry-url&gt; 对应仓库地址</p></blockquote><h2 id="使用node自带的pnpm或yarn" tabindex="-1"><a class="header-anchor" href="#使用node自带的pnpm或yarn" aria-hidden="true">#</a> 使用node自带的pnpm或yarn</h2><blockquote><p>Node.js 默认提供 npm 包管理器，Corepack 为您提供 Yarn 和 pnpm，而无需安装它们。<br> Corepack 默认与 Node.js 14.19.0 和 16.9.0 一起分发，所以保证 Node.js 版本大于等于 16.9.0。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@7.14.0 <span class="token parameter variable">--activate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,25),t=[r];function c(d,l){return e(),a("div",null,t)}const p=n(i,[["render",c],["__file","npm.html.vue"]]);export{p as default};
