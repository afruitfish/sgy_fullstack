function factorial(n) {
    let a = [1];
    let length=a.length
    for (let i = 2; i <= n; i++) {
        for (let j = length-1; j >= 0; j--) {
            console.log(a[j])
            a[j] = a[j] * i
            console.log(a[j])
            if (a[j] > 9&&j==0) {
                length++
                a.unshift(parseInt(a[j] / 10))
                a[j+1] = a[j+1] % 10
                j++
            }
            else if(a[j] > 9&&j>0){
                a[j-1]=a[j-1]+parseInt(a[j]/10)
                a[j]=a[j]%10
            }
        }
        console.log(a)
    }
    console.log(a.join(''))
}
factorial(3)
factorial(4)
