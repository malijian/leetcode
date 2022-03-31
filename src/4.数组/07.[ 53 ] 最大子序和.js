/**
 * * 题目名称：最大子序和
 * * 题目地址：https://leetcode-cn.com/problems/maximum-subarray
 */

// * 思路：
var maxSubArray = function(nums) {
   let pre =0
   let maxAns =nums[0]
   nums.forEach(x => {
       //两两相加取最大
       pre =Math.max(pre+x,x)
       //返回的结果 之前的最大跟新的最大进行比较
       maxAns =Math.max(maxAns,pre)
   });
   return  maxAns
};


// 测试用例
let test =  [5,-4,-2,7,8]

console.time('执行用时');
console.log(maxSubArray(test));
console.timeEnd('执行用时');