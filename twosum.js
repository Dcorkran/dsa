/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   const map = {};
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     const complement = target - element
//     if (map.hasOwnProperty(complement)) {
//       return [map[complement], index]
//     }
//     map[element] = index
//   }
// };


var twoSum = function(nums, target) {
  const map = new Map;
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
};


console.log(twoSum([2, 7, 11, 15], 9));