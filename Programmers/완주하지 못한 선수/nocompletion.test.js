const { solution } = require("./nocompletion");

var part = ["marina", "josipa", "nikola", "vinko", "marina", ,"marina", "filipa"];
var comp = ["josipa", "marina", "filipa", "marina", "nikola", "marina"];

test("test", () => {
    expect(solution(part, comp)).toBe("vinko");
})