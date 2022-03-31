/**
 * * 题目名称：移动零
 * * 题目地址：https://leetcode-cn.com/problems/move-zeroes
 */

// * 思路：
/*
 通过快慢指针
  1 声明快慢指针 ，如果等于0 快指针++
  2如果快指针不等于0  交互快慢指针的位置，慢指针++（如果不能等于0就交换位置，如果前几项都是不等于0
   ，快慢指针都相等，交换位置也不会有影响）
  3 返回nums
 */

var moveZeroes = function(nums) {
   let slow =0
   for (let i = 0; i < nums.length; i++) {
       if (nums[i]!==0) {
          [nums[i],nums[slow]]= [nums[slow],nums[i]]
           slow++
       }
   }
   return nums
};

// 测试用例
// let test = [1,2,0,3,12]
let test =  [0,0,1]

console.time('执行用时');
console.log(moveZeroes(test));
console.timeEnd('执行用时');