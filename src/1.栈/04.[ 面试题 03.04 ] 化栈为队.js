/**
 * * 题目名称：化栈为队
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 */

// * 思路：
var MyQueue = function() {
    this.stackA=[]
    this.stackB =[]
  };
  
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  MyQueue.prototype.push = function(x) {
      this.stackA.push(x)
  };
  
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  MyQueue.prototype.pop = function() {
    if (this.stackB.length) {
        return this.stackB.pop()
    }else {
        while (this.stackA.length>0) {
            this.stackB.push(this.stackA.pop())
        }
        if (this.stackB.length) {
            return this.stackB.pop()
        }else{
            return -1
        }
    }
  };
  
  /**
   * Get the front element.
   * @return {number}
   */
  MyQueue.prototype.peek = function() {
      let str 
    while (this.stackA.length) {
        this.stackB.push(this.stackA.pop())
    }
     str =this.stackB[this.stackB.length-1]
     while (this.stackB.length) {
        this.stackA.push(this.stackB.pop())
     }
    return str
  };
  
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  MyQueue.prototype.empty = function() {
     return !(this.stackA.length||this.stackB.length)
  };
  


// 测试用例
// let test = ''

// console.time('执行用时');
// console.log(xxx(test));
// console.timeEnd('执行用时');