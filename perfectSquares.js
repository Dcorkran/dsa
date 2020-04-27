/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n === 1 || Number.isInteger(Math.sqrt(n))) {
    return 1;
  }
  const sqMap = {}
  for (let i = n; i > 0; i--) {
    if (Number.isInteger(Math.sqrt(i))) sqMap[i] = true;
  }
  const visitedMap = {};
  const queue = [];
  queue.push([n, 1]);
  while (queue && queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {

      const [num, level] = queue.shift()

      const numSqrt = Math.floor(Math.sqrt(num))
      for (let j = numSqrt; j > 0 ; j--) {
        const remainder = num - j * j;
        if (sqMap[remainder]) {
          return level + 1;
        }
        if (!visitedMap[j]) {
          queue.push([remainder, level + 1])
          visitedMap[remainder] = true
        }
      }
    }
  }
};


console.log(numSquares(13), 2);
// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

console.log(numSquares(12), 3);
// Input: n = 12
// Output: 3 
// Explanation: 12 = 4 + 4 + 4.

console.log(numSquares(7168), 4);