/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  let longestSubstring = '';
  for (let i = 0; i < s.length; i++) {
    let ans1 = spreadFromCenter(s, i, i);
    let ans2 = spreadFromCenter(s, i, i + 1);
    longestSubstring = returnLongerString(longestSubstring, ans1, ans2);
  }
  return longestSubstring
};

var spreadFromCenter = function(s, l, r) {
  while (s[l] && s[r] && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.substring(l + 1, r);
}

var returnLongerString = function(s1, s2, s3) {
  if (s1.length >= s2.length && s1.length >= s3.length) {
    return s1
  } 
  if (s2.length >= s1.length && s2.length >= s3.length) {
    return s2
  }
  return s3
}

// could also use length here
// console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));