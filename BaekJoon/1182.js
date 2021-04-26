// https://www.acmicpc.net/problem/1181
// 단어 정렬

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "13\nbut\ni\nwont\nhesitate\nno\nmore\nno\nmore\nit\ncannot\nwait\nim\nyours\n".split("\n");

const N = parseInt(input.shift());
input.pop();

input
  .sort((a, b) => {
    if (a.length === b.length) {
      return (a > b) - (a < b);
      // if (a > b) return 1;
      // if (b > a) return -1;
      // return 0;
    }
    return a.length - b.length;
  })
  .filter((n, i) => input.indexOf(n) === i)
  .map((n) => console.log(n));
