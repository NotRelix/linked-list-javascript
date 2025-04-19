import { LinkedList } from "./classes.js";

const list = new LinkedList();

list.append("snake");
list.prepend("hamster");
list.append("parrot");
list.prepend("dog");
list.prepend("cat");

console.log(list.toString(list));
console.log(list.head().nextNode.value);
