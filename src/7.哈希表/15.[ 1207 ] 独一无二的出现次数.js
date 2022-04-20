/**
 * * 题目名称：独一无二的出现次数
 * * 题目地址：https://leetcode-cn.com/problems/unique-number-of-occurrences
 */

// * 思路：

var uniqueOccurrences = function(arr) {
    let map =new Map()
    for (const i of arr) {
       map.set(i,(map.get(i)||0)+1) 
    }
    let bbb =new Set()
    for (const [label,value] of map) {
       bbb.add(value)
   }
   return bbb.size ===map.size
};
 
// 测试用例
arr = [1,2,2,1,3]

console.time('执行用时');
console.log(uniqueOccurrences(arr));
console.timeEnd('执行用时');