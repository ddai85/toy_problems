/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const memo = {};
  const recursiveFunc = function(x, y) {
    let index = x + "_" + y;
    if (memo[index]) return memo[index];

    if (x === m && y === n) return 1;

    if (x > m || y > n) return 0;

    let ways = 0;

    ways += recursiveFunc(x + 1, y);
    ways += recursiveFunc(x, y + 1);

    memo[index] = ways;
    return ways;
  };

  return recursiveFunc(1, 1);
};

console.log(uniquePaths(7, 3));
