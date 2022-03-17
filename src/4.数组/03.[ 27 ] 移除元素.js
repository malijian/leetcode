/**
 * * 题目名称：移除元素
 * * 题目地址：https://leetcode-cn.com/problems/remove-element
 */

// * 思路：
var removeElement = function(nums, val) {
  let left =0
  let right =nums.length
  while (left<right) {
      if (nums[left]===val) {
          nums[left]=nums[right-1]
          right--
      }else {
          left++
      }
  }
  console.log(nums);
  return left
};


// 测试用例
let test = [2,2,3,0,4,2]
let  n =2

console.time('执行用时');
console.log(removeElement(test,n));
console.timeEnd('执行用时');