/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const map = {}
  let ans = []
  if (S.length < 2) {
    ans.push[1]
    return ans;
  }
  for (let i = 0; i < S.length; i++) {
      map[S[i]] = i
  }
  let start = 0
  let end = 0
  for (let i = 0; i < S.length; i++) {
    const element = map[S[i]]
    if (i === end + 1) {
      ans.push(end - start + 1)
      start = i;
    }
    end = Math.max(end, element)
  }
  ans.push(end - start + 1)
  return ans
};


const s = "ababcbacadefegdehijhklij"
console.log(partitionLabels(s))