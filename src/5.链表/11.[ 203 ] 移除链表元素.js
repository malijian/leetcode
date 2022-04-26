/**
 * * 题目名称：移除链表元素
 * * 题目地址：https://leetcode-cn.com/problems/remove-linked-list-elements
 */

// * 思路：

var removeElements = function(head, val) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next !== null) {
        if (temp.next.val == val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return dummyHead.next;
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');