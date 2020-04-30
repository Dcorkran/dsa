/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  for (let i = 0, j = height.length -1; i < j;) {
      const s = height[i]
      const e = height[j]
      const volume = Math.min(s, e) * (j - i)
      max = Math.max(max, volume)
      if(s > e) {
          j--
      } else if (e > s) {
          i++
      } else {
          i++
          j--
      }
  }
  return max
};