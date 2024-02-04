function bfs() {
  const needVisit = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (goalString[0] === map[i][j]) needVisit.push([i, j, goalString[0]]);
    }
  }

  while (needVisit.length) {
    const [row, column, str] = needVisit.pop();

    if (str === goalString) {
      count++;
      continue;
    }

    for (let i = 1; i <= k; i++) {
      const currentString = goalString[str.length];
      if (row + i < n && map[row + i][column] === currentString)
        needVisit.push([row + i, column, `${str}${currentString}`]);
      if (row - i >= 0 && map[row - i][column] === currentString)
        needVisit.push([row - i, column, `${str}${currentString}`]);
      if (column + i < m && map[row][column + i] === currentString)
        needVisit.push([row, column + i, `${str}${currentString}`]);
      if (column - i >= 0 && map[row][column - i] === currentString)
        needVisit.push([row, column - i, `${str}${currentString}`]);
    }
  }

  return count;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");
const [n, m, k] = info.split(" ").map(Number);
const goalString = input.pop();
const map = input.map((str) => str.split(""));

console.log(bfs());
