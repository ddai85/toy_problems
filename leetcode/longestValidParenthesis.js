/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let longestValid = 0;
  let stack = "";

  let left = 0;
  let substring = "";

  for (let i in s) {
    if (s[i] === "(") {
      left++;
      substring += "(";
    } else if (s[i] === ")") {
      // If there are no left parenthesis, reset stack
      if (left === 0) {
        if (stack.length > longestValid) {
          longestValid = stack.length;
        }
        stack = "";
        substring = "";
      } else {
        // Decrement left counter, add to substring
        left--;
        substring += ")";

        // If parenthesis is complete-- add to stack
        if (left === 0) {
          stack += substring;
          substring = "";
        }
      }
    }
  }

  if (stack.length > longestValid) {
    longestValid = stack.length;
  }

  return longestValid;
};

// Keep track of open and closed parenthesis...
// Can only add closed parenthesis if there is an existing open
// Add open parenthesis whenever
// At the end, need to make sure any extra open parenthesis are accounted for

console.log(longestValidParentheses("(()"));
