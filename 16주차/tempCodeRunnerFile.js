function alphaToNumber(str) {
  switch (str) {
    case "A":
      return 0;
    case "B":
      return 1;
    case "C":
      return 2;
    case "D":
      return 3;
    case "E":
      return 4;
    case "F":
      return 5;
    case "G":
      return 6;
    case "H":
      return 7;
    case "I":
      return 8;
    case "J":
      return 9;
    case "K":
      return 10;
    case "L":
      return 11;
    case "M":
      return 12;
    case "N":
      return 13;
    case "O":
      return 14;
    case "P":
      return 15;
    case "Q":
      return 16;
    case "R":
      return 17;
    case "S":
      return 18;
    case "T":
      return 19;
    case "U":
      return 20;
    case "V":
      return 21;
    case "W":
      return 22;
    case "X":
      return 23;
    case "Y":
      return 24;
    case "Z":
      return 25;
  }
}
function bfs(row, column, checkVisit, str) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const visited = [...checkVisit];

  if (maxCount < str.length) maxCount = str.length;

  for (let i = 0; i < 4; i++) {
    const newRow = row + dr[i];
    const newColumn = column + dc[i];

    if (
      newRow >= 0 &&
      newColumn >= 0 &&
      newRow < r &&
      newColumn < c &&
      !visited[alphaToNumber(map[newRow][newColumn])]
    ) {
      visited[alphaToNumber(map[newRow][newColumn])] = true;
      bfs(newRow, newColumn, visited, `${str}${map[newRow][newColumn]}`);
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

const visit = Array(c).fill(false);
let maxCount = 0;
visit[alphaToNumber(map[0][0])] = true;

bfs(0, 0, visit, map[0][0]);
console.log(maxCount);
