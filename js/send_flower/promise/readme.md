# ES6
 - js 的最新版本
 传统ES5 + 最新ES6 + 版本
 1. ES6手册，阮一峰
 https://es6.ruanyifeng.com/
 2. ES6 15篇 
 https://juejin.cn/user/712139234359182

 ES6知识点通过大厂的审核
 通过阮一峰的ES6在线刷，每周一篇
 冴羽的文章
  1. http sever 
        live-server 启动http双击打开
        协议http://
        fetch(url) //promise 的一个实例
            .then(data => {

            })//异步，所以延时
  2. let p1 = new Promise((resolve,reject)=>{
      resolve(2)
  })//有费时任务 不可同步
  3. p1.then()
  4. 同步
     一个cpu计算时间就可以快速执行完的指令
     加减 变量 
  5. 异步 多线程
     发端于耗时功能需求
     定时器以后 setTimeout
     Promise 天生就是的fetch
     resolve()帮助异步任务被解决
     回到执行流

     let p1 = new promise()
     