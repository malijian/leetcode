/**
 * * 题目名称：数组的相对排序
 * * 题目地址：https://leetcode-cn.com/problems/relative-sort-array
 */

// * 思路：

var relativeSortArray = function(arr1, arr2) {
    let arr =[]
    let arr3 =[]
   for (let i = 0; i < arr2.length; i++) {
      let el =arr1.filter(el=>el===arr2[i])
      arr.push(...el)
   }
   for (let i = 0; i < arr1.length; i++) {
     if ( arr2.indexOf(arr1[i])===-1) {
         arr3.push(arr1[i])
     }
   }
   arr.push(...arr3.sort((a,b)=>a-b))
   for (let i = 0; i < arr1.length; i++) {
      arr1[i] =arr[i]  
   }
   return arr1
};

// 测试用例
arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]

console.time('执行用时');
console.log(relativeSortArray(arr1, arr2));
console.timeEnd('执行用时');