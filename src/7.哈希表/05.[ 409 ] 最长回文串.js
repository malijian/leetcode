/**
 * * 题目名称：最长回文串
 * * 题目地址：https://leetcode-cn.com/problems/longest-palindrome
 */

// * 思路：

var longestPalindrome = function(s) {
 let map =new Map()
 let m=0
 for (const i of s) {
   if (map.has(i)) {
       map.delete(i)
        m=m+2
   }else {
       map.set(i,1)
   }
 }
 return m + (map.size?1:0)
};

// 测试用例
let test =  "ccc"

console.time('执行用时');
console.log(longestPalindrome(test));
console.timeEnd('执行用时');