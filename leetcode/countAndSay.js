/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  // check to see if n is within range
  if (n < 1 || n > 30) {
    return null;
  }

  let output = "1";
  let count = 1;

  while (count < n) {
    output = parseNumber(output);

    count++;
  }

  return output;
};

var parseNumber = function(num) {
  let numString = num.toString();
  let output = "";

  let currNum = "";
  let count = 0;
  for (let i in numString) {
    if (numString[i] === currNum) {
      count++;
    } else {
      if (count) {
        output += count.toString() + currNum;
      }
      currNum = numString[i];
      count = 1;
    }
  }
  output += count.toString() + currNum;
  return output;
};

console.log(countAndSay(6));
