/**
 * * 题目名称：棒球比赛
 * * 题目地址：https://leetcode-cn.com/problems/baseball-game
 */

// * 思路：

var calPoints = function(ops) {
    let arr=[]
    for (let i = 0; i < ops.length; i++) {
        const el = ops[i];
        if (el==='C') {
            arr.pop()
        }else if (el==='D') {
            arr.push(+arr[arr.length-1]*2)
        }else if (el==='+') {
            arr.push(+arr[arr.length-1]+(+arr[arr.length-2]))
        }else {
            arr.push(+el)
        }
    }
    return eval(arr.join('+'))
};

// 测试用例
let test = [1]

console.time('执行用时');
console.log(calPoints(test));
console.timeEnd('执行用时');