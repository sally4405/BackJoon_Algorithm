// https://www.acmicpc.net/problem/8958
// OX퀴즈

// input의 마지막에 개행문자가 들어가 있어서 vscode에서는 안보이지만 백준 사이트에서는 공백이 한줄 더 출력되어 틀렸다고 처리됨
// 따라서 배열의 제일 마지막 인자를 pop 해주거나, 테스트 케이스 개수만큼만 출력하도록 for문을 돌려줘야 함

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5", "OOXXOXXOOO", "OOXXOOXXOO", "OXOXOXOXOXOXOX", "OOOOOOOOOO", "OOOOXOOOOXOOOOX", " "];
const input = "5\nOOXXOXXOOO\nOOXXOOXXOO\nOXOXOXOXOXOXOX\nOOOOOOOOOO\nOOOOXOOOOXOOOOX\n".split("\n");

const GaussSum = (n) => {
  return (n * (n + 1)) / 2;
};

// case 1
// const T = parseInt(input.shift());
// for (let t = 0; t < T; t++) {
//   console.log(input[t].split("X").reduce((acc, cur) => acc + GaussSum(cur.length), 0));
// }

// case 2
input.shift();
input.pop();
input.map((ox) => console.log(ox.split("X").reduce((acc, cur) => acc + GaussSum(cur.length), 0)));

// case 3
// const T = parseInt(input.shift());
// const result = input.map((ox) => ox.split("X").reduce((acc, cur) => acc + GaussSum(cur.length), 0));
// for (let i = 0; i < T; i++) {
//   console.log(result[i]);
// }
