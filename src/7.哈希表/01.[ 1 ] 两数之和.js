/**
 * * 题目名称：两数之和
 * * 题目地址：https://leetcode-cn.com/problems/two-sum
 */

// * 思路：


var twoSum = function(nums, target) {
    let n =nums.length
    let obj ={}
   for (let i = 0; i < n; i++) {
     let cha =(target-nums[i])
     if (obj[cha]!=undefined) {
         return [i,obj[cha]]
     }
     obj[nums[i]]=i
   }
};

// 测试用例
nums = [2,3,1,3,2], target = 6

console.time('执行用时');
console.log(twoSum(nums, target));
console.timeEnd('执行用时');