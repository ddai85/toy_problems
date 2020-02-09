/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s.length === 0) {
    return 0;
  }

  if (s[0] === "0") {
    return null;
  }

  if (s.length === 1 && s !== "0") {
    return 1;
  }

  let nextTwo = s[0] + s[1];

  if (parseInt(nextTwo) > 26 || s[1] === "0") {
    let remainder = numDecodings(s.substring(2));
    if (remainder === null) {
      return 0;
    } else {
      return 1 + remainder;
    }
  } else {
    let remainderFirst = numDecodings(s.substring(1));
    let remainderSecond = numDecodings(s.substring(2));

    let decodeFirst = remainderFirst === null ? 0 : 1 + remainderFirst;
    let decodeSecond = remainderSecond === null ? 0 : 2 + remainderSecond;
    return Math.max(decodeFirst, decodeSecond);
  }
};

console.log(numDecodings("101"));
