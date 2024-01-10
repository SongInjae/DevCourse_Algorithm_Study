function star(row, column, num) {
  if (row % 3 === 1 && column % 3 === 1) {
    answer.push(" ");
  } else {
    if (num === 1) {
      answer.push("*");
    } else {
      star(parseInt(row / 3), parseInt(column / 3), parseInt(num / 3));
    }
  }
}

function printStars(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    answer.push("\n");
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const num = fs.readFileSync(filepath).toString().trim();

const answer = [];

printStars(parseInt(num));
console.log(answer.join(""));
