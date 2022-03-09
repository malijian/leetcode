/**
 * * 题目名称：罗马数字转整数
 * * 题目地址：https://leetcode-cn.com/problems/roman-to-integer
 */

// * 思路：
/* 
   
*/
var romanToInt = function (s) {
    let arr = s.split('').map(el => {
        switch (el) {
            case 'I':
                return 1
            case 'V':
                return 5
            case 'X':
                return 10
            case 'L':
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
        }
    })
    let sum = 0
    while (arr.length > 0) {
        if (arr.length === 1 || arr[0] >= arr[1]) {
            sum += arr[0]
        } else if (arr.length === 0) {
            return sum
        } else {
            sum += arr[1] - arr[0]
            arr.shift()
        }
        arr.shift()
    }
    return sum
};

// 测试用例
let test = 'MCMXCIV'

console.time('执行用时');
console.log(romanToInt(test));
console.timeEnd('执行用时');