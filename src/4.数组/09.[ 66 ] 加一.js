/**
 * * 题目名称：加一
 * * 题目地址：https://leetcode-cn.com/problems/plus-one
 */

// * 思路：

// var plusOne = function(digits) {
//    for (let i = digits.length - 1; i >=0; i--) {
//       digits[i]++
//       digits[i] =  digits[i]%10
//       if (digits[i]) {return  digits }
//    }
//    digits.unshift(1)
//    return  digits
// };

var plusOne = function(A,K) {
    let i =A.length-1
   let carry=0
   let res =[]
   while (i>=0||K!=0) {
     let x = i>=0?A[i]: 0
     let y = K != 0 ? K % 10 : 0
     const sum = x+y+carry
    res.push(sum%10)
    carry = Math.floor(sum / 10)
     i--
     K = Math.floor(K / 10)
   }
   if (carry) res.push(carry)
   return res.reverse()
};
// 测试用例
let test = [9,9,9,9,9,9,9,9,9,9]

console.time('执行用时');
console.log(plusOne(test,1));
console.timeEnd('执行用时');