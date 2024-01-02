const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...inputArr] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const graph = Array.from({ length: parseInt(n) + 1 }, () => []);
const answer = Array(parseInt(n) + 1).fill(0);
const queue = [];
answer[1] = 1;

for (let i = 0; i < parseInt(n) - 1; i++) {
  const [num1, num2] = inputArr[i].split(" ");
  graph[num1].push(num2);
  graph[num2].push(num1);
}

for (let next of graph[1]) {
  answer[next] = 1;
  queue.push(next);
}

while (queue.length) {
  const current = queue.shift();

  for (let next of graph[current]) {
    if (!answer[next]) {
      answer[next] = current;
      queue.push(next);
    }
  }
}

console.log(answer.slice(2).join("\n"));
