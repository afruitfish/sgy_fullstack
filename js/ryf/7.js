//阮一峰面向对象2
function Animal(name){
    console.log(arguments);
    this.name = name
    this.species = "动物";
}
// console.log(Animal);
// console.log(Animal.__proto__);
// console.log(Animal.__proto__.__proto__);
// console.log(Animal.__proto__.__proto__.__proto__);
// console.log(Animal.__proto__.constructor);
// console.log(Animal.__proto__.__proto__.constructor);
function Cat(name,color){
    Animal.apply(this,arguments);
    // this.name = name;
    this.color = color;
}
var cat1 = new Cat("大毛","黄");
console.log(cat1.species);
