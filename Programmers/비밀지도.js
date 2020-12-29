// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const a1 = arr1.map((m) => ("0".repeat(n) + m.toString(2)).slice(-n));
  const a2 = arr2.map((m) => ("0".repeat(n) + m.toString(2)).slice(-n));
  const answer = [];

  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      line += parseInt(a1[i][j]) || parseInt(a2[i][j]) ? "#" : " ";
    }
    answer.push(line);
  }

  return answer;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
// 출력	["#####","# # #", "### #", "# ##", "#####"]

console.log(solution(n, arr1, arr2));
