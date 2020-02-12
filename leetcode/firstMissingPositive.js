/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (!nums.length) return 1;

  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 &&
      nums[i] != i &&
      nums[i] <= nums.length &&
      nums[i] != nums[nums[i]]
    ) {
      let temp = nums[nums[i]];
      nums[nums[i]] = nums[i];
      nums[i] = temp;
    }
  }
  console.log(nums);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != i) return i;
  }
  return nums.length;
};

const input = [1];
console.log(firstMissingPositive(input));
