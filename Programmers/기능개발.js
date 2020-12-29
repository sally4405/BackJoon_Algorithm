// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const result = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  const answer = [];
  let cnt = 1;
  let target = result[0];

  for (let i = 1; i < result.length; i++) {
    if (result[i] <= target) cnt++;
    else {
      answer.push(cnt);
      cnt = 1;
      target = result[i];
    }
  }
  answer.push(cnt);
  return answer;
}

// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];
// [2, 1]

// const progresses = [95, 90, 99, 99, 80, 99];
// const speeds = [1, 1, 1, 1, 1, 1];
// [1, 3, 2]

// const progresses = [40, 93, 30, 55, 60, 65];
// const speeds = [60, 1, 30, 5, 10, 7];
// [1, 2, 3]

const progresses = [93, 30, 55, 60, 40, 65];
const speeds = [1, 30, 5, 10, 60, 7];
// [2, 4]

console.log(solution(progresses, speeds));
