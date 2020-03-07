/**
 * Test to see if a permutation of the pattern exists within given str
 *
 * @param {string} str
 * @param {string} pattern
 *
 * @return {boolean}
 */

const find_permutation = function(str, pattern) {
  const patternHash = {};

  for (let i in pattern) {
    if (patternHash[pattern[i]]) {
      patternHash[pattern[i]]++;
    } else {
      patternHash[pattern[i]] = 1;
    }
  }

  // Make a copy of the patternHash so that the original can be used to reset the working one
  let workingHash = Object.assign({}, patternHash);

  let windowStart = 0;
  let windowEnd = 0;

  for (windowEnd; windowEnd < str.length; windowEnd++) {
    let currentCharacter = str[windowEnd];
    if (!workingHash.hasOwnProperty(currentCharacter)) {
      windowStart = windowEnd + 1;
      workingHash = Object.assign({}, patternHash);
      continue;
    } else {
      if (workingHash[currentCharacter] > 0) {
        workingHash[currentCharacter]--;

        // Check to see if patternHash is full
        let matchFound = true;
        for (let x in workingHash) {
          if (workingHash[x] > 0) {
            matchFound = false;
          }
        }

        if (matchFound) return true;
      } else if (workingHash[currentCharacter] === 0) {
        for (windowStart; windowStart < windowEnd; windowStart++) {
          let startCharacter = str[windowStart];
          if (currentCharacter === startCharacter) {
            workingHash[currentCharacter]++;
            break;
          }
        }
      }
    }
  }
  return false;
};

const testString = "aaacb";
const pattern = "abc";
console.log(find_permutation(testString, pattern));
