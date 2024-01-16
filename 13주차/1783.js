const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, m] = fs.readFileSync(filepath).toString().split(" ").map(Number);

if (n == 1 || m < 2) {
  console.log(1);
} else if (n == 2) {
  if (m > 6) console.log(4);
  else console.log(parseInt((m + 1) / 2));
} else {
  if (m > 6) console.log(m - 2);
  else if (m > 3) console.log(4);
  else console.log(m);
}
