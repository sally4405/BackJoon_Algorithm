// https://www.acmicpc.net/problem/21603
// K 2K 게임

const f = (n) => {
  return n.toString().slice(-1);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let answer = [];

  const [N, K] = input[0].split(" ");
  const fK = f(parseInt(K));
  const fK2 = f(parseInt(fK) * 2);

  for (let i = 1; i <= N; i++) {
    const x = f(i);
    if (x !== fK && x !== fK2) answer.push(i);
  }

  console.log(answer.length);
  console.log(answer.join(" "));
});
