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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const result: number[][] = [];
  const arr = [{ order: 0, root }];
  while (arr.length > 0) {
    const target = arr.pop();
    if (result[target.order]) {
      result[target.order].push(target.root.val);
    } else {
      result[target.order] = [target.root.val];
    }
    if (target.root.left) {
      arr.push({ order: target.order + 1, root: target.root.left });
    }
    if (target.root.right) {
      arr.push({ order: target.order + 1, root: target.root.right });
    }
  }

  result.forEach((ele, index) => {
    ele = index % 2 === 0 ? ele.reverse() : ele;
  });

  return result;
}
