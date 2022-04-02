/**
 * * 题目名称：有效的山脉数组
 * * 题目地址：https://leetcode-cn.com/problems/valid-mountain-array
 */

// * 思路：

var validMountainArray = function(arr) {
     let N =arr.length
     let i =0
     while (i<N&&arr[i]<arr[i+1]) {
          i++
     }
     if (i === 0 || i === N - 1) {
        return false;
    }
     while (i<N&&arr[i]>arr[i+1]) {
        i++
   }
     console.log(i);
     return i===N-1
}
// 测试用例
let test = [1,2,1]

console.time('执行用时');
console.log(validMountainArray(test));
console.timeEnd('执行用时');