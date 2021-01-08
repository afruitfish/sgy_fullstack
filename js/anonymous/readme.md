# js 的灵魂在函数，函数的灵魂在匿名函数

- 匿名函数
    ```js
        ()=>{}
        (function(){

        })()
    ```
- 作为图书管理系统，写书的入库类
    js面向对象class关键字来的比较晚，用function来构造类
    js类有点像火车，火车头，车身
    ```Javascript
    //单独的构造函数可以成为一个类
    function Book(isbn,title,author){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
    }
    ```
- 构造函数与普通函数的区别
    生产实例 constructor ? 
    this...
    step by step 构造过程 
    1. 构造函数函数名首字母大写
    2. 运行方式()() new fn()
        new的时候把构造函数执行一下，this指向当前对象
    3. this 指向实例
    4. 对象上原型对象都是Object
    5. Object是顶层对象，也是一个函数 new object(){}
    6. 任何一个函数都有一个prototype属性，火车身
    7. 任何一个对象实例都一定有__proto__私有属性
        指向原型对象，基于原型
        js_dontKnow.display(); 基于原型继承父类方法
    8. 原型链
        
    9. js关键字只是语法糖