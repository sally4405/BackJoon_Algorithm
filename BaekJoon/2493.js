// https://www.acmicpc.net/problem/2493
// 탑

// [참고](https://cocoon1787.tistory.com/43)
// 스택

// const [N, input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, input] = "5\n6 9 5 7 4\n".split("\n");

const tower = input.split(" ");
const stack = [];
const result = [];

for (let i = 0; i < N; i++) {
  while (stack.length) {
    if (stack[stack.length - 1][1] > parseInt(tower[i])) {
      result.push(stack[stack.length - 1][0] + 1);
      break;
    }
    stack.pop();
  }
  if (!stack.length) result.push(0);
  stack.push([i, parseInt(tower[i])]);
}

console.log(result.join(" "));
