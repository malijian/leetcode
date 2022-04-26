/**
 * * 题目名称：从尾到头打印链表
 * * 题目地址：https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof
 */

var reversePrint = function(head) {
   const arr=[]
    while (head) {
         arr.unshift(head.val)
         head =head.next
    }
    return arr
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');