---

date: 2013-6-25

category: 大数据

tag:

  - spark

---

# spark随手笔记

![image-20220304190106083](/Users/li/Library/Application Support/typora-user-images/image-20220304190106083.png)

![image-20220304190458025](/Users/li/Library/Application Support/typora-user-images/image-20220304190458025.png)

![image-20220304191103681](/Users/li/Library/Application Support/typora-user-images/image-20220304191103681.png)

![image-20220304202918801](/Users/li/Library/Application Support/typora-user-images/image-20220304202918801.png)

![image-20220304203228290](/Users/li/Library/Application Support/typora-user-images/image-20220304203228290.png)

rdd序列化



```perl
package com.big2333.spark.tansfotion

import org.apache.spark.{SparkConf, SparkContext}
import org.apache.spark.rdd.RDD

object SeriallizableKryo {

  def main(args: Array[String]): Unit = {

    val conf: SparkConf = new SparkConf().setAppName("serDemo").setMaster("local[*]")
      .set("spark.serializer", "org.apache.spark.serializer.KryoSerializer")
      .registerKryoClasses(Array(classOf[Searcher]))
    conf

    val sc = new SparkContext(conf)

    val rdd: RDD[String] = sc.makeRDD(Array("hello world", "hello atguigu",
      "atguigu", "hahah"), 2)
    val searcher = new Searcher("hello")
    val resultRdd: RDD[String] = searcher.getMatchRdd(rdd)


    resultRdd.collect().foreach(print)
    sc.stop()

  }
}
case class Searcher(val query:String){

    def getMatchRdd(rdd:RDD[String])={

      var q=query

     rdd.filter(_.contains(q))

    }
}
```

![image-20220305091226857](/Users/li/Library/Application Support/typora-user-images/image-20220305091226857.png)

![image-20220305092425233](/Users/li/Library/Application Support/typora-user-images/image-20220305092425233.png)

```perl

package com.big2333.spark.tansfotion

import org.apache.spark.{SparkConf, SparkContext}

object AccSum {

  def main(args: Array[String]): Unit = {
    val sparConf = new SparkConf().setMaster("local").setAppName("Acc")
    val sc = new SparkContext(sparConf)

    val rdd = sc.makeRDD(List(1,2,3,4))

    //var sum = 0

    val sumAcc = sc.longAccumulator("sum")


    rdd.foreach(
      num => {
       // sum += num

        sumAcc.add(num)
      }
    )

    //println("sum = " + sum)

    println(sumAcc.value)

    sc.stop()






  }
}

```

![image-20220305100421193](/Users/li/Library/Application Support/typora-user-images/image-20220305100421193.png)

![image-20220305100640387](/Users/li/Library/Application Support/typora-user-images/image-20220305100640387.png)

![image-20220305101027279](/Users/li/Library/Application Support/typora-user-images/image-20220305101027279.png)

![image-20220305102503507](/Users/li/Library/Application Support/typora-user-images/image-20220305102503507.png)

![image-20220305104504013](/Users/li/Library/Application Support/typora-user-images/image-20220305104504013.png)

![image-20220305104725539](/Users/li/Library/Application Support/typora-user-images/image-20220305104725539.png)

![image-20220305110113421](/Users/li/Library/Application Support/typora-user-images/image-20220305110113421.png)

![image-20220305110157582](/Users/li/Library/Application Support/typora-user-images/image-20220305110157582.png)

![image-20220305110506111](/Users/li/Library/Application Support/typora-user-images/image-20220305110506111.png)

![image-20220305110855527](/Users/li/Library/Application Support/typora-user-images/image-20220305110855527.png)

![image-20220305111132811](/Users/li/Library/Application Support/typora-user-images/image-20220305111132811.png)

![image-20220305111247544](/Users/li/Library/Application Support/typora-user-images/image-20220305111247544.png)

![image-20220305111648242](/Users/li/Library/Application Support/typora-user-images/image-20220305111648242.png)

![image-20220305122438075](/Users/li/Library/Application Support/typora-user-images/image-20220305122438075.png)

```perl
package com.big2333.spark.tansfotion

import org.apache.spark.SparkConf
import org.apache.spark.rdd.RDD
import org.apache.spark.sql.{DataFrame, Dataset, Row, SparkSession}

object SparkSqlReadJson {

  def main(args: Array[String]): Unit = {


        val sparkConf: SparkConf = new SparkConf().setMaster("local[*]").setAppName("sprksql")
        val spark: SparkSession = SparkSession.builder().config(sparkConf).getOrCreate()


       //相当于flink 的table
       val df: DataFrame = spark.read.json("/Users/li/Desktop/SparkData/input/user.json")

       df.select("age").show()

    //相当于flink  tanbleenv.creantetempview
    df.createOrReplaceTempView("user")

    //sql
       spark.sql("select * from user").show()
       //df.show()
// rdd-->dataframe

    val rdd1: RDD[(Int, String, Int)] = spark.sparkContext.makeRDD(List((1, "zhangsan", 30), (2, "lisi", 28), (3, "wangwu",
      20)))

    import spark.implicits._


    //相当于flink tanbleEnv.fromdatastream()
    val df1: DataFrame = rdd1.toDF("id","name","age")

    df1.show()

    //dataset

     val dataset1: Dataset[User] = df1.as[User]

      dataset1.show()


    val dataset2: Dataset[User] = rdd1.map {
      case (id, name, age) => {

        User(id, name, age)
      }
    }.toDS()
    dataset2.show()

    val userRdd: RDD[User] = dataset2.rdd
    val rdd2: RDD[Row] = df1.rdd



  }

  case class User( id:Int, name:String, age:Int )

}
```

![image-20220305123606695](/Users/li/Library/Application Support/typora-user-images/image-20220305123606695.png)