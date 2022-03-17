/**
 * * 题目名称：两数之和
 * * 题目地址：https://leetcode-cn.com/problems/two-sum
 */

// * 思路：

var twoSum = function(nums, target) {
    // const map = new Map()
    let obj={}
  for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
       let o =target -num
       console.log(obj,o,'xxx');
       if (obj.hasOwnProperty(o)) {
        return [i,obj[o]]
       }
    //    if (map.has(o)) {
    //         return [i,map.get(o)]
    //    }
    //    map.set(num, i)
    obj[num]=i
}
};

// 测试用例
let test = [2,7,11,15]
let target =9
//[1,2]
console.time('执行用时');
console.log(twoSum(test,target));
console.timeEnd('执行用时');