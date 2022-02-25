/**
 * * 题目名称：用两个栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 */

// * 思路：  设置两个栈 第一个用做存 第二个用做删除 ，存的时候直接push内容  ，删除的时候将存的数据顺序颠倒，放到第二个栈
// 然后删除最上面的值 ，完成队列的先入先出格式
/**
 需要注意的 删除
    1 首先判断第二个栈中有值  有值直接pop（）没值进入下面的判断中
    2.如果第二个栈没值，通过while将一中的数据都倒叙放入到第二个栈中
    3.判断第二个栈中有值吗，有值返回  没值返回-1
 */
var CQueue = function() {
    this.stack1=[]
    this.stack2=[]
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {

    if (this.stack2.length>0) {
        return this.stack2.pop()
     }else {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
        if (this.stack2.length===0) {
        return -1
        }else {
            return this.stack2.pop()
        }
     }

};



// 测试用例
let test = ''

console.time('执行用时');
console.log(CQueue(test));
console.timeEnd('执行用时');