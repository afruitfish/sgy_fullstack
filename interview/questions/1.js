let obj = {name: 'obj'}; // 引用类型
console.log(obj.toString()); // [object Object]  || null
// console.log(typeof null);
console.log(Object.prototype.toString.call(null));
