/**
 * * 题目名称：最小栈
 * * 题目地址：https://leetcode-cn.com/problems/min-stack
 */

// * 思路：

var MinStack = function() {
    this.stack =[]
    this.minstack =[Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this.minstack.push(Math.min(val,this.minstack[this.minstack.length-1]))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
 this.stack.pop()
 this.minstack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return  this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     return  this.minstack[this.minstack.length-1]
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');