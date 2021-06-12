// https://leetcode.com/problems/range-sum-of-bst/
// Range Sum of BST

var rangeSumBST = function (root, low, high) {
  const arr = [];
  findTree(root, arr);
  return arr.filter((v) => v >= low && v <= high).reduce((acc, cur) => acc + cur);
};

const findTree = (node, arr) => {
  arr.push(node.val);
  if (node.left) findTree(node.left, arr);
  if (node.right) findTree(node.right, arr);
};

// ---------------------------------------------------------------------- //

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// // root = [10,5,15,3,7,null,18]
// const root = new TreeNode(10, new TreeNode(5, new TreeNode(3), new TreeNode(7)), new TreeNode(15, null, new TreeNode(18)));
// const low = 7;
// const high = 15;

// root = [10, 5, 15, 3, 7, 13, 18, 1, null, 6];
const root = new TreeNode(10, new TreeNode(5, new TreeNode(3, new TreeNode(1)), new TreeNode(7, new TreeNode(6))), new TreeNode(15, new TreeNode(13), new TreeNode(18)));
const low = 6;
const high = 10;

console.log(rangeSumBST(root, low, high));
