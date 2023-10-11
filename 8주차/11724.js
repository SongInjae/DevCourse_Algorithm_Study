function countConnectedComponents(graph, visited, startNode) {
  visited[startNode] = true;
  for (const node of graph[startNode]) {
    if (!visited[node]) countConnectedComponents(graph, visited, node);
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");

const [n, line] = info.split(" ").map(Number);
const graph = [...Array(n + 1)].map((_) => []);
const visited = Array(n + 1).fill(false);
let cnt = 0;

for (let i = 0; i < line; i++) {
  const [from, to] = arr[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

for (let i = 1; i <= n; i++) {
  if (visited[i]) continue;
  countConnectedComponents(graph, visited, i);
  cnt++;
}

console.log(cnt);
