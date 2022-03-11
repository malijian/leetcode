/**
 * * 题目名称：字符串压缩
 * * 题目地址：https://leetcode-cn.com/problems/compress-string-lcci
 */

// * 思路：
var compressString = function(S) {
    let n=0
    let str=''
   for (let i = 0; i < S.length; i++) {
      if (S[i]===S[i+1]) {
          n++
      }else{
         str+=`${S[i]}${n+1}`
         n=0
      }
       
   }
  return S.length>str.length?str:S
};


// 测试用例
let test = 'aabcccccaa'

console.time('执行用时');
console.log(compressString(test));
console.timeEnd('执行用时');