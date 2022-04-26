/**
 * * 题目名称：删除排序链表中的重复元素
 * * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
 */

// * 思路：

var deleteDuplicates = function(head) {
     if (!head) {
         return head
     }
     let  curr =head
     while (curr.next) {
         if (curr.val ===curr.next.val) {
            curr.next =curr.next.next
         }else {
            curr =curr.next
         } 
     }
     return head
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');