阮一峰 js
1. this调用方式,作用域|上下文环境相关\
    函数作用域scope变量查找?
    内部查找->外部 闭包 (函数嵌套函数)

(function(){
    //上
    return function(){
        //环境
        //下
    }
})()

- 差异来自this使用
    函数运行时的环境
    obj.foo对象的方法
    foo 普通函数 运行方式->所在环境
    (window|global|strict)

- 函数的运行环境由什么决定?
    原子级别原理
    - 闭包 声明
    ```js
        function(){
            let a=1;
            return function(){
                console.log(a)
            }
        }
        const fun = funcA();
    ```
    - 内存的操作
        执行栈是内存的权力