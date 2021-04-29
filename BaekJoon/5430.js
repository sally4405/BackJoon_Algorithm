// https://www.acmicpc.net/problem/5430
// AC

// const [T, ...input] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [T, ...input] = "4\nRDD\n4\n[1,2,3,4]\nDD\n1\n[42]\nRRD\n6\n[1,1,2,3,5,8]\nD\n0\n[]\n".split("\n");
let answer = "";

for (let i = 0; i < T; i++) {
  const p = input[i * 3].split("");
  let arr = input[i * 3 + 2].slice(1, -1);
  arr = arr.length ? arr.split(",") : [];
  let error = false;
  let reversed = false;
  for (let j = 0; j < p.length; j++) {
    if (p[j] === "R") reversed = !reversed;
    else {
      if (!arr.length) {
        error = true;
        break;
      }
      if (reversed) arr.pop();
      else arr.shift();
    }
  }
  if (error) answer += "error\n";
  else {
    if (reversed) arr.reverse();
    answer += `[${arr.join(",")}]\n`;
  }
}

console.log(answer);
