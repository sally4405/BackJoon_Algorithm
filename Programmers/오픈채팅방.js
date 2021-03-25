// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const iDLog = [];

  record.map((n) => {
    const [state, id, nickname] = n.split(" ");
    if (state !== "Leave") iDLog[id] = nickname;
  });

  const answer = [];

  record.map((n) => {
    const [state, id] = n.split(" ");
    switch (state) {
      case "Enter":
        answer.push(`${iDLog[id]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${iDLog[id]}님이 나갔습니다.`);
        break;
      default:
        break;
    }
  });

  return answer;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

console.log(solution(record));
