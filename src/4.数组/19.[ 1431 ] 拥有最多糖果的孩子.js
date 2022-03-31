/**
 * * 题目名称：拥有最多糖果的孩子
 * * 题目地址：https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies
 */

// * 思路：

var kidsWithCandies = function(candies, extraCandies) {
   return candies.map(el =>el =(el+extraCandies)>=Math.max(...candies));
};

// 测试用例
candies = [2,3,5,1,3], extraCandies = 3
console.time('执行用时');
console.log(kidsWithCandies(candies, extraCandies));
console.timeEnd('执行用时');