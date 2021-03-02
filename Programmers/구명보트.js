// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => b - a);

  while (people.length) {
    const target = people.shift();
    if (target <= limit / 2) {
      answer += Math.ceil((people.length + 1) / 2);
      break;
    }

    answer++;

    if (target + people[people.length - 1] <= limit) {
      people.pop();
      continue;
    }
  }

  return answer;
}

// const people = [70, 50, 80, 50];
const people = [70, 80, 50];
const limit = 100;

console.log(solution(people, limit));
