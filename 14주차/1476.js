const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [e, s, m] = fs.readFileSync(filepath).toString().split(" ").map(Number);

for (let i = 1; ; i++) {
  if (i % 15 === e % 15 && i % 28 === s % 28 && i % 19 === m % 19) {
    console.log(i);
    break;
  }
}
