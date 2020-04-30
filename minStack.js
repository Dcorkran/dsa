/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.storage = [];
  this.min = null;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.storage.push({val: x, min: this.min});
  if(this.min === null || x < this.min) this.min = x;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const element = this.storage.pop();
  if (element.val === this.min) {
         this.min = element.min;
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.storage[this.storage.length - 1].val
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/