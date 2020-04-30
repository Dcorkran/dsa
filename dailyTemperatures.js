/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [];
  const ans = []
  for (let i = 0; i < T.length; i++) {
      // let days = 0;
      // if (!T[i + 1]) ans.push(0)
      stack.push(i + 1)
      while (stack && stack.length) {
          const compIndex = stack.pop();
          if (compIndex > T.length - 1) {
            ans.push(0);
          }
          else if (T[compIndex] > T[i]) {
            ans.push(compIndex - i);
          } else {
            stack.push(compIndex + 1);
          }
      }
  }
  return ans
};


console.log(dailyTemperatures([73,74,75,71,69,72,76,73]).length);