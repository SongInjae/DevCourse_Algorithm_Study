function bfs(graph, n, m) {
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];
  const needVisit = [[0, 0]];
  const checkmap = Array.from({ length: n }, () => Array(m).fill(0));

  checkmap[0][0] = 1;

  while (needVisit.length !== 0) {
    const [row, column] = needVisit.shift();
    if (row === n - 1 && column === m - 1) break;

    for (let i = 0; i < 4; i++) {
      const checkRow = row + dr[i];
      const checkColumn = column + dc[i];

      if (checkRow < 0 || checkColumn < 0 || checkRow >= n || checkColumn >= m)
        continue;
      if (checkmap[checkRow][checkColumn] > 0) continue;

      if (graph[checkRow][checkColumn] === "1") {
        checkmap[checkRow][checkColumn] = checkmap[row][column] + 1;
        needVisit.push([checkRow, checkColumn]);
      }
    }
  }

  return checkmap[n - 1][m - 1];
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [countInfo, ...restInfo] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = countInfo.split(" ");
const graph = restInfo.map((info) => info.split(""));
console.log(bfs(graph, n, m));
