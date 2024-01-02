class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  findNode(nodeValue) {
    const nodes = [this.root];
    while (nodes.length) {
      const node = nodes.pop();
      if (node.value === nodeValue) return node;
      if (node.left !== null) nodes.push(node.left);
      if (node.right !== null) nodes.push(node.right);
    }
    return null;
  }

  insert(nodeValue, leftNodeValue, rightNodeValue) {
    let node = null;

    if (this.root === null) {
      node = new Node(nodeValue);
      this.root = node;
    } else {
      node = this.findNode(nodeValue);
    }

    if (leftNodeValue !== ".") {
      const leftNode = new Node(leftNodeValue);
      node.left = leftNode;
    }
    if (rightNodeValue !== ".") {
      const rightNode = new Node(rightNodeValue);
      node.right = rightNode;
    }
  }

  order(stack, node, type) {
    if (!node) return;

    if (type === "preOrder") stack.push(node.value);
    this.order(stack, node.left, type);
    if (type === "inOrder") stack.push(node.value);
    this.order(stack, node.right, type);
    if (type === "postOrder") stack.push(node.value);
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...inputArr] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const tree = new Tree();
const preOrderStack = [];
const inOrderStack = [];
const postOrderStack = [];

for (let i = 0; i < parseInt(n); i++) {
  const [nodeValue, leftNodeValue, rightNodeValue] = inputArr[i].split(" ");
  tree.insert(nodeValue, leftNodeValue, rightNodeValue);
}

tree.order(preOrderStack, tree.root, "preOrder");
tree.order(inOrderStack, tree.root, "inOrder");
tree.order(postOrderStack, tree.root, "postOrder");
console.log(preOrderStack.join(" "));
console.log(inOrderStack.join(" "));
console.log(postOrderStack.join(" "));
