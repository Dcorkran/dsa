/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === "") return true;
  const openParens = ['[', '{', '(']
  const closedParens = [']', '}', ')']
  const openMap = new Map();
  const closedMap = new Map();
  openParens.forEach((paren, i) => openMap.set(paren, closedParens[i]));
  closedParens.forEach((paren, i) => closedMap.set(paren, openParens[i]));
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (closedMap.has(s[i])) {
      const element = stack.pop();
      if (closedMap.get(s[i]) !== element) {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }
  console.log(stack);
  if (stack.length) {
    return false
  }
  return true
};

// console.log(isValid("()[]{}"), true);
// console.log(isValid("([]{})"), true);
console.log(isValid("(({})}"), false);