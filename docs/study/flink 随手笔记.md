\---

date: 2013-6-25

category: 大数据

tag:

  \- flink

\---

# flink 教程

![image-20220224134726762](/Users/li/Library/Application Support/typora-user-images/image-20220224134726762.png)

```
import org.apache.flink.util.Collector;
```

![image-20220224141659600](/Users/li/Library/Application Support/typora-user-images/image-20220224141659600.png)![image-20220224143449868](/Users/li/Library/Application Support/typora-user-images/image-20220224143449868.png)

![image-20220224143916848](/Users/li/Library/Application Support/typora-user-images/image-20220224143916848.png)

![image-20220224165907031](/Users/li/Library/Application Support/typora-user-images/image-20220224165907031.png)

![image-20220224170428662](/Users/li/Library/Application Support/typora-user-images/image-20220224170428662.png)

批处理一下看结果



![image-20220224171339646](/Users/li/Library/Application Support/typora-user-images/image-20220224171339646.png)



流数据图

![image-20220224172436918](/Users/li/Library/Application Support/typora-user-images/image-20220224172436918.png)

![image-20220224173123783](/Users/li/Library/Application Support/typora-user-images/image-20220224173123783.png)

![image-20220225115040072](/Users/li/Library/Application Support/typora-user-images/image-20220225115040072.png)

![image-20220225153752332](/Users/li/Library/Application Support/typora-user-images/image-20220225153752332.png)

```perl
<build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>2.0.2</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>

```

![image-20220226122515811](/Users/li/Library/Application Support/typora-user-images/image-20220226122515811.png)

![image-20220226122634302](/Users/li/Library/Application Support/typora-user-images/image-20220226122634302.png)

![image-20220226122804323](/Users/li/Library/Application Support/typora-user-images/image-20220226122804323.png)

![](/Users/li/Library/Application Support/typora-user-images/image-20220226125726115.png)

![image-20220226130214568](/Users/li/Library/Application Support/typora-user-images/image-20220226130214568.png)

![image-20220226130458182](/Users/li/Library/Application Support/typora-user-images/image-20220226130458182.png)

![image-20220226130547654](/Users/li/Library/Application Support/typora-user-images/image-20220226130547654.png)

![image-20220226131003808](/Users/li/Library/Application Support/typora-user-images/image-20220226131003808.png)

```perl

[root@centos01 bin]# ./flink run -c com.big2333.flink.StreamCount -p 1  /opt/module/data/FlinkData-1.0-SNAPSHOT.jar --host 192.168.0.185 --port 7777
Job has been submitted with JobID 48dfd097188a49c48753024c027b748c

```

![image-20220226153450479](/Users/li/Library/Application Support/typora-user-images/image-20220226153450479.png)

![image-20220226153907024](/Users/li/Library/Application Support/typora-user-images/image-20220226153907024.png)

![image-20220226154424950](/Users/li/Library/Application Support/typora-user-images/image-20220226154424950.png)

![image-20220226160008919](/Users/li/Library/Application Support/typora-user-images/image-20220226160008919.png)

![image-20220226160616797](/Users/li/Library/Application Support/typora-user-images/image-20220226160616797.png)

![image-20220226162125107](/Users/li/Library/Application Support/typora-user-images/image-20220226162125107.png)

![image-20220226181731608](/Users/li/Library/Application Support/typora-user-images/image-20220226181731608.png)



提交的过程的send  dataflow  flink run

 命令会生成数据流图

![image-20220226190537450](/Users/li/Library/Application Support/typora-user-images/image-20220226190537450.png)

![image-20220226190554406](/Users/li/Library/Application Support/typora-user-images/image-20220226190554406.png)

![image-20220226191200332](/Users/li/Library/Application Support/typora-user-images/image-20220226191200332.png)

![image-20220226191903149](/Users/li/Library/Application Support/typora-user-images/image-20220226191903149.png)

![image-20220226192120487](/Users/li/Library/Application Support/typora-user-images/image-20220226192120487.png)

![image-20220226193028853](/Users/li/Library/Application Support/typora-user-images/image-20220226193028853.png)

![image-20220226194139431](/Users/li/Library/Application Support/typora-user-images/image-20220226194139431.png)

![image-20220226195336911](/Users/li/Library/Application Support/typora-user-images/image-20220226195336911.png)



