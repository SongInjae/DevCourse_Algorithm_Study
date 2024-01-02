function bfs(graph, startNode, visited) {
  let first = [startNode];
  let second = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();

    if (!visited[node]) {
      visited[node] = true;

      let curGroup = first.includes(node) ? first : second;
      let difGroup = first.includes(node) ? second : first;

      if (graph[node].filter((e) => curGroup.includes(e)).length > 0) {
        console.log("NO");
        return;
      }
      difGroup = [...difGroup, ...graph[node]];
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  console.log("YES");
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");
let idx = 0;

for (let i = 0; i < parseInt(n); i++) {
  const [one, line] = arr[idx++].split(" ").map(Number);
  const graph = new Array(one + 1).fill().map(() => []);
  const visited = new Array(one + 1).fill(false);

  for (let j = 0; j < line; j++) {
    const [u, v] = arr[idx++].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  bfs(graph, 1, visited);
}
