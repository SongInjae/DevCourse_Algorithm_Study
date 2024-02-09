function bfs(arr, myNumberArr, prevVisited) {
  const visited = { ...prevVisited };

  if (myNumberArr.length === 6) {
    deck.push(myNumberArr.sort((a, b) => a - b).join(" "));
    return;
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr.length - index + 1 < 6 - myNumberArr.length) break;
    if (!visited[index]) {
      const myDeck = [...myNumberArr];
      myDeck.push(arr[index]);
      visited[index] = true;
      bfs(arr, myDeck, visited);
      visited[index] = false;
    }
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const answer = [];
let deck = [];

input.forEach((str, index) => {
  const [length, ...map] = str.split(" ").map(Number);
  const visit = Array(length).fill(false);

  bfs(map, [], visit);
  answer.push([...new Set(deck.sort((a, b) => a - b))].join("\n"));
  if (index === input.length - 2) {
    console.log(answer.join("\n"));
    process.exit(0);
  }
  answer.push("");
  deck = [];
});
