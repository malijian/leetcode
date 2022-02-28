var MyQueue = function() {
    this.stackIn = [];
    this.stackOut = [];
};

MyQueue.prototype.push = function(x) {
    this.stackIn.push(x);
};

MyQueue.prototype.pop = function() {
    while(this.stackIn.length > 1){
        this.stackOut.push(this.stackIn.pop());
    }
    let ans =  this.stackIn.pop();
    while(this.stackOut.length){
        this.stackIn.push(this.stackOut.pop());
    }
    return ans;
};

MyQueue.prototype.peek = function() {
    while(this.stackIn.length){
        this.stackOut.push(this.stackIn.pop());
    }
    let ans =  this.stackOut[this.stackOut.length - 1];
    while(this.stackOut.length){
        this.stackIn.push(this.stackOut.pop());
    }
    return ans;
};

MyQueue.prototype.empty = function() {
    return !this.stackIn.length && !this.stackOut.length;
};