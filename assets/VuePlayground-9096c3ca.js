import{f as p,i as v,g as c,s as n,h as f,j as g,k as m,l as a,m as y,n as w}from"./app-c9231c3a.js";const R=e=>JSON.parse(decodeURIComponent(e));var V=p({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const i=v(),o=c(!0),t=n(),l=n(),s=f(()=>g({},i,R(e.settings))),u=async()=>{const{ReplStore:r,Repl:d}=await w(()=>import("./vue-repl-4f293808.js"),["assets/vue-repl-4f293808.js","assets/app-c9231c3a.js"]);t.value=d,l.value=new r({serializedState:decodeURIComponent(e.files)}),s.value.vueVersion&&await l.value.setVueVersion(s.value.vueVersion)};return m(async()=>{await u(),o.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[o.value?a(y,{class:"preview-loading",height:192}):null,t.value?a(t.value,{store:l.value,autoResize:!0,...s.value,layout:"horizontal"}):null])])]}});export{V as default};
