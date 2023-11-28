/*
 * @lc app=leetcode.cn id=1457 lang=typescript
 *
 * [1457] 二叉树中的伪回文路径
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

function isPalindromic(path: number[]) {
  let odd = 0;
  path.forEach((ele) => {
    if (ele % 2 === 1) {
      odd++;
    }
  });
  return odd <= 1;
}

function pseudoPalindromicPaths(root: TreeNode | null): number {
  const path = new Array(10).fill(0);

  function dfs(root: TreeNode | null, path: number[]): number {
    if (!root) {
      return 0;
    }
    path[root.val]++;
    let res = 0;
    if (!root.left && !root.right) {
      res = isPalindromic(path) ? 1 : 0;
    } else {
      res = dfs(root.left, path) + dfs(root.right, path);
    }
    path[root.val]--;
    return res;
  }

  return dfs(root, path);
}
// @lc code=end
