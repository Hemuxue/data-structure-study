interface NodeType<T> {
  e: T;
  left: NodeType<T>;
  right: NodeType<T>;
  height: number;
}

class NodeData<T> {
  e: T;
  left: NodeType<T> | null;
  right: NodeType<T> | null;
  height: number;

  constructor(e: T) {
    this.e = e;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

interface BSTImplements<T> {
  root: NodeType<T> | null;
  size: number;

  getSize: () => number;
  isEmputy: () => boolean;

  add: (val: T) => void;
  get: (val: T) => NodeType<T>;
  contains: (val: T) => boolean;
  // remove: (val: T) => void;

  preOrder: () => void;
  inOrder: () => void;
}

class BST<T extends Number> implements BSTImplements<T> {
  public root: NodeType<T>;
  public size: number = 0;

  constructor() {}

  public getSize() {
    return this.size;
  }

  public isEmputy() {
    return this.size === 0;
  }

  public isBST() {
    const arr = [];
    const getInOrderValue = (node: NodeType<T>, data: T[]) => {
      if (node === null) {
        return;
      }
      getInOrderValue(node.left, data);
      data.push(node.e);
      getInOrderValue(node.right, data);
    };

    getInOrderValue(this.root, arr);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        return false;
      }
      return true;
    }
  }

  public isBanlanced(): boolean {
    return this.isBanlancedByNode(this.root);
  }

  public add(e: T) {
    this.root = this.addByNode(this.root, e);
  }

  public contains(e: T): boolean {
    return this.get(e) !== null;
  }

  public get(e: T): NodeType<T> {
    return this.getByNode(this.root, e);
  }

  public preOrder() {
    this.preOrderByNode(this.root);
  }

  public inOrder() {
    this.inOrderByNode(this.root);
  }

  public postOrder() {
    this.postOrderByNode(this.root);
  }

  public levelOrder() {
    this.levelOrderByNode(this.root);
  }

  // private removeMax(): NodeType<T> {
  //   return this.removeMaxByNode(this.root);
  // }

  // private removeMin(): NodeType<T> {
  //   return this.removeMinByNode(this.root);
  // }

  public remove(e: T) {
    return this.removeByNode(this.root, e);
  }

  public minimum(): NodeType<T> {
    return this.minimumByNode(this.root);
  }

  public maximum(): NodeType<T> {
    return this.maximumByNode(this.root);
  }

