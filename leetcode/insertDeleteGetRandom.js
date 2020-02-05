/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.set = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.set[val]) {
    return false;
  } else {
    this.set[val] = true;
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.set[val]) {
    delete this.set[val];
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let setSize = Object.keys(this.set).length;
  let randomIndex = Math.floor(Math.random() * setSize);
  let randomKey = Object.keys(this.set)[randomIndex];
  return randomKey;
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const set = new RandomizedSet();
console.log(set.insert(3));
console.log(set.insert("s"));
console.log(set.remove(4));
console.log(set.remove(3));
console.log(set.insert(2));
console.log(set.getRandom());
