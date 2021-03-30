// https://www.acmicpc.net/problem/21312
// 홀짝 칵테일

// const N = require("fs").readFileSync("/dev/stdin").toString().split(" ");
// const N = "2 3 5\n".split(" ");
// const N = "11 33 99\n".split(" ");
const N = "22 44 88\n".split(" ");

let even = 1;
let odd = 1;
let bool = false;

N.map((n) => {
  if (n % 2) {
    bool = true;
    odd *= n;
  } else even *= n;
});

console.log(bool ? odd : even * odd);
