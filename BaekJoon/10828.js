// https://www.acmicpc.net/problem/10828
// 스택

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const input = "14\npush 1\npush 2\ntop\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\ntop\n".split("\n");
const input = "7\npop\ntop\npush 123\ntop\npop\ntop\npop\n".split("\n");

input.shift();
const stack = [];

input.map((command) => {
  switch (command) {
    case "top":
      console.log(stack.length ? stack[stack.length - 1] : -1);
      break;
    case "size":
      console.log(stack.length);
      break;
    case "empty":
      console.log(stack.length ? 0 : 1);
      break;
    case "pop":
      console.log(stack.length ? stack.pop() : -1);
      break;
    default:
      stack.push(command.split(" ")[1]);
      break;
  }
});
