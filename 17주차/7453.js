const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...arr] = fs.readFileSync(filepath).toString().trim().split("\n");

const map = arr.map((str) => str.split(" ").map(Number));
const AB = new Map();
let answer = 0;

for (let i = 0; i < parseInt(n); i++) {
  for (let j = 0; j < parseInt(n); j++) {
    const sum = map[i][0] + map[j][1];
    const value = AB.get(sum);
    if (value) AB.set(sum, value + 1);
    else AB.set(sum, 1);
  }
}

for (let i = 0; i < parseInt(n); i++) {
  for (let j = 0; j < parseInt(n); j++) {
    const sum = map[i][2] + map[j][3];
    const value = AB.get(-sum);
    if (value) answer += value;
  }
}

console.log(answer);
