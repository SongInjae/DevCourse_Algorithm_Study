function dfs(map, visited, row, col, w, h) {
  const dr = [1, -1, 0, 0, -1, 1, -1, 1];
  const dc = [0, 0, 1, -1, -1, -1, 1, 1];

  visited[row][col] = false;

  for (let i = 0; i < 8; i++) {
    const newRow = dr[i] + row;
    const newCol = dc[i] + col;

    if (newRow >= 0 && newCol >= 0 && newRow < h && newCol < w) {
      if (map[newRow][newCol] === 1 && visited[newRow][newCol]) {
        dfs(map, visited, newRow, newCol, w, h);
      }
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const result = [];
let idx = 0;

while (1) {
  const [w, h] = input[idx++].split(" ").map(Number);
  if (w === 0 && h === 0) break;
  const map = Array(h);
  const visited = Array.from(Array(h), () => Array(w).fill(true));
  let count = 0;

  for (let i = 0; i < h; i++) {
    map[i] = input[idx++].split(" ").map(Number);
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (map[i][j] === 1 && visited[i][j]) {
        dfs(map, visited, i, j, w, h);
        count++;
      }
    }
  }
  result.push(count);
}

console.log(result.join("\n").trim());
