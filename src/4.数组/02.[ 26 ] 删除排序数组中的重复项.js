/**
 * * 题目名称：删除排序数组中的重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
 */

// * 思路：
/* 
 利用双指针，如果快指针不等于慢指针 ，慢指针++，
 数据以慢指针为准 
*/

var removeDuplicates = function(nums) {
    let n =nums.length
    if (n==0) {
        return 0
    }
    let fast =1
    let slow =1
    while (fast<n) {
        if (nums[fast]!== nums[fast-1]) {
             nums[slow] =nums[fast]
             slow++
        }
        fast++
    }
    return slow
};
// 测试用例
let test = [0,0,1,1,1,2,2,3,3,4]

console.time('执行用时');
console.log(removeDuplicates(test));
console.timeEnd('执行用时');
