/**
 * * 题目名称：有效的字母异位词
 * * 题目地址：https://leetcode-cn.com/problems/valid-anagram
 */

// * 思路：

var isAnagram = function (s, t) {
    let mapS = new Map
    for (const i of s) {
        mapS.set(i, (mapS.get(i) || 0) + 1)
    }
    for (const j of t) {

        if (mapS.get(j) === 1) {
            mapS.delete(j)
        } else {
            mapS.set(j, mapS.get(j) - 1)
        }


    }
    return mapS.size === 0

};

// 测试用例
s = "a", t = "ab"

console.time('执行用时');
console.log(isAnagram(s, t));
console.timeEnd('执行用时');