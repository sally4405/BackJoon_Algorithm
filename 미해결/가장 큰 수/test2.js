// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  if (!numbers.filter((v) => v).length) return "0";
  return numbers.sort((a, b) => b.toString() + a.toString() - (a.toString() + b.toString())).join("");
}

//const numbers = [3, 7, 30, 34, 9, 5, 91, 999, 900, 99, 911];
//const numbers = [3, 91, 999];
//const numbers = [188, 1882];
const numbers = [13, 131, 81, 8189];
// const numbers = [0, 0, 0, 0];

console.log(solution(numbers));
