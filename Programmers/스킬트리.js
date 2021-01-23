// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  var answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    const skillList = skill.split("");
    const target = skill_trees[i].split("");
    let bool = true;
    for (let j = 0; j < target.length; j++) {
      if (skillList.includes(target[j])) {
        if (skillList[0] === target[j]) skillList.shift();
        else {
          bool = false;
          break;
        }
      }
    }
    if (bool) answer++;
  }

  return answer;
}

const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
// 2

console.log(solution(skill, skill_trees));
