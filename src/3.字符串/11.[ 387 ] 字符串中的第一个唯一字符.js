/**
 * * 题目名称：字符串中的第一个唯一字符
 * * 题目地址：https://leetcode-cn.com/problems/first-unique-character-in-a-string
 */

// * 思路：
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
     if (s.lastIndexOf(s[i])===s.indexOf(s[i])) {
         return i
     } 
  }
  return -1
};  


// 测试用例
let test = 'ab'

console.time('执行用时');
console.log(firstUniqChar(test));
console.timeEnd('执行用时');