![image-20220226195457811](/Users/li/Library/Application Support/typora-user-images/image-20220226195457811.png)

![image-20220227090320727](/Users/li/Library/Application Support/typora-user-images/image-20220227090320727.png)

![image-20220227090417402](/Users/li/Library/Application Support/typora-user-images/image-20220227090417402.png)

![image-20220227091938935](/Users/li/Library/Application Support/typora-user-images/image-20220227091938935.png)

![image-20220227092757860](/Users/li/Library/Application Support/typora-user-images/image-20220227092757860.png)

![image-20220227092852667](/Users/li/Library/Application Support/typora-user-images/image-20220227092852667.png)

![image-20220227093449496](/Users/li/Library/Application Support/typora-user-images/image-20220227093449496.png)

![image-20220227094232213](/Users/li/Library/Application Support/typora-user-images/image-20220227094232213.png)

![image-20220227101330289](/Users/li/Library/Application Support/typora-user-images/image-20220227101330289.png)

flink: shuffe 发牌  ,slot 就是一个分区,一个独立的内存.



任务和任务传输: 序列化,反序列化,包装



spark shuffle 把已有的数据分堆

![image-20220227103237025](/Users/li/Library/Application Support/typora-user-images/image-20220227103237025.png)

![image-20220227105156885](/Users/li/Library/Application Support/typora-user-images/image-20220227105156885.png)

![image-20220227105449812](/Users/li/Library/Application Support/typora-user-images/image-20220227105449812.png)

不参与任务链合并



![image-20220227105523050](/Users/li/Library/Application Support/typora-user-images/image-20220227105523050.png)

![image-20220301093442835](/Users/li/Library/Application Support/typora-user-images/image-20220301093442835.png)

![image-20220301095746600](/Users/li/Library/Application Support/typora-user-images/image-20220301095746600.png)

![image-20220301095920280](/Users/li/Library/Application Support/typora-user-images/image-20220301095920280.png)

![image-20220301100119457](/Users/li/Library/Application Support/typora-user-images/image-20220301100119457.png)

![image-20220301100221207](/Users/li/Library/Application Support/typora-user-images/image-20220301100221207.png)

![image-20220301110520386](/Users/li/Library/Application Support/typora-user-images/image-20220301110520386.png)

![image-20220301111313531](/Users/li/Library/Application Support/typora-user-images/image-20220301111313531.png)

![image-20220301111655709](/Users/li/Library/Application Support/typora-user-images/image-20220301111655709.png)

![image-20220301111716181](/Users/li/Library/Application Support/typora-user-images/image-20220301111716181.png)

![image-20220301111738208](/Users/li/Library/Application Support/typora-user-images/image-20220301111738208.png)

![image-20220301111758409](/Users/li/Library/Application Support/typora-user-images/image-20220301111758409.png)

以上1.12已经过时:
两个参数是滑动时间窗口,第一参数窗口大小,第二个参数滑动步长

![image-20220301112409053](/Users/li/Library/Application Support/typora-user-images/image-20220301112409053.png)

滚动时间窗口:一个参数

![image-20220301112533924](/Users/li/Library/Application Support/typora-user-images/image-20220301112533924.png)

![image-20220301113737865](/Users/li/Library/Application Support/typora-user-images/image-20220301113737865.png)

window后加sum和不加sum区别,,不加直接运算,,加window相当于批处理

增量聚合

```perl
public class WindowDemo {

    public static void main(String[] args) throws Exception {
        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        String path=str+"/sensor.txt";
        //  env.setParallelism(3);


       // DataStreamSource<String> inputstream = env.readTextFile(path);

        DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);


//
//         转换成 SensorReading 类型
        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        });


        KeyedStream<SensorReading, String> keydatestream = dataStream.keyBy(s -> s.getName());
        SingleOutputStreamOperator<Integer> resultDatastream = keydatestream.window(TumblingProcessingTimeWindows.of(Time.seconds(15))).aggregate(new AggregateFunction<SensorReading, Integer, Integer>() {
            @Override
            public Integer createAccumulator() {
                return 0;
            }

            @Override
            public Integer add(SensorReading sensorReading, Integer count) {
                System.out.println("count:"+count);
                return count + 1;
            }

            @Override
            public Integer getResult(Integer resutl) {
                return resutl;
            }

            @Override
            public Integer merge(Integer a1, Integer a2) {
                return a1 + a2;
            }
        });
        resultDatastream.print();

        env.execute();


    }
}
```

