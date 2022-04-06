/**
 * * 题目名称：反转链表
 * * 题目地址：https://leetcode-cn.com/problems/reverse-linked-list
 */

// * 思路：

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};


// 测试用例
let head = [1,2,3,4,5]

console.time('执行用时');
console.log(reverseList(head));
console.timeEnd('执行用时');