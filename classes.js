export class LinkedList {
  constructor() {
    this.list = null;
  }

  toString() {
    let current = this.list;
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
    if (this.list === null) {
      newNode.value = value;
      this.list = newNode;
      return;
    }
    newNode.value = value;
    newNode.nextNode = this.list;
    this.list = newNode;
  }

  append(value) {
    const newNode = new Node();
    if (this.list === null) {
      newNode.value = value;
      this.list = newNode;
      return;
    }
    let current = this.list;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    newNode.value = value;
    current.nextNode = newNode;
  }

  size() {
    let current = this.list;
    let count = 0;
    while (current != null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.list;
  }

  tail() {
    if (this.list === null) {
      return null;
    }
    let current = this.list;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
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
