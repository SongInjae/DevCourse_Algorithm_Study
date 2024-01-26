function dfs(currentNode, visited, currentCost, depth) {
  const re = [...visited];
  re[currentNode] = true;

  if (depth === parseInt(n) - 1 && map[currentNode][0] !== 0) {
    minCost = Math.min(minCost, currentCost + map[currentNode][0]);
    return;
  }

  for (let i = 1; i < parseInt(n); i++) {
    if (map[currentNode][i] !== 0 && !re[i]) {
      dfs(i, re, currentCost + map[currentNode][i], depth + 1);
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const map = input.map((str) => str.split(" ").map(Number));
let minCost = Infinity;

for (let i = 1; i < parseInt(n); i++) {
  const visited = Array(parseInt(n)).fill(false);
  if (map[0][i] !== 0) dfs(i, visited, map[0][i], 1);
}

console.log(minCost === Infinity ? 0 : minCost);
