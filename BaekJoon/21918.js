// https://www.acmicpc.net/problem/21918
// 전구

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ");
  const state = input[1].split(" ");

  for (let i = 2; i < parseInt(M) + 2; i++) {
    const [a, b, c] = input[i].split(" ");
    switch (a) {
      case "1":
        state[b - 1] = c;
        break;
      case "2":
        for (let j = b; j <= c; j++) state[j - 1] = state[j - 1] === "0" ? "1" : "0";
        break;
      case "3":
        for (let j = b; j <= c; j++) state[j - 1] = "0";
        break;
      case "4":
        for (let j = b; j <= c; j++) state[j - 1] = "1";
        break;
      default:
        break;
    }
  }

  console.log(state.join(" "));
  process.exit();
});
