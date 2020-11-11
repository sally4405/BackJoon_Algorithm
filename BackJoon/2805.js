// https://www.acmicpc.net/problem/2805
// 나무 자르기

// const [[N, M], tree]  = require("fs").readFileSync("/dev/stdin").toString().split("\n").map((n) => n.split(" ").map((m) => parseInt(m)));
const [[N, M], tree] = "4 8\n20 15 10 17\n".split("\n").map((n) => n.split(" ").map((m) => parseInt(m)));
// const [[N, M], tree] = "4 1000000000\n1000000000 1000000000 1000000000 0\n".split("\n").map((n) => n.split(" ").map((m) => parseInt(m)));

let cuttingH = Math.min(...tree);
let result = tree.reduce((acc, cur) => acc + cur, 0) - N * cuttingH;
if (result <= M) return console.log(cuttingH - Math.ceil((M - result) / N));

let low = cuttingH;
let high = Math.max(...tree);
let mid = Math.floor((low + high) / 2);

while (low <= high) {
  mid = Math.floor((low + high) / 2);
  result = tree.map((n) => (n - mid >= 0 ? n - mid : 0)).reduce((acc, cur) => acc + cur, 0);
  console.log(`${low} - ${mid} - ${high} - ${result}`);

  if (result === M) return console.log(mid);
  if (result < M) high = mid - 1;
  else low = mid + 1;
}

console.log(result < M ? mid - 1 : mid);

// let cuttingH = Math.min(...tree);
// let result = tree.reduce((acc, cur) => acc + cur, 0) - N * cuttingH;
// if (result <= M) return console.log(Math.ceil((M - result) / N) + cuttingH);

// while (true) {
//   cuttingH++;
//   result = tree.map((n) => (n - cuttingH >= 0 ? n - cuttingH : 0)).reduce((acc, cur) => acc + cur, 0);
//   console.log(`${cuttingH} - ${result}`);
//   if (result === M) return console.log(cuttingH);
//   if (result < M) return console.log(cuttingH - 1);
// }

///////////////////////////////////

// let cuttingH = Math.min(...tree);
// let result = tree.reduce((acc, cur) => acc + cur, 0) - N * cuttingH;
// if (result <= M) console.log(Math.ceil((M - result) / N) + cuttingH);
// else {
//   while (true) {
//     cuttingH++;
//     result = tree.map((n) => (n - cuttingH >= 0 ? n - cuttingH : 0)).reduce((acc, cur) => acc + cur, 0);
//     if (result === M) {
//       result = cuttingH;
//       break;
//     }
//     if (result < M) {
//       result = cuttingH - 1;
//       break;
//     }
//   }
//   console.log(result);
// }
