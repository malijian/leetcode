/**
 * * 题目名称：文件夹操作日志搜集器
 * * 题目地址：https://leetcode-cn.com/problems/crawler-log-folder
 */

// * 思路：

var minOperations = function(logs) {
   let arr =[]
   for (let i = 0; i < logs.length; i++) {
        if (logs[i]==='../') {
            arr.pop()
        }else if (logs[i]!=='./') {
             arr.push(logs[i])
        }
   }
   return  arr.length
};

// 测试用例
let test =  ["d1/","d2/","./","d3/","../","d31/"]

console.time('执行用时');
console.log(minOperations(test));
console.timeEnd('执行用时');