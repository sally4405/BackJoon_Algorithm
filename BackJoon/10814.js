// https://www.acmicpc.net/problem/10814
// 나이순 정렬

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "3\n21 Junkyu\n21 Dohyun\n20 Sunyoung\n".split("\n");

const N = input.shift();
input.pop();

input
  .map((n) => {
    const user = n.split(" ");
    return { age: user[0], name: user[1] };
  })
  .sort((a, b) => a.age - b.age)
  .map((user) => console.log(`${user.age} ${user.name}`));
