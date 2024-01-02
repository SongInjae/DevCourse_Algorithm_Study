function bfs(graph, startNode) {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      const nodeChildren = graph[node].sort((a, b) => a - b);
      needVisit = [...needVisit, ...nodeChildren];
    }
  }
  return visited.join(" ");
}
function dfs(graph, startNode) {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      const nodeChildren = graph[node].sort((a, b) => b - a);
      needVisit = [...needVisit, ...nodeChildren];
    }
  }
  return visited.join(" ");
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");
const [n, line, startNode] = info.split(" ").map(Number);
const graph = [...Array(n + 1)].map((_) => []);

for (let i = 0; i < line; i++) {
  const [from, to] = arr[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

console.log(dfs(graph, startNode));
console.log(bfs(graph, startNode));
