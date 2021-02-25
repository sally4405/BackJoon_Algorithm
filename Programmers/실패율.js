// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  var answer = [];
  const rate = [];
  const arrive = Array(N + 1).fill(0);
  const clear = Array(N).fill(0);

  stages.map((n) => {
    let count = n - 1;
    arrive[count]++;
    while (count) {
      count--;
      arrive[count]++;
      clear[count]++;
    }
  });

  for (let i = 0; i < N; i++) {
    rate.push([i + 1, (arrive[i] - clear[i]) / arrive[i]]);
  }

  answer = rate
    .sort((a, b) => b[1] - a[1])
    .map((n) => {
      return n[0];
    });

  return answer;
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
// [3,4,2,1,5]

// const N = 4;
// const stages = [4, 4, 4, 4, 4];
// // [4,1,2,3]

console.log(solution(N, stages));
