// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const answer = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}

const numbers = [2, 1, 3, 4, 1];
// [2,3,4,5,6,7]
// const numbers = [5,0,2,7]
// [2,5,7,9,12]

console.log(solution(numbers));
