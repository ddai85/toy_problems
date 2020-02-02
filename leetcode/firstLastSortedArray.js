/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const positions = [-1, -1];

  var binarySearch = function(nums, target, offset) {
    let midpoint = Math.floor(nums.length / 2);
    if (!midpoint && nums[midpoint] != target) {
      return null;
    }
    if (nums[midpoint] === target) {
      return midpoint + offset;
    } else if (target < nums[midpoint]) {
      const lowerNums = nums.slice(0, midpoint);
      return binarySearch(lowerNums, target, offset);
    } else {
      const upperNums = nums.slice(midpoint);
      offset += nums.length - upperNums.length;
      return binarySearch(upperNums, target, offset);
    }
  };

  let targetIndex = binarySearch(nums, target, 0);
  if (targetIndex === null) return positions;
  // find lower bound
  for (let i = targetIndex; i >= 0; i--) {
    if (nums[i] === target) {
      positions[0] = i;
    }
  }

  // find upper bound
  for (let i = targetIndex; i < nums.length; i++) {
    if (nums[i] === target) {
      positions[1] = i;
    }
  }

  return positions;
};

// use binary search to find target value
// then search downwards and upwards to find the first and last position

console.log(searchRange([1, 3], 1));
