class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 Do not return anything, modify root in-place instead.
 */

function recoverTree(root: TreeNode | null): void {
  let prev: TreeNode = null;
  let err1: TreeNode = null,
    err2: TreeNode = null;
  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }
    dfs(node.left);
    if (prev?.val >= node.val && err1 === null) {
      err1 = prev;
    }

    if (prev?.val > node.val && err1 !== null) {
      err2 = node;
    }
    prev = node;
    dfs(node.right);
  }
  dfs(root);
  const temp = err1.val;
  err1.val = err2.val;
  err2.val = temp;
}
