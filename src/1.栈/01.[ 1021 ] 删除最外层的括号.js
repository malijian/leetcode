/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */
/**
 /**
 输入：s = "(()())(())"  输出："()()()"
 思路：从头到尾寻找有效括号组合， 利用栈的特性,  
 1。声明1个栈, 以及1个res 用来返回最后的结果
 2.遍历输入的字符串，如果：
（1）为'('且stack空，说明是最外层的括号
仅push到stack中
（2）为'('且stack非空，说明不是最外层的括号
分别push到stack和res中
（3）为')且stack长度>1，说明不是最外层的括号
将')'push到res中，stack弹出栈顶
（4）为')且stack长度==1，说明是最外层的括号
stack弹出栈顶即可
最后将res数组连接成字符串即可。
3。输入res
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  const stack =[]
  let res =''
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (el==='('&&stack.length===0) {
        stack.push(el)
    }else if (el==='('&&stack.length) {
      stack.push(el)
      res=res+el
    }else if (el===')'&&stack.length>1) {
      stack.pop()
      res=res+el
    }else if (el===')'&&stack.length===1) {
      stack.pop()
     
    }
  }
  return res
};

// 测试用例
let test = "(())"

console.time('执行用时');
console.log(removeOuterParentheses(test));
console.timeEnd('执行用时');