// https://www.acmicpc.net/problem/2309
// 일곱 난쟁이

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(n => parseInt(n));
const input = "20\n7\n23\n19\n10\n15\n25\n8\n13\n".split("\n").map((n) => parseInt(n));
input.pop();
const total = input.reduce((acc, cur) => acc + cur, 0);

const no = total - 100;

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === no) {
      console.log(
        input
          .filter((n) => n !== input[i] && n !== input[j])
          .sort((a, b) => a - b)
          .join("\n")
      );
      return;
    }
  }
}
