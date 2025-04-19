import { describe, test, expect } from "@jest/globals";
import { LinkedList } from "./classes.js";

describe("Display Nodes", () => {
  const list = new LinkedList();
  test("Display an empty list", () => {
    expect(list.toString()).toBe("null");
  });
});

describe("Prepend Nodes", () => {
  test("Prepend a node", () => {
    const list = new LinkedList();
    list.prepend("dog");
    expect(list.toString()).toBe("( dog ) -> null");
  });

  test("Prepend multiple nodes", () => {
    const list = new LinkedList();
    list.prepend("dog");
    list.prepend("cat");
    list.prepend("parrot");
    list.prepend("hamster");
    list.prepend("snake");
    expect(list.toString()).toBe(
      "( snake ) -> ( hamster ) -> ( parrot ) -> ( cat ) -> ( dog ) -> null",
    );
  });
});

describe("Append Nodes", () => {
  test("Append a node", () => {
    const list = new LinkedList();
    list.append("dog");
    expect(list.toString()).toBe("( dog ) -> null");
  });

  test("Append multiple nodes", () => {
    const list = new LinkedList();
    list.append("dog");
    list.append("cat");
    list.append("parrot");
    list.append("hamster");
    list.append("snake");
    expect(list.toString()).toBe(
      "( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null",
    );
  });
});

describe("Total Length", () => {
  test("Size of Empty List", () => {
    const list = new LinkedList();
    expect(list.size()).toBe(0);
  });

  test("Size of Linked List with Nodes", () => {
    const list = new LinkedList();
    list.append("snake");
    list.prepend("hamster");
    list.append("parrot");
    list.prepend("dog");
    list.prepend("cat");
    expect(list.size()).toBe(5);
  });
});
