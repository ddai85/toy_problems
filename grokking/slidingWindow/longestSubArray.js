const length_of_longest_substring = function(arr, k) {
  let windowStart = 0;
  let windowEnd = 0;
  let currentLength = 0;
  let maxLength = 0;
  let zeroesCount = 0;

  for (windowEnd; windowEnd < arr.length; windowEnd++) {
    currentLength++;

    if (arr[windowEnd] === 0) {
      zeroesCount++;
      if (zeroesCount > k) {
        for (windowStart; windowStart <= windowEnd; windowStart++) {
          currentLength--;
          if (arr[windowStart] === 0) {
            zeroesCount--;
            windowStart++;
            break;
          }
        }
      }
    }

    maxLength = Math.max(currentLength, maxLength);
  }

  return maxLength;
};

const testArr = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1];
console.log(length_of_longest_substring(testArr, 2));
