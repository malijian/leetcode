/**
 * * 题目名称：相交链表
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
 */

// * 思路：
var getIntersectionNode = function(headA, headB) {
    //哈希集合
    // let arr =new Set()
    // let temp = headA;
    //  while (temp) {
    //      arr.add(temp)
    //      temp =temp.next
    //  }
    //  temp =headB
    //  while(temp){
    //    if (arr.has(temp)) {
    //        return temp
    //    }
    //    temp =temp.next
    //  }
    //  return null
     //方法二：双指针
     if (headA===null||headB===null) {
         return null
     }
     let pA = headA, pB = headB;
     while (headA!==headB) {
        pA =pA===null?headB:pA.next
        pB=pB ===null?headA:pB.next
     }
     return pA
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');