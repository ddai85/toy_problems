/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let lettersObj = {};

  let longestCount = 0;
  let currentCount = 0;

  while (s.length > 0) {
    for (let i = 0; i < s.length; i++) {
      if (lettersObj.hasOwnProperty(s[i])) {
        if (currentCount > longestCount) {
          longestCount = currentCount;
        }
        let index = s.indexOf(s[i]);
        s = s.substr(index + 1);
        currentCount = 0;
        lettersObj = {};
        break;
      }
      lettersObj[s[i]] = true;
      currentCount++;

      if (i === s.length - 1) {
        return currentCount > longestCount ? currentCount : longestCount;
      }
    }
  }
};

console.log(lengthOfLongestSubstring("dvdf"));
