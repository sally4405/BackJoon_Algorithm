// https://www.acmicpc.net/problem/2839
// 설탕 배달

// const input= parseInt(require("fs").readFileSync("/dev/stdin").toString());
const input = parseInt("4\n");

const five = Math.floor(input / 5);
let result;

for (let i = five; i >= 0; i--) {
  const three = (input - i * 5) / 3;
  if (Number.isInteger(three)) {
    result = i + three;
    break;
  }
}
console.log(result ? result : -1);
