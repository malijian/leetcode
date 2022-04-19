/**
 * * 题目名称：环形链表
 * * 题目地址：https://leetcode-cn.com/problems/linked-list-cycle
 */

// * 思路：
const cycle = (head) => {
    // head.next.next.next=head
   let slow =head 
   let fast =head
    while (slow!=null&&fast.next!=null&&fast.next.next!=null) {
       slow=slow.next
       fast=fast.next.next
       if (slow===fast) {
         return true
       }
    }
    return false

  };

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');