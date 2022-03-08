/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses
 */

// * 思路：

var isValid = function(s) {
    let arr =[]
    for (const item of s) {
        if (item===')'&&arr[arr.length-1]==='(') {
            arr.pop()
        }else if (item===']'&&arr[arr.length-1]==='[') {
            arr.pop()
        }else if (item==='}'&&arr[arr.length-1]==='{') {
            arr.pop()
        }else{
            arr.push(item)
        }
       
    }
    return arr.length===0
};

// 测试用例
let test = '()'

console.time('执行用时');
console.log(isValid(test));
console.timeEnd('执行用时');