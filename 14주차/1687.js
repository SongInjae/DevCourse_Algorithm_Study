function bfs() {
  const queue = [];
  let count = 0;

  visited[n] = true;
  queue.push(n);

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const x = queue.shift();

      if (x === k) return count;

      for (const nextNumber of [x - 1, x + 1, x * 2]) {
        if (nextNumber >= 0 && nextNumber <= 140000 && !visited[nextNumber]) {
          visited[nextNumber] = true;
          queue.push(nextNumber);
        }
      }
    }
    count++;
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, k] = fs.readFileSync(filepath).toString().split(" ").map(Number);
const visited = Array(140000).fill(false);

console.log(bfs());
