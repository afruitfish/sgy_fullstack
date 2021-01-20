var countChange = function (money, coins) {
    if(money<0||coins[0]==undefined){
        return 0
    }
    if(money==0){
        return 1
    }
    return countChange(money-coins[0],coins)+countChange(money,coins.slice(1))
}
console.log(countChange(4,[1,2]))
console.log(countChange(11, [5,7]))
