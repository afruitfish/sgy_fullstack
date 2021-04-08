

// var trap = function (height) {
//         let right = height.length - 1
//         let left = 0
//         let sum = 0
//         while (left < right) {
//                 if (height[left] <= height[right]) {
//                         if (height[left] > height[left + 1]) {
//                                 sum += (height[left] - height[left + 1])
//                                 height[left + 1] = height[left]
//                         }
//                         left++
//                 }
//                 if (height[left] > height[right]) {
//                         if (height[right] > height[right - 1]) {
//                                 sum += (height[right] - height[right - 1])
//                                 height[right - 1] = height[right]
//                         }
//                         right--
//                 }
//                 console.log(sum, left, right)
//                 console.log(height);
//         }
//         return (sum)
// };
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// a = [1, 2, 3]
// b = [4, 5, 6]
// c = [...a, ...b]
// d = a.concat(b)
// console.log(a, b, c, d);


console.log(/[0-9]/.test("asdfgasdgsdaq4fdsgdsg"))
console.log(/[0-9]/.test("asdfgasdgsdaqfdsgdsg"))
console.log("saf scdsffdsgd4 dsfdsgsd".match(/[0-9]/).toString());
