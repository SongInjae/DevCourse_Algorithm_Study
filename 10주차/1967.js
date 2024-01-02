function dfs(node, totalDistance) {
  visited[node] = true;

  if (totalDistance > maxInfo.distance) {
    maxInfo.node = node;
    maxInfo.distance = totalDistance;
  }

  for (const [nextNode, nextDistance] of graph[node]) {
    if (!visited[nextNode]) {
      dfs(nextNode, totalDistance + nextDistance);
    }
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

const graph = {};
const maxInfo = { node: 1, distance: 0 };
let visited = Array(parseInt(n) + 1).fill(false);

for (let i = 0; i < parseInt(n); i++) {
  graph[i + 1] = [];
}

for (let i = 0; i < inputArr.length; i++) {
  const [node1, node2, distance] = inputArr[i].split(" ").map(Number);
  graph[node1].push([node2, distance]);
  graph[node2].push([node1, distance]);
}

dfs(1, 0);
visited = Array(parseInt(n) + 1).fill(false);
dfs(maxInfo.node, 0);

console.log(maxInfo.distance);
