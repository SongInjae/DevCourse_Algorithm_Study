function dfs(node, totalDistance) {
  visited[node] = true;
  console.log(node, totalDistance);
  if (totalDistance > maxInfo.distance) {
    maxInfo.distance = totalDistance;
    maxInfo.node = node;
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
let visited = Array(parseInt(n) + 1).fill(false);
const maxInfo = { node: 0, distance: 0 };

for (let i = 0; i < parseInt(n); i++) {
  const info = inputArr[i].split(" ");
  const nodeNumber = parseInt(info[0]);
  let index = 1;
  graph[nodeNumber] = [];

  while (info[index] !== "-1") {
    const node = parseInt(info[index]);
    const distance = parseInt(info[index + 1]);

    graph[nodeNumber].push([node, distance]);
    index += 2;
  }
}

dfs(1, 0);
visited = Array(parseInt(n) + 1).fill(false);
dfs(maxInfo.node, 0);
console.log(maxInfo.distance);
