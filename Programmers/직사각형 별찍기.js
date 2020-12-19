// https://programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const [n, m] = data.split(" ").map((n) => parseInt(n));
  console.log(`${"*".repeat(n)}\n`.repeat(m));
});
