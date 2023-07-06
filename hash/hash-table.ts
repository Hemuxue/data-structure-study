import { has, toString } from "lodash";
import Linked from "../link/link";

interface HashTableClass<T = any, val = any> {
  put: (T: any, value: val) => void;
  remove: (T) => void;
  get: (key: T) => void;
}

class ValuePair<T, V> {
  key?: T;
  value?: V;
  constructor(key: T, value: V) {
    this.key = key;
    this.value = value;
  }
}

class HashTable<T, V> implements HashTableClass {
  table: { [key in string]: Linked<ValuePair<T, V>> };

  toStrFn: (str: any) => string;

  constructor(toStrFn = toString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCoode(key: T) {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  hashCode(key) {
    return this.loseloseHashCoode(key);
  }

  put(key: T, value: V) {
    if (key !== null && value !== null) {
      const position = this.hashCode(key);
      if (this.table[position] === null) {
        this.table[position] = new Linked();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key: T) {
    const position = this.hashCode(key);
    const linked = this.table[position];
    if (linked !== null && !linked.isEmpty()) {
      let current = linked.getHead();
      while (current !== null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    const linked = this.table[position];
    if (linked !== null && !linked.isEmpty()) {
      let current = linked.getHead();
      while (current !== null) {
        if (current.element.key === key) {
          linked.remove(current.element);
          if (linked.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }

        current = current.next;
      }
    }
    return false;
  }
}
