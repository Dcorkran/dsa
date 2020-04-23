/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  const map = new Map;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i)
    }
    map.set(s[j], j + 1)
    max = Math.max(max, j - i + 1)
  }
  return max;
};

console.log(lengthOfLongestSubstring("abba"));