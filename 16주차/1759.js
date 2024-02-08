function isVowel(alpha) {
  if (
    alpha === "a" ||
    alpha === "e" ||
    alpha === "i" ||
    alpha === "o" ||
    alpha === "u"
  )
    return true;
  else return false;
}

function bfs() {
  const needVisit = [];
  const answer = [];

  map.forEach((alpha) => {
    if (isVowel(alpha)) needVisit.push([alpha, 1]);
    else needVisit.push([alpha, 0]);
  });

  while (needVisit.length) {
    const [str, vowelCnt] = needVisit.pop();

    if (
      str.length === totalLength &&
      vowelCnt >= 1 &&
      totalLength - vowelCnt >= 2
    ) {
      answer.push(str);
      continue;
    }

    map.forEach((alpha) => {
      if (str[str.length - 1] < alpha) {
        if (isVowel(alpha)) needVisit.push([`${str}${alpha}`, vowelCnt + 1]);
        else needVisit.push([`${str}${alpha}`, vowelCnt]);
      }
    });
  }
  return answer.sort().join("\n");
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [info, alphabet] = fs.readFileSync(filepath).toString().split("\n");

const [totalLength, things] = info.split(" ").map(Number);
const map = alphabet.split(" ");

console.log(bfs());
