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

  prepend(value) {
    const newNode = new Node();
    if (this.head === null) {
      newNode.value = value;
      this.head = newNode;
      return;
    }
    newNode.value = value;
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  append(value) {
    const newNode = new Node();
    if (this.head === null) {
      newNode.value = value;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    newNode.value = value;
    current.nextNode = newNode;
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current != null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
}

export class Node {
  constructor() {
    this._value = null;
    this.nextNode = null;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }
}
