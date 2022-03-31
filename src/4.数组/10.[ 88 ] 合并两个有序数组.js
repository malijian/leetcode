/**
 * * 题目名称：合并两个有序数组
 * * 题目地址：https://leetcode-cn.com/problems/merge-sorted-array
 */

// * 思路：

var merge = function(nums1, m, nums2, n) {
//  nums1.splice(m, nums1.length - m,...nums2)
//  nums1.sort((a,b)=>a-b)
//  return nums1
let p1=0 
let p2 =0
let sorted =new Array(m+n).fill(0)
var cur=0
while (p1<m||p2<n) {
    if (p1===m) {
        cur =nums2[p2++]
    }else if (p2===n) {
        cur =nums1[p1++]
    }else if (nums1[p1]<=nums2[p2]) {
        cur=nums1[p1++]
    }else {
        cur =nums2[p2++]
    }
    sorted[p1+p2-1]=cur
}
for (let i = 0; i != m + n; ++i) {
    nums1[i] = sorted[i];
}
};

// 测试用例
nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

console.time('执行用时');
console.log(merge(nums1, m, nums2, n));
console.timeEnd('执行用时');