function add(a, b) {
    let arr1, arr2, i
    if (a.length > b.length) {
        arr1 = NumberToArray(a),
            arr2 = NumberToArray(b);
    }
    else {
        arr1 = NumberToArray(b),
            arr2 = NumberToArray(a);
    }
    i = 0
    while (i < arr2.length) {
        arr1[arr1.length - i-1] = Number(arr1[arr1.length - i-1]) + Number(arr2[arr2.length - i-1])
        if (arr1[arr1.length - i-1] > 10e13) {
            arr1[arr1.length - i-1] -= 10e13
            if((arr1.length - i - 2)>=0){
            arr1[arr1.length - i - 2] = Number(arr1[arr1.length - i - 2]) + 1
            }
            else{
                arr1.unshift(1)
            }
        }
        i++
    }
    console.log(arr1)
    console.log(arr2)
    return arr1.join('')
}
function NumberToArray(num) {
    let arr = [], i = 0;
    while (true) {
        if (num.length < 14) {
            arr.unshift(num)
            return arr
        }
        else {
            arr.unshift(num.substr(-14, 14))
            num = num.slice(0, num.length - 14)
        }
        i++;
    }
}