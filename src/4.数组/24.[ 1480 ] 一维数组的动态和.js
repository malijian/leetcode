/**
 * * 题目名称：一维数组的动态和
 * * 题目地址：https://leetcode-cn.com/problems/running-sum-of-1d-array
 */

// * 思路：


var runningSum = function(nums) {
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        nums[i]=nums[i]+nums[i-1]
    }
    return nums
};
// 测试用例
nums = [1,2,3,4]

console.time('执行用时');
console.log(runningSum(nums));
console.timeEnd('执行用时');