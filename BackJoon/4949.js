// https://www.acmicpc.net/problem/4949
// 균형잡힌 세상

// const input = require("fs").readFileSync("/dev/stdin").toString().split(".");
const input = "()(.\nSo when I die (the [first] I will see in (heaven) is a score list).\n[ first in ] ( first out ).\nHalf Moon tonight (At least it is better than no Moon at all].\nA rope may form )( a trail in a maze.\nHelp( I[m being held prisoner in a fortune cookie factory)].\n([ (([( [ ] ) ( ) (( ))] )) ]).\n .\n.\n".split(
  "."
);
let answer = "";

const openList = [];

input.pop();
input.pop();

for (let i = 0; i < input.length; i++) {
  const target = input[i].split("");
  let bool = true;
  for (let j = 0; j < target.length; j++) {
    switch (target[j]) {
      case "(":
        openList.push("s");
        break;
      case ")":
        if (openList.pop() !== "s") bool = false;
        break;
      case "[":
        openList.push("l");
        break;
      case "]":
        if (openList.pop() !== "l") bool = false;
        break;
      default:
        break;
    }
    if (!bool) break;
  }
  answer += bool && !openList.length ? "yes\n" : "no\n";
  openList.length = 0;
}

console.log(answer);
