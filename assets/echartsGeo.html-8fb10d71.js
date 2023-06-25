import{_ as s,r,o as i,c as l,a as e,b as a,d as o,e as t}from"./app-331163d5.js";const d={},c=e("h1",{id:"echarts合并多国数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#echarts合并多国数据","aria-hidden":"true"},"#"),a(" echarts合并多国数据")],-1),h=e("h2",{id:"下载地图数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载地图数据","aria-hidden":"true"},"#"),a(" 下载地图数据")],-1),u={href:"https://github.com/Surbowl/world-geo-json-zh",target:"_blank",rel:"noopener noreferrer"},p={href:"http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=33.521903996156105&lng=104.29849999999999&zoom=4",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"地图数据处理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#地图数据处理","aria-hidden":"true"},"#"),a(" 地图数据处理")],-1),_=e("code",null,"npm install -g mapshaper echarts-mapmaker",-1),v={href:"https://echarts-maps.github.io/echarts-geomapping-book-zh/howtos/add-ji-zhou-qu-to-tianjin/",target:"_blank",rel:"noopener noreferrer"},b=t(`<li><p>整理要合并的地图数据</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;type&quot;: &quot;FeatureCollection&quot;,
  &quot;features&quot;: [
    // 此处放置各国数据
    ...
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存文件命名为<code>world.json</code></p></li><li><p>通过<code>https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json</code>下载国内geojson数据，命名为china.json</p></li><li><p>执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>merge china.json world.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成文件 merged_china.json 文件</p></li><li><p>执行命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>markjs .<span class="token punctuation">\\</span>merged_china.json chinaworld.js chinaworld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成echarts可用的地图数据文件, 文件名称为<code>chinaworld.js</code>, echars中通过map的type值为<code>chinaworld</code>使用</p></li>`,4);function g(f,j){const n=r("ExternalLinkIcon");return i(),l("div",null,[c,h,e("blockquote",null,[e("p",null,[a("世界地图geo数据访问"),e("a",u,[a("Surbowl/world-geo-json-zh"),o(n)]),a(" 国内数据 "),e("a",p,[a("阿里云数据可视化"),o(n)])])]),m,e("ol",null,[e("li",null,[e("p",null,[a("安装工具 "),_,e("a",v,[a("文档"),o(n)])])]),b])])}const x=s(d,[["render",g],["__file","echartsGeo.html.vue"]]);export{x as default};