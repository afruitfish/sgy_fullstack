//类和实例
//constructor
function Animal(name){
    this.name=name
}
var Dog = new Animal('yellow')

console.log(Dog instanceof Animal)
console.log(Animal.prototype)
console.log(Dog.__proto__)