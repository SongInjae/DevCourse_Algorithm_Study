const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [a, b, c] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];

result.push((a + b) % c);
result.push(((a % c) + (b % c)) % c);
result.push((a * b) % c);
result.push(((a % c) * (b % c)) % c);

console.log(result.join("\n"));

// (A+B)%C
// ((A%C) + (B%C))%C
// (A×B)%C
// ((A%C) × (B%C))%C

// (A+B)%C
// ((A%C) + (B%C))%C
// (A×B)%C
// ((A%C) × (B%C))%C
