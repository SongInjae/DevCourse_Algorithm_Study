function dfs(x, y, n, islandCount, graph, visited) {
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];
  graph[x][y] = islandCount;
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const row = x + dr[i];
    const column = y + dc[i];

    if (row < 0 || column < 0 || row >= n || column >= n) continue;

    if (graph[row][column] && !visited[row][column]) {
      dfs(row, column, n, islandCount, graph, visited);
    }
  }
}

function bfs(graph, n, islandCount) {
  const queue = [];
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === islandCount) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    let queueLength = queue.length;

    while (queueLength--) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const row = x + dr[i];
        const column = y + dc[i];

        if (row < 0 || column < 0 || row >= n || column >= n) continue;
        if (graph[row][column] !== 0 && graph[row][column] !== islandCount)
          return cnt;
        if (graph[row][column] === 0 && !visited[row][column]) {
          visited[row][column] = true;
          queue.push([row, column]);
        }
      }
    }
    cnt++;
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

const graph = inputArr.map((input) => input.split(" ").map(Number));

const visited = Array.from({ length: parseInt(n) }, () =>
  Array(parseInt(n)).fill(false)
);
let islandCount = 1;
let minCount = Infinity;

for (let i = 0; i < parseInt(n); i++) {
  for (let j = 0; j < parseInt(n); j++) {
    if (graph[i][j] && !visited[i][j]) {
      dfs(i, j, parseInt(n), islandCount++, graph, visited);
    }
  }
}

for (let i = 1; i < islandCount; i++) {
  minCount = Math.min(minCount, bfs(graph, parseInt(n), i));
}

console.log(minCount);
