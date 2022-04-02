/**
 * * 题目名称：有序数组的平方
 * * 题目地址：https://leetcode-cn.com/problems/squares-of-a-sorted-array
 */

// * 思路：
var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++) {
       nums[i] =Math.pow(nums[i],2) 
    }
    return  nums.sort((a,b)=>a-b)
};


// 测试用例
nums = [-7,-3,2,3,11]

console.time('执行用时');
console.log(sortedSquares(nums));
console.timeEnd('执行用时');