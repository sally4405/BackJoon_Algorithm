// https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  var answer = [];
  let target = n;
  while (true) {
    if (Math.floor(target / 3) <= 3) {
      answer.push(target % 3);
      answer.push(Math.floor(target / 3));
      break;
    }
    answer.push(target % 3);
    target = Math.floor(target / 3);
  }

  const len = answer.length - 1;
  for (let i = 0; i < len; i++) {
    if (answer[i] <= 0) {
      answer[i] += 3;
      answer[i + 1]--;
    }
  }

  return parseInt(
    answer
      .map((x) => {
        if (x === 3) return 4;
        else return x;
      })
      .reverse()
      .join("")
  ).toString();
}

const n = 27;
console.log(solution(n));
