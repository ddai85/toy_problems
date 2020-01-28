/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let isDuplicateFound = true;

  while (isDuplicateFound) {
    // iterate from beginning of the string
    for (let i in s) {
      // for each element in the string, check if the next k letters are a match
      let match = false;
      for (let j = 0; j < k; j++) {
        const qIndex = parseInt(i) + parseInt(j);
        if (s[i] === s[qIndex]) {
          match = true;
          continue;
        } else {
          match = false;
          break;
        }
      }

      if (match) {
        // cut the duplicates out of the string
        s = s.slice(0, i) + s.slice(parseInt(i) + parseInt(k));
        break;
      } else if (i == s.length - 1) {
        // if on the last iteration of the for loop and no match is found, flag isDuplicateFound as false
        isDuplicateFound = false;
      }
    }
  }

  return s;
};

const test = removeDuplicates("pbbcggttciiippooaais", 2);
console.log(test);

// Naive approach is to iterate through the string and upon finding duplicate, cut out the duplicate
// Keep iterating until no duplicate is found
