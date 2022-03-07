/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
 */

// * 思路：

/* 
应该使用单调队列的的特性
    维护2个数组，一个返回结果数据，一个维护当前单调递减的队列数组（数组存放当前视图的下标）
 */
var maxSlidingWindow = function(nums, k) {
  // 队列数组（存放的是元素下标，为了取值方便）
  const q = [];
  const ans =[]
  for (let i = 0; i < nums.length; i++) {
      //  如果当前项大于之前项 ，全部清空掉
      if(q.length&&nums[i]>=nums[q[q.length-1]]) {
          q.pop()
      }
      // 插入数据
     q.push(i)
     // q[0]为当前最大的索引,如果i=4，k=3 ，那么q[0]的索引必须大于1（i-k），小于的话就删除头项
     while (q[0]<= i-k) {
         q.shift()
     }
     // 满足条件。依次放入
     if (i>=k-1) {
        ans.push(nums[q[0]])
     }
  }
  return ans
};

// 测试用例
let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
console.time('执行用时');
console.log(maxSlidingWindow(nums, k));
console.timeEnd('执行用时');

 // 时间复杂度太高
// var maxSlidingWindow = function(nums, k) {
//     let arr =[]
//     let total=[]
//     for (let i = 0; i < nums.length; i++) {
//        arr.push(nums[i])
//        if (arr.length===k) {
//            console.log(arr,'----');
//             total.push(Math.max(...arr))
//             arr.shift()
//        }
//     }
//     return total
// };
// var maxSlidingWindow = function(nums, k) {
//     // 队列数组（存放的是元素下标，为了取值方便）
//     const q = [];
//     // 结果数组
//     const ans = [];
//     for (let i = 0; i < nums.length; i++) {
//       // 若队列不为空，且当前元素大于等于队尾所存下标的元素，则弹出队尾
//       while (q.length && nums[i] >= nums[q[q.length - 1]]) {
//         q.pop();
//       }
//       // 入队当前元素下标
//       q.push(i);
//       // 判断当前最大值（即队首元素）是否在窗口中，若不在便将其出队
//       while (q[0] <= i - k) {
//         q.shift();
//       }
//       // 当达到窗口大小时便开始向结果中添加数据
//       if (i >= k - 1) ans.push(nums[q[0]]);
//     }
//     return ans;   
//   };