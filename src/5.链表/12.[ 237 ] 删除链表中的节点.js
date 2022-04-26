/**
 * * 题目名称：删除链表中的节点
 * * 题目地址：https://leetcode-cn.com/problems/delete-node-in-a-linked-list
 */

// * 思路：
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');