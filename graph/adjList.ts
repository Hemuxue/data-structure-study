import Link from "../link/link";
import { text } from "./text";

export default class AdjList {
  private V: number;
  private E: number;
  private adj: Link[];

  constructor(data) {
    this.V = data.V;
    this.E = data.E;
    if (this.V < 0) {
      throw new Error("V max be non-negative");
    }
    if (this.E < 0) {
      throw new Error("E max be non-negative");
    }
    let temp: Link[] = [];
    for (let i = 0; i < this.V; i++) {
      temp.push(new Link<number>());
    }
    data.list.forEach((ele) => {
      const [i, j] = ele;
      this.validateVertex(i);
      this.validateVertex(j);
      if (i === j) throw new Error("self Loop is Detected");
      if (temp[i].getElementAt(j)) throw new Error("Parallel Edges are Detected!");
      temp[i].push(j);
      temp[j].push(i);
    });
    this.adj = temp;
  }

  public getV(): number {
    return this.V;
  }

  public getE(): number {
    return this.E;
  }

  public hasEdge(v: number, w: number): boolean {
    this.validateVertex(v);
    this.validateVertex(w);
    return !!this.adj[v].getElementAt(w);
  }

  public getVEdge(v: number): Link {
    this.validateVertex(v);
    return this.adj[v];
  }

  public degree(v: number) {
    this.getVEdge(v).size();
  }

  public validateVertex(v: number) {
    if (v < 0 || v > this.V) {
      throw new Error(`vertex ${v} is invalid`);
    }
  }
}

const adj = new AdjList(text);

console.log(adj.getVEdge(3));
