const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++)
  console.log(parseInt(input[i][0]) + parseInt(parseInt(input[i][2])));
