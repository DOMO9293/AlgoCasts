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

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node; //여기서도 노드를가지고 생각하지말고 next는 그냥 그 노드 전체가 된다 그 노드 전체가 위치 그 자체이므로
  }

  size() {
    let cnt = 0;
    let node = this.head; //pointer라고 생각하자

    while (node) {
      //node.next 가 null이면 종료되기 때문에
      cnt++;
      node = node.next;
    }
    return cnt;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head; //자료복사해줌

    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head.next;
    let previous = this.head; //바라보는 위치를 같게 설정
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null; // js 참조자료형의 특징. 바라보는 위치가 같으므로 같은자리의 값을 바꿔주는 것이 됨.
    //클로저랑 헷갈리는데 클로저는 변수 즉 바라보는 곳을 같게 해주는 것이아니고 함수 자체를 다른 변수에 복사하는 것이다.
  }

  insertLast(data) {
    if (!this.head) {
      this.head.data = data;
    }
    while (this.head.next) {
      this.head = this.head.next;
    }
    this.head.next = new Node(data);
  }

  getAt(index) {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      return this.head;
    }

    let node = this.head;

    for (let i = 0; i <= index; i++) {
      node = node.next;
    }
    return node;
  }

  removeAt(index) {}

  insertAt(data, index) {}
}

module.exports = { Node, LinkedList };
