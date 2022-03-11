/**
 * * 题目名称：字符串相加
 * * 题目地址：https://leetcode-cn.com/problems/add-strings
 */

// * 思路：

var addStrings = function(num1, num2) {
    let sum =''
    for (let i = 0; i < num2.length; i++) {
       if (+num2[i]+(+num1[i])===10) {
        sum+='0'
       }else {
          
        sum+= (Number(num2[i])+Number(num1[i])).toString()
       }
        
    }
    console.log(sum,'xx');
};

// 测试用例
let test = '117'
let test2 = '123'
console.time('执行用时');
console.log(addStrings(test,test2));
console.timeEnd('执行用时');