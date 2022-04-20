/**
 * * 题目名称：有多少小于当前数字的数字
 * * 题目地址：https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number
 */

// * 思路：


var smallerNumbersThanCurrent = function(nums) {
    let arr =[]
     nums.forEach(el => {
         let i =0
         nums.forEach(et=>{if (el>et)i++})
         arr.push(i)
     });
     return arr
    };
// 输入：nums = [6,5,4,8]
// 输出：[2,1,0,3]
// 测试用例
let test = [6,5,4,8]

console.time('执行用时');
console.log(smallerNumbersThanCurrent(test));
console.timeEnd('执行用时');