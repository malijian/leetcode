/**
 * * 题目名称：用栈操作构建数组
 * * 题目地址：https://leetcode-cn.com/problems/build-an-array-with-stack-operations
 */

// * 思路：

var buildArray = function(target, n) {
    let arr =[]
   for (let i = 1; i < n+1; i++) {
     if (target.length) {
        if (target.indexOf(i)==-1) {
            arr.push('Push')
            arr.push('Pop')

        }else {
            arr.push('Push')
            target.shift()
        }
    }
     }
  return arr
};
// 测试用例
let test = [1,2]
let n = 4

console.time('执行用时');
console.log(buildArray(test,n));
console.timeEnd('执行用时');