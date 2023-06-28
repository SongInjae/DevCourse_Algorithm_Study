const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = parseInt(fs.readFileSync(filepath).toString());

for (let i = 1; i <= 9; i++) console.log(`${input} * ${i} = ${input * i}`);
