/**
 * * 题目名称：比较含退格的字符串
 * * 题目地址：https://leetcode-cn.com/problems/backspace-string-compare
 */

// * 思路：

var backspaceCompare = function(s, t) {
    function b(name) {
        let arr =[]
        for (const i of name) {
        if (i=='#') {
            arr.pop()
        }else {
            arr.push(i)
        }
    }
    return arr
    }
    console.log(b(s),b(t),'222');
    return b(s).join() ===b(t).join()
};

// 测试用例
let s = "ab##";
let t = "c#d#";

console.time('执行用时');
console.log(xxx(s,t));
console.timeEnd('执行用时');