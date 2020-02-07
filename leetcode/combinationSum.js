/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort();

  const solutionSets = {};

  const recursive = function(set) {
    let setSum = 0;

    set.forEach(e => {
      setSum += e;
    });

    if (setSum === target) {
      return set;
    } else if (setSum > target) {
      return null;
    } else if (setSum < target) {
      for (let i in candidates) {
        let tempSet = set.slice();
        tempSet.push(candidates[i]);
        let result = recursive(tempSet);

        if (result != null) {
          result.sort();
          let key = result.toString();
          solutionSets[key] = result;
        }
      }
    }
  };

  recursive([]);

  const finalArr = [];
  for (let x in solutionSets) {
    finalArr.push(solutionSets[x]);
  }

  return finalArr;
};

const candidates = [2, 3, 5];

console.log(combinationSum(candidates, 8));
