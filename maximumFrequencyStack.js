
var FreqStack = function() {
  this.groupMap = new Map()
  this.freqMap = new Map()
  this.maxFreq = 0
};

/** 
* @param {number} x
* @return {void}
*/
FreqStack.prototype.push = function(x) {
  let xFreq = this.freqMap.get(x)
  
  if(xFreq === undefined) {
      xFreq = 1
  } else {
      xFreq += 1
  }
  
  this.freqMap.set(x, xFreq)
  const freqGroup = this.groupMap.get(xFreq)
  
  if(!freqGroup) {
      this.groupMap.set(xFreq, [x])
  } else {
      freqGroup.push(x)
      this.groupMap.set(xFreq, freqGroup)
  }
  
  this.maxFreq = Math.max(this.maxFreq, xFreq)
};

/**
* @return {number}
*/
FreqStack.prototype.pop = function() {
  const maxGroup = this.groupMap.get(this.maxFreq)
  const popVal = maxGroup.pop()
  if (!maxGroup.length) { 
      this.groupMap.delete(this.maxFreq)
      this.maxFreq--
  }
  
  const popValFreq = this.freqMap.get(popVal)
  if (popValFreq === 0) {
      this.freqMap.delete(popVal)
  }
  
  this.freqMap.set(popVal, popValFreq - 1)
  return popVal
};