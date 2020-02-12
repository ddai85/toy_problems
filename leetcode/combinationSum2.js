/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const solutionSet = {};
  const solution = [];

  candidates.sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });

  const depthFirst = function(cIndex, target, path) {
    if (target === 0) {
      const solutionKey = path.join("");
      if (solutionSet[solutionKey]) return;
      solutionSet[solutionKey] = true;
      solution.push([...path]);
      return;
    }

    for (let i = cIndex; i < candidates.length; i++) {
      let value = candidates[i];
      if (target - value < 0) {
        break;
      }

      path.push(value);
      depthFirst(i + 1, target - value, path);
      path.pop(value);
    }
  };

  depthFirst(0, target, []);

  return solution;
};

const candidates = [10, 1, 2, 7, 6, 1, 5];

console.log(combinationSum2(candidates, 8));
