/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const memo = {};

  const recursiveFunc = function(s, index) {
    if (memo[index]) {
      return memo[index];
    }

    if (index === s.length) {
      memo[index] = 1;
      return 1;
    }

    let ways = 0;

    let oneDigit = parseInt(s[index]);
    if (0 < oneDigit && oneDigit < 10) {
      ways += recursiveFunc(s, index + 1);
    }

    let twoDigit = parseInt(s[index] + s[index + 1]);
    if (index + 2 <= s.length && 10 <= twoDigit && twoDigit <= 26) {
      ways += recursiveFunc(s, index + 2);
    }

    memo[index] = ways;

    return ways;
  };

  return recursiveFunc(s, 0);
};

console.log(numDecodings("226"));
console.log(
  numDecodings(
    "9371597631128776948387197132267188677349946742344217846154932859125134924241649584251978418763151253"
  )
);