  /**
   * 向 以node 为根的二分搜索树种插入元素e，递归算法
   * 返回插入新节点后二分搜索的根
   * @param node
   * @param e
   * @returns
   */
  private addByNode(node: NodeType<T>, e: T): NodeType<T> {
    if (!node) {
      this.size = this.size + 1;
      return new NodeData(e);
    }

    if (node?.e > e) {
      node.left = this.addByNode(node.left, e);
    } else if (node?.e < e) {
      node.right = this.addByNode(node.right, e);
    }

    // 更新height
    node.height = 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));

    // 计算平衡因子
    const balanceFactor = this.getBalanceFactor(node);

    // 平衡维护

    // 插入值不平衡节点的左侧的左侧 LL
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) >= 0) {
      return this.rightRotate(node);
    }

    // 插入值不平衡节点的右侧的右侧 RR
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) <= 0) {
      return this.leftRotate(node);
    }

    // 插入值不平衡节点的左侧的右侧 LR
    if (balanceFactor > 1 && this.getBalanceFactor(node.left) < 0) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // 插入值不平衡节点的左侧的右侧 RL
    if (balanceFactor < -1 && this.getBalanceFactor(node.right) > 0) {
      node.right = this.leftRotate(node.right);
      return this.rightRotate(node);
    }

    return node;
  }

  /**
   * 节点右旋转
   * @param node
   * @returns
   */
  private rightRotate(node: NodeType<T>): NodeType<T> {
    const leftNode = node.left;
    const removeNode = leftNode.right;

    leftNode.right = node;
    node.left = removeNode;

    // 更新 height 值
    node.height = Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    leftNode.height = Math.max(this.getNodeHeight(leftNode.left), this.getNodeHeight(leftNode.right)) + 1;

    return leftNode;
  }

  /**
   * 节点左旋转
   * @param node
   * @returns
   */
  private leftRotate(node: NodeType<T>): NodeType<T> {
    const rightNode = node.right;
    const removeNode = rightNode.left;

    rightNode.left = node;
    node.right = removeNode;

    // 更新 height 值
    node.height = Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    rightNode.height = Math.max(this.getNodeHeight(rightNode.left), this.getNodeHeight(rightNode.right)) + 1;

    return rightNode;
  }

  /**
   * 向 以node 为根的二分搜索树种查找元素e，
   * 返回被找到的元素
   * @param node
   * @param e
   * @returns
   */
  private getByNode(node: NodeType<T>, e: T): NodeType<T> {
    if (node === null) {
      return null;
    }
    if (node.e === e) {
      return node;
    } else if (node.e > e) {
      return this.getByNode(node.left, e);
    } else {
      return this.getByNode(node.right, e);
    }
  }

  /**
   * 以 node 为根的前序遍历
   * @param node
   * @returns
   */
  private preOrderByNode(node: NodeType<T>) {
    if (node === null) {
      return;
    }
    console.log(node.e);
    this.preOrderByNode(node.left);
    this.preOrderByNode(node.right);
  }

  /**
   * 以 node 为根的中序遍历
   * @param node
   * @returns
   */
  private inOrderByNode(node: NodeType<T>) {
    if (node === null) {
      return;
    }
    this.inOrderByNode(node.left);
    console.log(node.e);
    this.inOrderByNode(node.right);
  }

  /**
   * 以 node 为根的后序遍历
   * @param node
   * @returns
   */
  private postOrderByNode(node: NodeType<T>) {
    if (node === null) {
      return;
    }
    this.inOrderByNode(node.left);
    this.inOrderByNode(node.right);
    console.log(node.e);
  }

  /**
   * 二分搜索树的层序编辑
   * @param node
   */
  private levelOrderByNode(node: NodeType<T>) {
    const arr: NodeType<T>[] = [];
    arr.push(node);
    while (arr.length !== 0) {
      const targetNode = arr.shift();
      console.log(targetNode.e);
      if (targetNode.left !== null) {
        arr.push(targetNode.left);
      }
      if (targetNode.right !== null) {
        arr.push(targetNode.right);
      }
    }
  }

  /**
   * 删除node 中最大节点
   * @param node
   */
  private removeMaxByNode(node: NodeType<T>): NodeType<T> {
    if (node.right === null) {
      const leftNode = node.left;
      node.left = null;
      this.size--;
      return leftNode;
    }

    node.right = this.removeMaxByNode(node.right);
    return node;
  }

  /**
   * 删除node 中最大节点
   * @param node
   */
  private removeMinByNode(node: NodeType<T>): NodeType<T> {
    if (node.left === null) {
      const rightNode = node.right;
      node.right = null;
      this.size--;
      return rightNode;
    }

    node.left = this.removeMinByNode(node.left);
    return node;
  }

  /**
   * 获取node中最小的点
   * @param node
   * @returns
   */
  private minimumByNode(node: NodeType<T>): NodeType<T> {
    if (node.left === null) {
      return node;
    }
    return this.minimumByNode(node.left);
  }

  /**
   * 获取node中最大的点
   * @param node
   * @returns
   */
  private maximumByNode(node: NodeType<T>): NodeType<T> {
    if (node.right === null) {
      return node;
    }

    return this.maximumByNode(node.right);
  }

  /**
   * 删除 node 中的 值等于 e 这个点
   * @param node
   * @param e
   */
  private removeByNode(node: NodeType<T>, e: T): NodeType<T> {
    if (node === null) {
      return null;
    }

    let returnNode: NodeType<T>;
    if (node.e > e) {
      node.left = this.removeByNode(node.left, e);
      returnNode = node;
    } else if (node.e < e) {
      node.right = this.removeByNode(node.right, e);
      returnNode = node;
    } else {
      // node.e = e

      // 待删除节点左子树为空
      if (node.left === null) {
        const rightNode = node.right;
        node.right = null;
        this.size--;
        returnNode = rightNode;
      } else if (node.right === null) {
        // 待删除节点右子树为空
        const leftNode = node.left;
        node.left = null;
        this.size--;
        returnNode = leftNode;
      } else {
        // 待删除节点左右子树均不为空，
        // 找到比待删除节点大的最小节点，
        // 用这个节点顶替待删除节点的位置
        const successor = this.minimumByNode(node.right);
        successor.right = this.removeByNode(node.right, successor.e);
        successor.left = node.left;
        node.left = node.right = null;
        returnNode = successor;
      }
    }

    // 当返回值为空的时候，直接返回
    if (returnNode === null) {
      return null;
    }

    // 更新height
    returnNode.height = 1 + Math.max(this.getNodeHeight(returnNode.left), this.getNodeHeight(returnNode.right));

    // 计算平衡因子
    const balanceFactor = this.getBalanceFactor(returnNode);

    // 平衡维护

    // 插入值不平衡节点的左侧的左侧 LL
    if (balanceFactor > 1 && this.getBalanceFactor(returnNode.left) >= 0) {
      return this.rightRotate(returnNode);
    }

    // 插入值不平衡节点的右侧的右侧 RR
    if (balanceFactor < -1 && this.getBalanceFactor(returnNode.right) <= 0) {
      return this.leftRotate(returnNode);
    }

    // 插入值不平衡节点的左侧的右侧 LR
    if (balanceFactor > 1 && this.getBalanceFactor(returnNode.left) < 0) {
      returnNode.left = this.leftRotate(returnNode.left);
      return this.rightRotate(returnNode);
    }

    // 插入值不平衡节点的左侧的右侧 RL
    if (balanceFactor < -1 && this.getBalanceFactor(returnNode.right) > 0) {
      returnNode.right = this.leftRotate(returnNode.right);
      return this.rightRotate(returnNode);
    }

    return returnNode;
  }

  /**
   * 获取节点的高度
   * @param node
   * @returns
   */
  private getNodeHeight(node: NodeType<T>) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  /**
   * 计算node 的平衡因子
   * @param node
   * @returns
   */
  private getBalanceFactor(node: NodeType<T>) {
    if (node === null) {
      return 0;
    }
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  /**
   * 判断 Node 是否为平衡二叉树
   * @param node
   * @returns
   */
  private isBanlancedByNode(node: NodeType<T>): boolean {
    if (node === null) {
      return true;
    }

    const balanceFactor = this.getBalanceFactor(node);
    console.log("balanceFactor", balanceFactor);
    if (Math.abs(balanceFactor) > 1) {
      return false;
    }

    return this.isBanlancedByNode(node.left) && this.isBanlancedByNode(node.right);
  }
}

const tree = new BST();

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);
tree.add(8);

// console.log(tree.removeMax());
// console.log(tree.removeMin());
console.log(tree.minimum());
console.log(tree.maximum());
tree.add(9);
tree.add(10);
tree.remove(6);
console.log(tree.isBST());
console.log(tree.isBanlanced());
console.log(tree.root);
