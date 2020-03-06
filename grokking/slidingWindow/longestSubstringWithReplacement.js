const length_of_longest_substring = function(str, k) {
  let windowStart = 0;
  let windowEnd = 0;
  let currentLength = 0;
  const hashTracker = {};
  let maxLength = 0;

  for (windowEnd; windowEnd < str.length; windowEnd++) {
    let character = str[windowEnd];
    currentLength++;

    if (hashTracker[character]) {
      hashTracker[character]++;
    } else {
      hashTracker[character] = 1;
    }

    if (
      Object.keys(hashTracker).length > 2 ||
      !testMaxCharacters(hashTracker, k)
    ) {
      for (windowStart; windowStart <= windowEnd; windowStart++) {
        let startCharacter = str[windowStart];
        currentLength--;
        hashTracker[startCharacter]--;

        if (hashTracker[startCharacter] === 0) {
          delete hashTracker[startCharacter];
        }

        if (Object.keys(hashTracker).length <= 2) {
          if (testMaxCharacters(hashTracker, k)) break;
        }
      }
    } else {
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};

const testMaxCharacters = function(hashmap, k) {
  let counter = 0;

  for (let i in hashmap) {
    if (hashmap[i] > k) counter++;
  }

  return counter <= 1 ? true : false;
};

const testString = "aabccbb";
console.log(length_of_longest_substring(testString, 2));
