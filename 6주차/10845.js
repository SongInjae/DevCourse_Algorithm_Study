class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(val) {
    this.queue[this.rear++] = val;
  }
  dequeue() {
    if (this.rear - this.front === 0) return -1;
    const val = this.queue[this.front];
    delete this.queue[this.front++];
    return val;
  }
  size() {
    return this.rear - this.front;
  }
  empty() {
    return this.rear - this.front === 0 ? 1 : 0;
  }
  peek() {
    return this.rear - this.front === 0 ? -1 : this.queue[this.front];
  }
  back() {
    return this.rear - this.front === 0 ? -1 : this.queue[this.rear - 1];
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const queue = new Queue();
const result = [];

for (let i = 0; i < parseInt(n); i++) {
  const text = input[i].split(" ");

  if (text[0] === "push") queue.enqueue(text[1]);
  else if (text[0] === "pop") result.push(queue.dequeue());
  else if (text[0] === "size") result.push(queue.size());
  else if (text[0] === "empty") result.push(queue.empty());
  else if (text[0] === "front") result.push(queue.peek());
  else if (text[0] === "back") result.push(queue.back());
}

console.log(result.join("\n"));
