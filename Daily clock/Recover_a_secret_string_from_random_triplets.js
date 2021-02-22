var recoverSecret = function (triplets) {
    let word, i = 0, key = false, ans = []
    while (triplets[0] != null) {
        word = triplets[i].slice(-1)
        // console.log(word)
        let arr = []
        for (let n = 0; n < triplets.length; n++) {
            for (let m = 0; m < triplets[n].length; m++) {
                if (triplets[n][m] == word) {
                    if (m == triplets[n].length - 1) {
                        arr.push(n)
                    }
                    else {
                        key = true
                        break
                    }
                }
            }
            if (key == true) {
                break
            }
        }
        if (key == false) {
            ans.unshift(word)
            for (let num in arr) {
                console.log(num)
                triplets[arr[num]].pop()
            }
            arr = []
            for (let num = 0; num < triplets.length; num++) {
                if (triplets[num] == '') {
                    triplets.splice(num, 1)
                    console.log(triplets)
                    num = 0
                }
            }
        }
        else {
            i++
            key = false

        }
        if (i >= triplets.length) {
            i = 0
        }
    }
    return ans.join('')
}
triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]
console.log(recoverSecret(triplets1))