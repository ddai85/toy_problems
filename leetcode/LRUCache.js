/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.currentCapacity = 0;
  this.hashMap = {};

  this.head = new ListNode();
  this.tail = new ListNode();

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.hashMap[key]) {
    // Move around nodes so that this value is the most recently used
    const node = this.hashMap[key];

    node.removeNode();
    node.addNode(this.head);

    return node.value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.hashMap[key]) {
    const currentNode = this.hashMap[key];
    currentNode.value = value;
    currentNode.removeNode();
    currentNode.addNode(this.head);
    return;
  }

  const newNode = new ListNode();
  newNode.key = key;
  newNode.value = value;
  newNode.addNode(this.head);
  this.hashMap[key] = newNode;
  this.currentCapacity++;

  if (this.currentCapacity > this.capacity) {
    // remove head by assigning the next node to head
    // remove from hashMap
    const LRUKey = this.tail.prev.key;
    delete this.hashMap[LRUKey];
    this.tail.prev.removeNode();
    this.currentCapacity--;
  }

  //console.log(newNode);
};

class ListNode {
  constructor() {
    this.value;
    this.key;

    this.prev = null;
    this.next = null;
  }

  addNode(head) {
    const nextNode = head.next;
    this.next = nextNode;
    this.prev = head;
    head.next = this;
    nextNode.prev = this;
  }

  removeNode() {
    if (this.prev === null) return;

    this.prev.next = this.next;
    this.next.prev = this.prev;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Combine has table along with linked list
// Each time

var obj = new LRUCache(3);
console.log(obj.get("a"));
obj.put("a", 1);
console.log(obj.get("a"));
obj.put("b", 2);
obj.put("c", 3);
obj.put("d", 4);
console.log(obj.get("a"));
