/**
 * * 题目名称：判定是否互为字符重排
 * * 题目地址：https://leetcode-cn.com/problems/check-permutation-lcci
 */

// * 思路：
var CheckPermutation = function(s1, s2) {
    if (s1.length!==s2.length) {
         return false
    }
    let obj ={}
    for (const s of s1) {
        if (obj[s]) {
            obj[s]++
        }else{
            obj[s]=1
        }
    }
    for (const s of s2) {
      if (!obj[s]) {
           return false
      }else{
        obj[s]--
        //
        if (  obj[s]===0) {
             delete obj[s]
        }
      }
    }
  return Object.keys(obj).length === 0;
};


// 测试用例
let test = 'abc'
let test2 = 'bad'

console.time('执行用时');
console.log(CheckPermutation(test,test2));
console.timeEnd('执行用时');