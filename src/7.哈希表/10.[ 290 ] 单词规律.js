/**
 * * 题目名称：单词规律
 * * 题目地址：https://leetcode-cn.com/problems/word-pattern
 */

// * 思路：

// 任意一个字符串也只被唯一的一个字符对应。在集合论中，这种关系被称为「双射 ,申明2个对象 互相映射
//  Map { 'dog' => 'a', 'cat' => 'b' } 
//  Map { 'a' => 'dog', 'b' => 'cat' }
var wordPattern = function(pattern, s) {
 const word2ch = new Map();
 const ch2word = new Map();
  const words =s.split(' ')
  if (pattern.length!==words.length) {
      return false
  }
  for (const [i,word] of words.entries()) {
      const ch =pattern[i]
      if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
        return false;
    }
    word2ch.set(word, ch);
    ch2word.set(ch, word);
  }
  return true
}
// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true
// 测试用例
let pattern = "abba"
let s= "dog cat cat dog"
console.time('执行用时');
console.log(wordPattern(pattern, s));
console.timeEnd('执行用时');