class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  find(value) {
    let curNode = this.head;
    while (curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }
  prepend(newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  insert(prevNode, newValue) {
    const newNode = new Node(newValue);
    if (prevNode) {
      newNode.next = prevNode.next;
      newNode.prev = prevNode;
      if (prevNode.next) prevNode.next.prev = newNode;
      prevNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  remove(deleteNode) {
    if (deleteNode === this.head) {
      this.head = deleteNode.next;
      if (this.head) {
        this.head.prev = null;
      }
    } else if (deleteNode === this.tail) {
      this.tail = deleteNode.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    } else {
      deleteNode.prev.next = deleteNode.next;
      deleteNode.next.prev = deleteNode.prev;
    }
  }

  display() {
    let curNode = this.head;
    const arr = [];
    while (curNode !== null) {
      arr.push(curNode.value);
      curNode = curNode.next;
    }
    return arr;
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [str, ...inputArr] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const result = new DoublyLinkedList();

for (let i = 0; i < str.length; i++) {
  result.append(str[i]);
}

let node = result.tail;

for (let i = 1; i < inputArr.length; i++) {
  const [cmd, value] = inputArr[i].split(" ");
  console.log(cmd, value);
  console.log(node.value);
  if (cmd === "L") {
    if (!node) continue;
    node = node.prev;
  } else if (cmd === "D") {
    if (!node.next) continue;
    node = node.next;
  } else if (cmd === "B") {
    if (!node) continue;
    if (node.prev) {
      node = node.prev;
      result.remove(node.next);
    } else {
      result.remove(node);
      node = result.head;
    }
  } else if (cmd === "P") {
    if (node) {
      result.insert(node, value);
      node = node.next;
    } else {
      result.prepend(node, value);
      node = result.head;
    }
  }
}
console.log(result.display());
