/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const array = new Array(n).fill(null).map(() => new Array(n).fill(null));
  array[0][0] = 1;

  let totalNum = n * n;
  let index = 2;
  let direction = "right";
  let lastCoordinates = [0, 0];

  const findNextSpot = function(index) {
    let nextCoordinates = lastCoordinates;
    let tempCoordinates = nextCoordinates.slice();
    switch (direction) {
      case "right":
        tempCoordinates[1]++;
        if (
          tempCoordinates[1] < n &&
          array[tempCoordinates[0]][tempCoordinates[1]] === null
        ) {
          nextCoordinates[1]++;
        } else {
          direction = "down";
          return findNextSpot(index);
        }
        break;
      case "down":
        tempCoordinates[0]++;
        if (
          tempCoordinates[0] < n &&
          array[tempCoordinates[0]][tempCoordinates[1]] === null
        ) {
          nextCoordinates[0]++;
        } else {
          direction = "left";
          return findNextSpot(index);
        }
        break;
      case "left":
        tempCoordinates[1]--;
        if (
          tempCoordinates[1] >= 0 &&
          array[tempCoordinates[0]][tempCoordinates[1]] === null
        ) {
          nextCoordinates[1]--;
        } else {
          direction = "up";
          return findNextSpot(index);
        }
        break;
      case "up":
        tempCoordinates[0]--;
        if (
          tempCoordinates[0] >= 0 &&
          array[tempCoordinates[0]][tempCoordinates[1]] === null
        ) {
          nextCoordinates[0]--;
        } else {
          direction = "right";
          return findNextSpot(index);
        }
        break;
    }
    return nextCoordinates;
  };

  while (index <= totalNum) {
    const nextCoordinates = findNextSpot(index);
    array[nextCoordinates[0]][nextCoordinates[1]] = index;
    index++;
  }

  return array;
};

console.log(generateMatrix(5));
