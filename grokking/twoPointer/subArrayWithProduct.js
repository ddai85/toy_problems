const find_subarrays = function(arr, target) {
  const result = [];

  // two pointer, sort of like sliding window
  // both start at 0
  // move right pointer forward until product exceeds target
  // move both pointers back to left pointer

  let left = 0;
  let right = 0;

  while (left < arr.length) {
    // if both are the same index, then check to see if element is greater than target
    // move right pointer forward
    if (left === right) {
      if (arr[left] < target) {
        result.push([arr[left]]);
        right++;
        continue;
      }
    }

    let product = 1;
    const subArray = [];
    for (let i = left; i <= right; i++) {
      product *= arr[i];
      subArray.push(arr[i]);
    }

    if (product < target) {
      result.push(subArray);
      right++;
    } else {
      left++;
      right = left;
    }
  }

  return result;
};

const testArr = [8, 2, 6, 5];
console.log(find_subarrays(testArr, 50));
