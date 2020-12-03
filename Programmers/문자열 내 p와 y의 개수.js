// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let pNum = 0;
  let yNum = 0;

  s.split("").map((n) => {
    switch (n) {
      case "p":
      case "P":
        pNum++;
        break;
      case "y":
      case "Y":
        yNum++;
        break;
      default:
        break;
    }
  });

  return pNum === yNum;
}

const s = "pPoooyY";
// const s = "Pyy";

console.log(solution(s));
