/**
 * * 题目名称：反转链表
 * * 题目地址：https://leetcode-cn.com/problems/reverse-linked-list
 */

// * 思路：

var reverseList = function(head) {
    let prev = null;//前指针节点
    let curr = head;//当前指针节点
     //每次循环，都将当前节点指向它前面的节点，然后当前节点和前节点后移
    while (curr) {
        const next = curr.next;//临时节点，暂存当前节点的下一节点，用于后移
        curr.next = prev; //将当前节点指向它前面的节点
        prev = curr;// 把当前的节点赋值到prev ，前指针后移
        curr = next; //当前指针后移，循环继续
    }
    return prev;
};


// 测试用例
let head = [1,2,3,4,5]

console.time('执行用时');
console.log(reverseList(head));
console.timeEnd('执行用时');