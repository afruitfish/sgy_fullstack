/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k; j++) {
            console.log(i, "---", j)
            if (Math.abs(nums[i] - nums[j]) <= t)
                return true
        }
    }
    return false
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
console.log(containsNearbyAlmostDuplicate([2147483646, 2147483647], 3, 3));
console.log(containsNearbyAlmostDuplicate([4, 1, -1, 6, 5], 3, 1));

console.log(2147483646 - 2147483647)