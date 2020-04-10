// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  // head란 하나의 노드를 말하는 것
  constructor() {
    this.head = null;
  }
}

module.exports = { Node, LinkedList };
