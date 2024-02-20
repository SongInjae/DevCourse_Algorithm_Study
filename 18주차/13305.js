function findMinOil() {
  let currentCity = 0;
  let price = 0n;

  while (currentCity < cityLength - 1) {
    let distance = 0;
    let minNode = currentCity;

    for (let j = currentCity + 1; j < cityLength; j++) {
      distance += cityDistance[j - 1];

      if (oilingPrice[currentCity] > oilingPrice[j]) {
        minNode = j;
        break;
      }
    }
    price += BigInt(distance * oilingPrice[currentCity]);
    minNode === currentCity
      ? (currentCity = cityLength - 1)
      : (currentCity = minNode);
  }

  return price;
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const cityLength = parseInt(input.shift());
const cityDistance = input.shift().split(" ").map(Number);
const oilingPrice = input.shift().split(" ").map(Number);

console.log(findMinOil().toString().slice(0));
