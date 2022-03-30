/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.maxSize = maxSize;
  this.size = 0;
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.size < this.maxSize) {
    this.stack.push(x);
    this.size++;
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.size === 0) {
    return -1;
  } else {
    this.size--;
    return this.stack.pop();
  }
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < Math.min(k, this.size); i++) {
    this.stack[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
