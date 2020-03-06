const smallest_subarray_with_given_sum = function(s, arr) {
  // TODO: Write your code here
  let windowStart = 0;
  let minSize = arr.length + 1;
  let subArraySize = 0;
  let subArraySum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    subArraySum += arr[windowEnd];
    subArraySize++;

    for (let j = windowStart; j <= windowEnd; j++) {
      if (subArraySum >= s) {
        minSize = Math.min(minSize, subArraySize);
      } else {
        break;
      }

      subArraySum -= arr[windowStart];
      subArraySize--;
      windowStart++;
    }
  }

  return minSize === arr.length + 1 ? 0 : minSize;
};

const testArray = [2, 1, 5, 2, 3, 2];
console.log(smallest_subarray_with_given_sum(7, testArray));
