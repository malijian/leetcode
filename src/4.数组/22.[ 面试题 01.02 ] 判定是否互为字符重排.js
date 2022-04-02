/**
 * * 题目名称：判定是否互为字符重排
 * * 题目地址：https://leetcode-cn.com/problems/check-permutation-lcci
 */

// * 思路：
var CheckPermutation = function(s1, s2) {
    let map =new Map()
    for (const i of s1) {
         map.set(i,(map.get(i)||0)+1)
    }
    for (const t of s2) {
       if (map.has(t)) {
           map.set(t,map.get(t)-1)
           if (map.get(t)===0) {
               map.delete(t)
           }
       }else {
        map.set(t,1)
       }
    }
   return map.size===0
};


// 测试用例
s1 = "abc", s2 = "gac"

console.time('执行用时');
console.log(CheckPermutation(s1,s2));
console.timeEnd('执行用时');