function recursion(n, x, y) {
  const number = paper[x][y];
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (paper[x + i][y + j] === number) count++;
      else break;
    }
  }
  if (count === n * n) answer[number + 1]++;
  else {
    const nextN = n / 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        recursion(nextN, x + i * nextN, y + j * nextN);
      }
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");
const answer = [0, 0, 0];

const paper = input.map((row) => row.split(" ").map(Number));

recursion(parseInt(n), 0, 0);
console.log(answer);
