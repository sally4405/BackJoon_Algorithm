// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  var answer = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === i + 1) answer[0]++;

    // if ((i + 1) % 2) {
    //   second = second === 1 ? 3 : second === 5 ? 1 : second + 1;
    //   if (answers[i] === 2) {
    //     answer[1]++;
    //   }
    // } else if (second === answers[i]) answer[1]++;

    if ((i + 1) % 2 && answers[i] === 2) answer[1]++;
    else {
      switch ((i + 1) % 8) {
        case 2:
          if (answers[i] === 1) answer[1]++;
          break;
        case 4:
          if (answers[i] === 3) answer[1]++;
          break;
        case 6:
          if (answers[i] === 4) answer[1]++;
          break;
        case 0:
          if (answers[i] === 5) answer[1]++;
          break;
        default:
          break;
      }
    }

    switch (Math.ceil((i + 1) / 2) % 5) {
      case 1:
        if (answers[i] === 3) answer[2]++;
        break;
      case 2:
        if (answers[i] === 1) answer[2]++;
        break;
      case 3:
        if (answers[i] === 2) answer[2]++;
        break;
      case 4:
        if (answers[i] === 4) answer[2]++;
        break;
      case 0:
        if (answers[i] === 5) answer[2]++;
        break;
      default:
        break;
    }
  }
  const max = Math.max(...answer);

  return answer
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
