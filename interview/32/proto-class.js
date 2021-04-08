// function Animal() {
//     this.colors = ['black', 'white']
// }
// Animal.prototype.getColor = function() {
//     return this.colors
// }
// function Dog() {}
// Dog.prototype =  new Animal()

// let dog1 = new Dog()
// dog1.colors.push('brown')
// let dog2 = new Dog()
// console.log(dog2.colors) 
// console.log(dog2.getColor()) 
function Animal(name) {
    this.name = name
    this.getName = function () {
        return this.name
    }
}
function Dog(name) {
    Animal.call(this, name)

}
// Dog.prototype = new Animal()
D = new Dog("23")
C = new Animal("12")
console.log(D.getName(), D.__proto__ == C.__proto__,Dog.prototype==Animal.prototype);
console.log(C.getName(),Dog.prototype,Animal.prototype);


// function add (x, y) 
// { 
//     console.log (x + y);
// } 
// function minus (x, y) 
// { 
//     console.log (x - y); 
// } 
// add.call (minus , 1, 1); 
// minus(1,1)
// add(1,1)