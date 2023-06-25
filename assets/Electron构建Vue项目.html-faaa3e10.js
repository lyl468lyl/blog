import{_ as n,o as s,c as a,e as t}from"./app-03280341.js";const p={},o=t(`<h1 id="electron构建vue项目" tabindex="-1"><a class="header-anchor" href="#electron构建vue项目" aria-hidden="true">#</a> Electron构建Vue项目</h1><p>参考:https://blog.csdn.net/weixin_43558927/article/details/127224465</p><p>前置要求</p><p>node版本需要在16以上, electron-forge要求至少14.7以上 npm最好使用淘宝镜像, 通过 npm config set xxx xxx 设置对应参数 registry = “https://registry.npm.taobao.org/” disturl = “https://npm.taobao.org/dist”</p><p>下载 electron-quick-start</p><p>git clone https://github.com/electron/electron-quick-start.git</p><p>cd electron-quick-start</p><p>npm install</p><p>安装electron相关的插件</p><p>npm install --save-dev @electron-forge/cli</p><p>npm install --save-dev electron-builder</p><p>node install electron --save-dev</p><p>node install electron-packager</p><p>更换packeage.json文件,如下:</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;aps&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;生产计划与排成&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;main&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;scripts&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;start&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;electron .&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;start1&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;electron-forge start&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;buildwin&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;electron-builder --win --x64&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;package&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;electron-forge package&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;win&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;electron-packager ./ --platform=win64 --out ./windows  --overwrite  --ignore=node_modules --arch=x64&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;build&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;electron-packager ./dist/ --platform=win32 --arch=x64 --icon=./static/shangjian.ico --overwrite&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
 
  <span class="token string">&quot;author&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;商简智能&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;license&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;CC0-1.0&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;devDependencies&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;electron&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;^23.1.4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@electron-forge/cli&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;^6.0.5&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;electron-builder&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;^23.6.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;electron-packager&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;^17.1.1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token string">&quot;build&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
	
    <span class="token string">&quot;productName&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;生产计划与排成系统&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;appId&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;sj_001&quot;</span><span class="token punctuation">,</span>
    
    <span class="token string">&quot;directories&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
        <span class="token string">&quot;output&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;build&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
    <span class="token string">&quot;dmg&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
      <span class="token string">&quot;icon&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;./static/shangjian.ico&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;window&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
        <span class="token string">&quot;x&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;y&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;150&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;width&quot;</span><span class="token punctuation">:</span><span class="token number">500</span><span class="token punctuation">,</span>
        <span class="token string">&quot;height&quot;</span><span class="token punctuation">:</span><span class="token number">400</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mac&quot;</span><span class="token punctuation">:</span><span class="token punctuation">{</span>
      <span class="token string">&quot;icon&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;./static/shangjian.ico&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;target&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;dmg&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;zip&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string">&quot;win&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;icon&quot;</span><span class="token punctuation">:</span><span class="token string">&quot;./static/shangjian.ico&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;target&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;nsis&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;zip&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
 
    <span class="token string">&quot;nsis&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    	
        <span class="token string">&quot;oneClick&quot;</span><span class="token punctuation">:</span> false<span class="token punctuation">,</span>
        <span class="token string">&quot;allowElevation&quot;</span><span class="token punctuation">:</span> true<span class="token punctuation">,</span>
        <span class="token string">&quot;allowToChangeInstallationDirectory&quot;</span><span class="token punctuation">:</span> true<span class="token punctuation">,</span>
        <span class="token string">&quot;installerIcon&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;static/shangjian.ico&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;installerHeaderIcon&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;static/shangjian.ico&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;createDesktopShortcut&quot;</span><span class="token punctuation">:</span> true<span class="token punctuation">,</span>
        <span class="token string">&quot;createStartMenuShortcut&quot;</span><span class="token punctuation">:</span> true
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述配置解释:</p><p>&quot;scripts&quot;: { // forge组件是官方推荐的, 使用forge来启动测试即可 &quot;start&quot;: &quot;electron-forge start&quot;, // electron builder 生成可执行文件和安装包 &quot;buildwin&quot;:&quot;electron-builder --win --x64&quot;, // forge没有仔细查, 目前在macOS环境下是直接打包为macOS的可执行文件.app &quot;package&quot;: &quot;electron-forge package&quot;, // 另一个打包组件 packager, 此方式只能生成可执行文件, 没有安装包 &quot;package-win&quot;:&quot;electron-packager ./ --platform=win32 --out ./dist --overwrite --ignore=node_modules --arch=x64&quot;, // 用forge创建可分发的应用程序 &quot;make&quot;: &quot;electron-forge make&quot; },</p><p>修改main.js 如下</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">//</span> Modules to control application life <span class="token operator">and</span> create native browser window
const <span class="token punctuation">{</span>app<span class="token punctuation">,</span> BrowserWindow<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span>
const path <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
var os <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;os&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
function createWindow <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token operator">//</span> app<span class="token operator">.</span>dock<span class="token operator">.</span>hide<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">//</span> console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">//</span> console<span class="token operator">.</span>log<span class="token punctuation">(</span>os<span class="token operator">.</span>networkInterfaces<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>en1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">.</span>mac<span class="token punctuation">)</span>
  <span class="token operator">//</span> var mac<span class="token operator">=</span>os<span class="token operator">.</span>networkInterfaces<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>en1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">.</span>mac
  <span class="token operator">//</span> <span class="token keyword">if</span><span class="token punctuation">(</span>mac<span class="token operator">!=</span><span class="token string">&quot;20:c9:d0:cd:76:71&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token operator">//</span>   app<span class="token operator">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token operator">//</span>   console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;enter system&quot;</span><span class="token punctuation">)</span>
  <span class="token regex">//</span> <span class="token punctuation">}</span>

  <span class="token operator">//</span> Create the browser window<span class="token operator">.</span>
  const mainWindow <span class="token operator">=</span> new BrowserWindow<span class="token punctuation">(</span><span class="token punctuation">{</span>
    width<span class="token punctuation">:</span> <span class="token number">1200</span><span class="token punctuation">,</span>
    height<span class="token punctuation">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> __dirname<span class="token operator">+</span> <span class="token string">&quot;/static/shangjian.ico&quot;</span><span class="token punctuation">,</span>
    webPreferences<span class="token punctuation">:</span> <span class="token punctuation">{</span>
      preload<span class="token punctuation">:</span> path<span class="token operator">.</span>join<span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;preload.js&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token regex">//</span> <span class="token operator">and</span> load the index<span class="token operator">.</span>html of the app<span class="token operator">.</span>
  mainWindow<span class="token operator">.</span>loadFile<span class="token punctuation">(</span><span class="token string">&#39;./source/index.html&#39;</span><span class="token punctuation">)</span>

  <span class="token operator">//</span> Open the DevTools<span class="token operator">.</span>
   <span class="token operator">//</span>mainWindow<span class="token operator">.</span>webContents<span class="token operator">.</span>openDevTools<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token operator">//</span> This method will be called <span class="token keyword">when</span> Electron has finished
<span class="token operator">//</span> initialization <span class="token operator">and</span> is ready to create browser windows<span class="token operator">.</span>
<span class="token operator">//</span> Some APIs can only be used after this event occurs<span class="token operator">.</span>
app<span class="token operator">.</span>whenReady<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>then<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  createWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>

  app<span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;activate&#39;</span><span class="token punctuation">,</span> function <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">//</span> On macOS it&#39;<span class="token regex">s common to re-create a window in the app when the
    // doc</span>k icon is clicked <span class="token operator">and</span> there are no other windows open<span class="token operator">.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>BrowserWindow<span class="token operator">.</span>getAllWindows<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>length <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> createWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">//</span> Quit <span class="token keyword">when</span> all windows are closed<span class="token punctuation">,</span> except on macOS<span class="token operator">.</span> There<span class="token punctuation">,</span> it&#39;<span class="token regex">s common
// for applications and their menu bar to stay ac</span>tive <span class="token keyword">until</span> the user quits
<span class="token operator">//</span> explicitly with Cmd <span class="token operator">+</span> Q<span class="token operator">.</span>
app<span class="token operator">.</span>on<span class="token punctuation">(</span><span class="token string">&#39;window-all-closed&#39;</span><span class="token punctuation">,</span> function <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token operator">.</span>platform <span class="token operator">!=</span><span class="token operator">=</span> <span class="token string">&#39;darwin&#39;</span><span class="token punctuation">)</span> app<span class="token operator">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">//</span> In this file you can include the rest of your app&#39;<span class="token regex">s specific main process</span>
<span class="token operator">//</span> code<span class="token operator">.</span> You can also put them in separate files <span class="token operator">and</span> <span class="token keyword">require</span> them here<span class="token operator">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将vue打包的dist 文件拷贝到,source文件夹中</p><p>运行: npm run win //直接运行的文件</p><p>对打包的文件加密<strong>1.全局安装 <code>asar</code></strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>　　npm install asar -g
　　
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.在resources目录下使用asar指令进行加密</strong></p><p>asar pack ./app app.asar</p><p><strong>将原来的app文件夹删除</strong>就可以了，这样生成的app.asar就加密了之前的源代码，保证了安全性</p><p>![image-20230321185600790](/Users/li/Library/Application Support/typora-user-images/image-20230321185600790.png)</p>`,27),e=[o];function i(c,l){return s(),a("div",null,e)}const r=n(p,[["render",i],["__file","Electron构建Vue项目.html.vue"]]);export{r as default};
