class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
  }
  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head !== null) {
      this.tail.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
    }
  }

  remove(prevNode) {
    if (prevNode.next.next !== this.head) {
      prevNode.next = prevNode.next.next;
    } else {
      prevNode.next = this.head;
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [total, num] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const LinkedList = new CircularLinkedList();
const result = [];

for (let i = 1; i <= total; i++) {
  LinkedList.append(i);
}

let node = LinkedList.head;
for (let j = 2; j < num; j++) {
  node = node.next;
}
if (num === 1) node = LinkedList.tail;
result.push(node.next.value);
LinkedList.remove(node);

for (let i = 1; i < total; i++) {
  for (let j = 1; j < num; j++) {
    node = node.next;
  }
  result.push(node.next.value);
  LinkedList.remove(node);
}

console.log("<" + result.join(", ") + ">");
