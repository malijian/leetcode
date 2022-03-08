/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
 */

// * 思路：
// 单调递减 
/*
 1.维护一个单调递减的数组，存放最大值的索引，维护一个返回的值的数组，用来返回结果
 2.如果单调性不满足 清空改数组，并加入新的值
 3.判断窗口移动的位置，删除窗口之外的值
 4. 到达k-1开始跟返回集里塞入数据
 */
var maxSlidingWindow = function(nums, k) {
    // 维护一个单调递减的数组，存放最大值的索引，
    let arr =[]
    // 维护一个返回的值的数组，用来返回结果
    let returnArr =[]
    for (let i = 0; i < nums.length; i++) {
        // 如果单调性不满足 清空改数组
        while (arr.length&&nums[i]>=nums[arr[arr.length-1]]) {
            arr.pop()
        }
        // 加入新的值
       arr.push(i)
       //判断窗口移动的位置，删除窗口之外的值
       while (arr[0]<=i-k) {
           arr.shift()
       }
       // 到达k-1开始跟返回集里塞入数据
        if (i>=k-1) {
            returnArr.push(nums[arr[0]]) 
        }
    }
    return  returnArr
};

// nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 测试用例
let test = [1,-1]
let k =1

console.time('执行用时');
console.log(maxSlidingWindow(test,k));
console.timeEnd('执行用时');