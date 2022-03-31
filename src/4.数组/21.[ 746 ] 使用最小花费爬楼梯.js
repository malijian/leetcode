/**
 * * 题目名称：使用最小花费爬楼梯
 * * 题目地址：https://leetcode-cn.com/problems/min-cost-climbing-stairs
 */

// * 思路：

var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    const dp = new Array(n + 1);
    dp[0] = dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];
//    const n = cost.length
//    let prev = 0, curr = 0;
//    for (let i = 2; i <= n; i++) {
//     let next  =Math.min(curr+cost[i-1],prev+cost[i-2])
//        prev = curr;
//        curr = next;       
//    }
//    return  curr
};

// 测试用例
let test = [10,15,20]

console.time('执行用时');
console.log(minCostClimbingStairs(test));
console.timeEnd('执行用时');