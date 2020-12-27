function Cat(name, color) {
    this.name = name;
    this.color = color;
}
//实例化
var Cat1 = new Cat("阿目", '黑色');
var Cat2 = new Cat("阿曼", '橘色');

console.log(Cat1.constructor == Cat2.constructor);
console.log(Cat1 instanceof Cat);
console.log(Cat2 instanceof Cat);