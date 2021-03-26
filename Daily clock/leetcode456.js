/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let left = false, right = false, max;
    for (let i = 1; i < (nums.length - 1); i++) {
        max = null
        console.log(i)
        console.log(nums.length)

        for (let k = i; k < nums.length; k++) {
            if (nums[k] < nums[i])
                if (max < nums[k] || max == null) {
                    max = nums[k]
                    console.log(max)
                }
        }
        if (max == null)
            continue;
        for (let j = i - 1; j >= 0; j--) {
            if(nums[j]<max){
                return true
            }
        }
    }
    return false
};

console.log(find132pattern([3,1,4,2]))
console.log(find132pattern([3,1,4,2]))
console.log(find132pattern([-1,3,2,0]))

// console.log(find132pattern())