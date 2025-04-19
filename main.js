import { LinkedList } from "./classes.js";

const list = new LinkedList();

list.prepend("0");
list.append("2");
list.prepend("1");

console.log(list.toString(list));
