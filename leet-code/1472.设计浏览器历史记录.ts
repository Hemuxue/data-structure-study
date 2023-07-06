/*
 * @lc app=leetcode.cn id=1472 lang=typescript
 *
 * [1472] 设计浏览器历史记录
 */

class NodeClass {
  element: string;
  next: NodeClass;

  constructor(ele: string) {
    this.element = ele;
    this.next = undefined;
  }
}

// @lc code=start
class BrowserHistory {
  current: NodeClass;
  head: NodeClass;
  count: number;
  currentIndex = 0;

  constructor(homepage: string) {
    const curNode = new NodeClass(homepage);
    this.head = curNode;
    this.currentIndex = 0;
    this.count = 1;
  }

  getElementAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }

  visit(url: string): void {
    const current = this.getElementAt(this.currentIndex);
    if (current) {
      const urlNode = new NodeClass(url);
      current.next = urlNode;
      this.currentIndex++;
      this.count = this.currentIndex + 1;
    }
    return null;
  }

  back(steps: number): string {
    const index = this.currentIndex - steps;
    if (index >= 0 && index < this.count) {
      this.currentIndex = index;
      return this.getElementAt(index)?.element;
    }
    this.currentIndex = 0;
    return this.head.element;
  }

  forward(steps: number): string {
    const index = this.currentIndex + steps;
    if (index >= 0 && index < this.count) {
      this.currentIndex = index;
      return this.getElementAt(index)?.element;
    } else {
      this.currentIndex = this.count - 1;
      return this.getElementAt(this.count - 1)?.element;
    }
  }
}

const histroy = new BrowserHistory("leetcode.com");
histroy.visit("google.com");
histroy.visit("facebook.com");
histroy.visit("youtube.com");
histroy.back(1);
histroy.back(1);
histroy.forward(1);
histroy.visit("linkedin.com");
histroy.forward(2);
histroy.back(2);
histroy.back(7);
/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
