// https://www.acmicpc.net/problem/21737
// SMUPC 계산기

// const [N, input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const [N, input] = "5\n3S2M3U1P2C\n".split("\n");
const [N, input] = "4\n0328CS00325CC\n".split("\n");
// const [N, input] = "1\n000232738S\n".split("\n");
const operator = { S: "-", M: "*", U: "/", P: "+" };

const num = [];
const op = [];
let temp = "";

for (let i = 0; i < input.length; i++) {
  const target = input[i];

  if (Number.isInteger(parseInt(target))) {
    temp += target;
    continue;
  }

  op.push(target);
  if (temp) {
    num.push(parseInt(temp));
    temp = "";
  }
}

let result = num[0];
let answer = "";
let j = 1;

for (let i = 0; i < N; i++) {
  if (op[i] === "C") {
    answer += `${result} `;
    continue;
  }
  result = result > 0 ? Math.floor(eval(`${result}${operator[op[i]]}${num[j]}`)) : Math.ceil(eval(`${result}${operator[op[i]]}${num[j]}`));
  j++;
}

console.log(answer ? answer : "NO OUTPUT");
