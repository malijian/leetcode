/**
 * * 题目名称：二进制求和
 * * 题目地址：https://leetcode-cn.com/problems/add-binary
 */

// * 思路：（没思路）
var addBinary = function(a, b) {
   let i =a.length-1
   let j =b.length-1
   let sum= 0
   const arr =[]
   while (i>=0||j>=0||sum!=0) {
       const x =i>= 0? a.charAt(i) -'0' : 0
       const y=j>= 0? b.charAt(j) -'0' : 0
        const total =x+y+sum
        arr.push(total%2)
        sum =Math.floor(total/2)
       i--
       j--
   }
   return arr.reverse().join('')
};


// 测试用例
let test = '11'
let  b= '1'

console.time('执行用时');
console.log(addBinary(test,b));
console.timeEnd('执行用时');