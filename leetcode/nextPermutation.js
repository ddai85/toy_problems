/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      // swap nums[i] with the next greatest
      for (let j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          swapValues(i, j, nums);
          // reverse the rest of the array
          const subArray = nums.slice(i + 1);
          subArray.reverse();
          nums.splice(i + 1, subArray.length);
          subArray.forEach(e => {
            nums.push(e);
          });
          return;
        }
      }
    }
  }
  nums.reverse();
  return;
};

var swapValues = function(index1, index2, array) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const test = [1, 3, 2];
nextPermutation(test);
console.log("result", test);

// naive approach is to go through all iterations and find one that is the next largest
