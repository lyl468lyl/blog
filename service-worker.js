if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,r)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let d={};const t=s=>a(s,c),f={module:{uri:c},exports:d,require:t};e[c]=Promise.all(i.map((s=>f[s]||t(s)))).then((s=>(r(...s),d)))}}define(["./workbox-2632ce8f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.html-053afba7.js",revision:"d085b443139c9d97671b17e3896a634f"},{url:"assets/404.html-81a48005.js",revision:"5100f30da98bb487bb0ebea59f6b34b8"},{url:"assets/app-603f7d46.js",revision:"e45c0981817f104fdb7f6d113df4203d"},{url:"assets/collection.html-6d9f495b.js",revision:"51e118a11e924c60c729751d7c2b03a4"},{url:"assets/collection.html-867a12f2.js",revision:"1763c67776894397099a9a6f6485120d"},{url:"assets/ERPnext V14 安装教程.html-7fad8336.js",revision:"971f7caa1d89fb7325201afeadcadf34"},{url:"assets/ERPnext V14 安装教程.html-face2469.js",revision:"7723df0310bcc21d63bb2cc7c8ddcdb2"},{url:"assets/giscus-52604b1e.js",revision:"0dc4f96c4ad6007435d62c6399fe95de"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-048a11bd.js",revision:"9a146659e31f07ae30033a50dd600580"},{url:"assets/index.html-24135547.js",revision:"9a146659e31f07ae30033a50dd600580"},{url:"assets/index.html-2f40e0d8.js",revision:"c8384fa051bc53a7a9d32107bd0373f2"},{url:"assets/index.html-382a2632.js",revision:"9a146659e31f07ae30033a50dd600580"},{url:"assets/index.html-3a5f41ef.js",revision:"56b449af03a9629b00596d105a5281c3"},{url:"assets/index.html-519e7eb6.js",revision:"9a146659e31f07ae30033a50dd600580"},{url:"assets/index.html-699203ef.js",revision:"326fec471a90ce56b281a2bc72892a04"},{url:"assets/index.html-81878273.js",revision:"6f482d73f3f03e5798d2d06f43d765c3"},{url:"assets/index.html-878ebe3c.js",revision:"7a256f94a128462f1a535d7050d9a886"},{url:"assets/index.html-9730acc8.js",revision:"9a146659e31f07ae30033a50dd600580"},{url:"assets/index.html-bab6ae51.js",revision:"9a146659e31f07ae30033a50dd600580"},{url:"assets/index.html-c784f9b4.js",revision:"356210e35243e3aa24f3979810b7549e"},{url:"assets/index.html-de6d7530.js",revision:"9a146659e31f07ae30033a50dd600580"},{url:"assets/index.html-e7aaa877.js",revision:"a349e6e132ca160608e72ebc93800a95"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/list.html-8bf8acc2.js",revision:"2cbdc27aa5947e2f5acc2827bf5e53ac"},{url:"assets/list.html-abfb788b.js",revision:"d94ee5b9f43c92d99122bfeace066267"},{url:"assets/markdown.esm-0191f9da.js",revision:"5e8c1ebb5afc5e81804eac9fe00a00c0"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/nav.html-94dcf514.js",revision:"cca21d52e1a70e75ce68548ad9508d01"},{url:"assets/nav.html-cc559883.js",revision:"090c9195ba9935cc56ee1bc36b1eacd7"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-6b63528b.css",revision:"12f207a223d407a0e2259a43dc166b63"},{url:"assets/vue-repl-65f0b72a.js",revision:"898f65c3e4b45fa874d29f0d28630b62"},{url:"assets/VuePlayground-33f26bad.js",revision:"9553ab545707a3c2290ec1d0158ad5ea"},{url:"assets/website.html-3b2b903e.js",revision:"c6469a2e768649d653954f13a7373b37"},{url:"assets/website.html-e4fb2f21.js",revision:"e5e7569d833704a216b68b3ae4248af0"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"index.html",revision:"491a11009adee06406bcd46c433cd4e0"},{url:"404.html",revision:"349061d99e02ea89fbd1435bd60fce9f"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
