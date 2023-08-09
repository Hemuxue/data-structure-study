// Definition for a binary tree node.
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

function isSymmetric1(root: TreeNode | null): boolean {
  const arr: Array<{ node: TreeNode; level: number }> = [];
  if (root === null) return false;

  arr.push({ node: root, level: 0 });

  const isSymmetryArr = (data: number[]) => {
    if (data.length % 2 !== 0) {
      return false;
    }

    for (let i = 0; i <= Math.floor(data.length / 2); i++) {
      if (data[i] !== data[data.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  // 用于存储值的level
  // let level = 0;
  // 当前访问值的 level
  let currentLevel = 0;

  let valueList: number[] = [];

  while (arr.length !== 0) {
    const cur = arr.shift();
    // if (!cur.node) continue;
    if (cur.level - currentLevel === 1) {
      if (!isSymmetryArr(valueList)) {
        return false;
      }
      currentLevel++;
      valueList = [];
    }

    valueList.push(cur.node?.left?.val ?? null);
    valueList.push(cur.node?.right?.val ?? null);

    if (cur.node && (cur.node.left || cur.node.right)) {
      arr.push({ node: cur.node.left, level: cur.level + 1 });
      arr.push({ node: cur.node.right, level: cur.level + 1 });
    }
  }

  if (valueList.length > 0) {
    return isSymmetryArr(valueList);
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  const inOrder = (node: TreeNode, values: number[]) => {
    if (node === null) {
      values.push(null);
      return;
    }

    if (node.left === null && node.right === null) {
      values.push(node.val);
      return;
    }
    inOrder(node.left, values);
    values.push(node.val);
    inOrder(node.right, values);
  };

  let leftArr = [];
  let rightArr = [];
  inOrder(root.left, leftArr);
  inOrder(root.right, rightArr);
  if (leftArr.length !== rightArr.length || leftArr.length === 0) {
    return false;
  }

  for (let i = 0; i < leftArr.length; i++) {
    if (leftArr[i] !== rightArr[rightArr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const node = {
  val: 1,
  left: { val: 2, left: null, right: { val: 3, left: null, right: null } },
  right: { val: 2, left: { val: 3, left: null, right: null }, right: null },
};

const node1 = {
  val: 1,
  left: { val: 0, left: null, right: null },
  right: null,
};

console.log(isSymmetric(node));
