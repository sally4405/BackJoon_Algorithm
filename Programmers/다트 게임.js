// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  var answer = [];

  const result = [];
  let nextFirstIndex = 0;
  let target;

  for (let i = 1; i < dartResult.length; i++) {
    if (!(dartResult[i] === "S" || dartResult[i] === "T" || dartResult[i] === "D")) continue;

    let score;
    let bonus;
    let option;

    if (dartResult[i + 1] === "*" || dartResult[i + 1] === "#") {
      target = dartResult.slice(nextFirstIndex, i + 2).split("");
      nextFirstIndex = i + 2;
      option = target.pop();
    } else {
      target = dartResult.slice(nextFirstIndex, i + 1).split("");
      nextFirstIndex = i + 1;
    }

    bonus = target.pop();
    score = parseInt(target.join(""));

    result.push({ score: score, bonus: bonus, option: option });
  }

  result.forEach((n) => {
    let finalScore = n.score;
    switch (n.bonus) {
      case "D":
        finalScore = Math.pow(finalScore, 2);
        break;
      case "T":
        finalScore = Math.pow(finalScore, 3);
        break;
      default:
        break;
    }
    if (n.option === "#") finalScore *= -1;
    else if (n.option === "*") {
      finalScore *= 2;
      if (answer.length) answer[answer.length - 1] *= 2;
    }
    answer.push(finalScore);
  });

  return answer.reduce((acc, cur) => acc + cur, 0);
}

// const dartResult = "1S2D*3T";
const dartResult = "1D2S#10S";
// const dartResult = "1D2S0T";
console.log(solution(dartResult));
