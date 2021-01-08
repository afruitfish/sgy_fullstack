//事件执行函数 名字无所谓 只需要定义函数不需要名字
// addEventListener('click',()=>{

// })
//函数定义不适合于函数的使用场景
let res = (function(foo,bar){//匿名函数
    return foo*bar;
})(20,2);
console.log(res);
