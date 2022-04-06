/**
 * * 题目名称：数组中重复的数字
 * * 题目地址：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
 */

// * 思路：

var findRepeatNumber = function(nums) {
    let map =new Map()
   for (const i of nums) {
     if (map.has(i)) {
         return i
     }else {
        map.set(i,1)
     }
   }
   return null
 };

// 测试用例
let test = [2, 3, 1, 0, 2, 5, 3]

console.time('执行用时');
console.log(findRepeatNumber(test));
console.timeEnd('执行用时');