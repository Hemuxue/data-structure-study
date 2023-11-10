import { text } from "./text";

class AdjMatrix {
  private V: number;
  private E: number;
  private adj: number[][];

  constructor(data) {
    this.V = data.V;
    this.E = data.E;
    if (this.V < 0) {
      throw new Error("V max be non-negative");
    }
    if (this.E < 0) {
      throw new Error("E max be non-negative");
    }
    let temp: number[][] = new Array();
    for (let i = 0; i < this.V; i++) {
      const item = [];
      for (let j = 0; j < this.V; j++) {
        item.push(0);
      }
      temp.push(item);
    }
    data.list.forEach((ele) => {
      const [i, j] = ele;
      this.validateVertex(i);
      this.validateVertex(j);
      if (i === j) throw new Error("self Loop is Detected");
      if (temp[i][j] === 1) throw new Error("Parallel Edges are Detected!");
      temp[i][j] = 1;
      temp[j][i] = 1;
    });

    this.adj = temp;

    console.log(this.adj);
  }

  public getV() {
    return this.V;
  }

  public getE() {
    return this.E;
  }

  public hasEdge(v: number, w: number) {
    this.validateVertex(v);
    this.validateVertex(w);
    return this.adj[v][w];
  }

  public getVEdge(v: number) {
    this.validateVertex(v);
    const res: number[] = [];
    for (let i = 0; i < this.V; i++) {
      if (this.adj[v][i] === 1) {
        res.push(i);
      }
    }
    return res;
  }

  public degree(v: number) {
    this.getVEdge(v).length;
  }

  private validateVertex(v: number) {
    if (v < 0 || v > this.V) {
      throw new Error(`vertex ${v} is invalid`);
    }
  }
}

const adj = new AdjMatrix(text);

console.log(adj.getVEdge(3));
