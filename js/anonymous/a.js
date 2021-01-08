class Book{
    constructor(isbn,title,author){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
    }
    display(){
        return `
        ISBN号:${this.isbn}
        Title:${this.title}
        Author:${this.author}
        `
    }
}
const jsDontKnow = new Book('111','aa','bbb');
//找到原型对象
// Book.prototype.display = () => {};
// Book.prototype.Sell = () => {};
// Book.prototype = {
//     display:()={},
//     Sell:()={}
// }
console.log(jsDontKnow.__proto__==Book.prototype);
console.log(jsDontKnow.constructor == Book && Book == Book.prototype.constructor);

//基于原型的继承
//封装、继承、多态
console.log(jsDontKnow.hasOwnProperty('title'));
console.log(jsDontKnow.hasOwnProperty('display'));
console.log(jsDontKnow.__proto__.__proto__.__proto__);
console.log(Book.prototype.isPrototypeOf(jsDontKnow));

