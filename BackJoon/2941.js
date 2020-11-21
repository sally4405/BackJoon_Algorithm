// https://www.acmicpc.net/problem/2941
// 크로아티아 알파벳

// const input = require("fs").readFileSync("/dev/stdin").toString().split("");
// const input = "ljes=njak\n".split("");
// const input = "ddz=z=\n".split("");
// const input = "nljj\n".split("");
// const input = "c=c=\n".split("");
const input = "z\n".split("");
input.pop();
let answer = input.length;

for (let i = 0; i < input.length - 1; i++) {
  switch (input[i]) {
    case "c":
    case "s":
      if (input[i + 1] === "=" || input[i + 1] === "-") answer--;
      break;
    case "d":
      if (input[i + 1] === "-") answer--;
      else if (input[i + 1] === "z" && input[i + 2] === "=") answer -= 2;
      break;
    case "l":
    case "n":
      if (input[i + 1] === "j") answer--;
      break;
    case "z":
      if (input[i + 1] === "=" && input[i - 1] !== "d") answer--;
      break;
    default:
      break;
  }
}

console.log(answer);
