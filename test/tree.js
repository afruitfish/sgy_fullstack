// class Node {
//     constructor() {
//         this.data = null;
//         this.left = null;
//         this.right = null;
//     }
// }

// // let node1 = new node(0)

// createtree = (num, n) => {
//     if (n <= num) {
//         console.log(n)
//         let node = new Node()
//         node.left = createtree(num, n * 2)
//         node.right = createtree(num, n * 2 + 1)
//         return node
//     }
//     return null
// }
// let tree = createtree(10, 1)

// filltree = (node, arr) => {
//     if (node != null) {
//         node.data = arr.shift()
//         filltree(node.left, arr)
//         filltree(node.right, arr)
//     }
// }

// filltree(tree, [1, 2, 4, 8, 9, 5, 10, 3, 6, 7])

const rob = (home) => {
    dp[0] = 0;
    for (let coin of coins) {
        for (let j = coin; j < amount + 1; j++) {
            console.log(coin, j, dp[j], dp[j - coin] + 1, dp);
            dp[j] = Math.min(dp[j], dp[j - coin] + 1);
        }
    }
    return dp[amount] != 10001 ? dp[amount] : -1;
}

coin([1, 2, 5], 11)