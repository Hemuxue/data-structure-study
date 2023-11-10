/*
 * @lc app=leetcode.cn id=1971 lang=typescript
 *
 * [1971] 寻找图中是否存在路径
 */

interface NodeInterface {
  element: number;
  next: NodeInterface | undefined;
}

class NodeC implements NodeInterface {
  element: number;
  next: NodeInterface | undefined;

  constructor(element: number) {
    this.element = element;
    this.next = undefined;
  }
}

class Link {
  head: NodeInterface | undefined;
  count: number;
  constructor() {
    this.head = undefined;
    this.count = 0;
  }

  compareFn(a, b) {
    return a === b;
  }

  push(ele: number) {
    const node = new NodeC(ele);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current?.next) {
        current = current?.next;
      }
      current.next = node;
    }
    this.count++;
  }
}

// @lc code=start
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const adjList: Link[] = [];
  const visited: boolean[] = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    adjList.push(new Link());
  }

  edges.forEach((item) => {
    const [i, j] = item;
    console.log(i, j);
    adjList[i].push(j);
    adjList[j].push(i);
  });

  let result = false;

  const dfs = (v) => {
    visited[v] = true;
    const link = adjList[v];
    let temp = link.head;
    if (v === destination) {
      result = true;
    }
    while (temp) {
      if (!visited[temp.element]) {
        dfs(temp.element);
      }
      temp = temp.next;
    }
  };

  dfs(source);

  return result;
}

validPath(
  3,
  [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  0,
  2
);
// @lc code=end
