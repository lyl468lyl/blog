import{_ as n,o as s,c as a,e}from"./app-03280341.js";const p={},t=e(`<h1 id="前后端代码加密以及授权文档" tabindex="-1"><a class="header-anchor" href="#前后端代码加密以及授权文档" aria-hidden="true">#</a> 前后端代码加密以及授权文档</h1><p>前端加密和授权:</p><p>使用electron技术,将前端打包成桌面应用.</p><ol><li><p>下载eletron</p><div class="language-per line-numbers-mode" data-ext="per"><pre class="language-per"><code>
npm install electron --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>下载打包工具</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>npm install electron<span class="token operator">-</span>builder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>3.更改配置文件package.json</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;aps&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;version&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;生产计划与排成&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;main&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;scripts&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
 <span class="token string">&quot;start&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;electron .&quot;</span><span class="token punctuation">,</span>
 <span class="token string">&quot;buildwin&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;electron-builder --win --x64&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string">&quot;author&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;商简智能&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;license&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;CC0-1.0&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.更改main.js如下</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">//</span> Modules to control application life <span class="token operator">and</span> create native browser window
const <span class="token punctuation">{</span>app<span class="token punctuation">,</span> BrowserWindow<span class="token punctuation">,</span>ipcMain<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span>
const path <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
var os <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;os&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
function createWindow <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

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
  
  <span class="token operator">//</span> app<span class="token operator">.</span>dock<span class="token operator">.</span>hide<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token operator">.</span>log<span class="token punctuation">(</span>os<span class="token operator">.</span>networkInterfaces<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token operator">.</span>log<span class="token punctuation">(</span>os<span class="token operator">.</span>networkInterfaces<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>en1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">.</span>mac<span class="token punctuation">)</span>
  var mac<span class="token operator">=</span>os<span class="token operator">.</span>networkInterfaces<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>en1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">.</span>mac
  <span class="token keyword">if</span><span class="token punctuation">(</span>mac<span class="token operator">!=</span><span class="token string">&quot;20:c9:d0:cd:76:71&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

   <span class="token operator">//</span> app<span class="token operator">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

    mainWindow<span class="token operator">.</span>loadFile<span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">)</span>
    console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;enter system&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>

     mainWindow<span class="token operator">.</span>loadFile<span class="token punctuation">(</span><span class="token string">&#39;./source/index.html&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  ipcMain<span class="token operator">.</span>handle<span class="token punctuation">(</span><span class="token string">&#39;dark-mode:toggle&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nativeTheme<span class="token operator">.</span>shouldUseDarkColors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nativeTheme<span class="token operator">.</span>themeSource <span class="token operator">=</span> <span class="token string">&#39;light&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      nativeTheme<span class="token operator">.</span>themeSource <span class="token operator">=</span> <span class="token string">&#39;dark&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> nativeTheme<span class="token operator">.</span>shouldUseDarkColors
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  ipcMain<span class="token operator">.</span>handle<span class="token punctuation">(</span><span class="token string">&#39;dark-mode:system&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    nativeTheme<span class="token operator">.</span>themeSource <span class="token operator">=</span> <span class="token string">&#39;system&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
 

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><p>原理说明: main.js中的代码</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;xxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token operator">.</span>log<span class="token punctuation">(</span>os<span class="token operator">.</span>networkInterfaces<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token operator">.</span>log<span class="token punctuation">(</span>os<span class="token operator">.</span>networkInterfaces<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>en1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">.</span>mac<span class="token punctuation">)</span>
  var mac<span class="token operator">=</span>os<span class="token operator">.</span>networkInterfaces<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>en1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">.</span>mac
  <span class="token keyword">if</span><span class="token punctuation">(</span>mac<span class="token operator">!=</span><span class="token string">&quot;20:c9:d0:cd:76:71&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

   <span class="token operator">//</span> app<span class="token operator">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>

    mainWindow<span class="token operator">.</span>loadFile<span class="token punctuation">(</span><span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">)</span>
    console<span class="token operator">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;enter system&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>

     mainWindow<span class="token operator">.</span>loadFile<span class="token punctuation">(</span><span class="token string">&#39;./source/index.html&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

说明<span class="token punctuation">:</span> 获取本机的mac地址<span class="token punctuation">,</span>与授权的mac地址是否一致<span class="token punctuation">,</span>一致通过<span class="token punctuation">,</span>否则授权失败
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>正常: ![image-20230322130201175](/Users/li/Library/Application Support/typora-user-images/image-20230322130201175.png)</p><p>鉴权失败:</p><p>![image-20230322130132826](/Users/li/Library/Application Support/typora-user-images/image-20230322130132826.png)</p><h5 id="后端混淆加密" tabindex="-1"><a class="header-anchor" href="#后端混淆加密" aria-hidden="true">#</a> 后端混淆加密:</h5><p>我使用proguard实现代码混淆。主要是在项目的 pom中使用插件来实现</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> encoding<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>project xmlns<span class="token operator">=</span><span class="token string">&quot;http://maven.apache.org/POM/4.0.0&quot;</span> xmlns<span class="token punctuation">:</span>xsi<span class="token operator">=</span><span class="token string">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span>
         xsi<span class="token punctuation">:</span>schemaLocation<span class="token operator">=</span><span class="token string">&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;</span><span class="token operator">&gt;</span>
    <span class="token filehandle symbol">&lt;modelVersion&gt;</span><span class="token v-string string">4.0.0</span><span class="token filehandle symbol">&lt;/modelVersion&gt;</span>
    <span class="token filehandle symbol">&lt;parent&gt;</span>
        <span class="token filehandle symbol">&lt;groupId&gt;</span>org<span class="token operator">.</span>springframework<span class="token operator">.</span>boot<span class="token filehandle symbol">&lt;/groupId&gt;</span>
        <span class="token filehandle symbol">&lt;artifactId&gt;</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>parent<span class="token filehandle symbol">&lt;/artifactId&gt;</span>
        <span class="token filehandle symbol">&lt;version&gt;</span><span class="token v-string string">2.7.4</span><span class="token filehandle symbol">&lt;/version&gt;</span>
        <span class="token filehandle symbol">&lt;relativePath/&gt;</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> lookup parent from repository <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token filehandle symbol">&lt;/parent&gt;</span>
    <span class="token filehandle symbol">&lt;groupId&gt;</span>com<span class="token operator">.</span>itlab1024<span class="token filehandle symbol">&lt;/groupId&gt;</span>
    <span class="token filehandle symbol">&lt;artifactId&gt;</span>Spring<span class="token operator">-</span>Boot<span class="token operator">-</span>Proguard<span class="token filehandle symbol">&lt;/artifactId&gt;</span>
    <span class="token filehandle symbol">&lt;version&gt;</span><span class="token v-string string">0.0.1</span><span class="token operator">-</span>SNAPSHOT<span class="token filehandle symbol">&lt;/version&gt;</span>
    <span class="token filehandle symbol">&lt;name&gt;</span>Spring<span class="token operator">-</span>Boot<span class="token operator">-</span>Proguard<span class="token filehandle symbol">&lt;/name&gt;</span>
    <span class="token filehandle symbol">&lt;description&gt;</span>Spring<span class="token operator">-</span>Boot<span class="token operator">-</span>Proguard<span class="token filehandle symbol">&lt;/description&gt;</span>
    <span class="token filehandle symbol">&lt;properties&gt;</span>
        <span class="token filehandle symbol">&lt;java.version&gt;</span><span class="token number">1.8</span><span class="token filehandle symbol">&lt;/java.version&gt;</span>
    <span class="token filehandle symbol">&lt;/properties&gt;</span>
    <span class="token filehandle symbol">&lt;dependencies&gt;</span>
        <span class="token filehandle symbol">&lt;dependency&gt;</span>
            <span class="token filehandle symbol">&lt;groupId&gt;</span>org<span class="token operator">.</span>springframework<span class="token operator">.</span>boot<span class="token filehandle symbol">&lt;/groupId&gt;</span>
            <span class="token filehandle symbol">&lt;artifactId&gt;</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>web<span class="token filehandle symbol">&lt;/artifactId&gt;</span>
        <span class="token filehandle symbol">&lt;/dependency&gt;</span>
 
        <span class="token filehandle symbol">&lt;dependency&gt;</span>
            <span class="token filehandle symbol">&lt;groupId&gt;</span>org<span class="token operator">.</span>springframework<span class="token operator">.</span>boot<span class="token filehandle symbol">&lt;/groupId&gt;</span>
            <span class="token filehandle symbol">&lt;artifactId&gt;</span>spring<span class="token operator">-</span>boot<span class="token operator">-</span>starter<span class="token operator">-</span>test<span class="token filehandle symbol">&lt;/artifactId&gt;</span>
            <span class="token filehandle symbol">&lt;scope&gt;</span>test<span class="token filehandle symbol">&lt;/scope&gt;</span>
        <span class="token filehandle symbol">&lt;/dependency&gt;</span>
    <span class="token filehandle symbol">&lt;/dependencies&gt;</span>
 
    <span class="token filehandle symbol">&lt;build&gt;</span>
        <span class="token filehandle symbol">&lt;plugins&gt;</span>
            <span class="token filehandle symbol">&lt;plugin&gt;</span>
                <span class="token filehandle symbol">&lt;groupId&gt;</span>com<span class="token operator">.</span>github<span class="token operator">.</span>wvengen<span class="token filehandle symbol">&lt;/groupId&gt;</span>
                <span class="token filehandle symbol">&lt;artifactId&gt;</span>proguard<span class="token operator">-</span>maven<span class="token operator">-</span>plugin<span class="token filehandle symbol">&lt;/artifactId&gt;</span>
                <span class="token filehandle symbol">&lt;version&gt;</span><span class="token v-string string">2.6.0</span><span class="token filehandle symbol">&lt;/version&gt;</span>
                <span class="token filehandle symbol">&lt;executions&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 以下配置说明执行mvn的<span class="token keyword">package</span>命令时候，会执行proguard<span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token filehandle symbol">&lt;execution&gt;</span>
                        <span class="token filehandle symbol">&lt;phase&gt;</span><span class="token keyword">package</span><span class="token filehandle symbol">&lt;/phase&gt;</span>
                        <span class="token filehandle symbol">&lt;goals&gt;</span>
                            <span class="token filehandle symbol">&lt;goal&gt;</span>proguard<span class="token filehandle symbol">&lt;/goal&gt;</span>
                        <span class="token filehandle symbol">&lt;/goals&gt;</span>
                    <span class="token filehandle symbol">&lt;/execution&gt;</span>
                <span class="token filehandle symbol">&lt;/executions&gt;</span>
                <span class="token filehandle symbol">&lt;configuration&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 就是输入Jar的名称，我们要知道，代码混淆其实是将一个原始的jar，生成一个混淆后的jar，那么就会有输入输出。 <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token filehandle symbol">&lt;injar&gt;</span><span class="token variable">$</span><span class="token punctuation">{</span>project<span class="token operator">.</span>build<span class="token operator">.</span>finalName<span class="token punctuation">}</span><span class="token operator">.</span>jar<span class="token filehandle symbol">&lt;/injar&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 输出jar名称，输入输出jar同名的时候就是覆盖，也是比较常用的配置。 <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token filehandle symbol">&lt;outjar&gt;</span><span class="token variable">$</span><span class="token punctuation">{</span>project<span class="token operator">.</span>build<span class="token operator">.</span>finalName<span class="token punctuation">}</span><span class="token operator">.</span>jar<span class="token filehandle symbol">&lt;/outjar&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 是否混淆 默认是true <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token filehandle symbol">&lt;obfuscate&gt;</span>true<span class="token filehandle symbol">&lt;/obfuscate&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 配置一个文件，通常叫做proguard<span class="token operator">.</span>cfg<span class="token punctuation">,</span>该文件主要是配置options选项，也就是说使用proguard<span class="token operator">.</span>cfg那么options下的所有内容都可以移到proguard<span class="token operator">.</span>cfg中 <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token filehandle symbol">&lt;proguardInclude&gt;</span><span class="token variable">$</span><span class="token punctuation">{</span>project<span class="token operator">.</span>basedir<span class="token punctuation">}</span><span class="token operator">/</span>proguard<span class="token operator">.</span>cfg<span class="token filehandle symbol">&lt;/proguardInclude&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 额外的jar包，通常是项目编译所需要的jar <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token filehandle symbol">&lt;libs&gt;</span>
                        <span class="token filehandle symbol">&lt;lib&gt;</span><span class="token variable">$</span><span class="token punctuation">{</span>java<span class="token operator">.</span>home<span class="token punctuation">}</span><span class="token operator">/</span>lib<span class="token operator">/</span>rt<span class="token operator">.</span>jar<span class="token filehandle symbol">&lt;/lib&gt;</span>
                        <span class="token filehandle symbol">&lt;lib&gt;</span><span class="token variable">$</span><span class="token punctuation">{</span>java<span class="token operator">.</span>home<span class="token punctuation">}</span><span class="token operator">/</span>lib<span class="token operator">/</span>jce<span class="token operator">.</span>jar<span class="token filehandle symbol">&lt;/lib&gt;</span>
                        <span class="token filehandle symbol">&lt;lib&gt;</span><span class="token variable">$</span><span class="token punctuation">{</span>java<span class="token operator">.</span>home<span class="token punctuation">}</span><span class="token operator">/</span>lib<span class="token operator">/</span>jsse<span class="token operator">.</span>jar<span class="token filehandle symbol">&lt;/lib&gt;</span>
                    <span class="token filehandle symbol">&lt;/libs&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 对输入jar进行过滤比如，如下配置就是对META<span class="token operator">-</span>INFO文件不处理。 <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token filehandle symbol">&lt;inLibsFilter&gt;</span><span class="token operator">!</span>META<span class="token operator">-</span>INF<span class="token operator">/</span><span class="token operator">**</span><span class="token punctuation">,</span><span class="token operator">!</span>META<span class="token operator">-</span>INF<span class="token operator">/</span>versions<span class="token regex">/9/</span><span class="token operator">**</span><span class="token operator">.</span>class<span class="token filehandle symbol">&lt;/inLibsFilter&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 这是输出路径配置，但是要注意这个路径必须要包括injar标签填写的jar <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token filehandle symbol">&lt;outputDirectory&gt;</span><span class="token variable">$</span><span class="token punctuation">{</span>project<span class="token operator">.</span>basedir<span class="token punctuation">}</span><span class="token operator">/</span>target<span class="token filehandle symbol">&lt;/outputDirectory&gt;</span>
                    <span class="token filehandle symbol">&lt;!--这里特别重要，此处主要是配置混淆的一些细节选项，比如哪些类不需要混淆，哪些需要混淆--&gt;</span>
                    <span class="token filehandle symbol">&lt;options&gt;</span>
                        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 可以在此处写option标签配置，不过我上面使用了proguardInclude，故而我更喜欢在proguard<span class="token operator">.</span>cfg中配置 <span class="token operator">--</span><span class="token operator">&gt;</span>
                    <span class="token filehandle symbol">&lt;/options&gt;</span>
                <span class="token filehandle symbol">&lt;/configuration&gt;</span>
            <span class="token filehandle symbol">&lt;/plugin&gt;</span>
            
        <span class="token filehandle symbol">&lt;/plugins&gt;</span>
    <span class="token filehandle symbol">&lt;/build&gt;</span>
<span class="token filehandle symbol">&lt;/project&gt;</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加proguard.cfg配置</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment">#指定Java的版本</span>
<span class="token operator">-</span>target <span class="token number">1.8</span>
<span class="token comment">#proguard会对代码进行优化压缩，他会删除从未使用的类或者类成员变量等</span>
<span class="token operator">-</span>dontshrink
<span class="token comment">#是否关闭字节码级别的优化，如果不开启则设置如下配置</span>
<span class="token operator">-</span>dontoptimize
<span class="token comment">#混淆时不生成大小写混合的类名，默认是可以大小写混合</span>
<span class="token operator">-</span>dontusemixedcaseclassnames
<span class="token comment"># 对于类成员的命名的混淆采取唯一策略</span>
<span class="token operator">-</span>useuniqueclassmembernames
<span class="token comment">#混淆时不生成大小写混合的类名，默认是可以大小写混合</span>
<span class="token operator">-</span>dontusemixedcaseclassnames
<span class="token comment">#混淆类名之后，对使用Class.forName(&#39;className&#39;)之类的地方进行相应替代</span>
<span class="token operator">-</span>adaptclassstrings
 
<span class="token comment">#对异常、注解信息予以保留</span>
<span class="token operator">-</span>keepattributes Exceptions<span class="token punctuation">,</span>InnerClasses<span class="token punctuation">,</span>Signature<span class="token punctuation">,</span>Deprecated<span class="token punctuation">,</span>SourceFile<span class="token punctuation">,</span>LineNumberTable<span class="token punctuation">,</span><span class="token variable">*Annotation</span><span class="token operator">*</span><span class="token punctuation">,</span>EnclosingMethod
<span class="token comment"># 此选项将保存接口中的所有原始名称（不混淆）--&gt;</span>
<span class="token operator">-</span>keepnames interface <span class="token operator">**</span> <span class="token punctuation">{</span> <span class="token operator">*</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment"># 此选项将保存所有软件包中的所有原始接口文件（不进行混淆）</span>
<span class="token comment">#-keep interface * extends * { *; }</span>
<span class="token comment">#保留参数名，因为控制器，或者Mybatis等接口的参数如果混淆会导致无法接受参数，xml文件找不到参数</span>
<span class="token operator">-</span>keepparameternames
<span class="token comment"># 保留枚举成员及方法</span>
<span class="token operator">-</span>keepclassmembers enum <span class="token operator">*</span> <span class="token punctuation">{</span> <span class="token operator">*</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment"># 不混淆所有类,保存原始定义的注释-</span>
<span class="token operator">-</span>keepclassmembers class <span class="token operator">*</span> <span class="token punctuation">{</span>
                        <span class="token variable">@org</span><span class="token operator">.</span>springframework<span class="token operator">.</span>context<span class="token operator">.</span>annotation<span class="token operator">.</span>Bean <span class="token operator">*</span><span class="token punctuation">;</span>
                        <span class="token variable">@org</span><span class="token operator">.</span>springframework<span class="token operator">.</span>beans<span class="token operator">.</span>factory<span class="token operator">.</span>annotation<span class="token operator">.</span>Autowired <span class="token operator">*</span><span class="token punctuation">;</span>
                        <span class="token variable">@org</span><span class="token operator">.</span>springframework<span class="token operator">.</span>beans<span class="token operator">.</span>factory<span class="token operator">.</span>annotation<span class="token operator">.</span>Value <span class="token operator">*</span><span class="token punctuation">;</span>
                        <span class="token variable">@org</span><span class="token operator">.</span>springframework<span class="token operator">.</span>stereotype<span class="token operator">.</span>Service <span class="token operator">*</span><span class="token punctuation">;</span>
                        <span class="token variable">@org</span><span class="token operator">.</span>springframework<span class="token operator">.</span>stereotype<span class="token operator">.</span>Component <span class="token operator">*</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
 
<span class="token comment">#忽略warn消息</span>
<span class="token operator">-</span>ignorewarnings
<span class="token comment">#忽略note消息</span>
<span class="token operator">-</span>dontnote
<span class="token comment">#打印配置信息</span>
<span class="token operator">-</span>printconfiguration
<span class="token operator">-</span>keep public class com<span class="token operator">.</span>itlab1024<span class="token operator">.</span>proguard<span class="token operator">.</span>SpringBootProguardApplication <span class="token punctuation">{</span>
        public static void main<span class="token punctuation">(</span>java<span class="token operator">.</span>lang<span class="token operator">.</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接用idea,直接打包就会自动混淆.</p><p>对混淆的jar进行启动</p><p>![image-20230323152334251](/Users/li/Library/Application Support/typora-user-images/image-20230323152334251.png)</p><p>混淆后结果:</p><p>![image-20230323153606559](/Users/li/Library/Application Support/typora-user-images/image-20230323153606559.png)</p><h5 id="xjar-代码加密-java源码设置强密码-反编译无法查看源码" tabindex="-1"><a class="header-anchor" href="#xjar-代码加密-java源码设置强密码-反编译无法查看源码" aria-hidden="true">#</a> xjar 代码加密(java源码设置强密码,反编译无法查看源码)</h5><p>引入依赖</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token filehandle symbol">&lt;project&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 设置 jitpack<span class="token operator">.</span>io 仓库 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token filehandle symbol">&lt;repositories&gt;</span>
        <span class="token filehandle symbol">&lt;repository&gt;</span>
            <span class="token filehandle symbol">&lt;id&gt;</span>jitpack<span class="token operator">.</span>io<span class="token filehandle symbol">&lt;/id&gt;</span>
            <span class="token filehandle symbol">&lt;url&gt;</span>https<span class="token punctuation">:</span><span class="token operator">//</span>jitpack<span class="token operator">.</span>io<span class="token filehandle symbol">&lt;/url&gt;</span>
        <span class="token filehandle symbol">&lt;/repository&gt;</span>
    <span class="token filehandle symbol">&lt;/repositories&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 添加 XJar 依赖 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token filehandle symbol">&lt;dependencies&gt;</span>
        <span class="token filehandle symbol">&lt;dependency&gt;</span>
            <span class="token filehandle symbol">&lt;groupId&gt;</span>com<span class="token operator">.</span>github<span class="token operator">.</span>core<span class="token operator">-</span>lib<span class="token filehandle symbol">&lt;/groupId&gt;</span>
            <span class="token filehandle symbol">&lt;artifactId&gt;</span>xjar<span class="token filehandle symbol">&lt;/artifactId&gt;</span>
            <span class="token filehandle symbol">&lt;version&gt;</span><span class="token v-string string">4.0.0</span><span class="token filehandle symbol">&lt;/version&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token filehandle symbol">&lt;scope&gt;</span>test<span class="token filehandle symbol">&lt;/scope&gt;</span> <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token filehandle symbol">&lt;/dependency&gt;</span>
    <span class="token filehandle symbol">&lt;/dependencies&gt;</span>
<span class="token filehandle symbol">&lt;/project&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.本人直接编写一个main方法加密,加密成功后会在to()方法指定的目录生成jar包跟xjar.go文件</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>   XCryptos<span class="token operator">.</span>encryption<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token operator">.</span>from<span class="token punctuation">(</span><span class="token string">&quot;shangjian-sap/target/shangjian-sap-0.0.1-SNAPSHOT.jar&quot;</span><span class="token punctuation">)</span>
                <span class="token operator">.</span><span class="token keyword">use</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span>
                <span class="token operator">.</span>include<span class="token punctuation">(</span><span class="token string">&quot;/**/*.class&quot;</span><span class="token punctuation">)</span>
                <span class="token operator">.</span>include<span class="token punctuation">(</span><span class="token string">&quot;/**/*.yml&quot;</span><span class="token punctuation">)</span>
                <span class="token operator">.</span>include<span class="token punctuation">(</span><span class="token string">&quot;/**/*.xml&quot;</span><span class="token punctuation">)</span>
                <span class="token operator">.</span>to<span class="token punctuation">(</span><span class="token string">&quot;C:\\\\Users\\\\Jason\\\\Desktop\\\\javajar\\\\sap.jar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会生产两个文件sap.jar(已经加密)和xjar.go,并将这个文件放在服务器上.</p><p>3.在服务器安装go环境</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>yum install <span class="token operator">-</span>y epel<span class="token operator">-</span>release
 
yum install golang
 
go version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.再xjar.go目录运行此命令,生成xjar文件</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>go build xjar<span class="token operator">.</span>go <span class="token operator">//</span>此命令会生成xjar文件<span class="token punctuation">,</span>给下面步骤使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.启动加密后的jar包</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>xjar java <span class="token operator">-</span>jar sap<span class="token operator">.</span>jar
 
xjar javaw <span class="token operator">-</span>jar sap<span class="token operator">.</span>jar
 
nohup xjar java <span class="token operator">-</span>jar sap<span class="token operator">.</span>jar <span class="token operator">//</span>后台运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),o=[t];function l(i,c){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","前后端代码加密以及授权文档.html.vue"]]);export{u as default};
