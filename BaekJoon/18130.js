// https://www.acmicpc.net/problem/18130
// 여름나기

// const [NQ, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [NQ, ...input] = "5 12\n100 2 100\n200 3 100\n0 10 500\n0 10 600\n1000 13 100\n".split("\n");

const [N, Q] = NQ.split(" ");
let answer;
let index;

const calc = (T, C) => {
  return (C * ((T + 1) * T)) / 2;
};

for (let i = 0; i < N; i++) {
  const [P, K, C] = input[i].split(" ").map((n) => parseInt(n));
  // const price = P + C * (Math.ceil(Q / K) - 1);
  const price = P + calc(Math.ceil(Q / K) - 1, C);
  if (!answer || answer > price) {
    answer = price;
    index = i + 1;
  }
}

console.log(index, answer);
