/**
 * * 题目名称：删除字符串中的所有相邻重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
 */
 
// * 思路： 从左向右依次循环，如果遇到一样的 就pop()删除前一项，并且不要这个值（abbaca）-》（aaca），


var removeDuplicates = function(s) {
    let arr =[]
       for (const i in s) {
           if (arr.length===0) {
            arr.push(s[i])
           }else{
               if ( arr[arr.length-1]!==s[i]) {
                arr.push(s[i])
               }else {
                arr.pop()
               }
           }
       }
       return arr.join('')
};

// 测试用例
let test = 'abbaca'

console.time('执行用时');
console.log(removeDuplicates(test));
console.timeEnd('执行用时');