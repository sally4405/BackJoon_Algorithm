// https://programmers.co.kr/learn/courses/30/lessons/42840
// [참고](https://programmers.co.kr/questions/15482)

function solution(answers) {
  var result = [0, 0, 0];

  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % 5]) result[0]++;
    if (answers[i] === p2[i % 8]) result[1]++;
    if (answers[i] === p3[i % 10]) result[2]++;
  }
  const max = Math.max(...result);

  return result
    .map((v, i) => {
      if (v === max) return i + 1;
    })
    .filter((v) => v);
}

// const answers = [1, 2, 3, 4, 5];
// [1]
const answers = [1, 3, 2, 4, 2];
// [1,2,3]

console.log(solution(answers));
