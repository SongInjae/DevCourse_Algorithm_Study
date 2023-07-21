const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let init = false;
let map = new Map();
rl.on("line", (line) => {
  if (!init) return (init = true);
  const r = map.get(BigInt(line));
  map.set(BigInt(line), r ? r + 1 : 1);
}).on("close", () => {
  let max = -Infinity;
  let maxKey = BigInt(1);
  map.forEach((value, key) => {
    if (value > max) {
      max = value;
      maxKey = key;
    } else if (value === max) {
      if (maxKey > key) {
        maxKey = key;
      }
    }
  });
  console.log(String(maxKey));
});
