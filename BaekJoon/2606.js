// https://www.acmicpc.net/problem/2606
// 바이러스

// [참고](https://cider.tistory.com/5)

// const [N, lineNum, ...lineList] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, lineNum, ...lineList] = "7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7\n".split("\n");

let result = 0;
const graph = Array.from({ length: parseInt(N) + 1 }, (v) => []);
const visited = Array(N + 1).fill(false);

const dfs = (v) => {
  if (visited[v]) return;
  visited[v] = true;
  result++;
  graph[v].map((vertex) => {
    if (!visited[vertex]) dfs(vertex);
  });
};

lineList.pop();
lineList.map((n) => {
  const [v1, v2] = n.split(" ").map((m) => parseInt(m));
  graph[v1].push(v2);
  graph[v2].push(v1);
});

dfs(1);
console.log(result - 1);
