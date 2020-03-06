const solution = n => {
  const memo = {};

  const recurse = function(n) {
    if (memo[n]) return memo[n];

    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;

    let jump1 = recurse(n - 1);
    let jump2 = recurse(n - 2);
    let jump3 = recurse(n - 3);

    memo[n - 1] = jump1;
    memo[n - 2] = jump2;
    memo[n - 3] = jump3;

    return jump1 + jump2 + jump3;
  };

  return recurse(n);
};

console.log(solution(52));

// brute force solution, recurse through all possibilities

// after each move, there's only N steps left
// recurse all 3 different types of steps (1, 2, 3)
// memoize result of N
