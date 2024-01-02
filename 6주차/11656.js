const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim();

const result = [];

for (let i = 1; i < input.length; i++) {
  result.push(input.slice(i));
}

console.log(result.sort().join("\n"));
