/**
 * * 题目名称：判定字符是否唯一
 * * 题目地址：https://leetcode-cn.com/problems/is-unique-lcci
 */

// * 思路：

var isUnique = function(astr) {
   let arr =astr.split('').sort()
   for (let i = 0; i < arr.length-1; i++) {
     if (arr[i]==arr[i+1])return false
   }
   return true
};

// 测试用例
let test = 'abcd'

console.time('执行用时');
console.log(isUnique(test));
console.timeEnd('执行用时');