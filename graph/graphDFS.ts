import AdjList from "./adjList";
import { text } from "./text";

export default class GraphDFS {
  G: AdjList;
  private visited: boolean[];
  private order: number[] = [];
  private postOrder: number[] = [];

  /**
   * 联通分量个数， Connected Component
   */
  private cccout: number = 0;

  constructor(g: AdjList) {
    this.G = g;
    this.visited = new Array(g.getV()).fill(false);
    for (let v = 0; v < this.G.getV(); v++) {
      if (!this.visited[v]) {
        this.dfs(v);
      }
    }
  }

  public getOrder() {
    return this.order;
  }

  public getPostOrder() {
    return this.postOrder;
  }

  private dfs(v: number) {
    this.visited[v] = true;
    this.order.push(v);
    const link = this.G.getVEdge(v);
    let temp = link.head;
    while (temp) {
      if (!this.visited[temp.element]) {
        this.dfs(temp.element);
      }
      temp = temp.next;
    }
    this.postOrder.push(v);
  }
}

const G = new AdjList(text);
const dfs = new GraphDFS(G);
const order = dfs.getOrder();
const postOrder = dfs.getPostOrder();
console.log(order);
