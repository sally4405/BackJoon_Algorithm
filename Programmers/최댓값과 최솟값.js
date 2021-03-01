// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  var answer = "";
  const arr = s
    .split(" ")
    .map((n) => parseInt(n))
    .sort((a, b) => a - b);
  return `${arr[0]} ${arr[arr.length - 1]}`;
}

const s = "1 2 3 -4";

console.log(solution(s));
