const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().split("\n");

for (let i = 0; i < input.length; i++) console.log(input[i]);
