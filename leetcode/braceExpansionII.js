/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  let finalArr = [];
  const sets = [];

  // iterate through to break up expression into sets (split by commas that are not within braces)
  let setBrace = 0;
  let substring = "";
  for (let i in expression) {
    if (setBrace === 0 && expression[i] === ",") {
      sets.push(substring);
      substring = "";
    } else if (expression[i] === "{") {
      substring += expression[i];
      setBrace++;
    } else if (expression[i] === "}") {
      substring += expression[i];
      setBrace--;
    } else {
      substring += expression[i];
      //console.log(substring);
    }
  }
  sets.push(substring);

  // loop through each set and parse the expression
  let brace = 0;
  for (let j in sets) {
    const concatArrs = [];
    let setString = sets[j];
    let concatString = "";
    for (let k = 0; k < setString.length; k++) {
      if (setString[k] === "{" && brace === 0) {
        if (concatString.length) {
          concatArrs.push([concatString]);
          concatString = "";
        }
        brace++;
        k++;
        do {
          if (setString[k] === "{") brace++;
          if (setString[k] === "}") brace--;
          concatString += setString[k];
          k++;
        } while (brace != 0 && k < setString.length);
        concatString = concatString.slice(0, concatString.length - 1);
        k--;

        concatArrs.push(braceExpansionII(concatString));
        concatString = "";
      } else {
        concatString += setString[k];
      }
    }
    if (concatString.length) concatArrs.push([concatString]);
    sets[j] = concatArrays(concatArrs);
  }
  finalArr = combineSets(sets);

  return finalArr;
};

var concatArrays = function(arrays) {
  let combinedArrs = [];
  for (let x in arrays) {
    if (combinedArrs.length === 0) {
      combinedArrs = arrays[x];
    } else {
      let newArr = [];
      for (let y in combinedArrs) {
        for (let z in arrays[x]) {
          newArr.push(combinedArrs[y] + arrays[x][z]);
        }
      }
      combinedArrs = newArr;
    }
  }
  return combinedArrs;
};

var combineSets = function(arrays) {
  let combinedArrs = [];
  const hashMap = {};

  for (let x in arrays) {
    if (Array.isArray(arrays[x])) {
      for (let y in arrays[x]) {
        hashMap[arrays[x][y]] = true;
      }
    } else {
      hashMap[arrays[x]] = true;
    }
  }

  for (let z in hashMap) {
    combinedArrs.push(z);
  }

  combinedArrs = combinedArrs.sort();

  return combinedArrs;
};

//console.log(braceExpansionII("{a,b}{c,{d,e}}"));
//console.log(braceExpansionII("{{a,z},a{b,c},{ab,z}}"));
//console.log(braceExpansionII("{a,b}c{d,e}f"));
console.log(braceExpansionII("{a{x,ia,o}w,{n,{g,{u,o}},{a,{x,ia,o},w}},er}"));
