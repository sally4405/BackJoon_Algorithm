// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  var answer = [];

  const result = [];
  let lastIndex = 0;
  let target;

  for (let i = 1; i < dartResult.length; i++) {
    if (Number.isInteger(parseInt(dartResult[i])) && !(dartResult[i] === "0" && dartResult[i - 1] === "1")) {
      target = dartResult.slice(lastIndex, i).split("");
    } else if (i === dartResult.length - 1) {
      target = dartResult.slice(lastIndex, dartResult.length);
    } else {
      continue;
    }
    result.push({ score: parseInt(target[0]), bonus: target[1], option: target[2] });
    lastIndex = i;
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

  console.log(answer);
  console.log(result);

  return answer.reduce((acc, cur) => acc + cur, 0);
}

// const dartResult = "1S2D*3T";
const dartResult = "1D2S#10S";
// const dartResult = "1D2S0T";
console.log(solution(dartResult));
