const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

console.log(parseInt(input[0]) + parseInt(input[1]));
