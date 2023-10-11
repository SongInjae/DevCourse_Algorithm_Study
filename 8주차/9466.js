const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let visited = [];
let cycle = [];

function dfs(node, count, graph) {
  visited[node] = count;
  cycle.push(node);

  const nextNode = graph[node];

  if (visited[nextNode] === undefined) {
    dfs(nextNode, count, graph);
  } else if (visited[nextNode] === count) {
    while (cycle[cycle.length - 1] !== nextNode) {
      cycle.pop();
    }
  }
}

function solve() {
  const T = parseInt(input[0]);

  for (let i = 1; i <= T; i++) {
    const n = parseInt(input[i]);
    const students = input[i + 1].split(" ").map(Number);

    visited = new Array(n + 1).fill(undefined);
    cycle = [];

    for (let j = 1; j <= n; j++) {
      if (visited[j] === undefined) {
        dfs(j, j, students);
      }
    }

    const notInCycle = visited.filter((value) => value === undefined).length;
    console.log(notInCycle);
  }
}

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solve();
});
