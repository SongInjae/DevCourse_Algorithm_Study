const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, m, k] = fs.readFileSync(filepath).toString().split(" ").map(Number);

let female = n;
let male = m;
let answer = 0;

for (let i = k; i > 0; i--) {
  if (male * 2 > female) {
    male--;
  } else {
    female--;
  }
}

while (female >= 2 && male >= 1) {
  female -= 2;
  male -= 1;
  answer++;
}

console.log(answer);
