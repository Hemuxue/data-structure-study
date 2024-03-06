class LRUCache {
  private map = new Map();
  private capacity = 0;
  private count = 0;
  private flag = 0;
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  getMinData() {
    let temp = { value: null, time: this.flag };
    let key = null;
    this.map.forEach((value, itemKey) => {
      if (value.time < temp.time) {
        key = itemKey;
        temp = value;
      }
    });
    return key;
  }

  get(key: number): number {
    const val = this.map.get(key);
    if (val) {
      this.flag++;
      this.map.set(key, { value: val.value, time: this.flag });
    }

    return val?.value ?? -1;
  }

  put(key: number, value: number): void {
    const val = this.map.get(key);
    if (val) {
      this.flag++;
      this.map.set(key, { value, time: this.flag });
    } else {
      if (this.capacity === this.count) {
        if (this.capacity === 1) {
          this.map.clear();
        } else {
          const minKey = this.getMinData();
          this.map.delete(minKey);
        }

        this.count--;
      }
      this.flag++;
      this.map.set(key, { value, time: this.flag });
      this.count++;
    }
    return null;
  }
}

const lur = new LRUCache(1);
console.log(lur.put(2, 1));
console.log(lur.get(2));
console.log(lur.put(3, 2));
console.log(lur.get(2));
console.log(lur.get(3));

// console.log(lur.get(1));
// console.log(lur.put(3, 3));
// console.log(lur.get(2));
// console.log(lur.put(4, 4));
// console.log(lur.get(1));
// console.log(lur.get(3));
// console.log(lur.get(4));
