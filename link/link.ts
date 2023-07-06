import { eq } from "lodash";

interface NodeInterface<T> {
  element: T;
  next: NodeInterface<T> | undefined;
}

interface LinkInterface<T> {
  push: (element: T) => void;
  insert: (element: T, index: number) => void;
  getElementAt: (index: number) => NodeInterface<T> | undefined;
  remove: (element: T) => void;
  indexOf: (element: T) => number;
  removeAt: (index: number) => void;
  isEmpty: () => boolean;
  size: () => number;
  toString: () => string;
  getHead: () => NodeInterface<T> | undefined;
}

class NodeClass<T> implements NodeInterface<T> {
  element: T;
  next: NodeInterface<T> | undefined;

  constructor(element: T) {
    this.element = element;
    this.next = undefined;
  }
}

export default class Link<T = any> implements LinkInterface<T> {
  head: NodeInterface<T> | undefined;
  count: number;
  compareFn;

  constructor(compareFn: (next: T, prev: T) => boolean = eq) {
    this.head = undefined;
    this.count = 0;
    this.compareFn = compareFn;
  }

  push(ele: T) {
    const node = new NodeClass(ele);
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

  verify(index) {
    return index >= 0 && index <= this.count;
  }

  getElementAt(index: number) {
    if (this.verify(index)) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current?.next;
      }
      return current;
    }
    return undefined;
  }

  insert(ele: T, index: number) {
    if (this.verify(index)) {
      const node = new NodeClass(ele);
      if (index === 0) {
        node.next = this.head?.next;
        this.head = node;
      } else {
        const prev = this.getElementAt(index - 1);
        if (prev) {
          node.next = prev?.next;
          prev.next = node;
          this.count++;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  removeAt(index: number) {
    if (this.verify(index)) {
      if (index === 0) {
        this.head = this.head?.next;
      } else {
        const prev = this.getElementAt(index) as NodeInterface<T>;
        prev.next = prev?.next?.next;
        this.count--;
      }
    }
  }

  indexOf(element: T) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (this.compareFn(current?.element, element)) {
        return i;
      }
      current = current?.next;
    }
    return -1;
  }

  remove(element: T) {
    const index = this.indexOf(element);
    if (this.verify(index)) {
      this.removeAt(index);
    }
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    let str = "";
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (str) {
        str = str + "->";
      }
      str = str + `${current.element}`;
      current = current.next;
    }
    return str;
  }
}

const numLink = new Link<number>();

numLink.push(1);
numLink.push(2);
numLink.push(3);
numLink.insert(2, 2);
numLink.push(4);
numLink.remove(2);

console.log(numLink.toString());
