/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  const stackCollection = [];

  for (let i in nums) {
    console.log(i, stackCollection);
    // If stack is empty, populate it
    if (!stackCollection.length) {
      stackCollection.push([nums[i]]);
      continue;
    }

    // Iterate through all stacks and check to see if element at top of each stack is greater than current element
    for (let j in stackCollection) {
      const stack = stackCollection[j];
      const lastElement = stack[stack.length - 1];
      if (nums[i] > lastElement) {
        stack.push(nums[i]);

        if (stack.length === 3) return true;
        continue;
      }

      if (nums[i] === lastElement) continue;

      if (nums[i] < lastElement) {
        if (stack.length === 1) {
          stack.pop();
          stack.push(nums[i]);
        }

        if (stack.length === 2) {
          if (nums[i] <= stack[0]) {
            stackCollection.push([nums[i]]);
          } else {
            stack.pop();
            stack.push(nums[i]);
          }
        }
      }
    }
  }

  return false;
};

// Create a stack
// If element at the top f

console.log(increasingTriplet([2, 5, 3, 4, 5]));
