function extend(Child, Parent) {
    var F = function() {}; // 空函数对象， 内存开销不大
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.Constructor = Child;
    Child.uber = Parent.prototype;
  }
function Animal(){
}
Animal.prototype.species='aaa';
function Cat(name,color){
    this.name = name;
    this.color = color;
}
extend(Cat,Animal);
var cat2 = new Cat('小黑','白色');
console.log(Cat.prototype.constructor);
console.log(cat2.species);
console.log(cat2.__proto__.constructor);
console.log(Animal.__proto__.constructor);
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
Cat.prototype.x = 1;
console.log(Animal.prototype);