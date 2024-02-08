function findZeroBoard(needVisit) {
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      if (!map[row][column]) needVisit.push([row, column]);
    }
  }
}
function checkSdoku(row, column, value) {
  const threeRow = Math.floor(row / 3) * 3;
  const threeColumn = Math.floor(column / 3) * 3;

  for (let i = 0; i < 9; i++) {
    if (map[i][column] === value || map[row][i] === value) return false;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (map[threeRow + i][threeColumn + j] === value) return false;
    }
  }

  return true;
}
function dfs() {
  const needVisit = [];
  findZeroBoard(needVisit);

  while (needVisit.length) {
    const [row, column] = needVisit.shift();

    for (let i = 1; i <= 9; i++) {
      if (checkSdoku(row, column, i)) map[row][column] = i;
    }
  }
}
function print() {
  const answer = [];

  for (let i = 0; i < 9; i++) answer.push(map[i].join(" "));

  console.log(answer.join("\n"));
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [...input] = fs.readFileSync(filepath).toString().trim().split("\n");
const map = input.map((str) => str.split(" ").map(Number));

dfs();
print();
