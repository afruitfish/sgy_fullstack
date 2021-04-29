// function foo() {
//     var a = 1
//     var b = a
//     a = 2
//     b = 3
//     console.log(a, b);
// }

// foo()

function bar() {
    
}

bar()

// function shallowCopy(obj) {
//     if (typeof obj !== 'object') return

//     let newObj = obj instanceof Array ? [] : {}
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] = obj[key]
//         }
//     }
//     return newObj
// }

// var a = { a: 1, b: 2, c: 3 }
// var b = shallowCopy(a)
// a = { a: 1, b: 1, c: 1 }
// console.log(a, b);