全窗口函数

```perl
public class WindowAllDemo {

    public static void main(String[] args) throws Exception {
        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        String path=str+"/sensor.txt";
        env.setParallelism(2);


        // DataStreamSource<String> inputstream = env.readTextFile(path);

        DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);


//
//         转换成 SensorReading 类型
        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        });


        KeyedStream<SensorReading, String> keydatestream = dataStream.keyBy(s -> s.getName());

        SingleOutputStreamOperator<Tuple3<String, Long, Integer>> resultDataStream = keydatestream.window(TumblingProcessingTimeWindows.of(Time.seconds(15))).apply(new WindowFunction<SensorReading, Tuple3<String, Long, Integer>, String, TimeWindow>() {
            @Override
            public void apply(String s, TimeWindow timeWindow, Iterable<SensorReading> data, Collector<Tuple3<String, Long, Integer>> out) throws Exception {

                int size = IteratorUtils.toList(data.iterator()).size();

                long end = timeWindow.getEnd();
                out.collect(new Tuple3<>(s, end, size));


            }
        });

        resultDataStream.print();

        env.execute();
    }
```

![image-20220301133810642](/Users/li/Library/Application Support/typora-user-images/image-20220301133810642.png)

计数窗口

输出频率是两个一输出

要向前补齐0,所以会看到,两个数就输出一次

![image-20220301140756933](/Users/li/Library/Application Support/typora-user-images/image-20220301140756933.png)



```perl
package com.big2333.flink;

import org.apache.flink.api.common.functions.AggregateFunction;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.api.java.tuple.Tuple2;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.KeyedStream;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

public class WindowCountDemo {

    public static void main(String[] args) throws Exception {
        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        String path=str+"/sensor.txt";
        //  env.setParallelism(3);


        // DataStreamSource<String> inputstream = env.readTextFile(path);

        DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);


//
//         转换成 SensorReading 类型
        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        });


        KeyedStream<SensorReading, String> keydatestream = dataStream.keyBy(s -> s.getName());

        SingleOutputStreamOperator<Double> result = keydatestream.countWindow(10, 2).aggregate(new AggregateFunction<SensorReading, Tuple2<Double, Integer>, Double>() {
            @Override
            public Tuple2<Double, Integer> createAccumulator() {
                return new Tuple2<>(0.0, 0);
            }

            @Override
            public Tuple2<Double, Integer> add(SensorReading sensorReading, Tuple2<Double, Integer> value) {
                return new Tuple2<>(value.f0 + sensorReading.getTemp(), value.f1 + 1);
            }

            @Override
            public Double getResult(Tuple2<Double, Integer> result) {
                return result.f0 / result.f1;

            }

            @Override
            public Tuple2<Double, Integer> merge(Tuple2<Double, Integer> a, Tuple2<Double, Integer> b) {
                return new Tuple2<>(a.f0 + b.f0, a.f1 + b.f1);
            }
        });


        result.print();
        env.execute();
    }
}

```

![image-20220301162046107](/Users/li/Library/Application Support/typora-user-images/image-20220301162046107.png)

![image-20220301163833206](/Users/li/Library/Application Support/typora-user-images/image-20220301163833206.png)

![image-20220301164315139](/Users/li/Library/Application Support/typora-user-images/image-20220301164315139.png)

![image-20220301174654209](/Users/li/Library/Application Support/typora-user-images/image-20220301174654209.png)

alowlateness 到时间了不关闭窗口,先进行计算,后面的数据在累加

![image-20220301184224628](/Users/li/Library/Application Support/typora-user-images/image-20220301184224628.png)

![image-20220301185424348](/Users/li/Library/Application Support/typora-user-images/image-20220301185424348.png)

```perl
package com.big2333.flink;

import org.apache.flink.api.common.eventtime.BoundedOutOfOrdernessWatermarks;
import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.KeyedStream;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

import java.time.Duration;

public class WaterMarkDemo {

    public static void main(String[] args) {
        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        String path=str+"/sensor.txt";
        env.setParallelism(2);


        // DataStreamSource<String> inputstream = env.readTextFile(path);

        DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);


//
//         转换成 SensorReading 类型
        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        })
                .assignTimestampsAndWatermarks(WatermarkStrategy.<SensorReading>forBoundedOutOfOrderness(Duration.ofSeconds(2))
                .withTimestampAssigner(((sensor,l)->sensor.getValue()*1000L))
                
                );



    }

}
```

