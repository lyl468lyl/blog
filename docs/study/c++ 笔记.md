---

date: 2013-12-05

category: c++ 教程

tag:

  - c++


---

# 图谱



1. c++ 基础知识

   ```perl
   //
   // Created by liyulong on 2023/12/6.
   //一 函数的总结
   //总结-函数总结
   //函数 参数,形参
   //函数重载
   //多彩函数
   //静态存储和动态存储
   //形参传值,程序调用的时候,才会开辟空间.传值,只是传递副本
   //全局变量 程序结束回收,局部变量,方法结束
   //局部变量static 变量只有在程序结束时,回收,
   //auto
   //extern 引用其他cpp文件的全局变量
   
   //二 指针部分
   //二维数组和指针 arr[3][4]   int* p=arr[0]  //arr[0],就是二维数组第一个元素的指针
   //一维数组的指针 arr[10]  int *p=arr,arr数组名代表&a[0],是第一个元素的地址
   //空指针   int *p=NULL 空指针, void *p=NULL  空类型的指针,可以赋值各种类型的指针, *(int*)p,取值
   // int* const p=&a  指针常量,不能够指向别的地址,现在执向的内容能改变
   // int const* p:指向常量的指针,能够指向别的地址,现在执行的能容不能改变
   //int const const* p; 不能指向别的地址,不能修改内容
   //指针右配原则, *&P=*(&p)
   //int *p=&a 取地址
   
   //函数指针 声明函数指针 int (*demo)(int,int) int sum (int a,int b){}, demo=sum; 调用(*demo)(1,2)
   //函数返回指针 int* demo(int a){ int * p=new int return p }
   //动态内存分配 int* p=new int; 是否内存 delete p;
   //内存安全问题, 指针指向函数的局部变量的地址,局部变量会在方法结束后销毁,指针指向了空的位置,报错
   //内存泄露,堆中一块未被销毁的区域,没有指针指向
   //指针数组  int * demo[4] demo[0]=&a,demo[1]=&b  .....
   //数组指针  int (*demo)[4] 指向四个元素的指针   int arr[2][4]={} demo=arr ,arr存的是arr[0]地址
   //arr[0]存的是首元素的地址
   //char *str="hello"; 字符串指针
   //引用 就是变量的别名  int a=100;  int & aa=a 引用必须声明的时候就初始化,引用后不能再引用别的变量
   
   //结构体
   
   //结构体的定义
   
   //1. 直接定义结构体变量
   /**
    *
    * struct demo{
    *  int id;
    * }d1;
    *
    */
   
   //2. 使用数据类型定义
   /**
   * struct person {
    * int id;
    * char name[30];
    * int age;
    *
    *
    * }
    *
    * 定义结构体体变量   struct person pp; p.id=12;strcp(name,"ss") p.age=12
    * 定义结构体指针     struct person *p1; p->id=13;strcp(p->name,"hh",p->age)
    * 定义结构体数组     stuct person arr[2]={{1,"zhang",20},{2,"li",30}}
    * 定义结构体数组指针  stuct person *p2=arr; (*p2).name
   */
   
   //结构体的初始化
   
   /**
   *  struct student{
    *  int id;
    *  int age;
    *
    *  } st1={1,20};
    *
    *  初始化结构体数组
    *  struct student1{
    *    int id;
    *    int age;
    *
    *  }pp[2]={{1,20},{2,30}}
    *
    *
   */
   
   //共用体  union per{};  所有成员共享空间,共用体的大小是成员的最大值,在共用体起作用的成员,是最后一个成员
   //在存入一个新的成员后原有的成员失效,一个共用体变量不能同时存放多个成员的值,某一时刻只能存放最后赋予它的值.
   //在改变共用体的一个成员时,其他成员也会改变.
   
   //枚举类型
   //枚举类型
   // 枚举的取值是定义中某一个: pccolor=one;那么pccolor就是1
   //enum color{one=1,two,three,four} pcolor;
   //pcolor=(enum color)1;
   //std::cout<<pcolor<<std::endl;
   //int c=2;
   //
   //switch (c) {
   //case one:
   //std::cout<<"one";
   //break;
   //case two:
   //std::cout<<"two";
   //break;
   //defult:
   //std::cout<<"default";
   //return 0;
   //
   //
   //}
   
   // 宏定义
   // 不带参数的宏定义 #define PI 3.14 代码中用到PI的地方全都替换成3.14
   //不带参数的宏定义  #define ADD(int,int){(a)+(b)}
   
   
   //c++ 面向对象
   // person.h 定义类的声明(类成员和函数声明) person.cpp (类成员函数的实现) Person::xxx(){}
   //构造函数  Person(){},有参构造 Person(int id){},如果有参构造,必须删除无参构造
   //析构函数  ~person(){} ,如果在局部模块中定义 Person p;则方法结束后就调用析构.如果用new对象,则delele之后调用
   //内部可见性 private(默认),public,protect,private 只有在类体内可以,类体内就是成员函数里面.
   //public 可以在类体外 protect,可以在继承类的成员函数的方法里.
   //static 静态成员函数  在.h中声明  public: statci int sum;
   //static             在main函数前初始化(必须): int Person::sum=0;
   //static             在main函数里调用:        std::cout<<Person::sum
   //隐患的this指针  类的成员函数如: int run(){},vc.run(),实际是 vc.run(vc* this),隐含了这个指针
   //类的嵌套,嵌套中的类是没有能力访问外层类的私有成员变量.
   //类的嵌套: 在main中 也不能直接使用嵌套类定义变量
   
   //面向对象的继承
   
//继承方式: class tea:public Food{}
   // public 方式: 在基类中的public 成员,在派生类中还是public ,private 在派生类中不能访问
//private 方式: 在基类中public和protect成员在派生类中能够访问,private成员在基类中无法访问
   //protect 方式,在基类中public和protect 在派生类中都是protect,protect可以被基类的所有派生
//类使用,这一性质可以沿着继承树无限向下传播.
   
   //class dog:public/private Animal :public 和private区别 private 派生,生成的dog实例无法
   //访问 基类Animal的公共的方法. 而public 派生是可以的.
   //构造函数访问的顺序:基类的构造--> 子类构造--> 子类析构-->基类析构
   //创建子类对象时,无论那种子类构造函数,都会自动调用父类的默认构造函数,若想使用父类带参的构造函数,则需要显示调用
   //子类和父类都有相同的成员函数时,子类对象调用该函数会覆盖父类的成员函数.
   //如果想调用父类的成员函数就需要加入基类的类名如: dog.Animal::test()
   //如果子类中隐藏了父类的成员函数,则父类中所有同名的成员函数(重载的函数)均被隐藏
   
   //c++ 数据类型分为基本数据类型和构造数据类型
   
   //c++ 运算符重载
   //两个对象相加   int operater+(Cook c){}   Cbook c;Cbook c1; c+c1 就会调用
   //一个对象和整数相加 int operater+(const int value) Cbook c; c+100 就会调用
   //void operater=(const int value) cbook c; c=100 就会调用
   //重载构造函数 Cbook(){};Cbook(int age); Cbook c; c=100就会调用
   //转换运算符  operater double(int a){}; Cbook c  double(c) 就会调用
   
   
   //多继承,在多继承中会出现这么一个情况,例如cbird和cfish 均派生于同一父类Canimal,那么当从cbird和
   //cfish派生的子类cwaterbird 将存在两个canimal类复制,使用虚继承机解决只有一个Canimal基类.
   
   //多继承的二义性,两个基类都有同名的成员函数,生成子类时,调用成员函数,编译器不知道调用那个父类的成员函数
   
   //多继承基类的调用顺序,调用顺序是按照基类名标识符的前后顺义进行的
   //虚函数  基类的成员函数用virtual 定义,派生类中同名的成员函数,自然也是
   //虚函数, 将子类对象 付给基类类型  Canimal c*=new Dog()
   //虚继承  解决多层次继承中,存在多个基类副本的问题,不使用虚继承会多次调用基类的构造函数
   
   //抽象类:含有纯虚函数的类成为抽象类.
   //纯虚函数,就是在基类中用virtual 声明,不用实现,要让它的派生类实现
   //在基类中 virtual double getArea()=0,不要定义实现部分
   //从抽象类派生的子类如果不是抽象类.则子类必须实现父类中所有纯虚函数
   
   //模板
   
   //函数模板定义  template<类型形式参数> 返回类型 函数名(形式参数){}
   //类型形式参数分成两种: 1)模板类型参数 2)模板非类型参数
   //模板类型参数 用 class T定义 :template<class T>
   //模板类型参数和模板非类型参数一块定义: template<class T,int len>
   //重载函数模板:
   //#include <iostream>
   //
   ////重载函数模板
   //template<class  T>
   //T min(T a,T b){
   //
   //    if(a<b){
   //        return a;
   //    }else
   //    {
   //        return b;
   //    }
   //}
   //
   //char* min(char* a,char* b){
   //
   //    if(strcmp(a,b))
   //        return b;
   //    else
   //        return a;
   //
   //
   //}
   //
   //
   //int main(){
   //
   //
   //    std::cout<<min(1,2)<<std::endl;
   //    std::cout<<min('a','b');
   //
   //
   //
   //}
   
   
   //类模板
   //类模板的定义
   //template<类型形式参数> class 类模板名
   //类模板成员函数的定义
   //返回类型 类型模板名<类型名表>::函数名(形参)
   
   //生成对象: 类模板名不是真实的类,真实的类是模板名<类型实际参数>
   //如: 类模板名<int>  c;
   
   //类模板示例
   #include <iostream>
   
   //template<class T>
   //class Person{
   //
   //public:
   //    Person(){}
   //    T add(T a,T b){
   //        return a+b;
   //    }
   //};
   //
   //int main(){
   //
   //    Person<int> p;
   //
   //    std::cout<< p.add(1,2);
   //}
   
   //默认模板参数
   //是在定义类模板时,给类型形式参数付一个初始值 template<class T=int>, 生成对象时 persong<> p;
   //为具体类型参数提供默认值
   //templage<class T,int num=10>
   
   //定制类模板如果想要扩展功能,需要对类模板进行覆盖,使模板类能够完成特殊功能.
   
   //标准模板库
   //1.向量类模板,提供了对数组元素的快速访问,插入和删除,可以随时改变大小.
   //vector<int> v1,v2;
   //v1.resize(10);
   //v2.resize(1);
   //
   //v1= vector<int>(8,7);
   //int arr[8]={1,2,3,4,5,6,7,8};
   //v2= vector<int>(arr,arr+8);
   //v2.insert(v2.begin()+3,12,2);
   
   //2 双端队列模板
   //int arr[8]={1,2,3,4,5,6,7,8};
   //deque<int> demo;
   //demo= deque<int>(arr,arr+8);
   //demo.push_back(55);
   //demo.pop_front();
   
   //链表类模板
   //list<int> list1;
   //int arr[8]={1,2,9,4,5,6,7,8};
   //list1=list<int>(arr,arr+8);
   //list1.sort();
   //
   //for(list<int>::iterator it=list1.begin();it!=list1.end();it++){
   //
   //cout<<""<<*it;
   //}
   
   //set 模板
   //int main(){
   //
   //    set<int> myset;
   //    myset.insert(1);
   //    myset.insert(20);
   //    myset.insert(3);
   //    myset.insert(4);
   //    myset.insert(5);
   //    set<int>::iterator  it1=myset.begin();
   //    it1=myset.find(20);
   //    myset.erase(it1);
   //    for(set<int>::iterator it=myset.begin();it!=myset.end();it++){
   //        cout<<*it;
   //    }
   //mutiset 和set区别 是mutiset可以有重复的数据.
   
   //map 类模板
   //map<int,char> cmap;
   //cmap[1]='a';
   //cmap[2]='b';
   //cmap[3]='c';
   //for(map<int,char>::iterator it=cmap.begin();it!=cmap.end();it++){
   //cout<<(*it).first;
   //cout<<(*it).second;
   //}
   
   //minimap 比map,可以包含重复的数据值.
   
   //class Person{
   //public:
   //    typedef int cc;
   //    typedef pair< int, int> aa;
   //};
   
   //1) 要引用这个类型需要 Person::cc a=1
   //2) 要使用需要这样做:Person::aa p1(1,3); cout<<p1.first
   //3) 上面的简化操作 //cout<<Person::aa(1,2).first;
   
   //C++ 特性 运行时类型检测 RTTI
   //主要用两个方法 1) dynamic_cast()  2)typeid()
   
   //例如:  class  Base{ virtual void test(){}}  class A:Base{virtual void test(){};virtual void say(){} }
   // A * a=new Base()//报错   A* a=dynamic_cast<A*>(new Base) //就不会报错了
   //Base * b=new A(); typeid(*b)==typeid(A) 会返回true 说明*b指向了一个A对象.
   ```
   
   
   
   
   
   










