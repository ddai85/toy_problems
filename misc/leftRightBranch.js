const solution = arr => {
  // Need to sum all the numbers on each side of the branch
  // Ignore first value. left branch will include indexes 1, 3, 4, 7, 8, 9, 10
  // Each level the number of nodes per side of the branch will double
  let leftSum = 0;
  let rightSum = 0;
  let nodesPerLevel = 2;
  let levelIndex = 1;
  let nodeIndex = 1;
  let isLeftBranch = true;

  while (nodeIndex < arr.length) {
    if (levelIndex > nodesPerLevel) {
      nodesPerLevel *= 2;
      levelIndex = 1;
      isLeftBranch = !isLeftBranch;
    }

    if (levelIndex === nodesPerLevel / 2 + 1) {
      isLeftBranch = !isLeftBranch;
    }

    if (arr[nodeIndex] === -1) {
      levelIndex++;
      nodeIndex++;
      continue;
    }

    if (isLeftBranch) {
      leftSum += arr[nodeIndex];
    } else {
      rightSum += arr[nodeIndex];
    }

    levelIndex++;
    nodeIndex++;
  }

  if (leftSum === rightSum) {
    return "";
  } else {
    return leftSum > rightSum ? "Left" : "Right";
  }
};

const testArr = [1, 10, 5, 1, 0, 6];
console.log(solution(testArr));
