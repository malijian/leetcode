/**
 * * 题目名称：宝石与石头
 * * 题目地址：https://leetcode-cn.com/problems/jewels-and-stones
 */

// * 思路：

var numJewelsInStones = function(jewels, stones) {
    let map =new Map()
    let total =0
    for (const i of stones) {
        if (jewels.indexOf(i)!==-1) {
            map.set(i,(map.get(i)||0)+1) 
        }
    }
    map.forEach((el)=>{
        total+=el
    })
    return total
};

// 测试用例
jewels = "aA", stones = "aAAbbbb"

console.time('执行用时');
console.log(numJewelsInStones(jewels,stones));
console.timeEnd('执行用时');