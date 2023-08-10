/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null {
  const max = Math.max(p?.val, q?.val);
  const min = Math.min(p?.val, q?.val);
  const arr: Array<TreeNode | null> = [];
  arr.push(root);

  while (arr.length !== 0) {
    const cur = arr.pop() as TreeNode;

    if (cur === null) {
      return null;
    }

    if (cur.val <= max && cur.val >= min) {
      return cur;
    }

    if (cur.val > max) {
      arr.push(cur.left);
    }

    if (cur.val < min) {
      arr.push(cur.right);
    }
  }

  return null;
}
// @lc code=end
