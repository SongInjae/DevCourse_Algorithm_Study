const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString();

for (let i = 0; i < input.length; i += 10) {
  if (i + 10 > input.length) console.log(input.slice(i));
  else console.log(input.slice(i, i + 10));
}
