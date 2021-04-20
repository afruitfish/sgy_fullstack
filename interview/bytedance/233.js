function a() { }
function b() { }

a.prototype = new b
var obj = new a
console.log(obj.constructor == b);
console.log(obj.constructor == a);
console.log(obj instanceof a);
console.log(obj instanceof b);