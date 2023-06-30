const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split(" ");

const date = {
  1: 0,
  2: 31,
  3: 59,
  4: 90,
  5: 120,
  6: 151,
  7: 181,
  8: 212,
  9: 243,
  10: 273,
  11: 304,
  12: 334,
};

const day = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT",
};
console.log(day[(date[parseInt(input[0])] + parseInt(input[1])) % 7]);
