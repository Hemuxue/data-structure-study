/*
 * @lc app=leetcode.cn id=894 lang=typescript
 *
 * [894] 所有可能的真二叉树
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

let map: Map<number, (TreeNode | null)[]> = new Map();

function allPossibleFBT(n: number): Array<TreeNode | null> {
  if (n % 2 === 0) return [];
  if (n === 1) return [new TreeNode(0, null, null)];
  if (!map.has(n)) {
    // temp 存放节点是n时，所有可能的真二叉树
    let temp: (TreeNode | null)[] = [];
    // left 和 right 都是奇数节点，所以 n 为奇数
    for (let leftNum = 1; leftNum < n; leftNum += 2) {
      const left = allPossibleFBT(leftNum);
      const right = allPossibleFBT(n - 1 - leftNum);
      for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < right.length; j++) {
          temp.push(new TreeNode(0, left[i], right[j]));
        }
      }
    }
    map.set(n, temp);
  }
  return map.get(n);
}
// @lc code=end
