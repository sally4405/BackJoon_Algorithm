// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);

  let lIdx = 0;
  let rIdx = people.length - 1;

  while (lIdx <= rIdx) {
    if (people[lIdx] <= limit / 2) {
      answer += Math.ceil((rIdx - lIdx + 1) / 2);
      break;
    }

    answer++;
    rIdx = people[lIdx] + people[rIdx] <= limit ? rIdx - 1 : rIdx;
    lIdx++;
  }

  return answer;
}

// const people = [70, 50, 80, 50];
const people = [70, 80, 50];
const limit = 100;
// return 3

console.log(solution(people, limit));
