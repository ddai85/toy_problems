const make_squares = function(arr) {
  squares = [];

  let firstNonNegative = 0;

  while (firstNonNegative < arr.length) {
    if (arr[firstNonNegative] >= 0) {
      break;
    }

    firstNonNegative++;
  }

  let rightPointer = firstNonNegative;
  let leftPointer = firstNonNegative - 1;

  while (leftPointer >= 0 || rightPointer < arr.length) {
    console.log(leftPointer, rightPointer, squares);
    if (leftPointer < 0) {
      squares.push(Math.pow(arr[rightPointer], 2));
      rightPointer++;
    } else if (rightPointer >= arr.length) {
      squares.push(Math.pow(arr[leftPointer], 2));
      leftPointer--;
    } else {
      let leftSquared = Math.pow(arr[leftPointer], 2);
      let rightSquared = Math.pow(arr[rightPointer], 2);

      if (leftSquared < rightSquared) {
        squares.push(leftSquared);
        leftPointer--;
      } else {
        squares.push(rightSquared);
        rightPointer++;
      }
    }
  }
  return squares;
};

const testInput = [-3, -1, 0, 1, 2];
console.log(make_squares(testInput));
