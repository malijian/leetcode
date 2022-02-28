/**
 * * 题目名称：用栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks
 */

// * 思路：

var MyQueue = function() {
    this.is =[]
     this.os =[]
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
this.is.push(x)
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
 if(!this.os.length){
    while(this.is.length){
        this.os.push(this.is.pop());
    }
}
return this.os.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
if(!this.os.length){
    while(this.is.length){
        this.os.push(this.is.pop());
    }
    return this.os[this.os.length - 1];
}else {
    return this.os[this.os.length - 1];
}
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
return !(this.os.length||this.is.length)
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');