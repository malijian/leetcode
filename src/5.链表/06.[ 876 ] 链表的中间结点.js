/**
 * * 题目名称：链表的中间结点
 * * 题目地址：https://leetcode-cn.com/problems/middle-of-the-linked-list
 */

// * 思路：

var middleNode = function(head) {
    let [slow,fast] =[head,head]
     while(fast&&fast.next){
            slow=slow.next
            fast =fast.next.next
        }
        console.log(slow)
        return slow
  };

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');