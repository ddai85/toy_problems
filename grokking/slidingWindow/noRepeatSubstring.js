const non_repeat_substring = function(str) {
  let windowStart = 0;
  let windowEnd = 0;
  let currentLength = 0;
  const hashTracker = {};
  let maxLength = 0;

  for (windowEnd; windowEnd < str.length; windowEnd++) {
    let character = str[windowEnd];
    currentLength++;

    if (!hashTracker[character]) {
      hashTracker[character] = true;
      maxLength = Math.max(currentLength, maxLength);
    } else {
      for (windowStart; windowStart <= windowEnd; windowStart++) {
        let startCharacter = str[windowStart];
        currentLength--;

        if (character === startCharacter) {
          delete hashTracker[character];
          windowStart++;
          break;
        }
      }
    }
  }

  return maxLength;
};

const testString = "aabccbb";
console.log(non_repeat_substring(testString));
