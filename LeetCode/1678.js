// https://leetcode.com/problems/goal-parser-interpretation/
// Goal Parser Interpretation

var interpret = function (command) {
  return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
};

const command = "G()(al)";
// const command = "G()()()()(al)";
// const command = "(al)G(al)()()G";

console.log(interpret(command));
