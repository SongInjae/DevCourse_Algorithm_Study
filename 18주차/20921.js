const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
let [N, K] = fs.readFileSync(filepath).toString().split(" ").map(Number);

const arr = Array.from({ length: N }, (_, idx) => idx + 1);
const answer = [];

for (let i = N - 1; i >= 0; i--) {
  if (K === i) {
    answer.push(...arr.splice(i, 1), ...arr);
    break;
  } else if (K > i) {
    answer.push(...arr.splice(i, 1));
    K -= i;
  }
}

console.log(answer.join(" "));
