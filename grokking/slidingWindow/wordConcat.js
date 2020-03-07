/**
 * Words in the "words" array can be concat in any order. Find if they are in the "str" and output list of starting indices
 *
 * @param {string} str
 * @param {array} words
 *
 * @return {array}
 */

const find_word_concatenation = function(str, words) {
  const result_indices = [];
  const wordLength = words[0].length;
  const wordHash = {};

  for (let i in words) {
    let word = words[i];

    if (!wordHash.hasOwnProperty(word)) {
      wordHash[word] = 0;
    }
    wordHash[word]++;
  }

  let windowStart = 0;
  let windowEnd = 0;
  let matchCount = 0;

  for (windowEnd; windowEnd < str.length; windowEnd += wordLength) {
    //console.log(windowStart, windowEnd, wordHash);
    let word = str.substring(windowEnd, windowEnd + wordLength);

    if (wordHash.hasOwnProperty(word)) {
      wordHash[word]--;
      if (wordHash[word] === 0) {
        matchCount++;
      }
    }

    if (windowEnd - windowStart >= wordLength * words.length) {
      let leftWord = str.substring(windowStart, windowStart + wordLength);

      if (wordHash.hasOwnProperty(leftWord)) {
        wordHash[leftWord]++;
        if (wordHash[leftWord] === 1) {
          matchCount--;
        }
      }
      windowStart += wordLength;
    }
    if (matchCount === Object.keys(wordHash).length) {
      result_indices.push(windowStart);
    }
  }

  return result_indices;
};

console.log(find_word_concatenation("catfoxcat", ["cat", "fox"]));
console.log(find_word_concatenation("catcatfoxfox", ["cat", "fox"]));
