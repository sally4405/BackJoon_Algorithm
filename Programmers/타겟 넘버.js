// https://programmers.co.kr/learn/courses/30/lessons/43165

let answer = 0;

function solution(numbers, target) {
  loop(numbers, target, 0);

  return answer;
}

const loop = (numbers, target, result) => {
  if (!numbers.length) {
    if (result === target) {
      answer++;
    }
    return;
  }
  loop(numbers.slice(1), target, result + numbers[0]);
  loop(numbers.slice(1), target, result - numbers[0]);
};

// const numbers = [1, 2, 3];
// const numbers = [];
const numbers = [1, 1, 1, 1, 1];
const target = 3; // return 5

console.log(solution(numbers, target));
