/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.map = new Map();
  this.capacity = capacity;
  this.length = 0
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const val = this.map.get(key)
  if(val !== undefined) {
      this.map.delete(key)
      this.map.set(key, val)
      return val
  }
  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
      this.map.delete(key)
      this.map.set(key, value)
      return
  }
  
  if (this.length === this.capacity) {
      const keyToDelete = this.map.keys().next().value
      this.map.delete(keyToDelete)
      this.map.set(key, value)
      return
  }
  
  this.length++
  this.map.set(key,value)
};
