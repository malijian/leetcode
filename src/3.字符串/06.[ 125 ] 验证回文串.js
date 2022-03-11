/**
 * * 题目名称：验证回文串
 * * 题目地址：https://leetcode-cn.com/problems/valid-palindrome
 */

// * 思路：


var isPalindrome = function(s) {
    const str = s.toLocaleLowerCase().replace(/[\W_]/ig, '')
    if(str.length===1){return true}
    let left=''
    let right=''
    left =str.substr(0,Math.floor(str.length/2))
    right =str.substr(Math.ceil(str.length/2),Infinity).split('').reverse().join('')  
    console.log(left,right);
   return left===right
};
// 测试用例
let test = 'aa'

console.time('执行用时');
console.log(isPalindrome(test));
console.timeEnd('执行用时');