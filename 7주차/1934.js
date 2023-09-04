const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

let max = 0;
let min = 0;

for (let i = 0; i < parseInt(n); i++) {
  const [a, b] = input[i].split(" ");

  if (parseInt(a) > parseInt(b)) {
    max = parseInt(a);
    min = parseInt(b);
  } else {
    max = parseInt(b);
    min = parseInt(a);
  }

  for (let i = max; i <= max * min; i += max) {
    if (i % a === 0 && i % b === 0) {
      console.log(i);
      break;
    }
  }
}

return;
