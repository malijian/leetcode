/**
 * * 题目名称：只出现一次的数字
 * * 题目地址：https://leetcode-cn.com/problems/single-number
 */

// * 思路：

var singleNumber = function(nums) {
    let map =new Map()
    let x =''
    for (const i of nums) {
        map.set(i,(map.get(i)||0)+1)
    }
    map.forEach((el,index,map)=>{
       if (el===1) { x= index}
    })
    return x
};

// 测试用例
let test = [4,1,2,1,2]

console.time('执行用时');
console.log(singleNumber(test));
console.timeEnd('执行用时');