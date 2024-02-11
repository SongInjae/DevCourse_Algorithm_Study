function dfs(sum, index) {
  if (sum === S && index !== 0) answer++;

  for (let i = index; i < N; i++) {
    dfs(sum + map[i], i + 1);
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, arr] = fs.readFileSync(filepath).toString().split("\n");

const [N, S] = info.split(" ").map(Number);
const map = arr.split(" ").map(Number);
let answer = 0;

dfs(0, 0);

console.log(answer);
