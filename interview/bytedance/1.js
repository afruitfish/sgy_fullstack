function scale36(n) {
    let num36 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let ans = []
    while (n) {
        ans.unshift(num36[n % 36])
        n = Math.floor(n / 36)
    }
    return ans.join('')
}

console.log(scale36(36));
console.log(scale36(590));
console.log(scale36(1296));
console.log(scale36(36 * 35));
