/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.storage = [];
  this.isEven = true;
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  if (!this.storage.length) {
      this.storage.push(num)
      this.isEven = !this.isEven
      return
  }
  
  if (num < this.storage[0]) {
      this.storage.unshift(num)
      this.isEven = !this.isEven
      return
  }
  
  let found = false
  let prevVal = Number.MIN_SAFE_INTEGER
  let i = -1
  while(!found) {
      i++
      if(this.storage[i] === num) {
          found = true
      } else if(prevVal < num && this.storage[i] > num) {
          found = true
      } else if (this.storage[i] === undefined) {
          found = true
      }
      prevVal = this.storage[i]
  }

  this.storage = [
    ...this.storage.slice(0, i),
    num,
    ...this.storage.slice(i)      
  ]

  this.isEven = !this.isEven
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  const halfLength = (this.storage.length - 1) / 2
  if(this.isEven) {
      return (this.storage[Math.floor(halfLength)] + this.storage[Math.ceil(halfLength)]) / 2
  } else {
      return this.storage[Math.floor(halfLength)]
  }
};

/** 
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/