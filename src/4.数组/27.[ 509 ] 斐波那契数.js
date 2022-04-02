/**
 * * 题目名称：斐波那契数
 * * 题目地址：https://leetcode-cn.com/problems/fibonacci-number
 */

// * 思路：

var fib = function (n) {
    let arr = [0, 1]
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[n]
};

// 测试用例
let test = 5

console.time('执行用时');
console.log(fib(test));
console.timeEnd('执行用时');