![image-20220301200843014](/Users/li/Library/Application Support/typora-user-images/image-20220301200843014.png)

![image-20220301204655995](/Users/li/Library/Application Support/typora-user-images/image-20220301204655995.png)

![image-20220301210723786](/Users/li/Library/Application Support/typora-user-images/image-20220301210723786.png)

![image-20220301211538126](/Users/li/Library/Application Support/typora-user-images/image-20220301211538126.png)

![image-20220301211725597](/Users/li/Library/Application Support/typora-user-images/image-20220301211725597.png)

![image-20220301211751690](/Users/li/Library/Application Support/typora-user-images/image-20220301211751690.png)

根据上面的代码:

第一个数据来的时候,

例如:sensor01,1547718199,32.5

公式

时间串:1547718199

timestap-timestap%windowsize

199-199%15=199-4=195

所以:第一窗口范围

[195--210)



之前的窗口是
[180-195]



offset 格林威治时间  8:00--20:00



要想)0:00-12:00   



![image-20220301213546299](/Users/li/Library/Application Support/typora-user-images/image-20220301213546299.png)

![image-20220301213804759](/Users/li/Library/Application Support/typora-user-images/image-20220301213804759.png)

15秒输出一次,窗口不关闭等到60s才关闭,15s数据直接追加

![image-20220301213943945](/Users/li/Library/Application Support/typora-user-images/image-20220301213943945.png)

195-210第一个窗口,

212来的时候,195-210输出一下,不关闭窗口,因为有allowLateness,在来一个195-210之间的数据会实时追加一下,什么时候

会关闭窗口210+60+2=272的时候会关闭195-210 窗口,关闭之后就不能接受195-210之间的数据,就放到了侧输出流中.



开窗分组原理图

![image-20220301220619900](/Users/li/Library/Application Support/typora-user-images/image-20220301220619900.png)

![image-20220302094433558](/Users/li/Library/Application Support/typora-user-images/image-20220302094433558.png)

![image-20220302095611231](/Users/li/Library/Application Support/typora-user-images/image-20220302095611231.png)

![image-20220302100014127](/Users/li/Library/Application Support/typora-user-images/image-20220302100014127.png)

![image-20220302100442531](/Users/li/Library/Application Support/typora-user-images/image-20220302100442531.png)

![image-20220302113207926](/Users/li/Library/Application Support/typora-user-images/image-20220302113207926.png)

![image-20220302113910629](/Users/li/Library/Application Support/typora-user-images/image-20220302113910629.png)

![image-20220302120450103](/Users/li/Library/Application Support/typora-user-images/image-20220302120450103.png)

![image-20220302120503435](/Users/li/Library/Application Support/typora-user-images/image-20220302120503435.png)

```perl
package com.big2333.flink;

import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.api.common.functions.RichMapFunction;
import org.apache.flink.api.common.state.ValueState;
import org.apache.flink.api.common.state.ValueStateDescriptor;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.KeyedStream;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

public class StateKeyedState {

    public static void main(String[] args) throws Exception {


        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        String path=str+"/sensor.txt";
        env.setParallelism(2);


        // DataStreamSource<String> inputstream = env.readTextFile(path);

        DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);

        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        });

        KeyedStream<SensorReading, String> keyedStream = dataStream.keyBy(f -> f.getName());


//
//         转换成 SensorReading 类型

        SingleOutputStreamOperator<Integer> countDateStream = keyedStream.map(new RichMapFunction<SensorReading, Integer>() {

           private ValueState<Integer> valueState;
            @Override
            public void open(Configuration parameters) throws Exception {
                System.out.println("open");
                valueState=getRuntimeContext().getState(new ValueStateDescriptor<Integer>("my-value", Integer.class,0));
            }

            @Override
            public Integer map(SensorReading sensorReading) throws Exception {


                Integer count = valueState.value();
                System.out.println(count);
                count++;

                valueState.update(count);


                return count;
            }


        });

        countDateStream.print("count");


        env.execute();
    }
}

```

状态报警(两个相邻的值差10就报警)

