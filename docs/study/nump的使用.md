---

date: 2013-6-25

category: 人工智能

tag:

  - nump

---

# nump的使用

```perl
import numpy as np
if __name__ == '__main__':
    a=np.array([1,2,3])
    b=np.full(3,1)
    c=np.full_like(a,2)
    d=np.empty_like(a)
    e=np.empty(3)
   
    print(a.shape)

    f=np.linspace(0.1,1.0,3)
    g=np.arange(0.1,1,0.1)
   

    rng=np.random.default_rng()
    r1=rng.integers(1,10,4)
    print(r1)
    r2=rng.random(4)
    print(r2)
    r3=rng.uniform(1,5,4) #小数
    print(r3)

#数组索引
a1=np.arange(1,6)
a2=np.array([0,1,3,4,5,6])
print(a1)
print(a1[2:4])
print(a1[1:])
print(a1[-2:])
print(a2[::4])# 从第一个开始相隔4个元素的值
print(a2[[1,3]])
print(np.any(a2>5)) #数组中有一个大于5就是true
print(a2[a2>5]) #查找大于5的元素
print(a2[(a2>3)&(a2<5)])#查找大于3小于5的元素
t=np.where(a2>4) #得出满足条件的数组的下标
t1=np.nonzero(a2) #找出数组中非零的元素下标
print(t[0])
print(t1[0])

#数组的操作

m1=np.array([1.1,2.2,3.3])
mm=np.floor(m1)
print(mm)
print(m1.sum())
print(m1.max())
# print(np.sin(np.pi,np.pi/2))

aa=np.array([1,2,3,4])
bb=np.array([1,1,1,1])
print(np.dot(aa,bb))
print(aa*bb)
aa1=np.array([1,3])
aa2=np.array([1,2])
print(np.cross(aa1,aa2))

#向量AB×向量CD＝（y1z2-z1y2，x2z1-x1z2，x1y2-y1x2）
xx = [1, 2, 3]
yx = [4, 5, 6]
res=np.cross(xx,yx)

print(res) #[-3  6 -3]

#向量的点乘
x10=np.array([1,2,3])
x11=np.array([1,2,3])

print(np.dot(x10,x11)) #14


#更多的数学方法
#求平方
x12=np.array([2,3])
x12res=x12**2
print(x12res) #[4,9]

#开根号
x14=np.array([4,9])
print(np.sqrt(x14)) #[2 3]
#e幂运算  e的a的平方

x15=np.array([1,2])

print(np.exp(x15))

#ln 是以e为底的对数 ,e为2.71828183
#lg 是以10为底的对数


x16=np.array([2.71828183,7.3890561])
print(np.log(x16))

#数组元素的查找

x17=np.array([2,3,4,5])

#查找某个元素的索引
print(np.searchsorted(x17,4))
print(np.where(x17==4)[0][0])

#浮点数的比较

print(np.allclose(0.1+0.2,0.3))

#二维矩阵

#二维矩阵

y1=np.array([[1,2,3,4],[5,6,7,8]])
print(y1)

print(np.zeros(3)) # [0. 0. 0.]
print(np.zeros((3,2))) # [[0. 0.]
#  [0. 0.]
#  [0. 0.]]
print(np.ones((3,2)))# [[1. 1.]
#  [1. 1.]
#  [1. 1.]]
print(np.full(3,4)) # [4 4 4]
print(np.full((3,2),7))# [[7 7]
#  [7 7]
#  [7 7]]


#单位矩阵

print(np.eye(3,3)) #[[1. 0. 0.]
 # [0. 1. 0.]
 # [0. 0. 1.]]


#二维数组的索引

b2=np.array([[1,2,3,4],[5,6,7,8]])
print(b2[1,2]) #7
print(b2[1,:])#[5 6 7 8]
print(b2[:,2]) #[3 7] 索引为2的列

print(b2[:,1:3]) #[[2 3]
 #[6 7]]

print(b2[-1:,-2]) #7 倒数第一行,倒数第二列的元素

#二维数组的求和

print(b2.sum()) #二维数组的所有的元素相加
print(b2.sum(axis=0)) #axis=0 列与列想加,axis=1 行向相加

#二维数组的变形

b3=np.array([1,2,3,4,5,6])

print(b3.reshape(2,-1)) #变成2行3列的矩阵
print(b3.reshape(3,-1)) #变成3行2列的矩阵

#拼接数组
b4=np.array([[1,2,3,4],[5,6,7,8]])

b5=np.zeros((2,1))
print(b4)
print(b5)
print(np.hstack((b4,b5)))
#数组的合并 [[1. 2. 3. 4. 0.] 水平方向的合并 后面追加
#[5. 6. 7. 8. 0.]]
b6=np.zeros((2,4))
print(np.vstack((b4,b6))) #底部追加

#数组的拆分

print(np.hsplit(b4,[1])) #在列索引为1的开始拆分
# [array([[1],
#        [5]]), array([[2, 3, 4],
#        [6, 7, 8]])]

print(np.vsplit(b4,[1])) #在行索引为1处开始切分
#[array([[1, 2, 3, 4]]), array([[5, 6, 7, 8]])]

#二维数组的统计
c1=np.array([[4,8,5],[9,3,1]])
print(c1.min()) #1 返回所有数组元素中中最小的值

print(c1.min(axis=0)) #列中最小的值 [4 3 1]

print(c1.min(axis=1)) #行中最小的值[4 3 1]
#[4 1]

#返回最大,最小值下标
print(c1.argmin()) # 5 索引为3的元素 也就是c1[0][2]
print(c1.argmin(axis=0)) # [0 1 1] 列方式比较 最小元素的下标
print(c1.argmin(axis=1)) # [0 2]  #行方式最小元素的下标

#元素追加
res1=np.append(c1,np.zeros((1,3)),axis=0) #在底部追加 列方式
print(res1)
# [[4. 8. 5.]
#  [9. 3. 1.]
#  [0. 0. 0.]]

res2=np.append(c1,np.zeros((2,1)),axis=1)#在后面追加行方式
print(res2)

# [[4. 8. 5. 0.]
#  [9. 3. 1. 0.]]
```

