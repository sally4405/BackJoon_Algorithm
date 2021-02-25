// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  var answer = 0;
  const stack = [];

  const boards = Array.from({ length: board.length }, (v) => []);
  board.reverse().map((arr) =>
    arr.map((n, i) => {
      if (n) boards[i].push(n);
    })
  );

  for (let i = 0; i < moves.length; i++) {
    const targetIdx = moves[i] - 1;
    if (!boards[targetIdx].length) continue;
    const target = boards[targetIdx].pop();

    if (stack[stack.length - 1] !== target) {
      stack.push(target);
      continue;
    }

    stack.pop();
    answer += 2;
  }

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// 4

console.log(solution(board, moves));
