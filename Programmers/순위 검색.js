// https://programmers.co.kr/learn/courses/30/lessons/72412

function solution(info, query) {
  var answer = Array(query.length).fill(0);

  const infoMap = info.map((n) => {
    const target = n.split(" ");
    return { language: target[0], end: target[1], age: target[2], food: target[3], score: parseInt(target[4]) };
  });

  for (let i = 0; i < query.length; i++) {
    const target = query[i].split(" ").filter((v) => v !== "and");
    infoMap.map((n) => {
      if ((target[0] === "-" || n.language === target[0]) && (target[1] === "-" || n.end === target[1]) && (target[2] === "-" || n.age === target[2]) && (target[3] === "-" || n.food === target[3]) && n.score >= parseInt(target[4])) {
        answer[i]++;
      }
    });
  }

  return answer;
}

const info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];

console.log(solution(info, query));
