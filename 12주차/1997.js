function quadTree(num, row, column) {
  let total = 0;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      total += map[row + i][column + j];
    }
  }

  if (total === 0) answer.push("0");
  else if (total === num ** 2) answer.push("1");
  else {
    num /= 2;
    answer.push("(");
    quadTree(num, row, column);
    quadTree(num, row, column + num);
    quadTree(num, row + num, column);
    quadTree(num, row + num, column + num);
    answer.push(")");
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");
const map = input.map((row) => row.split("").map(Number));

const answer = [];

quadTree(parseInt(n), 0, 0);
console.log(answer.join(""));
