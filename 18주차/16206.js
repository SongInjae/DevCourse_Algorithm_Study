const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const map = [];
let answer = 0;

for (let i = N - 1; i >= 0; i--) {
  if (arr[i] % 10 === 0) map.push(...arr.splice(i, 1));
}

map.sort((a, b) => a - b);
map.push(...arr);
console.log(map);
for (let i = 0; i < N; i++) {
  if (M === 0) break;

  let num = map[i];

  if (num === 10) {
    answer++;
    continue;
  }

  while (num > 10) {
    if (M === 0) break;

    num -= 10;
    M--;
    answer++;
    if (num === 10) answer++;
  }
}

console.log(answer);
