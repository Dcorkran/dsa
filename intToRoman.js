var intToRoman = function(num) {
  return recursive('', num, 1)
};

const recursive = function(ans, num, level) {
  if(num < 1) { 
    return ans 
  }
  const digit = num % 10;
  if (level === 1) { 
    ans = handleConversion(digit, 'I', 'V', 'X') + ans
  } else if (level === 2) {
    ans = handleConversion(digit, 'X', 'L', 'C') + ans
  } else if (level === 3) {
    ans = handleConversion(digit, 'C', 'D', 'M') + ans
  } else {
    ans = handleConversion(digit, 'M') + ans  
  }
  return recursive(ans, Math.floor(num / 10), level + 1)   
}

const handleConversion = function(digit, low, mid, high) {
  if (!mid) {
    let temp = ''
    for (let i = 0; i < digit; i++) {
      temp += low
    }
    return temp
  }

  if (digit === 4) {
    return `${low}${mid}`
  } else if (digit === 9) {
    return `${low}${high}`
  } else if (digit === 5) {
    return mid
  } else if (digit > 5) {
    let temp = mid
    for (let i = 0; i < digit - 5; i++) {
      temp += low
    }
    return temp
  } else {
    let temp = ''
    for (let i = 0; i < digit; i++) {
      temp += low
    }
    return temp
  }
}