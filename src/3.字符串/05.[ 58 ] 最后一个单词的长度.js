/**
 * * 题目名称：最后一个单词的长度
 * * 题目地址：https://leetcode-cn.com/problems/length-of-last-word
 */

// * 思路：

var lengthOfLastWord = function(s) {
    let b =s.trim().split(' ')
   return b[b.length-1].length
};

// 测试用例
let test = 'Today is a nice day '

console.time('执行用时');
console.log(lengthOfLastWord(test));
console.timeEnd('执行用时');