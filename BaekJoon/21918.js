// https://www.acmicpc.net/problem/21918
// 전구

// const [NM, s, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [NM, s, ...input] = "8 3\n0 0 0 0 0 0 0 0\n1 2 1\n1 4 1\n2 2 4\n".split("\n");
// const [NM, s, ...input] = "8 6\n0 0 0 0 0 0 0 0\n1 2 1\n1 4 1\n2 2 4\n2 1 7\n3 5 8\n4 4 6\n".split("\n");
// const [NM, s, ...input] = "1 1\n1\n4 1 1\n".split("\n");

const [N, M] = NM.split(" ");
const state = s.split(" ");

for (let i = 0; i < M; i++) {
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
