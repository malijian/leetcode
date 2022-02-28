/**
 * * 题目名称：用队列实现栈
 * * 题目地址：https://leetcode-cn.com/problems/implement-stack-using-queues
 */

// * 思路：

let MyStack = function() {
    this.queueA = [];
    this.queueB = [];
};

MyStack.prototype.push = function(x) {
    this.queueA.push(x);
};

MyStack.prototype.pop = function() {
    while(this.queueA.length > 1){
        this.queueB.push(this.queueA.shift());
    }
    let ans = this.queueA.shift();
    while(this.queueB.length){
        this.queueA.push(this.queueB.shift());
    }
    return ans;
};

MyStack.prototype.top = function() {
    return this.queueA.slice(-1)[0];
};

MyStack.prototype.empty = function() {
    return !this.queueA.length;
};
// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');