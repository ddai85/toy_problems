/**
 * Given a string, find the smallest substring that includes all characters within the pattern
 *
 * @param {string} str
 * @param {string} pattern
 *
 * @return {string}
 */

const find_substring = function(str, pattern) {
  let substringCount = Infinity;
  let substring = "";
  let matchCount = 0;

  const patternHash = {};

  for (let i in pattern) {
    if (!patternHash.hasOwnProperty(pattern[i])) {
      patternHash[pattern[i]] = 0;
    }
    patternHash[pattern[i]]++;
  }

  let windowStart = 0;
  let windowEnd = 0;

  for (windowEnd; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];

    if (patternHash.hasOwnProperty(rightChar)) {
      patternHash[rightChar]--;
      if (patternHash[rightChar] === 0) {
        matchCount++;
      }
    } else {
      continue;
    }

    if (matchCount === Object.keys(patternHash).length) {
      for (windowStart; windowStart <= windowEnd; windowStart++) {
        let leftChar = str[windowStart];

        if (patternHash.hasOwnProperty(leftChar)) {
          patternHash[leftChar]++;
          if (patternHash[leftChar] === 1) {
            matchCount--;
            break;
          }
        }
      }
      let currSubstring = str.substring(windowStart, windowEnd + 1);
      if (currSubstring.length < substringCount) {
        substring = currSubstring;
        substringCount = substring.length;
      }
    }
  }

  return substring;
};
console.log(find_substring("aabdec", "abc"));
console.log(find_substring("aabdabcb", "daabc"));
console.log(find_substring("adcad", "abc"));
