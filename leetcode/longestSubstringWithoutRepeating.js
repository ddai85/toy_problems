const lengthOfLongestSubstring = function(string) {
  let count = 0;
  const charHash = {};

  let left = 0;
  let right = 0;

  while (right <= string.length) {
    if (hasDuplicates(charHash)) {
      let leftChar = string[left];

      if (charHash[leftChar] === 1) {
        delete charHash[leftChar];
      } else {
        charHash[leftChar]--;
      }
      left++;
    } else {
      if (Object.keys(charHash).length > count) {
        count = Object.keys(charHash).length;
      }

      let rightChar = string[right];

      if (charHash.hasOwnProperty(rightChar)) {
        charHash[rightChar]++;
      } else {
        charHash[rightChar] = 1;
      }

      right++;
    }
  }

  return count;
};

function hasDuplicates(charHash) {
  for (let i in charHash) {
    if (charHash[i] > 1) {
      return true;
    }
  }

  return false;
}

const testString = "pwwkew";

console.log(lengthOfLongestSubstring(testString));
