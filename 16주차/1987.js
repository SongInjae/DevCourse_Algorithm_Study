function bfs(row, column, visitedAlpha, str) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  if (maxCount < str.length) maxCount = str.length;

  for (let i = 0; i < 4; i++) {
    const newRow = row + dr[i];
    const newColumn = column + dc[i];

    if (
      newRow >= 0 &&
      newColumn >= 0 &&
      newRow < r &&
      newColumn < c &&
      !visitedAlpha[map[newRow][newColumn]]
    ) {
      visitedAlpha[map[newRow][newColumn]] = true;
      bfs(newRow, newColumn, visitedAlpha, `${str}${map[newRow][newColumn]}`);
      visitedAlpha[map[newRow][newColumn]] = false;
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const [r, c] = info.split(" ").map(Number);
const map = input.map((str) => str.split(""));

const checkAlpha = {};
let maxCount = 0;
checkAlpha[map[0][0]] = true;

bfs(0, 0, checkAlpha, map[0][0]);
console.log(maxCount);
