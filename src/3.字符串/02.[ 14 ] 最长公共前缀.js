/**
 * * 题目名称：最长公共前缀
 * * 题目地址：https://leetcode-cn.com/problems/longest-common-prefix
 */

// * 思路：

var longestCommonPrefix = function(strs) {
    let re=''
    if (strs.length===0) {
            return ''
    }
    if (strs.length===1) {
        return  strs.join('')
    }
    for (let i = 0; i < strs[0].length; i++) {
       for (let j = 0; j < strs.length; j++) {
            if (strs[j][i]!==strs[0][i]) {
                return re
            }
            if (j==strs.length-1&&i== strs[0].length-1) {
                // 当走完所有的情况
                if (strs[j][i]==strs[0][i]) {
                        re+=strs[0][i]
                        return re
                }
            }
       }
       re+=strs[0][i]
    }
    if (!strs[0]) {
        return ''
}
};

// 测试用例
let test =  ["",""]

console.time('执行用时');
console.log(longestCommonPrefix(test));
console.timeEnd('执行用时');