```perl
package com.big2333.flink;

import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.api.common.functions.RichFlatJoinFunction;
import org.apache.flink.api.common.functions.RichFlatMapFunction;
import org.apache.flink.api.common.state.ValueState;
import org.apache.flink.api.common.state.ValueStateDescriptor;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.KeyedStream;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.util.Collector;
import scala.Tuple3;

public class StateTempWarning {

    public static void main(String[] args) throws Exception {

        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        String path=str+"/sensor.txt";
        env.setParallelism(2);


        // DataStreamSource<String> inputstream = env.readTextFile(path);

        DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);

        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        });

        KeyedStream<SensorReading, String> keyedStream = dataStream.keyBy(f -> f.getName());

        SingleOutputStreamOperator<Tuple3<String, Float, Float>> result = keyedStream.flatMap(new MyFlatTempWarning());

        result.print();


        env.execute();
    }


    public static  class MyFlatTempWarning extends RichFlatMapFunction<SensorReading,Tuple3<String,Float,Float>> {

       public ValueState<Float> valueState;

        @Override
        public void open(Configuration parameters) throws Exception {

            valueState=getRuntimeContext().getState(new ValueStateDescriptor<Float>("temp-value", Float.class));
        }

        @Override
        public void flatMap(SensorReading sensorReading, Collector<Tuple3<String, Float, Float>> collector) throws Exception {


            Float temp = valueState.value();

            if(temp!=null){

                System.out.println(Math.abs(sensorReading.getTemp()-temp));

                if(Math.abs(sensorReading.getTemp()-temp)>10){

                    collector.collect(new Tuple3<String, Float, Float>(sensorReading.getName(), temp,sensorReading.getTemp()));

                }
            }

            System.out.println("update record");
            valueState.update(sensorReading.getTemp());


        }

        @Override
        public void close() throws Exception {

            System.out.println("close");

            valueState.clear();
            //
        }

    }
}

```

![image-20220302133937838](/Users/li/Library/Application Support/typora-user-images/image-20220302133937838.png)

![image-20220302155450539](/Users/li/Library/Application Support/typora-user-images/image-20220302155450539.png)

![image-20220302155715278](/Users/li/Library/Application Support/typora-user-images/image-20220302155715278.png)

![image-20220302163451034](/Users/li/Library/Application Support/typora-user-images/image-20220302163451034.png)

![image-20220302165711529](/Users/li/Library/Application Support/typora-user-images/image-20220302165711529.png)

![image-20220302170502467](/Users/li/Library/Application Support/typora-user-images/image-20220302170502467.png)

![image-20220302171053856](/Users/li/Library/Application Support/typora-user-images/image-20220302171053856.png)

![image-20220302175710836](/Users/li/Library/Application Support/typora-user-images/image-20220302175710836.png)

![image-20220302183612862](/Users/li/Library/Application Support/typora-user-images/image-20220302183612862.png)

![image-20220302183819402](/Users/li/Library/Application Support/typora-user-images/image-20220302183819402.png)

![image-20220302184948037](/Users/li/Library/Application Support/typora-user-images/image-20220302184948037.png)

```perl

package com.big2333.flink;

import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.api.common.state.ValueState;
import org.apache.flink.api.common.state.ValueStateDescriptor;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.KeyedStream;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.api.functions.KeyedProcessFunction;
import org.apache.flink.util.Collector;

import java.time.Duration;

public class StateSerialTenScondsWarning {

    public static void main(String[] args) throws Exception {

        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        String path=str+"/sensor.txt";


        env.getConfig().setAutoWatermarkInterval(200L);
        //env.setStreamTimeCharacteristic();
        env.setParallelism(1);


        // DataStreamSource<String> inputstream = env.readTextFile(path);

        DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);


//
//         转换成 SensorReading 类型
        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        });





        KeyedStream<SensorReading, String> keyedStream = dataStream.keyBy(f -> f.getName());

        SingleOutputStreamOperator<String> processDatastream = keyedStream.process(new KeyedProcessFunction<String, SensorReading, String>() {

            private ValueState<Float> tempValueState;

            private ValueState<Long> timeValueState;

            @Override
            public void open(Configuration parameters) throws Exception {
                tempValueState=getRuntimeContext().getState(new ValueStateDescriptor<Float>("last-value", Float.class,Float.MIN_VALUE));
                timeValueState=getRuntimeContext().getState(new ValueStateDescriptor<Long>("time-value", Long.class));

            }

            @Override
            public void close() throws Exception {

                tempValueState.clear();
            }

            @Override
            public void processElement(SensorReading sensorReading, Context ctx, Collector<String> out) throws Exception {


                if(sensorReading.getTemp()>tempValueState.value()&&timeValueState.value()==null){

                    long currentTime = ctx.timerService().currentProcessingTime();

                    ctx.timerService().registerProcessingTimeTimer(currentTime+10*1000L);
                    timeValueState.update(currentTime+10*1000L);


                }

                if(sensorReading.getTemp()<tempValueState.value()&&timeValueState.value()!=null){

                    ctx.timerService().deleteProcessingTimeTimer(timeValueState.value());
                    timeValueState.clear();
                }


                tempValueState.update(sensorReading.getTemp());

            }


            @Override
            public void onTimer(long timestamp, OnTimerContext ctx, Collector<String> out) throws Exception {


                out.collect(ctx.getCurrentKey()+"连续10s上升");

            }
        });

        processDatastream.print("process");

        env.execute();
    }

}

```

