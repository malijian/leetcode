/**
 * * 题目名称：有多少小于当前数字的数字
 * * 题目地址：https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number
 */

// * 思路：

var smallerNumbersThanCurrent = function(nums) {
    let arr=[]
    for (let i = 0; i < nums.length; i++) {
        let sum =0
       for (let j = 0; j < nums.length; j++) {
           if (nums[i]>nums[j]) {
              sum++
           }
           
       }
    arr.push(sum)
    }
    return arr
    //另一种方法
    // const cnt = new Array(11).fill(0);
    // const n = nums.length;
    // for (let i = 0; i < n; ++i) {
    //     cnt[nums[i]] += 1;
    // }
    // console.log(cnt);
    // for (let i = 1; i <= 10; ++i) {
    //     cnt[i] += cnt[i - 1];
    // }
    // console.log(cnt);
    // const ret = [];
    // for (let i = 0; i < n; ++i) {
    //     ret.push(nums[i] ? cnt[nums[i] - 1] : 0);
    // }
    // return ret;
};

// 测试用例
let test =  [5,1,2,2,3]

console.time('执行用时');
console.log(smallerNumbersThanCurrent(test));
console.timeEnd('执行用时');