/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums.length) {
    return 0;
  }

  nums.sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });
  console.log(nums);
  let longest = 1;
  let curr = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    if (nums[i] === nums[i - 1] + 1) {
      curr++;
      if (curr > longest) {
        longest = curr;
      }
    } else {
      curr = 1;
    }
  }

  return longest;
};

// naive approach
// sort the array
// iterate through and keep track of longest

const test = longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);

console.log(test);
