/**
 * * 题目名称：找不同
 * * 题目地址：https://leetcode-cn.com/problems/find-the-difference
 */

// * 思路：

var findTheDifference = function(s, t) {
   let map = new Map()
   for (const i of t) {
    map.set(i,(map.get(i)||0)+1) 
   }
   for (const i of s) {
       if (map.has(i)) {
             map.set(i,map.get(i)-1) 
           if (!map.get(i)) {
            map.delete(i)
           }
       }
   }
   let a 
    map.forEach((el,index)=>{
         a=index
    })
    return a
};

// 测试用例
s = "a", t = "aa"
console.time('执行用时');
console.log(findTheDifference(s, t));
console.timeEnd('执行用时');