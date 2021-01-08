//哪些情况
let a;
console.log(typeof a,'未定义类型');//JS 值决定类型 
//没有返回值的函数类型
const fnNOreturn = () => {}
console.log(fnNOreturn(),'无返回值函数');
//参数不传值
const fn = (b) =>{
    console.log(arguments);
}
const o = {c:'1'};
console.log(o.d,'不存在的key');
//console.log(undefined) 未声明报错
console.log(undefined == null);
console.log(undefined === null);
