function bfs(index, sum) {
  if (sum === S && index !== -1) answer++;
  console.log(sum);
  for (let i = index + 1; i < N; i++) {
    bfs(i, sum + map[i]);
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, arr] = fs.readFileSync(filepath).toString().split("\n");

const [N, S] = info.split(" ").map(Number);
const map = arr.split(" ").map(Number);
let answer = 0;

bfs(-1, 0);

console.log(answer);
