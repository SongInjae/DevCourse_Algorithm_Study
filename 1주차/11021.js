const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

for (let i = 0; i < n; i++) input[i] = input[i].trim().split(" ");
for (let i = 0; i < n; i++)
  console.log(`Case #${i + 1}:`, parseInt(input[i][0]) + parseInt(input[i][1]));
