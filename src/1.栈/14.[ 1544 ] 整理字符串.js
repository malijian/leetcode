/**
 * * 题目名称：整理字符串
 * * 题目地址：https://leetcode-cn.com/problems/make-the-string-great
 */

// * 思路：
var makeGood = function (s) {
    let arr = []
    for (const key of s) {
        if (key == key.toLocaleUpperCase()) {
            // 大写的逻辑
            let lower = key.toLocaleLowerCase()
            if (lower === arr[arr.length - 1]) {
                // 这个值等于栈的顶
                arr.pop()
            } else {
                arr.push(key)
            }
        } else {
            //小写的逻辑
            let upper = key.toLocaleUpperCase()
            if (upper === arr[arr.length - 1]) {
                arr.pop()
            } else {
                arr.push(key)
            }

        }
    }
    return arr.join('')
};


// 测试用例
let test = 'Pp'

console.time('执行用时');
console.log(makeGood(test));
console.timeEnd('执行用时');