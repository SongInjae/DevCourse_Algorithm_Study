class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;

    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
}

function bfs(map, queue) {
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];
  let days = -1;

  while (queue.size > 0) {
    const period = queue.size;

    for (let i = 0; i < period; i++) {
      const [w, h] = queue.dequeue();

      for (let j = 0; j < 4; j++) {
        const newRow = w + dr[j];
        const newCol = h + dc[j];

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < map.length &&
          newCol < map[0].length &&
          map[newRow][newCol] === 0
        ) {
          map[newRow][newCol] = 1;
          queue.enqueue([newRow, newCol]);
        }
      }
    }
    days++;
  }
  return days;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [input, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");

const [w, h] = input.split(" ").map(Number);
const map = arr.map((str) => str.split(" ").map(Number));
const queue = new Queue();

for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (map[i][j] === 1) queue.enqueue([i, j]);
  }
}

const days = bfs(map, queue);

for (let i = 0; i < h; i++) {
  if (map[i].includes(0)) {
    console.log(-1);
    return;
  }
}

console.log(days);
