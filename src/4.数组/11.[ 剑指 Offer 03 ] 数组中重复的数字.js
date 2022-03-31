/**
 * * 题目名称：数组中重复的数字
 * * 题目地址：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
 */

// * 思路：

var findRepeatNumber = function(nums) {
    // let b =nums.sort((a,b)=>a-b)
    // if (nums.length===0||nums.length===1) {
    //      return false
    // }
    // for (let i = 1; i < b.length; i++) {
    //    if (b[i]===b[i-1]) {
    //        return b[i]
    //    }   
    // }
    let map =new Map()
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) return nums[i]
      map.set(nums[i],1)
    }
    console.log(obj);
}

// 测试用例
let test = [2, 3, 1, 0, 2, 5, 3]

console.time('执行用时');
console.log(findRepeatNumber(test));
console.timeEnd('执行用时');