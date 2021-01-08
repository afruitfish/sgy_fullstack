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
for(let key in jsDontKnow){

    const attrs = [...Object.getOwnPropertyNames(key)];
    console.log(attrs);
}