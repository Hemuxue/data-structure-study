import { eq } from "lodash";

interface NodeInterface<T> {
  element: T;
  next: NodeInterface<T> | undefined;
  prev: NodeInterface<T> | undefined;
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
}

class NodeClass<T> implements NodeInterface<T> {
  element: T;
  next: NodeInterface<T> | undefined;
  prev: NodeInterface<T> | undefined;

  constructor(element: T) {
    this.element = element;
    this.next = undefined;
    this.prev = undefined;
  }
}

class DoubleLink<T = any> implements LinkInterface<T> {
  head: NodeInterface<T> | undefined;
  tail: NodeInterface<T> | undefined;
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
      this.tail = node;
    } else {
      current = this.tail;
      current.next = node;
      node.prev = current;
      this.tail = node;
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
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          current.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const preview = this.getElementAt(index - 1);
        if (preview) {
          current = preview.next;
          node.next = current;
          preview.next = node;
          current.prev = node;
          node.prev = preview;
        }
      }
      this.count++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(index: number) {
    if (this.verify(index)) {
      let current = this.head;
      if (index === 0) {
        this.head = this.head?.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        const current = this.getElementAt(index) as NodeInterface<T>;
        const preview = current.prev;
        preview.next = current.next;
        current.next.prev = preview;
      }
      this.count--;
      return current;
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

  toString() {
    let str = "";
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (str) {
        str = str + "<->";
      }
      str = str + `${current.element}`;
      current = current.next;
    }
    return str;
  }
}

const numLink = new DoubleLink<number>();

numLink.push(1);
numLink.push(2);
numLink.push(3);
numLink.insert(2, 2);
numLink.push(4);
numLink.remove(3);

console.log(numLink.toString());
