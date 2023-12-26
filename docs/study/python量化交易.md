
date: 2013-9-05

category: python 量化交易

tag:

  - 量化

# 

#### 一 量化指标

东方财富网:https://www.eastmoney.com/

1. k线指标

   boll 布林线

   中轨计算的是近n天的均值(近n天成本价,取的是收盘价)

   上轨:中轨+2倍的标准差

   下轨:中轨-2倍的标准差

   标准差:一个股票近多少天的波动幅度,波动幅度越大,标准差越大

   中间:是常规活动空间

   

2. 基本面了解

   巨潮资讯网(年报):http://www.cninfo.com.cn/new/index

   主要看 利润表:营业收入, 净利润 

   ​      现金流表:期末现金及现金等价物余额

   市盈率pe: 市场给的价格与实际利润的比值 总市值/净利润 

   

   

3. 量化交易系统的构成

   行情  策略  柜台结算

   data stategy trade

   交易间隔na秒级,限价单 limit order book(lob),滑点引发误差

   均价

4. 什么是股票

   公司所有权凭证

   基金:投资组合(股票.债券)

   债券:还本付息的有价证券

   

5. 如何获取数据

   爬虫

   数据服务商 : wind 彭博 

   免费接口: 量化交易平台 开源代码

   选择joinquant 获取数据:https://www.joinquant.com/

6. 证券代码标准

   上海证劵交易所  XSHG

   深圳证劵交易所  XSHE

   ```perl
   from jqdatasdk import *
   import datetime
   if __name__ == '__main__':
   
       auth('19844866580', 'Doudou0917')
       #上海证劵交易所 XSHG
       #深圳证劵交易所 XSHE
       #获取某只股票的行情
   
   
       #0:00:00.060926
       #0:00:00.226684
       # starttime = datetime.datetime.now()
       df = get_price(['000001.XSHE'], start_date='2023-07-26 9:00:00',end_date='2023-07-26 16:00:00',
                      frequency='1m'
                     )
       print(df)
       # endtime = datetime.datetime.now()
       # print(endtime - starttime).seconds
       # #获取所有股票的行情
       stocks = list(get_all_securities(['stock']).index)
       print(stocks)
      
   
   
       #获取某只股票的tick数据
   
   ```

   

#### 二 财务报表



```perl
资产负债表: 体现企业家底和负债情况
利润表: 公司盈利能力
现金流量表: 真实,权责发生制 vs 收付实现制  
```



1. ##### 实操部分

```perl
# 字段说明
statDate 
2022/12/31 :一年数据
pubDate: 2023/3/31 :公布日期
eps: 每股收益, 净利润/股本数
operating_profit:经营活动净收益=营业总收入-营业总成本
roe:净资产的收益率,代表同样的资产谁的收益率更高
inc_net_profit_annual:净利润环比增长率
inc_net_profit_on_year:近利润同比增长率

#利用成长增速选股


```

1. ##### api部分

```perl
参照 https://www.joinquant.com/help/api/doc?name=JQDatadoc&id=9885&keyword=eps
```

2. ##### 代码部分

```perl
    #获取2022年财务报表
    #api 参照 https://www.joinquant.com/help/api/doc?name=JQDatadoc&id=9885&keyword=eps
    #设置行列不忽略
    #pd.set_option('display.max_rows',10000)
    #pd.set_option('display.max_columns',10)
   
   from jqdatasdk import *
import pandas as pd
import datetime
# pd.set_option('display.max_columns',100)
# pd.set_option('display.max_rows',100)
if __name__ == '__main__':

    auth('19844866580', 'Doudou0917')
    #上海证劵交易所 XSHG
    #深圳证劵交易所 XSHE
    #获取某只股票的行情


    #0:00:00.060926
    #0:00:00.226684
    # starttime = datetime.datetime.now()
    # df = get_price(['000001.XSHE'], start_date='2023-07-26 9:00:00',end_date='2023-07-26 16:00:00',
    #                frequency='1m'
    #               )
    # print(df)
    #


    # endtime = datetime.datetime.now()
    # print(endtime - starttime).seconds
    # #获取所有股票的行情
    # stocks = list(get_all_securities(['stock']).index)
    # print(stocks)



    #获取某只股票的tick数据

    #获取财务数据
    # 获取多只股票在某一日期的市值, 利润
    df = get_fundamentals(query(
        indicator
    ),statDate='2022')
    # print(df)
    # 基于盈利指标选股
    #eps(每股净利润),operating_profit(经营活动收益)
    #roe 净资产收益率,
    #inc_net_profit_on_year

    df1=df[(df['eps']>0) & (df['operating_profit']>1000000000) & (df['roe']>60) & (df['inc_net_profit_year_on_year']>60)]
    print(df1)
    # df.to_csv('/Users/li/Desktop/tianqin/Data/finance/demo.csv')

```



#### 三 估值指标

1. ##### 估值指标有哪些

```perl
对企业进行估值
1. 绝对估值法
定价模型--->计算企业的内在价值
2. 相对估值法
pe市盈率: 按当前收益水平,需要多少年回本
公式: price(每股价格/市值)/(每股收益/净利润)
静态市盈率(上年末近利润)
动态市盈率(下年度近利润)
滚动市盈率(近4季度的总净利润)

ps市销率:市值主营收比,考察收益的稳定性和可靠性 price(每股价格/市值)/每股销售额or主营收
pb市净率 市值净资产比 price(每股价格or市值)/(每股净资产or 净资产)


```

![image-20231121155553861](/Users/li/gitblog/blog1/blog/docs/study/images/image-20231121155553861.png)



1. 代码

```perl
from jqdatasdk import *
import pandas as pd
import datetime
# pd.set_option('display.max_columns',100)
# pd.set_option('display.max_rows',100)
if __name__ == '__main__':

    auth('19844866580', 'Doudou0917')
    #上海证劵交易所 XSHG
    #深圳证劵交易所 XSHE
    #获取某只股票的行情


    #0:00:00.060926
    #0:00:00.226684
    # starttime = datetime.datetime.now()
    # df = get_price(['000001.XSHE'], start_date='2023-07-26 9:00:00',end_date='2023-07-26 16:00:00',
    #                frequency='1m'
    #               )
    # print(df)
    #


    # endtime = datetime.datetime.now()
    # print(endtime - starttime).seconds
    # #获取所有股票的行情
    # stocks = list(get_all_securities(['stock']).index)
    # print(stocks)



    #获取某只股票的tick数据

    #获取财务数据
    # 获取多只股票在某一日期的市值, 利润
    df = get_fundamentals(query(
        indicator
    ),statDate='2022')
    # print(df)
    # 基于盈利指标选股
    #eps(每股净利润),operating_profit(经营活动收益)
    #roe 净资产收益率,
    #inc_net_profit_on_year

    df1=df[(df['eps']>0) & (df['operating_profit']>1000000000) & (df['roe']>60) & (df['inc_net_profit_year_on_year']>60)]
    df1.index = df1['code']
    print(df1.head())
    # df.to_csv('/Users/li/Desktop/tianqin/Data/finance/demo.csv')

    #获取股票的估值指标
    # 获取最近日期的市值数据
    df2 = get_fundamentals(query(valuation),statDate='2022')
    df2.index=df2['code']
    df1['pr1_code']=df2['pe_ratio']
    
    print(df1.head())

```



#### 四 实时交易系统

 ![image-20231121173701644](/Users/li/gitblog/blog1/blog/docs/study/images/image-20231121173701644.png)











