/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  class Heap {
    constructor(type = "max") {
      this.data = [];
      this.type = false;
      this.type = type === "max" ? false : true;
    }
    getSize() {
      return this.data.length;
    }
    isEmpty() {
      return this.getSize() !== 0;
    }
    add(e) {
      this.data.push(e);
      this.shitUp(this.data.length - 1);
    }
    extractMax() {
      let max = this.findMax();
      this.swap(0, this.getSize() - 1);
      this.data.pop();
      this.shitDown(0);
      return max;
    }
    findMax() {
      if (this.getSize() === 0) {
        throw new Error("没有元素了");
      }
      return this.data[0];
    }
    parent(index) {
      if (index === 0) {
        throw new Error("根节点没有父亲节点");
      }
      return Math.floor((index - 1) / 2);
    }
    leftChild(index) {
      return index * 2 + 1;
    }
    rightChild(index) {
      return index * 2 + 2;
    }
    shitUp(index) {
      while (index > 0 && this.data[this.parent(index)] < this.data[index]) {
        this.swap(index, this.parent(index));
        index = this.parent(index);
      }
    }
    shitDown(index) {
      let size = this.getSize();
      while (this.leftChild(index) < size) {
        let j = this.leftChild(index);
        if (j + 1 < size && this.data[j] < this.data[j + 1]) {
          j = j + 1;
        }
        // 此时 j 已经存储了左右孩子中大的那一个节点
        if (this.data[j] < this.data[index]) {
          break;
        }
        this.swap(index, j);
        index = j;
      }
    }
    swap(i, j) {
      const temp = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = temp;
    }
  }

  const maxHeap = new Heap();
  nums.forEach((ele) => {
    maxHeap.add(ele);
  });

  const max1 = maxHeap.extractMax();
  const max2 = maxHeap.extractMax();

  return (max1 - 1) * (max2 - 1);
};

const nums = [3, 4, 5, 2];

maxProduct(nums);
