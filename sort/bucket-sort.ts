import { insertionSort } from "./insertion-sort";

function createBuckets(array: number[], bucketSize: number = 5): number[][] {
  let minValue = array[0];
  let maxValue = array[0];
  array.forEach((ele) => {
    if (ele < minValue) {
      minValue = ele;
    } else if (ele > maxValue) {
      maxValue = ele;
    }
  });

  const bucketCount = Math.floor((maxValue - minValue) / 5) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  array.forEach((ele) => {
    const curIndex = Math.floor((ele - minValue) / bucketSize);
    buckets[curIndex].push(ele);
  });

  return buckets;
}

function sortBuckets(buckets: number[][]): number[] {
  let arr: number[] = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i].length > 0) {
      arr.push(...insertionSort(buckets[i]));
    }
  }
  return arr;
}

function bucketSort(array: number[], bucketSize: number = 5): number[] {
  if (array.length < 2) {
    return array;
  }
  console.log(array);
  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}

const arr = [5, 2, 1, 7, 3, 6, 8, 10, 2];

console.log(bucketSort(arr));
