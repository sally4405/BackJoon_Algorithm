// https://www.acmicpc.net/problem/10972
// 다음 순열

// [참고](https://kwanghyuk.tistory.com/25)

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "6\n3 2 6 1 5 4\n".split("\n");
// const input = "10\n4 2 6 3 10 5 1 7 9 8\n".split("\n");
// const input = "5\n5 4 3 2 1\n".split("\n");
// const input = "9\n1 2 3 6 4 5 9 8 7\n".split("\n");

const N = parseInt(input.shift());
const inputArray = input[0].split(" ").map((n) => parseInt(n));
let reverseIndex;

for (let i = N - 1; i > 0; i--) {
  if (inputArray[i] > inputArray[i - 1]) {
    reverseIndex = i - 1;
    break;
  }
}

if (reverseIndex === undefined) return console.log(-1);

for (let j = N - 1; j > reverseIndex; j--) {
  if (inputArray[reverseIndex] < inputArray[j]) {
    const temp = inputArray[reverseIndex];
    inputArray[reverseIndex] = inputArray[j];
    inputArray[j] = temp;
    break;
  }
}

const arrange = inputArray.slice(reverseIndex + 1).reverse();
// const arrange = inputArray.slice(reverseIndex + 1).sort((a, b) => a - b);

console.log((inputArray.slice(0, reverseIndex + 1).concat(arrange)).join(" "));
