// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  return (
    x %
      x
        .toString()
        .split("")
        .reduce((acc, cur) => acc + parseInt(cur), 0) ===
    0
  );
}

const x = 18;

console.log(solution(x));
