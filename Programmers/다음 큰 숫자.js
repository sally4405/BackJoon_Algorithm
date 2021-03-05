// https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let binN = ["0"].concat(n.toString(2).split(""));

  for (let i = binN.length - 1; i > 0; i--) {
    if (binN[i] === "1") {
      for (let j = i - 1; j >= 0; j--) {
        if (binN[j] === "0") {
          binN[j] = "1";
          binN[j + 1] = "0";
          binN = binN.slice(0, j + 2).concat(binN.slice(j + 2).sort());
          break;
        }
      }
      break;
    }
  }

  return parseInt(binN.join(""), 2);
}

// const n = 78;
// // 83
const n = 15;
// 23

console.log(solution(n));
