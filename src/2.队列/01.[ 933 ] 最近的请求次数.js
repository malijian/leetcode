/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
 */

// * 思路：
var RecentCounter = function() {
    this.stack =[]
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.stack.push(t)
   while(t-3000>this.stack[0]){
       this.stack.shift()
   }
   return  this.stack.length
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');