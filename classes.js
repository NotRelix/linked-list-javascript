export class LinkedList {
  constructor() {
    this.head = null;
  }

  toString() {
    let current = this.head;
    let str = "";
    while (current !== null) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    str += "null";
    return str;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }
}

export class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
