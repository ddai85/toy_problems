/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.wordMap = PrefixTrie();
  this.maxWordLength = 0;
  words.forEach(word => {
    this.maxWordLength = Math.max(word.length, this.maxWordLength);
    let reverseWord = word
      .split("")
      .reverse()
      .join("");
    this.wordMap.add(reverseWord);
  });
  this.inputQueue = "";

  console.log(JSON.stringify(this.wordMap));
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  // Check to see if inputQueue is as long as maxWordLength, remove first letter if it is
  if (this.inputQueue.length === this.maxWordLength) {
    this.inputQueue = this.inputQueue.substring(1);
  }

  // Add letter to the queue
  this.inputQueue += letter;

  return this.wordMap.hasWord(this.inputQueue, this.inputQueue.length - 1);
};

const PrefixTrie = function() {
  const self = {
    children: {},
    terminal: false
  };

  self.add = function(word) {
    if (!word.length) {
      self.terminal = true;
      return;
    }

    const prefix = word[0];
    const suffix = word.substring(1);

    if (!self.children[prefix]) {
      self.children[prefix] = PrefixTrie();
    }
    self.children[prefix].add(suffix);

    return;
  };

  self.hasWord = function(inputQueue, index) {
    if (self.terminal) return true;
    if (index < 0) return false;

    const prefix = inputQueue[index];
    if (!self.children[prefix]) return false;
    return self.children[prefix].hasWord(inputQueue, index - 1);
  };

  return self;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

// naive implementation:
// iterate through list of words and load them into a hash table
// keep track of longest word
// implement a queue which is length of longest word
// each letter that is input-- iterate through the queue backwards to see if that letter matches one of the words in the list
//

const words = ["cd", "f", "kl", "a"];
var obj = new StreamChecker(words);
var param_1 = console.log(obj.query("k"));
var param_1 = console.log(obj.query("l"));
