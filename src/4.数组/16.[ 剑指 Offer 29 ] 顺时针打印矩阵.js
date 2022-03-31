/**
 * * 题目名称：顺时针打印矩阵
 * * 题目地址：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
 */

// * 思路：
//不会
var spiralOrder = function(matrix) {
    if (matrix.length == 0) return [];
    const res = [];
    // 分别代表上下左右
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    // 一圈一圈的算  这一圈都加入结果集之后再统一向里面收缩
    while (top < bottom && left < right) {
      for (let i = left; i < right; i++) res.push(matrix[top][i]); // 上行  注意这里是<right 而不是<=right
      for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右列  注意这里是<bottom 而不是<=bottom
      for (let i = right; i > left; i--) res.push(matrix[bottom][i]); // 下行  注意这里是<left 而不是<=left
      for (let i = bottom; i > top; i--) res.push(matrix[i][left]); // 左列  注意这里是<top 而不是<=top
      right--;
      top++;
      bottom--;
      left++;
    }
    // 为什么剩下一行的时候  是从左至右呢 因为题目要求的就是顺时针螺旋顺序   所以当只有一行或者一列的时候  就是从左到右  从上到下
    if (top == bottom) {
      // 剩下一行，从左到右依次添加
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
    } else if (left == right) {
      // 剩下一列，从上到下依次添加
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][left]);
      }
    }
    return res;
};

// 测试用例
let test =  [[1,2,3],[4,5,6],[7,8,9]]

console.time('执行用时');
console.log(spiralOrder(test));
console.timeEnd('执行用时');