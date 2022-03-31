/**
 * * 题目名称：杨辉三角
 * * 题目地址：https://leetcode-cn.com/problems/pascals-triangle
 */
//  [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// * 思路：

var generate = function(numRows) {
  const ret =[]
  for (let i = 0; i < numRows; i++) {
      let  el =new Array(i+1).fill(1)
      for (let j = 1; j < el.length-1; j++) {
         el[j] =ret[i-1][j-1] +ret[i-1][j]
      }
      ret.push(el)
  }
  return ret
};

// 测试用例
let test = 3

console.time('执行用时');
console.log(generate(test));
console.timeEnd('执行用时');