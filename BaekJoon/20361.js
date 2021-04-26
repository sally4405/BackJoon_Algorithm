// https://www.acmicpc.net/problem/20361
// 일우는 야바위꾼

// const [input, ...arr] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [input, ...arr] = "3 2 4\n1 3\n3 2\n3 1\n2 3\n".split("\n");

const [N, X, K] = input.split(" ");
const list = arr.map((v) => {
  const [A, B] = v.split(" ");
  return { A: A, B: B };
});
let position = X;

for (let i = 0; i < K; i++) {
  if (list[i].A === position) {
    position = list[i].B;
    continue;
  }
  if (list[i].B === position) {
    position = list[i].A;
    continue;
  }
}

console.log(position);
