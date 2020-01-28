/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let firstRobbed = recursiveRob(nums.slice(0, nums.length - 1));
  let secondRobbed = recursiveRob(nums.slice(1));
  let thirdRobbed = recursiveRob(nums.slice(2));

  if (firstRobbed > secondRobbed) {
    return firstRobbed > thirdRobbed ? firstRobbed : thirdRobbed;
  } else {
    return secondRobbed > thirdRobbed ? secondRobbed : thirdRobbed;
  }
};

var recursiveRob = function(nums) {
  //console.log(nums);
  if (nums.length === 0) {
    //console.log("base case 0");
    return 0;
  }

  if (nums.length === 1) {
    //console.log("base case 1");
    return nums[0];
  }

  if (nums.length === 2) {
    //console.log("base case 2");
    return nums[0] > nums[1] ? nums[0] : nums[1];
  }

  if (nums.length === 3) {
    //console.log("base case 3");
    let firstLast = nums[0] + nums[2];
    let middle = nums[1];
    return firstLast > middle ? firstLast : middle;
  }

  if (nums.length === 4) {
    //console.log("base case 4");
    let skipOne = nums[0] + nums[2];
    let skipTwo = nums[0] + nums[3];

    return skipOne > skipTwo ? skipOne : skipTwo;
  }

  //console.log("skipOne");
  let skipOne = nums[0] + recursiveRob(nums.slice(2));
  //console.log("skipTwo");
  let skipTwo = nums[0] + recursiveRob(nums.slice(3));

  return skipOne > skipTwo ? skipOne : skipTwo;
};

// Naive approach is to try all iterations using a different start
// Some sort of recursion could be useful
// Probably involves some sort of back tracking since you want to check for all possibilities (situations where it's beneficial to skip over 2 houses)

// minimum required to skip over 1
// sometimes beneficial to skip over 2
// never beneficial to skip over 3 (because you can rob one in the middle)

let test = rob([
  226,
  174,
  214,
  16,
  218,
  48,
  153,
  131,
  128,
  17,
  157,
  142,
  88,
  43,
  37,
  157,
  43,
  221,
  191,
  68,
  206,
  23,
  225,
  82,
  54,
  118,
  111,
  46,
  80,
  49,
  245,
  63,
  25,
  194,
  72,
  80,
  143,
  55,
  209,
  18,
  55,
  122,
  65,
  66,
  177,
  101,
  63,
  201,
  172,
  130,
  103,
  225,
  142,
  46,
  86,
  185,
  62,
  138,
  212,
  192,
  125,
  77,
  223,
  188,
  99
]);
console.log(test);
