/**
 * * 题目名称：外观数列
 * * 题目地址：https://leetcode-cn.com/problems/count-and-say
 */

// * 思路：(不会)

var countAndSay = function(n) {
    let str = "1";
    for (let i = 2; i <= n; ++i) {
        const sb = [];
        let start = 0;
        let pos = 0;

        while (pos < str.length) {
            while (pos < str.length && str[pos] === str[start]) {
                pos++;
            }
            sb.push('' + (pos - start) + str[start]);
            start = pos;
        }
        str = sb.join('');
    }
    
    return str;
};

// 测试用例
let test = '6'

console.time('执行用时');
console.log(countAndSay(test));
console.timeEnd('执行用时');