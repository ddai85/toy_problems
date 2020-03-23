/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  let finalArr = [];

  const hash = {};
  const keysArr = [];

  for (let i in points) {
    let sum = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2);

    if (hash[sum]) {
      hash[sum].push(points[i]);
    } else {
      hash[sum] = [points[i]];
      keysArr.push(sum);
    }
  }

  keysArr.sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });

  let keyIndex = 0;
  while (finalArr.length < K) {
    let key = keysArr[keyIndex];
    if (hash[key].length === 0) {
      keyIndex++;
    } else {
      finalArr.push(hash[key].pop());
    }
  }

  return finalArr;
};

const testArr = [
  [3, 3],
  [5, -1],
  [-2, 4]
];

console.log(kClosest(testArr, 2));
