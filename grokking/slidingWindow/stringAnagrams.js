/**
 * Given a pattern, find all the anagrams in the given string. Return an array with the starting indices for each anagram
 *
 * @param {string} str
 * @param {string} pattern
 *
 * @return {array}
 */

const find_string_anagrams = function(str, pattern) {
  const result_indexes = [];
  const patternHash = {};
  let match = 0;

  for (let i in pattern) {
    if (!patternHash[pattern[i]]) {
      patternHash[pattern[i]] = 0;
    }
    patternHash[pattern[i]]++;
  }

  let windowStart = 0;
  let windowEnd = 0;

  for (windowEnd; windowEnd < str.length; windowEnd++) {
    //console.log(windowStart, windowEnd, patternHash);
    let currentChr = str[windowEnd];

    if (patternHash.hasOwnProperty(currentChr)) {
      patternHash[currentChr]--;
      if (patternHash[currentChr] === 0) match++;
    }

    if (windowEnd - windowStart > pattern.length - 1) {
      let leftChr = str[windowStart];

      if (patternHash.hasOwnProperty(leftChr)) {
        if (patternHash[leftChr] === 0) match--;
        patternHash[leftChr]++;
      }
      windowStart++;
    }

    if (match === Object.keys(patternHash).length) {
      result_indexes.push(windowStart);
    }
  }

  return result_indexes;
};

console.log(find_string_anagrams("ppqp", "pq"));
console.log(find_string_anagrams("abbcabc", "abc"));
