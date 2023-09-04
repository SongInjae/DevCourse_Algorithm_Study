class Deck {
  constructor() {
    this.deck = [];
    this.front = 0;
    this.rear = 0;
  }

  push_front(val) {
    this.deck.unshift(val);
    if (this.front === 0) this.rear++;
    else this.front--;
  }
  push_back(val) {
    this.deck[this.rear++] = val;
  }
  pop_front() {
    if (this.rear - this.front === 0) return -1;
    const val = this.deck[this.front];
    delete this.deck[this.front++];
    return val;
  }
  pop_back() {
    if (this.rear - this.front === 0) return -1;
    const val = this.deck[this.rear - 1];
    delete this.deck[this.rear - 1];
    this.rear--;
    return val;
  }
  size() {
    return this.rear - this.front;
  }
  empty() {
    return this.rear - this.front === 0 ? 1 : 0;
  }
  peek() {
    return this.rear - this.front === 0 ? -1 : this.deck[this.front];
  }
  back() {
    return this.rear - this.front === 0 ? -1 : this.deck[this.rear - 1];
  }
}

const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "../example.txt");
const [n, ...input] = fs.readFileSync(filepath).toString().split("\n");

const deck = new Deck();
const result = [];

for (let i = 0; i < parseInt(n); i++) {
  const text = input[i].split(" ");

  if (text[0] === "push_front") deck.push_front(text[1]);
  else if (text[0] === "push_back") deck.push_back(text[1]);
  else if (text[0] === "pop_front") result.push(deck.pop_front());
  else if (text[0] === "pop_back") result.push(deck.pop_back());
  else if (text[0] === "size") result.push(deck.size());
  else if (text[0] === "empty") result.push(deck.empty());
  else if (text[0] === "front") result.push(deck.peek());
  else if (text[0] === "back") result.push(deck.back());
}

console.log(result.join("\n"));
