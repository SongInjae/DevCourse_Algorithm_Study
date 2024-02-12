function bfs() {
  const needVisit = [[0, 0, 0]];
  const visited = Array.from(Array(M), () => Array(N).fill(false));
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];

  while (needVisit.length) {
    const [row, col, count] = needVisit.shift();

    if (row === M - 1 && col === N - 1) return count;

    for (let i = 0; i < 4; i++) {
      const newRow = row + dr[i];
      const newCol = col + dc[i];

      if (newRow >= 0 && newCol >= 0 && newRow < M && newCol < N) {
        if (!visited[newRow][newCol]) {
          visited[newRow][newCol] = true;

          if (map[newRow][newCol]) {
            needVisit.push([newRow, newCol, count + 1]);
          } else {
            needVisit.unshift([newRow, newCol, count]);
          }
        }
      }
    }
  }
  return CrashCount;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");

const [N, M] = info.split(" ").map(Number);

const map = arr.map((str) => str.split("").map(Number));

console.log(bfs());
