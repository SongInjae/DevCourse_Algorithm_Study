function cycle(graph, startNode, visited) {
  visited[startNode] = true;
  if (!visited[graph[startNode]]) cycle(graph, graph[startNode], visited);
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

for (let i = 0; i < input.length; i += 2) {
  const arr = input[i + 1].split(" ").map(Number);
  const graph = new Array(parseInt(input[i]) + 1).fill().map((_) => []);
  const visited = new Array(parseInt(input[i]) + 1).fill(false);
  let cnt = 0;

  for (let j = 1; j <= parseInt(input[i]); j++) {
    graph[j].push(arr[j - 1]);
  }
  for (let k = 1; k <= arr.length; k++) {
    if (visited[k]) continue;
    cycle(graph, k, visited);
    cnt++;
  }
  console.log(cnt);
}
