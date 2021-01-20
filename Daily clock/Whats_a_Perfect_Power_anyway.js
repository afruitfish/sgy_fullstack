var isPP = function (n) {
    let max = Math.floor(Math.sqrt(n))
    let result = []
    for (let i = 2; i <= max; i++) {
        let pow=0
        for (let j = 2; pow<=n; j++) {
            pow=Math.pow(i,j)
            if (pow == n) {
                console.log(i,j)
                result.push(i)
                result.push(j)
            }
        }
    }
    if(pow.length==0)
        return null
    return result;
}
console.log(isPP(9))