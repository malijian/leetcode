/**
 * * 题目名称：字符串相加
 * * 题目地址：https://leetcode-cn.com/problems/add-strings
 */

// * 思路：


/* 
        1  初始两数字的length，一个存是否进一的sum  一个返回接口的数组
        2.  通过while判断 ，通过charAt根据索引找字符，位数较短的补0，
        3.  进行末尾相加 ，如果需要进一  则记录，将和push到返回数组中   
        4.   将数组进行翻转并转换成字符串即可
*/

var addStrings = function (num1, num2) {
    let i = num1.length-1
    let j = num2.length-1
    let sum = 0
    let arr =[]
    while (i >=0 || j >= 0 || sum !== 0) {
        let x = i >= 0 ? num1.charAt(i) - '0' : 0
        let y = j >= 0 ? num2.charAt(j) - '0' : 0
         let result =x+y+sum
        sum =Math.floor( result/10)
        arr.push(result%10)
        i-=1
        j-=1
    }
    return arr.reverse().join('')
};

// 测试用例
let test = '7'
let test2 = '129'
console.time('执行用时');
console.log(addStrings(test, test2));
console.timeEnd('执行用时');