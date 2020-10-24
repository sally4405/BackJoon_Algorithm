// https://www.acmicpc.net/problem/4153
// 직각삼각형

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString()).split("\n");
const input = "6 8 10\n25 52 60\n5 12 13\n0 0 0\n".split("\n");

while (input[input.length - 1][0] == 0 || input[input.length - 1][0] === undefined) {
  input.pop();
}

// input.pop();
// input.pop();

const result = input
  .map((nums) =>
    nums
      .split(" ")
      .map((n) => parseInt(n))
      .sort((a, b) => a - b)
  )
  .reduce((acc, cur) => {
    if (Math.pow(cur[2], 2) === Math.pow(cur[0], 2) + Math.pow(cur[1], 2)) return (acc += "right\n");
    else return (acc += "wrong\n");
  }, "");

console.log(result);
