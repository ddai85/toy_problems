/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  const A1 = A[0];
  const B1 = B[0];
  const dominosCount = A.length;

  let ACount = [0, 0];
  let BCount = [0, 0];

  for (let i = 0; i < dominosCount; i++) {
    if (ACount != null) {
      if (A[i] === A1) {
        ACount[0]++;
      }
      if (B[i] === A1) {
        ACount[1]++;
      }
      if (A[i] != A1 && B[i] != A1) {
        ACount = null;
      }
    }

    if (BCount != null) {
      if (A[i] === B1) {
        BCount[0]++;
      }
      if (B[i] === B1) {
        BCount[1]++;
      }
      if (A[i] != B1 && B[i] != B1) {
        BCount = null;
      }
    }
  }
  if (ACount === null && BCount === null) {
    return -1;
  }

  let ASwap = dominosCount;
  let BSwap = dominosCount;
  if (ACount != null) {
    if (ACount[0] > ACount[1]) {
      ASwap = dominosCount - ACount[0];
    } else {
      ASwap = dominosCount - ACount[1];
    }
  }
  if (BCount != null) {
    if (BCount[0] > BCount[1]) {
      BSwap = dominosCount - BCount[0];
    } else {
      BSwap = dominosCount - BCount[1];
    }
  }

  return ASwap < BSwap ? ASwap : BSwap;
};

// check the first domino and get the A and B values, all other dominos must have one of those values
// iterate through the rest of all the dominos to check if they have A1 or B1, and if they do, check to see if they are in A position or B position
const A = [2, 1, 2, 4, 2, 2];

const B = [5, 2, 6, 2, 3, 2];
console.log(minDominoRotations(A, B));
