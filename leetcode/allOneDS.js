/**
 * Initialize your data structure here.
 */
var AllOne = function() {
  this.store = {};

  this.minMaxStore = [new Array()];
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  if (this.store[key]) {
    const oldValue = this.store[key];

    // remove key from min/max store
    const storeArray = this.minMaxStore[oldValue];
    storeArray.splice(storeArray.indexOf(key), 1);

    this.store[key]++;
  } else {
    this.store[key] = 1;
  }

  const value = this.store[key];

  // add key back into min/max store
  if (this.minMaxStore[value] === undefined) {
    this.minMaxStore.push([key]);
  } else {
    this.minMaxStore[value].push(key);
  }

  return;
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  if (this.store[key]) {
    const oldValue = this.store[key];
    const storeArray = this.minMaxStore[oldValue];
    storeArray.splice(storeArray.indexOf(key), 1);

    if (this.store[key] === 1) {
      delete this.store[key];
      return;
    } else {
      this.store[key]--;
    }
  } else {
    return;
  }

  // add key back into min/max store
  const value = this.store[key];
  this.minMaxStore[value].push(key);

  return;
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  for (let i = this.minMaxStore.length - 1; i > 0; i--) {
    if (this.minMaxStore[i].length) {
      return this.minMaxStore[i][0];
    }
  }

  return "";
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  for (let i = 1; i < this.minMaxStore.length; i++) {
    if (this.minMaxStore[i].length) {
      return this.minMaxStore[i][0];
    }
  }

  return "";
};

var obj = new AllOne();
obj.inc("hello");
obj.inc("hello");
obj.inc("hello");
obj.inc("hello");
console.log(obj.getMaxKey());
console.log(obj.getMinKey());
obj.inc("leet");
obj.dec("hello");
obj.dec("hello");
obj.dec("hello");
obj.dec("hello");
obj.dec("hello");
obj.dec("hello");

console.log(obj.getMaxKey());
console.log(obj.getMinKey());
