/**
 * * 题目名称：搜索插入位置
 * * 题目地址：https://leetcode-cn.com/problems/search-insert-position
 */

// * 思路：
/* 
    二分法思路
    1。 定义left right 边界值
    2.  定义中间值mid(中间的索引) 右-左除2+左  ，使用>>位运算符避免7/2=3.5的情况 （值会取3）
    3.  判断target与中间值的大小关系 ，如果target比它小，落到左边，则收紧右边界，如果target比它大，则收紧左边界
    4， 返回mid值（因为最后左边界会等于右边界，mid=（0/2）+left） mid=left 返回left即可

*/
var searchInsert = function(nums, target) {
    let right =nums.length-1
    let left =0
    while (left<=right) {
        const mid= ((right-left)>>1)+left
        if (target<=nums[mid]) {
            right=mid-1
        }else {
          left=mid+1
        }
    }
    return left
};


// 测试用例
let test = [1,2,3,5,6,11,18,20]
let  target = 4

console.time('执行用时');
console.log(searchInsert(test,target),'return');
console.timeEnd('执行用时');





// const n = nums.length;
// let left = 0, right = n - 1, ans = n;
// while (left <= right) {
//     console.log(right,left,'right','left');
//     let mid = ((right - left) >> 1) + left;
//     console.log(mid,'mid');
//     if (target <= nums[mid]) {
//         ans = mid;
//         right = mid - 1;
//     } else {
//         left = mid + 1;
//     }
// }
// return ans;