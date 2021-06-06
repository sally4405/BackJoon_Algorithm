// https://leetcode.com/problems/count-items-matching-a-rule/
// Count Items Matching a Rule

var countMatches = function (items, ruleKey, ruleValue) {
  switch (ruleKey) {
    case "type":
      return items.filter((n) => n[0] === ruleValue).length;
    case "color":
      return items.filter((n) => n[1] === ruleValue).length;
    case "name":
      return items.filter((n) => n[2] === ruleValue).length;
    default:
      break;
  }
};

// const items = [
//   ["phone", "blue", "pixel"],
//   ["computer", "silver", "lenovo"],
//   ["phone", "gold", "iphone"],
// ];
// const ruleKey = "color";
// const ruleValue = "silver";

const items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"],
];
const ruleKey = "type";
const ruleValue = "phone";

console.log(countMatches(items, ruleKey, ruleValue));
