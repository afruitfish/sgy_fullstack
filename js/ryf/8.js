function Animal(name){
    this.species = "动物";
}
function Cat(name,color){
    this.name = name;
    this.color = color;
}
Cat.prototype= new Animal();
Cat.prototype.constructor=Cat;
var cat2 =new Cat("大毛","黄");
console.log(Cat.prototype.constructor);
console.log(cat2.species);
console.log(cat2.__proto__.constructor);
console.log(Animal.__proto__.constructor);
