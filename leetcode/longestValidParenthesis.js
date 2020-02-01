/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let longestValid = 0;
  let currentValid = 0;
  let leftCount = 0;

  for (let i in s) {
    if (s[i] === "(") {
      leftCount++;
    }

    if (s[i] === ")") {
      if (leftCount === 0) {
        if (currentValid > longestValid) {
          longestValid = currentValid;
        }
        continue;
      } else {
        leftCount--;
        currentValid += 2;
      }
    }
  }

  return longestValid;
};

// Keep track of open and closed parenthesis...
// Can only add closed parenthesis if there is an existing open
// Add open parenthesis whenever
// At the end, need to make sure any extra open parenthesis are accounted for

console.log(longestValidParentheses(")()())"));