![image-20220302201815527](/Users/li/Library/Application Support/typora-user-images/image-20220302201815527.png)

![image-20220302203359602](/Users/li/Library/Application Support/typora-user-images/image-20220302203359602.png)

![image-20220302204551343](/Users/li/Library/Application Support/typora-user-images/image-20220302204551343.png)

![image-20220302210624530](/Users/li/Library/Application Support/typora-user-images/image-20220302210624530.png)

![image-20220302213002078](/Users/li/Library/Application Support/typora-user-images/image-20220302213002078.png)

状态一致性



计算要计算一次

![image-20220303090109086](/Users/li/Library/Application Support/typora-user-images/image-20220303090109086.png)

![image-20220303091255528](/Users/li/Library/Application Support/typora-user-images/image-20220303091255528.png)

![image-20220303092625831](/Users/li/Library/Application Support/typora-user-images/image-20220303092625831.png)

![



](/Users/li/Library/Application Support/typora-user-images/image-20220303093127899.png)

幂等写入



![image-20220303094029073](/Users/li/Library/Application Support/typora-user-images/image-20220303094029073.png)

![image-20220303094416583](/Users/li/Library/Application Support/typora-user-images/image-20220303094416583.png)

![image-20220303094831019](/Users/li/Library/Application Support/typora-user-images/image-20220303094831019.png)

![image-20220303095800219](/Users/li/Library/Application Support/typora-user-images/image-20220303095800219.png)

![image-20220303100137438](/Users/li/Library/Application Support/typora-user-images/image-20220303100137438.png)

![image-20220303101044312](/Users/li/Library/Application Support/typora-user-images/image-20220303101044312.png)

![image-20220303101540629](/Users/li/Library/Application Support/typora-user-images/image-20220303101540629.png)

![image-20220303101613756](/Users/li/Library/Application Support/typora-user-images/image-20220303101613756.png)

```perl
package com.big2333.flink;

import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.table.api.Table;
import org.apache.flink.table.api.bridge.java.StreamTableEnvironment;
import org.apache.flink.types.Row;

import static org.apache.flink.table.api.Expressions.$;

public class TableSqlApi {

    public static void main(String[] args) throws Exception {

        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

        String path=str+"/sensor.txt";
        env.setParallelism(1);

         DataStreamSource<String> inputstream = env.readTextFile(path);

        //DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);


//
//         转换成 SensorReading 类型
        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        });



        //table api
        StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env);

        Table table = tableEnv.fromDataStream(dataStream);
        Table resultTable = table.select($("name")).where($("name").isEqual("sensor01"));


//talbe sql

        tableEnv.createTemporaryView("sensor", table);

        String sql="select name from sensor where name='sensor01'";
        Table resultTable1 = tableEnv.sqlQuery(sql);


        tableEnv.toAppendStream(resultTable, Row.class).print();

        tableEnv.toAppendStream(resultTable1, Row.class).print();

        env.execute();


    }

}

```

![image-20220303120532886](/Users/li/Library/Application Support/typora-user-images/image-20220303120532886.png)



![image-20220303120801081](/Users/li/Library/Application Support/typora-user-images/image-20220303120801081.png)

![image-20220303120943931](/Users/li/Library/Application Support/typora-user-images/image-20220303120943931.png)

