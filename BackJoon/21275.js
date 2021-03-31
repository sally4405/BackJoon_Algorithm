// https://www.acmicpc.net/problem/21275
// 폰 호석만

const char2num = (s) => {
  return s
    .split("")
    .map((n) => {
      if (Number.isInteger(parseInt(n))) return parseInt(n);
      return n.charCodeAt(0) - 87;
    })
    .reverse();
};

// const [Y, Z] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map((n) => char2num(n));
const [Y, Z] = "ep jh\n".split(" ").map((n) => char2num(n));
// const [Y, Z] = "z z\n".split(" ").map((n) => char2num(n));
// const [Y, Z] = "0 0\n".split(" ").map((n) => char2num(n));
// const [Y, Z] = "2222222222222222222222222222222222222222222222222222222222222222222222 8888888888888888888888888888888\n".split(" ").map((n) => char2num(n));
Z.shift();

let aMin = Y.concat().sort((a, b) => a - b)[Y.length - 1] + 1;
let bMin = Z.concat().sort((a, b) => a - b)[Z.length - 1] + 1;

let answer;

for (let A = aMin; A <= 36; A++) {
  const y = Y.reduce((acc, cur, i) => acc + cur * Math.pow(A, i));

  for (let B = bMin; B <= 36; B++) {
    if (A === B) continue;
    const z = Z.reduce((acc, cur, i) => acc + cur * Math.pow(B, i));

    if (y === z && y < Math.pow(2, 63)) {
      if (answer) return console.log("Multiple");
      answer = [y, A, B];
    }
  }
}

console.log(answer ? answer.join(" ") : "Impossible");
