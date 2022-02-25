/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
 */

// * 思路： 首先全部入队  对开始进入的数据进行while判断，删除不符合条件的内容

var RecentCounter = function() {
    this.queue = []
};

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);//新请求入队
    const time = t-3000;//计算3000ms前的时间
    while(this.queue[0] < time){//如果队头元素请求的时间在[t-3000,t]之外 就不断出队
        this.queue.shift();
    }
    return this.queue.length;//在[t-3000,t]区间内队列剩余的元素就是符合要求的请求数
};


// 测试用例
let test = ''

console.time('执行用时');
console.log((test));
console.timeEnd('执行用时');