![image-20220303123400493](/Users/li/Library/Application Support/typora-user-images/image-20220303123400493.png)

idea 复制错误的提示信息



用alt 键 选择错误信息

![image-20220303154650374](/Users/li/Library/Application Support/typora-user-images/image-20220303154650374.png)

![image-20220303155437043](/Users/li/Library/Application Support/typora-user-images/image-20220303155437043.png)

![image-20220303155457200](/Users/li/Library/Application Support/typora-user-images/image-20220303155457200.png)

![image-20220303163107041](/Users/li/Library/Application Support/typora-user-images/image-20220303163107041.png)

![image-20220303173213997](/Users/li/Library/Application Support/typora-user-images/image-20220303173213997.png)

![image-20220303174909631](/Users/li/Library/Application Support/typora-user-images/image-20220303174909631.png)

![image-20220303175622282](/Users/li/Library/Application Support/typora-user-images/image-20220303175622282.png)

![image-20220303175843313](/Users/li/Library/Application Support/typora-user-images/image-20220303175843313.png)

![image-20220303180336788](/Users/li/Library/Application Support/typora-user-images/image-20220303180336788.png)

![image-20220303181228564](/Users/li/Library/Application Support/typora-user-images/image-20220303181228564.png)

![image-20220303181453146](/Users/li/Library/Application Support/typora-user-images/image-20220303181453146.png)

![image-20220303182624722](/Users/li/Library/Application Support/typora-user-images/image-20220303182624722.png)

![image-20220303192707228](/Users/li/Library/Application Support/typora-user-images/image-20220303192707228.png)

![image-20220303192930457](/Users/li/Library/Application Support/typora-user-images/image-20220303192930457.png)

![image-20220303194315047](/Users/li/Library/Application Support/typora-user-images/image-20220303194315047.png)

![image-20220303195603861](/Users/li/Library/Application Support/typora-user-images/image-20220303195603861.png)

![image-20220303195631502](/Users/li/Library/Application Support/typora-user-images/image-20220303195631502.png)

![image-20220303201533757](/Users/li/Library/Application Support/typora-user-images/image-20220303201533757.png)

![image-20220303202024282](/Users/li/Library/Application Support/typora-user-images/image-20220303202024282.png)

![image-20220303205033337](/Users/li/Library/Application Support/typora-user-images/image-20220303205033337.png)

```perl
package com.big2333.flink;

import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.table.api.Table;
import org.apache.flink.table.api.Tumble;
import org.apache.flink.table.api.bridge.java.StreamTableEnvironment;
import org.apache.flink.types.Row;

import java.time.Duration;

import static org.apache.flink.table.api.Expressions.$;
import static org.apache.flink.table.api.Expressions.lit;

public class TableWindow {

    public static void main(String[] args) throws Exception {

        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env);

        String path=str+"/sensor.txt";


        env.getConfig().setAutoWatermarkInterval(200L);
        //env.setStreamTimeCharacteristic();
        env.setParallelism(1);


        DataStreamSource<String> inputstream = env.readTextFile(path);

        // DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);


//
//         转换成 SensorReading 类型
        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        })
                .assignTimestampsAndWatermarks(WatermarkStrategy.<SensorReading>forBoundedOutOfOrderness(Duration.ofSeconds(2))
                        .withTimestampAssigner(((sensor,l)->sensor.getValue()*1000L))

                );


        Table eventTime = tableEnv.fromDataStream(dataStream, $("name"), $("value"), $("temp"),$("rowtime").rowtime());

        Table resultTable = eventTime.window(Tumble.over(lit(15).seconds()).on($("rowtime")).as("tw"))
                .groupBy($("name"), $("tw"))
                .select($("name"), $("temp").avg(),$("tw").end());


        tableEnv.toAppendStream(resultTable, Row.class).print("avg");


        env.execute();
    }
}

```

function



![image-20220304102958933](/Users/li/Library/Application Support/typora-user-images/image-20220304102958933.png)

![image-20220304103055835](/Users/li/Library/Application Support/typora-user-images/image-20220304103055835.png)

![image-20220304115249889](/Users/li/Library/Application Support/typora-user-images/image-20220304115249889.png)

![image-20220304115347828](/Users/li/Library/Application Support/typora-user-images/image-20220304115347828.png)

以上是旧版本的

新版本的如下:

