// https://programmers.co.kr/learn/courses/30/lessons/42587

class Paper {
  constructor(index, priority) {
    this.index = index;
    this.priority = priority;
    this.previous;
    this.next;
  }

  delete() {
    this.previous.next = this.next;
    this.next.previous = this.previous;
    this.priority = 0;
    this.previous = null;
    this.next = null;
  }
}

const makeLinkedList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].previous = i === 0 ? arr[arr.length - 1] : arr[i - 1];
    arr[i].next = i === arr.length - 1 ? arr[0] : arr[i + 1];
  }
};

const findMax = (current, max) => {
  let copied = current;
  while (true) {
    if (copied.priority === max) return { hasMax: true, paper: copied };
    else if (copied.next === current) return { hasMax: false, paper: current };
    copied = copied.next;
  }
};

function solution(priorities, location) {
  var answer = 0;
  const papers = priorities.map((priority, index) => new Paper(index, priority));
  let current = papers[0];
  let max = priorities.sort((a, b) => b - a)[0];
  makeLinkedList(papers);
  while (true) {
    let target = findMax(current, max);
    if (!target.hasMax) {
      max -= 1;
      continue;
    }
    current = target.paper;
    answer++;
    if (location === current.index) break;
    current = current.next;
    current.previous.delete();
  }

  return answer;
}

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

console.log(solution(priorities, location));
