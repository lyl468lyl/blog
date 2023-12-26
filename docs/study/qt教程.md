

# 

qt下载

```perl
https://www.qt.io/offline-installers
```

qt代码

```perl
 Q_OBJECT  宏,允许类中使用信号和槽的机制
快捷键
1) 注释 ctrl+/
2) 运行 ctrl+r
3) 编译 ctrl+b
字体缩放
1) ctrl+鼠标滚轮
查找
1) ctrl+f

整行移动
1) ctrl+shift+ (上)或者(下)
自动对齐
ctrl+i
同名之间.h和.app切换
1)fn+f4

button 按钮

QPushButton *btn=new QPushButton("按钮",this);
btn->setParent(this);

btn->move(100,100);
setFixedSize(600,400);
btn->show();
setWindowTitle("first");

对象树
当创建的对象在堆中时,如果指定的父亲是Qobject或者Qobject
子类,就可以不用管理释放操作,这时会将对象放到对象树中,当关闭
窗口时自动释放对象.

信号和槽

connect(btn,&QPushButton::clicked,this,&QWidget::close);

自定义信号
 老师  发送饿了信号  学生接收信号   学生请客吃饭(槽)

信号 :没有返回值, 需要声明,不需要实现
槽  :没有返回值,需要声明,需要实现
 connect 做连接
 信号触发:emit

te=new Teacher();
st=new Student();
connect(te,&Teacher::huggry,st,&Student::treat);
sendMessge();
void MainWindow::sendMessge(){

    emit te->huggry();

}

qdebug使用

#include <QDebug>
qDebug()<<""


当自定义信号和槽实现重载
需要利用函数指针明确指向的地址
void (Teacher::*tsignal)(Qstring)=&Teacher::hungry
 Qstring 转成char*
 先用ToUTF8() 转成QByteArray
.Data() 转为char*

button 触发槽,以及button 触发信号,


te=new Teacher(this);
st=new Student(this);
 信号和槽
    connect(st,&Student::huggry,te,&Teacher::treat);
信号和槽重载解决

    void (Student:: * stSiganl)(QString)=&Student::huggry;
    void (Teacher:: * teSlot )(QString)=&Teacher::treat;
    connect(st,stSiganl,te,teSlot);

    emit st->huggry("apple");





QPushButton *btn=new QPushButton("btn",this);
resize(600,400);
btn->move(10,10);

点击按钮触发 槽
触发无参的槽函数
    void (Student:: * stSiganl1)(void)=&Student::huggry;
    void (Teacher:: * teSlot1 )(void)=&Teacher::treat;
    connect(st,stSiganl1,te,teSlot1);

信号和槽关闭端口
    connect(btn,&QPushButton::clicked,te,teSlot1);
    emit st->huggry();

信号触发信号

void (Student:: * stSiganl1)(void)=&Student::huggry;
void (Teacher:: * teSlot1 )(void)=&Teacher::treat;
connect(st,stSiganl1,te,teSlot1);
connect(btn,&QPushButton::clicked,st,stSiganl1);//相当有emit->st->huggry()

拓展
 信号可以连接信号
一个信号可以连接多个槽函数
多个信号可以连接同一槽函数
信号和槽的参数,必须类型一一对应
信号和槽的参数个数,是不是要一致 信号的参数个数 可以
多余槽函数的参数个数.


lamda表达式
[] 是标识符 匿名函数
[]()mutable{}
中括号中 = 表示值传递  & 引用传递
关键字mutable 表示可以修改值传递的值,没有mutable,修改不了值传递的值.
lambda 表达式

QPushButton *b1=new QPushButton("b1",this);
QPushButton *b2=new QPushButton("b2",this);
b2->move(50,50);
int m=10;

connect(b1,&QPushButton::clicked,this,[=]()mutable{

    qDebug()<<"lambda test";
    b1->setText("test");
    m=12;
    qDebug()<<m;
});

qDebug()<<m;

lambda表达式 返回值
int ret=[]()->int{}

int ret=[]()->int{
    return 100;
}();
qDebug()<<ret;


创建菜单和工具栏
添加菜单栏
QMenu *menu=new QMenu("file");
QAction *openAction= menu->addAction("open");
menu->addSeparator();
// 不加action 不会显示menu
QAction *closeAction= menu->addAction("close");
QMenu *menu1=new QMenu("edit");
menu1->addAction("save");
this->menuBar()->addMenu(menu);
this->menuBar()->addMenu(menu1);

//添加工具栏
QToolBar *toolbar=new QToolBar(this);
this->addToolBar(Qt::LeftToolBarArea,toolbar);
//只允许左右停靠
toolbar->setAllowedAreas(Qt::LeftToolBarArea|Qt::RightToolBarArea);
//设置移动总开关
toolbar->setMovable(false);
//在工具栏设置内容
toolbar->addAction(openAction);
toolbar->addSeparator();
toolbar->addAction(closeAction);
//工具栏中添加控件
QPushButton *btn=new QPushButton("new",this);
toolbar->addWidget(btn);

添加状态栏

QLabel *lable=new QLabel("状态栏信息",this);
//默认添加左侧
this->statusBar()->addWidget(lable);
//添加到右侧
this->statusBar()->addPermanentWidget(lable);
//铆接部件(浮动窗口)

QDockWidget *dock=new QDockWidget("dockwight",this);
this->addDockWidget(Qt::BottomDockWidgetArea,dock,Qt::Horizontal);
dock->setAllowedAreas(Qt::LeftDockWidgetArea);

//添加中心部件
QTextEdit *edit=new QTextEdit();
this->setCentralWidget(edit);

qt 资源文件的添加
1) 将图片文件夹拷贝到项目的文件下
2) 在项目名中右键-->add new-->qt-->qt resource-->完成
3) 会出现Resource-->res.qrc 右键选择open in editor
4) add prefix 输入 /
5) add files 选择资源文件夹
6)引用资源文件:
格式 ":+前缀+文件路径"
ui->actionnew_2->setIcon(QIcon(":/image/home.png"));

对话框
点击菜单了弹出模态对话框
对话框分为: 1)模态对话框(阻塞式,对话框下面不可操作) 2)非模态对话框(异步式,对话框下面可操作)

connect(ui->actionnew_2,&QAction::triggered,this,[=](){

    //模态对话框
//        QDialog dialog;
//        dialog.resize(400,400);
//        dialog.exec();
//          qDebug()<<"模态对话框";

    //非模态对话框
    QDialog *d2=new QDialog(this);
     d2->resize(400,400);
    d2->show();

    //防止dialog 对象一直在堆区重复创建,产生内存泄露,
    //需要设置属性,关闭弹窗时,删除对象
    setAttribute(Qt::WA_DeleteOnClose);
    qDebug()<<"非模态对话框";

});


消息对话框
        QMessageBox msgBox;
        msgBox.setText("The document has been modified.");
        int ret = msgBox.exec();

错误对话框
        QMessageBox::critical(this,"错误","发生了错误");
信息对话框
QMessageBox::information(this,"xinxi","xinxn");
问题对话框
        QMessageBox::StandardButton btn=QMessageBox::information(this,"wenti","wetnti",QMessageBox::Ok|QMessageBox::Cancel);
        qDebug()<<btn;
        if(btn==QMessageBox::Cancel){
            qDebug()<<"点击保存";

        }

其他对话框
颜色对话框
       QColor ret= QColorDialog::getColor(QColor(255,0,0));
       qDebug()<<ret;
文件对话框
第一个参数: 父亲,第二个参数:标题 第三个参数:默认路径 第四个参数:过滤文件条件
       QString path= QFileDialog::getOpenFileName(this,"选择文件","/Users/li","(*.txt)");
       qDebug()<<path;
字体对话框
        bool flag;
        QFont font= QFontDialog::getFont(&flag,QFont("SimHei",36));
        qDebug()<<"字体"<<font.family()<<"字号"<<font.pointSize()<<"加粗"<<font.bold();


登录对话框制作
 1) 选择container中的wiget ,将用户名,密码,和编辑框拖入到wiget中
 2) 选择1)步骤中wiget 点击按栅格布局
 3) 选择container中的wiget,将"确定和取消"pushbutton按钮拖入到wiget
 4) 选择3)步骤中的wiget,点击安装水平布局
 5) 在选中mainwindow ,点击安装垂直布局
 6) 将"弹簧",拖入到各个控制中,实现自动缩放.
 7) 将"弹簧" 属性设置固定值 ,在属性中 sizetype:fixed width:20
 8) 修改wiget中垂直高度:选择wiget,在属性sizepoliy:垂直高度:fixed
 9) 修改wiget中maign:在属性:layout中 layoutleftmaign:0 layoutrightmaign:0 ......
 10)设置窗口不能调整大小: 选择mainwidow,将属性 maximumsize: 宽度和高度设置 420,303,minimumsize:420,303


控件操作
1) toolbutton:用于显示图片的按钮
属性: toolbuttonStype:toolbuttonTextbeside,autorise:勾选
2) radiobutton
(1)首先选择一个组,创建2个radiobuton 拖入组中,
(2)代码实现选择哪个radiobutton,使用conect,信号和槽.
代码:
radio button
ui->rdnan->setCheckable(true);
ui->rdnan->setChecked(true);
connect(ui->rdnan,&QRadioButton::clicked,[=](){

   qDebug()<<"nan";
});


3) checkbutton

checkbox

选中是2 ,未选中是0
connect(ui->ch_lan,&QCheckBox::stateChanged,this,[=](int state){

    qDebug()<<state;

});


Qlistwidgt

listwidgt
第一种方法添加
    QListWidgetItem *item=new QListWidgetItem();
    item->setText("aaa");
    ui->listwidgt->addItem(item);
    item->setTextAlignment(Qt::AlignHCenter);
第二种方法添加
    QStringList list;
    list<<"bbb"<<"ccc"<<"dd";

    ui->listwidgt->addItems(list);


treewidgt

ui->treeWidget->setHeaderLabels(QStringList()<<"标题"<<"内容");
QTreeWidgetItem *item1=new QTreeWidgetItem(QStringList()<<"info");

QTreeWidgetItem *iteminfo=new QTreeWidgetItem(QStringList()<<"a"<<"b"<<"c");
item1->addChild(iteminfo);

ui->treeWidget->addTopLevelItem(item1);

tablewidgt

tablewidgt
//设置表格的列数
ui->tableWidget->setColumnCount(3);
//设置表格的水平字段
ui->tableWidget->setHorizontalHeaderLabels(QStringList()<<"姓名"<<"性别"<<"年龄");

//设置表格的行数
ui->tableWidget->setRowCount(5);
//设置行的内容
QTableWidgetItem *item=new QTableWidgetItem(QString("aa"));
ui->tableWidget->setItem(0,0,item);
//int 数据转成Qstring
//    QString::number(10);


其他控件

stackwidgt

connect(ui->btn_up,&QPushButton::clicked,[=](){
    ui->stackedWidget->setCurrentIndex(0);
});
connect(ui->btn_down,&QPushButton::clicked,[=](){
    ui->stackedWidget->setCurrentIndex(1);
});

下拉框
下拉框

ui->comboBox->addItem("aaa");
ui->comboBox->addItem("bbb");


label

label 显示图片资源

ui->label_img->setPixmap(QPixmap(":/image/home.png"));
label 放置动图

QMovie *move=new QMovie(":/image/home.gif");
ui->label->setMovie(move);
move->start();


自定义控件
自定义控件
1) 在已经存在的项目中,在项目名右键-->addnew-->qt-->qt设计师界面类--输入类名(Shap)
2)会产生三个文件(shap.h,shap.cpp,shap.ui)
3)在shap.ui中,拖入QSpinbox,QSlider控件,并调整好大小
4)在主窗口编辑器中(mainwindow.ui),拖入widget容器控件
5)选中刚拖入的widgt控件,右键 选择"提升为",弹窗对话框,在提升的类名填入上面创建的类名(Shap),注意类名大小
6)在shap.h编写控制代码
public:
    explicit Shap(QWidget *parent = nullptr);
    int getValue();
    void setValue(int value);

7)在shap.cpp中编写控制代码,实现拖动Qslider,Qspinbox自动调整,以及暴露的接口函数
int Shap::getValue(){
    return ui->mybox->value();
}
void Shap::setValue(int value){

    ui->mybox->setValue(value);


}
Shap::Shap(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::Shap)
{
    ui->setupUi(this);

    void (QSpinBox::*signal)(int)=&QSpinBox::valueChanged;

    connect(ui->mybox,signal,ui->myslider,&QSlider::setValue);
    connect(ui->myslider,&QSlider::valueChanged,ui->mybox,&QSpinBox::setValue);
}

8) 在mainwindow.cpp调用shap.cpp中定义的函数
注意ui->mywidgt 是上面步骤中拖入的widget(右键提升为"类"名的那个widgt)
connect(ui->get,&QPushButton::clicked,[=](){

    qDebug()<<ui->mywidgt->getValue();
});

connect(ui->set,&QPushButton::clicked,[=](){
    ui->mywidgt->setValue(50);
});


qt 中的事件

1) 在项目名右键,add new ...
2) 选择c++ c++ class类
3)创建Mylabel 类(Mylable.h Mylabel.cpp)
4) 在Mylabel.h/mylabel.cpp 重写事件的方法
 mylabel.h
public:
    explicit Mylabel(QWidget *parent = nullptr);
    void enterEvent(QEvent *event);
    void leaveEvent(QEvent *event);


//mylabel.cpp
Mylabel::Mylabel(QWidget *parent) : QLabel(parent)
{


    //设置鼠标追踪
    //setMouseTracking(true);
}


void Mylabel::enterEvent(QEvent *event){

    qDebug()<<"鼠标进入了";

}

void Mylabel::leaveEvent(QEvent *event){

     qDebug()<<"鼠标离开了";
}

void Mylabel::mousePressEvent(QMouseEvent *event){
    //只有左键按下才有效

    if(event->button()==Qt::LeftButton)
    {
        qDebug()<<"鼠标按下事件";

        QString str=QString("x:%,y:%y").arg(event->x(),event->y());
        qDebug()<<str;
    }


}
void Mylabel::mouseMoveEvent(QMouseEvent *event){

    if(event->buttons()&Qt::LeftButton){
        qDebug()<<"鼠标移动事件";
    }


}

void Mylabel::mouseReleaseEvent(QMouseEvent *event){

    qDebug()<<"鼠标释放事件";
}

5) 在mainwindow.ui中拖拽一个label,控件,选择该控件,右键,选择提升为,填入创建的"Mylabel"类名.


qt 定时器
第一种做法:复写QObecect中的void timerEvent(QTimerEvent *event)方法.

1) 在mainwidow的构造函数中启动定时器

id1=startTimer(1000);
id2=startTimer(2000);

2)在mainwidow中重写定时器的方法
void MainWindow::timerEvent(QTimerEvent *event){

    if(event->timerId()==id1){

        static int sum=0;
        sum++;
        QString str=QString().number(sum);


        qDebug()<<str;


    }else if(event->timerId()==id2){

        qDebug()<<"2秒一次";
    }


}

第二种做法:
使用QTimer类

第二种定时器的使用

QTimer *timer=new QTimer(this);

timer->start(1000); //会发出一个信号
connect(timer,&QTimer::timeout,[=](){

    static int num=0;

    num++;
    QString str=QString().number(num);
    qDebug()<<str;
});


事件分发器
bool event(QEvent *ev)
返回类型是bool,如果返回是true,代表用户要处理事件,不向下分发事件.

实现,在Mylabel.cpp中
bool  Mylabel::event(QEvent *ev){

    if(ev->type()==QEvent::Enter){

        qDebug()<<"阻断了鼠标的点击事件";
        //代表用户自己处理事件
        return true;
    }

    //其他事件交个父类处理,默认处理
    return QLabel::event(ev);


}

事件过滤器
通过事件过滤器,可以在程序分发到event事件之前,在做一层
高级拦截
使用分为两个步骤:
1)给控件安装事件过滤器
2) 重写eventfilter事件

实现
1)在mainwindow的构造函数中安装控件过滤器
  ui->label_3->installEventFilter(this);
2) 在mainwidow中重写 eventFilter事件
bool MainWindow::eventFilter(QObject *obj, QEvent *ev){

   if(obj==ui->label_3){

       if(ev->type()==QEvent::Leave){
           qDebug()<<"事件过滤器,过滤leave事件";

           //代表用户自己处理该事件
           return true;
       }


   }
   //其他默认处理
   return QWidget::eventFilter(obj,ev);

}

Qpainer

1) 在mainwindow复写 void painterEvent()方法
实现
void MainWindow::paintEvent(QPaintEvent *event){

    //生成一个画笔

    QPen pen(QColor(255,0,0));
    pen.setWidth(3);
    pen.setStyle(Qt::DotLine);
    //设置笔刷的风格
    pen.setBrush(Qt::cyan);

    //生成一个画家
    //this 代表在当前对象中画图
    //画线
    QPainter painer(this);

    //设置画笔
    painer.setPen(pen);

    painer.drawLine(QPoint(0,0),QPoint(100,100));

    //画圆
    painer.drawEllipse(QPoint(120,120),50,50);

    //画矩形
    painer.drawRect(100,100,20,50);
    //画文字

    painer.drawText(QPoint(150,150),"china");


}


painter 高级设置
实现

高级设置

    painer.drawEllipse(QPoint(100,100),50,50);

    //设置抗锯齿能力
    painer.setRenderHint(QPainter::HighQualityAntialiasing);
    painer.drawEllipse(QPoint(200,100),50,50);

    painer.drawRect(QRect(100,100,50,50));
    //保存画家状态
    painer.save();

    //移动画家
    painer.translate(100,0);
    //恢复画家状态
    painer.restore();
    painer.drawRect(QRect(100,100,50,50));

 点击按钮,图片移动

1) 在mainwidow中的void painterevet()方法中实现画图片功能

void MainWindow::paintEvent(QPaintEvent *event){

     QPainter painer(this);
     painer.drawPixmap(posX,0,QPixmap(":/image/home.png"));
}

2) 创建一个button,点击button 调用"update()",就会调用重绘,并再次调用 painEvent,改变x的位置
就会移动
在mainwidow的构造方法中实现
connect(ui->move,&QPushButton::clicked,[=](){

    posX+=20;
    if(posX>this->width()){
        posX=100;
    }

    update();
});


绘图设备

绘图设备有 QPixmap ,QImage QPicture

代码实现:

在mainwindow 的构造函数中实现:

    //1)pixmap 绘图设备,专门为平台显示做了优化

    QPixmap map(100,100);
    //填充背景
    map.fill(Qt::white);
    QPainter painter(&map);
    painter.setPen(QPen(Qt::green));
    painter.drawRect(QRect(0,0,40,40));
    map.save("/Users/li/demo.png");

    //2)Qimage 绘图设备,可以对像素进行访问

    QImage image(200,200,QImage::Format_RGB32);
    image.fill(Qt::white);
    QPainter painter1(&image);
    painter1.drawEllipse(QPoint(50,50),20,20);
    image.save("/Users/li/demo1.png");

    3) Qpicture 绘图设备,可以记录和重新绘图指令

    QPicture picture;
    QPainter painter2;
    painter2.begin(&picture);
    painter2.setPen(QPen(Qt::blue));
    painter2.drawEllipse(QPoint(50,50),20,20);

    painter2.end();

    picture.save("/Users/li/demo3.li");


上述中使用了3)中使用了Qpicture记录了绘图指令,用生成的绘图指令,画图
必须在void painterEvent()的重写函数中使用如下代码:

QPainter painter3(this);
QPicture pic;
pic.load("/Users/li/demo3.li");
painter3.drawPicture(0,0,pic);

QFile 对文件读写


QFile 读取指定的文件

QFile file("/Users/li/message.txt");

//
//打开方式
file.open(QIODevice::ReadOnly);

//开始度文件,读取全部
// QByteArray arr=file.readAll();

//第二种方式,一行行读

 QByteArray arr1;
 while (!file.atEnd()) {

     arr1+=file.readLine();
 }

//默认读取的是utf8格式,如果读取是gbk设置编码
// QTextCodec *codec=QTextCodec::codecForName("gbk");


ui->textEdit->setText(arr1);

//用gbk方式编码,设置到textEdit
//    ui->textEdit->setText(codec->toUnicode(arr));
file.close();

//写操作

file.open(QIODevice::Append);
file.write("李玉龙李玉龙李玉龙李玉龙李玉龙");
file.close();

文件信息

获取创建时间和修改时间
QDateTime lastDate= fileinfo.lastModified();
qDebug()<<lastDate.toString("yyyy/MM/dd hh:mm:ss");


```