![image-20220304123041238](/Users/li/Library/Application Support/typora-user-images/image-20220304123041238.png)

![image-20220304123109163](/Users/li/Library/Application Support/typora-user-images/image-20220304123109163.png)

```perl
package com.big2333.flink;

import jdk.nashorn.internal.codegen.CompilerConstants;
import org.apache.calcite.util.PrecedenceClimbingParser;
import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.table.api.Table;
import org.apache.flink.table.api.bridge.java.StreamTableEnvironment;
import org.apache.flink.table.functions.FunctionContext;
import org.apache.flink.table.functions.ScalarFunction;
import org.apache.flink.types.Row;

import java.time.Duration;

import static org.apache.flink.table.api.Expressions.$;
import static org.apache.flink.table.api.Expressions.call;

public class FuntionScalar {

    public static void main(String[] args) throws Exception {

        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env);

        String path=str+"/sensor.txt";


        env.getConfig().setAutoWatermarkInterval(200L);
        //env.setStreamTimeCharacteristic();
        env.setParallelism(1);


        DataStreamSource<String> inputstream = env.readTextFile(path);

        // DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);


//
//         转换成 SensorReading 类型
        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        });


        Table table = tableEnv.fromDataStream(dataStream, $("name"), $("value"), $("temp"));


        //设置传入的参数
        tableEnv.getConfig().addJobParameter("hashcode_factor", "31");
        //注册标量函数
       tableEnv.createTemporarySystemFunction("hashFuc", HashCodeFunction.class);

        //使用标量函数

        Table select = table.select(call("hashFuc", $("name")));

        tableEnv.toAppendStream(select, Row.class).print("scalar");

        env.execute();

    }

    public static class HashCodeFunction extends ScalarFunction{

        private int factor=0;

        public HashCodeFunction(){

        }

        @Override
        public void open(FunctionContext context) throws Exception {

            factor = Integer.parseInt(context.getJobParameter("hashcode_factor", "12"));
        }

        public int eval(String str){


            return str.hashCode()*factor;

        }
    }

}

```

表函数:





```java
package com.big2333.flink;

import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.table.annotation.DataTypeHint;
import org.apache.flink.table.annotation.FunctionHint;
import org.apache.flink.table.api.Table;
import org.apache.flink.table.api.bridge.java.StreamTableEnvironment;
import org.apache.flink.table.functions.FunctionContext;
import org.apache.flink.table.functions.ScalarFunction;
import org.apache.flink.table.functions.TableFunction;
import org.apache.flink.types.Row;

import static org.apache.flink.table.api.Expressions.$;
import static org.apache.flink.table.api.Expressions.call;

public class FunctionTable {

    public static void main(String[] args) throws Exception {
        String str= System.getProperty("user.dir");
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        StreamTableEnvironment tableEnv = StreamTableEnvironment.create(env);

        String path=str+"/sensor.txt";


        env.getConfig().setAutoWatermarkInterval(200L);
        //env.setStreamTimeCharacteristic();
        env.setParallelism(1);


        DataStreamSource<String> inputstream = env.readTextFile(path);

        // DataStreamSource<String> inputstream = env.socketTextStream("localhost", 7777);


//
//         转换成 SensorReading 类型
        DataStream<SensorReading> dataStream = inputstream.map(new MapFunction<String, SensorReading>() {


            @Override
            public SensorReading map(String s) throws Exception {

                String[] strings = s.split(",");


                return new SensorReading(strings[0],new Long(strings[1]),new Float(strings[2]));
            }
        });


        Table table = tableEnv.fromDataStream(dataStream, $("name"), $("value"), $("temp"));


        //注册表函数
        tableEnv.createTemporarySystemFunction("SplitFunction", SplitFunction.class);

        //在table api里调用注册号的函数

        Table select = table.joinLateral(call("SplitFunction", $("name"))).select($("name"), $("temp"),$("word"), $("length"));

        tableEnv.toAppendStream(select, Row.class).print("tableFuction");

        env.execute();

    }

    @FunctionHint(output = @DataTypeHint("ROW<word STRING, length INT>"))
   public static class SplitFunction extends TableFunction<Row>{

        public void eval(String str){

            for(String s:str.split("0")){

                collect(Row.of(s,s.length()));
            }


        }
   }


}
```





![image-20220304131940941](/Users/li/Library/Application Support/typora-user-images/image-20220304131940941.png)























































