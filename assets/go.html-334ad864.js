import{_ as o,r,o as t,c as i,a as e,b as a,d as s,e as d}from"./app-331163d5.js";const c={},l=e("h1",{id:"使用gin初始化一个go项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用gin初始化一个go项目","aria-hidden":"true"},"#"),a(" 使用Gin初始化一个Go项目")],-1),h=e("h2",{id:"安装go语言环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装go语言环境","aria-hidden":"true"},"#"),a(" 安装Go语言环境")],-1),p={href:"https://golang.google.cn/dl/",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"初始化项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#初始化项目","aria-hidden":"true"},"#"),a(" 初始化项目")],-1),_=e("h3",{id:"配置代理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置代理","aria-hidden":"true"},"#"),a(" 配置代理")],-1),u={href:"https://goproxy.cn/",target:"_blank",rel:"noopener noreferrer"},m=d(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># xxx为项目名称</span>
go mod init xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b={href:"https://gin-gonic.com/zh-cn/docs/quickstart/",target:"_blank",rel:"noopener noreferrer"};function v(f,x){const n=r("ExternalLinkIcon");return t(),i("div",null,[l,h,e("p",null,[a("进入"),e("a",p,[a("官网"),s(n)]),a("下载windows系统的安装包，当前版本为go1.20.1.windows-amd64.msi")]),g,_,e("p",null,[e("a",u,[a("代理文档"),s(n)])]),m,e("p",null,[a("根据"),e("a",b,[a("Gin"),s(n)]),a("文档执行即可")])])}const w=o(c,[["render",v],["__file","go.html.vue"]]);export{w as default};