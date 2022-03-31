/**
 * * 题目名称：将数组分成和相等的三个部分
 * * 题目地址：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
 */

// * 思路：
var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((a,b) => a + b)
    let num = 3
    let temp = 0
    for(let a of arr){
        temp += a
        if (temp === sum / 3) num--, temp = 0
    }
    return num <=  0

};


// 测试用例
let test = [0,2,1,-6,6,-7,9,1,2,0,1]
let test2 =[12,-4,16,-5,9,-3,3,8,0]
let test3 =[10,-10,10,-10,10,-10,10,-10]



console.time('执行用时');
console.log(canThreePartsEqualSum(test3));
console.timeEnd('执行用时');