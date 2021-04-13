// https://programmers.co.kr/learn/courses/30/lessons/42627

function solution(jobs) {
  var answer = 0;
  const len = jobs.length;
  const queue = [];

  jobs.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return a[1] - b[1];
  });

  let time = 0;
  while (jobs.length || queue.length) {
    if (!queue.length && jobs[0][0] > time) time = jobs[0][0];
    while (jobs.length) {
      if (jobs[0][0] <= time) queue.push(jobs.shift());
      else break;
    }
    queue.sort((a, b) => a[1] - b[1]);
    const [req, dur] = queue.shift();
    if (time > req) answer += time - req;
    answer += dur;
    time += dur;
  }

  return Math.floor(answer / len);
}

// const jobs = [
//   [0, 3],
//   [1, 9],
//   [2, 6],
// ];
// // 9

console.log(solution(jobs));
