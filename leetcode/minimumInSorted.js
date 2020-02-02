/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  const midpoint = Math.floor(nums.length / 2);

  const lowerArr = nums.slice(0, midpoint);
  const upperArr = nums.slice(midpoint);

  if (lowerArr[0] > lowerArr[lowerArr.length - 1]) {
    return findMin(lowerArr);
  } else {
    return findMin(upperArr);
  }
};

// O(LogN) approach
// Treat as a binary search still-- but instead of comparing midpoint-- compare the first and last element to see which side the minimum is

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
