/**
 * * 题目名称：字符串中的第一个唯一字符
 * * 题目地址：https://leetcode-cn.com/problems/first-unique-character-in-a-string
 */

// * 思路：


var firstUniqChar = function(s) {
//   let map =new Map()
//   let i 
//   let flag =true
//   for (const i of s) {
//     map.set(i,(map.get(i)||0)+1) 
//   }
//  console.log(map);
//  map.forEach((el,index)=>{

//      if (el ===1&&flag) {
//          i =index
//          flag =false
//          return
//      }
//  })
//  return s.indexOf(i)
let flag =true
let item
for (const i of s) {
    if (s.indexOf(i)===s.lastIndexOf(i)&&flag) {
        item =i
        flag =false
    }
}
return s.indexOf(item)
};
// 测试用例
let test = "leetcode"

console.time('执行用时');
console.log(firstUniqChar(test));
console.timeEnd('执行用时');