function add(a, b, c) {
    return a + b + c
}
console.log(add(1, 2, 3));

let addc = curry(add)

console.log(addc(1)(2)(3), "----");
console.log(addc(3,2)(1));

function curry(fn) {
    return judge = (...args) => {
        console.log(args);
        // console.log(fn.length);
        if (args.length == fn.length)
            return fn(...args)
        return (...arg) => judge(...args, ...arg)
    }
}