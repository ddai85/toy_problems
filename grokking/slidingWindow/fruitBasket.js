const fruits_into_baskets = function(fruits) {
  let longestSubstring = 0;
  let windowStart = 0;
  let windowEnd = 0;
  let currentLength = 0;
  let currentHash = {};

  for (windowEnd; windowEnd < fruits.length; windowEnd++) {
    if (currentHash.hasOwnProperty(fruits[windowEnd])) {
      currentHash[fruits[windowEnd]]++;
    } else {
      currentHash[fruits[windowEnd]] = 1;
    }
    currentLength++;
    if (Object.keys(currentHash).length <= 2) {
      longestSubstring = Math.max(longestSubstring, currentLength);
    } else {
      for (windowStart; windowStart <= windowEnd; windowStart++) {
        currentHash[fruits[windowStart]]--;
        currentLength--;
        if (currentHash[fruits[windowStart]] === 0) {
          delete currentHash[fruits[windowStart]];
          break;
        }
      }
    }
  }

  return longestSubstring;
};

const fruits = ["A", "B", "C", "B", "B", "C"];
console.log(fruits_into_baskets(fruits));
