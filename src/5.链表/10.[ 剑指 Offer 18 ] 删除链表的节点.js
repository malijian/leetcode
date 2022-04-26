/**
 * * 题目名称：删除链表的节点
 * * 题目地址：https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof
 */

// * 思路：
var deleteNode = function(head, val) {
    if(!head) return head;

    let newHead = new ListNode(0, head), p = newHead;
    while(p.next) {
        if(p.next.val === val) {
            // 删除后直接返回就行了，减少点时间
            p.next = p.next.next;
            return newHead.next;
        }
        p = p.next;
    }
    return null;
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');