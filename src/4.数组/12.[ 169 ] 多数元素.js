/**
 * * 题目名称：多数元素
 * * 题目地址：https://leetcode-cn.com/problems/majority-element
 */

// * 思路：

var majorityElement = function(nums) {
//  let obj ={}
//  let  max =0
//  if (nums.length===1) {
//      return nums[0]
//  }
//  for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]]) {
//         obj[nums[i]]=obj[nums[i]]+1
//         max =Math.max(max,obj[nums[i]])
//         if (max>nums.length/2) {
//             return nums[i]
//         }
//     }else{
//         obj[nums[i]]=1
//     }
//  }
const len = nums.length,
    half = len / 2,//3.5
    m = new Map();
    for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    m.set(item, (m.get(item) || 0) + 1);
    if (m.get(item) > half) return item;
    }
};

// 测试用例
let test = [2,2,1,1,1,2,2]

console.time('执行用时');
console.log(majorityElement(test));
console.timeEnd('执行用时');