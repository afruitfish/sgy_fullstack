//函数 对象 
//js类型
const arr=[1,2,3]
const a="??";//声明变量 undefined
// console.log(typeof a);
console.log(typeof arr);//object
const obj={a:1};
arr.push(4);
console.log()
//  a=1;
// console.log(typeof a);
function Cart(){
    this.type="英短";
}
Cart.prototype.sayHello=function(){
    console.log('meow')
}
