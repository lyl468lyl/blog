# Spring Boot 代码混淆

---

date: 2013-6-25

category: spring_boot

tag:

  - java

---

参考:https://blog.csdn.net/m0_57042151/article/details/127507097

使用proguard实现代码混淆。主要是在pom中使用插件来实现。

```cobol
  <build>
        <plugins>

            <plugin>
                <groupId>com.github.wvengen</groupId>
                <artifactId>proguard-maven-plugin</artifactId>
                <version>2.6.0</version>
                <executions>
                    <!-- 以下配置说明执行mvn的package命令时候，会执行proguard-->
                    <execution>
                        <phase>package</phase>
                        <goals>
                            <goal>proguard</goal>
                        </goals>
                    </execution>
                </executions>
                <configuration>
                    <!-- 就是输入Jar的名称，我们要知道，代码混淆其实是将一个原始的jar，生成一个混淆后的jar，那么就会有输入输出。 -->
                    <injar>${project.build.finalName}.jar</injar>
                    <!-- 输出jar名称，输入输出jar同名的时候就是覆盖，也是比较常用的配置。 -->
                    <outjar>${project.build.finalName}.jar</outjar>
                    <!-- 是否混淆 默认是true -->
                    <obfuscate>true</obfuscate>
                    <!-- 配置一个文件，通常叫做proguard.cfg,该文件主要是配置options选项，也就是说使用proguard.cfg那么options下的所有内容都可以移到proguard.cfg中 -->
                    <proguardInclude>${project.basedir}/proguard.cfg</proguardInclude>
                    <!-- 额外的jar包，通常是项目编译所需要的jar -->
                    <libs>
                        <lib>${java.home}/lib/rt.jar</lib>
                        <lib>${java.home}/lib/jce.jar</lib>
                        <lib>${java.home}/lib/jsse.jar</lib>
                    </libs>
                    <!-- 对输入jar进行过滤比如，如下配置就是对META-INFO文件不处理。 -->
                    <inLibsFilter>!META-INF/**,!META-INF/versions/9/**.class</inLibsFilter>
                    <!-- 这是输出路径配置，但是要注意这个路径必须要包括injar标签填写的jar -->
                    <outputDirectory>${project.basedir}/target</outputDirectory>
                    <!--这里特别重要，此处主要是配置混淆的一些细节选项，比如哪些类不需要混淆，哪些需要混淆-->
                    <options>
                        <!-- 可以在此处写option标签配置，不过我上面使用了proguardInclude，故而我更喜欢在proguard.cfg中配置 -->
                    </options>
                </configuration>
            </plugin>

            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <executions>
                    <execution>
                        <goals>
                            <goal>repackage</goal>
                        </goals>
                        <configuration>
                            <mainClass>com.shangjian.mps.thirdparty.ShangjianThirdPartyApplication</mainClass>
                        </configuration>
                    </execution>
                </executions>
            </plugin>

























<!--            <plugin>-->
<!--                <groupId>org.springframework.boot</groupId>-->
<!--                <artifactId>spring-boot-maven-plugin</artifactId>-->
<!--                &lt;!&ndash;插件中添加如下内容：executions&ndash;&gt;-->
<!--                <executions>-->
<!--                    <execution>-->
<!--                        <goals>-->
<!--                            <goal>repackage</goal>-->
<!--                        </goals>-->
<!--                    </execution>-->
<!--                </executions>-->
<!--            </plugin>-->



<!--                <plugin>-->
<!--                    <groupId>org.apache.maven.plugins</groupId>-->
<!--                    <artifactId>maven-compiler-plugin</artifactId>-->
<!--                    <version>3.2</version>-->
<!--                    <configuration>-->
<!--                        <source>1.8</source>-->
<!--                        <target>1.8</target>-->
<!--                    </configuration>-->
<!--                </plugin>-->



            <!--一键生成docker镜像插件-->
<!--            <plugin>-->
<!--                <groupId>com.spotify</groupId>-->
<!--                <artifactId>docker-maven-plugin</artifactId>-->
<!--                <version>1.2.0</version>-->
<!--                <executions>-->
<!--                    <execution>-->
<!--                        <id>build-image</id>-->
<!--                        <phase>package</phase>-->
<!--                        <goals>-->
<!--                            <goal>build</goal>-->
<!--                        </goals>-->
<!--                    </execution>-->
<!--                </executions>-->
<!--                <configuration>-->
<!--                    <dockerHost>http://123.57.219.164:2375</dockerHost>-->
<!--                    <imageName>picbook-thridpaty</imageName>-->
<!--                    <dockerDirectory>${project.basedir}</dockerDirectory>-->
<!--                    <resources>-->
<!--                        <resource>-->
<!--                            <targetPath>/</targetPath>-->
<!--                            <directory>${project.build.directory}</directory>-->
<!--                            <include>${project.build.finalName}.jar</include>-->
<!--                        </resource>-->
<!--                    </resources>-->
<!--                </configuration>-->
<!--            </plugin>-->

        </plugins>
    </build>

```

在pom.xml同级建立一个proguard.cfg,内容如下

```perl
#指定Java的版本
-target 1.8
#proguard会对代码进行优化压缩，他会删除从未使用的类或者类成员变量等
-dontshrink
#是否关闭字节码级别的优化，如果不开启则设置如下配置
-dontoptimize
#混淆时不生成大小写混合的类名，默认是可以大小写混合
-dontusemixedcaseclassnames
# 对于类成员的命名的混淆采取唯一策略
-useuniqueclassmembernames
#混淆时不生成大小写混合的类名，默认是可以大小写混合
-dontusemixedcaseclassnames
#混淆类名之后，对使用Class.forName('className')之类的地方进行相应替代
-adaptclassstrings

#对异常、注解信息予以保留
-keepattributes Exceptions,InnerClasses,Signature,Deprecated,SourceFile,LineNumberTable,*Annotation*,EnclosingMethod
# 此选项将保存接口中的所有原始名称（不混淆）-->
-keepnames interface ** { *; }
# 此选项将保存所有软件包中的所有原始接口文件（不进行混淆）
#-keep interface * extends * { *; }
#保留参数名，因为控制器，或者Mybatis等接口的参数如果混淆会导致无法接受参数，xml文件找不到参数
-keepparameternames
# 保留枚举成员及方法
-keepclassmembers enum * { *; }
# 不混淆所有类,保存原始定义的注释-
-keepclassmembers class * {
                        @org.springframework.context.annotation.Bean *;
                        @org.springframework.beans.factory.annotation.Autowired *;
                        @org.springframework.beans.factory.annotation.Value *;
                        @org.springframework.stereotype.Service *;
                        @org.springframework.stereotype.Component *;
                        }

#忽略warn消息
-ignorewarnings
#忽略note消息
-dontnote
#打印配置信息
-printconfiguration
-keep public class com.shangjian.mps.thirdparty.ShangjianThirdPartyApplication {
        public static void main(java.lang.String[]);
    }

```

配置后,使用package打包会自动混淆

 ![image-20230323153103606](/Users/li/Library/Application Support/typora-user-images/image-20230323153103606.png)



混淆后的jar包为

 ![image-20230323153348164](/Users/li/Library/Application Support/typora-user-images/image-20230323153348164.png)