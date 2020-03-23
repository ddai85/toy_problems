const dutch_flag_sort = function(arr) {
  // iterate through the array
  // first pointer indicates "destination" of the sort
  // second pointer iterates through rest of array and performs a swap anytime the right pointer element greater than left

  for (let left = 0; left < arr.length - 1; left++) {
    for (let right = left + 1; right < arr.length; right++) {
      if (arr[right] < arr[left]) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
      }
    }
  }

  return arr;
};

const testArr = [1, 0, 2, 1, 0];
console.log(dutch_flag_sort(testArr));
