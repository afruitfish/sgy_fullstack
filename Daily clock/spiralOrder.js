var spiralOrder = function (matrix) {
    let r1 = 0, r2 = matrix[0].length-1;
    let c1 = 0, c2 = matrix.length-1;
    let a = 0, b = 0, v = 1,k=0;
    let arry = [matrix[0].length*matrix.length];
    console.log(r1,r2,c1,c2)
    while (r1 <= r2 && c1 <= c2) {
        switch (v) {
            case 1:
                while (b <= r2) {
                    arry[k]=matrix[a][b]
                    k++
                    b++
                }
                c1++
                b--
                a++
                break
            case 2:
                while (a <= c2) {
                    arry[k]=matrix[a][b]
                    k++
                    a++
                }
                r2--
                a--
                b--
                break
            case 3:
                while (r1 <= b) {
                    arry[k]=matrix[a][b]
                    k++
                    b--
                }
                b++
                c2--
                a--
                break
            case 4:
                while (c1 <= a) {
                    arry[k]=matrix[a][b]
                    k++
                    a--
                }
                a++
                r1++
                b++
                break
        }
        v++
        if (v == 5) {
            v = 1
        }
    }
    return arry
}
let a =[[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
let b =[
    [1,2,3,4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9,8,7]
]
let c=[
    [1,2,3]
]
let d=[
    [1,2,3],
    [6,5,4]
]
let e=[[1],[2],[3],[4]]
let f=[[]]
console.log(spiralOrder(a))
console.log(spiralOrder(b))
console.log(spiralOrder(c))
console.log(spiralOrder(d))
console.log(spiralOrder(e))
console.log(spiralOrder(f))




