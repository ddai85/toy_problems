const longest_substring_with_k_distinct = function(str, k) {
  let longestSubstring = 0;
  let windowStart = 0;
  let windowEnd = 0;
  let currentLength = 0;
  let currentHash = {};

  for (windowEnd; windowEnd < str.length; windowEnd++) {
    if (currentHash.hasOwnProperty(str[windowEnd])) {
      currentHash[str[windowEnd]]++;
    } else {
      currentHash[str[windowEnd]] = 1;
    }
    currentLength++;

    if (Object.keys(currentHash).length <= k) {
      longestSubstring = Math.max(longestSubstring, currentLength);
    } else {
      for (windowStart; windowStart <= windowEnd; windowStart++) {
        currentHash[str[windowStart]]--;
        if (currentHash[str[windowStart]] === 0) {
          delete currentHash[str[windowStart]];
        }
        currentLength--;
      }
    }
  }

  return longestSubstring;
};

const testString = "araaci";
console.log(longest_substring_with_k_distinct(testString, 2));
