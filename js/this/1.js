var obj = {//json object
    A:1,
    foo:function(){// obj 属性
        console.log(this.A)
    }
}
var A=2
var foo = obj.foo;//foo 函数
obj.foo();
foo();