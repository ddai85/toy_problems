/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // If number is negative, return false
  if (x < 0) {
    return false;
  }

  if (x % 10 === 0 && x !== 0) {
    return false;
  }

  let revertedNum = 0;

  while (x > revertedNum) {
    revertedNum = revertedNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === revertedNum || x === Math.floor(revertedNum / 10);
};

isPalindrome(12221);
