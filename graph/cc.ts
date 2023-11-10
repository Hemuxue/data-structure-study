import AdjList from "./adjList";
import { text } from "./text";

export default class CC {
  G: AdjList;

  // 表示是否访问，并存储联通分量的值
  private visited: number[];
  /**
   * 联通分量个数， Connected Component
   */
  private cccout: number = 0;

  constructor(g: AdjList) {
    this.G = g;
    this.visited = new Array(g.getV()).fill(-1);
    for (let v = 0; v < this.G.getV(); v++) {
      if (this.visited[v] === -1) {
        this.dfs(v, this.cccout);
        this.cccout += 1;
      }
    }
  }

  private dfs(v: number, ccId: number) {
    this.visited[v] = ccId;
    // this.order.push(v);
    const link = this.G.getVEdge(v);
    let temp = link.head;
    while (temp) {
      if (this.visited[temp.element] === -1) {
        this.dfs(temp.element, ccId);
      }
      temp = temp.next;
    }
    // this.postOrder.push(v);
  }

  public getCount() {
    return this.visited.map((ele) => `${ele}`);
  }

  public isConnected(v: number, w: number): boolean {
    this.G.validateVertex(v);
    this.G.validateVertex(w);
    return this.visited[v] === this.visited[w];
  }

  public components(): number[][] {
    const result = [];
    for (let i = 0; i < this.cccout; i++) {
      result.push([]);
    }
    for (let v = 0; v < this.G.getV(); v++) {
      result[this.visited[v]].push(v);
    }

    return result;
  }
}

const G = new AdjList(text);
const dfs = new CC(G);
console.log(dfs.getCount());
console.log(dfs.components());
console.log(dfs.components());
// console.log(order);
