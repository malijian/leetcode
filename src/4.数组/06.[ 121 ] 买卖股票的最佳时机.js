/**
 * * 题目名称：买卖股票的最佳时机
 * * 题目地址：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
 */

// * 思路：

var maxProfit = function(prices) {
    const n = prices.length;
    let maxprice = prices[n - 1];
    let result = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (maxprice > prices[i]) {
            result = Math.max(result, maxprice - prices[i]);
        } else {
            maxprice = prices[i];
        }
    }

    return result;
};

// 测试用例
let test =  [-2,1,-3,4,-1,2,1,-5,4]

console.time('执行用时');
console.log(maxProfit(test));
console.timeEnd('执行用时');