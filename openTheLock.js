/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const deadMap = {};
  const visited = {}
  let level = 0;
  deadends.forEach(combo => deadMap[combo] = true);
  const queue = [];
  queue.push('0000');
  while(queue && queue.length) {
    let size = queue.length;
    while (size > 0) {
      const current = queue.shift();
      if (current === target) {
        return level;
      }

      if (deadMap[current]) {
        size--;
        continue;
      }

      for (let i = 0; i < 4; i++) {
        const digit = current[i];
        const up = current.substring(0, i) + (digit === '9' ? '0' : (parseInt(digit) + 1).toString()) + current.substring(i + 1);
        const down = current.substring(0, i) + (digit === '0' ? '9' : (parseInt(digit) - 1).toString()) + current.substring(i + 1);

        if (!visited[up] && !deadMap[up]) {
          queue.push(up);
          visited[up] = true;
        }

        if (!visited[down] && !deadMap[down]) {
          queue.push(down);
          visited[down] = true;
        }
      }
      size--;
    }
    level++;
  }
  return -1;
};

// console.log(openLock(["0201","0101","0102","1212","2002"], "0202"), 6);
console.log(openLock(["0000"], "8888"), 1);
// console.log(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888"), 1);