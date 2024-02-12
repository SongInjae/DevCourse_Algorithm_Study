const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, arr] = fs.readFileSync(filepath).toString().split("\n");

const [N, M] = info.split(" ").map(Number);
const map = arr.split(" ").map(Number);
let answer = Infinity;

for (let i = 0; i < N; i++) {
  let sum = 0;

  for (let j = i; j < N; j++) {
    sum += map[j];

    if (sum >= M) {
      if (j - i + 1 < answer) answer = j - i + 1;
      break;
    }
  }
}

console.log(answer);
