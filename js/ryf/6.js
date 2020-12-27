function Cat(name, color) {
    //new 过程一定执行Cat
    this.name = name;
    this.color = color;
    //prototype 生成原因
}
//原型对象
Cat.prototype.eat = function() {
    console.log('rat')
}
Cat.prototype.type = '猫科';
//实例化
//new  执行过程
var Cat1 = new Cat("阿目", '黑色');
var Cat2 = new Cat("阿曼", '橘色');

console.log(Cat1.constructor == Cat2.constructor);
console.log(Cat1 instanceof Cat);
console.log(Cat2 instanceof Cat);
Cat1.eat();