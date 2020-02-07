/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  if (s.length === 1) return 1;
  if (s.length === 0) return 0;

  const memo = new Array(s.length).fill(0).map(() => {
    return new Array(s.length).fill(null);
  });

  var recursiveLoop = function(i, j) {
    if (i === j) return 1;
    if (i > j) return 0;

    if (memo[i][j] != null) return memo[i][j];

    memo[i][j] = Math.max(
      s[i] === s[j] ? 2 + recursiveLoop(i + 1, j - 1) : 0,
      recursiveLoop(i + 1, j),
      recursiveLoop(i, j - 1)
    );

    return memo[i][j];
  };

  let i = 0;
  let j = s.length - 1;
  return recursiveLoop(i, j);
};

console.log(
  longestPalindromeSubseq(
    "euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew"
  )
);
