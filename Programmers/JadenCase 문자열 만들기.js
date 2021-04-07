// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  return s
    .split(" ")
    .map((n) => {
      if (!n) return "";
      return n[0].toUpperCase() + n.slice(1).toLowerCase();
    })
    .join(" ");
}

const s = "  3people  unFollowed    me";

// const s = "3people unFollowed me";
// // "3people Unfollowed Me"

// const s = "for the last week"
// // "For The Last Week"

console.log(solution(s));
