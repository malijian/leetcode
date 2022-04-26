/**
 * * 题目名称：回文链表
 * * 题目地址：https://leetcode-cn.com/problems/palindrome-linked-list
 */

// * 思路：

var isPalindrome = function(head) {
    const val =[]
    while (head) {
        val.push(head.val)
        head =head.next
    }
    for (let i = 0,j =val.length-1; i < j; i++,j--) {
       if (val[i]!==val[j]) {
            return false
       } 
    }
    return true
};

// 测试用例
head = [1,2,2,1]

console.time('执行用时');
console.log(isPalindrome(head));
console.timeEnd('执行用时');