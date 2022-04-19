/**
 * * 题目名称：合并两个有序链表
 * * 题目地址：https://leetcode-cn.com/problems/merge-two-sorted-lists
 */

// * 思路：


var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }

};
// 测试用例
l1 = [1, 2, 4], l2 = [1, 3, 4]

console.time('执行用时');
console.log(mergeTwoLists(l1, l2));
console.timeEnd('执行用时');