/**
 * * 题目名称：两个数组的交集
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-arrays
 */

// * 思路：

var intersection = function(nums1, nums2) {
    let mapS = new Map
    let arr =[]
    for (const i of nums1) {
        mapS.set(i, (mapS.get(i) || 0) + 1)
    }
    for (const j of nums2) {
        if (mapS.has(j)) {
             arr.push(j)
             mapS.delete(j)
        }
    }
    return arr
};

// 测试用例
nums1 = [1,2,2,1], nums2 = [2,2]

console.time('执行用时');
console.log(intersection(nums1,nums2));
console.timeEnd('执行用时');