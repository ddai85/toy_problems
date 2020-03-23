const triplet_with_smaller_sum = function(arr, target) {
  let count = 0;

  const sortedArr = arr.sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });

  for (let i = 0; i < sortedArr.length - 2; i++) {
    let left = i + 1;
    let right = sortedArr.length - 1;

    while (left < right) {
      let currentSum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      console.log(i, left, right, currentSum);

      if (currentSum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
};

const testArr = [-1, 4, 2, 1, 3];
console.log(triplet_with_smaller_sum(testArr, 5));
