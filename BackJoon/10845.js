// https://www.acmicpc.net/problem/10845
// 큐

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const input = "15\npush 1\npush 2\nfront\nback\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\nfront\n".split("\n");

input.shift();
const queue = [];

input.map((command) => {
  switch (command) {
    case "pop":
      console.log(queue.length ? queue.shift() : -1);
      break;
    case "size":
      console.log(queue.length);
      break;
    case "empty":
      console.log(queue.length ? 0 : 1);
      break;
    case "front":
      console.log(queue.length ? queue[0] : -1);
      break;
    case "back":
      console.log(queue.length ? queue[queue.length - 1] : -1);
      break;
    default:
      queue.push(command.split(" ")[1]);
      break;
  }
});
