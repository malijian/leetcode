/**
 * * 题目名称：丢失的数字
 * * 题目地址：https://leetcode-cn.com/problems/missing-number
 */

// * 思路：


// var missingNumber = function(nums) {
//    let newNum = nums.sort((a,b)=>a-b)
//    let n =newNum.length
//    for (let i = 0; i <n-1; i++) {
//     if (newNum[i+1]-newNum[i]!==1) {
//         return  newNum[i]+1
//     }  
//    }
//    if (newNum[0]===0) {
//     return n
//     }else {
//         return 0
//     }
// };
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    let n =nums.length
    for (let i = 0; i < n; i++) {
        if (nums[i]!==i) return i 
    }
    return n
 };
// 测试用例
nums = [1,2]

console.time('执行用时');
console.log(missingNumber(nums));
console.timeEnd('执行用时');