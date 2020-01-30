/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  //console.log(nums);
  if (nums.length === 1) {
    return [nums];
  }

  const permutations = [];
  const trackDuplicates = {};

  for (let i in nums) {
    const firstElement = nums[i];
    if (trackDuplicates[firstElement]) {
      continue;
    } else {
      trackDuplicates[firstElement] = 1;
    }

    nums.splice(i, 1);
    const shortenedArr = permuteUnique(nums.slice());
    shortenedArr.forEach(permutation => {
      permutation.unshift(firstElement);
      permutations.push(permutation);
    });
    nums.splice(i, 0, firstElement);
  }

  return permutations;
};

const testArr = [1, 1, 2];

console.log(permuteUnique(testArr));
// naive approach - iterate through all permutations and store as keys in a hashtable
// build the output array from the hash table
// optimize to skip over

// to get all permutations-- use a recursive approach to get permutations of smaller elements
