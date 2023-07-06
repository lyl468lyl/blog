import{_ as n,o as s,c as a,e as p}from"./app-d13f43c9.js";const t={},e=p(`<h1 id="spark随手笔记" tabindex="-1"><a class="header-anchor" href="#spark随手笔记" aria-hidden="true">#</a> spark随手笔记</h1><p>![image-20220304190106083](/Users/li/Library/Application Support/typora-user-images/image-20220304190106083.png)</p><p>![image-20220304190458025](/Users/li/Library/Application Support/typora-user-images/image-20220304190458025.png)</p><p>![image-20220304191103681](/Users/li/Library/Application Support/typora-user-images/image-20220304191103681.png)</p><p>![image-20220304202918801](/Users/li/Library/Application Support/typora-user-images/image-20220304202918801.png)</p><p>![image-20220304203228290](/Users/li/Library/Application Support/typora-user-images/image-20220304203228290.png)</p><p>rdd序列化</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token keyword">package</span> com<span class="token operator">.</span>big2333<span class="token operator">.</span>spark<span class="token operator">.</span>tansfotion

import org<span class="token operator">.</span>apache<span class="token operator">.</span>spark<span class="token operator">.</span><span class="token punctuation">{</span>SparkConf<span class="token punctuation">,</span> SparkContext<span class="token punctuation">}</span>
import org<span class="token operator">.</span>apache<span class="token operator">.</span>spark<span class="token operator">.</span>rdd<span class="token operator">.</span>RDD

object SeriallizableKryo <span class="token punctuation">{</span>

  def main<span class="token punctuation">(</span>args<span class="token punctuation">:</span> Array<span class="token punctuation">[</span>String<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Unit <span class="token operator">=</span> <span class="token punctuation">{</span>

    val conf<span class="token punctuation">:</span> SparkConf <span class="token operator">=</span> new SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>setAppName<span class="token punctuation">(</span><span class="token string">&quot;serDemo&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>setMaster<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span>
      <span class="token operator">.</span>set<span class="token punctuation">(</span><span class="token string">&quot;spark.serializer&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;org.apache.spark.serializer.KryoSerializer&quot;</span><span class="token punctuation">)</span>
      <span class="token operator">.</span>registerKryoClasses<span class="token punctuation">(</span>Array<span class="token punctuation">(</span>classOf<span class="token punctuation">[</span>Searcher<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    conf

    val sc <span class="token operator">=</span> new SparkContext<span class="token punctuation">(</span>conf<span class="token punctuation">)</span>

    val rdd<span class="token punctuation">:</span> RDD<span class="token punctuation">[</span>String<span class="token punctuation">]</span> <span class="token operator">=</span> sc<span class="token operator">.</span>makeRDD<span class="token punctuation">(</span>Array<span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello atguigu&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;atguigu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hahah&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    val searcher <span class="token operator">=</span> new Searcher<span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
    val resultRdd<span class="token punctuation">:</span> RDD<span class="token punctuation">[</span>String<span class="token punctuation">]</span> <span class="token operator">=</span> searcher<span class="token operator">.</span>getMatchRdd<span class="token punctuation">(</span>rdd<span class="token punctuation">)</span>


    resultRdd<span class="token operator">.</span>collect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span><span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token keyword">print</span><span class="token punctuation">)</span>
    sc<span class="token operator">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
case class Searcher<span class="token punctuation">(</span>val query<span class="token punctuation">:</span>String<span class="token punctuation">)</span><span class="token punctuation">{</span>

    def getMatchRdd<span class="token punctuation">(</span>rdd<span class="token punctuation">:</span>RDD<span class="token punctuation">[</span>String<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">{</span>

      var q<span class="token operator">=</span>query

     rdd<span class="token operator">.</span>filter<span class="token punctuation">(</span><span class="token filehandle symbol">_</span><span class="token operator">.</span>contains<span class="token punctuation">(</span><span class="token string">q))</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20220305091226857](/Users/li/Library/Application Support/typora-user-images/image-20220305091226857.png)</p><p>![image-20220305092425233](/Users/li/Library/Application Support/typora-user-images/image-20220305092425233.png)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
<span class="token keyword">package</span> com<span class="token operator">.</span>big2333<span class="token operator">.</span>spark<span class="token operator">.</span>tansfotion

import org<span class="token operator">.</span>apache<span class="token operator">.</span>spark<span class="token operator">.</span><span class="token punctuation">{</span>SparkConf<span class="token punctuation">,</span> SparkContext<span class="token punctuation">}</span>

object AccSum <span class="token punctuation">{</span>

  def main<span class="token punctuation">(</span>args<span class="token punctuation">:</span> Array<span class="token punctuation">[</span>String<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Unit <span class="token operator">=</span> <span class="token punctuation">{</span>
    val sparConf <span class="token operator">=</span> new SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>setMaster<span class="token punctuation">(</span><span class="token string">&quot;local&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>setAppName<span class="token punctuation">(</span><span class="token string">&quot;Acc&quot;</span><span class="token punctuation">)</span>
    val sc <span class="token operator">=</span> new SparkContext<span class="token punctuation">(</span>sparConf<span class="token punctuation">)</span>

    val rdd <span class="token operator">=</span> sc<span class="token operator">.</span>makeRDD<span class="token punctuation">(</span>List<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token operator">//</span>var sum <span class="token operator">=</span> <span class="token number">0</span>

    val sumAcc <span class="token operator">=</span> sc<span class="token operator">.</span>longAccumulator<span class="token punctuation">(</span><span class="token string">&quot;sum&quot;</span><span class="token punctuation">)</span>


    rdd<span class="token operator">.</span><span class="token keyword">foreach</span><span class="token punctuation">(</span>
      num <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       <span class="token operator">//</span> sum <span class="token operator">+=</span> num

        sumAcc<span class="token operator">.</span>add<span class="token punctuation">(</span>num<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

    <span class="token operator">//</span>println<span class="token punctuation">(</span><span class="token string">&quot;sum = &quot;</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span>

    println<span class="token punctuation">(</span>sumAcc<span class="token operator">.</span>value<span class="token punctuation">)</span>

    sc<span class="token operator">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>






  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20220305100421193](/Users/li/Library/Application Support/typora-user-images/image-20220305100421193.png)</p><p>![image-20220305100640387](/Users/li/Library/Application Support/typora-user-images/image-20220305100640387.png)</p><p>![image-20220305101027279](/Users/li/Library/Application Support/typora-user-images/image-20220305101027279.png)</p><p>![image-20220305102503507](/Users/li/Library/Application Support/typora-user-images/image-20220305102503507.png)</p><p>![image-20220305104504013](/Users/li/Library/Application Support/typora-user-images/image-20220305104504013.png)</p><p>![image-20220305104725539](/Users/li/Library/Application Support/typora-user-images/image-20220305104725539.png)</p><p>![image-20220305110113421](/Users/li/Library/Application Support/typora-user-images/image-20220305110113421.png)</p><p>![image-20220305110157582](/Users/li/Library/Application Support/typora-user-images/image-20220305110157582.png)</p><p>![image-20220305110506111](/Users/li/Library/Application Support/typora-user-images/image-20220305110506111.png)</p><p>![image-20220305110855527](/Users/li/Library/Application Support/typora-user-images/image-20220305110855527.png)</p><p>![image-20220305111132811](/Users/li/Library/Application Support/typora-user-images/image-20220305111132811.png)</p><p>![image-20220305111247544](/Users/li/Library/Application Support/typora-user-images/image-20220305111247544.png)</p><p>![image-20220305111648242](/Users/li/Library/Application Support/typora-user-images/image-20220305111648242.png)</p><p>![image-20220305122438075](/Users/li/Library/Application Support/typora-user-images/image-20220305122438075.png)</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token keyword">package</span> com<span class="token operator">.</span>big2333<span class="token operator">.</span>spark<span class="token operator">.</span>tansfotion

import org<span class="token operator">.</span>apache<span class="token operator">.</span>spark<span class="token operator">.</span>SparkConf
import org<span class="token operator">.</span>apache<span class="token operator">.</span>spark<span class="token operator">.</span>rdd<span class="token operator">.</span>RDD
import org<span class="token operator">.</span>apache<span class="token operator">.</span>spark<span class="token operator">.</span>sql<span class="token operator">.</span><span class="token punctuation">{</span>DataFrame<span class="token punctuation">,</span> Dataset<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> SparkSession<span class="token punctuation">}</span>

object SparkSqlReadJson <span class="token punctuation">{</span>

  def main<span class="token punctuation">(</span>args<span class="token punctuation">:</span> Array<span class="token punctuation">[</span>String<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Unit <span class="token operator">=</span> <span class="token punctuation">{</span>


        val sparkConf<span class="token punctuation">:</span> SparkConf <span class="token operator">=</span> new SparkConf<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>setMaster<span class="token punctuation">(</span><span class="token string">&quot;local[*]&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>setAppName<span class="token punctuation">(</span><span class="token string">&quot;sprksql&quot;</span><span class="token punctuation">)</span>
        val spark<span class="token punctuation">:</span> SparkSession <span class="token operator">=</span> SparkSession<span class="token operator">.</span>builder<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">.</span>config<span class="token punctuation">(</span>sparkConf<span class="token punctuation">)</span><span class="token operator">.</span>getOrCreate<span class="token punctuation">(</span><span class="token punctuation">)</span>


       <span class="token operator">//</span>相当于flink 的table
       val df<span class="token punctuation">:</span> DataFrame <span class="token operator">=</span> spark<span class="token operator">.</span>read<span class="token operator">.</span>json<span class="token punctuation">(</span><span class="token string">&quot;/Users/li/Desktop/SparkData/input/user.json&quot;</span><span class="token punctuation">)</span>

       df<span class="token operator">.</span>select<span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token operator">//</span>相当于flink  tanbleenv<span class="token operator">.</span>creantetempview
    df<span class="token operator">.</span>createOrReplaceTempView<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>

    <span class="token operator">//</span>sql
       spark<span class="token operator">.</span>sql<span class="token punctuation">(</span><span class="token string">&quot;select * from user&quot;</span><span class="token punctuation">)</span><span class="token operator">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
       <span class="token operator">//</span>df<span class="token operator">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">//</span> rdd<span class="token operator">--</span><span class="token operator">&gt;</span>dataframe

    val rdd1<span class="token punctuation">:</span> RDD<span class="token punctuation">[</span><span class="token punctuation">(</span>Int<span class="token punctuation">,</span> String<span class="token punctuation">,</span> Int<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> spark<span class="token operator">.</span>sparkContext<span class="token operator">.</span>makeRDD<span class="token punctuation">(</span>List<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;wangwu&quot;</span><span class="token punctuation">,</span>
      <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    import spark<span class="token operator">.</span>implicits<span class="token operator">.</span><span class="token filehandle symbol">_</span>


    <span class="token operator">//</span>相当于flink tanbleEnv<span class="token operator">.</span>fromdatastream<span class="token punctuation">(</span><span class="token punctuation">)</span>
    val df1<span class="token punctuation">:</span> DataFrame <span class="token operator">=</span> rdd1<span class="token operator">.</span>toDF<span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span>

    df1<span class="token operator">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token operator">//</span>dataset

     val dataset1<span class="token punctuation">:</span> Dataset<span class="token punctuation">[</span>User<span class="token punctuation">]</span> <span class="token operator">=</span> df1<span class="token operator">.</span>as<span class="token punctuation">[</span>User<span class="token punctuation">]</span>

      dataset1<span class="token operator">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>


    val dataset2<span class="token punctuation">:</span> Dataset<span class="token punctuation">[</span>User<span class="token punctuation">]</span> <span class="token operator">=</span> rdd1<span class="token operator">.</span>map <span class="token punctuation">{</span>
      case <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        User<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token operator">.</span>toDS<span class="token punctuation">(</span><span class="token punctuation">)</span>
    dataset2<span class="token operator">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    val userRdd<span class="token punctuation">:</span> RDD<span class="token punctuation">[</span>User<span class="token punctuation">]</span> <span class="token operator">=</span> dataset2<span class="token operator">.</span>rdd
    val rdd2<span class="token punctuation">:</span> RDD<span class="token punctuation">[</span>Row<span class="token punctuation">]</span> <span class="token operator">=</span> df1<span class="token operator">.</span>rdd



  <span class="token punctuation">}</span>

  case class User<span class="token punctuation">(</span> id<span class="token punctuation">:</span>Int<span class="token punctuation">,</span> name<span class="token punctuation">:</span>String<span class="token punctuation">,</span> age<span class="token punctuation">:</span>Int <span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![image-20220305123606695](/Users/li/Library/Application Support/typora-user-images/image-20220305123606695.png)</p>`,27),o=[e];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","spark随手笔记.html.vue"]]);export{u as default};
