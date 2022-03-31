/**
 * * 题目名称：拼写单词
 * * 题目地址：https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters
 */

// * 思路：

var countCharacters = function (words, chars) {
    let charMap = new Map()
    let size = 0;
    for (const i of chars) {
        charMap.set(i,(charMap.get(i)||0)+1)
    }
    for (const word of words) {
    let wordMap = new Map();
    for(let char of word) {
        wordMap.set(char,(wordMap.get(char)||0)+1)
    }
    let enough = true;
    for (let [key,value] of wordMap) {
        //每个字母进行比较  chars比words的单词数目小或者没有 就代表不可以
        if (charMap.get(key)<value||!charMap.has(key)) {
            enough=false
            break
        }
    }
    size = enough ? size + word.length : size
    }
    return size;

};

// 测试用例
words = ["cat", "bt", "hat", "tree"], chars = "atach"
console.time('执行用时');
console.log(countCharacters(words, chars));
console.timeEnd('执行用时');