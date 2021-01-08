- 阮一峰

 1. js变量数据类型由值决定
    常量的话，ex6之前无常量 var
     - 类型不可改变
     - 简单不可，复杂数据类型的值可以改变
     - 数值、字符串、布尔、undefined、null、symbol、对象（数组、函数）
 
2. typeof [1,2,3]如果知道是数组
    区分简单数据类型复杂数据类型
    复杂数据类型 function 
    typeof 可以正确(细致)得到数据类型的：
    number string Boolean null undefined symbol object(array,function)

3. Object.prototype.toString.call()
    Object是啥prototype是啥call 啥
## 继承的几种方式
1. 构造函数
call apply 借用
call绑定this,...
2. prototype模式
3. 直接继承prototype
4. 空对象中介

