/**
 * * 题目名称：左旋转字符串
 * * 题目地址：https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
 */

// * 思路：

var reverseLeftWords = function(s, n) {
    let str=''
    for (let i = n; i < s.length; i++) {str +=s[i] }
 for (let i = 0; i < n; i++) {str +=s[i]}
 
 console.log(str);
};

// 测试用例

let s = "abcdefg"
let k = 2
// cdefgab
console.time('执行用时');
console.log(reverseLeftWords(s,k));
console.timeEnd('执行用时');