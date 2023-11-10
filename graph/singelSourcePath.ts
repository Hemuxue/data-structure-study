import AdjList from "./adjList";
import { text } from "./text";

export default class SingleSourcePath {
  G: AdjList;
  private visited: boolean[];
  // 源
  private s: number;

  private pre: number[];

  constructor(g: AdjList, s: number) {
    g.validateVertex(s);
    this.G = g;
    this.s = s;
    this.visited = new Array(g.getV()).fill(false);
    this.pre = new Array(g.getV()).fill(-1);
    this.dfs(this.s, s);
  }

  private dfs(v: number, parent: number) {
    this.visited[v] = true;
    const link = this.G.getVEdge(v);
    let temp = link.head;
    this.pre[v] = parent;
    while (temp) {
      if (!this.visited[temp.element]) {
        this.dfs(temp.element, v);
      }
      temp = temp.next;
    }
  }

  public isConnectedTo(t: number) {
    G.validateVertex(t);
    return this.visited[t];
  }

  public path(t: number) {
    const res = [];
    if (!this.isConnectedTo(t)) {
      return res;
    }

    let cur = t;
    if (cur !== this.s) {
      res.push(cur);
      cur = this.pre[cur];
    }
    res.push(this.s);
    return res.reverse();
  }
}

const G = new AdjList(text);
