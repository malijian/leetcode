/**
 * * 题目名称：存在重复元素
 * * 题目地址：https://leetcode-cn.com/problems/contains-duplicate
 */

// * 思路：
var containsDuplicate = function(nums) {
    let map =new Map()
    for (let i = 0; i < nums.length; i++) {
       let item=nums[i]
       map.set(item, (map.get(item) || 0) + 1);
        if (map.get(item)>=2) {
            return true
        }
    }
    return false
};


// 测试用例
let test = [1,2,3,1]

console.time('执行用时');
console.log(containsDuplicate(test));
console.timeEnd('执行用时');