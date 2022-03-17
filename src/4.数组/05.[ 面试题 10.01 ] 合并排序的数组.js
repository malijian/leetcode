/**
 * * 题目名称：合并排序的数组
 * * 题目地址：https://leetcode -cn.com/problems/sorted-merge-lcci
 */

// * 思路：
var merge = function(A, m, B, n) {
    // A.splice(m, A.length - m, ...B);
    // A.sort((a, b) => a - b);
    let pa =0 
    let pb =0
    let cur
    let sorted =new Array(m + n).fill(0);
    while (pa <m || pb <n) {
        if (pa===m) {
            cur =B[pb++]
        }else if (pb===n) {
            cur =A[pa++]
        }else  if (A[pa]< B[pb]) {
            cur =A[pa++]
       }else if (A[pa]>=B[pb]) {
           cur =B[pb++]
       }
        sorted[pa + pb - 1]=cur
    }
    for (let i = 0; i != m + n; ++i) {
        A[i] = sorted[i];
    }
};


// 测试用例
let A = [1,2,3,0,0,0]
let m = 3
let B = [2,5,6]
let n = 3
console.time('执行用时');
console.log(merge(A, m, B, n));
console.timeEnd('执行用时');