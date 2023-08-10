/*
 * @lc app=leetcode.cn id=669 lang=typescript
 *
 * [669] 修剪二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (root === null) {
    return null;
  }

  if (root.val > high) {
    root = trimBST(root.left, low, high);
  } else if (root.val === high) {
    root.right = null;
    root.left = trimBST(root.left, low, high);
  } else if (root.val < low) {
    root = trimBST(root.right, low, high);
  } else if (root.val === low) {
    root.left = null;
    root.right = trimBST(root.right, low, high);
  } else if (root.val > low && root.val < high) {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
  }

  return root;
}

const root1 = { val: 1, left: { val: 0, left: null, right: null }, right: { val: 2, left: null, right: null } };

// { val: 0, left: null, right: null }

const root2 = {
  val: 3,
  left: { val: 0, left: null, right: { val: 2, left: { val: 1, left: null, right: null }, right: null } },
  right: { val: 4, left: null, right: null },
};

const root = {
  val: 3,
  left: { val: 2, left: { val: 1, left: null, right: null }, right: null },
  right: { val: 4, left: null, right: null },
};

console.log(trimBST(root, 1, 1));
// @lc code=end
